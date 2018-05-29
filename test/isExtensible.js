(function() {
  var isExtensible, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isExtensible = require('../isExtensible');

  describe('#isExtensible', function() {
    it('should be a function', function() {
      unit.function(isExtensible);
      return null;
    });
    it('should return true for object literals', function() {
      unit.bool(isExtensible({})).isTrue().bool(isExtensible({
        a: 5
      })).isTrue();
      return null;
    });
    it('should return true for arrays', function() {
      unit.bool(isExtensible([])).isTrue().bool(isExtensible([1, 2])).isTrue().bool(isExtensible(new Array('a', {}, 6))).isTrue();
      return null;
    });
    it('should return true for regexs', function() {
      unit.bool(isExtensible(/asd/)).isTrue().bool(isExtensible(/\d+/)).isTrue().bool(isExtensible(/1/)).isTrue().bool(isExtensible(new RegExp('3'))).isTrue();
      return null;
    });
    it('should return true for functions', function() {
      unit.bool(isExtensible(noop)).isTrue().bool(isExtensible(isExtensible)).isTrue();
      return null;
    });
    it('should return true for Map', function() {
      unit.bool(isExtensible(new Map())).isTrue().bool(isExtensible(new Map([['a', 5], ['b', '$']]))).isTrue();
      return null;
    });
    it('should return true for Set', function() {
      unit.bool(isExtensible(new Set())).isTrue().bool(isExtensible(new Set().add(1))).isTrue().bool(isExtensible(new Set([1, 2, 3]))).isTrue();
      return null;
    });
    it('should return false for primitives', function() {
      unit.bool(isExtensible(1)).isFalse().bool(isExtensible(234987)).isFalse().bool(isExtensible(-239874)).isFalse().bool(isExtensible(0)).isFalse().bool(isExtensible(1.1)).isFalse().bool(isExtensible(-0.4)).isFalse().bool(isExtensible(234.4)).isFalse().bool(isExtensible(54.00000000001)).isFalse().bool(isExtensible('adsf')).isFalse().bool(isExtensible('34.6')).isFalse().bool(isExtensible('-45fg')).isFalse();
      return null;
    });
    it('should return false for object with preventExtensions', function() {
      unit.bool(isExtensible(Object.preventExtensions({
        a: 5
      }))).isFalse().bool(isExtensible(Object.preventExtensions(new String('hi')))).isFalse();
      return null;
    });
    it('should return false for sealed objects', function() {
      unit.bool(isExtensible(Object.seal({
        a: 5
      }))).isFalse().bool(isExtensible(Object.seal(new String('hi')))).isFalse();
      return null;
    });
    return it('should return false for frozen objects', function() {
      unit.bool(isExtensible(Object.freeze({
        a: 5
      }))).isFalse().bool(isExtensible(Object.freeze(new String('hi')))).isFalse();
      return null;
    });
  });

}).call(this);
