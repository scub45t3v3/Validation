'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isPrimitive');

  const isPrimitive = (value) => {
    debug('call:isPrimitive(%o)', value);

    const primitives = ['boolean', 'string', 'number', 'symbol'];

    return (value == null) || !!~primitives.indexOf(typeof value);
  };

  module.exports = isPrimitive;
})(); // end IIFE