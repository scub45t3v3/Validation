'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isAlphaNumeric = require('../isAlphaNumeric');

// describe #isAlphaNumeric
describe('#isAlphaNumeric', () => {
  it('should be a function', () => {
    unit
      .function(isAlphaNumeric);
  }); // end it

  it('should return true for valid alphanumeric strings', () => {
    unit
      .bool(isAlphaNumeric('aslkd4958jfh'))
      .isTrue()
      .bool(isAlphaNumeric('alsdiu2309fhdsn'))
      .isTrue()
      .bool(isAlphaNumeric('3lsdkfg80945'))
      .isTrue()
      .bool(isAlphaNumeric('34w98dfskjer'))
      .isTrue()
      .bool(isAlphaNumeric('2'))
      .isTrue()
      .bool(isAlphaNumeric('y'))
      .isTrue()
      .bool(isAlphaNumeric('34w98erhdf'))
      .isTrue()
      .bool(isAlphaNumeric('awewiuhdesfgkj4wi8efskjndsv'))
      .isTrue()
      .bool(isAlphaNumeric('34w98erfkuherh'))
      .isTrue()
      .bool(isAlphaNumeric('ewrituer89348'))
      .isTrue()
      .bool(isAlphaNumeric('elriterifgheri8t4'))
      .isTrue()
      .bool(isAlphaNumeric('eilrtyuer438of'))
      .isTrue()
      .bool(isAlphaNumeric('w48otuo4e8fh'))
      .isTrue()
      .bool(isAlphaNumeric('394wt348h'))
      .isTrue();
  }); // end it

  it('should return true for positive integers', () => {
    unit
      .bool(isAlphaNumeric(14))
      .isTrue()
      .bool(isAlphaNumeric(234987))
      .isTrue()
      .bool(isAlphaNumeric(2398))
      .isTrue()
      .bool(isAlphaNumeric(2))
      .isTrue();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isAlphaNumeric('we48tue^r'))
      .isFalse()
      .bool(isAlphaNumeric('we[foewf]'))
      .isFalse()
      .bool(isAlphaNumeric('34w98ue&rj'))
      .isFalse()
      .bool(isAlphaNumeric('*&TYY'))
      .isFalse()
      .bool(isAlphaNumeric('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isAlphaNumeric('sdf.,.mdf'))
      .isFalse()
      .bool(isAlphaNumeric('we;o9tu49'))
      .isFalse()
      .bool(isAlphaNumeric('q23qo98441`'))
      .isFalse()
      .bool(isAlphaNumeric('ewr09ti34*&'))
      .isFalse()
      .bool(isAlphaNumeric('%sdkjvnnd'))
      .isFalse()
      .bool(isAlphaNumeric('=adkljfhsd'))
      .isFalse()
      .bool(isAlphaNumeric('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isAlphaNumeric('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isAlphaNumeric(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for negative integers', () => {
    unit
      .bool(isAlphaNumeric(-1))
      .isFalse()
      .bool(isAlphaNumeric(-239874))
      .isFalse(0)
      .bool(isAlphaNumeric(-2397))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isAlphaNumeric(98.00007))
      .isFalse()
      .bool(isAlphaNumeric(-32407.3))
      .isFalse()
      .bool(isAlphaNumeric(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isAlphaNumeric(noop))
      .isFalse()
      .bool(isAlphaNumeric(isAlphaNumeric))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isAlphaNumeric(/asd/u))
      .isFalse()
      .bool(isAlphaNumeric(/\d+/u))
      .isFalse()
      .bool(isAlphaNumeric(/1/u))
      .isFalse()
      .bool(isAlphaNumeric(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isAlphaNumeric([]))
      .isFalse()
      .bool(isAlphaNumeric([1, 2, 3]))
      .isFalse()
      .bool(isAlphaNumeric(['a', 5, {}]))
      .isFalse();
  }); // end it

  it('should return false for null', () => {
    unit
      .bool(isAlphaNumeric(null))
      .isFalse();
  }); // end it

  it('should return false for undefined', () => {
    unit
      .bool(isAlphaNumeric())
      .isFalse()
      .bool(isAlphaNumeric(undefined))
      .isFalse();
  }); // end it
}); // end describe #isAlphaNumeric