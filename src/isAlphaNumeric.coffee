REGEX = /^[a-z\d]+$/i

isAlphaNumeric = (value) ->
  return value? && REGEX.test value

module.exports = isAlphaNumeric