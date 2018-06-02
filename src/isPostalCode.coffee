debug = require('debug') '@scuba-squad:validation:isPostalCode'
Country = require '@scuba-squad/country'
isString = require './isString'

isPostalCode = (value, country) ->
  debug 'call:isPostalCode(%o, %o)', value, country

  if !country
    return !!Country.getByPostalCode value

  if isString(country)
    iso = country?.trim?()?.toUpperCase?()
    country = Country.getByIso2Code iso
    country or= Country.getByIso3Code iso
    country or= Country.getByIsoNumericCode iso

  if !(country instanceof Country)
    throw new TypeError 'country must be a string or @scuba-squad/country object'

  return !!country?.isValidPostalCode?(value)

module.exports = isPostalCode