debug = require('debug') '@scuba-squad:validation:debug'
isAll = require './isAll'

isSHA1 = (value) ->
  debug 'call:isSHA1(%o)', value

  return isAll value, 'isHexadecimal', ['isLength', 40]

module.exports = isSHA1