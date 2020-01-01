'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isIterator = require('../isIterator');

// describe #isIterator
describe('#isIterator', () => {
  it('should be a function', () => {
    unit
      .function(isIterator);
  }); // end it

  it('should return true for generator function results', () => {
    const test = function* () {
      return yield 1;
    };

    unit
      .bool(isIterator(test()))
      .isTrue();
  }); // end it

  it('should return true for SetIterator objects', () => {
    unit
      .bool(isIterator(new Set()[Symbol.iterator]()))
      .isTrue();
  }); // end it

  it('should return true for MapIterator objects', () => {
    unit
      .bool(isIterator(new Map()[Symbol.iterator]()))
      .isTrue();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isIterator([]))
      .isFalse()
      .bool(isIterator([1, 2, 3]))
      .isFalse();
  }); // end it

  it('should return false for Set objects', () => {
    unit
      .bool(isIterator(new Set()))
      .isFalse()
      .bool(isIterator(new Set([1, 2, 3])))
      .isFalse();
  }); // end it

  it('should return false for Map objects', () => {
    unit
      .bool(isIterator(new Map()))
      .isFalse()
      .bool(isIterator(new Map([['a', 1], ['b', 5]])))
      .isFalse();
  }); // end it

  it('should return false for WeakSet objects', () => {
    unit
      .bool(isIterator(new WeakSet()))
      .isFalse()
      .bool(isIterator(new WeakSet([
        {
          a: 5,
          b: 'hi',
        },
      ])))
      .isFalse();
  }); // end it

  it('should return false for WeakMap objects', () => {
    unit
      .bool(isIterator(new WeakMap()))
      .isFalse()
      .bool(isIterator(new WeakMap([
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
      .bool(isIterator('adsf'))
      .isFalse()
      .bool(isIterator('34.6'))
      .isFalse()
      .bool(isIterator(new String('hello world!')))
      .isFalse();
  }); // end it

  it('should return false for object literals', () => {
    unit
      .bool(isIterator({}))
      .isFalse()
      .bool(isIterator({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isIterator(1))
      .isFalse()
      .bool(isIterator(234987))
      .isFalse()
      .bool(isIterator(-239874))
      .isFalse()
      .bool(isIterator(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isIterator(1.1))
      .isFalse()
      .bool(isIterator(-0.4))
      .isFalse()
      .bool(isIterator(234.4))
      .isFalse()
      .bool(isIterator(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isIterator(noop))
      .isFalse()
      .bool(isIterator(isIterator))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isIterator(/asd/))
      .isFalse()
      .bool(isIterator(/\d+/))
      .isFalse()
      .bool(isIterator(/1/))
      .isFalse()
      .bool(isIterator(new RegExp('3')))
      .isFalse();
  }); // end it
}); // end describe #isIterator