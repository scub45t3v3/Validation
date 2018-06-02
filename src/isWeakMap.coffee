debug = require('debug') '@scuba-squad:validation:isWeakMap'

isWeakMap = (value) ->
  debug 'call:isWeakMap(%o)', value

  return value instanceof WeakMap

module.exports = isWeakMap