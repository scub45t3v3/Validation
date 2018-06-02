debug = require('debug') '@scuba-squad:validation:isPlural'
pluralize = require 'pluralize'
isString = require './isString'

isPlural = (value) ->
  debug 'call:isPlural(%o)', value

  return isString(value) && pluralize.isPlural(value)

module.exports = isPlural