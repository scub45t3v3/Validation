'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isError = require('../isError');

// describe #isError
describe('#isError', () => {
  it('should be a function', () => {
    unit
      .function(isError);
  }); // end it

  it('should return true for Errors', () => {
    unit
      .bool(isError(new Error()))
      .isTrue()
      .bool(isError(new EvalError()))
      .isTrue()
      .bool(isError(new RangeError()))
      .isTrue()
      .bool(isError(new ReferenceError()))
      .isTrue()
      .bool(isError(new SyntaxError()))
      .isTrue()
      .bool(isError(new TypeError()))
      .isTrue()
      .bool(isError(new URIError()))
      .isTrue();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isError(1))
      .isFalse()
      .bool(isError(234987))
      .isFalse()
      .bool(isError(-239874))
      .isFalse()
      .bool(isError(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isError(1.1))
      .isFalse()
      .bool(isError(-0.4))
      .isFalse()
      .bool(isError(234.4))
      .isFalse()
      .bool(isError(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isError(noop))
      .isFalse()
      .bool(isError(isError))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isError('adsf'))
      .isFalse()
      .bool(isError('34.6'))
      .isFalse()
      .bool(isError('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isError(/asd/u))
      .isFalse()
      .bool(isError(/\d+/u))
      .isFalse()
      .bool(isError(/1/u))
      .isFalse()
      .bool(isError(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isError({}))
      .isFalse()
      .bool(isError(new String('asd')))
      .isFalse()
      .bool(isError({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isError([]))
      .isFalse()
      .bool(isError([1, 2, 3]))
      .isFalse()
      .bool(isError(['a', new Error(), {}]))
      .isFalse();
  }); // end it
}); // end describe #isError