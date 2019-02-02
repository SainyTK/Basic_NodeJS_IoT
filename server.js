const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;
const HttpStatus = {
    OK: 200,
    BAD_REQUEST: 400
}

const server = express();

server.use(cors());
server.use(bodyParser.json({ limit: '50MB'}))

server.get('/', (req, res) => {
    const status = HttpStatus.OK;
    const message = 'Hello';

    res.status(status).send(message);
});

server.post('/', (req, res) => {
    const status = HttpStatus.OK;
    const message = `Server Got a message`;
    
    console.log(req.body);

    res.status(status).send(message);
});

server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});