debug = require('debug') '@scuba-squad:validation:isFunction'

isFunction = (value) ->
  debug 'call:isFunction(%o)', value

  return typeof value == 'function'

module.exports = isFunction