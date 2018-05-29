(function() {
  var GeneratorFunction, isGeneratorFunction;

  GeneratorFunction = require('./util/GeneratorFunction');

  isGeneratorFunction = function(value) {
    return value instanceof GeneratorFunction;
  };

  module.exports = isGeneratorFunction;

}).call(this);
