const express = require('express');
const path = require('path');
const routes = require('./routes')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3002, ()=> console.log('Server rodando na porta 3002!'))