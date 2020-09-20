'use strict';
require('dotenv').config(); // will provide access for all files.

const express = require('express');
const bodyParser = require('body-parser');

const port = 8989;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Hello. Andrii Lundiak here, with Facebook Friends map experiments!');
});

app.get('/webhook', (request, response) => {
    const { query } = request;

    const VERIFY_TOKEN = '1489296111'; // ANY hardcode value to be the same from code and user entered pn page field.

    let mode = query['hub.mode'];
    let verifyToken = query['hub.verify_token'];
    let challenge = query['hub.challenge'];

    console.log('mode:', mode);
    console.log('verifyToken from request:', verifyToken);
    console.log('challenge from request:', challenge);

    if (mode && verifyToken) {
        if (mode === 'subscribe' && verifyToken === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            response.status(200).send(challenge);

        } else {
            response.sendStatus(403);
        }
    }
});

app.post('/webhook', (request, response) => {
    console.log('Request', request)
    const { body } = request;
    console.log('Body', body);

    if (body.object === 'page') {
        response.status(200).send('EVENT_RECEIVED');
    } else {
        response.sendStatus(404); // TODO
    }
});

app.listen(port, () => console.log(`Facebook Friends Map app listening on port ${port}!`));