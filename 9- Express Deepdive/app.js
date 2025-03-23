// Core Modules
//const http = require('http');
// No need for http module, express will handle everything for us

// External Module
import express from 'express';
// Local Module
//const requestHandler = require('./user');

const app = express();

app.use("/submit-details", (req, res) => {
    console.log("In second middleware...", req.url, req.method);
    res.send("<p>Submit your details here</p>");
});

app.use("/", (req, res) => {
    console.log("In first middleware...", req.url, req.method);
    res.send("<p>Welcome to Express JS</p>");
});

app.use("/submit-details",(req, res, next) => {
    console.log("In second middleware...", req.url, req.method);
    res.send("<p>Submit your details here</p>")
})


const PORT = 3007;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

