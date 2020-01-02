'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isGeneratorFunction = require('../isGeneratorFunction');

// describe #isGeneratorFunction
describe('#isGeneratorFunction', () => {
  it('should be a function', () => {
    unit
      .function(isGeneratorFunction);
  }); // end it

  it('should return true for a Generator object', () => {
    const test = function* () {
      yield 1;
    };

    unit
      .bool(isGeneratorFunction(test))
      .isTrue();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isGeneratorFunction(1))
      .isFalse()
      .bool(isGeneratorFunction(234987))
      .isFalse()
      .bool(isGeneratorFunction(-239874))
      .isFalse()
      .bool(isGeneratorFunction(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isGeneratorFunction(1.1))
      .isFalse()
      .bool(isGeneratorFunction(-0.4))
      .isFalse()
      .bool(isGeneratorFunction(234.4))
      .isFalse()
      .bool(isGeneratorFunction(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isGeneratorFunction(noop))
      .isFalse()
      .bool(isGeneratorFunction(isGeneratorFunction))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isGeneratorFunction('adsf'))
      .isFalse()
      .bool(isGeneratorFunction('34.6'))
      .isFalse()
      .bool(isGeneratorFunction('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isGeneratorFunction(/asd/u))
      .isFalse()
      .bool(isGeneratorFunction(/\d+/u))
      .isFalse()
      .bool(isGeneratorFunction(/1/u))
      .isFalse()
      .bool(isGeneratorFunction(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isGeneratorFunction({}))
      .isFalse()
      .bool(isGeneratorFunction(new String('asd')))
      .isFalse()
      .bool(isGeneratorFunction({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for Map', () => {
    unit
      .bool(isGeneratorFunction(new Map()))
      .isFalse()
      .bool(isGeneratorFunction(new Map([['a', 5], ['b', '$']])))
      .isFalse();
  }); // end it

  it('should return false for Set', () => {
    unit
      .bool(isGeneratorFunction(new Set()))
      .isFalse()
      .bool(isGeneratorFunction(new Set().add(1)))
      .isFalse()
      .bool(isGeneratorFunction(new Set([1, 2, 3])))
      .isFalse();
  }); // end it
}); // end describe #isGeneratorFunction