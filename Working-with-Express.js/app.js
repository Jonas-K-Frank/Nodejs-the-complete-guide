const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const expressApp = express();

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

expressApp.use(bodyParser.urlencoded({extended: false}));
expressApp.use(express.static(path.join(__dirname, 'public')));

expressApp.use('/admin', adminRoute);
expressApp.use(shopRoute);

expressApp.use((req, res, next) => {
res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

expressApp.listen(3000);