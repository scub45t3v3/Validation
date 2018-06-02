debug = require('debug') '@scuba-squad:validation:isTime'

REGEX = ///^
([0-1]?\d|2[0-3])                           # hour
(?:
  :?([0-5]\d)                               # minute
  (?:
    :?([0-5]\d)                             # second
    (?:
      [.,](\d{1,9})                         # fractional second (deci, centi, milli, micro, nano)
    )?
  )?
)?
\s*                                         # optional space
((?:[ap][.,\s-]*m[.,-]*)(?!\w))?            # meridiem
\s*                                         # optional space
(
  Z                                         # Z = UTC, GMT, +0, -0
  |[+-](?:[0-1]?\d|2[0-3])(?::?[0-5]\d)?    # offset +h:m | -h:m
  |[a-z]{2,5}                               # timezone abbreviation
  |[a-z\u00c0-\u024f\s'-]+time              # timezone name
  |[a-z_]{1,256}\/[a-z_]{1,256}             # tzdb name
)?
$///i

isTime = (value) ->
  debug 'call:isTime(%o)', value

  value = (value?.toString?() || "#{value}")?.trim?()?.match REGEX

  return !!value && (!value?[5]? || parseInt(value?[1]) < 13)

module.exports = isTime