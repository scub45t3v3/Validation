pluralize = require 'pluralize'
isString = require './isString'

isPlural = (value) ->
  return isString(value) && pluralize.isPlural(value)

module.exports = isPlural