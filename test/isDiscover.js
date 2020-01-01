'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isDiscover = require('../isDiscover');

// describe #isDiscover
describe('#isDiscover', () => {
  it('should be a function', () => {
    unit
      .function(isDiscover);
  }); // end it

  it('should return true for valid account numbers', () => {
    unit
      .bool(isDiscover('6011111111111117'))
      .isTrue()
      .bool(isDiscover('6011000990139424'))
      .isTrue();
  }); // end it

  it('should return false for invalid account numbers', () => {
    unit
      .bool(isDiscover('378282246310004'))
      .isFalse()
      .bool(isDiscover('378282246310006'))
      .isFalse()
      .bool(isDiscover('371449635398430'))
      .isFalse()
      .bool(isDiscover('371449635398432'))
      .isFalse()
      .bool(isDiscover('5610591081018250'))
      .isFalse()
      .bool(isDiscover('30569309025904'))
      .isFalse()
      .bool(isDiscover('6011111111111116'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isDiscover(14))
      .isFalse()
      .bool(isDiscover(234987))
      .isFalse()
      .bool(isDiscover(-2398))
      .isFalse()
      .bool(isDiscover(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isDiscover(98.00007))
      .isFalse()
      .bool(isDiscover(-32407.3))
      .isFalse()
      .bool(isDiscover(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isDiscover(noop))
      .isFalse()
      .bool(isDiscover(isDiscover))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isDiscover('adsf'))
      .isFalse()
      .bool(isDiscover('34.t'))
      .isFalse()
      .bool(isDiscover('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isDiscover(/asd/))
      .isFalse()
      .bool(isDiscover(/\d+/))
      .isFalse()
      .bool(isDiscover(/1/))
      .isFalse()
      .bool(isDiscover(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isDiscover([]))
      .isFalse()
      .bool(isDiscover([1, 2, 3]))
      .isFalse()
      .bool(isDiscover(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isDiscover