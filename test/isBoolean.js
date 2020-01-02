'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isBoolean = require('../isBoolean');

// describe #isBoolean
describe('#isBoolean', () => {
  it('should be a function', () => {
    unit
      .function(isBoolean);
  }); // end it

  it('should return true for bools', () => {
    unit
      .bool(isBoolean(true))
      .isTrue()
      .bool(isBoolean(false))
      .isTrue()
      .bool(isBoolean(new Boolean()))
      .isTrue()
      .bool(isBoolean(new Boolean(1)))
      .isTrue();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isBoolean([]))
      .isFalse()
      .bool(isBoolean([1, 2]))
      .isFalse()
      .bool(isBoolean(['a', {}, 6]))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isBoolean(1))
      .isFalse()
      .bool(isBoolean(234987))
      .isFalse()
      .bool(isBoolean(-239874))
      .isFalse()
      .bool(isBoolean(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isBoolean(1.1))
      .isFalse()
      .bool(isBoolean(-0.4))
      .isFalse()
      .bool(isBoolean(234.4))
      .isFalse()
      .bool(isBoolean(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isBoolean(noop))
      .isFalse()
      .bool(isBoolean(isBoolean))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isBoolean('adsf'))
      .isFalse()
      .bool(isBoolean('34.6'))
      .isFalse()
      .bool(isBoolean('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isBoolean(/asd/u))
      .isFalse()
      .bool(isBoolean(/\d+/u))
      .isFalse()
      .bool(isBoolean(/1/u))
      .isFalse()
      .bool(isBoolean(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isBoolean({}))
      .isFalse()
      .bool(isBoolean(new String('asd')))
      .isFalse()
      .bool(isBoolean({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for Set', () => {
    unit
      .bool(isBoolean(new Set()))
      .isFalse()
      .bool(isBoolean(new Set().add(1)))
      .isFalse()
      .bool(isBoolean(new Set([1, 2, 3])))
      .isFalse();
  }); // end it
}); // end describe #isBoolean