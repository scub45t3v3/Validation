isArguments = (value) ->
  return (value?.toString?() || "#{value}") == '[object Arguments]'

module.exports = isArguments