(function() {
  var isRegExp, unit;

  unit = require('unit.js');

  isRegExp = require('../isRegExp');

  describe('#isRegExp', function() {
    it('should be a function', function() {
      unit.function(isRegExp);
      return null;
    });
    it('should return true for regexs', function() {
      unit.bool(isRegExp(/asd/)).isTrue().bool(isRegExp(/\d+/)).isTrue().bool(isRegExp(/1/)).isTrue().bool(isRegExp(new RegExp('3'))).isTrue();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isRegExp(1)).isFalse().bool(isRegExp(234987)).isFalse().bool(isRegExp(-239874)).isFalse().bool(isRegExp(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isRegExp(1.1)).isFalse().bool(isRegExp(-0.4)).isFalse().bool(isRegExp(234.4)).isFalse().bool(isRegExp(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isRegExp('adsf')).isFalse().bool(isRegExp('34.6')).isFalse().bool(isRegExp('-45fg')).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isRegExp({})).isFalse().bool(isRegExp(new String('asd'))).isFalse().bool(isRegExp({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isRegExp([])).isFalse().bool(isRegExp([1, 2])).isFalse().bool(isRegExp(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
