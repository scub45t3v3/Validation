(function() {
  var isVisa, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isVisa = require('../isVisa');

  describe('#isVisa', function() {
    it('should be a function', function() {
      unit.function(isVisa);
      return null;
    });
    it('should return true for valid account numbers', function() {
      unit.bool(isVisa('4111111111111111')).isTrue().bool(isVisa('4012888888881881')).isTrue().bool(isVisa('4222222222222')).isTrue();
      return null;
    });
    it('should return false for invalid account numbers', function() {
      unit.bool(isVisa('378282246310004')).isFalse().bool(isVisa('378282246310006')).isFalse().bool(isVisa('371449635398430')).isFalse().bool(isVisa('371449635398432')).isFalse().bool(isVisa('5610591081018250')).isFalse().bool(isVisa('30569309025904')).isFalse().bool(isVisa('6011111111111117')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isVisa(14)).isFalse().bool(isVisa(234987)).isFalse().bool(isVisa(-2398)).isFalse().bool(isVisa(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isVisa(98.00007)).isFalse().bool(isVisa(-32407.3)).isFalse().bool(isVisa(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isVisa(noop)).isFalse().bool(isVisa(isVisa)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isVisa('adsf')).isFalse().bool(isVisa('34.t')).isFalse().bool(isVisa('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isVisa(/asd/)).isFalse().bool(isVisa(/\d+/)).isFalse().bool(isVisa(/1/)).isFalse().bool(isVisa(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isVisa([])).isFalse().bool(isVisa([1, 2, 3])).isFalse().bool(isVisa(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
