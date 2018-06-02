debug = require('debug') '@scuba-squad:validation:isMastercard'
isLuhn = require './isLuhn'

REGEX = ///^
(?:
  5[1-5]\d{2}
  |222[1-9]
  |22[3-9]\d
  |2[3-6]\d{2}
  |27[01]\d
  |2720
)
\d{12}
$///

isMastercard = (value) ->
  debug 'call:isMastercard(%o)', value

  return REGEX.test(value) && isLuhn(value)

module.exports = isMastercard