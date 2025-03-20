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
        res.end(`The sum is: ${sum}`);
    });
};

module.exports = sumHandler;