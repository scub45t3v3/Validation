(function() {
  var isIterableIterator, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isIterableIterator = require('../isIterableIterator');

  describe('#isIterableIterator', function() {
    it('should be a function', function() {
      unit.function(isIterableIterator);
      return null;
    });
    it('should return true for generator function results', function() {
      var test;
      test = function*() {
        return (yield 1);
      };
      unit.bool(isIterableIterator(test())).isTrue();
      return null;
    });
    it('should return true for SetIterator objects', function() {
      unit.bool(isIterableIterator(new Set()[Symbol.iterator]())).isTrue();
      return null;
    });
    it('should return true for MapIterator objects', function() {
      unit.bool(isIterableIterator(new Map()[Symbol.iterator]())).isTrue();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isIterableIterator([])).isFalse().bool(isIterableIterator([1, 2, 3])).isFalse();
      return null;
    });
    it('should return false for Set objects', function() {
      unit.bool(isIterableIterator(new Set())).isFalse().bool(isIterableIterator(new Set([1, 2, 3]))).isFalse();
      return null;
    });
    it('should return false for Map objects', function() {
      unit.bool(isIterableIterator(new Map())).isFalse().bool(isIterableIterator(new Map([['a', 1], ['b', 5]]))).isFalse();
      return null;
    });
    it('should return false for WeakSet objects', function() {
      unit.bool(isIterableIterator(new WeakSet())).isFalse().bool(isIterableIterator(new WeakSet([
        {
          a: 5,
          b: 'hi'
        }
      ]))).isFalse();
      return null;
    });
    it('should return false for WeakMap objects', function() {
      unit.bool(isIterableIterator(new WeakMap())).isFalse().bool(isIterableIterator(new WeakMap([
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
    it('should return false for strings', function() {
      unit.bool(isIterableIterator('adsf')).isFalse().bool(isIterableIterator('34.6')).isFalse().bool(isIterableIterator(new String('hello world!'))).isFalse();
      return null;
    });
    it('should return false for WeakSet objects', function() {
      unit.bool(isIterableIterator(new WeakSet())).isFalse().bool(isIterableIterator(new WeakSet([
        {
          a: 5,
          b: 'hi'
        }
      ]))).isFalse();
      return null;
    });
    it('should return false for WeakMap objects', function() {
      unit.bool(isIterableIterator(new WeakMap())).isFalse().bool(isIterableIterator(new WeakMap([
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
      unit.bool(isIterableIterator({})).isFalse().bool(isIterableIterator({
        a: 5
      })).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isIterableIterator(1)).isFalse().bool(isIterableIterator(234987)).isFalse().bool(isIterableIterator(-239874)).isFalse().bool(isIterableIterator(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isIterableIterator(1.1)).isFalse().bool(isIterableIterator(-0.4)).isFalse().bool(isIterableIterator(234.4)).isFalse().bool(isIterableIterator(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isIterableIterator(noop)).isFalse().bool(isIterableIterator(isIterableIterator)).isFalse();
      return null;
    });
    return it('should return false for regexs', function() {
      unit.bool(isIterableIterator(/asd/)).isFalse().bool(isIterableIterator(/\d+/)).isFalse().bool(isIterableIterator(/1/)).isFalse().bool(isIterableIterator(new RegExp('3'))).isFalse();
      return null;
    });
  });

}).call(this);
