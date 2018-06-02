debug = require('debug') '@scuba-squad:validation:isMongoId'
isAll = require './isAll'

isMongoId = (value) ->
  debug 'call:isMongoId(%o)', value

  return isAll value, 'isHexadecimal', ['isLength', 24]

module.exports = isMongoId