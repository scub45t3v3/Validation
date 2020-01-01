'use strict';

// include dependencies
const unit = require('unit.js');
const isSet = require('../isSet');

// describe #isSet
describe('#isSet', () => {
  it('should be a function', () => {
    unit
      .function(isSet);
  }); // end it

  it('should return true for Set objects', () => {
    unit
      .bool(isSet(new Set()))
      .isTrue()
      .bool(isSet(new Set([4])))
      .isTrue();
  }); // end it

  it('should return false for Map objects', () => {
    unit
      .bool(isSet(new Map()))
      .isFalse()
      .bool(isSet(new Map([['value', '3']])))
      .isFalse();
  }); // end it

  it('should return false for WeakMap objects', () => {
    unit
      .bool(isSet(new WeakMap()))
      .isFalse()
      .bool(isSet(new WeakMap([
        [
          {
            a: 4,
          },
          4,
        ],
      ])))
      .isFalse();
  }); // end it

  it('should return false for WeakSet objects', () => {
    unit
      .bool(isSet(new WeakSet()))
      .isFalse()
      .bool(isSet(new WeakSet([
        {
          a: 4,
        },
      ])))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isSet(1))
      .isFalse()
      .bool(isSet(234987))
      .isFalse()
      .bool(isSet(-239874))
      .isFalse()
      .bool(isSet(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isSet(1.1))
      .isFalse()
      .bool(isSet(-0.4))
      .isFalse()
      .bool(isSet(234.4))
      .isFalse()
      .bool(isSet(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isSet('adsf'))
      .isFalse()
      .bool(isSet('34.6'))
      .isFalse()
      .bool(isSet('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isSet({}))
      .isFalse()
      .bool(isSet(new String('asd')))
      .isFalse()
      .bool(isSet({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isSet([]))
      .isFalse()
      .bool(isSet([1, 2]))
      .isFalse()
      .bool(isSet(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isSet