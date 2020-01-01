'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isSingular = require('../isSingular');

// describe #isSingular
describe('#isSingular', () => {
  it('should be a function', () => {
    unit
      .function(isSingular);
  }); // end it

  it('should return true for singular strings', () => {
    unit
      .bool(isSingular('item'))
      .isTrue()
      .bool(isSingular('car'))
      .isTrue()
      .bool(isSingular('bar'))
      .isTrue()
      .bool(isSingular('table'))
      .isTrue()
      .bool(isSingular('chair'))
      .isTrue();
  }); // end it

  it('should return false for plural strings', () => {
    unit
      .bool(isSingular('items'))
      .isFalse()
      .bool(isSingular('cars'))
      .isFalse()
      .bool(isSingular('bars'))
      .isFalse()
      .bool(isSingular('tables'))
      .isFalse()
      .bool(isSingular('chairs'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isSingular(14))
      .isFalse()
      .bool(isSingular(234987))
      .isFalse()
      .bool(isSingular(-2398))
      .isFalse()
      .bool(isSingular(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isSingular(98.00007))
      .isFalse()
      .bool(isSingular(-32407.3))
      .isFalse()
      .bool(isSingular(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isSingular(noop))
      .isFalse()
      .bool(isSingular(isSingular))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isSingular(/asd/))
      .isFalse()
      .bool(isSingular(/\d+/))
      .isFalse()
      .bool(isSingular(/1/))
      .isFalse()
      .bool(isSingular(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isSingular([]))
      .isFalse()
      .bool(isSingular([1, 2, 3]))
      .isFalse()
      .bool(isSingular(['a', 5, {}]))
      .isFalse();
  }); // end it

  it('should return false for null', () => {
    unit
      .bool(isSingular(null))
      .isFalse();
  }); // end it

  it('should return false for undefined', () => {
    unit
      .bool(isSingular())
      .isFalse()
      .bool(isSingular(undefined))
      .isFalse();
  }); // end it
}); // end describe #isSingular