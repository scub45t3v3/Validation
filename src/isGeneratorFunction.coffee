GeneratorFunction = require './util/GeneratorFunction'

isGeneratorFunction = (value) ->
  return value instanceof GeneratorFunction

module.exports = isGeneratorFunction