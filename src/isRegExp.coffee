debug = require('debug') '@scuba-squad:validation:isRegExp'

isRegExp = (value) ->
  debug 'call:isRegExp(%o)', value

  return value instanceof RegExp

module.exports = isRegExp