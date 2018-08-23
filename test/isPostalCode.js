'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const {noop} = require('underscore');
  const Country = require('@scuba-squad/country');
  const isPostalCode = require('../isPostalCode');

  // describe #isPostalCode
  describe('#isPostalCode', () => {
    it('should be a function', () => {
      unit
        .function(isPostalCode);
    }); // end it

    it('should return true for valid postal codes from any country when country is not provided', () => {
      unit
        .bool(isPostalCode('90210'))
        .isTrue()
        .bool(isPostalCode('91154 1034'))
        .isTrue()
        .bool(isPostalCode('91154-1034'))
        .isTrue()
        .bool(isPostalCode('911541034'))
        .isTrue()
        .bool(isPostalCode('ab5g 9wt'))
        .isTrue()
        .bool(isPostalCode('ab5g-9wt'))
        .isTrue()
        .bool(isPostalCode('ab5g9wt'))
        .isTrue()
        .bool(isPostalCode('37850'))
        .isTrue()
        .bool(isPostalCode('85138'))
        .isTrue()
        .bool(isPostalCode('6391'))
        .isTrue()
        .bool(isPostalCode('9652'))
        .isTrue()
        .bool(isPostalCode('453901'))
        .isTrue()
        .bool(isPostalCode('675239'))
        .isTrue()
        .bool(isPostalCode('728451'))
        .isTrue()
        .bool(isPostalCode('853832'))
        .isTrue()
        .bool(isPostalCode('907424'))
        .isTrue()
        .bool(isPostalCode('70257'))
        .isTrue()
        .bool(isPostalCode('52835'))
        .isTrue();
    }); // end it

    it('should return true for valid postal codes with ISO3166-1 alpha-2 code', () => {
      unit
        .bool(isPostalCode('90210', 'US'))
        .isTrue()
        .bool(isPostalCode('91154 1034', 'US'))
        .isTrue()
        .bool(isPostalCode('91154-1034', 'US'))
        .isTrue()
        .bool(isPostalCode('911541034', 'US'))
        .isTrue()
        .bool(isPostalCode('ab5g 9wt', 'GB'))
        .isTrue()
        .bool(isPostalCode('ab5g-9wt', 'GB'))
        .isTrue()
        .bool(isPostalCode('ab5g9wt', 'GB'))
        .isTrue()
        .bool(isPostalCode('37850', 'MX'))
        .isTrue()
        .bool(isPostalCode('85138', 'MX'))
        .isTrue()
        .bool(isPostalCode('6391', 'AU'))
        .isTrue()
        .bool(isPostalCode('9652', 'AU'))
        .isTrue()
        .bool(isPostalCode('453901', 'RU'))
        .isTrue()
        .bool(isPostalCode('675239', 'RU'))
        .isTrue()
        .bool(isPostalCode('728451', 'CN'))
        .isTrue()
        .bool(isPostalCode('853832', 'CN'))
        .isTrue()
        .bool(isPostalCode('907424', 'CN'))
        .isTrue()
        .bool(isPostalCode('70257', 'TH'))
        .isTrue()
        .bool(isPostalCode('52835', 'TH'))
        .isTrue();
    }); // end it

    it('should return true for valid postal codes with ISO3166-1 alpha-3 code', () => {
      unit
        .bool(isPostalCode('90210', 'USA'))
        .isTrue()
        .bool(isPostalCode('91154 1034', 'USA'))
        .isTrue()
        .bool(isPostalCode('91154-1034', 'USA'))
        .isTrue()
        .bool(isPostalCode('911541034', 'USA'))
        .isTrue()
        .bool(isPostalCode('ab5g 9wt', 'GBR'))
        .isTrue()
        .bool(isPostalCode('ab5g-9wt', 'GBR'))
        .isTrue()
        .bool(isPostalCode('ab5g9wt', 'GBR'))
        .isTrue()
        .bool(isPostalCode('37850', 'MEX'))
        .isTrue()
        .bool(isPostalCode('85138', 'MEX'))
        .isTrue()
        .bool(isPostalCode('6391', 'AUS'))
        .isTrue()
        .bool(isPostalCode('9652', 'AUS'))
        .isTrue()
        .bool(isPostalCode('453901', 'RUS'))
        .isTrue()
        .bool(isPostalCode('675239', 'RUS'))
        .isTrue()
        .bool(isPostalCode('728451', 'CHN'))
        .isTrue()
        .bool(isPostalCode('853832', 'CHN'))
        .isTrue()
        .bool(isPostalCode('907424', 'CHN'))
        .isTrue()
        .bool(isPostalCode('70257', 'THA'))
        .isTrue()
        .bool(isPostalCode('52835', 'THA'))
        .isTrue();
    }); // end it

    it('should return true for valid postal codes with ISO3166-1 numeric code', () => {
      unit
        .bool(isPostalCode('90210', '840'))
        .isTrue()
        .bool(isPostalCode('91154 1034', '840'))
        .isTrue()
        .bool(isPostalCode('91154-1034', '840'))
        .isTrue()
        .bool(isPostalCode('911541034', '840'))
        .isTrue()
        .bool(isPostalCode('ab5g 9wt', '826'))
        .isTrue()
        .bool(isPostalCode('ab5g-9wt', '826'))
        .isTrue()
        .bool(isPostalCode('ab5g9wt', '826'))
        .isTrue()
        .bool(isPostalCode('37850', '484'))
        .isTrue()
        .bool(isPostalCode('85138', '484'))
        .isTrue()
        .bool(isPostalCode('6391', '036'))
        .isTrue()
        .bool(isPostalCode('9652', '036'))
        .isTrue()
        .bool(isPostalCode('453901', '643'))
        .isTrue()
        .bool(isPostalCode('675239', '643'))
        .isTrue()
        .bool(isPostalCode('728451', '156'))
        .isTrue()
        .bool(isPostalCode('853832', '156'))
        .isTrue()
        .bool(isPostalCode('907424', '156'))
        .isTrue()
        .bool(isPostalCode('70257', '764'))
        .isTrue()
        .bool(isPostalCode('52835', '764'))
        .isTrue();
    }); // end it

    it('should return true for valid postal codes with @scuba-squad/country', () => {
      const test = {
        US: Country.getByIso2Code('US'),
        GB: Country.getByIso2Code('GB'),
        MX: Country.getByIso2Code('MX'),
        AU: Country.getByIso2Code('AU'),
        RU: Country.getByIso2Code('RU'),
        CN: Country.getByIso2Code('CN'),
        TH: Country.getByIso2Code('TH'),
      };

      unit
        .bool(isPostalCode('90210', test.US))
        .isTrue()
        .bool(isPostalCode('91154 1034', test.US))
        .isTrue()
        .bool(isPostalCode('91154-1034', test.US))
        .isTrue()
        .bool(isPostalCode('911541034', test.US))
        .isTrue()
        .bool(isPostalCode('ab5g 9wt', test.GB))
        .isTrue()
        .bool(isPostalCode('ab5g-9wt', test.GB))
        .isTrue()
        .bool(isPostalCode('ab5g9wt', test.GB))
        .isTrue()
        .bool(isPostalCode('37850', test.MX))
        .isTrue()
        .bool(isPostalCode('85138', test.MX))
        .isTrue()
        .bool(isPostalCode('6391', test.AU))
        .isTrue()
        .bool(isPostalCode('9652', test.AU))
        .isTrue()
        .bool(isPostalCode('453901', test.RU))
        .isTrue()
        .bool(isPostalCode('675239', test.RU))
        .isTrue()
        .bool(isPostalCode('728451', test.CN))
        .isTrue()
        .bool(isPostalCode('853832', test.CN))
        .isTrue()
        .bool(isPostalCode('907424', test.CN))
        .isTrue()
        .bool(isPostalCode('70257', test.TH))
        .isTrue()
        .bool(isPostalCode('52835', test.TH))
        .isTrue();
    }); // end it

    it('should return false for valid postal codes with invalid country code', () => {
      unit
        .bool(isPostalCode('90210', 'AU'))
        .isFalse()
        .bool(isPostalCode('91154 1034', 'AU'))
        .isFalse()
        .bool(isPostalCode('91154-1034', 'AU'))
        .isFalse()
        .bool(isPostalCode('911541034', 'AU'))
        .isFalse()
        .bool(isPostalCode('ab5g 9wt', 'MX'))
        .isFalse()
        .bool(isPostalCode('ab5g-9wt', 'MX'))
        .isFalse()
        .bool(isPostalCode('ab5g9wt', 'MX'))
        .isFalse()
        .bool(isPostalCode('37850', 'GB'))
        .isFalse()
        .bool(isPostalCode('85138', 'GB'))
        .isFalse()
        .bool(isPostalCode('6391', 'US'))
        .isFalse()
        .bool(isPostalCode('9652', 'US'))
        .isFalse()
        .bool(isPostalCode('453901', 'TH'))
        .isFalse()
        .bool(isPostalCode('675239', 'TH'))
        .isFalse()
        .bool(isPostalCode('728451', 'CA'))
        .isFalse()
        .bool(isPostalCode('853832', 'CA'))
        .isFalse()
        .bool(isPostalCode('907424', 'CA'))
        .isFalse()
        .bool(isPostalCode('70257', 'CN'))
        .isFalse()
        .bool(isPostalCode('52835', 'CN'))
        .isFalse();
    }); // end it

    it('should return false for invalid postal codes', () => {
      unit
        .bool(isPostalCode('90-210', 'US'))
        .isFalse()
        .bool(isPostalCode('911 541034', 'US'))
        .isFalse()
        .bool(isPostalCode('9115-41034', 'US'))
        .isFalse()
        .bool(isPostalCode('91151034', 'US'))
        .isFalse()
        .bool(isPostalCode('abtg 9wt', 'GB'))
        .isFalse()
        .bool(isPostalCode('ab5g/9wt', 'GB'))
        .isFalse()
        .bool(isPostalCode('ab5g94t', 'GB'))
        .isFalse()
        .bool(isPostalCode('3750', 'MX'))
        .isFalse()
        .bool(isPostalCode('856138', 'MX'))
        .isFalse()
        .bool(isPostalCode('63951', 'AU'))
        .isFalse()
        .bool(isPostalCode('965', 'AU'))
        .isFalse()
        .bool(isPostalCode('45901', 'RU'))
        .isFalse()
        .bool(isPostalCode('6745239', 'RU'))
        .isFalse()
        .bool(isPostalCode('7287451', 'CN'))
        .isFalse()
        .bool(isPostalCode('85332', 'CN'))
        .isFalse()
        .bool(isPostalCode('907-424', 'CN'))
        .isFalse()
        .bool(isPostalCode('7027', 'TH'))
        .isFalse()
        .bool(isPostalCode('528435', 'TH'))
        .isFalse();
    }); // end it

    it('should return false for functions', () => {
      unit
        .bool(isPostalCode(noop))
        .isFalse()
        .bool(isPostalCode(isPostalCode))
        .isFalse();
    }); // end it

    it('should return false for invalid strings', () => {
      unit
        .bool(isPostalCode('adsfghjkl'))
        .isFalse()
        .bool(isPostalCode('34.t'))
        .isFalse()
        .bool(isPostalCode('-45fg'))
        .isFalse();
    }); // end it

    it('should return false for regexs', () => {
      unit
        .bool(isPostalCode(/asd/))
        .isFalse()
        .bool(isPostalCode(/\d+/))
        .isFalse()
        .bool(isPostalCode(/1/))
        .isFalse()
        .bool(isPostalCode(new RegExp('3')))
        .isFalse();
    }); // end it

    it('should return false for arrays', () => {
      unit
        .bool(isPostalCode([]))
        .isFalse()
        .bool(isPostalCode([1, 2, 3]))
        .isFalse()
        .bool(isPostalCode(['a', 5, {}]))
        .isFalse();
    }); // end it

    it('should throw an error when country can not be coerced into a @scuba-squad/country object', () => {
      unit
        .error(() => {
          return isPostalCode('12345', {});
        })
        .error(() => {
          return isPostalCode('12345', []);
        })
        .error(() => {
          return isPostalCode('12345', /asdf/);
        })
        .error(() => {
          return isPostalCode('12345', 5);
        })
        .error(() => {
          return isPostalCode('12345', true);
        })
        .error(() => {
          return isPostalCode('12345', 'a');
        });
    }); // end it
  }); // end describe #isPostalCode
})(); // end IIFE