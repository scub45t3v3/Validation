'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isDomainName = require('../isDomainName');

// describe #isDomainName
describe('#isDomainName', () => {
  it('should be a function', () => {
    unit
      .function(isDomainName);
  }); // end it

  it('should return true for valid domain name strings', () => {
    unit
      .bool(isDomainName('foo.com'))
      .isTrue()
      .bool(isDomainName('www.example.com'))
      .isTrue()
      .bool(isDomainName('✪df.ws'))
      .isTrue()
      .bool(isDomainName('⌘.ws'))
      .isTrue()
      .bool(isDomainName('☺.damowmow.com'))
      .isTrue()
      .bool(isDomainName('code.google.com'))
      .isTrue()
      .bool(isDomainName('j.mp'))
      .isTrue()
      .bool(isDomainName('مثال.إختبار'))
      .isTrue()
      .bool(isDomainName('例子.测试'))
      .isTrue()
      .bool(isDomainName('1337.net'))
      .isTrue()
      .bool(isDomainName('a.b-c.de'))
      .isTrue();
  }); // end it

  it('should return false for valid international domains when flag is false', () => {
    unit
      .bool(isDomainName('✪df.ws', false))
      .isFalse()
      .bool(isDomainName('⌘.ws', false))
      .isFalse()
      .bool(isDomainName('☺.damowmow.com', false))
      .isFalse()
      .bool(isDomainName('مثال.إختبار', false))
      .isFalse()
      .bool(isDomainName('例子.测试', false))
      .isFalse();
  }); // end it

  it('should return false for invalid domain name strings', () => {
    unit
      .bool(isDomainName(''))
      .isFalse()
      .bool(isDomainName('?'))
      .isFalse()
      .bool(isDomainName('??'))
      .isFalse()
      .bool(isDomainName('?.??'))
      .isFalse()
      .bool(isDomainName('#'))
      .isFalse()
      .bool(isDomainName('##'))
      .isFalse()
      .bool(isDomainName('##.$/'))
      .isFalse()
      .bool(isDomainName('foo bar'))
      .isFalse()
      .bool(isDomainName('//'))
      .isFalse()
      .bool(isDomainName('//a'))
      .isFalse()
      .bool(isDomainName('///a'))
      .isFalse()
      .bool(isDomainName('///'))
      .isFalse()
      .bool(isDomainName('a'))
      .isFalse()
      .bool(isDomainName('.foo.com'))
      .isFalse()
      .bool(isDomainName('1234'))
      .isFalse()
      .bool(isDomainName('test'))
      .isFalse()
      .bool(isDomainName(' shouldfail.com'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isDomainName(14))
      .isFalse()
      .bool(isDomainName(234987))
      .isFalse()
      .bool(isDomainName(-2398))
      .isFalse()
      .bool(isDomainName(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isDomainName(98.00007))
      .isFalse()
      .bool(isDomainName(-32407.3))
      .isFalse()
      .bool(isDomainName(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isDomainName(noop))
      .isFalse()
      .bool(isDomainName(isDomainName))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isDomainName(/asd/u))
      .isFalse()
      .bool(isDomainName(/\d+/u))
      .isFalse()
      .bool(isDomainName(/1/u))
      .isFalse()
      .bool(isDomainName(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isDomainName([]))
      .isFalse()
      .bool(isDomainName([1, 2, 3]))
      .isFalse()
      .bool(isDomainName(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isDomainName