isBool = require './isBool'

isIterator = (value) ->
  return isBool value?.next?()?.done

module.exports = isIterator