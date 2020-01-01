'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isMastercard = require('../isMastercard');

// describe #isMastercard
describe('#isMastercard', () => {
  it('should be a function', () => {
    unit
      .function(isMastercard);
  }); // end it

  it('should return true for valid account numbers', () => {
    unit
      .bool(isMastercard('5555555555554444'))
      .isTrue()
      .bool(isMastercard('5105105105105100'))
      .isTrue();
  }); // end it

  it('should return false for invalid account numbers', () => {
    unit
      .bool(isMastercard('378282246310004'))
      .isFalse()
      .bool(isMastercard('378282246310006'))
      .isFalse()
      .bool(isMastercard('371449635398430'))
      .isFalse()
      .bool(isMastercard('371449635398432'))
      .isFalse()
      .bool(isMastercard('5610591081018250'))
      .isFalse()
      .bool(isMastercard('30569309025904'))
      .isFalse()
      .bool(isMastercard('6011111111111117'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isMastercard(14))
      .isFalse()
      .bool(isMastercard(234987))
      .isFalse()
      .bool(isMastercard(-2398))
      .isFalse()
      .bool(isMastercard(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isMastercard(98.00007))
      .isFalse()
      .bool(isMastercard(-32407.3))
      .isFalse()
      .bool(isMastercard(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isMastercard(noop))
      .isFalse()
      .bool(isMastercard(isMastercard))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isMastercard('adsf'))
      .isFalse()
      .bool(isMastercard('34.t'))
      .isFalse()
      .bool(isMastercard('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isMastercard(/asd/))
      .isFalse()
      .bool(isMastercard(/\d+/))
      .isFalse()
      .bool(isMastercard(/1/))
      .isFalse()
      .bool(isMastercard(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isMastercard([]))
      .isFalse()
      .bool(isMastercard([1, 2, 3]))
      .isFalse()
      .bool(isMastercard(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isMastercard