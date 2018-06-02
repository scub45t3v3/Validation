debug = require('debug') '@scuba-squad:validation:isDataURI'

REGEX = ///^
data:                                                 # schema
(?:
  [\w-]+\/[\w.+-]+                                    # mimetype
  (?:;[\w!#$%&'*+.^`{|}~-]+=[\w!#$%&'*+.^`{|}~-]+)*   # attribute=value pairs
)?
(?:;base64)?                                          # base64 extension
,[\w()\/!$&'*+.,;=~:@?%-]*                            # data
$///i

isDataURI = (value) ->
  debug 'call:isDataURI(%o)', value

  return REGEX.test value

module.exports = isDataURI