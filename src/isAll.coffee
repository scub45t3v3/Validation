_ = require 'underscore'
debug = require('debug') '@scuba-squad:validation:isAll'
toCallable = require './util/toCallable'

isAll = (value, args...) ->
  debug 'call:isAll(%o, %o)', value, args
  args = _.map args, toCallable

  return _.all args, (func) ->
    debug 'call:%s(%o)', func.name, value

    return func value

module.exports = isAll