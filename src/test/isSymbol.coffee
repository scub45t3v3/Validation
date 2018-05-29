unit = require 'unit.js'
isSymbol = require '../isSymbol'

describe '#isSymbol', ->
  it 'should be a function', ->
    unit
      .function isSymbol

    return null

  it 'should return true for Symbol references', ->
    unit
      .bool isSymbol(Symbol())
      .isTrue()
      .bool isSymbol(Symbol.iterator)
      .isTrue()
      .bool isSymbol(Symbol.unscopables)
      .isTrue()

    return null

  it 'should return false for Set objects', ->
    unit
      .bool isSymbol(new Set())
      .isFalse()
      .bool isSymbol(new Set([4]))
      .isFalse()

    return null

  it 'should return false for WeakSet objects', ->
    unit
      .bool isSymbol(new WeakSet())
      .isFalse()
      .bool isSymbol(new WeakSet([{a: 4}]))
      .isFalse()

    return null

  it 'should return false for Map objects', ->
    unit
      .bool isSymbol(new Map())
      .isFalse()
      .bool isSymbol(new Map([['value', '3']]))
      .isFalse()

    return null

  it 'should return false for WeakMap objects', ->
    unit
      .bool isSymbol(new WeakMap())
      .isFalse()
      .bool isSymbol(new WeakMap([[{a: 4}, 4]]))
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isSymbol(1)
      .isFalse()
      .bool isSymbol(234987)
      .isFalse()
      .bool isSymbol(-239874)
      .isFalse()
      .bool isSymbol(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isSymbol(1.1)
      .isFalse()
      .bool isSymbol(-0.4)
      .isFalse()
      .bool isSymbol(234.4)
      .isFalse()
      .bool isSymbol(54.00000000001)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isSymbol('adsf')
      .isFalse()
      .bool isSymbol('34.6')
      .isFalse()
      .bool isSymbol('-45fg')
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isSymbol({})
      .isFalse()
      .bool isSymbol(new String('asd'))
      .isFalse()
      .bool isSymbol({a: 5})
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isSymbol([])
      .isFalse()
      .bool isSymbol([1, 2])
      .isFalse()
      .bool isSymbol(['a', {}, 6])
      .isFalse()

    return null