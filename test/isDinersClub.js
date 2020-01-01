'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isDinersClub = require('../isDinersClub');

// describe #isDinersClub
describe('#isDinersClub', () => {
  it('should be a function', () => {
    unit
      .function(isDinersClub);
  }); // end it

  it('should return true for valid account numbers', () => {
    unit
      .bool(isDinersClub('30569309025904'))
      .isTrue()
      .bool(isDinersClub('38520000023237'))
      .isTrue();
  }); // end it

  it('should return false for invalid account numbers', () => {
    unit
      .bool(isDinersClub('378282246310004'))
      .isFalse()
      .bool(isDinersClub('378282246310006'))
      .isFalse()
      .bool(isDinersClub('371449635398430'))
      .isFalse()
      .bool(isDinersClub('371449635398432'))
      .isFalse()
      .bool(isDinersClub('5610591081018250'))
      .isFalse()
      .bool(isDinersClub('30569309025903'))
      .isFalse()
      .bool(isDinersClub('6011111111111117'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isDinersClub(14))
      .isFalse()
      .bool(isDinersClub(234987))
      .isFalse()
      .bool(isDinersClub(-2398))
      .isFalse()
      .bool(isDinersClub(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isDinersClub(98.00007))
      .isFalse()
      .bool(isDinersClub(-32407.3))
      .isFalse()
      .bool(isDinersClub(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isDinersClub(noop))
      .isFalse()
      .bool(isDinersClub(isDinersClub))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isDinersClub('adsf'))
      .isFalse()
      .bool(isDinersClub('34.t'))
      .isFalse()
      .bool(isDinersClub('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isDinersClub(/asd/))
      .isFalse()
      .bool(isDinersClub(/\d+/))
      .isFalse()
      .bool(isDinersClub(/1/))
      .isFalse()
      .bool(isDinersClub(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isDinersClub([]))
      .isFalse()
      .bool(isDinersClub([1, 2, 3]))
      .isFalse()
      .bool(isDinersClub(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isDinersClub