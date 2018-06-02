debug = require('debug') '@scuba-squad:validation:isDinersClub'
isLuhn = require './isLuhn'

REGEX = /^3(?:0[0-5]|[68]\d)\d{11}$/

isDinersClub = (value) ->
  debug 'call:isDinersClub(%o)', value

  return REGEX.test(value) && isLuhn(value)

module.exports = isDinersClub