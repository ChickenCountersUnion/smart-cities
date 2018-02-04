const { Router } = require('express');
// const twilio = require('./twilio');
const search = require('../apiFunctions/search');
const routing = require('../apiFunctions/routing.js');

const router = new Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/notification', (req, res) => {
  let body = req.body;
  twilio.sendMessage(body.message, body.toNumber);
  res.send('Got it!');
})

router.get('/search', search);
router.get('/routing', routing);

module.exports = router;
