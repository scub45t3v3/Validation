'use strict';

// include dependencies
const unit = require('unit.js');
const isRegExp = require('../isRegExp');

// describe #isRegExp
describe('#isRegExp', () => {
  it('should be a function', () => {
    unit
      .function(isRegExp);
  }); // end it

  it('should return true for regexs', () => {
    unit
      .bool(isRegExp(/asd/u))
      .isTrue()
      .bool(isRegExp(/\d+/u))
      .isTrue()
      .bool(isRegExp(/1/u))
      .isTrue()
      .bool(isRegExp(new RegExp('3', 'u')))
      .isTrue();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isRegExp(1))
      .isFalse()
      .bool(isRegExp(234987))
      .isFalse()
      .bool(isRegExp(-239874))
      .isFalse()
      .bool(isRegExp(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isRegExp(1.1))
      .isFalse()
      .bool(isRegExp(-0.4))
      .isFalse()
      .bool(isRegExp(234.4))
      .isFalse()
      .bool(isRegExp(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isRegExp('adsf'))
      .isFalse()
      .bool(isRegExp('34.6'))
      .isFalse()
      .bool(isRegExp('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isRegExp({}))
      .isFalse()
      .bool(isRegExp(new String('asd')))
      .isFalse()
      .bool(isRegExp({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isRegExp([]))
      .isFalse()
      .bool(isRegExp([1, 2]))
      .isFalse()
      .bool(isRegExp(['a', {}, 6]))
      .isFalse();
  }); // end it
}); // end describe #isRegExp