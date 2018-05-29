unit = require 'unit.js'
{noop} = require 'underscore'
isArray = require '../isArray'

describe '#isArray', ->
  it 'should be a function', ->
    unit
      .function isArray

    return null

  it 'should return true for arrays', ->
    unit
      .bool isArray([])
      .isTrue()
      .bool isArray([1, 2])
      .isTrue()
      .bool isArray(['a', {}, 6])
      .isTrue()

    return null

  it 'should return false for integers', ->
    unit
      .bool isArray(1)
      .isFalse()
      .bool isArray(234987)
      .isFalse()
      .bool isArray(-239874)
      .isFalse()
      .bool isArray(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isArray(1.1)
      .isFalse()
      .bool isArray(-0.4)
      .isFalse()
      .bool isArray(234.4)
      .isFalse()
      .bool isArray(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isArray(noop)
      .isFalse()
      .bool isArray(isArray)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isArray('adsf')
      .isFalse()
      .bool isArray('34.6')
      .isFalse()
      .bool isArray('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isArray(/asd/)
      .isFalse()
      .bool isArray(/\d+/)
      .isFalse()
      .bool isArray(/1/)
      .isFalse()
      .bool isArray(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isArray({})
      .isFalse()
      .bool isArray(new String('asd'))
      .isFalse()
      .bool isArray({a: 5})
      .isFalse()

    return null

  it 'should return false for Map', ->
    unit
      .bool isArray(new Map())
      .isFalse()
      .bool isArray(new Map([['a', 5], ['b', '$']]))
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isArray(new Set())
      .isFalse()
      .bool isArray(new Set().add(1))
      .isFalse()
      .bool isArray(new Set([1, 2, 3]))
      .isFalse()

    return null