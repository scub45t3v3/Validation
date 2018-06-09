debug = require('debug') '@scuba-squad:validation:isURN'

REGEX = ///^
urn:
([a-z\d][a-z\d-]{0,30}[a-z\d]):                             # NID
(
  (?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+
  (?:[\w.\-~!$&'()*+,;=':@\/]|%[\da-fA-F]{2})*
)                                                           # NSS
(
  \?\+(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+
  (?:[\w.\-~!$&'()*+,;=':@\/?]|%[\da-fA-F]{2})*
)?                                                          # r-component
(
  \?\=(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+
  (?:[\w.\-~!$&'()*+,;=':@\/?]|%[\da-fA-F]{2})*
)?                                                          # q-component
(\#(?:[\w.\-~!$&'()*+,;=':@\/?]|%[\da-fA-F]{2})*)?          # f-component
$///i

isURN = (value) ->
  debug 'call:isURN(%o)', value

  return REGEX.test value

module.exports = isURN