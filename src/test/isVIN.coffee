unit = require 'unit.js'
{noop} = require 'underscore'
isVIN = require '../isVIN'

describe '#isVIN', ->
  it 'should be a function', ->
    unit
      .function isVIN

    return null

  it 'should return true for valid VIN strings', ->
    unit
      .bool isVIN('4A4MN41S15E063265')
      .isTrue()
      .bool isVIN('WVWLK93C97E010461')
      .isTrue()
      .bool isVIN('5TBET38136S515018')
      .isTrue()
      .bool isVIN('1GNKRGED0CJ102908')
      .isTrue()
      .bool isVIN('1GCGC33F6TF039278')
      .isTrue()
      .bool isVIN('3N1AB51D92L747926')
      .isTrue()
      .bool isVIN('2A4GP44R06R831856')
      .isTrue()
      .bool isVIN('1G1ZT54875F181445')
      .isTrue()
      .bool isVIN('4V4NC9GF81N352070')
      .isTrue()
      .bool isVIN('1FTMF1CWXAKC34755')
      .isTrue()
      .bool isVIN('JT2VK12E9P0115326')
      .isTrue()

    return null

  it 'should return false for invalid VIN strings', ->
    unit
      .bool isVIN('4A4MN41415E063265')
      .isFalse()
      .bool isVIN('WVWLK93Y97E010461')
      .isFalse()
      .bool isVIN('5TBET381361515018')
      .isFalse()
      .bool isVIN('1GNKRGEA0CJ102908')
      .isFalse()
      .bool isVIN('1GCGC33G6TF039278')
      .isFalse()
      .bool isVIN('3N1AB51092L747926')
      .isFalse()
      .bool isVIN('2B4GP44Z06R831856')
      .isFalse()
      .bool isVIN('1G1ZT54475F181445')
      .isFalse()
      .bool isVIN('4V4NC9GF11N352070')
      .isFalse()
      .bool isVIN('1FTMF1CWXFKC34755')
      .isFalse()
      .bool isVIN('JT2VK12E9J0115326')
      .isFalse()

    return null

  it 'should return false for bools', ->
    unit
      .bool isVIN(true)
      .isFalse()
      .bool isVIN(false)
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isVIN([])
      .isFalse()
      .bool isVIN([1, 2])
      .isFalse()
      .bool isVIN(['a', {}, 6])
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isVIN(1)
      .isFalse()
      .bool isVIN(234987)
      .isFalse()
      .bool isVIN(-239874)
      .isFalse()
      .bool isVIN(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isVIN(1.1)
      .isFalse()
      .bool isVIN(-0.4)
      .isFalse()
      .bool isVIN(234.4)
      .isFalse()
      .bool isVIN(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isVIN(noop)
      .isFalse()
      .bool isVIN(isVIN)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isVIN('adsf')
      .isFalse()
      .bool isVIN('34.6')
      .isFalse()
      .bool isVIN('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isVIN(/asd/)
      .isFalse()
      .bool isVIN(/\d+/)
      .isFalse()
      .bool isVIN(/1/)
      .isFalse()
      .bool isVIN(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isVIN({})
      .isFalse()
      .bool isVIN(new String('asd'))
      .isFalse()
      .bool isVIN({a: 5})
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isVIN(new Set())
      .isFalse()
      .bool isVIN(new Set().add(1))
      .isFalse()
      .bool isVIN(new Set([1, 2, 3]))
      .isFalse()

    return null