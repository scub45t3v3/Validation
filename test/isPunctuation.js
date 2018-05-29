(function() {
  var isPunctuation, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isPunctuation = require('../isPunctuation');

  describe('#isPunctuation', function() {
    it('should be a function', function() {
      unit.function(isPunctuation);
      return null;
    });
    it('should return true for valid punctuation only strings', function() {
      unit.bool(isPunctuation('#!@')).isTrue().bool(isPunctuation('!"#%&\'()*,-./:;?@[]_{}')).isTrue();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isPunctuation('we48tuer')).isFalse().bool(isPunctuation('we[foewf]')).isFalse().bool(isPunctuation('34w98uerj')).isFalse().bool(isPunctuation('*&TYY')).isFalse().bool(isPunctuation('serreg;dfskdfkjfgjh')).isFalse().bool(isPunctuation('sdf.,.mdf')).isFalse().bool(isPunctuation('we;o9tu49')).isFalse().bool(isPunctuation('q23qo98441`')).isFalse().bool(isPunctuation('ewr09ti34*&')).isFalse().bool(isPunctuation('%sdkjvnnd')).isFalse().bool(isPunctuation('=adkljfhsd')).isFalse().bool(isPunctuation('sadkjfh{sdkjf}')).isFalse().bool(isPunctuation('aweklhd[asldkfjsd]')).isFalse().bool(isPunctuation(',foiadfoihf<lkewf')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isPunctuation(14)).isFalse().bool(isPunctuation(234987)).isFalse().bool(isPunctuation(-2398)).isFalse().bool(isPunctuation(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isPunctuation(98.00007)).isFalse().bool(isPunctuation(-32407.3)).isFalse().bool(isPunctuation(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isPunctuation(noop)).isFalse().bool(isPunctuation(isPunctuation)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isPunctuation(/asd/)).isFalse().bool(isPunctuation(/\d+/)).isFalse().bool(isPunctuation(/1/)).isFalse().bool(isPunctuation(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isPunctuation([])).isFalse().bool(isPunctuation([1, 2, 3])).isFalse().bool(isPunctuation(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
