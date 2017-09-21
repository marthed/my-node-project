import template from './views/home.hbs';
require('./app/index');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3001;
const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
});

app.listen(port);

const name = 'Erik';