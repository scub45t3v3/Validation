debug = require('debug') '@scuba-squad:validation:isPrimitive'

isPrimitive = (value) ->
  debug 'call:isPrimitive(%o)', value
  primitives = [
    'boolean'
    'string'
    'number'
    'symbol'
  ]

  return !value? || !!~primitives.indexOf typeof value

module.exports = isPrimitive