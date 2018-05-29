(function() {
  var isWeakMap, unit;

  unit = require('unit.js');

  isWeakMap = require('../isWeakMap');

  describe('#isWeakMap', function() {
    it('should be a function', function() {
      unit.function(isWeakMap);
      return null;
    });
    it('should return true for WeakMap objects', function() {
      unit.bool(isWeakMap(new WeakMap())).isTrue().bool(isWeakMap(new WeakMap([
        [
          {
            a: 4
          },
          4
        ]
      ]))).isTrue();
      return null;
    });
    it('should return false for Map objects', function() {
      unit.bool(isWeakMap(new Map())).isFalse().bool(isWeakMap(new Map([['value', '3']]))).isFalse();
      return null;
    });
    it('should return false for Set objects', function() {
      unit.bool(isWeakMap(new Set())).isFalse().bool(isWeakMap(new Set([4]))).isFalse();
      return null;
    });
    it('should return false for WeakSet objects', function() {
      unit.bool(isWeakMap(new WeakSet())).isFalse().bool(isWeakMap(new WeakSet([
        {
          a: 4
        }
      ]))).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isWeakMap(1)).isFalse().bool(isWeakMap(234987)).isFalse().bool(isWeakMap(-239874)).isFalse().bool(isWeakMap(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isWeakMap(1.1)).isFalse().bool(isWeakMap(-0.4)).isFalse().bool(isWeakMap(234.4)).isFalse().bool(isWeakMap(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isWeakMap('adsf')).isFalse().bool(isWeakMap('34.6')).isFalse().bool(isWeakMap('-45fg')).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isWeakMap({})).isFalse().bool(isWeakMap(new String('asd'))).isFalse().bool(isWeakMap({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isWeakMap([])).isFalse().bool(isWeakMap([1, 2])).isFalse().bool(isWeakMap(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
