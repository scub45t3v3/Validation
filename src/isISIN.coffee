isLuhn = require './isLuhn'

REGEX = /^[a-z\d]{12}$/i

isISIN = (value) ->
  sanitized = value?.toString?().replace /[a-z]/gim, (match) ->
    return "#{parseInt(match, 36)}"

  return REGEX.test(value) && isLuhn(sanitized)

module.exports = isISIN