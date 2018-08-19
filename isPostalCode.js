'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isPostalCode');
  const Country = require('@scuba-squad/country');
  const isString = require('./isString');

  const isPostalCode = (value, country) => {
    debug('call:isPostalCode(%o, %o)', value, country);

    if (!country) {
      return !!Country.getByPostalCode(value);
    }

    if (isString(country)) {
      const iso = (country && country.trim().toUpperCase()) || undefined;

      country = Country.getByIso2Code(iso);
      country || (country = Country.getByIso3Code(iso));
      country || (country = Country.getByIsoNumericCode(iso));
    }

    if (!(country instanceof Country)) {
      throw new TypeError('country must be a string or @scuba-squad/country object');
    }

    return !!(country && country.isValidPostalCode(value));
  };

  module.exports = isPostalCode;
})(); // end IIFE