unit = require 'unit.js'
{noop} = require 'underscore'
isISBN = require '../isISBN'

describe '#isISBN', ->
  it 'should be a function', ->
    unit
      .function isISBN

    return null

  it 'should return true for valid ISBN strings', ->
    unit
      .bool isISBN('99921-58-10-7')
      .isTrue()
      .bool isISBN('9971-5-0210-0')
      .isTrue()
      .bool isISBN('960-425-059-0')
      .isTrue()
      .bool isISBN('80-902734-1-6')
      .isTrue()
      .bool isISBN('85-359-0277-5')
      .isTrue()
      .bool isISBN('1-84356-028-3')
      .isTrue()
      .bool isISBN('0-684-84328-5')
      .isTrue()
      .bool isISBN('0-8044-2957-X')
      .isTrue()
      .bool isISBN('0-85131-041-9')
      .isTrue()
      .bool isISBN('0-943396-04-2')
      .isTrue()
      .bool isISBN('0-9752298-0-X')
      .isTrue()
      .bool isISBN('978-3-16-148410-0')
      .isTrue()
      .bool isISBN('9788175257665')
      .isTrue()

    return null

  it 'should return false for ISBN not matching version', ->
    unit
      .bool isISBN('99921-58-10-7', 13)
      .isFalse()
      .bool isISBN('9971-5-0210-0', 13)
      .isFalse()
      .bool isISBN('960-425-059-0', 13)
      .isFalse()
      .bool isISBN('80-902734-1-6', 13)
      .isFalse()
      .bool isISBN('85-359-0277-5', 13)
      .isFalse()
      .bool isISBN('1-84356-028-3', 13)
      .isFalse()
      .bool isISBN('0-684-84328-5', 13)
      .isFalse()
      .bool isISBN('0-8044-2957-X', 13)
      .isFalse()
      .bool isISBN('0-85131-041-9', 13)
      .isFalse()
      .bool isISBN('0-943396-04-2', 13)
      .isFalse()
      .bool isISBN('0-9752298-0-X', 13)
      .isFalse()
      .bool isISBN('978-3-16-148410-0', 10)
      .isFalse()
      .bool isISBN('9788175257665', 10)
      .isFalse()

    return null

  it 'should return false for invalid ISBN strings', ->
    unit
      .bool isISBN('99921-58-10-3')
      .isFalse()
      .bool isISBN('9971-5-0210-4')
      .isFalse()
      .bool isISBN('960-425-059-2')
      .isFalse()
      .bool isISBN('80-902734-1-9')
      .isFalse()
      .bool isISBN('85-359-0277-1')
      .isFalse()
      .bool isISBN('1-84356-028-6')
      .isFalse()
      .bool isISBN('0-684-84328-9')
      .isFalse()
      .bool isISBN('0-8044-2957-3')
      .isFalse()
      .bool isISBN('0-85131-041-X')
      .isFalse()
      .bool isISBN('0-943396-04-8')
      .isFalse()
      .bool isISBN('0-9752298-0-9')
      .isFalse()
      .bool isISBN('978-3-17-148410-0')
      .isFalse()
      .bool isISBN('9788175257666')
      .isFalse()

    return null

  it 'should return false for bools', ->
    unit
      .bool isISBN(true)
      .isFalse()
      .bool isISBN(false)
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isISBN([])
      .isFalse()
      .bool isISBN([1, 2])
      .isFalse()
      .bool isISBN(['a', {}, 6])
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isISBN(1)
      .isFalse()
      .bool isISBN(234987)
      .isFalse()
      .bool isISBN(-239874)
      .isFalse()
      .bool isISBN(0)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isISBN(1.1)
      .isFalse()
      .bool isISBN(-0.4)
      .isFalse()
      .bool isISBN(234.4)
      .isFalse()
      .bool isISBN(54.00000000001)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isISBN(noop)
      .isFalse()
      .bool isISBN(isISBN)
      .isFalse()

    return null

  it 'should return false for strings', ->
    unit
      .bool isISBN('adsf')
      .isFalse()
      .bool isISBN('34.6')
      .isFalse()
      .bool isISBN('-45fg')
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isISBN(/asd/)
      .isFalse()
      .bool isISBN(/\d+/)
      .isFalse()
      .bool isISBN(/1/)
      .isFalse()
      .bool isISBN(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for objects', ->
    unit
      .bool isISBN({})
      .isFalse()
      .bool isISBN(new String('asd'))
      .isFalse()
      .bool isISBN({a: 5})
      .isFalse()

    return null

  it 'should return false for Set', ->
    unit
      .bool isISBN(new Set())
      .isFalse()
      .bool isISBN(new Set().add(1))
      .isFalse()
      .bool isISBN(new Set([1, 2, 3]))
      .isFalse()

    return null