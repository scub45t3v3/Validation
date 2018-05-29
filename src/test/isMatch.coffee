unit = require 'unit.js'
isMatch = require '../isMatch'

describe '#isMatch', ->
  it 'should be a function', ->
    unit
      .function isMatch

    return null

  it 'should return true for objects containing matching properties', ->
    test =
      a: 5
      b: 'bye'

    unit
      .bool isMatch test,
        a: 5
      .isTrue()
      .bool isMatch test,
        b: 'bye'
      .isTrue()
      .bool isMatch test,
        a: 5,
        b: 'bye'
      .isTrue()
      .bool isMatch(test, {})
      .isTrue()

    return null

  it 'should return false for objects not matching properties', ->
    test =
      a: 5
      b: 'bye'

    unit
      .bool isMatch test,
        a: 6
      .isFalse()
      .bool isMatch test,
        b: 'hi'
      .isFalse()
      .bool isMatch test,
        a: 5,
        b: 'b'
      .isFalse()
      .bool isMatch test,
        c: 5
      .isFalse()

    return null