_ = require 'underscore'
toCallable = require './util/toCallable'

isAll = (value, args...) ->
  args = _.map args, toCallable

  return _.all args, (func) ->
    return func value

module.exports = isAll