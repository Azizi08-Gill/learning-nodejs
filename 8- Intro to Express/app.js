// Core Modules
//const http = require('http');
// No need for http module, express will handle everything for us

// External Module
const express = require('express');
// Local Module
//const requestHandler = require('./user');

const app = express();

app.use((req, res, next) => {
    console.log("In first middleware...", req.url, req.method);
    next();
})

app.use((req, res, next) => {
    console.log("In second middleware...", req.url, req.method);
    res.send("<p>Welcome to Express JS</p>")
})


const PORT = 3007;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

