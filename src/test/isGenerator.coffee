unit = require 'unit.js'
{noop} = require 'underscore'
isGenerator = require '../isGenerator'

describe '#isGenerator', ->
  it 'should be a function', ->
    unit
      .function isGenerator

    return null

  it 'should return true for a Generator object', ->
    test = ->
      yield 1

    unit
      .bool isGenerator(test())
      .isTrue()

    return null

  it 'should return false for integers', ->
    unit
      .bool isGenerator(1)
      .isFalse()
      .bool isGenerator(234987)
      .isFalse()
      .bool isGenerator(-239874)
      .isFalse()
      .bool isGenerator(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isGenerator(1.1)
      .isFalse()
      .bool isGenerator(-0.4)
      .isFalse()
      .bool isGenerator(234.4)
      .isFalse()
      .bool isGenerator(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isGenerator(noop)
      .isFalse()
      .bool isGenerator(isGenerator)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isGenerator('adsf')
      .isFalse()
      .bool isGenerator('34.6')
      .isFalse()
      .bool isGenerator('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isGenerator(/asd/)
      .isFalse()
      .bool isGenerator(/\d+/)
      .isFalse()
      .bool isGenerator(/1/)
      .isFalse()
      .bool isGenerator(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isGenerator({})
      .isFalse()
      .bool isGenerator(new String('asd'))
      .isFalse()
      .bool isGenerator({a: 5})
      .isFalse()

    return null

  it 'should return false for Map', ->
    unit
      .bool isGenerator(new Map())
      .isFalse()
      .bool isGenerator(new Map([['a', 5], ['b', '$']]))
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isGenerator(new Set())
      .isFalse()
      .bool isGenerator(new Set().add(1))
      .isFalse()
      .bool isGenerator(new Set([1, 2, 3]))
      .isFalse()

    return null