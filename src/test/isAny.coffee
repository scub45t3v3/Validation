unit = require 'unit.js'
{noop} = require 'underscore'
isAny = require '../isAny'

describe '#isAny', ->
  it 'should be a function', ->
    unit
      .function isAny

    return null

  it 'should return true for a value that passes truth test for provided functions', ->
    test = [
      (value) ->
        return typeof value == 'string'
      , (value) ->
        return typeof value == 'number'
      , (value) ->
        return typeof value == 'boolean'
    ]

    unit
      .bool isAny('hello', test...)
      .isTrue()
      .bool isAny(1, test...)
      .isTrue()
      .bool isAny(true, test...)
      .isTrue()
      .bool isAny(false, test...)
      .isTrue()

    return null

  it 'should return true for a value that passes truth test for provided RegExp', ->
    test = [
      /^\d+$/,
      /^hello/i
    ]

    unit
      .bool isAny('hello', test...)
      .isTrue()
      .bool isAny(5, test...)
      .isTrue()
      .bool isAny('0954', test...)
      .isTrue()

    return null

  it 'should return true for a value that passes truth test for provided function references', ->
    test = [
      'isDate'
      'isString'
      'isNull'
      'isUndefined'
    ]

    unit
      .bool isAny(new Date('2010-09-18'), test...)
      .isTrue()
      .bool isAny('string here', test...)
      .isTrue()
      .bool isAny(null, test...)
      .isTrue()
      .bool isAny(undefined, test...)
      .isTrue()

    return null

  it 'should return false for a value that does not pass truth test for provided function references', ->
    test = [
      'isURL'
      'isNaN'
      ['isBefore', 5]
    ]

    unit
      .bool isAny(new Date(), test...)
      .isFalse()
      .bool isAny('string here', test...)
      .isFalse()
      .bool isAny(3738, test...)
      .isFalse()
      .bool isAny(true, test...)
      .isFalse()

    return null

  it 'should throw an error for any callable argument that can not be resolved to a function', ->
    unit
      .error ->
        isAny 5, {}
      .error ->
        isAny 5, []
      .error ->
        isAny 5, '5'
      .error ->
        isAny 5, 'nonExistantMethod'

    return null