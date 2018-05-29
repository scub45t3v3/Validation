unit = require 'unit.js'
{noop} = require 'underscore'
isMACAddress = require '../isMACAddress'

describe '#isMACAddress', ->
  it 'should be a function', ->
    unit
      .function isMACAddress

    return null

  it 'should return true for valid MAC address strings', ->
    unit
      .bool isMACAddress('af:4f:a8:93:01:d2')
      .isTrue()
      .bool isMACAddress('5c:ff:1a:c8:bc:a0')
      .isTrue()
      .bool isMACAddress('fa:28:d4:f8:aa:01')
      .isTrue()
      .bool isMACAddress('56:73:37:f7:ad:c2')
      .isTrue()
      .bool isMACAddress('d2:39:67:bb:5c:f8')
      .isTrue()
      .bool isMACAddress('9d:dd:70:fa:c5:2b')
      .isTrue()
      .bool isMACAddress('7a:ff:d2:48:f3:9f')
      .isTrue()

    return null

  it 'should return false for invalid MAC address strings', ->
    unit
      .bool isMACAddress('af:4f:a8:f93:01:d2')
      .isFalse()
      .bool isMACAddress('af:4f:a8:h3:01:d2')
      .isFalse()
      .bool isMACAddress('af:4f:a8:93:01')
      .isFalse()
      .bool isMACAddress('*&TYY')
      .isFalse()
      .bool isMACAddress('serreg;dfskdfkjfgjh')
      .isFalse()
      .bool isMACAddress('sdf.,.mdf')
      .isFalse()
      .bool isMACAddress('we;o9tu49')
      .isFalse()
      .bool isMACAddress('q23qo98441`')
      .isFalse()
      .bool isMACAddress('ewr09ti34*&')
      .isFalse()
      .bool isMACAddress('%sdkjvnnd')
      .isFalse()
      .bool isMACAddress('=adkljfhsd')
      .isFalse()
      .bool isMACAddress('sadkjfh{sdkjf}')
      .isFalse()
      .bool isMACAddress('aweklhd[asldkfjsd]')
      .isFalse()
      .bool isMACAddress(',foiadfoihf<lkewf')
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isMACAddress(14)
      .isFalse()
      .bool isMACAddress(234987)
      .isFalse()
      .bool isMACAddress(-2398)
      .isFalse()
      .bool isMACAddress(2)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isMACAddress(98.00007)
      .isFalse()
      .bool isMACAddress(-32407.3)
      .isFalse()
      .bool isMACAddress(0.1)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isMACAddress(noop)
      .isFalse()
      .bool isMACAddress(isMACAddress)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isMACAddress(/asd/)
      .isFalse()
      .bool isMACAddress(/\d+/)
      .isFalse()
      .bool isMACAddress(/1/)
      .isFalse()
      .bool isMACAddress(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isMACAddress([])
      .isFalse()
      .bool isMACAddress([1, 2, 3])
      .isFalse()
      .bool isMACAddress(['a', 5, {}])
      .isFalse()

    return null