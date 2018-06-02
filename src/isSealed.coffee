debug = require('debug') '@scuba-squad:validation:isSealed'

isSealed = (value) ->
  debug 'call:isSealed(%o)', value

  return Object.isSealed value

module.exports = isSealed