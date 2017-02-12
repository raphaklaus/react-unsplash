const express = require('express'),
    bodyParser = require('body-parser');

var app = express(),
    port = (process.env.PORT || 80);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/api/save', (request, response) => {
  // todo: save
});

app.get('/api/images', (request, response) => {
  // todo: find images
});

app.listen(port);
