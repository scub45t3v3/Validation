isAll = require './isAll'

isSHA384 = (value) ->
  return isAll value, 'isHexadecimal', ['isLength', 96]

module.exports = isSHA384