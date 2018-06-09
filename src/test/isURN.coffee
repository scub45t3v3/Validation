unit = require 'unit.js'
{noop} = require 'underscore'
isURN = require '../isURN'

describe '#isURN', ->
  it 'should be a function', ->
    unit
      .function isURN

    return null

  it 'should return true for valid url strings', ->
    unit
      .bool isURN('urn:isbn:0451450523')
      .isTrue()
      .bool isURN('urn:isan:0000-0000-9E59-0000-O-0000-0000-2')
      .isTrue()
      .bool isURN('urn:ISSN:0167-6423')
      .isTrue()
      .bool isURN('urn:ietf:rfc:2648')
      .isTrue()
      .bool isURN('urn:mpeg:mpeg7:schema:2001')
      .isTrue()
      .bool isURN('urn:oid:2.16.840')
      .isTrue()
      .bool isURN('urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66')
      .isTrue()
      .bool isURN('urn:nbn:de:bvb:19-146642')
      .isTrue()
      .bool isURN('urn:lex:eu:council:directive:2010-03-09;2010-19-UE')
      .isTrue()
      .bool isURN('urn:lsid:zoobank.org:pub:CDC8D258-8F57-41DC-B560-247E17D3DC8C')
      .isTrue()
      .bool isURN('URN:EXAMPLE:a123%2cz456')
      .isTrue()
      .bool isURN('urn:example:a123,z456/bar')
      .isTrue()
      .bool isURN('urn:example:a123,z456?+abc')
      .isTrue()
      .bool isURN('urn:example:a123,z456?=xyz')
      .isTrue()
      .bool isURN('urn:example:a123,z456#789')
      .isTrue()
      .bool isURN('urn:example:weather?=lat=39.56&lon=-104.85')
      .isTrue()
      .bool isURN('urn:example:weather?+lang=en-US?=lat=39.56&lon=-104.85')
      .isTrue()
      .bool isURN('urn:example:weather?+lang=en-US?=lat=39.56&lon=-104.85#tomorrow')
      .isTrue()
      .bool isURN('urn:example:weather#tomorrow?+lang=en-US?=lat=39.56&lon=-104.85')
      .isTrue()
      .bool isURN('urn:example:weather?=lat=39.56&lon=-104.85?+lang=en-US#tomorrow')
      .isTrue()

    return null

  it 'should return false for invalid url strings', ->
    unit
      .bool isURN('urn:isbn-:0451450523')
      .isFalse()
      .bool isURN('urn:-isbn:0451450523')
      .isFalse()
      .bool isURN('urn:isbn/0451450523')
      .isFalse()
      .bool isURN('urn:is&bn:0451450523')
      .isFalse()
      .bool isURN('urn:i:0451450523')
      .isFalse()
      .bool isURN('urn:example:weather?=q=this should be percent encoded')
      .isFalse()

    return null

  it 'should return false for integers', ->
    unit
      .bool isURN(14)
      .isFalse()
      .bool isURN(234987)
      .isFalse()
      .bool isURN(-2398)
      .isFalse()
      .bool isURN(2)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isURN(98.00007)
      .isFalse()
      .bool isURN(-32407.3)
      .isFalse()
      .bool isURN(0.1)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isURN(noop)
      .isFalse()
      .bool isURN(isURN)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isURN(/asd/)
      .isFalse()
      .bool isURN(/\d+/)
      .isFalse()
      .bool isURN(/1/)
      .isFalse()
      .bool isURN(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isURN([])
      .isFalse()
      .bool isURN([1, 2, 3])
      .isFalse()
      .bool isURN(['a', 5, {}])
      .isFalse()

    return null