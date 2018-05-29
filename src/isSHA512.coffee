isAll = require './isAll'

isSHA512 = (value) ->
  return isAll value, 'isHexadecimal', ['isLength', 128]

module.exports = isSHA512