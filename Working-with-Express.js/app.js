const express = require('express');

const expressApp = express();

expressApp.use('/',(req, res, next) => {
    console.log("This always runs because it is on top");
    next();
});

expressApp.use('/add-product',(req, res, next) => {
    res.send("<h2>Add a product</h2>");
});

expressApp.use('/',(req, res, next) => {
    res.send("<h1>Hello from express</h1>");
});

expressApp.listen(3000);