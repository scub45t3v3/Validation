isLuhn = require './isLuhn'

REGEX = /^6(?:011|5\d{2})\d{12}$/

isDiscover = (value) ->
  return REGEX.test(value) && isLuhn(value)

module.exports = isDiscover