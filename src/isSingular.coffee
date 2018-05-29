pluralize = require 'pluralize'
isString = require './isString'

isSingular = (value) ->
  return isString(value) && pluralize.isSingular(value)

module.exports = isSingular