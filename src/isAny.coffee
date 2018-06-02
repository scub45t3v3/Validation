_ = require 'underscore'
debug = require('debug') '@scuba-squad:validation:isAny'
toCallable = require './util/toCallable'

isAny = (value, args...) ->
  debug 'call:isAny(%o, %o)', value, args
  args = _.map args, toCallable

  return _.any args, (func) ->
    debug 'call:%s(%o)', func.name, value

    return func value

module.exports = isAny