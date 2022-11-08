const { MetafiClasses, errorMap } = require('@metafi/constants');
const { PackageError } = require('@metafi/metafi-common-utils');

const axios = require('axios');


/**
 * @param {string|null|undefined} message
 */
 module.exports.createError = (errorType, responseStatusCode,message) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    statusCode: 0,
    error:{
      errorType,
      message
    }
  }),
});

module.exports.createResponse = (data) => ({
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
});

