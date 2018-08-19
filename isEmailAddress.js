'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isEmailAddress');
  const isLength = require('./isLength');
  const isDomainName = require('./isDomainName');
  const REGEX = /^((?:[\w!#$%&'*+/=?^`{|}~-]+\.?)*[\w!#$%&'*+/=?^`{|}~-]+)@([^\s:[\]/%?#@]+)$/i;

  /*
   * The following method validates the local-part to dot-atom RFC 5322
   * thus removing the quoted-string, obs-local-part, and comments.
   * It validates the domain to dot-atom RFC 5322 with RFC 5890 IDN support
   * thus removing the domain-literal, obs-domain and comments.
   *
   * Since everyone seems to have a different interpretation on what a valid
   * email address is or is not. I am not trying to validate to a specific
   * specification as the RFC specs change, discourage, deprecate and leave
   * some ambiguity in their interpretation and at the end of the day what
   * really matters is what the various email service providers support and
   * interpret.
   */
  const isEmailAddress = (value) => {
    debug('call:isEmailAddress(%o)', value);

    try {
      value = value.match(REGEX);
    } catch (error) {
      return false;
    }

    const domain = isDomainName(value && value[2], true);
    const username = isLength(value && value[1], {
      min: 1,
      max: 64,
    });

    value = isLength(value && value[0], {
      min: 6,
      max: 255,
    });

    return value && username && domain;
  };

  module.exports = isEmailAddress;
})(); // end IIFE