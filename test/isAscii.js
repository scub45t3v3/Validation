'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isAscii = require('../isAscii');

// describe #isAscii
describe('#isAscii', () => {
  it('should be a function', () => {
    unit
      .function(isAscii);
  }); // end it

  it('should return true for valid ascii only strings', () => {
    unit
      .bool(isAscii('3498tuyawe;ofewh;'))
      .isTrue()
      .bool(isAscii('w3l4895tyew;fhaw3ori'))
      .isTrue()
      .bool(isAscii(';29348[-4  u23r120eiu]'))
      .isTrue()
      .bool(isAscii('q;230958iQ[E2;3O72  P4"]'))
      .isTrue()
      .bool(isAscii('~!@#$%^&*()_+|}{POIUYTREWQASDFGHJKL:"?><MNBVCXZ"}'))
      .isTrue()
      .bool(isAscii('qoe89fywalklfhe'))
      .isTrue()
      .bool(isAscii('q2[309ruawd;fgheher;]'))
      .isTrue()
      .bool(isAscii('w3;4o9t340r9u34'))
      .isTrue()
      .bool(isAscii(';w3outwepu'))
      .isTrue()
      .bool(isAscii('w3o45q[0ru32[]]'))
      .isTrue()
      .bool(isAscii('w34iou3q9ru32;r'))
      .isTrue()
      .bool(isAscii('q;o3ur[ru0340[]]'))
      .isTrue()
      .bool(isAscii(';q32ou3p49y934pu'))
      .isTrue()
      .bool(isAscii('2qi9389ry34pu439'))
      .isTrue();
  }); // end it

  it('should return true for integers', () => {
    unit
      .bool(isAscii(14))
      .isTrue()
      .bool(isAscii(234987))
      .isTrue()
      .bool(isAscii(-2398))
      .isTrue()
      .bool(isAscii(2))
      .isTrue();
  }); // end it

  it('should return true for floats', () => {
    unit
      .bool(isAscii(98.00007))
      .isTrue()
      .bool(isAscii(-32407.3))
      .isTrue()
      .bool(isAscii(0.1))
      .isTrue();
  }); // end it

  it('should return true for functions', () => {
    unit
      .bool(isAscii(noop))
      .isTrue()
      .bool(isAscii(isAscii))
      .isTrue();
  }); // end it

  it('should return true for regexs', () => {
    unit
      .bool(isAscii(/asd/u))
      .isTrue()
      .bool(isAscii(/\d+/u))
      .isTrue()
      .bool(isAscii(/1/u))
      .isTrue()
      .bool(isAscii(new RegExp('3', 'u')))
      .isTrue();
  }); // end it

  it('should return true for arrays', () => {
    unit
      .bool(isAscii(['*']))
      .isTrue()
      .bool(isAscii([1, 2, 3]))
      .isTrue()
      .bool(isAscii(['a', 5, {}]))
      .isTrue();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isAscii('we48¡tuer'))
      .isFalse()
      .bool(isAscii('we[f¢oewf]'))
      .isFalse()
      .bool(isAscii('34w98¤uerj'))
      .isFalse()
      .bool(isAscii('*&T§YY'))
      .isFalse()
      .bool(isAscii('ser¨reg;dfskdfkjfgjh'))
      .isFalse()
      .bool(isAscii('sdf.,.md«f'))
      .isFalse()
      .bool(isAscii('we;o®9tu49'))
      .isFalse()
      .bool(isAscii('q23qo¼98441`'))
      .isFalse()
      .bool(isAscii('ewr0Æ9ti34*&'))
      .isFalse()
      .bool(isAscii('%sdk×jvnnd'))
      .isFalse()
      .bool(isAscii('=adklãjfhsd'))
      .isFalse()
      .bool(isAscii('sadk÷jfh{sdkjf}'))
      .isFalse()
      .bool(isAscii('awekΛlhd[asldkfjsd]'))
      .isFalse()
      .bool(isAscii(',foiβadfoihf<lkewf'))
      .isFalse();
  }); // end it
}); // end describe #isAscii