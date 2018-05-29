(function() {
  var isNaN, unit;

  unit = require('unit.js');

  isNaN = require('../isNaN');

  describe('#isNaN', function() {
    it('should be a function', function() {
      unit.function(isNaN);
      return null;
    });
    it('should return true for NaN', function() {
      unit.bool(isNaN(0/0)).isTrue().bool(isNaN(1 - 'a')).isTrue();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isNaN(1)).isFalse().bool(isNaN(234987)).isFalse().bool(isNaN(-239874)).isFalse().bool(isNaN(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isNaN(1.1)).isFalse().bool(isNaN(-0.4)).isFalse().bool(isNaN(234.4)).isFalse().bool(isNaN(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isNaN('adsf')).isFalse().bool(isNaN('34.6')).isFalse().bool(isNaN('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isNaN(/asd/)).isFalse().bool(isNaN(/\d+/)).isFalse().bool(isNaN(/1/)).isFalse().bool(isNaN(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isNaN({})).isFalse().bool(isNaN(new String('asd'))).isFalse().bool(isNaN({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isNaN([])).isFalse().bool(isNaN([1, 2])).isFalse().bool(isNaN(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
