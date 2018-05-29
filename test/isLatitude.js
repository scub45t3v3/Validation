(function() {
  var BigNumber, isLatitude, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  BigNumber = require('bignumber.js');

  isLatitude = require('../isLatitude');

  describe('#isLatitude', function() {
    it('should be a function', function() {
      unit.function(isLatitude);
      return null;
    });
    it('should return true for valid latitude', function() {
      unit.bool(isLatitude(1.4)).isTrue().bool(isLatitude(-90)).isTrue().bool(isLatitude(90)).isTrue().bool(isLatitude(-2.0)).isTrue();
      return null;
    });
    it('should return true for parsable latitude', function() {
      unit.bool(isLatitude('89.00007')).isTrue().bool(isLatitude('-76.')).isTrue().bool(isLatitude('0.1')).isTrue();
      return null;
    });
    it('should return true for objects that stringify to latitude', function() {
      unit.bool(isLatitude(new String('73'))).isTrue().bool(isLatitude(new BigNumber('-45.7675'))).isTrue();
      return null;
    });
    it('should return false for value < -90 or > 90', function() {
      unit.bool(isLatitude(90.0000001)).isFalse().bool(isLatitude(-90.000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isLatitude(noop)).isFalse().bool(isLatitude(isLatitude)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isLatitude('adsf')).isFalse().bool(isLatitude('34.t')).isFalse().bool(isLatitude('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isLatitude(/asd/)).isFalse().bool(isLatitude(/\d+/)).isFalse().bool(isLatitude(/1/)).isFalse().bool(isLatitude(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isLatitude([])).isFalse().bool(isLatitude([1, 2, 3])).isFalse().bool(isLatitude(['a', 5, {}])).isFalse();
      return null;
    });
    return it('should return false for objects that dont stringify to a latitude', function() {
      unit.bool(isLatitude({})).isFalse().bool(isLatitude(new String('asd'))).isFalse().bool(isLatitude({
        a: 5
      })).isFalse();
      return null;
    });
  });

}).call(this);
