unit = require 'unit.js'
{noop} = require 'underscore'
isISSN = require '../isISSN'

describe '#isISSN', ->
  it 'should be a function', ->
    unit
      .function isISSN

    return null

  it 'should return true for valid ISSN strings', ->
    unit
      .bool isISSN('0000-0019')
      .isTrue()
      .bool isISSN('0378-5955')
      .isTrue()
      .bool isISSN('2434561X')
      .isTrue()
      .bool isISSN('1943-8311')
      .isTrue()
      .bool isISSN('0953-4563')
      .isTrue()
      .bool isISSN('03178471')
      .isTrue()
      .bool isISSN('0001-5830')
      .isTrue()

    return null

  it 'should return false for invalid ISSN strings', ->
    unit
      .bool isISSN('000-00019')
      .isFalse()
      .bool isISSN('00156707')
      .isFalse()
      .bool isISSN('002X-9643')
      .isFalse()
      .bool isISSN('0F28-8292')
      .isFalse()
      .bool isISSN('0D33-7234')
      .isFalse()
      .bool isISSN('0043-1426')
      .isFalse()
      .bool isISSN('0066-57GX')
      .isFalse()
      .bool isISSN('0068-996Z')
      .isFalse()
      .bool isISSN('0069-430Y')
      .isFalse()
      .bool isISSN('9083-128X')
      .isFalse()
      .bool isISSN('4163-0350')
      .isFalse()

    return null

  it 'should return false for bools', ->
    unit
      .bool isISSN(true)
      .isFalse()
      .bool isISSN(false)
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isISSN([])
      .isFalse()
      .bool isISSN([1, 2])
      .isFalse()
      .bool isISSN(['a', {}, 6])
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isISSN(1)
      .isFalse()
      .bool isISSN(234987)
      .isFalse()
      .bool isISSN(-239874)
      .isFalse()
      .bool isISSN(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isISSN(1.1)
      .isFalse()
      .bool isISSN(-0.4)
      .isFalse()
      .bool isISSN(234.4)
      .isFalse()
      .bool isISSN(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isISSN(noop)
      .isFalse()
      .bool isISSN(isISSN)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isISSN(/asd/)
      .isFalse()
      .bool isISSN(/\d+/)
      .isFalse()
      .bool isISSN(/1/)
      .isFalse()
      .bool isISSN(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isISSN({})
      .isFalse()
      .bool isISSN(new String('asd'))
      .isFalse()
      .bool isISSN({a: 5})
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isISSN(new Set())
      .isFalse()
      .bool isISSN(new Set().add(1))
      .isFalse()
      .bool isISSN(new Set([1, 2, 3]))
      .isFalse()

    return null