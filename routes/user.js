const express = require('express');
const { getUser } = require('../controllers/user');

const router = express.Router();

router
  .route('/:id')
  .get(getUser);

module.exports = router;
