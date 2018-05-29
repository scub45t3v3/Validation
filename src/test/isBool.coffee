unit = require 'unit.js'
{noop} = require 'underscore'
isBool = require '../isBool'

describe '#isBool', ->
  it 'should be a function', ->
    unit
      .function isBool

    return null

  it 'should return true for bools', ->
    unit
      .bool isBool(true)
      .isTrue()
      .bool isBool(false)
      .isTrue()
      .bool isBool(new Boolean())
      .isTrue()
      .bool isBool(new Boolean(1))
      .isTrue()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isBool([])
      .isFalse()
      .bool isBool([1, 2])
      .isFalse()
      .bool isBool(['a', {}, 6])
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isBool(1)
      .isFalse()
      .bool isBool(234987)
      .isFalse()
      .bool isBool(-239874)
      .isFalse()
      .bool isBool(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isBool(1.1)
      .isFalse()
      .bool isBool(-0.4)
      .isFalse()
      .bool isBool(234.4)
      .isFalse()
      .bool isBool(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isBool(noop)
      .isFalse()
      .bool isBool(isBool)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isBool('adsf')
      .isFalse()
      .bool isBool('34.6')
      .isFalse()
      .bool isBool('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isBool(/asd/)
      .isFalse()
      .bool isBool(/\d+/)
      .isFalse()
      .bool isBool(/1/)
      .isFalse()
      .bool isBool(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isBool({})
      .isFalse()
      .bool isBool(new String('asd'))
      .isFalse()
      .bool isBool({a: 5})
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isBool(new Set())
      .isFalse()
      .bool isBool(new Set().add(1))
      .isFalse()
      .bool isBool(new Set([1, 2, 3]))
      .isFalse()

    return null