const sumHandler = (req, res) => {
    console.log("1. In Sum Request Handler...");
    const body = [];
    let sum;
    req.on('data', chunk => {
        console.log("2. Chunk has come")
        body.push(chunk)
    });
    req.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyString);
        const bodyObject = Object.fromEntries(params);
        sum = Number(bodyObject.num1) + Number(bodyObject.num2);
        console.log(sum);
        console.log("3. Event has ended");
    });
    console.log("4. Sending the response");
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Addition Calculator</title></head>
        <body>
        <h1>The sum is ${sum}</h1>
        <a href='/'>Go to Home</a>
        </body>
        </html>
    `);
    return res.end();
};

module.exports = sumHandler;