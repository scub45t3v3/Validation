debug = require('debug') '@scuba-squad:validation:isAlphaNumeric'

REGEX = /^[a-z\d]+$/i

isAlphaNumeric = (value) ->
  debug 'call:isAlphaNumeric(%o)', value

  return value? && REGEX.test value

module.exports = isAlphaNumeric