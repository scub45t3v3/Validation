'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isIP');
const net = require('net');

const isIP = (value, version) => {
  debug('call:isIP(%o, %o)', value, version);

  switch (version) {
    case 4:
    case '4':
      return net.isIPv4(value);
    case 6:
    case '6':
      return net.isIPv6(value);
    default:
      return !!net.isIP(value);
  }
};

// export as commonjs module
module.exports = isIP;