(function() {
  var isPromise, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isPromise = require('../isPromise');

  describe('#isPromise', function() {
    it('should be a function', function() {
      unit.function(isPromise);
      return null;
    });
    it('should return true for Promise objects', function() {
      unit.bool(isPromise(new Promise(noop, noop))).isTrue().bool(isPromise(Promise.resolve())).isTrue().bool(isPromise(Promise.reject())).isTrue();
      return null;
    });
    it('should return false for Set objects', function() {
      unit.bool(isPromise(new Set())).isFalse().bool(isPromise(new Set([4]))).isFalse();
      return null;
    });
    it('should return false for WeakSet objects', function() {
      unit.bool(isPromise(new WeakSet())).isFalse().bool(isPromise(new WeakSet([
        {
          a: 4
        }
      ]))).isFalse();
      return null;
    });
    it('should return false for Map objects', function() {
      unit.bool(isPromise(new Map())).isFalse().bool(isPromise(new Map([['value', '3']]))).isFalse();
      return null;
    });
    it('should return false for WeakMap objects', function() {
      unit.bool(isPromise(new WeakMap())).isFalse().bool(isPromise(new WeakMap([
        [
          {
            a: 4
          },
          4
        ]
      ]))).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isPromise(1)).isFalse().bool(isPromise(234987)).isFalse().bool(isPromise(-239874)).isFalse().bool(isPromise(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isPromise(1.1)).isFalse().bool(isPromise(-0.4)).isFalse().bool(isPromise(234.4)).isFalse().bool(isPromise(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isPromise('adsf')).isFalse().bool(isPromise('34.6')).isFalse().bool(isPromise('-45fg')).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isPromise({})).isFalse().bool(isPromise(new String('asd'))).isFalse().bool(isPromise({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isPromise([])).isFalse().bool(isPromise([1, 2])).isFalse().bool(isPromise(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
