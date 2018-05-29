(function() {
  var isError, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isError = require('../isError');

  describe('#isError', function() {
    it('should be a function', function() {
      unit.function(isError);
      return null;
    });
    it('should return true for Errors', function() {
      unit.bool(isError(new Error())).isTrue().bool(isError(new EvalError())).isTrue().bool(isError(new RangeError())).isTrue().bool(isError(new ReferenceError())).isTrue().bool(isError(new SyntaxError())).isTrue().bool(isError(new TypeError())).isTrue().bool(isError(new URIError())).isTrue();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isError(1)).isFalse().bool(isError(234987)).isFalse().bool(isError(-239874)).isFalse().bool(isError(0)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isError(1.1)).isFalse().bool(isError(-0.4)).isFalse().bool(isError(234.4)).isFalse().bool(isError(54.00000000001)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isError(noop)).isFalse().bool(isError(isError)).isFalse();
      return null;
    });
    it('should return false for strings', function() {
      unit.bool(isError('adsf')).isFalse().bool(isError('34.6')).isFalse().bool(isError('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isError(/asd/)).isFalse().bool(isError(/\d+/)).isFalse().bool(isError(/1/)).isFalse().bool(isError(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isError({})).isFalse().bool(isError(new String('asd'))).isFalse().bool(isError({
        a: 5
      })).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isError([])).isFalse().bool(isError([1, 2, 3])).isFalse().bool(isError(['a', new Error(), {}])).isFalse();
      return null;
    });
  });

}).call(this);
