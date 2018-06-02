(function() {
  var isAfter, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  isAfter = require('../isAfter');

  describe('#isAfter', function() {
    it('should be a function', function() {
      unit.function(isAfter);
      return null;
    });
    it('should return true for dates', function() {
      unit.bool(isAfter(Date.now() + 500)).isTrue().bool(isAfter(new Date(), new Date(500))).isTrue().bool(isAfter(new Date('2010-02-01'), new Date('2010-01-01'))).isTrue();
      return null;
    });
    it('should return true for objects', function() {
      unit.bool(isAfter({
        y: 2011
      }, {
        y: 2010,
        M: 6
      })).isTrue().bool(isAfter({
        H: 5
      }, {
        H: 4,
        m: 20
      })).isTrue().bool(isAfter({
        a: 5,
        z: 80
      }, {
        y: 2000
      })).isTrue();
      return null;
    });
    it('should return true for numeric arrays', function() {
      var now;
      now = new Date();
      unit.bool(isAfter([now.getFullYear() + 1, now.getMonth(), now.getDate()])).isTrue().bool(isAfter([2011], [2010, 1, 6])).isTrue().bool(isAfter([2000, 6, 15, 5], [2000, 6, 15, 4, 20, 0])).isTrue();
      return null;
    });
    it('should return true for integers', function() {
      unit.bool(isAfter(2, 1)).isTrue().bool(isAfter(234988, 234987)).isTrue().bool(isAfter(-239873, -239874)).isTrue().bool(isAfter(1, 0)).isTrue();
      return null;
    });
    it('should return true for floats', function() {
      unit.bool(isAfter(1.5, 1.4)).isTrue().bool(isAfter(-0.2, -0.3)).isTrue().bool(isAfter(234.6, 234.5)).isTrue().bool(isAfter(55.00000000001, 55)).isTrue();
      return null;
    });
    it('should return true for pasable strings', function() {
      unit.bool(isAfter('2013-02-09', '2013-02-08')).isTrue().bool(isAfter('2013-W06-6', '2013-W06-5')).isTrue().bool(isAfter('2013-040', '2013-039')).isTrue().bool(isAfter('20130209', '20130208')).isTrue().bool(isAfter('2013W066', '2013W065')).isTrue().bool(isAfter('2013W07', '2013W06')).isTrue().bool(isAfter('2013051', '2013050')).isTrue().bool(isAfter('2013-02-08T10', '2013-02-08T09')).isTrue().bool(isAfter('2013-02-08 10', '2013-02-08 09')).isTrue().bool(isAfter('2013-02-08 09:31', '2013-02-08 09:30')).isTrue().bool(isAfter('2013-02-08 09:30:27', '2013-02-08 09:30:26')).isTrue().bool(isAfter('2013-02-08 09:30:26.124', '2013-02-08 09:30:26.123')).isTrue().bool(isAfter('2013-02-08 24:00:00.000', '2013-02-08 23:59:59.999')).isTrue().bool(isAfter('20130208T080910,124', '20130208T080910,123')).isTrue().bool(isAfter('20130208T080910.124', '20130208T080910.123')).isTrue().bool(isAfter('20130208T080911', '20130208T080910')).isTrue().bool(isAfter('20130208T0810', '20130208T0809')).isTrue().bool(isAfter('20130208T09', '20130208T08')).isTrue().bool(isAfter('2013-02-08 10', '2013-02-08 09')).isTrue().bool(isAfter('2013-W06-5 10', '2013-W06-5 09')).isTrue().bool(isAfter('2013-039 10', '2013-039 09')).isTrue().bool(isAfter('2013-02-08 09+06:00', '2013-02-08 09+07:00')).isTrue().bool(isAfter('2013-02-08 09-0200', '2013-02-08 09-0100')).isTrue().bool(isAfter('2013-02-08 10Z', '2013-02-08 09Z')).isTrue().bool(isAfter('2013-02-08 09:30:26.123+06:00', '2013-02-08 09:30:26.123+07:00')).isTrue().bool(isAfter('2013-02-08 09:30:26.123+07', '2013-02-08 09:30:26.123+08')).isTrue();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isAfter(noop)).isFalse().bool(isAfter(isAfter, noop)).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isAfter(/asd/)).isFalse().bool(isAfter(/\d+/)).isFalse().bool(isAfter(/1/)).isFalse().bool(isAfter(new RegExp('3'))).isFalse();
      return null;
    });
    it('should return false for non parsable strings', function() {
      unit.bool(isAfter('adsf')).isFalse().bool(isAfter('34.6 is not valid')).isFalse().bool(isAfter('-45fg')).isFalse();
      return null;
    });
    return it('should return false for non numeric arrays', function() {
      unit.bool(isAfter(['a', 'b', 6, {}])).isFalse().bool(isAfter([5, 4, false, 'a'])).isFalse();
      return null;
    });
  });

}).call(this);
