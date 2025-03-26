const express = require('express');
const contactRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtils')
contactRouter.get('/contact-us', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});
contactRouter.post('/contact-us', (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'contactSuccess.html'));
});
module.exports = contactRouter;