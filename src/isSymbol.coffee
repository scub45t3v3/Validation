debug = require('debug') '@scuba-squad:validation:isSymbol'

REGEX = /^Symbol\(.*\)$/

isSymbol = (value) ->
  debug 'call:isSymbol(%o)', value

  return typeof value == 'symbol' || REGEX.test(value)

module.exports = isSymbol