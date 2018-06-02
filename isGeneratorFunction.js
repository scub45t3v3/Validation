(function() {
  var GeneratorFunction, debug, isGeneratorFunction;

  debug = require('debug')('@scuba-squad:validation:isGeneratorFunction');

  GeneratorFunction = require('./util/GeneratorFunction');

  isGeneratorFunction = function(value) {
    debug('call:isGeneratorFunction(%o)', value);
    return value instanceof GeneratorFunction;
  };

  module.exports = isGeneratorFunction;

}).call(this);
