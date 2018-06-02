debug = require('debug') '@scuba-squad:validation:isIterable'

isIterable = (value) ->
  debug 'call:isIterable(%o)', value

  return typeof value[Symbol.iterator] == 'function'

module.exports = isIterable