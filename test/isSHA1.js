(function() {
  var isSHA1, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isSHA1 = require('../isSHA1');

  describe('#isSHA1', function() {
    it('should be a function', function() {
      unit.function(isSHA1);
      return null;
    });
    it('should return true for valid SHA1 strings', function() {
      unit.bool(isSHA1('62c4f0b4dbe2a9cf80e003bdd7011f54f6a8cb3d')).isTrue().bool(isSHA1('db755bf69b1e53b94502c41dae860344bd67ad9f')).isTrue().bool(isSHA1('93d7c4f1405d323a34273d2ec04ad13c67df9b3a')).isTrue().bool(isSHA1('ae898bce08fcd570d7e36d3409237739ff69b2a5')).isTrue().bool(isSHA1('1e65382d1447e877d867947269bbfebf6723dbf6')).isTrue().bool(isSHA1('f9ac64ad54ed5add763e588938f6ac9a790abf3d')).isTrue().bool(isSHA1('190102c2743633072e050c8d697faebc0714dfa7')).isTrue();
      return null;
    });
    it('should return false for invalid SHA1 strings', function() {
      unit.bool(isSHA1('af:4ff:a8:93:01:d2')).isFalse().bool(isSHA1('af:hf:a8:93:01:d2')).isFalse().bool(isSHA1('af:4f:a8:93:01')).isFalse().bool(isSHA1('*&TYY')).isFalse().bool(isSHA1('serreg;dfskdfkjfgjh')).isFalse().bool(isSHA1('sdf.,.mdf')).isFalse().bool(isSHA1('we;o9tu49')).isFalse().bool(isSHA1('q23qo98441`')).isFalse().bool(isSHA1('ewr09ti34*&')).isFalse().bool(isSHA1('%sdkjvnnd')).isFalse().bool(isSHA1('=adkljfhsd')).isFalse().bool(isSHA1('sadkjfh{sdkjf}')).isFalse().bool(isSHA1('aweklhd[asldkfjsd]')).isFalse().bool(isSHA1(',foiadfoihf<lkewf')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isSHA1(14)).isFalse().bool(isSHA1(234987)).isFalse().bool(isSHA1(-2398)).isFalse().bool(isSHA1(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isSHA1(98.00007)).isFalse().bool(isSHA1(-32407.3)).isFalse().bool(isSHA1(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isSHA1(noop)).isFalse().bool(isSHA1(isSHA1)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isSHA1(/asd/)).isFalse().bool(isSHA1(/\d+/)).isFalse().bool(isSHA1(/1/)).isFalse().bool(isSHA1(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isSHA1([])).isFalse().bool(isSHA1([1, 2, 3])).isFalse().bool(isSHA1(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
