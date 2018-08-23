'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isSemVer = require('../isSemVer');

  // describe #isSemVer
  describe('#isSemVer', () => {
    it('should be a function', () => {
      unit
        .function(isSemVer);
    }); // end it

    it('should return true for valid semver strings', () => {
      unit
        .bool(isSemVer('0.0.0'))
        .isTrue()
        .bool(isSemVer('1.0.0'))
        .isTrue()
        .bool(isSemVer('1.0.0-beta.0.7'))
        .isTrue()
        .bool(isSemVer('1.0.0+rc.2.6'))
        .isTrue()
        .bool(isSemVer('1.0.0-alpha.-.0.0pi'))
        .isTrue()
        .bool(isSemVer('1.0.0------------odd.why-'))
        .isTrue()
        .bool(isSemVer('1.0.0-beta.0.7+rc.2.6'))
        .isTrue()
        .bool(isSemVer('1.0.0+rc.5.6-beta'))
        .isTrue();
    }); // end it

    it('should return false for invalid semver strings', () => {
      unit
        .bool(isSemVer('1'))
        .isFalse()
        .bool(isSemVer('1.0'))
        .isFalse()
        .bool(isSemVer('1.0.a'))
        .isFalse()
        .bool(isSemVer('v1.0.5'))
        .isFalse()
        .bool(isSemVer('+1.0.0'))
        .isFalse()
        .bool(isSemVer('-1.0.0'))
        .isFalse()
        .bool(isSemVer('1.0.0-00.1'))
        .isFalse()
        .bool(isSemVer('1.0.0-+rc'))
        .isFalse()
        .bool(isSemVer('1.0.0-<beta>'))
        .isFalse()
        .bool(isSemVer('1.0.0-@5'))
        .isFalse()
        .bool(isSemVer('1.0.0-6.*'))
        .isFalse()
        .bool(isSemVer('1.0.0-4(a)'))
        .isFalse()
        .bool(isSemVer('1.0.0+rc.5.6-beta+4'))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isSemVer(14))
        .isFalse()
        .bool(isSemVer(234987))
        .isFalse()
        .bool(isSemVer(-2398))
        .isFalse()
        .bool(isSemVer(2))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isSemVer(98.00007))
        .isFalse()
        .bool(isSemVer(-32407.3))
        .isFalse()
        .bool(isSemVer(0.1))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isSemVer(noop))
        .isFalse()
        .bool(isSemVer(isSemVer))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isSemVer(/asd/))
        .isFalse()
        .bool(isSemVer(/\d+/))
        .isFalse()
        .bool(isSemVer(/1/))
        .isFalse()
        .bool(isSemVer(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isSemVer([]))
        .isFalse()
        .bool(isSemVer([1, 2, 3]))
        .isFalse()
        .bool(isSemVer(['a', 5, {}]))
        .isFalse();
    }); // end it

    it('should return false for null', () => {
      unit
        .bool(isSemVer(null))
        .isFalse();
    }); // end it

    it('should return false for undefined', () => {
      unit
        .bool(isSemVer())
        .isFalse()
        .bool(isSemVer(undefined))
        .isFalse();
    }); // end it
  }); // end describe #isSemVer
})(); // end IIFE