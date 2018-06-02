debug = require('debug') '@scuba-squad:validation:isEmpty'
{isEmpty} = require 'underscore'

_isEmpty = isEmpty

isEmpty = (value) ->
  debug 'call:isEmpty(%o)', value

  return _isEmpty value

module.exports = isEmpty