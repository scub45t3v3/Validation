unit = require 'unit.js'
{noop} = require 'underscore'
BigNumber = require 'bignumber.js'
isLongitude = require '../isLongitude'

describe '#isLongitude', ->
  it 'should be a function', ->
    unit
      .function isLongitude

    return null

  it 'should return true for valid longitude', ->
    unit
      .bool isLongitude(1.4)
      .isTrue()
      .bool isLongitude(180)
      .isTrue()
      .bool isLongitude(-180)
      .isTrue()
      .bool isLongitude(2.0)
      .isTrue()

    return null

  it 'should return true for parsable longitude', ->
    unit
      .bool isLongitude('98.00007')
      .isTrue()
      .bool isLongitude('-112.7534')
      .isTrue()
      .bool isLongitude('0.1')
      .isTrue()

    return null

  it 'should return true for objects that stringify to longitude', ->
    unit
      .bool isLongitude(new String('123'))
      .isTrue()
      .bool isLongitude(new BigNumber('-74.363'))
      .isTrue()

    return null

  it 'should return false for functions', ->
    unit
      .bool isLongitude(noop)
      .isFalse()
      .bool isLongitude(isLongitude)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isLongitude('adsf')
      .isFalse()
      .bool isLongitude('34.t')
      .isFalse()
      .bool isLongitude('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isLongitude(/asd/)
      .isFalse()
      .bool isLongitude(/\d+/)
      .isFalse()
      .bool isLongitude(/1/)
      .isFalse()
      .bool isLongitude(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isLongitude([])
      .isFalse()
      .bool isLongitude([1, 2, 3])
      .isFalse()
      .bool isLongitude(['a', 5, {}])
      .isFalse()

    return null

  it 'should return false for objects that dont stringify to a longitude', ->
    unit
      .bool isLongitude({})
      .isFalse()
      .bool isLongitude(new String('asd'))
      .isFalse()
      .bool isLongitude({a: 5})
      .isFalse()

    return null