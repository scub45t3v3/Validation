'use strict';

// include dependencies
const unit = require('unit.js');
const isAll = require('../isAll');

// describe #isAll
describe('#isAll', () => {
  it('should be a function', () => {
    unit
      .function(isAll);
  }); // end it

  it('should return true for a value that passes truth test for provided functions', () => {
    const test = [
      () => {
        return true;
      },
      (value) => {
        return value > 0;
      },
      (value) => {
        return value < 100;
      },
    ];

    unit
      .bool(isAll(1, ...test))
      .isTrue()
      .bool(isAll(99, ...test))
      .isTrue()
      .bool(isAll(0.000001, ...test))
      .isTrue()
      .bool(isAll(99.99999, ...test))
      .isTrue();
  }); // end it

  it('should return true for a value that passes truth test for provided RegExp', () => {
    const test = [
      /^\d+$/u,
      /5$/u,
    ];

    unit
      .bool(isAll('15', ...test))
      .isTrue()
      .bool(isAll(5, ...test))
      .isTrue()
      .bool(isAll('09545', ...test))
      .isTrue();
  }); // end it

  it('should return true for a value that passes truth test for provided function references with additional arguments', () => {
    const test = [
      'isDate',
      ['isBefore', '2050-01-01'],
      ['isAfter', '2000-01-01'],
    ];

    unit
      .bool(isAll(new Date('2010-09-18'), ...test))
      .isTrue()
      .bool(isAll('2001-01-01', ...test))
      .isTrue()
      .bool(isAll(1526121842679, ...test))
      .isTrue()
      .bool(isAll({
        y: 2005,
      }, ...test))
      .isTrue();
  }); // end it

  it('should return false for a value that does not pass truth test for provided function references with additional arguments', () => {
    const test = [
      'isDate',
      ['isBefore', '2000-02-01'],
      ['isAfter', '2000-01-01'],
    ];

    unit
      .bool(isAll(new Date('2010-09-18'), ...test))
      .isFalse()
      .bool(isAll('2001-01-01', ...test))
      .isFalse()
      .bool(isAll(1526121842679, ...test))
      .isFalse()
      .bool(isAll({
        y: 2005,
      }, ...test))
      .isFalse();
  }); // end it

  it('should throw an error for any callable argument that can not be resolved to a function', () => {
    unit
      .error(() => {
        return isAll(5, {});
      })
      .error(() => {
        return isAll(5, []);
      })
      .error(() => {
        return isAll(5, '5');
      })
      .error(() => {
        return isAll(5, 'nonExistantMethod');
      });
  }); // end it
}); // end describe #isAll