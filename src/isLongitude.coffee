isFloat = require './isFloat'

isLongitude = (value) ->
  return isFloat value,
    min: -180
    max: 180

module.exports = isLongitude