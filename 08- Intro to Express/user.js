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
        req.on('end', ()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFile('user.txt', JSON.stringify(bodyObject), _ => {
                console.log("Data written successfully");
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            });

        });
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