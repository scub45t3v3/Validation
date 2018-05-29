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
  return isAny value, CARDS...

module.exports = isCreditCard