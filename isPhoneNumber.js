(function() {
  var Country, PhoneNumberUtil, isPhoneNumber, isString;

  ({PhoneNumberUtil} = require('google-libphonenumber'));

  Country = require('@scuba-squad/country');

  isString = require('./isString');

  isPhoneNumber = function(value, country) {
    var error, iso, parsed, ref, util;
    util = PhoneNumberUtil.getInstance();
    if (isString(country)) {
      iso = country != null ? typeof country.trim === "function" ? (ref = country.trim()) != null ? typeof ref.toUpperCase === "function" ? ref.toUpperCase() : void 0 : void 0 : void 0 : void 0;
      country = Country.getByIso2Code(iso);
      country || (country = Country.getByIso3Code(iso));
      country || (country = Country.getByIsoNumericCode(iso));
    }
    try {
      iso = country != null ? country.iso2Code : void 0;
      parsed = util.parse(value, iso);
      if (!util.isValidNumber(parsed)) {
        return false;
      }
      if (iso && util.getRegionCodeForNumber(parsed) !== iso) {
        return false;
      }
      return true;
    } catch (error1) {
      error = error1;
      return false;
    }
  };

  module.exports = isPhoneNumber;

}).call(this);
