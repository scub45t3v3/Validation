isSymbol = (value) ->
  return typeof value == 'symbol' || /^Symbol\(.*\)$/.test(value)

module.exports = isSymbol