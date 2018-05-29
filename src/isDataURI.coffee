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
  return REGEX.test value

module.exports = isDataURI