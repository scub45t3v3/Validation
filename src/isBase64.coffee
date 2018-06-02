debug = require('debug') '@scuba-squad:validation:isBase64'
isRegExp = require './isRegExp'

REGEX = /^[a-z\d+\/]+={0,2}$/i

isBase64 = (value) ->
  debug 'call:isBase64(%o)', value

  return value? && !isRegExp(value) && REGEX.test(value) && !(value?.length % 4)

module.exports = isBase64