unit = require 'unit.js'
{noop} = require 'underscore'
isPrimitive = require '../isPrimitive'

describe '#isPrimitive', ->
  it 'should be a function', ->
    unit
      .function isPrimitive

    return null

  it 'should return true for undefined', ->
    unit
      .bool isPrimitive()
      .isTrue()
      .bool isPrimitive(undefined)
      .isTrue()

    return null

  it 'should return true for null', ->
    unit
      .bool isPrimitive(null)
      .isTrue()

    return null

  it 'should return true for primitive booleans', ->
    unit
      .bool isPrimitive(true)
      .isTrue()
      .bool isPrimitive(false)
      .isTrue()

    return null

  it 'should return true for primitive strings', ->
    unit
      .bool isPrimitive('')
      .isTrue()
      .bool isPrimitive('hello')
      .isTrue()
      .bool isPrimitive('#hash')
      .isTrue()

    return null

  it 'should return true for primitive numbers', ->
    unit
      .bool isPrimitive(0)
      .isTrue()
      .bool isPrimitive(1)
      .isTrue()
      .bool isPrimitive(-1)
      .isTrue()
      .bool isPrimitive(0.99)
      .isTrue()
      .bool isPrimitive(-0.99)
      .isTrue()

    return null

  it 'should return true for NaN', ->
    unit
      .bool isPrimitive(NaN)
      .isTrue()

    return null

  it 'should return true for Infinity', ->
    unit
      .bool isPrimitive(Infinity)
      .isTrue()
      .bool isPrimitive(-Infinity)
      .isTrue()

    return null

  it 'should return true for symbols', ->
    unit
      .bool isPrimitive(Symbol())
      .isTrue()
      .bool isPrimitive(Symbol.iterator)
      .isTrue()

    return null

  it 'should return false for boolean objects', ->
    unit
      .bool isPrimitive(new Boolean())
      .isFalse()
      .bool isPrimitive(new Boolean(1))
      .isFalse()

    return null

  it 'should return false for string objects', ->
    unit
      .bool isPrimitive(new String())
      .isFalse()
      .bool isPrimitive(new String('hello'))
      .isFalse()
      .bool isPrimitive(new String('#hash'))
      .isFalse()

    return null

  it 'should return false for number objects', ->
    unit
      .bool isPrimitive(new Number(0))
      .isFalse()
      .bool isPrimitive(new Number(1))
      .isFalse()
      .bool isPrimitive(new Number(-1))
      .isFalse()
      .bool isPrimitive(new Number(0.99))
      .isFalse()
      .bool isPrimitive(new Number(-0.99))
      .isFalse()

    return null

  it 'should return false for NaN number objects', ->
    unit
      .bool isPrimitive(new Number(NaN))
      .isFalse()

    return null

  it 'should return false for Infinity number objects', ->
    unit
      .bool isPrimitive(new Number(Infinity))
      .isFalse()
      .bool isPrimitive(new Number(-Infinity))
      .isFalse()

    return null

  it 'should return false for regular expressions', ->
    unit
      .bool isPrimitive(/asd/)
      .isFalse()
      .bool isPrimitive(/^.*$/)
      .isFalse()

    return null

  it 'should return false for object wrapped symbols', ->
    unit
      .bool isPrimitive(Object(Symbol()))
      .isFalse()
      .bool isPrimitive(Object(Symbol.iterator))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isPrimitive({})
      .isFalse()
      .bool isPrimitive(new Date())
      .isFalse()
      .bool isPrimitive(new RegExp())
      .isFalse()
      .bool isPrimitive(new Set())
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isPrimitive([])
      .isFalse()
      .bool isPrimitive(new Array())
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isPrimitive(isPrimitive)
      .isFalse()
      .bool isPrimitive(noop)
      .isFalse()

    return null