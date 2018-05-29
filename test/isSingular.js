(function() {
  var isSingular, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isSingular = require('../isSingular');

  describe('#isSingular', function() {
    it('should be a function', function() {
      unit.function(isSingular);
      return null;
    });
    it('should return true for singular strings', function() {
      unit.bool(isSingular('item')).isTrue().bool(isSingular('car')).isTrue().bool(isSingular('bar')).isTrue().bool(isSingular('table')).isTrue().bool(isSingular('chair')).isTrue();
      return null;
    });
    it('should return false for plural strings', function() {
      unit.bool(isSingular('items')).isFalse().bool(isSingular('cars')).isFalse().bool(isSingular('bars')).isFalse().bool(isSingular('tables')).isFalse().bool(isSingular('chairs')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isSingular(14)).isFalse().bool(isSingular(234987)).isFalse().bool(isSingular(-2398)).isFalse().bool(isSingular(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isSingular(98.00007)).isFalse().bool(isSingular(-32407.3)).isFalse().bool(isSingular(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isSingular(noop)).isFalse().bool(isSingular(isSingular)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isSingular(/asd/)).isFalse().bool(isSingular(/\d+/)).isFalse().bool(isSingular(/1/)).isFalse().bool(isSingular(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isSingular([])).isFalse().bool(isSingular([1, 2, 3])).isFalse().bool(isSingular(['a', 5, {}])).isFalse();
      return null;
    });
    it('should return false for null', function() {
      unit.bool(isSingular(null)).isFalse();
      return null;
    });
    return it('should return false for undefined', function() {
      unit.bool(isSingular()).isFalse().bool(isSingular(void 0)).isFalse();
      return null;
    });
  });

}).call(this);
