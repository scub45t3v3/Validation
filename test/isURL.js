'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isURL = require('../isURL');

// describe #isURL
describe('#isURL', () => {
  it('should be a function', () => {
    unit
      .function(isURL);
  }); // end it

  it('should return true for valid url strings', () => {
    unit
      .bool(isURL('http://foo.com/blah_blah'))
      .isTrue()
      .bool(isURL('http://foo.com/blah_blah/'))
      .isTrue()
      .bool(isURL('http://www.example.com/wpstyle/?p=364'))
      .isTrue()
      .bool(isURL('https://www.example.com/foo/?bar=baz&inga=42&quux'))
      .isTrue()
      .bool(isURL('http://✪df.ws/123'))
      .isTrue()
      .bool(isURL('http://userid:password@example.com:8080'))
      .isTrue()
      .bool(isURL('http://userid:password@example.com:8080/'))
      .isTrue()
      .bool(isURL('http://userid@example.com'))
      .isTrue()
      .bool(isURL('http://userid@example.com/'))
      .isTrue()
      .bool(isURL('http://userid:password@example.com'))
      .isTrue()
      .bool(isURL('http://userid:password@example.com/'))
      .isTrue()
      .bool(isURL('http://⌘.ws'))
      .isTrue()
      .bool(isURL('http://⌘.ws/'))
      .isTrue()
      .bool(isURL('http://☺.damowmow.com/'))
      .isTrue()
      .bool(isURL('http://code.google.com/events/#&product=browser'))
      .isTrue()
      .bool(isURL('http://j.mp'))
      .isTrue()
      .bool(isURL('ftp://foo.bar/baz'))
      .isTrue()
      .bool(isURL('http://foo.com/blah_(wikipedia)#cite-1'))
      .isTrue()
      .bool(isURL('http://foo.com/blah_(wikipedia)_blah#cite-1'))
      .isTrue()
      .bool(isURL('http://foo.com/(something)?after=parens'))
      .isTrue()
      .bool(isURL('http://foo.bar/?q=Test%20URL-encoded%20stuff'))
      .isTrue()
      .bool(isURL('http://مثال.إختبار'))
      .isTrue()
      .bool(isURL('http://例子.测试'))
      .isTrue()
      .bool(isURL('http://a1-._~!$&(\')+=*,;%24@example.com'))
      .isTrue()
      .bool(isURL('http://1337.net'))
      .isTrue()
      .bool(isURL('http://a.b-c.de'))
      .isTrue()
      .bool(isURL('http://223.255.255.254/path/to?q=1#hash'))
      .isTrue()
      .bool(isURL('http://[2001:db8::ff00:42:8329]/path/to?q=1#hash'))
      .isTrue();
  }); // end it

  it('should return false for invalid url strings', () => {
    unit
      .bool(isURL('http://'))
      .isFalse()
      .bool(isURL('http://?'))
      .isFalse()
      .bool(isURL('http://??'))
      .isFalse()
      .bool(isURL('http://??/'))
      .isFalse()
      .bool(isURL('http://#'))
      .isFalse()
      .bool(isURL('http://##'))
      .isFalse()
      .bool(isURL('http://##/'))
      .isFalse()
      .bool(isURL('http://foo.bar?q=Spaces should be encoded'))
      .isFalse()
      .bool(isURL('//'))
      .isFalse()
      .bool(isURL('//a'))
      .isFalse()
      .bool(isURL('///a'))
      .isFalse()
      .bool(isURL('///'))
      .isFalse()
      .bool(isURL('http:///a'))
      .isFalse()
      .bool(isURL('foo.com'))
      .isFalse()
      .bool(isURL('rdar://1234'))
      .isFalse()
      .bool(isURL('h://test'))
      .isFalse()
      .bool(isURL('http:// shouldfail.com'))
      .isFalse()
      .bool(isURL(':// shouldfail.com'))
      .isFalse()
      .bool(isURL('http://foo.bar/foo(bar)baz quux'))
      .isFalse()
      .bool(isURL('http://-error-.invalid/'))
      .isFalse()
      .bool(isURL('http://-a.b.co'))
      .isFalse()
      .bool(isURL('http://a.b-.co'))
      .isFalse()
      .bool(isURL('http://3628126748'))
      .isFalse()
      .bool(isURL('http://.www.foo.bar/'))
      .isFalse()
      .bool(isURL('http://www.foo.bar./'))
      .isFalse()
      .bool(isURL('http://.www.foo.bar./'))
      .isFalse()
      .bool(isURL('http://foo.com/unicode_(✪)_in_parens'))
      .isFalse()
      .bool(isURL('http://➡.ws/䨹'))
      .isFalse();
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isURL(14))
      .isFalse()
      .bool(isURL(234987))
      .isFalse()
      .bool(isURL(-2398))
      .isFalse()
      .bool(isURL(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isURL(98.00007))
      .isFalse()
      .bool(isURL(-32407.3))
      .isFalse()
      .bool(isURL(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isURL(noop))
      .isFalse()
      .bool(isURL(isURL))
      .isFalse();
  }); // end it

  it('should return false for invalid strings', () => {
    unit
      .bool(isURL('adsf'))
      .isFalse()
      .bool(isURL('34.t'))
      .isFalse()
      .bool(isURL('-45fg'))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isURL(/asd/u))
      .isFalse()
      .bool(isURL(/\d+/u))
      .isFalse()
      .bool(isURL(/1/u))
      .isFalse()
      .bool(isURL(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isURL([]))
      .isFalse()
      .bool(isURL([1, 2, 3]))
      .isFalse()
      .bool(isURL(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isURL