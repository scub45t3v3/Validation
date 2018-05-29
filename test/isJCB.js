(function() {
  var isJCB, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isJCB = require('../isJCB');

  describe('#isJCB', function() {
    it('should be a function', function() {
      unit.function(isJCB);
      return null;
    });
    it('should return true for valid account numbers', function() {
      unit.bool(isJCB('3530111333300000')).isTrue().bool(isJCB('3566002020360505')).isTrue();
      return null;
    });
    it('should return false for invalid account numbers', function() {
      unit.bool(isJCB('378282246310004')).isFalse().bool(isJCB('378282246310006')).isFalse().bool(isJCB('371449635398430')).isFalse().bool(isJCB('371449635398432')).isFalse().bool(isJCB('5610591081018250')).isFalse().bool(isJCB('30569309025904')).isFalse().bool(isJCB('6011111111111117')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isJCB(14)).isFalse().bool(isJCB(234987)).isFalse().bool(isJCB(-2398)).isFalse().bool(isJCB(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isJCB(98.00007)).isFalse().bool(isJCB(-32407.3)).isFalse().bool(isJCB(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isJCB(noop)).isFalse().bool(isJCB(isJCB)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isJCB('adsf')).isFalse().bool(isJCB('34.t')).isFalse().bool(isJCB('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isJCB(/asd/)).isFalse().bool(isJCB(/\d+/)).isFalse().bool(isJCB(/1/)).isFalse().bool(isJCB(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isJCB([])).isFalse().bool(isJCB([1, 2, 3])).isFalse().bool(isJCB(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
