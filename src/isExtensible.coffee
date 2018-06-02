debug = require('debug') '@scuba-squad:validation:isExtensible'

isExtensible = (value) ->
  debug 'call:isExtensible(%o)', value

  return Object.isExtensible value

module.exports = isExtensible