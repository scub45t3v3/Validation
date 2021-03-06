'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isIP = require('../isIP');

// describe #isIP
describe('#isIP', () => {
  it('should be a function', () => {
    unit
      .function(isIP);
  }); // end it

  it('should return true for valid ip addresses', () => {
    unit
      .bool(isIP('67.213.74.8'))
      .isTrue()
      .bool(isIP('10.0.0.1'))
      .isTrue()
      .bool(isIP('192.168.0.1'))
      .isTrue()
      .bool(isIP('127.0.0.1'))
      .isTrue()
      .bool(isIP('2001:0db8:0000:0000:0000:ff00:0042:8329'))
      .isTrue()
      .bool(isIP('2001:db8:0:0:0:ff00:42:8329'))
      .isTrue()
      .bool(isIP('2001:db8::ff00:42:8329'))
      .isTrue()
      .bool(isIP('::1'))
      .isTrue();
  }); // end it

  it('should return true for valid ipv4 addresses', () => {
    unit
      .bool(isIP('67.213.74.8', 4))
      .isTrue()
      .bool(isIP('10.0.0.1', 4))
      .isTrue()
      .bool(isIP('192.168.0.1', '4'))
      .isTrue()
      .bool(isIP('127.0.0.1', 4))
      .isTrue();
  }); // end it

  it('should return true for valid ipv6 addresses', () => {
    unit
      .bool(isIP('2001:0db8:0000:0000:0000:ff00:0042:8329', 6))
      .isTrue()
      .bool(isIP('2001:db8:0:0:0:ff00:42:8329', '6'))
      .isTrue()
      .bool(isIP('2001:db8::ff00:42:8329', 6))
      .isTrue()
      .bool(isIP('::1', 6))
      .isTrue();
  }); // end it

  it('should return false for valid ipv4 addresses with ipv6 flag', () => {
    unit
      .bool(isIP('67.213.74.8', 6))
      .isFalse()
      .bool(isIP('10.0.0.1', 6))
      .isFalse()
      .bool(isIP('192.168.0.1', '6'))
      .isFalse()
      .bool(isIP('127.0.0.1', 6))
      .isFalse();
  }); // end it

  it('should return false for valid ipv6 addresses with ipv4 flag', () => {
    unit
      .bool(isIP('2001:0db8:0000:0000:0000:ff00:0042:8329', 4))
      .isFalse()
      .bool(isIP('2001:db8:0:0:0:ff00:42:8329', '4'))
      .isFalse()
      .bool(isIP('2001:db8::ff00:42:8329', 4))
      .isFalse()
      .bool(isIP('::1', 4))
      .isFalse();
  }); // end it

  it('should return false for bools', () => {
    unit
      .bool(isIP(true))
      .isFalse()
      .bool(isIP(false))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isIP([]))
      .isFalse()
      .bool(isIP([1, 2]))
      .isFalse()
      .bool(isIP(['a', {}, 6]))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isIP(1))
      .isFalse()
      .bool(isIP(234987))
      .isFalse()
      .bool(isIP(-239874))
      .isFalse()
      .bool(isIP(0))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isIP(1.1))
      .isFalse()
      .bool(isIP(-0.4))
      .isFalse()
      .bool(isIP(234.4))
      .isFalse()
      .bool(isIP(54.00000000001))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isIP(noop))
      .isFalse()
      .bool(isIP(isIP))
      .isFalse();
  }); // end it

  it('should return false for strings', () => {
    unit
      .bool(isIP('adsf'))
      .isFalse()
      .bool(isIP('34.6'))
      .isFalse()
      .bool(isIP('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isIP(/asd/u))
      .isFalse()
      .bool(isIP(/\d+/u))
      .isFalse()
      .bool(isIP(/1/u))
      .isFalse()
      .bool(isIP(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for objects', () => {
    unit
      .bool(isIP({}))
      .isFalse()
      .bool(isIP(new String('asd')))
      .isFalse()
      .bool(isIP({
        a: 5,
      }))
      .isFalse();
  }); // end it

  it('should return false for Set', () => {
    unit
      .bool(isIP(new Set()))
      .isFalse()
      .bool(isIP(new Set().add(1)))
      .isFalse()
      .bool(isIP(new Set([1, 2, 3])))
      .isFalse();
  }); // end it
}); // end describe #isIP