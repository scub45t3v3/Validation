(function() {
  var BigNumber, isInteger, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  BigNumber = require('bignumber.js');

  isInteger = require('../isInteger');

  describe('#isInteger', function() {
    it('should be a function', function() {
      unit.function(isInteger);
      return null;
    });
    it('should return true for valid integers', function() {
      unit.bool(isInteger(1)).isTrue().bool(isInteger(234987)).isTrue().bool(isInteger(-239874)).isTrue().bool(isInteger(0)).isTrue();
      return null;
    });
    it('should return true for parsable integers', function() {
      unit.bool(isInteger('98')).isTrue().bool(isInteger('-32407')).isTrue().bool(isInteger('0')).isTrue();
      return null;
    });
    it('should return true for zero precision integers', function() {
      unit.bool(isInteger(5.0)).isTrue().bool(isInteger(-6.0)).isTrue().bool(isInteger('5.0')).isTrue().bool(isInteger('-6.0')).isTrue().bool(isInteger('234.')).isTrue();
      return null;
    });
    it('should return true for objects that stringify to integer', function() {
      unit.bool(isInteger(new String('123'))).isTrue().bool(isInteger(new BigNumber('345345'))).isTrue();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isInteger(1.1)).isFalse().bool(isInteger(-0.4)).isFalse().bool(isInteger(234.4)).isFalse().bool(isInteger(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isInteger(noop)).isFalse().bool(isInteger(isInteger)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isInteger('adsf')).isFalse().bool(isInteger('34.6')).isFalse().bool(isInteger('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isInteger(/asd/)).isFalse().bool(isInteger(/\d+/)).isFalse().bool(isInteger(/1/)).isFalse().bool(isInteger(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isInteger([])).isFalse().bool(isInteger([1, 2, 3])).isFalse().bool(isInteger(['a', 5, {}])).isFalse();
      return null;
    });
    it('should return false for objects that dont stringify to an integer', function() {
      unit.bool(isInteger({})).isFalse().bool(isInteger(new String('asd'))).isFalse().bool(isInteger({
        a: 5
      })).isFalse();
      return null;
    });
    it('should return false for integers that are less than the min option', function() {
      unit.bool(isInteger(45, {
        min: 50
      })).isFalse().bool(isInteger(99, {
        min: 100
      })).isFalse().bool(isInteger('5', {
        min: '6'
      })).isFalse().bool(isInteger(5, {
        min: 6
      })).isFalse();
      return null;
    });
    it('should return false for integers that are greater than the max option', function() {
      unit.bool(isInteger(46, {
        max: 45
      })).isFalse().bool(isInteger(100, {
        max: 99
      })).isFalse().bool(isInteger('5', {
        max: '4'
      })).isFalse().bool(isInteger(5, {
        max: 4
      })).isFalse();
      return null;
    });
    it('should return false for integers that are not mod % the step option', function() {
      unit.bool(isInteger(45, {
        step: 10
      })).isFalse().bool(isInteger(12, {
        step: 0.7
      })).isFalse().bool(isInteger('5', {
        step: '3'
      })).isFalse().bool(isInteger(5, {
        step: 3
      })).isFalse();
      return null;
    });
    it('should return false for integers that are not safe to cast when the safe option is true', function() {
      unit.bool(isInteger(`${Number.MAX_SAFE_INTEGER}9`, {
        safe: true
      })).isFalse().bool(isInteger(`${Number.MIN_SAFE_INTEGER}9`, {
        safe: true
      })).isFalse();
      return null;
    });
    it('should throw an error if opt.min is not a number | null | undefined', function() {
      unit.error(function() {
        return isInteger(5, {
          min: 'a'
        });
      }).error(function() {
        return isInteger(5, {
          min: /a/
        });
      }).error(function() {
        return isInteger(5, {
          min: noop
        });
      }).error(function() {
        return isInteger(5, {
          min: []
        });
      }).error(function() {
        return isInteger(5, {
          min: {}
        });
      });
      return null;
    });
    it('should throw an error if opt.max is not a number | null | undefined', function() {
      unit.error(function() {
        return isInteger(5, {
          max: 'z'
        });
      }).error(function() {
        return isInteger(5, {
          max: /a/
        });
      }).error(function() {
        return isInteger(5, {
          max: noop
        });
      }).error(function() {
        return isInteger(5, {
          max: []
        });
      }).error(function() {
        return isInteger(5, {
          max: {}
        });
      });
      return null;
    });
    return it('should throw an error if opt.step is not a number | null | undefined', function() {
      unit.error(function() {
        return isInteger(5, {
          step: 'g'
        });
      }).error(function() {
        return isInteger(5, {
          step: /a/
        });
      }).error(function() {
        return isInteger(5, {
          step: noop
        });
      }).error(function() {
        return isInteger(5, {
          step: []
        });
      }).error(function() {
        return isInteger(5, {
          step: {}
        });
      });
      return null;
    });
  });

}).call(this);
