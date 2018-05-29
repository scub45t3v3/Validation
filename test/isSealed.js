(function() {
  var isSealed, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isSealed = require('../isSealed');

  describe('#isSealed', function() {
    it('should be a function', function() {
      unit.function(isSealed);
      return null;
    });
    it('should return true for sealed objects', function() {
      unit.bool(isSealed(Object.seal({
        a: 5
      }))).isTrue().bool(isSealed(Object.seal(new String('hi')))).isTrue();
      return null;
    });
    it('should return true for frozen objects', function() {
      unit.bool(isSealed(Object.freeze({
        a: 5
      }))).isTrue().bool(isSealed(Object.freeze(new String('hi')))).isTrue();
      return null;
    });
    it('should return true for empty objects with preventExtensions', function() {
      unit.bool(isSealed(Object.preventExtensions({}))).isTrue().bool(isSealed(Object.preventExtensions(new String('hi')))).isTrue().bool(isSealed(Object.preventExtensions(new Number(5)))).isTrue();
      return null;
    });
    it('should return true for primitives', function() {
      unit.bool(isSealed(1)).isTrue().bool(isSealed(234987)).isTrue().bool(isSealed(-239874)).isTrue().bool(isSealed(0)).isTrue().bool(isSealed(1.1)).isTrue().bool(isSealed(-0.4)).isTrue().bool(isSealed(234.4)).isTrue().bool(isSealed(54.00000000001)).isTrue().bool(isSealed('adsf')).isTrue().bool(isSealed('34.6')).isTrue().bool(isSealed('-45fg')).isTrue();
      return null;
    });
    it('should return false for object literals', function() {
      unit.bool(isSealed({})).isFalse().bool(isSealed({
        a: 5
      })).isFalse();
      return null;
    });
    it('should return false for arrays', function() {
      unit.bool(isSealed([])).isFalse().bool(isSealed([1, 2])).isFalse().bool(isSealed(new Array('a', {}, 6))).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isSealed(/asd/)).isFalse().bool(isSealed(/\d+/)).isFalse().bool(isSealed(/1/)).isFalse().bool(isSealed(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isSealed(noop)).isFalse().bool(isSealed(isSealed)).isFalse();
      return null;
    });
    it('should return false for Map', function() {
      unit.bool(isSealed(new Map())).isFalse().bool(isSealed(new Map([['a', 5], ['b', '$']]))).isFalse();
      return null;
    });
    it('should return false for Set', function() {
      unit.bool(isSealed(new Set())).isFalse().bool(isSealed(new Set().add(1))).isFalse().bool(isSealed(new Set([1, 2, 3]))).isFalse();
      return null;
    });
    return it('should return false for non empty objects with preventExtensions', function() {
      unit.bool(isSealed(Object.preventExtensions({
        a: 5
      }))).isFalse().bool(isSealed(Object.preventExtensions({
        a: 'hi',
        b: true
      }))).isFalse();
      return null;
    });
  });

}).call(this);
