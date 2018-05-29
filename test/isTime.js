(function() {
  var isTime, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isTime = require('../isTime');

  describe('#isTime', function() {
    it('should be a function', function() {
      unit.function(isTime);
      return null;
    });
    it('should return true for valid time strings', function() {
      unit.bool(isTime('23:59:59.999999999')).isTrue().bool(isTime('00:00:00.000000001')).isTrue().bool(isTime('11:59:59AM')).isTrue().bool(isTime('1:24 P.M.')).isTrue().bool(isTime('6 AM')).isTrue().bool(isTime('13:01Z')).isTrue().bool(isTime('13:01+3')).isTrue().bool(isTime('13:00-3')).isTrue().bool(isTime('13:01 +3:00')).isTrue().bool(isTime('13:01 MST')).isTrue().bool(isTime('13:01 Mountain Standard Time')).isTrue().bool(isTime('13:01 America/Denver')).isTrue().bool(isTime('00:00:00.001 AM MST')).isTrue();
      return null;
    });
    it('should return true for integers < 24', function() {
      unit.bool(isTime(0)).isTrue().bool(isTime(23)).isTrue();
      return null;
    });
    it('should return false for invalid time strings', function() {
      unit.bool(isTime('24')).isFalse().bool(isTime('13:01PM')).isFalse().bool(isTime('13AM')).isFalse().bool(isTime('5:50:60')).isFalse().bool(isTime('24:00')).isFalse().bool(isTime('11 A.M. T')).isFalse().bool(isTime('3:60')).isFalse().bool(isTime('4:20 F.M.')).isFalse().bool(isTime('12:34:34:56:12')).isFalse();
      return null;
    });
    it('should return false for integers > 24', function() {
      unit.bool(isTime(25)).isFalse().bool(isTime(234987)).isFalse().bool(isTime(-2398)).isFalse().bool(isTime(2587)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isTime(0.1)).isFalse().bool(isTime(5.34)).isFalse().bool(isTime(98.00007)).isFalse().bool(isTime(-32407.3)).isFalse().bool(isTime(24.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isTime(noop)).isFalse().bool(isTime(isTime)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isTime(/asd/)).isFalse().bool(isTime(/\d+/)).isFalse().bool(isTime(/1/)).isFalse().bool(isTime(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isTime([])).isFalse().bool(isTime([1589, 23487, 'f'])).isFalse().bool(isTime(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
