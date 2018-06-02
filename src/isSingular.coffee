debug = require('debug') '@scuba-squad:validation:isSingular'
pluralize = require 'pluralize'
isString = require './isString'

isSingular = (value) ->
  debug 'call:isSingular(%o)', value

  return isString(value) && pluralize.isSingular(value)

module.exports = isSingular