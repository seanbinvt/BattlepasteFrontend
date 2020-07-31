const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
const port = process.env.PORT || '8080';

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.set('port', port);
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
server.listen(port, () => console.log(`Running on :${port}`));