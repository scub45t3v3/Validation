'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isAlpha = require('../isAlpha');

// describe #isAlpha
describe('#isAlpha', () => {
  it('should be a function', () => {
    unit
      .function(isAlpha);
  }); // end it

  it('should return true for valid alpha only strings', () => {
    unit
      .bool(isAlpha('aslkdjfh'))
      .isTrue()
      .bool(isAlpha('alsdiufhdsn'))
      .isTrue()
      .bool(isAlpha('qweidswekjsadkjbas'))
      .isTrue()
      .bool(isAlpha('dfkjhfkmnkckmbefawklndfs'))
      .isTrue()
      .bool(isAlpha('dh'))
      .isTrue()
      .bool(isAlpha('y'))
      .isTrue()
      .bool(isAlpha('adfsfoijdsfklfdskn'))
      .isTrue()
      .bool(isAlpha('awewiuhdfskjndsv'))
      .isTrue()
      .bool(isAlpha('sdflkhdfsknf'))
      .isTrue()
      .bool(isAlpha('sdkljhdslgldnfsf'))
      .isTrue()
      .bool(isAlpha('ekjhsdfkjdsf'))
      .isTrue()
      .bool(isAlpha('aweofhsdfdskfbn'))
      .isTrue()
      .bool(isAlpha('asdflkhdsmdsfkjds'))
      .isTrue()
      .bool(isAlpha('ewfkjfdslkdfskljdfs'))
      .isTrue();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isAlpha('we48tuer'))
      .isFalse()
      .bool(isAlpha('we[foewf]'))
      .isFalse()
      .bool(isAlpha('34w98uerj'))
      .isFalse()
      .bool(isAlpha('*&TYY'))
      .isFalse()
      .bool(isAlpha('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isAlpha('sdf.,.mdf'))
      .isFalse()
      .bool(isAlpha('we;o9tu49'))
      .isFalse()
      .bool(isAlpha('q23qo98441`'))
      .isFalse()
      .bool(isAlpha('ewr09ti34*&'))
      .isFalse()
      .bool(isAlpha('%sdkjvnnd'))
      .isFalse()
      .bool(isAlpha('=adkljfhsd'))
      .isFalse()
      .bool(isAlpha('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isAlpha('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isAlpha(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isAlpha(14))
      .isFalse()
      .bool(isAlpha(234987))
      .isFalse()
      .bool(isAlpha(-2398))
      .isFalse()
      .bool(isAlpha(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isAlpha(98.00007))
      .isFalse()
      .bool(isAlpha(-32407.3))
      .isFalse()
      .bool(isAlpha(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isAlpha(noop))
      .isFalse()
      .bool(isAlpha(isAlpha))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isAlpha(/asd/))
      .isFalse()
      .bool(isAlpha(/\d+/))
      .isFalse()
      .bool(isAlpha(/1/))
      .isFalse()
      .bool(isAlpha(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isAlpha([]))
      .isFalse()
      .bool(isAlpha([1, 2, 3]))
      .isFalse()
      .bool(isAlpha(['a', 5, {}]))
      .isFalse();
  }); // end it

  it('should return false for null', () => {
    unit
      .bool(isAlpha(null))
      .isFalse();
  }); // end it

  it('should return false for undefined', () => {
    unit
      .bool(isAlpha())
      .isFalse()
      .bool(isAlpha(undefined))
      .isFalse();
  }); // end it
}); // end describe #isAlpha