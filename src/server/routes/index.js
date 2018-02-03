const fs = require('fs');
const path = require('path');
const { Router } = require('express');

const staticPath = process.env.STATIC_PATH || path.join(__dirname, '../../../dist');

const manifest = require(`${staticPath}/manifest`);

const router = new Router();

router.get('/', (req, res) => {
  res.render('index', { manifest });
});

module.exports = router;
