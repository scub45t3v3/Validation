'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isAmericanExpress = require('../isAmericanExpress');

// describe #isAmericanExpress
describe('#isAmericanExpress', () => {
  it('should be a function', () => {
    unit
      .function(isAmericanExpress);
  }); // end it

  it('should return true for valid account numbers', () => {
    unit
      .bool(isAmericanExpress('378282246310005'))
      .isTrue()
      .bool(isAmericanExpress('371449635398431'))
      .isTrue()
      .bool(isAmericanExpress('378734493671000'))
      .isTrue();
  }); // end it

  it('should return false for invalid account numbers', () => {
    unit
      .bool(isAmericanExpress('378282246310004'))
      .isFalse()
      .bool(isAmericanExpress('378282246310006'))
      .isFalse()
      .bool(isAmericanExpress('371449635398430'))
      .isFalse()
      .bool(isAmericanExpress('371449635398432'))
      .isFalse()
      .bool(isAmericanExpress('5610591081018250'))
      .isFalse()
      .bool(isAmericanExpress('30569309025904'))
      .isFalse()
      .bool(isAmericanExpress('6011111111111117'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isAmericanExpress(14))
      .isFalse()
      .bool(isAmericanExpress(234987))
      .isFalse()
      .bool(isAmericanExpress(-2398))
      .isFalse()
      .bool(isAmericanExpress(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isAmericanExpress(98.00007))
      .isFalse()
      .bool(isAmericanExpress(-32407.3))
      .isFalse()
      .bool(isAmericanExpress(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isAmericanExpress(noop))
      .isFalse()
      .bool(isAmericanExpress(isAmericanExpress))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isAmericanExpress('adsf'))
      .isFalse()
      .bool(isAmericanExpress('34.t'))
      .isFalse()
      .bool(isAmericanExpress('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isAmericanExpress(/asd/u))
      .isFalse()
      .bool(isAmericanExpress(/\d+/u))
      .isFalse()
      .bool(isAmericanExpress(/1/u))
      .isFalse()
      .bool(isAmericanExpress(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isAmericanExpress([]))
      .isFalse()
      .bool(isAmericanExpress([1, 2, 3]))
      .isFalse()
      .bool(isAmericanExpress(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isAmericanExpress