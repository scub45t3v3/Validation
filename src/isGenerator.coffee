debug = require('debug') '@scuba-squad:validation:isGenerator'

isGenerator = (value) ->
  debug 'call:isGenerator(%o)', value

  return (value?.toString?() || "#{value}") == '[object Generator]'

module.exports = isGenerator