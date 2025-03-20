const sumHandler = require('./sumHandler');

const handler = (req, res)=>{
    console.log(req.url, req.method);
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Addition Calculator</title></head>
            <body>
            <h1>Welcome to the Addition Calculator</h1>
            <a href='/calculator'>Go to calculator</a>
            </body>
            </html>
        `);
        return res.end();
    } else if(req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Addition Calculator</title></head>
            <body>
            <h1>Perform Addition Here</h1>
            <form action="/calculate-result" method="POST">
            <input type="number" name="num1" placeholder="Enter first number" required />
            <input type="number" name="num2" placeholder="Enter second number" required />
            <input type="submit" value="Sum" />
            </form>
            </body>
            </html>
        `);
        return res.end();
    } else if(req.url === '/calculate-result' && req.method === 'POST'){
        return sumHandler(req, res);
    }
     else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Addition Calculator</title></head>
            <body>
            <h1>404 Calculator Page not found</h1>
            <a href='/'>Go to Home</a>
            </body>
            </html>
        `);
        return res.end();
    }
}

export default handler;