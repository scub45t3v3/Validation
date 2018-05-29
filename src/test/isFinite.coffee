unit = require 'unit.js'
{noop} = require 'underscore'
isFinite = require '../isFinite'

describe '#isFinite', ->
  it 'should be a function', ->
    unit
      .function isFinite

    return null

  it 'should return true for integers', ->
    unit
      .bool isFinite(1)
      .isTrue()
      .bool isFinite(234987)
      .isTrue()
      .bool isFinite(-239874)
      .isTrue()
      .bool isFinite(0)
      .isTrue()

    return null

  it 'should return true for floats', ->
    unit
      .bool isFinite(1.1)
      .isTrue()
      .bool isFinite(-0.4)
      .isTrue()
      .bool isFinite(234.4)
      .isTrue()
      .bool isFinite(54.00000000001)
      .isTrue()

    return null

  it 'should return true for numeric strings', ->
    unit
      .bool isFinite('356')
      .isTrue()
      .bool isFinite('-345')
      .isTrue()
      .bool isFinite('5.546')
      .isTrue()
      .bool isFinite('-54.342')
      .isTrue()
      .bool isFinite('0')
      .isTrue()

    return null

  it 'should return false for Infinity', ->
    unit
      .bool isFinite(Infinity)
      .isFalse()
      .bool isFinite(-Infinity)
      .isFalse()

    return null

  it 'shoulr return false for NaN', ->
    unit
      .bool isFinite(NaN)
      .isFalse()

    return null

  it 'should return false for bools', ->
    unit
      .bool isFinite(true)
      .isFalse()
      .bool isFinite(false)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isFinite(noop)
      .isFalse()
      .bool isFinite(isFinite)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isFinite(/asd/)
      .isFalse()
      .bool isFinite(/\d+/)
      .isFalse()
      .bool isFinite(/1/)
      .isFalse()
      .bool isFinite(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isFinite([1, 2])
      .isFalse()
      .bool isFinite(['a', {}, 6])
      .isFalse()

    return null

  it 'should return false for non numeric strings', ->
    unit
      .bool isFinite('adsf')
      .isFalse()
      .bool isFinite('34.6-')
      .isFalse()
      .bool isFinite('-45fg')
      .isFalse()

    return null

  it 'should return false for enumerable objects', ->
    unit
      .bool isFinite(new String('asd'))
      .isFalse()
      .bool isFinite({a: 5})
      .isFalse()

    return null