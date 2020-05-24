const httpStatus = require('http-status');
const { findOne } = require('../services/user');

const getUser = async (req, res, next) => {
  try {
    const user = await findOne(req.params.id);
    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser };
