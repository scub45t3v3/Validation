(function() {
  var isMastercard, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isMastercard = require('../isMastercard');

  describe('#isMastercard', function() {
    it('should be a function', function() {
      unit.function(isMastercard);
      return null;
    });
    it('should return true for valid account numbers', function() {
      unit.bool(isMastercard('5555555555554444')).isTrue().bool(isMastercard('5105105105105100')).isTrue();
      return null;
    });
    it('should return false for invalid account numbers', function() {
      unit.bool(isMastercard('378282246310004')).isFalse().bool(isMastercard('378282246310006')).isFalse().bool(isMastercard('371449635398430')).isFalse().bool(isMastercard('371449635398432')).isFalse().bool(isMastercard('5610591081018250')).isFalse().bool(isMastercard('30569309025904')).isFalse().bool(isMastercard('6011111111111117')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isMastercard(14)).isFalse().bool(isMastercard(234987)).isFalse().bool(isMastercard(-2398)).isFalse().bool(isMastercard(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isMastercard(98.00007)).isFalse().bool(isMastercard(-32407.3)).isFalse().bool(isMastercard(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isMastercard(noop)).isFalse().bool(isMastercard(isMastercard)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isMastercard('adsf')).isFalse().bool(isMastercard('34.t')).isFalse().bool(isMastercard('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isMastercard(/asd/)).isFalse().bool(isMastercard(/\d+/)).isFalse().bool(isMastercard(/1/)).isFalse().bool(isMastercard(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isMastercard([])).isFalse().bool(isMastercard([1, 2, 3])).isFalse().bool(isMastercard(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
