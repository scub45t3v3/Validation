'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isGeneratorFunction');
  const GeneratorFunction = require('./util/GeneratorFunction');

  const isGeneratorFunction = (value) => {
    debug('call:isGeneratorFunction(%o)', value);

    return value instanceof GeneratorFunction;
  };

  // export as commonjs module
  module.exports = isGeneratorFunction;
})(); // end IIFE