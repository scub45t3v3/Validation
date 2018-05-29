REGEX =  /^(?:[a-f\d]{2}:){5}[a-f\d]{2}$/i

isMACAddress = (value) ->
  return REGEX.test value

module.exports = isMACAddress