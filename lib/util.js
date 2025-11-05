const { createHash, randomBytes } = require('crypto')
const { env } = require('./../env')

function createId (url) {
  const md5 = createHash('md5')
  md5.update(url)
  return `_${md5.digest('hex')}`
}

function createSessionId () {
  return randomBytes(32).toString('hex')
}

function concatURL (path) {
  // Remove trailing slash and if we get double sslash at start
  return `${env.BASEPATH}${path}`.replace(/\/$/, '').replace(/\/\//, '/')
};

module.exports = { createId, createSessionId, concatURL }
