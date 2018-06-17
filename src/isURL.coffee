debug = require('debug') '@scuba-squad:validation:isURL'
isDomainName = require './isDomainName'
isIP = require './isIP'

REGEX = ///^
[a-z][a-z\d+.-]+:\/\/                             # protocol
(?:(?:[\w!$&'()*+,;:=~.-]|\%[\da-f]{2})+@)?       # user
([^\s:\[\]\/%?#@]+|\[[:.%\w]+\])                  # domain|ip
(?::\d+)?                                         # port
(?:\/(?:[\w!$&'()*+,;:@=~.-]|\%[\da-f]{2})+)*\/?  # path
(?:\?(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?  # query
(?:\#(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?  # fragment
$///i

isURL = (value) ->
  debug 'call:isURL(%o)', value

  value = value?.match?(REGEX)?[1]?.replace /^\[|\]$/g, ''

  return !!value && (isDomainName(value) || isIP(value))

module.exports = isURL