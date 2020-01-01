'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const BigNumber = require('bignumber.js');
const isInteger = require('../isInteger');

// describe #isInteger
describe('#isInteger', () => {
  it('should be a function', () => {
    unit
      .function(isInteger);
  }); // end it

  it('should return true for valid integers', () => {
    unit
      .bool(isInteger(1))
      .isTrue()
      .bool(isInteger(234987))
      .isTrue()
      .bool(isInteger(-239874))
      .isTrue()
      .bool(isInteger(0))
      .isTrue();
  }); // end it

  it('should return true for parsable integers', () => {
    unit
      .bool(isInteger('98'))
      .isTrue()
      .bool(isInteger('-32407'))
      .isTrue()
      .bool(isInteger('0'))
      .isTrue();
  }); // end it

  it('should return true for zero precision integers', () => {
    unit
      .bool(isInteger(5.0))
      .isTrue()
      .bool(isInteger(-6.0))
      .isTrue()
      .bool(isInteger('5.0'))
      .isTrue()
      .bool(isInteger('-6.0'))
      .isTrue()
      .bool(isInteger('234.'))
      .isTrue();
  }); // end it

  it('should return true for objects that stringify to integer', () => {
    unit
      .bool(isInteger(new String('123')))
      .isTrue()
      .bool(isInteger(new BigNumber('345345')))
      .isTrue();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isInteger(1.1))
      .isFalse()
      .bool(isInteger(-0.4))
      .isFalse()
      .bool(isInteger(234.4))
      .isFalse()
      .bool(isInteger(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isInteger(noop))
      .isFalse()
      .bool(isInteger(isInteger))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isInteger('adsf'))
      .isFalse()
      .bool(isInteger('34.6'))
      .isFalse()
      .bool(isInteger('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isInteger(/asd/))
      .isFalse()
      .bool(isInteger(/\d+/))
      .isFalse()
      .bool(isInteger(/1/))
      .isFalse()
      .bool(isInteger(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isInteger([]))
      .isFalse()
      .bool(isInteger([1, 2, 3]))
      .isFalse()
      .bool(isInteger(['a', 5, {}]))
      .isFalse();
  }); // end it

  it('should return false for objects that dont stringify to an integer', () => {
    unit
      .bool(isInteger({}))
      .isFalse()
      .bool(isInteger(new String('asd')))
      .isFalse()
      .bool(isInteger({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for integers that are less than the min option', () => {
    unit
      .bool(isInteger(45, {
        min: 50,
      }))
      .isFalse()
      .bool(isInteger(99, {
        min: 100,
      }))
      .isFalse()
      .bool(isInteger('5', {
        min: '6',
      }))
      .isFalse()
      .bool(isInteger(5, {
        min: 6,
      }))
      .isFalse();
  }); // end it

  it('should return false for integers that are greater than the max option', () => {
    unit
      .bool(isInteger(46, {
        max: 45,
      }))
      .isFalse()
      .bool(isInteger(100, {
        max: 99,
      }))
      .isFalse()
      .bool(isInteger('5', {
        max: '4',
      }))
      .isFalse()
      .bool(isInteger(5, {
        max: 4,
      }))
      .isFalse();
  }); // end it

  it('should return false for integers that are not mod % the step option', () => {
    unit
      .bool(isInteger(45, {
        step: 10,
      }))
      .isFalse()
      .bool(isInteger(12, {
        step: 0.7,
      }))
      .isFalse()
      .bool(isInteger('5', {
        step: '3',
      }))
      .isFalse()
      .bool(isInteger(5, {
        step: 3,
      }))
      .isFalse();
  }); // end it

  it('should return false for integers that are not safe to cast when the safe option is true', () => {
    unit
      .bool(isInteger(`${Number.MAX_SAFE_INTEGER}9`, {
        safe: true,
      }))
      .isFalse()
      .bool(isInteger(`${Number.MIN_SAFE_INTEGER}9`, {
        safe: true,
      }))
      .isFalse();
  }); // end it

  it('should throw an error if opt.min is not a number | null | undefined', () => {
    unit
      .error(() => {
        return isInteger(5, {
          min: 'a',
        });
      })
      .error(() => {
        return isInteger(5, {
          min: /a/,
        });
      })
      .error(() => {
        return isInteger(5, {
          min: noop,
        });
      })
      .error(() => {
        return isInteger(5, {
          min: [],
        });
      })
      .error(() => {
        return isInteger(5, {
          min: {},
        });
      });
  }); // end it

  it('should throw an error if opt.max is not a number | null | undefined', () => {
    unit
      .error(() => {
        return isInteger(5, {
          max: 'z',
        });
      })
      .error(() => {
        return isInteger(5, {
          max: /a/,
        });
      })
      .error(() => {
        return isInteger(5, {
          max: noop,
        });
      })
      .error(() => {
        return isInteger(5, {
          max: [],
        });
      })
      .error(() => {
        return isInteger(5, {
          max: {},
        });
      });
  }); // end it

  it('should throw an error if opt.step is not a number | null | undefined', () => {
    unit
      .error(() => {
        return isInteger(5, {
          step: 'g',
        });
      })
      .error(() => {
        return isInteger(5, {
          step: /a/,
        });
      })
      .error(() => {
        return isInteger(5, {
          step: noop,
        });
      })
      .error(() => {
        return isInteger(5, {
          step: [],
        });
      })
      .error(() => {
        return isInteger(5, {
          step: {},
        });
      });
  }); // end it
}); // end describe #isInteger