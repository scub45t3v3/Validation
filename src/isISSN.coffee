REGEX = /^\d{4}-?\d{3}[\dX]$/i

isISSN = (value) ->
  if !REGEX.test(value)
    return false

  value = value.replace(/[^\dX]/gi, '').split('')
  sum = 0

  if /^x$/i.test(value[7])
    value[7] = 10

  for val, idx in value
    val = parseInt val
    sum += (8 - idx) * val

  return !(sum % 11)

module.exports = isISSN