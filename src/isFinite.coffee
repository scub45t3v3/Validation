isFloat = require './isFloat'

isFinite = (value) ->
  return isFloat(value) && Number.isFinite parseFloat(value)

module.exports = isFinite