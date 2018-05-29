REGEX = /^[a-f\d]+$/i

isHexadecimal = (value) ->
  return REGEX.test value

module.exports = isHexadecimal