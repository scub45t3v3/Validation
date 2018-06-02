debug = require('debug') '@scuba-squad:validation:isMap'

isMap = (value) ->
  debug 'call:isMap(%o)', value

  return value instanceof Map

module.exports = isMap