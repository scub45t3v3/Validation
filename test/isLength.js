'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isLength = require('../isLength');

  // describe #isLength
  describe('#isLength', () => {
    it('should be a function', () => {
      unit
        .function(isLength);
    }); // end it

    it('should return true for strings', () => {
      unit
        .bool(isLength('a'))
        .isTrue()
        .bool(isLength('alkjdfhwekjcfncn83hr;32hhew;ihp81hluehfleriufhwedjklkdf'))
        .isTrue();
    }); // end it

    it('should return true for arrays', () => {
      unit
        .bool(isLength([4, 70, false, 'asd']))
        .isTrue()
        .bool(isLength([2011]))
        .isTrue()
        .bool(isLength([2000, 6, 15, 5]))
        .isTrue();
    }); // end it

    it('should return true for function with arguments', () => {
      unit
        .bool(isLength(isLength))
        .isTrue()
        .bool(isLength(parseInt))
        .isTrue()
        .bool(isLength(JSON.parse))
        .isTrue();
    }); // end it

    it('should return true for objects with a length property', () => {
      unit.bool(isLength({
        length: 5,
      })).isTrue()
        .bool(isLength({
          a: 5,
          length: 1,
        }))
        .isTrue();
    }); // end it

    it('should return false for strings not equal to length', () => {
      unit
        .bool(isLength('a', 4))
        .isFalse()
        .bool(isLength('alkjdfhwekjcfncn83hr;32hhew;ihp81hluehfleriufhwedj', 12))
        .isFalse();
    }); // end it

    it('should return false for arrays not equal to length', () => {
      unit
        .bool(isLength([4, 70, false, 'asd'], 1))
        .isFalse()
        .bool(isLength([2011], 2))
        .isFalse()
        .bool(isLength([2000, 6, 15, 5], 10))
        .isFalse();
    }); // end it

    it('should return false for function with arguments not equal to length', () => {
      unit
        .bool(isLength(isLength, 3))
        .isFalse()
        .bool(isLength(parseInt, 8))
        .isFalse()
        .bool(isLength(JSON.parse, 1))
        .isFalse();
    }); // end it

    it('should return false for objects with enumerable length property not equal to length', () => {
      unit
        .bool(isLength({
          length: 5,
        }, 4))
        .isFalse()
        .bool(isLength({
          a: 5,
          length: 1,
        }, 2))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isLength(2, 1))
        .isFalse()
        .bool(isLength(234988, 234987))
        .isFalse()
        .bool(isLength(-239873, -239874))
        .isFalse()
        .bool(isLength(1, 0))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isLength(1.5, 1.4))
        .isFalse()
        .bool(isLength(-0.2, -0.3))
        .isFalse()
        .bool(isLength(234.6, 234.5))
        .isFalse()
        .bool(isLength(55.00000000001, 55))
        .isFalse();
    }); // end it

    it('should return false for dates', () => {
      unit
        .bool(isLength(Date.now() + 500))
        .isFalse()
        .bool(isLength(new Date()))
        .isFalse()
        .bool(isLength(new Date('2010-02-01')))
        .isFalse();
    }); // end it

    it('should return false for functions without arguments', () => {
      unit
        .bool(isLength(noop))
        .isFalse()
        .bool(isLength(Date.now))
        .isFalse();
    }); // end it

    it('should return false for objects without a length property', () => {
      unit
        .bool(isLength({
          g: -6.4,
          k: 'asd',
        }))
        .isFalse()
        .bool(isLength({
          d: 'hi',
        }))
        .isFalse()
        .bool(isLength({
          a: 5,
          b: false,
        }))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isLength(/asd/))
        .isFalse()
        .bool(isLength(/\d+/))
        .isFalse()
        .bool(isLength(/1/))
        .isFalse()
        .bool(isLength(new RegExp('3')))
        .isFalse();
    }); // end it
  }); // end describe #isLength
})(); // end IIFE