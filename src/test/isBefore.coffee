unit = require 'unit.js'
{noop} = require 'underscore'
isBefore = require '../isBefore'

describe '#isBefore', ->
  it 'should be a function', ->
    unit
      .function isBefore

    return null

  it 'should return true for dates', ->
    unit
      .bool isBefore(Date.now() - 500)
      .isTrue()
      .bool isBefore(new Date(500), new Date())
      .isTrue()
      .bool isBefore(new Date('2010-01-01'), new Date('2010-02-01'))
      .isTrue()

    return null

  it 'should return true for objects', ->
    unit
      .bool isBefore {
        y: 2001
      }, {
        y: 2010
        M: 6
      }
      .isTrue()
      .bool isBefore {
        H: 4
      }, {
        H: 4
        m: 20
      }
      .isTrue()
      .bool isBefore {
        a: 5
        z: 80
      }, {
        y: 9999
      }
      .isTrue()

    return null

  it 'should return true for numeric arrays', ->
    now = new Date()
    unit
      .bool isBefore([now.getFullYear(), now.getMonth(), now.getDate()])
      .isTrue()
      .bool isBefore([2010, 1, 6])
      .isTrue()
      .bool isBefore([2000, 6, 15, 4, 20, 0])
      .isTrue()

    return null

  it 'should return true for integers', ->
    unit
      .bool isBefore(1, 2)
      .isTrue()
      .bool isBefore(234987, 234988)
      .isTrue()
      .bool isBefore(-239874, -239873)
      .isTrue()
      .bool isBefore(0, 1)
      .isTrue()

    return null

  it 'should return true for floats', ->
    unit
      .bool isBefore(1.4, 1.5)
      .isTrue()
      .bool isBefore(-0.3, -0.2)
      .isTrue()
      .bool isBefore(234.5, 234.6)
      .isTrue()
      .bool isBefore(55, 55.00000000001)
      .isTrue()

    return null

  it 'should return true for pasable strings', ->
    unit
      .bool isBefore('2013-02-08', '2013-02-09')
      .isTrue()
      .bool isBefore('2013-W06-5', '2013-W06-6')
      .isTrue()
      .bool isBefore('2013-039', '2013-040')
      .isTrue()
      .bool isBefore('20130208', '20130209')
      .isTrue()
      .bool isBefore('2013W065', '2013W066')
      .isTrue()
      .bool isBefore('2013W06', '2013W07')
      .isTrue()
      .bool isBefore('2013050', '2013051')
      .isTrue()
      .bool isBefore('2013-02-08T09', '2013-02-08T10')
      .isTrue()
      .bool isBefore('2013-02-08 09', '2013-02-08 10')
      .isTrue()
      .bool isBefore('2013-02-08 09:30', '2013-02-08 09:31')
      .isTrue()
      .bool isBefore('2013-02-08 09:30:26', '2013-02-08 09:30:27')
      .isTrue()
      .bool isBefore('2013-02-08 09:30:26.123', '2013-02-08 09:30:26.124')
      .isTrue()
      .bool isBefore('2013-02-08 23:59:59.999', '2013-02-08 24:00:00.000')
      .isTrue()
      .bool isBefore('20130208T080910,123', '20130208T080910,124')
      .isTrue()
      .bool isBefore('20130208T080910.123', '20130208T080910.124')
      .isTrue()
      .bool isBefore('20130208T080910', '20130208T080911')
      .isTrue()
      .bool isBefore('20130208T0809', '20130208T0810')
      .isTrue()
      .bool isBefore('20130208T08', '20130208T09')
      .isTrue()
      .bool isBefore('2013-02-08 09', '2013-02-08 10')
      .isTrue()
      .bool isBefore('2013-W06-5 09', '2013-W06-5 10')
      .isTrue()
      .bool isBefore('2013-039 09', '2013-039 10')
      .isTrue()
      .bool isBefore('2013-02-08 09+07:00', '2013-02-08 09+06:00')
      .isTrue()
      .bool isBefore('2013-02-08 09-0100', '2013-02-08 09-0200')
      .isTrue()
      .bool isBefore('2013-02-08 09Z', '2013-02-08 10Z')
      .isTrue()
      .bool isBefore('2013-02-08 09:30:26.123+07:00', '2013-02-08 09:30:26.123+06:00')
      .isTrue()
      .bool isBefore('2013-02-08 09:30:26.123+08', '2013-02-08 09:30:26.123+07')
      .isTrue()

    return null

  it 'should return false for functions', ->
    unit
      .bool isBefore(noop)
      .isFalse()
      .bool isBefore(isBefore, noop)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isBefore(/asd/)
      .isFalse()
      .bool isBefore(/\d+/)
      .isFalse()
      .bool isBefore(/1/)
      .isFalse()
      .bool isBefore(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for non parsable strings', ->
    unit
      .bool isBefore('adsf')
      .isFalse()
      .bool isBefore('34.6 is not valid')
      .isFalse()
      .bool isBefore('-45fg')
      .isFalse()

    return null

  it 'should return false for non numeric arrays', ->
    unit
      .bool isBefore(['a', 'b', 6, {}])
      .isFalse()
      .bool isBefore([5, 4, false, 'a'])
      .isFalse()

    return null