(function() {
  var isIP, net;

  net = require('net');

  isIP = function(value, version) {
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

  module.exports = isIP;

}).call(this);
