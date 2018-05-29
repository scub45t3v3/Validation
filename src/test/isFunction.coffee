unit = require 'unit.js'
{noop} = require 'underscore'
isFunction = require '../isFunction'

describe '#isFunction', ->
  it 'should be a function', ->
    unit
      .function isFunction

    return null

  it 'should return true for functions', ->
    unit
      .bool isFunction(isFunction)
      .isTrue()
      .bool isFunction(noop)
      .isTrue()

    return null

  it 'should return false for integers', ->
    unit
      .bool isFunction(1)
      .isFalse()
      .bool isFunction(234987)
      .isFalse()
      .bool isFunction(-239874)
      .isFalse()
      .bool isFunction(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isFunction(1.1)
      .isFalse()
      .bool isFunction(-0.4)
      .isFalse()
      .bool isFunction(234.4)
      .isFalse()
      .bool isFunction(54.00000000001)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isFunction('adsf')
      .isFalse()
      .bool isFunction('34.6')
      .isFalse()
      .bool isFunction('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isFunction(/asd/)
      .isFalse()
      .bool isFunction(/\d+/)
      .isFalse()
      .bool isFunction(/1/)
      .isFalse()
      .bool isFunction(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isFunction({})
      .isFalse()
      .bool isFunction(new String('asd'))
      .isFalse()
      .bool isFunction({a: 5})
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isFunction([])
      .isFalse()
      .bool isFunction([1, 2])
      .isFalse()
      .bool isFunction(['a', {}, 6])
      .isFalse()

    return null