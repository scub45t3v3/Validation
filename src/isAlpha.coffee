REGEX = /^[a-z]+$/i

isAlpha = (value) ->
  return value? && REGEX.test value

module.exports = isAlpha