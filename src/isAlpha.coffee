debug = require('debug') '@scuba-squad:validation:isAlpha'

REGEX = /^[a-z]+$/i

isAlpha = (value) ->
  debug 'call:isAlpha(%o)', value

  return value? && REGEX.test value

module.exports = isAlpha