debug = require('debug') '@scuba-squad:validation:isMD5'
isAll = require './isAll'

isMD5 = (value) ->
  debug 'call:isMD5(%o)', value

  return isAll value, 'isHexadecimal', ['isLength', 32]

module.exports = isMD5