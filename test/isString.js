(function() {
  var isString, unit;

  unit = require('unit.js');

  isString = require('../isString');

  describe('#isString', function() {
    it('should be a function', function() {
      unit.function(isString);
      return null;
    });
    it('should return true for strings', function() {
      unit.bool(isString('hi')).isTrue().bool(isString('34')).isTrue().bool(isString(new String('new'))).isTrue();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isString(1)).isFalse().bool(isString(234987)).isFalse().bool(isString(-239874)).isFalse().bool(isString(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isString(1.1)).isFalse().bool(isString(-0.4)).isFalse().bool(isString(234.4)).isFalse().bool(isString(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isString(/asd/)).isFalse().bool(isString(/\d+/)).isFalse().bool(isString(/1/)).isFalse().bool(isString(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isString({})).isFalse().bool(isString(new Error('boo'))).isFalse().bool(isString({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isString([])).isFalse().bool(isString([1, 2])).isFalse().bool(isString(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
