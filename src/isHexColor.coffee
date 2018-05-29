REGEX = /^#?(?:[a-f\d]{3}){1,2}$/i

isHexColor = (value) ->
  return REGEX.test value

module.exports = isHexColor