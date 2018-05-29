(function() {
  var isBool, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isBool = require('../isBool');

  describe('#isBool', function() {
    it('should be a function', function() {
      unit.function(isBool);
      return null;
    });
    it('should return true for bools', function() {
      unit.bool(isBool(true)).isTrue().bool(isBool(false)).isTrue().bool(isBool(new Boolean())).isTrue().bool(isBool(new Boolean(1))).isTrue();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isBool([])).isFalse().bool(isBool([1, 2])).isFalse().bool(isBool(['a', {}, 6])).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isBool(1)).isFalse().bool(isBool(234987)).isFalse().bool(isBool(-239874)).isFalse().bool(isBool(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isBool(1.1)).isFalse().bool(isBool(-0.4)).isFalse().bool(isBool(234.4)).isFalse().bool(isBool(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isBool(noop)).isFalse().bool(isBool(isBool)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isBool('adsf')).isFalse().bool(isBool('34.6')).isFalse().bool(isBool('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isBool(/asd/)).isFalse().bool(isBool(/\d+/)).isFalse().bool(isBool(/1/)).isFalse().bool(isBool(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isBool({})).isFalse().bool(isBool(new String('asd'))).isFalse().bool(isBool({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isBool(new Set())).isFalse().bool(isBool(new Set().add(1))).isFalse().bool(isBool(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
