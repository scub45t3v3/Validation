isAll = require './isAll'

isMD5 = (value) ->
  return isAll value, 'isHexadecimal', ['isLength', 32]

module.exports = isMD5