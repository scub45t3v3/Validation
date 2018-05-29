(function() {
  var isAlphaNumeric, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isAlphaNumeric = require('../isAlphaNumeric');

  describe('#isAlphaNumeric', function() {
    it('should be a function', function() {
      unit.function(isAlphaNumeric);
      return null;
    });
    it('should return true for valid alphanumeric strings', function() {
      unit.bool(isAlphaNumeric('aslkd4958jfh')).isTrue().bool(isAlphaNumeric('alsdiu2309fhdsn')).isTrue().bool(isAlphaNumeric('3lsdkfg80945')).isTrue().bool(isAlphaNumeric('34w98dfskjer')).isTrue().bool(isAlphaNumeric('2')).isTrue().bool(isAlphaNumeric('y')).isTrue().bool(isAlphaNumeric('34w98erhdf')).isTrue().bool(isAlphaNumeric('awewiuhdesfgkj4wi8efskjndsv')).isTrue().bool(isAlphaNumeric('34w98erfkuherh')).isTrue().bool(isAlphaNumeric('ewrituer89348')).isTrue().bool(isAlphaNumeric('elriterifgheri8t4')).isTrue().bool(isAlphaNumeric('eilrtyuer438of')).isTrue().bool(isAlphaNumeric('w48otuo4e8fh')).isTrue().bool(isAlphaNumeric('394wt348h')).isTrue();
      return null;
    });
    it('should return true for positive integers', function() {
      unit.bool(isAlphaNumeric(14)).isTrue().bool(isAlphaNumeric(234987)).isTrue().bool(isAlphaNumeric(2398)).isTrue().bool(isAlphaNumeric(2)).isTrue();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isAlphaNumeric('we48tue^r')).isFalse().bool(isAlphaNumeric('we[foewf]')).isFalse().bool(isAlphaNumeric('34w98ue&rj')).isFalse().bool(isAlphaNumeric('*&TYY')).isFalse().bool(isAlphaNumeric('serreg;dfskdfkjfgjh')).isFalse().bool(isAlphaNumeric('sdf.,.mdf')).isFalse().bool(isAlphaNumeric('we;o9tu49')).isFalse().bool(isAlphaNumeric('q23qo98441`')).isFalse().bool(isAlphaNumeric('ewr09ti34*&')).isFalse().bool(isAlphaNumeric('%sdkjvnnd')).isFalse().bool(isAlphaNumeric('=adkljfhsd')).isFalse().bool(isAlphaNumeric('sadkjfh{sdkjf}')).isFalse().bool(isAlphaNumeric('aweklhd[asldkfjsd]')).isFalse().bool(isAlphaNumeric(',foiadfoihf<lkewf')).isFalse();
      return null;
    });
    it('should return false for negative integers', function() {
      unit.bool(isAlphaNumeric(-1)).isFalse().bool(isAlphaNumeric(-239874)).isFalse(0).bool(isAlphaNumeric(-2397)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isAlphaNumeric(98.00007)).isFalse().bool(isAlphaNumeric(-32407.3)).isFalse().bool(isAlphaNumeric(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isAlphaNumeric(noop)).isFalse().bool(isAlphaNumeric(isAlphaNumeric)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isAlphaNumeric(/asd/)).isFalse().bool(isAlphaNumeric(/\d+/)).isFalse().bool(isAlphaNumeric(/1/)).isFalse().bool(isAlphaNumeric(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isAlphaNumeric([])).isFalse().bool(isAlphaNumeric([1, 2, 3])).isFalse().bool(isAlphaNumeric(['a', 5, {}])).isFalse();
      return null;
    });
    it('should return false for null', function() {
      unit.bool(isAlphaNumeric(null)).isFalse();
      return null;
    });
    return it('should return false for undefined', function() {
      unit.bool(isAlphaNumeric()).isFalse().bool(isAlphaNumeric(void 0)).isFalse();
      return null;
    });
  });

}).call(this);
