isLuhn = require './isLuhn'

REGEX = /^3[47][0-9]{13}$/

isAmericanExpress = (value) ->
  return REGEX.test(value) && isLuhn(value)

module.exports = isAmericanExpress