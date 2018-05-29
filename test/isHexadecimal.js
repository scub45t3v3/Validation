(function() {
  var isHexadecimal, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isHexadecimal = require('../isHexadecimal');

  describe('#isHexadecimal', function() {
    it('should be a function', function() {
      unit.function(isHexadecimal);
      return null;
    });
    it('should return true for hex values', function() {
      unit.bool(isHexadecimal(0x5af)).isTrue().bool(isHexadecimal(0xF)).isTrue().bool(isHexadecimal(0x00dD)).isTrue();
      return null;
    });
    it('should return true for hex strings', function() {
      unit.bool(isHexadecimal('a')).isTrue().bool(isHexadecimal('f')).isTrue().bool(isHexadecimal('3')).isTrue().bool(isHexadecimal('ad45')).isTrue();
      return null;
    });
    it('should return true for positive integers', function() {
      unit.bool(isHexadecimal(1)).isTrue().bool(isHexadecimal(234987)).isTrue().bool(isHexadecimal(2398)).isTrue().bool(isHexadecimal(0)).isTrue();
      return null;
    });
    it('should return false for negative integers', function() {
      unit.bool(isHexadecimal(-1)).isFalse().bool(isHexadecimal(-234)).isFalse().bool(isHexadecimal(-234987)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isHexadecimal(1.1)).isFalse().bool(isHexadecimal(-0.4)).isFalse().bool(isHexadecimal(234.4)).isFalse().bool(isHexadecimal(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isHexadecimal('adsf')).isFalse().bool(isHexadecimal('34.6')).isFalse().bool(isHexadecimal('-45fg')).isFalse();
      return null;
    });
    it('should return false for bools', function() {
      unit.bool(isHexadecimal(true)).isFalse().bool(isHexadecimal(false)).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isHexadecimal([])).isFalse().bool(isHexadecimal([1, 2])).isFalse().bool(isHexadecimal(['a', {}, 6])).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isHexadecimal(noop)).isFalse().bool(isHexadecimal(isHexadecimal)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isHexadecimal(/asd/)).isFalse().bool(isHexadecimal(/\d+/)).isFalse().bool(isHexadecimal(/1/)).isFalse().bool(isHexadecimal(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isHexadecimal({})).isFalse().bool(isHexadecimal(new String('asd'))).isFalse().bool(isHexadecimal({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isHexadecimal(new Set())).isFalse().bool(isHexadecimal(new Set().add(1))).isFalse().bool(isHexadecimal(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
