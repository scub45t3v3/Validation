unit = require 'unit.js'
{noop} = require 'underscore'
isIterator = require '../isIterator'

describe '#isIterator', ->
  it 'should be a function', ->
    unit
      .function isIterator

    return null

  it 'should return true for generator function results', ->
    test = ->
      yield 1

    unit
      .bool isIterator(test())
      .isTrue()

    return null

  it 'should return true for SetIterator objects', ->
    unit
      .bool isIterator(new Set()[Symbol.iterator]())
      .isTrue()

    return null

  it 'should return true for MapIterator objects', ->
    unit
      .bool isIterator(new Map()[Symbol.iterator]())
      .isTrue()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isIterator([])
      .isFalse()
      .bool isIterator([1, 2, 3])
      .isFalse()

    return null

  it 'should return false for Set objects', ->
    unit
      .bool isIterator(new Set())
      .isFalse()
      .bool isIterator(new Set([1, 2, 3]))
      .isFalse()

    return null

  it 'should return false for Map objects', ->
    unit
      .bool isIterator(new Map())
      .isFalse()
      .bool isIterator(new Map([['a', 1], ['b', 5]]))
      .isFalse()

    return null

  it 'should return false for WeakSet objects', ->
    unit
      .bool isIterator(new WeakSet())
      .isFalse()
      .bool isIterator(new WeakSet([{a: 5, b: 'hi'}]))
      .isFalse()

    return null

  it 'should return false for WeakMap objects', ->
    unit
      .bool isIterator(new WeakMap())
      .isFalse()
      .bool isIterator(new WeakMap([[{}, 5], [{a: 6}, 6]]))
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isIterator('adsf')
      .isFalse()
      .bool isIterator('34.6')
      .isFalse()
      .bool isIterator(new String('hello world!'))
      .isFalse()

    return null

  it 'should return false for object literals', ->
    unit
      .bool isIterator({})
      .isFalse()
      .bool isIterator({a: 5})
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isIterator(1)
      .isFalse()
      .bool isIterator(234987)
      .isFalse()
      .bool isIterator(-239874)
      .isFalse()
      .bool isIterator(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isIterator(1.1)
      .isFalse()
      .bool isIterator(-0.4)
      .isFalse()
      .bool isIterator(234.4)
      .isFalse()
      .bool isIterator(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isIterator(noop)
      .isFalse()
      .bool isIterator(isIterator)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isIterator(/asd/)
      .isFalse()
      .bool isIterator(/\d+/)
      .isFalse()
      .bool isIterator(/1/)
      .isFalse()
      .bool isIterator(new RegExp('3'))
      .isFalse()

    return null