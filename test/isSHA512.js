'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isSHA512 = require('../isSHA512');

// describe #isSHA512
describe('#isSHA512', () => {
  it('should be a function', () => {
    unit
      .function(isSHA512);
  }); // end it

  it('should return true for valid SHA512 strings', () => {
    unit
      .bool(isSHA512('62c4f0b4dbe2a9cf80e003bdd7011f54'.repeat(4)))
      .isTrue()
      .bool(isSHA512('db755bf69b1e53b94502c41dae860344'.repeat(4)))
      .isTrue()
      .bool(isSHA512('93d7c4f1405d323a34273d2ec04ad13c'.repeat(4)))
      .isTrue()
      .bool(isSHA512('ae898bce08fcd570d7e36d3409237739'.repeat(4)))
      .isTrue()
      .bool(isSHA512('1e65382d1447e877d867947269bbfebf'.repeat(4)))
      .isTrue()
      .bool(isSHA512('f9ac64ad54ed5add763e588938f6ac9a'.repeat(4)))
      .isTrue()
      .bool(isSHA512('190102c2743633072e050c8d697faebc'.repeat(4)))
      .isTrue();
  }); // end it

  it('should return false for invalid SHA512 strings', () => {
    unit
      .bool(isSHA512('af:4ff:a8:93:01:d2'))
      .isFalse()
      .bool(isSHA512('af:hf:a8:93:01:d2'))
      .isFalse()
      .bool(isSHA512('af:4f:a8:93:01'))
      .isFalse()
      .bool(isSHA512('*&TYY'))
      .isFalse()
      .bool(isSHA512('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isSHA512('sdf.,.mdf'))
      .isFalse()
      .bool(isSHA512('we;o9tu49'))
      .isFalse()
      .bool(isSHA512('q23qo98441`'))
      .isFalse()
      .bool(isSHA512('ewr09ti34*&'))
      .isFalse()
      .bool(isSHA512('%sdkjvnnd'))
      .isFalse()
      .bool(isSHA512('=adkljfhsd'))
      .isFalse()
      .bool(isSHA512('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isSHA512('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isSHA512(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isSHA512(14))
      .isFalse()
      .bool(isSHA512(234987))
      .isFalse()
      .bool(isSHA512(-2398))
      .isFalse()
      .bool(isSHA512(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isSHA512(98.00007))
      .isFalse()
      .bool(isSHA512(-32407.3))
      .isFalse()
      .bool(isSHA512(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isSHA512(noop))
      .isFalse()
      .bool(isSHA512(isSHA512))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isSHA512(/asd/))
      .isFalse()
      .bool(isSHA512(/\d+/))
      .isFalse()
      .bool(isSHA512(/1/))
      .isFalse()
      .bool(isSHA512(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isSHA512([]))
      .isFalse()
      .bool(isSHA512([1, 2, 3]))
      .isFalse()
      .bool(isSHA512(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isSHA512