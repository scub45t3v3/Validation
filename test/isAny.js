(function() {
  var isAny, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isAny = require('../isAny');

  describe('#isAny', function() {
    it('should be a function', function() {
      unit.function(isAny);
      return null;
    });
    it('should return true for a value that passes truth test for provided functions', function() {
      var test;
      test = [
        function(value) {
          return typeof value === 'string';
        },
        function(value) {
          return typeof value === 'number';
        },
        function(value) {
          return typeof value === 'boolean';
        }
      ];
      unit.bool(isAny('hello', ...test)).isTrue().bool(isAny(1, ...test)).isTrue().bool(isAny(true, ...test)).isTrue().bool(isAny(false, ...test)).isTrue();
      return null;
    });
    it('should return true for a value that passes truth test for provided RegExp', function() {
      var test;
      test = [/^\d+$/, /^hello/i];
      unit.bool(isAny('hello', ...test)).isTrue().bool(isAny(5, ...test)).isTrue().bool(isAny('0954', ...test)).isTrue();
      return null;
    });
    it('should return true for a value that passes truth test for provided function references', function() {
      var test;
      test = ['isDate', 'isString', 'isNull', 'isUndefined'];
      unit.bool(isAny(new Date('2010-09-18'), ...test)).isTrue().bool(isAny('string here', ...test)).isTrue().bool(isAny(null, ...test)).isTrue().bool(isAny(void 0, ...test)).isTrue();
      return null;
    });
    it('should return false for a value that does not pass truth test for provided function references', function() {
      var test;
      test = ['isURL', 'isNaN', ['isBefore', 5]];
      unit.bool(isAny(new Date(), ...test)).isFalse().bool(isAny('string here', ...test)).isFalse().bool(isAny(3738, ...test)).isFalse().bool(isAny(true, ...test)).isFalse();
      return null;
    });
    return it('should throw an error for any callable argument that can not be resolved to a function', function() {
      unit.error(function() {
        return isAny(5, {});
      }).error(function() {
        return isAny(5, []);
      }).error(function() {
        return isAny(5, '5');
      }).error(function() {
        return isAny(5, 'nonExistantMethod');
      });
      return null;
    });
  });

}).call(this);
