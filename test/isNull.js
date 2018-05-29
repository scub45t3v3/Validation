(function() {
  var isNull, unit;

  unit = require('unit.js');

  isNull = require('../isNull');

  describe('#isNull', function() {
    it('should be a function', function() {
      unit.function(isNull);
      return null;
    });
    it('should return true for null', function() {
      unit.bool(isNull(null)).isTrue();
      return null;
    });
    it('should return false for undefined', function() {
      unit.bool(isNull(void 0)).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isNull(1)).isFalse().bool(isNull(234987)).isFalse().bool(isNull(-239874)).isFalse().bool(isNull(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isNull(1.1)).isFalse().bool(isNull(-0.4)).isFalse().bool(isNull(234.4)).isFalse().bool(isNull(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isNull('adsf')).isFalse().bool(isNull('34.6')).isFalse().bool(isNull('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isNull(/asd/)).isFalse().bool(isNull(/\d+/)).isFalse().bool(isNull(/1/)).isFalse().bool(isNull(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isNull({})).isFalse().bool(isNull(new String('asd'))).isFalse().bool(isNull({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isNull([])).isFalse().bool(isNull([1, 2])).isFalse().bool(isNull(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
