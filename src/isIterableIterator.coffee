isIterableIterator = (value) ->
  return value?[Symbol.iterator]?() == value

module.exports = isIterableIterator