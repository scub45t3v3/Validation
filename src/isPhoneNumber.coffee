debug = require('debug') '@scuba-squad:validation:isPhoneNumber'
{PhoneNumberUtil} = require 'google-libphonenumber'
Country = require '@scuba-squad/country'
isString = require './isString'

isPhoneNumber = (value, country) ->
  debug 'call:isPhoneNumber(%o, %o)', value, country
  util = PhoneNumberUtil.getInstance()

  if isString(country)
    iso = country?.trim?()?.toUpperCase?()
    country = Country.getByIso2Code iso
    country or= Country.getByIso3Code iso
    country or= Country.getByIsoNumericCode iso

  try
    iso = country?.iso2Code
    parsed = util.parse value, iso

    if !util.isValidNumber(parsed)
      return false

    if iso && util.getRegionCodeForNumber(parsed) != iso
      return false

    return true
  catch error
    return false

module.exports = isPhoneNumber