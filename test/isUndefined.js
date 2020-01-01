'use strict';

// include dependencies
const unit = require('unit.js');
const isUndefined = require('../isUndefined');

// describe #isUndefined
describe('#isUndefined', () => {
  it('should be a function', () => {
    unit
      .function(isUndefined);
  }); // end it

  it('should return true for undefined', () => {
    unit
      .bool(isUndefined())
      .isTrue()
      .bool(isUndefined(undefined))
      .isTrue()
      .bool(isUndefined({
        a: 5,
      }.b))
      .isTrue();
  }); // end it

  it('should return true for deleted properties on an object', () => {
    const test = {
      a: 5,
      b: true,
    };

    unit
      .given(delete test.a)
      .bool(isUndefined(test.a))
      .isTrue()
      .bool(isUndefined(test.z))
      .isTrue();
  }); // end it

  it('should return false for null', () => {
    unit
      .bool(isUndefined(null))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isUndefined(1))
      .isFalse()
      .bool(isUndefined(234987))
      .isFalse()
      .bool(isUndefined(-239874))
      .isFalse()
      .bool(isUndefined(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isUndefined(1.1))
      .isFalse()
      .bool(isUndefined(-0.4))
      .isFalse()
      .bool(isUndefined(234.4))
      .isFalse()
      .bool(isUndefined(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isUndefined('adsf'))
      .isFalse()
      .bool(isUndefined('34.6'))
      .isFalse()
      .bool(isUndefined('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isUndefined(/asd/))
      .isFalse()
      .bool(isUndefined(/\d+/))
      .isFalse()
      .bool(isUndefined(/1/))
      .isFalse()
      .bool(isUndefined(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isUndefined({}))
      .isFalse()
      .bool(isUndefined(new String('asd')))
      .isFalse()
      .bool(isUndefined({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isUndefined([]))
      .isFalse()
      .bool(isUndefined([1, 2]))
      .isFalse()
      .bool(isUndefined(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isUndefined