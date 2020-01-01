'use strict';

// include dependencies
const unit = require('unit.js');
const isNaN = require('../isNaN');

// describe #isNaN
describe('#isNaN', () => {
  it('should be a function', () => {
    unit
      .function(isNaN);
  }); // end it

  it('should return true for NaN', () => {
    unit
      .bool(isNaN(0 / 0))
      .isTrue()
      .bool(isNaN(1 - 'a'))
      .isTrue();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isNaN(1))
      .isFalse()
      .bool(isNaN(234987))
      .isFalse()
      .bool(isNaN(-239874))
      .isFalse()
      .bool(isNaN(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isNaN(1.1))
      .isFalse()
      .bool(isNaN(-0.4))
      .isFalse()
      .bool(isNaN(234.4))
      .isFalse()
      .bool(isNaN(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isNaN('adsf'))
      .isFalse()
      .bool(isNaN('34.6'))
      .isFalse()
      .bool(isNaN('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isNaN(/asd/))
      .isFalse()
      .bool(isNaN(/\d+/))
      .isFalse()
      .bool(isNaN(/1/))
      .isFalse()
      .bool(isNaN(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isNaN({}))
      .isFalse()
      .bool(isNaN(new String('asd')))
      .isFalse()
      .bool(isNaN({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isNaN([]))
      .isFalse()
      .bool(isNaN([1, 2]))
      .isFalse()
      .bool(isNaN(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isNaN