'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isBase64 = require('../isBase64');

  // describe #isBase64
  describe('#isBase64', () => {
    it('should be a function', () => {
      unit
        .function(isBase64);
    }); // end it

    it('should return true for valid base64 encoded strings', () => {
      unit
        .bool(isBase64('aifrledy'))
        .isTrue()
        .bool(isBase64('a83k/ts='))
        .isTrue()
        .bool(isBase64('eidnw9k3nhtl'))
        .isTrue()
        .bool(isBase64('s93jsla1un/t'))
        .isTrue()
        .bool(isBase64('dh=='))
        .isTrue()
        .bool(isBase64('tlf='))
        .isTrue()
        .bool(isBase64('qnothd7lk3nk'))
        .isTrue();
    }); // end it

    it('should return true for positive integers', () => {
      unit
        .bool(isBase64(1401))
        .isTrue()
        .bool(isBase64(23498739))
        .isTrue()
        .bool(isBase64(2398))
        .isTrue()
        .bool(isBase64(2570))
        .isTrue();
    }); // end it

    it('should return false for invalid strings', () => {
      unit
        .bool(isBase64('we48tuer='))
        .isFalse()
        .bool(isBase64('we[foewf]'))
        .isFalse()
        .bool(isBase64('34w98uerj'))
        .isFalse()
        .bool(isBase64('*&TYY'))
        .isFalse()
        .bool(isBase64('serreg;dfskdfkjfgjh'))
        .isFalse()
        .bool(isBase64('sdf.,.mdf'))
        .isFalse()
        .bool(isBase64('we;o9tu49'))
        .isFalse()
        .bool(isBase64('q23qo98441`'))
        .isFalse()
        .bool(isBase64('ewr09ti34*&'))
        .isFalse()
        .bool(isBase64('%sdkjvnnd'))
        .isFalse()
        .bool(isBase64('=adkljfhsd'))
        .isFalse()
        .bool(isBase64('sadkjfh{sdkjf}'))
        .isFalse()
        .bool(isBase64('aweklhd[asldkfjsd]'))
        .isFalse()
        .bool(isBase64(',foiadfoihf<lkewf'))
        .isFalse();
    }); // end it

    it('should return false for negative integers', () => {
      unit
        .bool(isBase64(-14))
        .isFalse()
        .bool(isBase64(-2349874))
        .isFalse()
        .bool(isBase64(-2398))
        .isFalse()
        .bool(isBase64(-2))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isBase64(98.00007))
        .isFalse()
        .bool(isBase64(-32407.3))
        .isFalse()
        .bool(isBase64(0.1))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isBase64(noop))
        .isFalse()
        .bool(isBase64(isBase64))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isBase64(/asd/))
        .isFalse()
        .bool(isBase64(/\d+/))
        .isFalse()
        .bool(isBase64(/1/))
        .isFalse()
        .bool(isBase64(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isBase64([]))
        .isFalse()
        .bool(isBase64([1, 2, 3]))
        .isFalse()
        .bool(isBase64(['a', 5, {}]))
        .isFalse();
    }); // end it
  }); // end describe #isBase64
})(); // end IIFE