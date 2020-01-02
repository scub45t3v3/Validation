'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isArray = require('../isArray');

// describe #isArray
describe('#isArray', () => {
  it('should be a function', () => {
    unit
      .function(isArray);
  }); // end it

  it('should return true for arrays', () => {
    unit
      .bool(isArray([]))
      .isTrue()
      .bool(isArray([1, 2]))
      .isTrue()
      .bool(isArray(['a', {}, 6]))
      .isTrue();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isArray(1))
      .isFalse()
      .bool(isArray(234987))
      .isFalse()
      .bool(isArray(-239874))
      .isFalse()
      .bool(isArray(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isArray(1.1))
      .isFalse()
      .bool(isArray(-0.4))
      .isFalse()
      .bool(isArray(234.4))
      .isFalse()
      .bool(isArray(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isArray(noop))
      .isFalse()
      .bool(isArray(isArray))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isArray('adsf'))
      .isFalse()
      .bool(isArray('34.6'))
      .isFalse()
      .bool(isArray('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isArray(/asd/u))
      .isFalse()
      .bool(isArray(/\d+/u))
      .isFalse()
      .bool(isArray(/1/u))
      .isFalse()
      .bool(isArray(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isArray({}))
      .isFalse()
      .bool(isArray(new String('asd')))
      .isFalse()
      .bool(isArray({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for Map', () => {
    unit
      .bool(isArray(new Map()))
      .isFalse()
      .bool(isArray(new Map([['a', 5], ['b', '$']])))
      .isFalse();
  }); // end it

  it('should return false for Set', () => {
    unit
      .bool(isArray(new Set()))
      .isFalse()
      .bool(isArray(new Set().add(1)))
      .isFalse()
      .bool(isArray(new Set([1, 2, 3])))
      .isFalse();
  }); // end it
}); // end describe #isArray