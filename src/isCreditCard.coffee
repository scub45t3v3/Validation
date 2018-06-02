debug = require('debug') '@scuba-squad:validation:isCreditCard'
isAny = require './isAny'

CARDS = [
  'isAmericanExpress'
  'isDinersClub'
  'isDiscover'
  'isJCB'
  'isMastercard'
  'isVisa'
]

isCreditCard = (value) ->
  debug 'call:isCreditCard(%o)', value

  return isAny value, CARDS...

module.exports = isCreditCard