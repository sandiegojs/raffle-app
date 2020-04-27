const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


let posts = [];

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

app.post('/api', (request, response) => {
    posts.push(request.body);
    console.log(request.body);
    response.end()
});

app.get('/api', (request, response) => {
    console.log(posts);
    response.send(posts);
});

app.get('/results', (request, response) => {
    console.log("hello");
    response.sendFile('results.html', { root: path.join(__dirname, '../public') });
});

app.get('/admin', (request, response) => {
    console.log("hello");
    response.sendFile('admin.html', { root: path.join(__dirname, '../public') });
});

app.get('/data', (request, response) => {
    response.sendFile('info.json', {root: __dirname });
});

module.exports = app;
