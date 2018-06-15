debug = require('debug') '@scuba-squad:validation:isDomainName'
punycode = require 'punycode'

REGEX = /^(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z][a-z\d-]*[a-z\d]$/i

isDomainName = (value, idn = true) ->
  debug 'call:isDomainName(%o, %o)', value, idn

  if idn
    try
      value = punycode.toASCII value
    catch err
      debug 'error:punycode %o', err

      return false

  return REGEX.test value

module.exports = isDomainName