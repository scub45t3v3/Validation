'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isJCB = require('../isJCB');

  // describe #isJCB
  describe('#isJCB', () => {
    it('should be a function', () => {
      unit
        .function(isJCB);
    }); // end it

    it('should return true for valid account numbers', () => {
      unit
        .bool(isJCB('3530111333300000'))
        .isTrue()
        .bool(isJCB('3566002020360505'))
        .isTrue();
    }); // end it

    it('should return false for invalid account numbers', () => {
      unit
        .bool(isJCB('378282246310004'))
        .isFalse()
        .bool(isJCB('378282246310006'))
        .isFalse()
        .bool(isJCB('371449635398430'))
        .isFalse()
        .bool(isJCB('371449635398432'))
        .isFalse()
        .bool(isJCB('5610591081018250'))
        .isFalse()
        .bool(isJCB('30569309025904'))
        .isFalse()
        .bool(isJCB('6011111111111117'))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isJCB(14))
        .isFalse()
        .bool(isJCB(234987))
        .isFalse()
        .bool(isJCB(-2398))
        .isFalse()
        .bool(isJCB(2))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isJCB(98.00007))
        .isFalse()
        .bool(isJCB(-32407.3))
        .isFalse()
        .bool(isJCB(0.1))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isJCB(noop))
        .isFalse()
        .bool(isJCB(isJCB))
        .isFalse();
    }); // end it

    it('should return false for invalid strings', () => {
      unit
        .bool(isJCB('adsf'))
        .isFalse()
        .bool(isJCB('34.t'))
        .isFalse()
        .bool(isJCB('-45fg'))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isJCB(/asd/))
        .isFalse()
        .bool(isJCB(/\d+/))
        .isFalse()
        .bool(isJCB(/1/))
        .isFalse()
        .bool(isJCB(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isJCB([]))
        .isFalse()
        .bool(isJCB([1, 2, 3]))
        .isFalse()
        .bool(isJCB(['a', 5, {}]))
        .isFalse();
    }); // end it
  }); // end describe #isJCB
})(); // end IIFE