'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const BigNumber = require('bignumber.js');
  const isFloat = require('../isFloat');

  // describe #isFloat
  describe('#isFloat', () => {
    it('should be a function', () => {
      unit
        .function(isFloat);
    }); // end it

    it('should return true for valid floats', () => {
      unit
        .bool(isFloat(1.4))
        .isTrue()
        .bool(isFloat(234987))
        .isTrue()
        .bool(isFloat(-2398.74))
        .isTrue()
        .bool(isFloat(2.0))
        .isTrue();
    }); // end it

    it('should return true for parsable floats', () => {
      unit
        .bool(isFloat('98.00007'))
        .isTrue()
        .bool(isFloat('-32407.'))
        .isTrue()
        .bool(isFloat('0.1'))
        .isTrue();
    }); // end it

    it('should return true for objects that stringify to floats', () => {
      unit
        .bool(isFloat(new String('123')))
        .isTrue()
        .bool(isFloat(new BigNumber('345345')))
        .isTrue();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isFloat(noop))
        .isFalse()
        .bool(isFloat(isFloat))
        .isFalse();
    }); // end it

    it('should return false for strings', () => {
      unit
        .bool(isFloat('adsf'))
        .isFalse()
        .bool(isFloat('34.t'))
        .isFalse()
        .bool(isFloat('-45fg'))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isFloat(/asd/))
        .isFalse()
        .bool(isFloat(/\d+/))
        .isFalse()
        .bool(isFloat(/1/))
        .isFalse()
        .bool(isFloat(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isFloat([]))
        .isFalse()
        .bool(isFloat([1, 2, 3]))
        .isFalse()
        .bool(isFloat(['a', 5, {}]))
        .isFalse();
    }); // end it

    it('should return false for objects that dont stringify to a float', () => {
      unit
        .bool(isFloat({}))
        .isFalse()
        .bool(isFloat(new String('asd')))
        .isFalse()
        .bool(isFloat({
          a: 5,
        }))
        .isFalse();
    }); // end it

    it('should return false for floats that are less than the min option', () => {
      unit
        .bool(isFloat(45.5, {
          min: 50,
        }))
        .isFalse()
        .bool(isFloat(99.9, {
          min: 100,
        }))
        .isFalse()
        .bool(isFloat('5.5', {
          min: '5.501',
        }))
        .isFalse()
        .bool(isFloat(5.5, {
          min: 5.501,
        }))
        .isFalse();
    }); // end it

    it('should return false for floats that are greater than the max option', () => {
      unit
        .bool(isFloat(45.5, {
          max: 45,
        }))
        .isFalse()
        .bool(isFloat(100.000001, {
          max: 100,
        }))
        .isFalse()
        .bool(isFloat('5.5', {
          max: '5.4999',
        }))
        .isFalse()
        .bool(isFloat(5.5, {
          max: 5.4999,
        }))
        .isFalse();
    }); // end it

    it('should return false for floats that are not mod % the step option', () => {
      unit
        .bool(isFloat(45.6, {
          step: 0.5,
        }))
        .isFalse()
        .bool(isFloat(12.1, {
          step: 0.2,
        }))
        .isFalse()
        .bool(isFloat('5', {
          step: '.6',
        }))
        .isFalse()
        .bool(isFloat(5, {
          step: 0.6,
        }))
        .isFalse();
    }); // end it

    it('should return false for floats that are not safe to cast when the safe option is true', () => {
      unit
        .bool(isFloat(`${Number.MAX_VALUE}9`, {
          safe: true,
        }))
        .isFalse()
        .bool(isFloat(`${Number.MIN_VALUE}9`, {
          safe: true,
        }))
        .isFalse();
    }); // end it

    it('should throw an error if opt.min is not a number | null | undefined', () => {
      unit
        .error(() => {
          return isFloat(5, {
            min: 'a',
          });
        })
        .error(() => {
          return isFloat(5, {
            min: /a/,
          });
        })
        .error(() => {
          return isFloat(5, {
            min: noop,
          });
        })
        .error(() => {
          return isFloat(5, {
            min: [],
          });
        })
        .error(() => {
          return isFloat(5, {
            min: {},
          });
        });
    }); // end it

    it('should throw an error if opt.max is not a number | null | undefined', () => {
      unit
        .error(() => {
          return isFloat(5, {
            max: 'z',
          });
        })
        .error(() => {
          return isFloat(5, {
            max: /a/,
          });
        })
        .error(() => {
          return isFloat(5, {
            max: noop,
          });
        })
        .error(() => {
          return isFloat(5, {
            max: [],
          });
        })
        .error(() => {
          return isFloat(5, {
            max: {},
          });
        });
    }); // end it

    it('should throw an error if opt.step is not a number | null | undefined', () => {
      unit
        .error(() => {
          return isFloat(5, {
            step: 'g',
          });
        })
        .error(() => {
          return isFloat(5, {
            step: /a/,
          });
        })
        .error(() => {
          return isFloat(5, {
            step: noop,
          });
        })
        .error(() => {
          return isFloat(5, {
            step: [],
          });
        })
        .error(() => {
          return isFloat(5, {
            step: {},
          });
        });
    }); // end it
  }); // end describe #isFloat
})(); // end IIFE