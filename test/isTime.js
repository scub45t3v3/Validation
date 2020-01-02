'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isTime = require('../isTime');

// describe #isTime
describe('#isTime', () => {
  it('should be a function', () => {
    unit
      .function(isTime);
  }); // end it

  it('should return true for valid time strings', () => {
    unit
      .bool(isTime('23:59:59.999999999'))
      .isTrue()
      .bool(isTime('00:00:00.000000001'))
      .isTrue()
      .bool(isTime('11:59:59AM'))
      .isTrue()
      .bool(isTime('1:24 P.M.'))
      .isTrue()
      .bool(isTime('6 AM'))
      .isTrue()
      .bool(isTime('13:01Z'))
      .isTrue()
      .bool(isTime('13:01+3'))
      .isTrue()
      .bool(isTime('13:00-3'))
      .isTrue()
      .bool(isTime('13:01 +3:00'))
      .isTrue()
      .bool(isTime('13:01 MST'))
      .isTrue()
      .bool(isTime('13:01 Mountain Standard Time'))
      .isTrue()
      .bool(isTime('13:01 America/Denver'))
      .isTrue()
      .bool(isTime('00:00:00.001 AM MST'))
      .isTrue();
  }); // end it

  it('should return true for integers < 24', () => {
    unit
      .bool(isTime(0))
      .isTrue()
      .bool(isTime(23))
      .isTrue();
  }); // end it

  it('should return false for invalid time strings', () => {
    unit
      .bool(isTime('24'))
      .isFalse()
      .bool(isTime('13:01PM'))
      .isFalse()
      .bool(isTime('13AM'))
      .isFalse()
      .bool(isTime('5:50:60'))
      .isFalse()
      .bool(isTime('24:00'))
      .isFalse()
      .bool(isTime('11 A.M. T'))
      .isFalse()
      .bool(isTime('3:60'))
      .isFalse()
      .bool(isTime('4:20 F.M.'))
      .isFalse()
      .bool(isTime('12:34:34:56:12'))
      .isFalse();
  }); // end it

  it('should return false for integers > 24', () => {
    unit
      .bool(isTime(25))
      .isFalse()
      .bool(isTime(234987))
      .isFalse()
      .bool(isTime(-2398))
      .isFalse()
      .bool(isTime(2587))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isTime(0.1))
      .isFalse()
      .bool(isTime(5.34))
      .isFalse()
      .bool(isTime(98.00007))
      .isFalse()
      .bool(isTime(-32407.3))
      .isFalse()
      .bool(isTime(24.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isTime(noop))
      .isFalse()
      .bool(isTime(isTime))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isTime(/asd/u))
      .isFalse()
      .bool(isTime(/\d+/u))
      .isFalse()
      .bool(isTime(/1/u))
      .isFalse()
      .bool(isTime(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isTime([]))
      .isFalse()
      .bool(isTime([1589, 23487, 'f']))
      .isFalse()
      .bool(isTime(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isTime