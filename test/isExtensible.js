'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isExtensible = require('../isExtensible');

// describe #isExtensible
describe('#isExtensible', () => {
  it('should be a function', () => {
    unit
      .function(isExtensible);
  }); // end it

  it('should return true for object literals', () => {
    unit
      .bool(isExtensible({}))
      .isTrue()
      .bool(isExtensible({
        a: 5,
      }))
      .isTrue();
  }); // end it

  it('should return true for arrays', () => {
    unit
      .bool(isExtensible([]))
      .isTrue()
      .bool(isExtensible([1, 2]))
      .isTrue()
      .bool(isExtensible(new Array('a', {}, 6)))
      .isTrue();
  }); // end it

  it('should return true for regexs', () => {
    unit
      .bool(isExtensible(/asd/))
      .isTrue()
      .bool(isExtensible(/\d+/))
      .isTrue()
      .bool(isExtensible(/1/))
      .isTrue()
      .bool(isExtensible(new RegExp('3')))
      .isTrue();
  }); // end it

  it('should return true for functions', () => {
    unit
      .bool(isExtensible(noop))
      .isTrue()
      .bool(isExtensible(isExtensible))
      .isTrue();
  }); // end it

  it('should return true for Map', () => {
    unit
      .bool(isExtensible(new Map()))
      .isTrue()
      .bool(isExtensible(new Map([['a', 5], ['b', '$']])))
      .isTrue();
  }); // end it

  it('should return true for Set', () => {
    unit
      .bool(isExtensible(new Set()))
      .isTrue()
      .bool(isExtensible(new Set().add(1)))
      .isTrue()
      .bool(isExtensible(new Set([1, 2, 3])))
      .isTrue();
  }); // end it

  it('should return false for primitives', () => {
    unit
      .bool(isExtensible(1))
      .isFalse()
      .bool(isExtensible(234987))
      .isFalse()
      .bool(isExtensible(-239874))
      .isFalse()
      .bool(isExtensible(0))
      .isFalse()
      .bool(isExtensible(1.1))
      .isFalse()
      .bool(isExtensible(-0.4))
      .isFalse()
      .bool(isExtensible(234.4))
      .isFalse()
      .bool(isExtensible(54.00000000001))
      .isFalse()
      .bool(isExtensible('adsf'))
      .isFalse()
      .bool(isExtensible('34.6'))
      .isFalse()
      .bool(isExtensible('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for object with preventExtensions', () => {
    unit
      .bool(isExtensible(Object.preventExtensions({
        a: 5,
      })))
      .isFalse()
      .bool(isExtensible(Object.preventExtensions(new String('hi'))))
      .isFalse();
  }); // end it

  it('should return false for sealed objects', () => {
    unit
      .bool(isExtensible(Object.seal({
        a: 5,
      })))
      .isFalse()
      .bool(isExtensible(Object.seal(new String('hi'))))
      .isFalse();
  }); // end it

  it('should return false for frozen objects', () => {
    unit
      .bool(isExtensible(Object.freeze({
        a: 5,
      })))
      .isFalse()
      .bool(isExtensible(Object.freeze(new String('hi'))))
      .isFalse();
  }); // end it
}); // end describe #isExtensible