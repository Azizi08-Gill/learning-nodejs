const sumHandler = (req, res) => {
    console.log("In Sum Request Handler...");
    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyString);
        const bodyObject = Object.fromEntries(params);
        const sum = Number(bodyObject.num1) + Number(bodyObject.num2);
        console.log(sum);
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Addition Calculator</title></head>
            <body>
            <h1>The sum is ${sum}</h1>
            <a href='/'>Go to Home</a>
            <a href='calculate-result'>Go to Sum</a>
            </body>
            </html>
        `);
        return res.end();
    });
};

module.exports = sumHandler;