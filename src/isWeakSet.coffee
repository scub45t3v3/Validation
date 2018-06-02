debug = require('debug') '@scuba-squad:validation:isWeakSet'

isWeakSet = (value) ->
  debug 'call:isWeakSet(%o)', value

  return value instanceof WeakSet

module.exports = isWeakSet