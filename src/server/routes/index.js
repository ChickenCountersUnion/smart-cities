const fs = require('fs');
const path = require('path');
const { Router } = require('express');
const twilio = require('./twilio');
const search = require('../apiFunctions/search');

const staticPath = process.env.STATIC_PATH || path.join(__dirname, '../../../dist');

const manifest = require(`${staticPath}/manifest`);

const router = new Router();

router.get('/', (req, res) => {
  res.render('index', { manifest });
});

router.post('/notification', (req, res) => {
  let body = req.body;
  twilio.sendMessage(body.message, body.toNumber);
  res.send('Got it!');
})

router.get('/search', search);

module.exports = router;
