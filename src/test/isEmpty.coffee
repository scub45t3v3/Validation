unit = require 'unit.js'
{noop} = require 'underscore'
isEmpty = require '../isEmpty'

describe '#isEmpty', ->
  it 'should be a function', ->
    unit
      .function isEmpty

    return null

  it 'should return true for non iterable/enumerable objects', ->
    unit
      .bool isEmpty({})
      .isTrue()
      .bool isEmpty([])
      .isTrue()
      .bool isEmpty('')
      .isTrue()

    return null

  it 'should return true for integers', ->
    unit
      .bool isEmpty(1)
      .isTrue()
      .bool isEmpty(234987)
      .isTrue()
      .bool isEmpty(-239874)
      .isTrue()
      .bool isEmpty(0)
      .isTrue()

    return null

  it 'should return true for floats', ->
    unit
      .bool isEmpty(1.1)
      .isTrue()
      .bool isEmpty(-0.4)
      .isTrue()
      .bool isEmpty(234.4)
      .isTrue()
      .bool isEmpty(54.00000000001)
      .isTrue()

    return null

  it 'should return true for bools', ->
    unit
      .bool isEmpty(true)
      .isTrue()
      .bool isEmpty(false)
      .isTrue()

    return null

  it 'should return true for functions', ->
    unit
      .bool isEmpty(noop)
      .isTrue()
      .bool isEmpty(isEmpty)
      .isTrue()

    return null

  it 'should return true for regexs', ->
    unit
      .bool isEmpty(/asd/)
      .isTrue()
      .bool isEmpty(/\d+/)
      .isTrue()
      .bool isEmpty(/1/)
      .isTrue()
      .bool isEmpty(new RegExp('3'))
      .isTrue()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isEmpty([1, 2])
      .isFalse()
      .bool isEmpty(['a', {}, 6])
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isEmpty('adsf')
      .isFalse()
      .bool isEmpty('34.6')
      .isFalse()
      .bool isEmpty('-45fg')
      .isFalse()

    return null

  it 'should return false for enumerable objects', ->
    unit
      .bool isEmpty(new String('asd'))
      .isFalse()
      .bool isEmpty({a: 5})
      .isFalse()

    return null