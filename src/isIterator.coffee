debug = require('debug') '@scuba-squad:validation:isIterator'
isBoolean = require './isBoolean'

isIterator = (value) ->
  debug 'call:isIterator(%o)', value

  return isBoolean value?.next?()?.done

module.exports = isIterator