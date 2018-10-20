'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isPhoneNumber');
  const {PhoneNumberUtil} = require('google-libphonenumber');
  const Country = require('@scuba-squad/country');
  const isString = require('./isString');

  const isPhoneNumber = (value, country) => {
    debug('call:isPhoneNumber(%o, %o)', value, country);

    const util = PhoneNumberUtil.getInstance();

    if (isString(country)) {
      const iso = country.trim().toUpperCase();

      country = Country.getByIso2Code(iso);
      country || (country = Country.getByIso3Code(iso));
      country || (country = Country.getByIsoNumericCode(iso));
    }

    try {
      const iso = (country && country.iso2Code) || undefined;
      const parsed = util.parse(value, iso);

      if (!util.isValidNumber(parsed)) {
        return false;
      }

      if (iso && util.getRegionCodeForNumber(parsed) !== iso) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  module.exports = isPhoneNumber;
})(); // end IIFE