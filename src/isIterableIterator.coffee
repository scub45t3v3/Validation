debug = require('debug') '@scuba-squad:validation:isIterableIterator'

isIterableIterator = (value) ->
  debug 'call:isIterableIterator(%o)', value

  return value?[Symbol.iterator]?() == value

module.exports = isIterableIterator