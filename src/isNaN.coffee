debug = require('debug') '@scuba-squad:validation:isNaN'

isNaN = (value) ->
  debug 'call:isNaN(%o)', value

  return Number.isNaN value

module.exports = isNaN