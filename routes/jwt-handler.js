'use strict';

const { createResponse, createError } = require('../util');
var jwt = require('jsonwebtoken');

const secretKey = 'thisisatestsecretkey'

module.exports.testMerchantAuthenticate = async (event, context) => {

    try {
        var userIdentifier = 'metafitest@gmail.com'
        var jwtToken = jwt.sign(
            { userIdentifier: userIdentifier },
            secretKey,
            { expiresIn:30 }
        );

        return createResponse({
            userIdentifier: userIdentifier,
            jwtToken
        })
    } catch(error) {
        console.log('ERROR_TEST_MERCHANT_AUTHENTICATE',error)
        return createError(error.message)
    }
};

module.exports.testMerchantVerifyJwt = async (event, context) => {

    try {
        var {token} = JSON.parse(event.body)
        console.log('jwtToken', token)
        var {userIdentifier} = jwt.verify(token, secretKey);
        console.log('userIdentifier', userIdentifier)
        
        return createResponse({
            userIdentifier
        })
    } catch(error) {
        console.log('ERROR_TEST_MERCHANT_AUTHENTICATE',error)
        return createError(error.message)
    }
  };
  