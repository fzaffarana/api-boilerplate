const axios = require('axios');
const httpStatus = require('http-status');
const APIError = require('../lib/APIError');

exports.findOne = async id => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .catch(() => {
      throw new APIError({
        message: 'the provided user does not exist',
        status: httpStatus.NOT_FOUND,
      });
    });

  return data;
};
