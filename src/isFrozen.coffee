isFrozen = (value) ->
  try
    return Object.isFrozen value
  catch error
    return true

module.exports = isFrozen