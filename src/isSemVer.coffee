debug = require('debug') '@scuba-squad:validation:isSemVer'

REGEX = ///^
(?:\d+\.){2}\d+                                   # MAJOR.MINOR.PATCH
(?:-
  (?:0|[1-9]\d*|\d*[a-z-][a-z\d-]*)
  (?:\.(?:0|[1-9]\d*|\d*[a-z-][a-z\d-]*))*
)?                                                # pre-release tag
(?:\+[a-z\d-]+(?:\.[a-z\d-]+)*)?                  # metadata tag
$///i

isSemVer = (value) ->
  debug 'call:isSemVer(%o)', value

  return REGEX.test value

module.exports = isSemVer