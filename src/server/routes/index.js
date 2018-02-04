const { Router } = require('express');
// const twilio = require('./twilio');
const search = require('../apiFunctions/search');
<<<<<<< HEAD
const db = require('../../db');
=======
const routing = require('../apiFunctions/routing.js');
>>>>>>> 3cf6af80d95580d818f70349aa0a1e781467ed46

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
