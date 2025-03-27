const express = require('express');
const userRouter = express.Router();
//Local Module
const rootDir = require('../utils/pathUtils');

// core module
const path = require('path');

const {registeredHomes} = require('./hostRouter');

userRouter.get('/', (req, res) => {
    console.log(registeredHomes);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;