'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isPromise = require('../isPromise');

// describe #isPromise
describe('#isPromise', () => {
  it('should be a function', () => {
    unit
      .function(isPromise);
  }); // end it

  it('should return true for Promise objects', () => {
    unit
      .bool(isPromise(new Promise(noop)))
      .isTrue()
      .bool(isPromise(Promise.resolve()))
      .isTrue()
      .bool(isPromise(Promise.reject().catch(noop)))
      .isTrue();
  }); // end it

  it('should return false for Set objects', () => {
    unit
      .bool(isPromise(new Set()))
      .isFalse()
      .bool(isPromise(new Set([4])))
      .isFalse();
  }); // end it

  it('should return false for WeakSet objects', () => {
    unit
      .bool(isPromise(new WeakSet()))
      .isFalse()
      .bool(isPromise(new WeakSet([
        {
          a: 4,
        },
      ])))
      .isFalse();
  }); // end it

  it('should return false for Map objects', () => {
    unit
      .bool(isPromise(new Map()))
      .isFalse()
      .bool(isPromise(new Map([['value', '3']])))
      .isFalse();
  }); // end it

  it('should return false for WeakMap objects', () => {
    unit
      .bool(isPromise(new WeakMap()))
      .isFalse()
      .bool(isPromise(new WeakMap([
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
      .bool(isPromise(1))
      .isFalse()
      .bool(isPromise(234987))
      .isFalse()
      .bool(isPromise(-239874))
      .isFalse()
      .bool(isPromise(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isPromise(1.1))
      .isFalse()
      .bool(isPromise(-0.4))
      .isFalse()
      .bool(isPromise(234.4))
      .isFalse()
      .bool(isPromise(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isPromise('adsf'))
      .isFalse()
      .bool(isPromise('34.6'))
      .isFalse()
      .bool(isPromise('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isPromise({}))
      .isFalse()
      .bool(isPromise(new String('asd')))
      .isFalse()
      .bool(isPromise({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isPromise([]))
      .isFalse()
      .bool(isPromise([1, 2]))
      .isFalse()
      .bool(isPromise(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isPromise