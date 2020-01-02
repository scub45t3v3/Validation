'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isEmailAddress');
const isLength = require('./isLength');
const isDomainName = require('./isDomainName');
const REGEX = /^(?<username>(?:[\w!#$%&'*+/=?^`{|}~-]+\.?)*[\w!#$%&'*+/=?^`{|}~-]+)@(?<domain>[^\s:[\]/%?#@]+)$/iu;

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
  const {
    groups: {
      username,
      domain,
    } = {},
  } = REGEX.exec(value) || {};

  return isLength(value, {
    min: 6,
    max: 255,
  }) && isLength(username, {
    min: 1,
    max: 64,
  }) && isDomainName(domain, true);
};

// export as commonjs module
module.exports = isEmailAddress;