REGEX = /^[a-hj-nprs-z\d]{17}$/i

isVIN = (value) ->
  if !REGEX.test(value)
    return false

  return getCheckDigit(value) == value[8].toUpperCase()

transliterate = (char) ->
  char = char?.toUpperCase()

  return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(char) % 10

getCheckDigit = (value) ->
  map = '0123456789X'
  weights = '8765432X098765432'
  sum = 0

  for char, idx in value.toUpperCase().split('')
    sum += transliterate(char) * map.indexOf(weights[idx])

  return map[sum % 11]

module.exports = isVIN