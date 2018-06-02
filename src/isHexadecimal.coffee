debug = require('debug') '@scuba-squad:validation:isHexadecimal'

REGEX = /^[a-f\d]+$/i

isHexadecimal = (value) ->
  debug 'call:isHexadecimal(%o)', value

  return REGEX.test value

module.exports = isHexadecimal