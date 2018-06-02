debug = require('debug') '@scuba-squad:validation:isEmailAddress'

REGEX = ///^
(?:[\w!#$%&'*+/=?^`{|}~-]+\.?)*[\w!#$%&'*+/=?^`{|}~-]+    # username
@                                                         # @ seperator
(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+(?:[a-z\d-]*[a-z\d])+  # domain
$///i

isEmailAddress = (value) ->
  debug 'call:isEmailAddress(%o)', value

  return REGEX.test value

module.exports = isEmailAddress