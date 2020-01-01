'use strict';

const unit = require('unit.js');
const {noop} = require('underscore');
const isMD5 = require('../isMD5');

// describe #isMD5
describe('#isMD5', () => {
  it('should be a function', () => {
    unit
      .function(isMD5);
  }); // end it

  it('should return true for valid MD5 strings', () => {
    unit
      .bool(isMD5('62c4f0b4dbe2a9cf80e003bdd7011f54'))
      .isTrue()
      .bool(isMD5('db755bf69b1e53b94502c41dae860344'))
      .isTrue()
      .bool(isMD5('93d7c4f1405d323a34273d2ec04ad13c'))
      .isTrue()
      .bool(isMD5('ae898bce08fcd570d7e36d3409237739'))
      .isTrue()
      .bool(isMD5('1e65382d1447e877d867947269bbfebf'))
      .isTrue()
      .bool(isMD5('f9ac64ad54ed5add763e588938f6ac9a'))
      .isTrue()
      .bool(isMD5('190102c2743633072e050c8d697faebc'))
      .isTrue();
  }); // end it

  it('should return false for invalid MD5 strings', () => {
    unit
      .bool(isMD5('190102c2743633072e050c8d697faebx'))
      .isFalse()
      .bool(isMD5('af:hf:a8:93:01:d2'))
      .isFalse()
      .bool(isMD5('af:4f:a8:93:01'))
      .isFalse()
      .bool(isMD5('*&TYY'))
      .isFalse()
      .bool(isMD5('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isMD5('sdf.,.mdf'))
      .isFalse()
      .bool(isMD5('we;o9tu49'))
      .isFalse()
      .bool(isMD5('q23qo98441`'))
      .isFalse()
      .bool(isMD5('ewr09ti34*&'))
      .isFalse()
      .bool(isMD5('%sdkjvnnd'))
      .isFalse()
      .bool(isMD5('=adkljfhsd'))
      .isFalse()
      .bool(isMD5('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isMD5('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isMD5(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isMD5(14))
      .isFalse()
      .bool(isMD5(234987))
      .isFalse()
      .bool(isMD5(-2398))
      .isFalse()
      .bool(isMD5(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isMD5(98.00007))
      .isFalse()
      .bool(isMD5(-32407.3))
      .isFalse()
      .bool(isMD5(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isMD5(noop))
      .isFalse()
      .bool(isMD5(isMD5))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isMD5(/asd/))
      .isFalse()
      .bool(isMD5(/\d+/))
      .isFalse()
      .bool(isMD5(/1/))
      .isFalse()
      .bool(isMD5(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isMD5([]))
      .isFalse()
      .bool(isMD5([1, 2, 3]))
      .isFalse()
      .bool(isMD5(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isMD5