isFloat = require './isFloat'

isLatitude = (value) ->
  return isFloat value,
    min: -90
    max: 90

module.exports = isLatitude