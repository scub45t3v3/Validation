isIterable = (value) ->
  return typeof value[Symbol.iterator] == 'function'

module.exports = isIterable