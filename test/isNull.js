'use strict';

// include dependencies
const unit = require('unit.js');
const isNull = require('../isNull');

// describe #isNull
describe('#isNull', () => {
  it('should be a function', () => {
    unit
      .function(isNull);
  }); // end it

  it('should return true for null', () => {
    unit
      .bool(isNull(null))
      .isTrue();
  }); // end it

  it('should return false for undefined', () => {
    unit
      .bool(isNull(undefined))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isNull(1))
      .isFalse()
      .bool(isNull(234987))
      .isFalse()
      .bool(isNull(-239874))
      .isFalse()
      .bool(isNull(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isNull(1.1))
      .isFalse()
      .bool(isNull(-0.4))
      .isFalse()
      .bool(isNull(234.4))
      .isFalse()
      .bool(isNull(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isNull('adsf'))
      .isFalse()
      .bool(isNull('34.6'))
      .isFalse()
      .bool(isNull('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isNull(/asd/u))
      .isFalse()
      .bool(isNull(/\d+/u))
      .isFalse()
      .bool(isNull(/1/u))
      .isFalse()
      .bool(isNull(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isNull({}))
      .isFalse()
      .bool(isNull(new String('asd')))
      .isFalse()
      .bool(isNull({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isNull([]))
      .isFalse()
      .bool(isNull([1, 2]))
      .isFalse()
      .bool(isNull(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isNull