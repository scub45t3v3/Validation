debug = require('debug') '@scuba-squad:validation:isAfter'
moment = require 'moment'
isFloat = require './isFloat'
isDate = require './isDate'

isAfter = (value, compare = Date.now()) ->
  debug 'call:isAfter(%o, %o)', value, compare

  if isFloat(value) && isFloat(compare)
    return parseFloat(value) > parseFloat(compare)
  else if isDate(value)
    return moment(value).isAfter compare

  return false

module.exports = isAfter