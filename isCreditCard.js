(function() {
  var CARDS, isAny, isCreditCard;

  isAny = require('./isAny');

  CARDS = ['isAmericanExpress', 'isDinersClub', 'isDiscover', 'isJCB', 'isMastercard', 'isVisa'];

  isCreditCard = function(value) {
    return isAny(value, ...CARDS);
  };

  module.exports = isCreditCard;

}).call(this);
