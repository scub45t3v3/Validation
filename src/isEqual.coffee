debug = require('debug') '@scuba-squad:validation:isEqual'
{isEqual} = require 'underscore'

_isEqual = isEqual

isEqual = (value, compare) ->
  debug 'call:isEqual(%o, %o)', value, compare

  return _isEqual value, compare

module.exports = isEqual