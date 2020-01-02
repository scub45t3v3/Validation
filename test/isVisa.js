'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isVisa = require('../isVisa');

// describe #isVisa
describe('#isVisa', () => {
  it('should be a function', () => {
    unit
      .function(isVisa);
  }); // end it

  it('should return true for valid account numbers', () => {
    unit
      .bool(isVisa('4111111111111111'))
      .isTrue()
      .bool(isVisa('4012888888881881'))
      .isTrue()
      .bool(isVisa('4222222222222'))
      .isTrue();
  }); // end it

  it('should return false for invalid account numbers', () => {
    unit
      .bool(isVisa('378282246310004'))
      .isFalse()
      .bool(isVisa('378282246310006'))
      .isFalse()
      .bool(isVisa('371449635398430'))
      .isFalse()
      .bool(isVisa('371449635398432'))
      .isFalse()
      .bool(isVisa('5610591081018250'))
      .isFalse()
      .bool(isVisa('30569309025904'))
      .isFalse()
      .bool(isVisa('6011111111111117'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isVisa(14))
      .isFalse()
      .bool(isVisa(234987))
      .isFalse()
      .bool(isVisa(-2398))
      .isFalse()
      .bool(isVisa(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isVisa(98.00007))
      .isFalse()
      .bool(isVisa(-32407.3))
      .isFalse()
      .bool(isVisa(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isVisa(noop))
      .isFalse()
      .bool(isVisa(isVisa))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isVisa('adsf'))
      .isFalse()
      .bool(isVisa('34.t'))
      .isFalse()
      .bool(isVisa('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isVisa(/asd/u))
      .isFalse()
      .bool(isVisa(/\d+/u))
      .isFalse()
      .bool(isVisa(/1/u))
      .isFalse()
      .bool(isVisa(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isVisa([]))
      .isFalse()
      .bool(isVisa([1, 2, 3]))
      .isFalse()
      .bool(isVisa(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isVisa