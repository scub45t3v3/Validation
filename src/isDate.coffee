debug = require('debug') '@scuba-squad:validation:isDate'
moment = require 'moment'
isRegExp = require './isRegExp'

isDate = (value) ->
  debug 'call:isDate(%o)', value

  return !isRegExp(value) && moment(value).isValid()

module.exports = isDate