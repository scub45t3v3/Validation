(function() {
  var isDiscover, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isDiscover = require('../isDiscover');

  describe('#isDiscover', function() {
    it('should be a function', function() {
      unit.function(isDiscover);
      return null;
    });
    it('should return true for valid account numbers', function() {
      unit.bool(isDiscover('6011111111111117')).isTrue().bool(isDiscover('6011000990139424')).isTrue();
      return null;
    });
    it('should return false for invalid account numbers', function() {
      unit.bool(isDiscover('378282246310004')).isFalse().bool(isDiscover('378282246310006')).isFalse().bool(isDiscover('371449635398430')).isFalse().bool(isDiscover('371449635398432')).isFalse().bool(isDiscover('5610591081018250')).isFalse().bool(isDiscover('30569309025904')).isFalse().bool(isDiscover('6011111111111116')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isDiscover(14)).isFalse().bool(isDiscover(234987)).isFalse().bool(isDiscover(-2398)).isFalse().bool(isDiscover(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isDiscover(98.00007)).isFalse().bool(isDiscover(-32407.3)).isFalse().bool(isDiscover(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isDiscover(noop)).isFalse().bool(isDiscover(isDiscover)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isDiscover('adsf')).isFalse().bool(isDiscover('34.t')).isFalse().bool(isDiscover('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isDiscover(/asd/)).isFalse().bool(isDiscover(/\d+/)).isFalse().bool(isDiscover(/1/)).isFalse().bool(isDiscover(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isDiscover([])).isFalse().bool(isDiscover([1, 2, 3])).isFalse().bool(isDiscover(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
