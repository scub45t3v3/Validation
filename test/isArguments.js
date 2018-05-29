(function() {
  var isArguments, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isArguments = require('../isArguments');

  describe('#isArguments', function() {
    it('should be a function', function() {
      unit.function(isArguments);
      return null;
    });
    it('should return true for arguments', function() {
      unit.bool(isArguments(arguments)).isTrue();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isArguments([])).isFalse().bool(isArguments([1, 2])).isFalse().bool(isArguments(['a', {}, 6])).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isArguments(1)).isFalse().bool(isArguments(234987)).isFalse().bool(isArguments(-239874)).isFalse().bool(isArguments(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isArguments(1.1)).isFalse().bool(isArguments(-0.4)).isFalse().bool(isArguments(234.4)).isFalse().bool(isArguments(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isArguments(noop)).isFalse().bool(isArguments(isArguments)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isArguments('adsf')).isFalse().bool(isArguments('34.6')).isFalse().bool(isArguments('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isArguments(/asd/)).isFalse().bool(isArguments(/\d+/)).isFalse().bool(isArguments(/1/)).isFalse().bool(isArguments(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isArguments({})).isFalse().bool(isArguments(new String('asd'))).isFalse().bool(isArguments({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for Set', function() {
      unit.bool(isArguments(new Set())).isFalse().bool(isArguments(new Set().add(1))).isFalse().bool(isArguments(new Set([1, 2, 3]))).isFalse();
      return null;
    });
  });

}).call(this);
