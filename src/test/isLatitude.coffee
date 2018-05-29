unit = require 'unit.js'
{noop} = require 'underscore'
BigNumber = require 'bignumber.js'
isLatitude = require '../isLatitude'

describe '#isLatitude', ->
  it 'should be a function', ->
    unit
      .function isLatitude

    return null

  it 'should return true for valid latitude', ->
    unit
      .bool isLatitude(1.4)
      .isTrue()
      .bool isLatitude(-90)
      .isTrue()
      .bool isLatitude(90)
      .isTrue()
      .bool isLatitude(-2.0)
      .isTrue()

    return null

  it 'should return true for parsable latitude', ->
    unit
      .bool isLatitude('89.00007')
      .isTrue()
      .bool isLatitude('-76.')
      .isTrue()
      .bool isLatitude('0.1')
      .isTrue()

    return null

  it 'should return true for objects that stringify to latitude', ->
    unit
      .bool isLatitude(new String('73'))
      .isTrue()
      .bool isLatitude(new BigNumber('-45.7675'))
      .isTrue()

    return null

  it 'should return false for value < -90 or > 90', ->
    unit
      .bool isLatitude(90.0000001)
      .isFalse()
      .bool isLatitude(-90.000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isLatitude(noop)
      .isFalse()
      .bool isLatitude(isLatitude)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isLatitude('adsf')
      .isFalse()
      .bool isLatitude('34.t')
      .isFalse()
      .bool isLatitude('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isLatitude(/asd/)
      .isFalse()
      .bool isLatitude(/\d+/)
      .isFalse()
      .bool isLatitude(/1/)
      .isFalse()
      .bool isLatitude(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isLatitude([])
      .isFalse()
      .bool isLatitude([1, 2, 3])
      .isFalse()
      .bool isLatitude(['a', 5, {}])
      .isFalse()

    return null

  it 'should return false for objects that dont stringify to a latitude', ->
    unit
      .bool isLatitude({})
      .isFalse()
      .bool isLatitude(new String('asd'))
      .isFalse()
      .bool isLatitude({a: 5})
      .isFalse()

    return null