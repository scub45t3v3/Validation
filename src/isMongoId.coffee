isAll = require './isAll'

isMongoId = (value) ->
  return isAll value, 'isHexadecimal', ['isLength', 24]

module.exports = isMongoId