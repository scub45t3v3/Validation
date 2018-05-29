(function() {
  var isISRC, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isISRC = require('../isISRC');

  describe('#isISRC', function() {
    it('should be a function', function() {
      unit.function(isISRC);
      return null;
    });
    it('should return true for valid ISRC strings', function() {
      unit.bool(isISRC('JMK401400212')).isTrue().bool(isISRC('GB6T61123438')).isTrue().bool(isISRC('US89Z6683415')).isTrue().bool(isISRC('AUT8T4386194')).isTrue().bool(isISRC('TH9TG7452938')).isTrue().bool(isISRC('RUYKF4639652')).isTrue().bool(isISRC('CN4H16593428')).isTrue().bool(isISRC('VN9TT7593452')).isTrue().bool(isISRC('DN5746324284')).isTrue().bool(isISRC('MX8574638393')).isTrue().bool(isISRC('CA7T57596012')).isTrue().bool(isISRC('TZ4KL4789202')).isTrue();
      return null;
    });
    it('should return false for invalid ISRC strings', function() {
      unit.bool(isISRC('JMK40140021F')).isFalse().bool(isISRC('GB6T61123G38')).isFalse().bool(isISRC('US89Z6Y83415')).isFalse().bool(isISRC('AUT8T4-86194')).isFalse().bool(isISRC('TH9TG7/52938')).isFalse().bool(isISRC('RUYKF463=652')).isFalse().bool(isISRC('CN4H165935428')).isFalse().bool(isISRC('VN9TT759352')).isFalse().bool(isISRC('DN574632+284')).isFalse().bool(isISRC('MX8574$38393')).isFalse().bool(isISRC('C47T57596012')).isFalse().bool(isISRC('4Z4KL4789202')).isFalse();
      return null;
    });
    it('should return false for bools', function() {
      unit.bool(isISRC(true)).isFalse().bool(isISRC(false)).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isISRC([])).isFalse().bool(isISRC([1, 2])).isFalse().bool(isISRC(['a', {}, 6])).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isISRC(1)).isFalse().bool(isISRC(234987)).isFalse().bool(isISRC(-239874)).isFalse().bool(isISRC(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isISRC(1.1)).isFalse().bool(isISRC(-0.4)).isFalse().bool(isISRC(234.4)).isFalse().bool(isISRC(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isISRC(noop)).isFalse().bool(isISRC(isISRC)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isISRC('adsf')).isFalse().bool(isISRC('34.6')).isFalse().bool(isISRC('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isISRC(/asd/)).isFalse().bool(isISRC(/\d+/)).isFalse().bool(isISRC(/1/)).isFalse().bool(isISRC(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isISRC({})).isFalse().bool(isISRC(new String('asd'))).isFalse().bool(isISRC({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isISRC(new Set())).isFalse().bool(isISRC(new Set().add(1))).isFalse().bool(isISRC(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
