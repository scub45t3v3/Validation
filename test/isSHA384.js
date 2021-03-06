'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isSHA384 = require('../isSHA384');

// describe #isSHA384
describe('#isSHA384', () => {
  it('should be a function', () => {
    unit
      .function(isSHA384);
  }); // end it

  it('should return true for valid SHA384 strings', () => {
    unit
      .bool(isSHA384('62c4f0b4dbe2a9cf80e003bdd7011f54'.repeat(3)))
      .isTrue()
      .bool(isSHA384('db755bf69b1e53b94502c41dae860344'.repeat(3)))
      .isTrue()
      .bool(isSHA384('93d7c4f1405d323a34273d2ec04ad13c'.repeat(3)))
      .isTrue()
      .bool(isSHA384('ae898bce08fcd570d7e36d3409237739'.repeat(3)))
      .isTrue()
      .bool(isSHA384('1e65382d1447e877d867947269bbfebf'.repeat(3)))
      .isTrue()
      .bool(isSHA384('f9ac64ad54ed5add763e588938f6ac9a'.repeat(3)))
      .isTrue()
      .bool(isSHA384('190102c2743633072e050c8d697faebc'.repeat(3)))
      .isTrue();
  }); // end it

  it('should return false for invalid SHA384 strings', () => {
    unit
      .bool(isSHA384('af:4ff:a8:93:01:d2'))
      .isFalse()
      .bool(isSHA384('af:hf:a8:93:01:d2'))
      .isFalse()
      .bool(isSHA384('af:4f:a8:93:01'))
      .isFalse()
      .bool(isSHA384('*&TYY'))
      .isFalse()
      .bool(isSHA384('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isSHA384('sdf.,.mdf'))
      .isFalse()
      .bool(isSHA384('we;o9tu49'))
      .isFalse()
      .bool(isSHA384('q23qo98441`'))
      .isFalse()
      .bool(isSHA384('ewr09ti34*&'))
      .isFalse()
      .bool(isSHA384('%sdkjvnnd'))
      .isFalse()
      .bool(isSHA384('=adkljfhsd'))
      .isFalse()
      .bool(isSHA384('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isSHA384('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isSHA384(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isSHA384(14))
      .isFalse()
      .bool(isSHA384(234987))
      .isFalse()
      .bool(isSHA384(-2398))
      .isFalse()
      .bool(isSHA384(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isSHA384(98.00007))
      .isFalse()
      .bool(isSHA384(-32407.3))
      .isFalse()
      .bool(isSHA384(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isSHA384(noop))
      .isFalse()
      .bool(isSHA384(isSHA384))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isSHA384(/asd/u))
      .isFalse()
      .bool(isSHA384(/\d+/u))
      .isFalse()
      .bool(isSHA384(/1/u))
      .isFalse()
      .bool(isSHA384(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isSHA384([]))
      .isFalse()
      .bool(isSHA384([1, 2, 3]))
      .isFalse()
      .bool(isSHA384(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isSHA384