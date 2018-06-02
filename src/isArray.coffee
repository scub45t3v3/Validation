debug = require('debug') '@scuba-squad:validation:isArray'

isArray = (value) ->
  debug 'call:isArray(%o)', value

  return Array.isArray value

module.exports = isArray