isString = (value) ->
  return value instanceof String || typeof value == 'string'

module.exports = isString