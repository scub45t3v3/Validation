isSealed = (value) ->
  try
    return Object.isSealed value
  catch error
    return true

module.exports = isSealed