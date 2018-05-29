unit = require 'unit.js'
isEqual = require '../isEqual'

describe '#isEqual', ->
  it 'should be a function', ->
    unit
      .function isEqual

    return null

  it 'should return true for equal primatives', ->
    unit
      .bool isEqual(null, null)
      .isTrue()
      .bool isEqual(true, true)
      .isTrue()
      .bool isEqual(false, false)
      .isTrue()
      .bool isEqual(5, 5)
      .isTrue()
      .bool isEqual('hi', 'hi')
      .isTrue()
      .bool isEqual(/\d/, /\d/)
      .isTrue()
      .bool isEqual([1, 2, 3], [1, 2, 3])
      .isTrue()

    return null

  it 'should return true for equal primative and objects', ->
    unit
      .bool isEqual(new Number(5), 5)
      .isTrue()
      .bool isEqual(new String('hi'), 'hi')
      .isTrue()
      .bool isEqual(new Boolean(true), true)
      .isTrue()
      .bool isEqual(new Boolean(false), false)
      .isTrue()
      .bool isEqual(new RegExp('\\d'), /\d/)
      .isTrue()
      .bool isEqual(new Array(1, 2, 3), [1, 2, 3])
      .isTrue()

    return null

  it 'should return true for equal objects', ->
    unit
      .bool isEqual(new Date('2000-01-01'), new Date('2000-01-01'))
      .isTrue()
      .bool isEqual(new Number(5), new Number(5))
      .isTrue()
      .bool isEqual(new String('a'), new String('a'))
      .isTrue()
      .bool isEqual(new RegExp('asd'), new RegExp('asd'))
      .isTrue()
      .bool isEqual(new Array(1, 2), new Array(1, 2))
      .isTrue()

    return null

  it 'should return true for equal object literals', ->
    unit
      .bool isEqual({}, {})
      .isTrue()
      .bool isEqual({a: 5}, {a: 5})
      .isTrue()
      .bool isEqual({z: 'hi'}, {z: 'hi'})
      .isTrue()

    return null

  it 'should return false for non equal object literals', ->
    unit
      .bool isEqual({a: 5}, {a: 4})
      .isFalse()
      .bool isEqual({a: 5}, {a: 5, b: 6})
      .isFalse()
      .bool isEqual({a: 5}, {z: 'hi'})
      .isFalse()

    return null

  it 'should return false for non equal primative and objects', ->
    unit
      .bool isEqual(new Number(2), 5)
      .isFalse()
      .bool isEqual(new String('hi'), 'bye')
      .isFalse()
      .bool isEqual(new Boolean(true), false)
      .isFalse()
      .bool isEqual(new Boolean(false), true)
      .isFalse()
      .bool isEqual(new RegExp('asd', 'i'), /asd/)
      .isFalse()
      .bool isEqual(new Array(1, 2, 3), [1, 2])
      .isFalse()

    return null

  it 'should return false for non equal primatives', ->
    unit
      .bool isEqual(3, 5)
      .isFalse()
      .bool isEqual('hi', 'Hi')
      .isFalse()
      .bool isEqual(true, false)
      .isFalse()
      .bool isEqual(/asd/, /asd/i)
      .isFalse()
      .bool isEqual([1, 2, 3], [1, 3, 2])
      .isFalse()

    return null