(function() {
  var Country, isPhoneNumber, noop, unit;

  unit = require('unit.js');

  ({noop} = require('underscore'));

  Country = require('@scuba-squad/country');

  isPhoneNumber = require('../isPhoneNumber');

  describe('#isPhoneNumber', function() {
    it('should be a function', function() {
      unit.function(isPhoneNumber);
      return null;
    });
    it('should return true for valid phone numbers with international calling code', function() {
      unit.bool(isPhoneNumber('+1 650-253-0000')).isTrue().bool(isPhoneNumber('+1 800-642-7676')).isTrue().bool(isPhoneNumber('+1 800–692–7753')).isTrue().bool(isPhoneNumber('+44 20 7416 5000')).isTrue().bool(isPhoneNumber('+44 20 7638 4141')).isTrue().bool(isPhoneNumber('+44 871 894 3000')).isTrue().bool(isPhoneNumber('+52 55 5546 7670')).isTrue().bool(isPhoneNumber('+52 55 4040 5300')).isTrue().bool(isPhoneNumber('+61 7 3252 0666')).isTrue().bool(isPhoneNumber('+61 7 3176 2111')).isTrue().bool(isPhoneNumber('+7 499 907-07-22')).isTrue().bool(isPhoneNumber('+7 495 688-07-44')).isTrue().bool(isPhoneNumber('+852 3955 0581')).isTrue().bool(isPhoneNumber('+86 21 3253 1090')).isTrue().bool(isPhoneNumber('+86 21 5407 7000')).isTrue().bool(isPhoneNumber('+66 2 132 1888')).isTrue().bool(isPhoneNumber('+66 2 667 1000')).isTrue();
      return null;
    });
    it('should return true for valid phone numbers with ios3166-1 alpha-2 code', function() {
      unit.bool(isPhoneNumber('650-253-0000', 'US')).isTrue().bool(isPhoneNumber('806-642-7676', 'US')).isTrue().bool(isPhoneNumber('406–692–7753', 'US')).isTrue().bool(isPhoneNumber('020 76140100', 'GB')).isTrue().bool(isPhoneNumber('020 35030000', 'GB')).isTrue().bool(isPhoneNumber('0161 8359929', 'GB')).isTrue().bool(isPhoneNumber('01453 884643', 'GB')).isTrue().bool(isPhoneNumber('55 5521 4181', 'MX')).isTrue().bool(isPhoneNumber('55 5226 2663', 'MX')).isTrue().bool(isPhoneNumber('2 9351 2222', 'AU')).isTrue().bool(isPhoneNumber('2 9282 2833', 'AU')).isTrue().bool(isPhoneNumber('499 244-45-81', 'RU')).isTrue().bool(isPhoneNumber('499 248-30-03', 'RU')).isTrue().bool(isPhoneNumber('3955 0581', 'HK')).isTrue().bool(isPhoneNumber('10 6301 2835', 'CN')).isTrue().bool(isPhoneNumber('10 6511 8101', 'CN')).isTrue().bool(isPhoneNumber('2 132 1888', 'TH')).isTrue().bool(isPhoneNumber('2 667 1000', 'TH')).isTrue();
      return null;
    });
    it('should return true for valid phone numbers with ios3166-1 alpha-3 code', function() {
      unit.bool(isPhoneNumber('650-253-0000', 'USA')).isTrue().bool(isPhoneNumber('806-642-7676', 'USA')).isTrue().bool(isPhoneNumber('406–692–7753', 'USA')).isTrue().bool(isPhoneNumber('020 76140100', 'GBR')).isTrue().bool(isPhoneNumber('020 35030000', 'GBR')).isTrue().bool(isPhoneNumber('0161 8359929', 'GBR')).isTrue().bool(isPhoneNumber('01453 884643', 'GBR')).isTrue().bool(isPhoneNumber('55 5521 4181', 'MEX')).isTrue().bool(isPhoneNumber('55 5226 2663', 'MEX')).isTrue().bool(isPhoneNumber('2 9351 2222', 'AUS')).isTrue().bool(isPhoneNumber('2 9282 2833', 'AUS')).isTrue().bool(isPhoneNumber('499 244-45-81', 'RUS')).isTrue().bool(isPhoneNumber('499 248-30-03', 'RUS')).isTrue().bool(isPhoneNumber('3955 0581', 'HKG')).isTrue().bool(isPhoneNumber('10 6301 2835', 'CHN')).isTrue().bool(isPhoneNumber('10 6511 8101', 'CHN')).isTrue().bool(isPhoneNumber('2 132 1888', 'THA')).isTrue().bool(isPhoneNumber('2 667 1000', 'THA')).isTrue();
      return null;
    });
    it('should return true for valid phone numbers with ios3166-1 numeric code', function() {
      unit.bool(isPhoneNumber('650-253-0000', '840')).isTrue().bool(isPhoneNumber('806-642-7676', '840')).isTrue().bool(isPhoneNumber('406–692–7753', '840')).isTrue().bool(isPhoneNumber('020 76140100', '826')).isTrue().bool(isPhoneNumber('020 35030000', '826')).isTrue().bool(isPhoneNumber('0161 8359929', '826')).isTrue().bool(isPhoneNumber('01453 884643', '826')).isTrue().bool(isPhoneNumber('55 5521 4181', '484')).isTrue().bool(isPhoneNumber('55 5226 2663', '484')).isTrue().bool(isPhoneNumber('2 9351 2222', '036')).isTrue().bool(isPhoneNumber('2 9282 2833', '036')).isTrue().bool(isPhoneNumber('499 244-45-81', '643')).isTrue().bool(isPhoneNumber('499 248-30-03', '643')).isTrue().bool(isPhoneNumber('3955 0581', '344')).isTrue().bool(isPhoneNumber('10 6301 2835', '156')).isTrue().bool(isPhoneNumber('10 6511 8101', '156')).isTrue().bool(isPhoneNumber('2 132 1888', '764')).isTrue().bool(isPhoneNumber('2 667 1000', '764')).isTrue();
      return null;
    });
    it('should return true for valid phone numbers with @scuba-squad/country', function() {
      var test;
      test = {
        US: Country.getByIso2Code('US'),
        GB: Country.getByIso2Code('GB'),
        MX: Country.getByIso2Code('MX'),
        AU: Country.getByIso2Code('AU'),
        RU: Country.getByIso2Code('RU'),
        HK: Country.getByIso2Code('HK'),
        CN: Country.getByIso2Code('CN'),
        TH: Country.getByIso2Code('TH')
      };
      unit.bool(isPhoneNumber('650-253-0000', test.US)).isTrue().bool(isPhoneNumber('806-642-7676', test.US)).isTrue().bool(isPhoneNumber('406–692–7753', test.US)).isTrue().bool(isPhoneNumber('020 76140100', test.GB)).isTrue().bool(isPhoneNumber('020 35030000', test.GB)).isTrue().bool(isPhoneNumber('0161 8359929', test.GB)).isTrue().bool(isPhoneNumber('01453 884643', test.GB)).isTrue().bool(isPhoneNumber('55 5521 4181', test.MX)).isTrue().bool(isPhoneNumber('55 5226 2663', test.MX)).isTrue().bool(isPhoneNumber('2 9351 2222', test.AU)).isTrue().bool(isPhoneNumber('2 9282 2833', test.AU)).isTrue().bool(isPhoneNumber('499 244-45-81', test.RU)).isTrue().bool(isPhoneNumber('499 248-30-03', test.RU)).isTrue().bool(isPhoneNumber('3955 0581', test.HK)).isTrue().bool(isPhoneNumber('10 6301 2835', test.CN)).isTrue().bool(isPhoneNumber('10 6511 8101', test.CN)).isTrue().bool(isPhoneNumber('2 132 1888', test.TH)).isTrue().bool(isPhoneNumber('2 667 1000', test.TH)).isTrue();
      return null;
    });
    it('should return false for valid phone numbers with international calling code with invalid country code', function() {
      unit.bool(isPhoneNumber('+1 650-253-0000', 'MX')).isFalse().bool(isPhoneNumber('+1 800-642-7676', 'RUS')).isFalse().bool(isPhoneNumber('+1 800–692–7753', 'AU')).isFalse().bool(isPhoneNumber('+44 20 7416 5000', 'CN')).isFalse().bool(isPhoneNumber('+44 20 7638 4141', 'HK')).isFalse().bool(isPhoneNumber('+44 871 894 3000', 'TH')).isFalse().bool(isPhoneNumber('+52 55 5546 7670', 'VN')).isFalse().bool(isPhoneNumber('+52 55 4040 5300', 'DK')).isFalse().bool(isPhoneNumber('+61 7 3252 0666', 'CA')).isFalse().bool(isPhoneNumber('+61 7 3176 2111', 'MX')).isFalse().bool(isPhoneNumber('+7 499 907-07-22', 'TZ')).isFalse().bool(isPhoneNumber('+7 495 688-07-44', 'US')).isFalse().bool(isPhoneNumber('+852 3955 0581', 'NZ')).isFalse().bool(isPhoneNumber('+86 21 3253 1090', 'GB')).isFalse().bool(isPhoneNumber('+86 21 5407 7000', 'CU')).isFalse().bool(isPhoneNumber('+66 2 132 1888', 'IS')).isFalse().bool(isPhoneNumber('+66 2 667 1000', 'MV')).isFalse();
      return null;
    });
    it('should return false for valid phone numbers with invalid country code', function() {
      unit.bool(isPhoneNumber('650-253-0000', 'MX')).isFalse().bool(isPhoneNumber('806-642-7676', 'CN')).isFalse().bool(isPhoneNumber('406–692–7753', 'GB')).isFalse().bool(isPhoneNumber('020 76140100', 'US')).isFalse().bool(isPhoneNumber('020 35030000', 'RU')).isFalse().bool(isPhoneNumber('0161 8359929', 'AU')).isFalse().bool(isPhoneNumber('01453 884643', 'CN')).isFalse().bool(isPhoneNumber('55 5521 4181', 'US')).isFalse().bool(isPhoneNumber('55 5226 2663', 'RU')).isFalse().bool(isPhoneNumber('2 9351 2222', 'RU')).isFalse().bool(isPhoneNumber('2 9282 2833', 'TH')).isFalse().bool(isPhoneNumber('499 244-45-81', 'AU')).isFalse().bool(isPhoneNumber('499 248-30-03', 'US')).isFalse().bool(isPhoneNumber('852 3955 0581', 'US')).isFalse().bool(isPhoneNumber('10 6301 2835', 'GB')).isFalse().bool(isPhoneNumber('10 6511 8101', 'TH')).isFalse().bool(isPhoneNumber('2 132 1888', 'RU')).isFalse().bool(isPhoneNumber('2 667 1000', 'US')).isFalse();
      return null;
    });
    it('should return false for invalid phone numbers', function() {
      unit.bool(isPhoneNumber('123-253-0000', 'US')).isFalse().bool(isPhoneNumber('999-642-7676', 'US')).isFalse().bool(isPhoneNumber('555–692–7753', 'US')).isFalse().bool(isPhoneNumber('921 76140100', 'GB')).isFalse().bool(isPhoneNumber('35030000', 'GB')).isFalse().bool(isPhoneNumber('2222 8359929', 'GB')).isFalse().bool(isPhoneNumber('22 01453 884643', 'GB')).isFalse().bool(isPhoneNumber('57 5521 4181', 'MX')).isFalse().bool(isPhoneNumber('11 5226 2663', 'MX')).isFalse().bool(isPhoneNumber('0 9351 2222', 'AU')).isFalse().bool(isPhoneNumber('6 9282 2833', 'AU')).isFalse().bool(isPhoneNumber('111 244-45-81', 'RU')).isFalse().bool(isPhoneNumber('191 248-30-03', 'RU')).isFalse().bool(isPhoneNumber('+863 3955 0581', 'CN')).isFalse().bool(isPhoneNumber('00 6301 2835', 'CN')).isFalse().bool(isPhoneNumber('69 6511 8101', 'CN')).isFalse().bool(isPhoneNumber('6 132 1888', 'TH')).isFalse().bool(isPhoneNumber('9 667 1000', 'TH')).isFalse();
      return null;
    });
    it('should return false for integers', function() {
      unit.bool(isPhoneNumber(14)).isFalse().bool(isPhoneNumber(234987)).isFalse().bool(isPhoneNumber(-2398)).isFalse().bool(isPhoneNumber(2)).isFalse();
      return null;
    });
    it('should return false for floats', function() {
      unit.bool(isPhoneNumber(98.00007)).isFalse().bool(isPhoneNumber(-32407.3)).isFalse().bool(isPhoneNumber(0.1)).isFalse();
      return null;
    });
    it('should return false for functions', function() {
      unit.bool(isPhoneNumber(noop)).isFalse().bool(isPhoneNumber(isPhoneNumber)).isFalse();
      return null;
    });
    it('should return false for invalid strings', function() {
      unit.bool(isPhoneNumber('adsf')).isFalse().bool(isPhoneNumber('34.t')).isFalse().bool(isPhoneNumber('-45fg')).isFalse();
      return null;
    });
    it('should return false for regexs', function() {
      unit.bool(isPhoneNumber(/asd/)).isFalse().bool(isPhoneNumber(/\d+/)).isFalse().bool(isPhoneNumber(/1/)).isFalse().bool(isPhoneNumber(new RegExp('3'))).isFalse();
      return null;
    });
    return it('should return false for arrays', function() {
      unit.bool(isPhoneNumber([])).isFalse().bool(isPhoneNumber([1, 2, 3])).isFalse().bool(isPhoneNumber(['a', 5, {}])).isFalse();
      return null;
    });
  });

}).call(this);
