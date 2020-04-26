const express = require('express');
const fs = require('fs');
const app = express();


app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

app.post('/api', (request, response) => {
    response.end()
});

app.get('/api', (request, response) => {
    response.end()
});

app.get('/', (request, response) => {
    response.sendFile('index.html', {root: __dirname })
});

app.get('/results', (request, response) => {
    response.sendFile('results.html', {root: __dirname })
});

app.get('/data', (request, response) => {
    response.sendFile('info.json', {root: __dirname });
});

module.exports = app;