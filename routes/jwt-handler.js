
'use strict';

const { createResponse, createError } = require('../util');
const { errorMap, MetafiClasses } = require('@metafi/constants');
var jwt = require('jsonwebtoken');
const { v4:uuidv4 } = require('uuid');
const { PackageError } = require('@metafi/metafi-common-utils');
const secretKey = 'thisisatestsecretkey'
module.exports.testMerchantAuthenticate = async (event,context) => {

  try{
    var userIdentifier = 'metafitest@gmail.com'
    var jwtToken = jwt.sign({userIdentifier:userIdentifier},secretKey,{ expiresIn:30 });

    return createResponse({
        userIdentifier:userIdentifier,
        jwtToken
    })
    

  }catch(error){
    console.log('ERROR_TEST_MERCHANT_AUTHENTICATE',error)
    var errorObject = PackageError(error)
    return createError(errorObject[0],errorObject[1],errorObject[2])
  }
};

module.exports.testMerchantVerifyJwt = async (event,context) => {

    try{
        var {token} = JSON.parse(event.body)
        console.log('jwtToken',token)
        var {userIdentifier} = jwt.verify(token, secretKey);
        console.log('userIdentifier',userIdentifier)
      return createResponse({
        userIdentifier
      })
      
  
    }catch(error){
      console.log('ERROR_TEST_MERCHANT_AUTHENTICATE',error)
      var errorObject = PackageError(error)
      console.log('errorObject',errorObject)
      return createError(errorObject[0],errorObject[1],errorObject[2])
    }
  };
  