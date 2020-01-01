'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isLuhn = require('../isLuhn');

// describe #isLuhn
describe('#isLuhn', () => {
  it('should be a function', () => {
    unit
      .function(isLuhn);
  }); // end it

  it('should return true for numbers passing the Luhn algorithm', () => {
    unit
      .bool(isLuhn('378282246310005'))
      .isTrue()
      .bool(isLuhn('371449635398431'))
      .isTrue()
      .bool(isLuhn('378734493671000'))
      .isTrue()
      .bool(isLuhn('30569309025904'))
      .isTrue()
      .bool(isLuhn('38520000023237'))
      .isTrue()
      .bool(isLuhn('6011111111111117'))
      .isTrue()
      .bool(isLuhn('6011000990139424'))
      .isTrue()
      .bool(isLuhn('3530111333300000'))
      .isTrue()
      .bool(isLuhn('3566002020360505'))
      .isTrue()
      .bool(isLuhn('5555555555554444'))
      .isTrue()
      .bool(isLuhn('5105105105105100'))
      .isTrue()
      .bool(isLuhn('4111111111111111'))
      .isTrue()
      .bool(isLuhn('4012888888881881'))
      .isTrue()
      .bool(isLuhn('4222222222222'))
      .isTrue();
  }); // end it

  it('should return true for numbers passing the Luhn algorithm', () => {
    unit
      .bool(isLuhn(378282246310005))
      .isTrue()
      .bool(isLuhn(371449635398431))
      .isTrue()
      .bool(isLuhn(378734493671000))
      .isTrue()
      .bool(isLuhn(30569309025904))
      .isTrue()
      .bool(isLuhn(38520000023237))
      .isTrue()
      .bool(isLuhn(6011111111111117))
      .isTrue()
      .bool(isLuhn(6011000990139424))
      .isTrue()
      .bool(isLuhn(3530111333300000))
      .isTrue()
      .bool(isLuhn(3566002020360505))
      .isTrue()
      .bool(isLuhn(5555555555554444))
      .isTrue()
      .bool(isLuhn(5105105105105100))
      .isTrue()
      .bool(isLuhn(4111111111111111))
      .isTrue()
      .bool(isLuhn(4012888888881881))
      .isTrue()
      .bool(isLuhn(4222222222222))
      .isTrue();
  }); // end it

  it('should return false for numbers not passing the Luhn algorithm', () => {
    unit
      .bool(isLuhn('378282246310004'))
      .isFalse()
      .bool(isLuhn('371449635397431'))
      .isFalse()
      .bool(isLuhn('378734494671000'))
      .isFalse()
      .bool(isLuhn('30569209025904'))
      .isFalse()
      .bool(isLuhn('38520100023237'))
      .isFalse()
      .bool(isLuhn('6011161111111117'))
      .isFalse()
      .bool(isLuhn('6011010990139424'))
      .isFalse()
      .bool(isLuhn('3530161333300000'))
      .isFalse()
      .bool(isLuhn('3566002070360505'))
      .isFalse()
      .bool(isLuhn('5555555535554444'))
      .isFalse()
      .bool(isLuhn('5105105155105100'))
      .isFalse()
      .bool(isLuhn('4111111141111111'))
      .isFalse()
      .bool(isLuhn('4012888848881881'))
      .isFalse()
      .bool(isLuhn('4222222232222'))
      .isFalse();
  }); // end it

  it('should return false for integers not passing the Luhn algorithm', () => {
    unit
      .bool(isLuhn(14))
      .isFalse()
      .bool(isLuhn(234987))
      .isFalse()
      .bool(isLuhn(-2398))
      .isFalse()
      .bool(isLuhn(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isLuhn(98.00007))
      .isFalse()
      .bool(isLuhn(-32407.3))
      .isFalse()
      .bool(isLuhn(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isLuhn(noop))
      .isFalse()
      .bool(isLuhn(isLuhn))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isLuhn('adsf'))
      .isFalse()
      .bool(isLuhn('34.t'))
      .isFalse()
      .bool(isLuhn('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isLuhn(/asd/))
      .isFalse()
      .bool(isLuhn(/\d+/))
      .isFalse()
      .bool(isLuhn(/1/))
      .isFalse()
      .bool(isLuhn(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isLuhn([]))
      .isFalse()
      .bool(isLuhn([1, 2, 3]))
      .isFalse()
      .bool(isLuhn(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isLuhn