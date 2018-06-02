debug = require('debug') '@scuba-squad:validation:isFloat'
BigNumber = require 'bignumber.js'

isFloat = (value, opt = {}) ->
  debug 'call:isFloat(%o, %o)', value, opt
  value = new BigNumber value

  if !value?.isFinite?()
    return false

  if opt?.min? && !isFloat(opt.min)
    debug 'error:min %o is not a number', opt.min

    throw new TypeError 'opt.min must be a valid number'

  if opt?.max? && !isFloat(opt.max)
    debug 'error:max %o is not a number', opt.max

    throw new TypeError 'opt.min must be a valid number'

  if opt?.step? && !isFloat(opt.step)
    debug 'error:step %o is not a number', opt.step

    throw new TypeError 'opt.step must be a valid number'

  if !!opt.safe
    opt.min or= Number.MIN_VALUE
    opt.max or= Number.MAX_VALUE

  if opt.min? && value.lt(opt.min)
    return false
  else if opt.max? && value.gt(opt.max)
    return false
  else if opt.step? && !value.mod(opt.step).eq(0)
    return false

  return true

module.exports = isFloat