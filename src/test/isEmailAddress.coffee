unit = require 'unit.js'
{noop} = require 'underscore'
isEmailAddress = require '../isEmailAddress'

describe '#isEmailAddress', ->
  it 'should be a function', ->
    unit
      .function isEmailAddress

    return null

  it 'should return true for valid email address strings', ->
    unit
      .bool isEmailAddress('email@example.com')
      .isTrue()
      .bool isEmailAddress('firstname.lastname@example.com')
      .isTrue()
      .bool isEmailAddress('email@subdomain.example.com')
      .isTrue()
      .bool isEmailAddress('firstname+lastname@example.com')
      .isTrue()
      .bool isEmailAddress('disposable.style.email.with+symbol@example.com')
      .isTrue()
      .bool isEmailAddress('other.email-with-hyphen@example.com')
      .isTrue()
      .bool isEmailAddress('fully-qualified-domain@example.com')
      .isTrue()
      .bool isEmailAddress('user.name+tag+sorting@example.com')
      .isTrue()
      .bool isEmailAddress('example-indeed@strange-example.com')
      .isTrue()
      .bool isEmailAddress('x@example.com')
      .isTrue()
      .bool isEmailAddress('1234567890@example.com')
      .isTrue()
      .bool isEmailAddress('email@example-one.com')
      .isTrue()
      .bool isEmailAddress('_______@example.com')
      .isTrue()
      .bool isEmailAddress('email@example.name')
      .isTrue()
      .bool isEmailAddress('email@example.museum')
      .isTrue()
      .bool isEmailAddress('email@example.co.jp')
      .isTrue()
      .bool isEmailAddress('#!$%&\'*+-/=?^_`{}|~@example.org')
      .isTrue()

    return null

  it 'should return false for invalid strings', ->
    unit
      .bool isEmailAddress('Abc.example.com')
      .isFalse()
      .bool isEmailAddress('A@b@c@example.com')
      .isFalse()
      .bool isEmailAddress('a"b(c)d,e:f;g<h>i[j\k]l@example.com')
      .isFalse()
      .bool isEmailAddress('just"not"right@example.com')
      .isFalse()
      .bool isEmailAddress('this is"not\allowed@example.com')
      .isFalse()
      .bool isEmailAddress('this\ still\"not\\allowed@example.com')
      .isFalse()
      .bool isEmailAddress('john..doe@example.com')
      .isFalse()
      .bool isEmailAddress('john.doe@example..com')
      .isFalse()
      .bool isEmailAddress(' email@example.com')
      .isFalse()
      .bool isEmailAddress('email@example.com ')
      .isFalse()
      .bool isEmailAddress('" "@example.org')
      .isFalse()
      .bool isEmailAddress('1234567890123456789012345678901234567890123456789012345678901234+x@example.com')
      .isFalse()
      .bool isEmailAddress('email@[123.123.123.123]')
      .isFalse() # technically valid but discouraged
      .bool isEmailAddress('user@[2001:DB8::1]')
      .isFalse() # technically valid but discouraged
      .bool isEmailAddress('"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com')
      .isFalse() # technically valid but discouraged
      .bool isEmailAddress('user@localserver')
      .isFalse() # technically valid but discouraged

    return null

  it 'should return false for integers', ->
    unit
      .bool isEmailAddress(14)
      .isFalse()
      .bool isEmailAddress(234987)
      .isFalse()
      .bool isEmailAddress(-2398)
      .isFalse()
      .bool isEmailAddress(2)
      .isFalse()

    return null

  it 'should return false for floats', ->
    unit
      .bool isEmailAddress(98.00007)
      .isFalse()
      .bool isEmailAddress(-32407.3)
      .isFalse()
      .bool isEmailAddress(0.1)
      .isFalse()

    return null

  it 'should return false for functions', ->
    unit
      .bool isEmailAddress(noop)
      .isFalse()
      .bool isEmailAddress(isEmailAddress)
      .isFalse()

    return null

  it 'should return false for regexs', ->
    unit
      .bool isEmailAddress(/asd/)
      .isFalse()
      .bool isEmailAddress(/\d+/)
      .isFalse()
      .bool isEmailAddress(/1/)
      .isFalse()
      .bool isEmailAddress(new RegExp('3'))
      .isFalse()

    return null

  it 'should return false for arrays', ->
    unit
      .bool isEmailAddress([])
      .isFalse()
      .bool isEmailAddress([1, 2, 3])
      .isFalse()
      .bool isEmailAddress(['a', 5, {}])
      .isFalse()

    return null