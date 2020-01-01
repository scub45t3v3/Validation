'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isHexColor = require('../isHexColor');

// describe #isHexColor
describe('#isHexColor', () => {
  it('should be a function', () => {
    unit
      .function(isHexColor);
  }); // end it

  it('should return true for valid hex color strings', () => {
    unit
      .bool(isHexColor('fff'))
      .isTrue()
      .bool(isHexColor('a8fd34'))
      .isTrue()
      .bool(isHexColor('#fff'))
      .isTrue()
      .bool(isHexColor('#d58f92'))
      .isTrue()
      .bool(isHexColor('222'))
      .isTrue()
      .bool(isHexColor('#222222'))
      .isTrue();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isHexColor('we48tuer'))
      .isFalse()
      .bool(isHexColor('we[foewf]'))
      .isFalse()
      .bool(isHexColor('34w98uerj'))
      .isFalse()
      .bool(isHexColor('*&TYY'))
      .isFalse()
      .bool(isHexColor('serreg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isHexColor('sdf.,.mdf'))
      .isFalse()
      .bool(isHexColor('we;o9tu49'))
      .isFalse()
      .bool(isHexColor('q23qo98441`'))
      .isFalse()
      .bool(isHexColor('ewr09ti34*&'))
      .isFalse()
      .bool(isHexColor('%sdkjvnnd'))
      .isFalse()
      .bool(isHexColor('=adkljfhsd'))
      .isFalse()
      .bool(isHexColor('sadkjfh{sdkjf}'))
      .isFalse()
      .bool(isHexColor('aweklhd[asldkfjsd]'))
      .isFalse()
      .bool(isHexColor(',foiadfoihf<lkewf'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isHexColor(14))
      .isFalse()
      .bool(isHexColor(23487))
      .isFalse()
      .bool(isHexColor(-2398))
      .isFalse()
      .bool(isHexColor(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isHexColor(98.00007))
      .isFalse()
      .bool(isHexColor(-32407.3))
      .isFalse()
      .bool(isHexColor(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isHexColor(noop))
      .isFalse()
      .bool(isHexColor(isHexColor))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isHexColor(/asd/))
      .isFalse()
      .bool(isHexColor(/\d+/))
      .isFalse()
      .bool(isHexColor(/1/))
      .isFalse()
      .bool(isHexColor(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isHexColor([]))
      .isFalse()
      .bool(isHexColor([1, 2, 3]))
      .isFalse()
      .bool(isHexColor(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isHexColor