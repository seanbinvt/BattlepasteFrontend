const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
const port = process.env.PORT || '3000';


app.use(express.static('/build'));


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port)