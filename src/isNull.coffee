debug = require('debug') '@scuba-squad:validation:isNull'

isNull = (value) ->
  debug 'call:isNull(%o)', value

  return value == null

module.exports = isNull