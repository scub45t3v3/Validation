(function() {
  var isSet, unit;

  unit = require('unit.js');

  isSet = require('../isSet');

  describe('#isSet', function() {
    it('should be a function', function() {
      unit.function(isSet);
      return null;
    });
    it('should return true for Set objects', function() {
      unit.bool(isSet(new Set())).isTrue().bool(isSet(new Set([4]))).isTrue();
      return null;
    });
    it('should return false for Map objects', function() {
      unit.bool(isSet(new Map())).isFalse().bool(isSet(new Map([['value', '3']]))).isFalse();
      return null;
    });
    it('should return false for WeakMap objects', function() {
      unit.bool(isSet(new WeakMap())).isFalse().bool(isSet(new WeakMap([
        [
          {
            a: 4
          },
          4
        ]
      ]))).isFalse();
      return null;
    });
    it('should return false for WeakSet objects', function() {
      unit.bool(isSet(new WeakSet())).isFalse().bool(isSet(new WeakSet([
        {
          a: 4
        }
      ]))).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isSet(1)).isFalse().bool(isSet(234987)).isFalse().bool(isSet(-239874)).isFalse().bool(isSet(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isSet(1.1)).isFalse().bool(isSet(-0.4)).isFalse().bool(isSet(234.4)).isFalse().bool(isSet(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isSet('adsf')).isFalse().bool(isSet('34.6')).isFalse().bool(isSet('-45fg')).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isSet({})).isFalse().bool(isSet(new String('asd'))).isFalse().bool(isSet({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isSet([])).isFalse().bool(isSet([1, 2])).isFalse().bool(isSet(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
