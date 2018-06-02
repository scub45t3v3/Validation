debug = require('debug') '@scuba-squad:validation:isSHA384'
isAll = require './isAll'

isSHA384 = (value) ->
  debug 'call:isSHA384(%o)', value

  return isAll value, 'isHexadecimal', ['isLength', 96]

module.exports = isSHA384