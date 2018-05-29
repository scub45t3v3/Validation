isInteger = require './isInteger'

isLength = (value, opt = {}) ->
  length = value?.length || value?.size

  if isInteger(opt)
    opt =
      min: opt
      max: opt

  opt.min or= 1
  opt.safe = true

  return isInteger length, opt

module.exports = isLength