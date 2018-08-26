'use strict';

(() => {
  // export as commonjs module
  module.exports = Object.getPrototypeOf(function* () {}).constructor;
})();