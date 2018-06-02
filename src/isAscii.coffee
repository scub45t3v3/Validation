debug = require('debug') '@scuba-squad:validation:isAscii'

REGEX =  /^[\x00-\x7F]+$/

isAscii = (value) ->
  debug 'call:isAscii(%o)', value

  return value? && REGEX.test value

module.exports = isAscii