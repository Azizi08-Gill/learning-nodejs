const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtils')
hostRouter.get('/add-home', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post('/add-home', (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;