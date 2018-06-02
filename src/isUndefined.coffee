debug = require('debug') '@scuba-squad:validation:isUndefined'

isUndefined = (value) ->
  debug 'call:isUndefined(%o)', value

  return value == undefined

module.exports = isUndefined