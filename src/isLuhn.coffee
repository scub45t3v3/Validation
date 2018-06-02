_ = require 'underscore'
debug = require('debug') '@scuba-squad:validation:isLuhn'

REGEX = /^\d+$/
DOUBLE = [
  0
  2
  4
  6
  8
  1
  3
  5
  7
  9
]

isLuhn = (value) ->
  debug 'call:isLuhn(%o)', value

  if !REGEX.test(value)
    return false

  sum = _.reduce value?.toString?().split('').reverse(), (memo, val, idx) ->
    val = parseInt val

    if (parseInt(idx) % 2)
      return memo + DOUBLE[val]

    return memo + val
  , 0

  return !(sum % 10)

module.exports = isLuhn