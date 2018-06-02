debug = require('debug') '@scuba-squad:validation:isBool'

isBool = (value) ->
  debug 'call:isBool(%o)', value

  return (value instanceof Boolean || value == true || value == false)

module.exports = isBool