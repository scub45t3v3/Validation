(function() {
  var isUndefined, unit;

  unit = require('unit.js');

  isUndefined = require('../isUndefined');

  describe('#isUndefined', function() {
    it('should be a function', function() {
      unit.function(isUndefined);
      return null;
    });
    it('should return true for undefined', function() {
      unit.bool(isUndefined()).isTrue().bool(isUndefined(void 0)).isTrue().bool(isUndefined({
        a: 5
      }.b)).isTrue();
      return null;
    });
    it('should return true for deleted properties on an object', function() {
      var test;
      test = {
        a: 5,
        b: true
      };
      unit.given(delete test.a).bool(isUndefined(test.a)).isTrue().bool(isUndefined(test.z)).isTrue();
      return null;
    });
    it('should return false for null', function() {
      unit.bool(isUndefined(null)).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isUndefined(1)).isFalse().bool(isUndefined(234987)).isFalse().bool(isUndefined(-239874)).isFalse().bool(isUndefined(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isUndefined(1.1)).isFalse().bool(isUndefined(-0.4)).isFalse().bool(isUndefined(234.4)).isFalse().bool(isUndefined(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isUndefined('adsf')).isFalse().bool(isUndefined('34.6')).isFalse().bool(isUndefined('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isUndefined(/asd/)).isFalse().bool(isUndefined(/\d+/)).isFalse().bool(isUndefined(/1/)).isFalse().bool(isUndefined(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isUndefined({})).isFalse().bool(isUndefined(new String('asd'))).isFalse().bool(isUndefined({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isUndefined([])).isFalse().bool(isUndefined([1, 2])).isFalse().bool(isUndefined(['a', {}, 6])).isFalse();
      return null;
    });
  });

}).call(this);
