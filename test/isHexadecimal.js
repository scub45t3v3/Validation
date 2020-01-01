'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isHexadecimal = require('../isHexadecimal');

// describe #isHexadecimal
describe('#isHexadecimal', () => {
  it('should be a function', () => {
    unit
      .function(isHexadecimal);
  }); // end it

  it('should return true for hex values', () => {
    unit
      .bool(isHexadecimal(0x5af))
      .isTrue()
      .bool(isHexadecimal(0xF))
      .isTrue()
      .bool(isHexadecimal(0x00dD))
      .isTrue();
  }); // end it

  it('should return true for hex strings', () => {
    unit
      .bool(isHexadecimal('a'))
      .isTrue()
      .bool(isHexadecimal('f'))
      .isTrue()
      .bool(isHexadecimal('3'))
      .isTrue()
      .bool(isHexadecimal('ad45'))
      .isTrue();
  }); // end it

  it('should return true for positive integers', () => {
    unit
      .bool(isHexadecimal(1))
      .isTrue()
      .bool(isHexadecimal(234987))
      .isTrue()
      .bool(isHexadecimal(2398))
      .isTrue()
      .bool(isHexadecimal(0))
      .isTrue();
  }); // end it

  it('should return false for negative integers', () => {
    unit
      .bool(isHexadecimal(-1))
      .isFalse()
      .bool(isHexadecimal(-234))
      .isFalse()
      .bool(isHexadecimal(-234987))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isHexadecimal(1.1))
      .isFalse()
      .bool(isHexadecimal(-0.4))
      .isFalse()
      .bool(isHexadecimal(234.4))
      .isFalse()
      .bool(isHexadecimal(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isHexadecimal('adsf'))
      .isFalse()
      .bool(isHexadecimal('34.6'))
      .isFalse()
      .bool(isHexadecimal('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for bools', () => {
    unit
      .bool(isHexadecimal(true))
      .isFalse()
      .bool(isHexadecimal(false))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isHexadecimal([]))
      .isFalse()
      .bool(isHexadecimal([1, 2]))
      .isFalse()
      .bool(isHexadecimal(['a', {}, 6]))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isHexadecimal(noop))
      .isFalse()
      .bool(isHexadecimal(isHexadecimal))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isHexadecimal(/asd/))
      .isFalse()
      .bool(isHexadecimal(/\d+/))
      .isFalse()
      .bool(isHexadecimal(/1/))
      .isFalse()
      .bool(isHexadecimal(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isHexadecimal({}))
      .isFalse()
      .bool(isHexadecimal(new String('asd')))
      .isFalse()
      .bool(isHexadecimal({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for Set', () => {
    unit
      .bool(isHexadecimal(new Set()))
      .isFalse()
      .bool(isHexadecimal(new Set().add(1)))
      .isFalse()
      .bool(isHexadecimal(new Set([1, 2, 3])))
      .isFalse();
  }); // end it
}); // end describe #isHexadecimal