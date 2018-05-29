_ = require 'underscore'
toCallable = require './util/toCallable'

isAny = (value, args...) ->
  args = _.map args, toCallable

  return _.any args, (func) ->
    return func value

module.exports = isAny