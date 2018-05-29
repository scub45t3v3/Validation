(function() {
  var isDate, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isDate = require('../isDate');

  describe('#isDate', function() {
    it('should be a function', function() {
      unit.function(isDate);
      return null;
    });
    it('should return true for dates', function() {
      unit.bool(isDate(new Date())).isTrue().bool(isDate(new Date(500))).isTrue().bool(isDate(new Date('2010-01-01'))).isTrue().bool(isDate(Date.now())).isTrue();
      return null;
    });
    it('should return true for objects', function() {
      unit.bool(isDate({})).isTrue().bool(isDate({
        y: 2010,
        M: 6
      })).isTrue().bool(isDate({
        H: 4,
        m: 20
      })).isTrue().bool(isDate({
        a: 5,
        z: 80
      })).isTrue();
      return null;
    });
    it('should return true for numeric arrays', function() {
      unit.bool(isDate([])).isTrue().bool(isDate([2010, 1, 6])).isTrue().bool(isDate([2000, 6, 15, 4, 20, 0])).isTrue();
      return null;
    });
    it('should return true for integers', function() {
      unit.bool(isDate(1)).isTrue().bool(isDate(234987)).isTrue().bool(isDate(-239874)).isTrue().bool(isDate(0)).isTrue();
      return null;
    });
    it('should return true for floats', function() {
      unit.bool(isDate(1.1)).isTrue().bool(isDate(-0.4)).isTrue().bool(isDate(234.4)).isTrue().bool(isDate(54.00000000001)).isTrue();
      return null;
    });
    it('should return true for pasable strings', function() {
      unit.bool(isDate('2013-02-08')).isTrue().bool(isDate('2013-W06-5')).isTrue().bool(isDate('2013-039')).isTrue().bool(isDate('20130208')).isTrue().bool(isDate('2013W065')).isTrue().bool(isDate('2013W06')).isTrue().bool(isDate('2013050')).isTrue().bool(isDate('2013-02-08T09')).isTrue().bool(isDate('2013-02-08 09')).isTrue().bool(isDate('2013-02-08 09:30')).isTrue().bool(isDate('2013-02-08 09:30:26')).isTrue().bool(isDate('2013-02-08 09:30:26.123')).isTrue().bool(isDate('2013-02-08 24:00:00.000')).isTrue().bool(isDate('20130208T080910,123')).isTrue().bool(isDate('20130208T080910.123')).isTrue().bool(isDate('20130208T080910')).isTrue().bool(isDate('20130208T0809')).isTrue().bool(isDate('20130208T08')).isTrue().bool(isDate('2013-02-08 09')).isTrue().bool(isDate('2013-W06-5 09')).isTrue().bool(isDate('2013-039 09')).isTrue().bool(isDate('2013-02-08 09+07:00')).isTrue().bool(isDate('2013-02-08 09-0100')).isTrue().bool(isDate('2013-02-08 09Z')).isTrue().bool(isDate('2013-02-08 09:30:26.123+07:00')).isTrue().bool(isDate('2013-02-08 09:30:26.123+07')).isTrue();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isDate(noop)).isFalse().bool(isDate(isDate)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isDate(/asd/)).isFalse().bool(isDate(/\d+/)).isFalse().bool(isDate(/1/)).isFalse().bool(isDate(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for non parsable strings', function() {
      unit.bool(isDate('adsf')).isFalse().bool(isDate('34.6 is not valid')).isFalse().bool(isDate('-45fg')).isFalse();
      return null;
    });
    return it('should return false for non numeric arrays', function() {
      unit.bool(isDate(['a', 'b', 6, {}])).isFalse().bool(isDate([5, 4, false, 'a'])).isFalse();
      return null;
    });
  });

}).call(this);
