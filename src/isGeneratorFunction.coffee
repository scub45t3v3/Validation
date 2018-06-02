debug = require('debug') '@scuba-squad:validation:isGeneratorFunction'
GeneratorFunction = require './util/GeneratorFunction'

isGeneratorFunction = (value) ->
  debug 'call:isGeneratorFunction(%o)', value

  return value instanceof GeneratorFunction

module.exports = isGeneratorFunction