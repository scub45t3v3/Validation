isGenerator = (value) ->
  return (value?.toString?() || "#{value}") == '[object Generator]'

module.exports = isGenerator