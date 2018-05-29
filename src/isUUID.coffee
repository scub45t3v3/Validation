REGEX = /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i

isUUID = (value) ->
  return REGEX.test value

module.exports = isUUID