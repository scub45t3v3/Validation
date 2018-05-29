unit = require 'unit.js'
{noop} = require 'underscore'
isPlural = require '../isPlural'

describe '#isPlural', ->
  it 'should be a function', ->
    unit
      .function isPlural

    return null

  it 'should return true for plural strings', ->
    unit
      .bool isPlural('items')
      .isTrue()
      .bool isPlural('cars')
      .isTrue()
      .bool isPlural('bars')
      .isTrue()
      .bool isPlural('tables')
      .isTrue()
      .bool isPlural('chairs')
      .isTrue()

    return null

  it 'should return false for singular strings', ->
    unit
      .bool isPlural('item')
      .isFalse()
      .bool isPlural('car')
      .isFalse()
      .bool isPlural('bar')
      .isFalse()
      .bool isPlural('table')
      .isFalse()
      .bool isPlural('chair')
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isPlural(14)
      .isFalse()
      .bool isPlural(234987)
      .isFalse()
      .bool isPlural(-2398)
      .isFalse()
      .bool isPlural(2)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isPlural(98.00007)
      .isFalse()
      .bool isPlural(-32407.3)
      .isFalse()
      .bool isPlural(0.1)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isPlural(noop)
      .isFalse()
      .bool isPlural(isPlural)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isPlural(/asd/)
      .isFalse()
      .bool isPlural(/\d+/)
      .isFalse()
      .bool isPlural(/1/)
      .isFalse()
      .bool isPlural(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isPlural([])
      .isFalse()
      .bool isPlural([1, 2, 3])
      .isFalse()
      .bool isPlural(['a', 5, {}])
      .isFalse()

    return null

  it 'should return false for null', ->
    unit
      .bool isPlural(null)
      .isFalse()

    return null

  it 'should return false for undefined', ->
    unit
      .bool isPlural()
      .isFalse()
      .bool isPlural(undefined)
      .isFalse()

    return null