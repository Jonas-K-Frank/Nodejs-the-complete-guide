const express = require('express');

const expressApp = express();

expressApp.use('/users',(req, res, next) => {
    res.send("<h2>Users are here</h2>");
});
expressApp.use('/',(req, res, next) => {
    res.send("<h1>This is the slash page</h1>");
});

expressApp.listen(3000);