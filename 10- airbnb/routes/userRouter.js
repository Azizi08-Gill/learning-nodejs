const express = require('express');
const userRouter = express.Router();
//Local Module
const rootDir = require('../utils/pathUtils');

// core module
const path = require('path');

userRouter.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;