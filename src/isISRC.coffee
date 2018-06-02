debug = require('debug') '@scuba-squad:validation:isISRC'

REGEX = /^[a-z]{2}[a-z\d]{3}\d{7}$/i

isISRC = (value) ->
  debug 'call:isISRC(%o)', value

  return REGEX.test value

module.exports = isISRC