debug = require('debug') '@scuba-squad:validation:isString'

isString = (value) ->
  debug 'call:isString(%o)', value

  return value instanceof String || typeof value == 'string'

module.exports = isString