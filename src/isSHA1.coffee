isAll = require './isAll'

isSHA1 = (value) ->
  return isAll value, 'isHexadecimal', ['isLength', 40]

module.exports = isSHA1