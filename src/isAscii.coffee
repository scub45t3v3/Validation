REGEX =  /^[\x00-\x7F]+$/

isAscii = (value) ->
  return value? && REGEX.test value

module.exports = isAscii