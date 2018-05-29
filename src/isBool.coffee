isBool = (value) ->
  return (value instanceof Boolean || value == true || value == false)

module.exports = isBool