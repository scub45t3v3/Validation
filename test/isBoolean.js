(function() {
  var isBoolean, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isBoolean = require('../isBoolean');

  describe('#isBoolean', function() {
    it('should be a function', function() {
      unit.function(isBoolean);
      return null;
    });
    it('should return true for bools', function() {
      unit.bool(isBoolean(true)).isTrue().bool(isBoolean(false)).isTrue().bool(isBoolean(new Boolean())).isTrue().bool(isBoolean(new Boolean(1))).isTrue();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isBoolean([])).isFalse().bool(isBoolean([1, 2])).isFalse().bool(isBoolean(['a', {}, 6])).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isBoolean(1)).isFalse().bool(isBoolean(234987)).isFalse().bool(isBoolean(-239874)).isFalse().bool(isBoolean(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isBoolean(1.1)).isFalse().bool(isBoolean(-0.4)).isFalse().bool(isBoolean(234.4)).isFalse().bool(isBoolean(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isBoolean(noop)).isFalse().bool(isBoolean(isBoolean)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isBoolean('adsf')).isFalse().bool(isBoolean('34.6')).isFalse().bool(isBoolean('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isBoolean(/asd/)).isFalse().bool(isBoolean(/\d+/)).isFalse().bool(isBoolean(/1/)).isFalse().bool(isBoolean(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isBoolean({})).isFalse().bool(isBoolean(new String('asd'))).isFalse().bool(isBoolean({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isBoolean(new Set())).isFalse().bool(isBoolean(new Set().add(1))).isFalse().bool(isBoolean(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
