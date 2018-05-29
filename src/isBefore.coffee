moment = require 'moment'
isFloat = require './isFloat'
isDate = require './isDate'

isBefore = (value, compare = Date.now()) ->
  if isFloat(value) && isFloat(compare)
    return parseFloat(value) < parseFloat(compare)
  else if isDate(value)
    return moment(value).isBefore compare

  return false

module.exports = isBefore