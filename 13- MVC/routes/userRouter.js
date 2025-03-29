const express = require('express');
const userRouter = express.Router();
//Local Module
// No need for root directory anymore
//const rootDir = require('../utils/pathUtils');

// core module
const path = require('path');

const {registeredHomes} = require('./hostRouter');

userRouter.get('/', (req, res) => {
    console.log(registeredHomes);
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb'});
});

module.exports = userRouter;