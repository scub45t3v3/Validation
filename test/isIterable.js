(function() {
  var isIterable, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isIterable = require('../isIterable');

  describe('#isIterable', function() {
    it('should be a function', function() {
      unit.function(isIterable);
      return null;
    });
    it('should return true for arrays', function() {
      unit.bool(isIterable([])).isTrue().bool(isIterable([1, 2, 3])).isTrue();
      return null;
    });
    it('should return true for Set objects', function() {
      unit.bool(isIterable(new Set())).isTrue().bool(isIterable(new Set([1, 2, 3]))).isTrue();
      return null;
    });
    it('should return true for Map objects', function() {
      unit.bool(isIterable(new Map())).isTrue().bool(isIterable(new Map([['a', 1], ['b', 5]]))).isTrue();
      return null;
    });
    it('should return true for strings', function() {
      unit.bool(isIterable('adsf')).isTrue().bool(isIterable('34.6')).isTrue().bool(isIterable(new String('hello world!'))).isTrue();
      return null;
    });
    it('should return false for WeakSet objects', function() {
      unit.bool(isIterable(new WeakSet())).isFalse().bool(isIterable(new WeakSet([
        {
          a: 5,
          b: 'hi'
        }
      ]))).isFalse();
      return null;
    });
    it('should return false for WeakMap objects', function() {
      unit.bool(isIterable(new WeakMap())).isFalse().bool(isIterable(new WeakMap([
        [{},
        5],
        [
          {
            a: 6
          },
          6
        ]
      ]))).isFalse();
      return null;
    });
    it('should return false for object literals', function() {
      unit.bool(isIterable({})).isFalse().bool(isIterable({
        a: 5
      })).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isIterable(1)).isFalse().bool(isIterable(234987)).isFalse().bool(isIterable(-239874)).isFalse().bool(isIterable(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isIterable(1.1)).isFalse().bool(isIterable(-0.4)).isFalse().bool(isIterable(234.4)).isFalse().bool(isIterable(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isIterable(noop)).isFalse().bool(isIterable(isIterable)).isFalse();
      return null;
    });
    return it('should return false for regexs', function() {
      unit.bool(isIterable(/asd/)).isFalse().bool(isIterable(/\d+/)).isFalse().bool(isIterable(/1/)).isFalse().bool(isIterable(new RegExp('3'))).isFalse();
      return null;
    });
  });

}).call(this);
