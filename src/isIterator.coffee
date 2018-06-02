debug = require('debug') '@scuba-squad:validation:isIterator'
isBool = require './isBool'

isIterator = (value) ->
  debug 'call:isIterator(%o)', value

  return isBool value?.next?()?.done

module.exports = isIterator