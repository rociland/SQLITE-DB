
const express = require('express');

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const historialRouter = require('./src/routes/historial');
const loginRouter = require('./src/routes/login');
const pacienteRouter = require('./src/routes/paciente');
const tratamientoRouter = require('./src/routes/tratamiento');


let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use((rep, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', historialRouter);
app.use('/', loginRouter);
app.use('/', pacienteRouter);
app.use('/', tratamientoRouter);

module.exports = app;
