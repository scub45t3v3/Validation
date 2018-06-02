debug = require('debug') '@scuba-squad:validation:isJSON'

isJSON = (value) ->
  debug 'call:isJSON(%o)', value

  try
    JSON.parse value

    return true
  catch error
    return false

module.exports = isJSON