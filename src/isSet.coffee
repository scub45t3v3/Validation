debug = require('debug') '@scuba-squad:validation:isSet'

isSet = (value) ->
  debug 'call:isSet(%o)', value

  return value instanceof Set

module.exports = isSet