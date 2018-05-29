(function() {
  var isJSON, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isJSON = require('../isJSON');

  describe('#isJSON', function() {
    it('should be a function', function() {
      unit.function(isJSON);
      return null;
    });
    it('should return true for valid JSON strings', function() {
      unit.bool(isJSON('{}')).isTrue().bool(isJSON('{"a":[1,2,3],"b":6}')).isTrue().bool(isJSON('[1,"2",6]')).isTrue().bool(isJSON('{"a":{"z":true,"x":5.6,"y":"h"},"b":-6}')).isTrue().bool(isJSON('{"a":false,"b":null}')).isTrue();
      return null;
    });
    it('should return true for integers', function() {
      unit.bool(isJSON(14)).isTrue().bool(isJSON(234987)).isTrue().bool(isJSON(-2398)).isTrue().bool(isJSON(2)).isTrue();
      return null;
    });
    it('should return true for floats', function() {
      unit.bool(isJSON(98.00007)).isTrue().bool(isJSON(-32407.3)).isTrue().bool(isJSON(0.1)).isTrue();
      return null;
    });
    it('should return false for invalid JSON strings', function() {
      unit.bool(isJSON('we48tuer')).isFalse().bool(isJSON('[a,6,h]')).isFalse().bool(isJSON('{a:false}')).isFalse().bool(isJSON('{"a":{6,"b":true}')).isFalse().bool(isJSON('{"b";false}')).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isJSON(noop)).isFalse().bool(isJSON(isJSON)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isJSON(/asd/)).isFalse().bool(isJSON(/\d+/)).isFalse().bool(isJSON(/1/)).isFalse().bool(isJSON(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isJSON([])).isFalse().bool(isJSON([1, 2, 3])).isFalse().bool(isJSON(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
