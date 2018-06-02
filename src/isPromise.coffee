debug = require('debug') '@scuba-squad:validation:isPromise'

isPromise = (value) ->
  debug 'call:isPromise(%o)', value

  return value instanceof Promise

module.exports = isPromise