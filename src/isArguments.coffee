debug = require('debug') '@scuba-squad:validation:isArguments'

isArguments = (value) ->
  debug 'call:isArguments(%o)', value

  return (value?.toString?() || "#{value}") == '[object Arguments]'

module.exports = isArguments