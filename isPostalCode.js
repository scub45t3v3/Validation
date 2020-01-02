'use strict';

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
    const iso = country.trim().toUpperCase();

    country = Country.getByIso2Code(iso)
      || Country.getByIso3Code(iso)
      || Country.getByIsoNumericCode(iso);
  }

  if (!(country instanceof Country)) {
    throw new TypeError('country must be a string or @scuba-squad/country object');
  }

  return !!(country && country.isValidPostalCode(value));
};

// export as commonjs module
module.exports = isPostalCode;