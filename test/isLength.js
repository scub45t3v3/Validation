(function() {
  var isLength, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isLength = require('../isLength');

  describe('#isLength', function() {
    it('should be a function', function() {
      unit.function(isLength);
      return null;
    });
    it('should return true for strings', function() {
      unit.bool(isLength('a')).isTrue().bool(isLength('alkjdfhwekjcfncn83hr;32hhew;ihp81hluehfleriufhwedjklkdf')).isTrue();
      return null;
    });
    it('should return true for arrays', function() {
      var now;
      now = new Date();
      unit.bool(isLength([4, 70, false, 'asd'])).isTrue().bool(isLength([2011])).isTrue().bool(isLength([2000, 6, 15, 5])).isTrue();
      return null;
    });
    it('should return true for function with arguments', function() {
      unit.bool(isLength(isLength)).isTrue().bool(isLength(parseInt)).isTrue().bool(isLength(JSON.parse)).isTrue();
      return null;
    });
    it('should return true for objects with a length property', function() {
      unit.bool(isLength({
        length: 5
      })).isTrue().bool(isLength({
        a: 5,
        length: 1
      })).isTrue();
      return null;
    });
    it('should return false for strings not equal to length', function() {
      unit.bool(isLength('a', 4)).isFalse().bool(isLength('alkjdfhwekjcfncn83hr;32hhew;ihp81hluehfleriufhwedj', 12)).isFalse();
      return null;
    });
    it('should return false for arrays not equal to length', function() {
      unit.bool(isLength([4, 70, false, 'asd'], 1)).isFalse().bool(isLength([2011], 2)).isFalse().bool(isLength([2000, 6, 15, 5], 10)).isFalse();
      return null;
    });
    it('should return false for function with arguments not equal to length', function() {
      unit.bool(isLength(isLength, 3)).isFalse().bool(isLength(parseInt, 8)).isFalse().bool(isLength(JSON.parse, 1)).isFalse();
      return null;
    });
    it('should return false for objects with enumerable length property not equal to length', function() {
      unit.bool(isLength({
        length: 5
      }, 4)).isFalse().bool(isLength({
        a: 5,
        length: 1
      }, 2)).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isLength(2, 1)).isFalse().bool(isLength(234988, 234987)).isFalse().bool(isLength(-239873, -239874)).isFalse().bool(isLength(1, 0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isLength(1.5, 1.4)).isFalse().bool(isLength(-0.2, -0.3)).isFalse().bool(isLength(234.6, 234.5)).isFalse().bool(isLength(55.00000000001, 55)).isFalse();
      return null;
    });
    it('should return false for dates', function() {
      unit.bool(isLength(Date.now() + 500)).isFalse().bool(isLength(new Date())).isFalse().bool(isLength(new Date('2010-02-01'))).isFalse();
      return null;
    });
    it('should return false for functions without arguments', function() {
      unit.bool(isLength(noop)).isFalse().bool(isLength(Date.now)).isFalse();
      return null;
    });
    it('should return false for objects without a length property', function() {
      unit.bool(isLength({
        g: -6.4,
        k: 'asd'
      })).isFalse().bool(isLength({
        d: 'hi'
      })).isFalse().bool(isLength({
        a: 5,
        b: false
      })).isFalse();
      return null;
    });
    return it('should return false for regexs', function() {
      unit.bool(isLength(/asd/)).isFalse().bool(isLength(/\d+/)).isFalse().bool(isLength(/1/)).isFalse().bool(isLength(new RegExp('3'))).isFalse();
      return null;
    });
  });

}).call(this);
