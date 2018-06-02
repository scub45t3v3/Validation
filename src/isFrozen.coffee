debug = require('debug') '@scuba-squad:validation:isFrozen'

isFrozen = (value) ->
  debug 'call:isFrozen(%o)', value

  return Object.isFrozen value

module.exports = isFrozen