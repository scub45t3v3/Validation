'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isCreditCard = require('../isCreditCard');

  // describe #isCreditCard
  describe('#isCreditCard', () => {
    it('should be a function', () => {
      unit
        .function(isCreditCard);
    }); // end it

    it('should return true for valid account numbers', () => {
      unit
        .bool(isCreditCard('378282246310005'))
        .isTrue()
        .bool(isCreditCard('371449635398431'))
        .isTrue()
        .bool(isCreditCard('378734493671000'))
        .isTrue()
        .bool(isCreditCard('30569309025904'))
        .isTrue()
        .bool(isCreditCard('38520000023237'))
        .isTrue()
        .bool(isCreditCard('6011111111111117'))
        .isTrue()
        .bool(isCreditCard('6011000990139424'))
        .isTrue()
        .bool(isCreditCard('3530111333300000'))
        .isTrue()
        .bool(isCreditCard('3566002020360505'))
        .isTrue()
        .bool(isCreditCard('5555555555554444'))
        .isTrue()
        .bool(isCreditCard('5105105105105100'))
        .isTrue()
        .bool(isCreditCard('4111111111111111'))
        .isTrue()
        .bool(isCreditCard('4012888888881881'))
        .isTrue()
        .bool(isCreditCard('4222222222222'))
        .isTrue();
    }); // end it

    it('should return false for invalid account numbers', () => {
      unit
        .bool(isCreditCard('378282246310004'))
        .isFalse()
        .bool(isCreditCard('371449635397431'))
        .isFalse()
        .bool(isCreditCard('378734494671000'))
        .isFalse()
        .bool(isCreditCard('30569209025904'))
        .isFalse()
        .bool(isCreditCard('38520100023237'))
        .isFalse()
        .bool(isCreditCard('6011161111111117'))
        .isFalse()
        .bool(isCreditCard('6011010990139424'))
        .isFalse()
        .bool(isCreditCard('3530161333300000'))
        .isFalse()
        .bool(isCreditCard('3566002070360505'))
        .isFalse()
        .bool(isCreditCard('5555555535554444'))
        .isFalse()
        .bool(isCreditCard('5105105155105100'))
        .isFalse()
        .bool(isCreditCard('4111111141111111'))
        .isFalse()
        .bool(isCreditCard('4012888848881881'))
        .isFalse()
        .bool(isCreditCard('4222222232222'))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isCreditCard(14))
        .isFalse()
        .bool(isCreditCard(234987))
        .isFalse()
        .bool(isCreditCard(-2398))
        .isFalse()
        .bool(isCreditCard(2))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isCreditCard(98.00007))
        .isFalse()
        .bool(isCreditCard(-32407.3))
        .isFalse()
        .bool(isCreditCard(0.1))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isCreditCard(noop))
        .isFalse()
        .bool(isCreditCard(isCreditCard))
        .isFalse();
    }); // end it

    it('should return false for invalid strings', () => {
      unit
        .bool(isCreditCard('adsf'))
        .isFalse()
        .bool(isCreditCard('34.t'))
        .isFalse()
        .bool(isCreditCard('-45fg'))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isCreditCard(/asd/))
        .isFalse()
        .bool(isCreditCard(/\d+/))
        .isFalse()
        .bool(isCreditCard(/1/))
        .isFalse()
        .bool(isCreditCard(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isCreditCard([]))
        .isFalse()
        .bool(isCreditCard([1, 2, 3]))
        .isFalse()
        .bool(isCreditCard(['a', 5, {}]))
        .isFalse();
    }); // end it
  }); // end describe #isCreditCard
})(); // end IIFE