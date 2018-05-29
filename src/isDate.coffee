moment = require 'moment'
isRegExp = require './isRegExp'

isDate = (value) ->
  return !isRegExp(value) && moment(value).isValid()

module.exports = isDate