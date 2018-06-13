(function() {
  var isDomainName, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isDomainName = require('../isDomainName');

  describe('#isDomainName', function() {
    it('should be a function', function() {
      unit.function(isDomainName);
      return null;
    });
    it('should return true for valid url strings', function() {
      unit.bool(isDomainName('foo.com')).isTrue().bool(isDomainName('www.example.com')).isTrue().bool(isDomainName('✪df.ws')).isTrue().bool(isDomainName('⌘.ws')).isTrue().bool(isDomainName('☺.damowmow.com')).isTrue().bool(isDomainName('code.google.com')).isTrue().bool(isDomainName('j.mp')).isTrue().bool(isDomainName('مثال.إختبار')).isTrue().bool(isDomainName('例子.测试')).isTrue().bool(isDomainName('1337.net')).isTrue().bool(isDomainName('a.b-c.de')).isTrue();
      return null;
    });
    it('should return false for valid international domains when flag is false', function() {
      unit.bool(isDomainName('✪df.ws', false)).isFalse().bool(isDomainName('⌘.ws', false)).isFalse().bool(isDomainName('☺.damowmow.com', false)).isFalse().bool(isDomainName('مثال.إختبار', false)).isFalse().bool(isDomainName('例子.测试', false)).isFalse();
      return null;
    });
    it('should return false for invalid url strings', function() {
      unit.bool(isDomainName('')).isFalse().bool(isDomainName('?')).isFalse().bool(isDomainName('??')).isFalse().bool(isDomainName('?.??')).isFalse().bool(isDomainName('#')).isFalse().bool(isDomainName('##')).isFalse().bool(isDomainName('##.$/')).isFalse().bool(isDomainName('foo bar')).isFalse().bool(isDomainName('//')).isFalse().bool(isDomainName('//a')).isFalse().bool(isDomainName('///a')).isFalse().bool(isDomainName('///')).isFalse().bool(isDomainName('a')).isFalse().bool(isDomainName('.foo.com')).isFalse().bool(isDomainName('1234')).isFalse().bool(isDomainName('test')).isFalse().bool(isDomainName(' shouldfail.com')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isDomainName(14)).isFalse().bool(isDomainName(234987)).isFalse().bool(isDomainName(-2398)).isFalse().bool(isDomainName(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isDomainName(98.00007)).isFalse().bool(isDomainName(-32407.3)).isFalse().bool(isDomainName(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isDomainName(noop)).isFalse().bool(isDomainName(isDomainName)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isDomainName(/asd/)).isFalse().bool(isDomainName(/\d+/)).isFalse().bool(isDomainName(/1/)).isFalse().bool(isDomainName(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isDomainName([])).isFalse().bool(isDomainName([1, 2, 3])).isFalse().bool(isDomainName(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
