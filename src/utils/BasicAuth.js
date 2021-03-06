'use strict'
const customResponse = require('./CustomResponse')

/**
 * verifyAuthorization compares Authorization headers vs env variables
 * @param {String} authorizationHeader basic auth header
 * @returns {Void} only throws if auth is wrong
 */
const verifyAuthorization = (authorizationHeader) => {
  if (!authorizationHeader) {
    throw customResponse.errorResponse(401, 'unauthorized', {})
  }

  const encodedCreds = authorizationHeader.split(' ')[1]
  const [requestUser, requestPassword] = Buffer.from(encodedCreds, 'base64').toString().split(':')

  if (
    !(
      requestUser === process.env.BASIC_AUTH_USERNAME &&
      requestPassword === process.env.BASIC_AUTH_PASSWORD
    )
  ) {
    throw customResponse.errorResponse(401, 'unauthorized', {})
  }
}

module.exports = {
  verifyAuthorization
}
