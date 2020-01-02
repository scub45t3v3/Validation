'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const BigNumber = require('bignumber.js');
const isPort = require('../isPort');

// describe #isPort
describe('#isPort', () => {
  it('should be a function', () => {
    unit
      .function(isPort);
  }); // end it

  it('should return true for valid port numbers', () => {
    unit
      .bool(isPort(1))
      .isTrue()
      .bool(isPort(65535))
      .isTrue()
      .bool(isPort(80))
      .isTrue()
      .bool(isPort(26))
      .isTrue()
      .bool(isPort(443))
      .isTrue();
  }); // end it

  it('should return true for parsable port numbers', () => {
    unit
      .bool(isPort('80'))
      .isTrue()
      .bool(isPort('26'))
      .isTrue()
      .bool(isPort('8000'))
      .isTrue();
  }); // end it

  it('should return true for objects that stringify to a port number', () => {
    unit
      .bool(isPort(new String('80')))
      .isTrue()
      .bool(isPort(new BigNumber('8080')))
      .isTrue();
  }); // end it

  it('should return false for value < 1 or > 65535', () => {
    unit
      .bool(isPort(0))
      .isFalse()
      .bool(isPort(65536))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isPort(noop))
      .isFalse()
      .bool(isPort(isPort))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isPort('adsf'))
      .isFalse()
      .bool(isPort('34.t'))
      .isFalse()
      .bool(isPort('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isPort(/asd/u))
      .isFalse()
      .bool(isPort(/\d+/u))
      .isFalse()
      .bool(isPort(/1/u))
      .isFalse()
      .bool(isPort(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isPort([]))
      .isFalse()
      .bool(isPort([1, 2, 3]))
      .isFalse()
      .bool(isPort(['a', 5, {}]))
      .isFalse();
  }); // end it

  it('should return false for objects that dont stringify to a latitude', () => {
    unit
      .bool(isPort({}))
      .isFalse()
      .bool(isPort(new String('asd')))
      .isFalse()
      .bool(isPort({
        a: 5,
      }))
      .isFalse();
  }); // end it
}); // end describe #isPort