const path = require('path');

const express = require('express');

const rootDir = require('../utilities/path');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-products.html'));
});

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;