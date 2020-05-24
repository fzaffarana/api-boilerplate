const express = require('express');
const httpStatus = require('http-status');
const userRoute = require('./user');

const router = express.Router();

// Healthcheck
router.get('/healthcheck', (req, res) => res.status(httpStatus.OK).json({ status: 'OK' }));

// Api routes
router.use('/user', userRoute);

module.exports = router;
