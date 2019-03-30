require('dotenv').config();
const express = require('express');
const twilio = require('./twilio');

const app = express();

app.post('/message', (req, res) => {
  const {body, from, to} = req.body;
  twilio('Something', '+444444444','+4444444444')
  .then((message) => console.log(message.sid))
    .catch(e => console.log(e));
});

app.listen(PORT);