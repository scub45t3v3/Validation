(function() {
  var isPrimitive, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isPrimitive = require('../isPrimitive');

  describe('#isPrimitive', function() {
    it('should be a function', function() {
      unit.function(isPrimitive);
      return null;
    });
    it('should return true for undefined', function() {
      unit.bool(isPrimitive()).isTrue().bool(isPrimitive(void 0)).isTrue();
      return null;
    });
    it('should return true for null', function() {
      unit.bool(isPrimitive(null)).isTrue();
      return null;
    });
    it('should return true for primitive booleans', function() {
      unit.bool(isPrimitive(true)).isTrue().bool(isPrimitive(false)).isTrue();
      return null;
    });
    it('should return true for primitive strings', function() {
      unit.bool(isPrimitive('')).isTrue().bool(isPrimitive('hello')).isTrue().bool(isPrimitive('#hash')).isTrue();
      return null;
    });
    it('should return true for primitive numbers', function() {
      unit.bool(isPrimitive(0)).isTrue().bool(isPrimitive(1)).isTrue().bool(isPrimitive(-1)).isTrue().bool(isPrimitive(0.99)).isTrue().bool(isPrimitive(-0.99)).isTrue();
      return null;
    });
    it('should return true for NaN', function() {
      unit.bool(isPrimitive(0/0)).isTrue();
      return null;
    });
    it('should return true for Infinity', function() {
      unit.bool(isPrimitive(2e308)).isTrue().bool(isPrimitive(-2e308)).isTrue();
      return null;
    });
    it('should return true for symbols', function() {
      unit.bool(isPrimitive(Symbol())).isTrue().bool(isPrimitive(Symbol.iterator)).isTrue();
      return null;
    });
    it('should return false for boolean objects', function() {
      unit.bool(isPrimitive(new Boolean())).isFalse().bool(isPrimitive(new Boolean(1))).isFalse();
      return null;
    });
    it('should return false for string objects', function() {
      unit.bool(isPrimitive(new String())).isFalse().bool(isPrimitive(new String('hello'))).isFalse().bool(isPrimitive(new String('#hash'))).isFalse();
      return null;
    });
    it('should return false for number objects', function() {
      unit.bool(isPrimitive(new Number(0))).isFalse().bool(isPrimitive(new Number(1))).isFalse().bool(isPrimitive(new Number(-1))).isFalse().bool(isPrimitive(new Number(0.99))).isFalse().bool(isPrimitive(new Number(-0.99))).isFalse();
      return null;
    });
    it('should return false for NaN number objects', function() {
      unit.bool(isPrimitive(new Number(0/0))).isFalse();
      return null;
    });
    it('should return false for Infinity number objects', function() {
      unit.bool(isPrimitive(new Number(2e308))).isFalse().bool(isPrimitive(new Number(-2e308))).isFalse();
      return null;
    });
    it('should return false for regular expressions', function() {
      unit.bool(isPrimitive(/asd/)).isFalse().bool(isPrimitive(/^.*$/)).isFalse();
      return null;
    });
    it('should return false for object wrapped symbols', function() {
      unit.bool(isPrimitive(Object(Symbol()))).isFalse().bool(isPrimitive(Object(Symbol.iterator))).isFalse();
      return null;
    });
    it('should return false for objects', function() {
      unit.bool(isPrimitive({})).isFalse().bool(isPrimitive(new Date())).isFalse().bool(isPrimitive(new RegExp())).isFalse().bool(isPrimitive(new Set())).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isPrimitive([])).isFalse().bool(isPrimitive(new Array())).isFalse();
      return null;
    });
    return it('should return false for functions', function() {
      unit.bool(isPrimitive(isPrimitive)).isFalse().bool(isPrimitive(noop)).isFalse();
      return null;
    });
  });

}).call(this);
