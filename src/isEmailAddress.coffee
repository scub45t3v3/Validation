REGEX = ///^
(?:[\w!#$%&'*+/=?^`{|}~-]+\.?)*[\w!#$%&'*+/=?^`{|}~-]+    # username
@                                                         # @ seperator
(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+(?:[a-z\d-]*[a-z\d])+  # domain
$///i

isEmailAddress = (value) ->
  return REGEX.test value

module.exports = isEmailAddress