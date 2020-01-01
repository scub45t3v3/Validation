'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isCreditCard');
const isAny = require('./isAny');
const CARDS = [
  'isAmericanExpress',
  'isDinersClub',
  'isDiscover',
  'isJCB',
  'isMastercard',
  'isVisa',
];

const isCreditCard = (value) => {
  debug('call:isCreditCard(%o)', value);

  return isAny(value, ...CARDS);
};

// export as commonjs module
module.exports = isCreditCard;