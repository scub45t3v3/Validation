'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const isUUID = require('../isUUID');

  // describe #isUUID
  describe('#isUUID', () => {
    it('should be a function', () => {
      unit
        .function(isUUID);
    }); // end it

    it('should return true for valid UUID strings', () => {
      unit
        .bool(isUUID('2fed40d0-774e-11e7-b5a5-be2e44b06b34'))
        .isTrue()
        .bool(isUUID('2fed4332-774e-11e7-b5a5-be2e44b06b34'))
        .isTrue()
        .bool(isUUID('2fed44b8-774e-11e7-b5a5-be2e44b06b34'))
        .isTrue()
        .bool(isUUID('2fed4652-774e-11e7-b5a5-be2e44b06b34'))
        .isTrue()
        .bool(isUUID('2fed485a-774e-11e7-b5a5-be2e44b06b34'))
        .isTrue()
        .bool(isUUID('5c97cda6-5d05-47f5-8174-541ad610e6bf'))
        .isTrue()
        .bool(isUUID('a533c026-be21-453b-afcc-99f4d83eed36'))
        .isTrue()
        .bool(isUUID('737e6050-7b96-499b-b71e-efa75d1b90c2'))
        .isTrue()
        .bool(isUUID('35a95b8c-186d-4088-a602-fd126b47bafd'))
        .isTrue()
        .bool(isUUID('36045104-c1ee-4e88-a9d9-2c44863028fd'))
        .isTrue();
    }); // end it

    it('should return false for invalid UUID strings', () => {
      unit
        .bool(isUUID('we48tuer'))
        .isFalse()
        .bool(isUUID('we[foewf]'))
        .isFalse()
        .bool(isUUID('34w98uerj'))
        .isFalse()
        .bool(isUUID('*&TYY'))
        .isFalse()
        .bool(isUUID('serreg;dfskdfkjfgjh'))
        .isFalse()
        .bool(isUUID('sdf.,.mdf'))
        .isFalse()
        .bool(isUUID('we;o9tu49'))
        .isFalse()
        .bool(isUUID('q23qo98441`'))
        .isFalse()
        .bool(isUUID('ewr09ti34*&'))
        .isFalse()
        .bool(isUUID('%sdkjvnnd'))
        .isFalse()
        .bool(isUUID('=adkljfhsd'))
        .isFalse()
        .bool(isUUID('sadkjfh{sdkjf}'))
        .isFalse()
        .bool(isUUID('aweklhd[asldkfjsd]'))
        .isFalse()
        .bool(isUUID(',foiadfoihf<lkewf'))
        .isFalse();
    }); // end it

    it('should return false for integers', () => {
      unit
        .bool(isUUID(14))
        .isFalse()
        .bool(isUUID(234987))
        .isFalse()
        .bool(isUUID(-2398))
        .isFalse()
        .bool(isUUID(2))
        .isFalse();
    }); // end it

    it('should return false for floats', () => {
      unit
        .bool(isUUID(98.00007))
        .isFalse()
        .bool(isUUID(-32407.3))
        .isFalse()
        .bool(isUUID(0.1))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isUUID(noop))
        .isFalse()
        .bool(isUUID(isUUID))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isUUID(/asd/))
        .isFalse()
        .bool(isUUID(/\d+/))
        .isFalse()
        .bool(isUUID(/1/))
        .isFalse()
        .bool(isUUID(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isUUID([]))
        .isFalse()
        .bool(isUUID([1, 2, 3]))
        .isFalse()
        .bool(isUUID(['a', 5, {}]))
        .isFalse();
    }); // end it
  }); // end describe #isUUID
})(); // end IIFE