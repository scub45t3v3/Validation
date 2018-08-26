'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const isWeakSet = require('../isWeakSet');

  // describe #isWeakSet
  describe('#isWeakSet', () => {
    it('should be a function', () => {
      unit
        .function(isWeakSet);
    }); // end it

    it('should return true for WeakSet objects', () => {
      unit
        .bool(isWeakSet(new WeakSet()))
        .isTrue()
        .bool(isWeakSet(new WeakSet([
          {
            a: 4,
          },
        ])))
        .isTrue();
    }); // end it

    it('should return false for Set objects', () => {
      unit
        .bool(isWeakSet(new Set()))
        .isFalse()
        .bool(isWeakSet(new Set([4])))
        .isFalse();
    }); // end it

    it('should return false for Map objects', () => {
      unit
        .bool(isWeakSet(new Map()))
        .isFalse()
        .bool(isWeakSet(new Map([['value', '3']])))
        .isFalse();
    }); // end it

    it('should return false for WeakMap objects', () => {
      unit
        .bool(isWeakSet(new WeakMap()))
        .isFalse()
        .bool(isWeakSet(new WeakMap([
          [
            {
              a: 4,
            },
            4,
          ],
        ])))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isWeakSet(1))
        .isFalse()
        .bool(isWeakSet(234987))
        .isFalse()
        .bool(isWeakSet(-239874))
        .isFalse()
        .bool(isWeakSet(0))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isWeakSet(1.1))
        .isFalse()
        .bool(isWeakSet(-0.4))
        .isFalse()
        .bool(isWeakSet(234.4))
        .isFalse()
        .bool(isWeakSet(54.00000000001))
        .isFalse();
    }); // end it

    it('should return false for strings', () => {
      unit
        .bool(isWeakSet('adsf'))
        .isFalse()
        .bool(isWeakSet('34.6'))
        .isFalse()
        .bool(isWeakSet('-45fg'))
        .isFalse();
    }); // end it

    it('should return false for objects', () => {
      unit
        .bool(isWeakSet({}))
        .isFalse()
        .bool(isWeakSet(new String('asd')))
        .isFalse()
        .bool(isWeakSet({
          a: 5,
        }))
        .isFalse();
    });

    it('should return false for arrays', () => {
      unit
        .bool(isWeakSet([]))
        .isFalse()
        .bool(isWeakSet([1, 2]))
        .isFalse()
        .bool(isWeakSet(['a', {}, 6]))
        .isFalse();
    }); // end it
  }); // end describe #isWeakSet
})(); // end IIFE