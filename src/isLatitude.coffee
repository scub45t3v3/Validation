debug = require('debug') '@scuba-squad:validation:isLatitude'
isFloat = require './isFloat'

isLatitude = (value) ->
  debug 'call:isLatitude(%o)', value

  return isFloat value,
    min: -90
    max: 90

module.exports = isLatitude