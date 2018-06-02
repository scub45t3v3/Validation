debug = require('debug') '@scuba-squad:validation:isURL'
url = require 'url'
isIP = require './isIP'

###
# No support for IPvFuture as defined in RFC3986 section 3.2.2 this is
# intentional as none exist, so I argue that it is still invalid until such time
#
# https://tools.ietf.org/html/rfc3986#section-3.2.2
# IPvFuture = /^\[v[\da-f]\.[\w!$&'()*+,:;=~\.-]+\]$/i
###
REGEX = ///^
[a-z][a-z\d+.-]+                                           # protocol
:\/\/                                                      # protocol seperator
(?:
  (?:[\w!$&'()*+,;=~.-]|\%[\da-f]{2})+                     # username
  (?:
    :                                                      # username seperator
    (?:[\w!$&'()*+,;=~.-]|\%[\da-f]{2})+                   # password
  )?
  @                                                        # hostname seperator
)?
(?:[^\s:\/?#@]+)                                           # hostname
(?::\d+)?                                                  # port
(?:\/(?:[\w!$&'()*+,;:@=~.-]|\%[\da-f]{2})+)*\/?           # pathname
(?:\?(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?           # query
(?:\#(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?           # fragment
$///i

DOMAIN_REGEX = /^(?:[a-z\d]+(?:-+[a-z\d]+)*\.)+[a-z][a-z\d-]*[a-z\d]$/i

isURL = (value) ->
  debug 'call:isURL(%o)', value

  if !REGEX.test(value)
    return false

  parse = url.parse value

  return DOMAIN_REGEX.test(parse.hostname) || isIP(parse.hostname)

module.exports = isURL