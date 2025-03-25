import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    // using if/esle we can render different output on the pages 
    if(req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Enter your details here: </h1>");
        res.write('</body>');
        res.write("</html>");
        return res.end();
    } else if(req.url === '/aurkuch'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>aur kuch bhi nahi bhai</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Bs kr bhai</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3002;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// open localhost:3002 on any browser
// then see the terminal output
