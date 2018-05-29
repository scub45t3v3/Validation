(function() {
  var isISIN, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isISIN = require('../isISIN');

  describe('#isISIN', function() {
    it('should be a function', function() {
      unit.function(isISIN);
      return null;
    });
    it('should return true for valid ISIN strings', function() {
      unit.bool(isISIN('US5949181045')).isTrue().bool(isISIN('US38259P5089')).isTrue().bool(isISIN('US0378331005')).isTrue().bool(isISIN('NL0000729408')).isTrue().bool(isISIN('JP3946600008')).isTrue().bool(isISIN('DE000DZ21632')).isTrue().bool(isISIN('DE000DB7HWY7')).isTrue().bool(isISIN('DE000CM7VX13')).isTrue().bool(isISIN('CH0031240127')).isTrue().bool(isISIN('CA9861913023')).isTrue().bool(isISIN('GB0002634946')).isTrue();
      return null;
    });
    it('should return false for invalid ISIN strings', function() {
      unit.bool(isISIN('US5949187045')).isFalse().bool(isISIN('US38259P0089')).isFalse().bool(isISIN('US0378334005')).isFalse().bool(isISIN('NL000072G408')).isFalse().bool(isISIN('JP3946603008')).isFalse().bool(isISIN('DE000DZ2L632')).isFalse().bool(isISIN('DE000DBPHWY7')).isFalse().bool(isISIN('DE000CMFVX13')).isFalse().bool(isISIN('CH00312R0127')).isFalse().bool(isISIN('CA98619J3023')).isFalse().bool(isISIN('GB00026D4946')).isFalse();
      return null;
    });
    it('should return false for bools', function() {
      unit.bool(isISIN(true)).isFalse().bool(isISIN(false)).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isISIN([])).isFalse().bool(isISIN([1, 2])).isFalse().bool(isISIN(['a', {}, 6])).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isISIN(1)).isFalse().bool(isISIN(234987)).isFalse().bool(isISIN(-239874)).isFalse().bool(isISIN(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isISIN(1.1)).isFalse().bool(isISIN(-0.4)).isFalse().bool(isISIN(234.4)).isFalse().bool(isISIN(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isISIN(noop)).isFalse().bool(isISIN(isISIN)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isISIN(/asd/)).isFalse().bool(isISIN(/\d+/)).isFalse().bool(isISIN(/1/)).isFalse().bool(isISIN(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isISIN({})).isFalse().bool(isISIN(new String('asd'))).isFalse().bool(isISIN({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isISIN(new Set())).isFalse().bool(isISIN(new Set().add(1))).isFalse().bool(isISIN(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
