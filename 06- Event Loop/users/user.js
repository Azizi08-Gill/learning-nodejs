// Removed unused 'error' import
import fs from 'fs';

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);
    if(req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Enter your details here: </h1>");
        res.write('<form action="/submit-detail" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name">');
        res.write('<label for="male">Male:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Female:</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write("</html>");
        return res.end();  // must write this after end of every req, res
    } else if(req.url==='/submit-detail' && req.method==='POST'){
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        })
        // now whenever we want to end the listening or we want to end the listening process
        // when we know that all chunks have arrived, then we need to end the listening process
        req.on('end', ()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            // now as we are getting buffer, so to get actual value, we will use params
            const params = new URLSearchParams(fullBody);
            //const bodyObject = {};  // to store the key-value pairs from form data
            // for(const [key, value] of params.entries()){
            //     bodyObject[key] = value;
            //     console.log(bodyObject);
            // }
            //////////There is also a better way to do this parsing request
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFile('user.txt', JSON.stringify(bodyObject), _ => {
                console.log("Data written successfully");
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            }); // as file write is a function of
            // worker thread, and not main event loop does this so, no need to use sync beacuse it will block
            // the whole event loop and other functions won't be able to be executed

        });
        // now created a file and saved the user's input into the user.txt file 
        // we can also set header as: 
        // res.setHeader('Location', '/');
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Thank you for entering your details</h1>");
        res.write('</body>');
        res.write("</html>");
        return res.end();
    }
};

module.exports = userRequestHandler;