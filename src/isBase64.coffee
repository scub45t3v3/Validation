isRegExp = require './isRegExp'

REGEX = /^[a-z\d+\/]+={0,2}$/i

isBase64 = (value) ->
  return value? && !isRegExp(value) && REGEX.test(value) && !(value?.length % 4)

module.exports = isBase64