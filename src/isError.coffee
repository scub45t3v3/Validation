debug = require('debug') '@scuba-squad:validation:isError'

isError = (value) ->
  debug 'call:isError(%o)', value

  return value instanceof Error

module.exports = isError