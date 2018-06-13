unit = require 'unit.js'
{noop} = require 'underscore'
BigNumber = require 'bignumber.js'
isPort = require '../isPort'

describe '#isPort', ->
  it 'should be a function', ->
    unit
      .function isPort

    return null

  it 'should return true for valid port numbers', ->
    unit
      .bool isPort(1)
      .isTrue()
      .bool isPort(65535)
      .isTrue()
      .bool isPort(80)
      .isTrue()
      .bool isPort(26)
      .isTrue()
      .bool isPort(443)
      .isTrue()

    return null

  it 'should return true for parsable port numbers', ->
    unit
      .bool isPort('80')
      .isTrue()
      .bool isPort('26')
      .isTrue()
      .bool isPort('8000')
      .isTrue()

    return null

  it 'should return true for objects that stringify to a port number', ->
    unit
      .bool isPort(new String('80'))
      .isTrue()
      .bool isPort(new BigNumber('8080'))
      .isTrue()

    return null

  it 'should return false for value < 1 or > 65535', ->
    unit
      .bool isPort(0)
      .isFalse()
      .bool isPort(65536)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isPort(noop)
      .isFalse()
      .bool isPort(isPort)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isPort('adsf')
      .isFalse()
      .bool isPort('34.t')
      .isFalse()
      .bool isPort('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isPort(/asd/)
      .isFalse()
      .bool isPort(/\d+/)
      .isFalse()
      .bool isPort(/1/)
      .isFalse()
      .bool isPort(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isPort([])
      .isFalse()
      .bool isPort([1, 2, 3])
      .isFalse()
      .bool isPort(['a', 5, {}])
      .isFalse()

    return null

  it 'should return false for objects that dont stringify to a latitude', ->
    unit
      .bool isPort({})
      .isFalse()
      .bool isPort(new String('asd'))
      .isFalse()
      .bool isPort({a: 5})
      .isFalse()

    return null