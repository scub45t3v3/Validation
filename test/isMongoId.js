'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isMongoId = require('../isMongoId');

// describe #isMongoId
describe('#isMongoId', () => {
  it('should be a function', () => {
    unit
      .function(isMongoId);
  }); // end it

  it('should return true for valid Mongo ID strings', () => {
    unit
      .bool(isMongoId('62c4f0b4dbe2a9cf80e003bd'))
      .isTrue()
      .bool(isMongoId('db755bf69b1e53b94502c41d'))
      .isTrue()
      .bool(isMongoId('93d7c4f1405d323a34273d2e'))
      .isTrue()
      .bool(isMongoId('ae898bce08fcd570d7e36d34'))
      .isTrue()
      .bool(isMongoId('1e65382d1447e877d8679472'))
      .isTrue()
      .bool(isMongoId('f9ac64ad54ed5add763e5889'))
      .isTrue()
      .bool(isMongoId('190102c2743633072e050c8d'))
      .isTrue();
  }); // end it

  it('should return false for invalid Mongo ID strings', () => {
    unit
      .bool(isMongoId('ae898bce08fcd570d7e36d3g'))
      .isFalse()
      .bool(isMongoId('af:hf:a8:93:01:d2'))
      .isFalse()
      .bool(isMongoId('af:4f:a8:93:01'))
      .isFalse()
      .bool(isMongoId('*&TYY'))
      .isFalse()
      .bool(isMongoId('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isMongoId('sdf.,.mdf'))
      .isFalse()
      .bool(isMongoId('we;o9tu49'))
      .isFalse()
      .bool(isMongoId('q23qo98441`'))
      .isFalse()
      .bool(isMongoId('ewr09ti34*&'))
      .isFalse()
      .bool(isMongoId('%sdkjvnnd'))
      .isFalse()
      .bool(isMongoId('=adkljfhsd'))
      .isFalse()
      .bool(isMongoId('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isMongoId('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isMongoId(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isMongoId(14))
      .isFalse()
      .bool(isMongoId(234987))
      .isFalse()
      .bool(isMongoId(-2398))
      .isFalse()
      .bool(isMongoId(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isMongoId(98.00007))
      .isFalse()
      .bool(isMongoId(-32407.3))
      .isFalse()
      .bool(isMongoId(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isMongoId(noop))
      .isFalse()
      .bool(isMongoId(isMongoId))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isMongoId(/asd/))
      .isFalse()
      .bool(isMongoId(/\d+/))
      .isFalse()
      .bool(isMongoId(/1/))
      .isFalse()
      .bool(isMongoId(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isMongoId([]))
      .isFalse()
      .bool(isMongoId([1, 2, 3]))
      .isFalse()
      .bool(isMongoId(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isMongoId