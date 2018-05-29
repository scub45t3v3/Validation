(function() {
  var isGeneratorFunction, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isGeneratorFunction = require('../isGeneratorFunction');

  describe('#isGeneratorFunction', function() {
    it('should be a function', function() {
      unit.function(isGeneratorFunction);
      return null;
    });
    it('should return true for a Generator object', function() {
      var test;
      test = function*() {
        return (yield 1);
      };
      unit.bool(isGeneratorFunction(test)).isTrue();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isGeneratorFunction(1)).isFalse().bool(isGeneratorFunction(234987)).isFalse().bool(isGeneratorFunction(-239874)).isFalse().bool(isGeneratorFunction(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isGeneratorFunction(1.1)).isFalse().bool(isGeneratorFunction(-0.4)).isFalse().bool(isGeneratorFunction(234.4)).isFalse().bool(isGeneratorFunction(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isGeneratorFunction(noop)).isFalse().bool(isGeneratorFunction(isGeneratorFunction)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isGeneratorFunction('adsf')).isFalse().bool(isGeneratorFunction('34.6')).isFalse().bool(isGeneratorFunction('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isGeneratorFunction(/asd/)).isFalse().bool(isGeneratorFunction(/\d+/)).isFalse().bool(isGeneratorFunction(/1/)).isFalse().bool(isGeneratorFunction(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isGeneratorFunction({})).isFalse().bool(isGeneratorFunction(new String('asd'))).isFalse().bool(isGeneratorFunction({
        a: 5
      })).isFalse();
      return null;
    });
    it('should return false for Map', function() {
      unit.bool(isGeneratorFunction(new Map())).isFalse().bool(isGeneratorFunction(new Map([['a', 5], ['b', '$']]))).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isGeneratorFunction(new Set())).isFalse().bool(isGeneratorFunction(new Set().add(1))).isFalse().bool(isGeneratorFunction(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
