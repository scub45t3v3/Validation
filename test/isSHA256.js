(function() {
  var isSHA256, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isSHA256 = require('../isSHA256');

  describe('#isSHA256', function() {
    it('should be a function', function() {
      unit.function(isSHA256);
      return null;
    });
    it('should return true for valid SHA256 strings', function() {
      unit.bool(isSHA256('62c4f0b4dbe2a9cf80e003bdd7011f54'.repeat(2))).isTrue().bool(isSHA256('db755bf69b1e53b94502c41dae860344'.repeat(2))).isTrue().bool(isSHA256('93d7c4f1405d323a34273d2ec04ad13c'.repeat(2))).isTrue().bool(isSHA256('ae898bce08fcd570d7e36d3409237739'.repeat(2))).isTrue().bool(isSHA256('1e65382d1447e877d867947269bbfebf'.repeat(2))).isTrue().bool(isSHA256('f9ac64ad54ed5add763e588938f6ac9a'.repeat(2))).isTrue().bool(isSHA256('190102c2743633072e050c8d697faebc'.repeat(2))).isTrue();
      return null;
    });
    it('should return false for invalid SHA256 strings', function() {
      unit.bool(isSHA256('af:4ff:a8:93:01:d2')).isFalse().bool(isSHA256('af:hf:a8:93:01:d2')).isFalse().bool(isSHA256('af:4f:a8:93:01')).isFalse().bool(isSHA256('*&TYY')).isFalse().bool(isSHA256('serreg;dfskdfkjfgjh')).isFalse().bool(isSHA256('sdf.,.mdf')).isFalse().bool(isSHA256('we;o9tu49')).isFalse().bool(isSHA256('q23qo98441`')).isFalse().bool(isSHA256('ewr09ti34*&')).isFalse().bool(isSHA256('%sdkjvnnd')).isFalse().bool(isSHA256('=adkljfhsd')).isFalse().bool(isSHA256('sadkjfh{sdkjf}')).isFalse().bool(isSHA256('aweklhd[asldkfjsd]')).isFalse().bool(isSHA256(',foiadfoihf<lkewf')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isSHA256(14)).isFalse().bool(isSHA256(234987)).isFalse().bool(isSHA256(-2398)).isFalse().bool(isSHA256(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isSHA256(98.00007)).isFalse().bool(isSHA256(-32407.3)).isFalse().bool(isSHA256(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isSHA256(noop)).isFalse().bool(isSHA256(isSHA256)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isSHA256(/asd/)).isFalse().bool(isSHA256(/\d+/)).isFalse().bool(isSHA256(/1/)).isFalse().bool(isSHA256(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isSHA256([])).isFalse().bool(isSHA256([1, 2, 3])).isFalse().bool(isSHA256(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
