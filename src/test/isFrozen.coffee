unit = require 'unit.js'
{noop} = require 'underscore'
isFrozen = require '../isFrozen'

describe '#isFrozen', ->
  it 'should be a function', ->
    unit
      .function isFrozen

    return null

  it 'should return true for frozen objects', ->
    unit
      .bool isFrozen(Object.freeze({a: 5}))
      .isTrue()
      .bool isFrozen(Object.freeze(new String('hi')))
      .isTrue()

    return null

  it 'should return true for empty sealed objects', ->
    unit
      .bool isFrozen(Object.seal({}))
      .isTrue()
      .bool isFrozen(Object.seal(new String('hi')))
      .isTrue()
      .bool isFrozen(Object.seal(new Number(5)))
      .isTrue()

    return null

  it 'should return true for empty objects with preventExtensions', ->
    unit
      .bool isFrozen(Object.preventExtensions({}))
      .isTrue()
      .bool isFrozen(Object.preventExtensions(new String('hi')))
      .isTrue()
      .bool isFrozen(Object.preventExtensions(new Number(5)))
      .isTrue()

    return null

  it 'should return true for primitives', ->
    unit
      .bool isFrozen(1)
      .isTrue()
      .bool isFrozen(234987)
      .isTrue()
      .bool isFrozen(-239874)
      .isTrue()
      .bool isFrozen(0)
      .isTrue()
      .bool isFrozen(1.1)
      .isTrue()
      .bool isFrozen(-0.4)
      .isTrue()
      .bool isFrozen(234.4)
      .isTrue()
      .bool isFrozen(54.00000000001)
      .isTrue()
      .bool isFrozen('adsf')
      .isTrue()
      .bool isFrozen('34.6')
      .isTrue()
      .bool isFrozen('-45fg')
      .isTrue()

    return null

  it 'should return false for object literals', ->
    unit
      .bool isFrozen({})
      .isFalse()
      .bool isFrozen({a: 5})
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isFrozen([])
      .isFalse()
      .bool isFrozen([1, 2])
      .isFalse()
      .bool isFrozen(new Array('a', {}, 6))
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isFrozen(/asd/)
      .isFalse()
      .bool isFrozen(/\d+/)
      .isFalse()
      .bool isFrozen(/1/)
      .isFalse()
      .bool isFrozen(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isFrozen(noop)
      .isFalse()
      .bool isFrozen(isFrozen)
      .isFalse()

    return null

  it 'should return false for Map', ->
    unit
      .bool isFrozen(new Map())
      .isFalse()
      .bool isFrozen(new Map([['a', 5], ['b', '$']]))
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isFrozen(new Set())
      .isFalse()
      .bool isFrozen(new Set().add(1))
      .isFalse()
      .bool isFrozen(new Set([1, 2, 3]))
      .isFalse()

    return null

  it 'should return false for non empty objects with preventExtensions', ->
    unit
      .bool isFrozen(Object.preventExtensions({a: 5}))
      .isFalse()
      .bool isFrozen(Object.preventExtensions({a: 'hi', b: true}))
      .isFalse()

    return null

  it 'should return false for non empty sealed objects', ->
    unit
      .bool isFrozen(Object.seal({a: 5}))
      .isFalse()
      .bool isFrozen(Object.seal({a: 'hi', b: true}))
      .isFalse()

    return null