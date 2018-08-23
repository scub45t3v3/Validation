'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const isMap = require('../isMap');

  // describe #isMap
  describe('#isMap', () => {
    it('should be a function', () => {
      unit
        .function(isMap);
    }); // end it

    it('should return true for Map objects', () => {
      unit
        .bool(isMap(new Map()))
        .isTrue()
        .bool(isMap(new Map([['value', '3']])))
        .isTrue();
    }); // end it

    it('should return false for WeakMap objects', () => {
      unit
        .bool(isMap(new WeakMap()))
        .isFalse()
        .bool(isMap(new WeakMap([
          [
            {
              a: 4,
            },
            4,
          ],
        ])))
        .isFalse();
    }); // end it

    it('should return false for Set objects', () => {
      unit
        .bool(isMap(new Set()))
        .isFalse()
        .bool(isMap(new Set([4])))
        .isFalse();
    }); // end it

    it('should return false for WeakSet objects', () => {
      unit
        .bool(isMap(new WeakSet()))
        .isFalse()
        .bool(isMap(new WeakSet([
          {
            a: 4,
          },
        ])))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isMap(1))
        .isFalse()
        .bool(isMap(234987))
        .isFalse()
        .bool(isMap(-239874))
        .isFalse()
        .bool(isMap(0))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isMap(1.1))
        .isFalse()
        .bool(isMap(-0.4))
        .isFalse()
        .bool(isMap(234.4))
        .isFalse()
        .bool(isMap(54.00000000001))
        .isFalse();
    }); // end it

    it('should return false for strings', () => {
      unit
        .bool(isMap('adsf'))
        .isFalse()
        .bool(isMap('34.6'))
        .isFalse()
        .bool(isMap('-45fg'))
        .isFalse();
    }); // end it

    it('should return false for objects', () => {
      unit
        .bool(isMap({}))
        .isFalse()
        .bool(isMap(new String('asd')))
        .isFalse()
        .bool(isMap({
          a: 5,
        }))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isMap([]))
        .isFalse()
        .bool(isMap([1, 2]))
        .isFalse()
        .bool(isMap(['a', {}, 6]))
        .isFalse();
    }); // end it
  }); // end describe #isMap
})(); // end IIFE