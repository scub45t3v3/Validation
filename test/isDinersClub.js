(function() {
  var isDinersClub, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isDinersClub = require('../isDinersClub');

  describe('#isDinersClub', function() {
    it('should be a function', function() {
      unit.function(isDinersClub);
      return null;
    });
    it('should return true for valid account numbers', function() {
      unit.bool(isDinersClub('30569309025904')).isTrue().bool(isDinersClub('38520000023237')).isTrue();
      return null;
    });
    it('should return false for invalid account numbers', function() {
      unit.bool(isDinersClub('378282246310004')).isFalse().bool(isDinersClub('378282246310006')).isFalse().bool(isDinersClub('371449635398430')).isFalse().bool(isDinersClub('371449635398432')).isFalse().bool(isDinersClub('5610591081018250')).isFalse().bool(isDinersClub('30569309025903')).isFalse().bool(isDinersClub('6011111111111117')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isDinersClub(14)).isFalse().bool(isDinersClub(234987)).isFalse().bool(isDinersClub(-2398)).isFalse().bool(isDinersClub(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isDinersClub(98.00007)).isFalse().bool(isDinersClub(-32407.3)).isFalse().bool(isDinersClub(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isDinersClub(noop)).isFalse().bool(isDinersClub(isDinersClub)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isDinersClub('adsf')).isFalse().bool(isDinersClub('34.t')).isFalse().bool(isDinersClub('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isDinersClub(/asd/)).isFalse().bool(isDinersClub(/\d+/)).isFalse().bool(isDinersClub(/1/)).isFalse().bool(isDinersClub(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isDinersClub([])).isFalse().bool(isDinersClub([1, 2, 3])).isFalse().bool(isDinersClub(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
