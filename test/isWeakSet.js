(function() {
  var isWeakSet, unit;

  unit = require('unit.js');

  isWeakSet = require('../isWeakSet');

  describe('#isWeakSet', function() {
    it('should be a function', function() {
      unit.function(isWeakSet);
      return null;
    });
    it('should return true for WeakSet objects', function() {
      unit.bool(isWeakSet(new WeakSet())).isTrue().bool(isWeakSet(new WeakSet([
        {
          a: 4
        }
      ]))).isTrue();
      return null;
    });
    it('should return false for Set objects', function() {
      unit.bool(isWeakSet(new Set())).isFalse().bool(isWeakSet(new Set([4]))).isFalse();
      return null;
    });
    it('should return false for Map objects', function() {
      unit.bool(isWeakSet(new Map())).isFalse().bool(isWeakSet(new Map([['value', '3']]))).isFalse();
      return null;
    });
    it('should return false for WeakMap objects', function() {
      unit.bool(isWeakSet(new WeakMap())).isFalse().bool(isWeakSet(new WeakMap([
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
      unit.bool(isWeakSet(1)).isFalse().bool(isWeakSet(234987)).isFalse().bool(isWeakSet(-239874)).isFalse().bool(isWeakSet(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isWeakSet(1.1)).isFalse().bool(isWeakSet(-0.4)).isFalse().bool(isWeakSet(234.4)).isFalse().bool(isWeakSet(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isWeakSet('adsf')).isFalse().bool(isWeakSet('34.6')).isFalse().bool(isWeakSet('-45fg')).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isWeakSet({})).isFalse().bool(isWeakSet(new String('asd'))).isFalse().bool(isWeakSet({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isWeakSet([])).isFalse().bool(isWeakSet([1, 2])).isFalse().bool(isWeakSet(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
