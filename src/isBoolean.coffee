debug = require('debug') '@scuba-squad:validation:isBoolean'

isBoolean = (value) ->
  debug 'call:isBoolean(%o)', value

  return (value instanceof Boolean || value == true || value == false)

module.exports = isBoolean