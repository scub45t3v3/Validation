isJSON = (value) ->
  try
    JSON.parse value

    return true
  catch error
    return false

module.exports = isJSON