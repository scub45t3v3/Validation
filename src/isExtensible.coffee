isExtensible = (value) ->
  try
    return Object.isExtensible value
  catch error
    return false

module.exports = isExtensible