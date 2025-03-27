const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtils')
hostRouter.get('/add-home', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res) => {
    console.log("Home Registration successfull for: ",req.body, req.body.housename);
    registeredHomes.push({housename: req.body.housename});
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;
module.exports.registeredHomes = registeredHomes;