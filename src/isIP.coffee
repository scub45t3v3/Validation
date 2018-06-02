debug = require('debug') '@scuba-squad:validation:isIP'

net = require 'net'

isIP = (value, version) ->
  debug 'call:isIP(%o, %o)', value, version

  switch version
    when 4, '4'
      return net.isIPv4 value
    when 6, '6'
      return net.isIPv6 value
    else
      return !!net.isIP value

module.exports = isIP