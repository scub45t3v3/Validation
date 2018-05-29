isLuhn = require './isLuhn'

REGEX = /^4\d{12}(?:\d{3})?$/

isVisa = (value) ->
  return REGEX.test(value) && isLuhn(value)

module.exports = isVisa