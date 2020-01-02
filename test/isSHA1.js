'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isSHA1 = require('../isSHA1');

// describe #isSHA1
describe('#isSHA1', () => {
  it('should be a function', () => {
    unit
      .function(isSHA1);
  }); // end it

  it('should return true for valid SHA1 strings', () => {
    unit
      .bool(isSHA1('62c4f0b4dbe2a9cf80e003bdd7011f54f6a8cb3d'))
      .isTrue()
      .bool(isSHA1('db755bf69b1e53b94502c41dae860344bd67ad9f'))
      .isTrue()
      .bool(isSHA1('93d7c4f1405d323a34273d2ec04ad13c67df9b3a'))
      .isTrue()
      .bool(isSHA1('ae898bce08fcd570d7e36d3409237739ff69b2a5'))
      .isTrue()
      .bool(isSHA1('1e65382d1447e877d867947269bbfebf6723dbf6'))
      .isTrue()
      .bool(isSHA1('f9ac64ad54ed5add763e588938f6ac9a790abf3d'))
      .isTrue()
      .bool(isSHA1('190102c2743633072e050c8d697faebc0714dfa7'))
      .isTrue();
  }); // end it

  it('should return false for invalid SHA1 strings', () => {
    unit
      .bool(isSHA1('af:4ff:a8:93:01:d2'))
      .isFalse()
      .bool(isSHA1('af:hf:a8:93:01:d2'))
      .isFalse()
      .bool(isSHA1('af:4f:a8:93:01'))
      .isFalse()
      .bool(isSHA1('*&TYY'))
      .isFalse()
      .bool(isSHA1('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isSHA1('sdf.,.mdf'))
      .isFalse()
      .bool(isSHA1('we;o9tu49'))
      .isFalse()
      .bool(isSHA1('q23qo98441`'))
      .isFalse()
      .bool(isSHA1('ewr09ti34*&'))
      .isFalse()
      .bool(isSHA1('%sdkjvnnd'))
      .isFalse()
      .bool(isSHA1('=adkljfhsd'))
      .isFalse()
      .bool(isSHA1('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isSHA1('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isSHA1(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isSHA1(14))
      .isFalse()
      .bool(isSHA1(234987))
      .isFalse()
      .bool(isSHA1(-2398))
      .isFalse()
      .bool(isSHA1(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isSHA1(98.00007))
      .isFalse()
      .bool(isSHA1(-32407.3))
      .isFalse()
      .bool(isSHA1(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isSHA1(noop))
      .isFalse()
      .bool(isSHA1(isSHA1))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isSHA1(/asd/u))
      .isFalse()
      .bool(isSHA1(/\d+/u))
      .isFalse()
      .bool(isSHA1(/1/u))
      .isFalse()
      .bool(isSHA1(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isSHA1([]))
      .isFalse()
      .bool(isSHA1([1, 2, 3]))
      .isFalse()
      .bool(isSHA1(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isSHA1