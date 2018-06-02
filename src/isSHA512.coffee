debug = require('debug') '@scuba-squad:validation:isSHA512'
isAll = require './isAll'

isSHA512 = (value) ->
  debug 'call:isSHA512(%o)', value

  return isAll value, 'isHexadecimal', ['isLength', 128]

module.exports = isSHA512