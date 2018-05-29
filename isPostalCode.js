(function() {
  var Country, isPostalCode, isString;

  Country = require('@scuba-squad/country');

  isString = require('./isString');

  isPostalCode = function(value, country) {
    var iso, ref;
    if (!country) {
      return !!Country.getByPostalCode(value);
    }
    if (isString(country)) {
      iso = country != null ? typeof country.trim === "function" ? (ref = country.trim()) != null ? typeof ref.toUpperCase === "function" ? ref.toUpperCase() : void 0 : void 0 : void 0 : void 0;
      country = Country.getByIso2Code(iso);
      country || (country = Country.getByIso3Code(iso));
      country || (country = Country.getByIsoNumericCode(iso));
    }
    if (!(country instanceof Country)) {
      throw new TypeError('country must be a string or @scuba-squad/country object');
    }
    return !!(country != null ? typeof country.isValidPostalCode === "function" ? country.isValidPostalCode(value) : void 0 : void 0);
  };

  module.exports = isPostalCode;

}).call(this);
