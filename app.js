const express = require('express');
const app =express();
const calenderRoutes = require('./api/routes/calender');

app.use('/calender', calenderRoutes);

module.exports=app;