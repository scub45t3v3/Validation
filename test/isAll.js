(function() {
  var isAll, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isAll = require('../isAll');

  describe('#isAll', function() {
    it('should be a function', function() {
      unit.function(isAll);
      return null;
    });
    it('should return true for a value that passes truth test for provided functions', function() {
      var test;
      test = [
        function(value) {
          return true;
        },
        function(value) {
          return value > 0;
        },
        function(value) {
          return value < 100;
        }
      ];
      unit.bool(isAll(1, ...test)).isTrue().bool(isAll(99, ...test)).isTrue().bool(isAll(.000001, ...test)).isTrue().bool(isAll(99.99999, ...test)).isTrue();
      return null;
    });
    it('should return true for a value that passes truth test for provided function references with additional arguments', function() {
      var test;
      test = ['isDate', ['isBefore', '2050-01-01'], ['isAfter', '2000-01-01']];
      unit.bool(isAll(new Date('2010-09-18'), ...test)).isTrue().bool(isAll('2001-01-01', ...test)).isTrue().bool(isAll(1526121842679, ...test)).isTrue().bool(isAll({
        y: 2005
      }, ...test)).isTrue();
      return null;
    });
    it('should return false for a value that does not pass truth test for provided function references with additional arguments', function() {
      var test;
      test = ['isDate', ['isBefore', '2000-02-01'], ['isAfter', '2000-01-01']];
      unit.bool(isAll(new Date('2010-09-18'), ...test)).isFalse().bool(isAll('2001-01-01', ...test)).isFalse().bool(isAll(1526121842679, ...test)).isFalse().bool(isAll({
        y: 2005
      }, ...test)).isFalse();
      return null;
    });
    return it('should throw an error if any callable argument that can not be resolved to a function', function() {
      unit.error(function() {
        return isAll(5, {});
      }).error(function() {
        return isAll(5, []);
      }).error(function() {
        return isAll(5, /^\d$/);
      }).error(function() {
        return isAll(5, '5');
      }).error(function() {
        return isAll(5, 'nonExistantMethod');
      });
      return null;
    });
  });

}).call(this);
