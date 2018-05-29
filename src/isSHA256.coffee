isAll = require './isAll'

isSHA256 = (value) ->
  return isAll value, 'isHexadecimal', ['isLength', 64]

module.exports = isSHA256