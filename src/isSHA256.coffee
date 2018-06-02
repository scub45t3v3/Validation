debug = require('debug') '@scuba-squad:validation:isSHA256'
isAll = require './isAll'

isSHA256 = (value) ->
  debug 'call:isSHA256(%o)', value

  return isAll value, 'isHexadecimal', ['isLength', 64]

module.exports = isSHA256