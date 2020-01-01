'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isISIN = require('../isISIN');

// describe #isISIN
describe('#isISIN', () => {
  it('should be a function', () => {
    unit
      .function(isISIN);
  }); // end it

  it('should return true for valid ISIN strings', () => {
    unit
      .bool(isISIN('US5949181045'))
      .isTrue()
      .bool(isISIN('US38259P5089'))
      .isTrue()
      .bool(isISIN('US0378331005'))
      .isTrue()
      .bool(isISIN('NL0000729408'))
      .isTrue()
      .bool(isISIN('JP3946600008'))
      .isTrue()
      .bool(isISIN('DE000DZ21632'))
      .isTrue()
      .bool(isISIN('DE000DB7HWY7'))
      .isTrue()
      .bool(isISIN('DE000CM7VX13'))
      .isTrue()
      .bool(isISIN('CH0031240127'))
      .isTrue()
      .bool(isISIN('CA9861913023'))
      .isTrue()
      .bool(isISIN('GB0002634946'))
      .isTrue();
  }); // end it

  it('should return false for invalid ISIN strings', () => {
    unit
      .bool(isISIN('US5949187045'))
      .isFalse()
      .bool(isISIN('US38259P0089'))
      .isFalse()
      .bool(isISIN('US0378334005'))
      .isFalse()
      .bool(isISIN('NL000072G408'))
      .isFalse()
      .bool(isISIN('JP3946603008'))
      .isFalse()
      .bool(isISIN('DE000DZ2L632'))
      .isFalse()
      .bool(isISIN('DE000DBPHWY7'))
      .isFalse()
      .bool(isISIN('DE000CMFVX13'))
      .isFalse()
      .bool(isISIN('CH00312R0127'))
      .isFalse()
      .bool(isISIN('CA98619J3023'))
      .isFalse()
      .bool(isISIN('GB00026D4946'))
      .isFalse();
  }); // end it

  it('should return false for bools', () => {
    unit
      .bool(isISIN(true))
      .isFalse()
      .bool(isISIN(false))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isISIN([]))
      .isFalse()
      .bool(isISIN([1, 2]))
      .isFalse()
      .bool(isISIN(['a', {}, 6]))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isISIN(1))
      .isFalse()
      .bool(isISIN(234987))
      .isFalse()
      .bool(isISIN(-239874))
      .isFalse()
      .bool(isISIN(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isISIN(1.1))
      .isFalse()
      .bool(isISIN(-0.4))
      .isFalse()
      .bool(isISIN(234.4))
      .isFalse()
      .bool(isISIN(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isISIN(noop))
      .isFalse()
      .bool(isISIN(isISIN))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isISIN(/asd/))
      .isFalse()
      .bool(isISIN(/\d+/))
      .isFalse()
      .bool(isISIN(/1/))
      .isFalse()
      .bool(isISIN(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isISIN({}))
      .isFalse()
      .bool(isISIN(new String('asd')))
      .isFalse()
      .bool(isISIN({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for Set', () => {
    unit
      .bool(isISIN(new Set()))
      .isFalse()
      .bool(isISIN(new Set().add(1)))
      .isFalse()
      .bool(isISIN(new Set([1, 2, 3])))
      .isFalse();
  }); // end it
}); // end describe #isISIN