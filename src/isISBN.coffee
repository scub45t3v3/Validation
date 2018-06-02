debug = require('debug') '@scuba-squad:validation:isISBN'

REGEX_10 = /^\d{9}[\dX]$/
REGEX_13 = /^\d{13}$/

isISBN = (value, version) ->
  debug 'call:isISBN(%o, %o)', value, version

  sanitized = value?.toString?()?.toUpperCase?().replace /[\s-]+/g, ''
  version or= sanitized?.length

  switch version
    when 10, '10'
      return isISBN10 sanitized
    when 13, '13'
      return isISBN13 sanitized
    else
      return false

isISBN10 = (value) ->
  debug 'call:isISBN10(%o)', value

  if !REGEX_10.test(value)
    return false

  sum = 0
  value = value.split('').reverse()

  if value[0] == 'X'
    value[0] = 10

  for val, idx in value
    sum += (idx + 1) * parseInt(val)

  return !(sum % 11)

isISBN13 = (value) ->
  debug 'call:isISBN13(%o)', value

  if !REGEX_13.test(value)
    return false

  sum = 0

  for val, idx in value.split('')
    val = parseInt val

    if (idx % 2)
      val *= 3

    sum += val

  return !(sum % 10)

module.exports = isISBN