'use strict';

// include dependencies
const unit = require('unit.js');
const isString = require('../isString');

// describe #isString
describe('#isString', () => {
  it('should be a function', () => {
    unit
      .function(isString);
  }); // end it

  it('should return true for strings', () => {
    unit
      .bool(isString('hi'))
      .isTrue()
      .bool(isString('34'))
      .isTrue()
      .bool(isString(new String('new')))
      .isTrue();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isString(1))
      .isFalse()
      .bool(isString(234987))
      .isFalse()
      .bool(isString(-239874))
      .isFalse()
      .bool(isString(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isString(1.1))
      .isFalse()
      .bool(isString(-0.4))
      .isFalse()
      .bool(isString(234.4))
      .isFalse()
      .bool(isString(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isString(/asd/))
      .isFalse()
      .bool(isString(/\d+/))
      .isFalse()
      .bool(isString(/1/))
      .isFalse()
      .bool(isString(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isString({}))
      .isFalse()
      .bool(isString(new Error('boo')))
      .isFalse()
      .bool(isString({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isString([]))
      .isFalse()
      .bool(isString([1, 2]))
      .isFalse()
      .bool(isString(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isString