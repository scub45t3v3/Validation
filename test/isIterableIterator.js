'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isIterableIterator = require('../isIterableIterator');

  // describe #isIterableIterator
  describe('#isIterableIterator', () => {
    it('should be a function', () => {
      unit
        .function(isIterableIterator);
    }); // end it

    it('should return true for generator function results', () => {
      const test = function* () {
        return yield 1;
      };

      unit
        .bool(isIterableIterator(test()))
        .isTrue();
    }); // end it

    it('should return true for SetIterator objects', () => {
      unit
        .bool(isIterableIterator(new Set()[Symbol.iterator]()))
        .isTrue();
    }); // end it

    it('should return true for MapIterator objects', () => {
      unit
        .bool(isIterableIterator(new Map()[Symbol.iterator]()))
        .isTrue();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isIterableIterator([]))
        .isFalse()
        .bool(isIterableIterator([1, 2, 3]))
        .isFalse();
    }); // end it

    it('should return false for Set objects', () => {
      unit
        .bool(isIterableIterator(new Set()))
        .isFalse()
        .bool(isIterableIterator(new Set([1, 2, 3])))
        .isFalse();
    }); // end it

    it('should return false for Map objects', () => {
      unit
        .bool(isIterableIterator(new Map()))
        .isFalse()
        .bool(isIterableIterator(new Map([['a', 1], ['b', 5]])))
        .isFalse();
    }); // end it

    it('should return false for WeakSet objects', () => {
      unit
        .bool(isIterableIterator(new WeakSet()))
        .isFalse()
        .bool(isIterableIterator(new WeakSet([
          {
            a: 5,
            b: 'hi',
          },
        ])))
        .isFalse();
    }); // end it

    it('should return false for WeakMap objects', () => {
      unit
        .bool(isIterableIterator(new WeakMap()))
        .isFalse()
        .bool(isIterableIterator(new WeakMap([
          [{}, 5],
          [
            {
              a: 6,
            },
            6,
          ],
        ])))
        .isFalse();
    }); // end it

    it('should return false for strings', () => {
      unit
        .bool(isIterableIterator('adsf'))
        .isFalse()
        .bool(isIterableIterator('34.6'))
        .isFalse()
        .bool(isIterableIterator(new String('hello world!')))
        .isFalse();
    }); // end it

    it('should return false for WeakSet objects', () => {
      unit
        .bool(isIterableIterator(new WeakSet()))
        .isFalse()
        .bool(isIterableIterator(new WeakSet([
          {
            a: 5,
            b: 'hi',
          },
        ])))
        .isFalse();
    }); // end it

    it('should return false for WeakMap objects', () => {
      unit
        .bool(isIterableIterator(new WeakMap()))
        .isFalse()
        .bool(isIterableIterator(new WeakMap([
          [{}, 5],
          [
            {
              a: 6,
            },
            6,
          ],
        ])))
        .isFalse();
    }); // end it

    it('should return false for object literals', () => {
      unit
        .bool(isIterableIterator({}))
        .isFalse()
        .bool(isIterableIterator({
          a: 5,
        }))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isIterableIterator(1))
        .isFalse()
        .bool(isIterableIterator(234987))
        .isFalse()
        .bool(isIterableIterator(-239874))
        .isFalse()
        .bool(isIterableIterator(0))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isIterableIterator(1.1))
        .isFalse()
        .bool(isIterableIterator(-0.4))
        .isFalse()
        .bool(isIterableIterator(234.4))
        .isFalse()
        .bool(isIterableIterator(54.00000000001))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isIterableIterator(noop))
        .isFalse()
        .bool(isIterableIterator(isIterableIterator))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isIterableIterator(/asd/))
        .isFalse()
        .bool(isIterableIterator(/\d+/))
        .isFalse()
        .bool(isIterableIterator(/1/))
        .isFalse()
        .bool(isIterableIterator(new RegExp('3')))
        .isFalse();
    }); // end it
  }); // end describe #isIterableIterator
})(); // end IIFE