debug = require('debug') '@scuba-squad:validation:isDomainName'
punycode = require 'punycode'

REGEX = ///^
(?:(?:[\w\-~!$&'()*+,;=']|%[\da-f]{2})+\.)+         # subdomain(s)
[a-z\d](?:[\w\-~!$&'()*+,;=']|%[\da-f]{2})*[a-z\d]  # top level domain
$///

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