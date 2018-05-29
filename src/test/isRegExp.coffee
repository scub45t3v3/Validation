unit = require 'unit.js'
isRegExp = require '../isRegExp'

describe '#isRegExp', ->
  it 'should be a function', ->
    unit
      .function isRegExp

    return null

  it 'should return true for regexs', ->
    unit
      .bool isRegExp(/asd/)
      .isTrue()
      .bool isRegExp(/\d+/)
      .isTrue()
      .bool isRegExp(/1/)
      .isTrue()
      .bool isRegExp(new RegExp('3'))
      .isTrue()

    return null

  it 'should return false for integers', ->
    unit
      .bool isRegExp(1)
      .isFalse()
      .bool isRegExp(234987)
      .isFalse()
      .bool isRegExp(-239874)
      .isFalse()
      .bool isRegExp(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isRegExp(1.1)
      .isFalse()
      .bool isRegExp(-0.4)
      .isFalse()
      .bool isRegExp(234.4)
      .isFalse()
      .bool isRegExp(54.00000000001)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isRegExp('adsf')
      .isFalse()
      .bool isRegExp('34.6')
      .isFalse()
      .bool isRegExp('-45fg')
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isRegExp({})
      .isFalse()
      .bool isRegExp(new String('asd'))
      .isFalse()
      .bool isRegExp({a: 5})
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isRegExp([])
      .isFalse()
      .bool isRegExp([1, 2])
      .isFalse()
      .bool isRegExp(['a', {}, 6])
      .isFalse()

    return null