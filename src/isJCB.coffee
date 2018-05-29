isLuhn = require './isLuhn'

REGEX = /^(?:2131|1800|35\d{3})\d{11}$/

isJCB = (value) ->
  return REGEX.test(value) && isLuhn(value)

module.exports = isJCB