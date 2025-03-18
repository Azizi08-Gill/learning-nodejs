import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if(req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Enter your details here: </h1>");
        res.write('<from action="/submit-detail" method="POST">');
        res.write('<input type="text name="username" placeholder="Enter your name">');
        res.write('<label for="male">Male:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Female:</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<input type="submit" value="Submit">');
        res.write('</from>');
        res.write('</body>');
        res.write("</html>");
        return res.end();  // must write this after end of every req, res
    } else if(req.url==='/submit-details' && req.method==='POST'){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Thank you for entering your details</h1>");
        res.write('</body>');
        res.write("</html>");
        return res.end();
    }
});

const PORT = 3004;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// open localhost:3002 on any browser
// then see the terminal output
