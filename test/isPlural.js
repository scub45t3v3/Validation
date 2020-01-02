'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isPlural = require('../isPlural');

// describe #isPlural
describe('#isPlural', () => {
  it('should be a function', () => {
    unit
      .function(isPlural);
  }); // end it

  it('should return true for plural strings', () => {
    unit
      .bool(isPlural('items'))
      .isTrue()
      .bool(isPlural('cars'))
      .isTrue()
      .bool(isPlural('bars'))
      .isTrue()
      .bool(isPlural('tables'))
      .isTrue()
      .bool(isPlural('chairs'))
      .isTrue();
  }); // end it

  it('should return false for singular strings', () => {
    unit
      .bool(isPlural('item'))
      .isFalse()
      .bool(isPlural('car'))
      .isFalse()
      .bool(isPlural('bar'))
      .isFalse()
      .bool(isPlural('table'))
      .isFalse()
      .bool(isPlural('chair'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isPlural(14))
      .isFalse()
      .bool(isPlural(234987))
      .isFalse()
      .bool(isPlural(-2398))
      .isFalse()
      .bool(isPlural(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isPlural(98.00007))
      .isFalse()
      .bool(isPlural(-32407.3))
      .isFalse()
      .bool(isPlural(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isPlural(noop))
      .isFalse()
      .bool(isPlural(isPlural))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isPlural(/asd/u))
      .isFalse()
      .bool(isPlural(/\d+/u))
      .isFalse()
      .bool(isPlural(/1/u))
      .isFalse()
      .bool(isPlural(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isPlural([]))
      .isFalse()
      .bool(isPlural([1, 2, 3]))
      .isFalse()
      .bool(isPlural(['a', 5, {}]))
      .isFalse();
  }); // end it

  it('should return false for null', () => {
    unit
      .bool(isPlural(null))
      .isFalse();
  }); // end it

  it('should return false for undefined', () => {
    unit
      .bool(isPlural())
      .isFalse()
      .bool(isPlural(undefined))
      .isFalse();
  }); // end it
}); // end describe #isPlural