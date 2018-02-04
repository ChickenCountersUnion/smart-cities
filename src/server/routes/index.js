const { Router } = require('express');
// const twilio = require('./twilio');
const search = require('../apiFunctions/search');
const db = require('../../db');
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

router.post('/location', db.savePickup);
router.post('/pickup', db.pickUp);

router.get('/driver', db.getDriverLocation);
router.post('/driver', db.saveDriverLocation);

// router.post('/queue', addQueue);

module.exports = router;
