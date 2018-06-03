(function() {
  var FUNCTIONS, index, unit;

  unit = require('unit.js');

  index = require('../index');

  FUNCTIONS = ['isAfter', 'isAll', 'isAlpha', 'isAlphaNumeric', 'isAmericanExpress', 'isAny', 'isArguments', 'isArray', 'isAscii', 'isBase64', 'isBefore', 'isBoolean', 'isCreditCard', 'isDataURI', 'isDate', 'isDinersClub', 'isDiscover', 'isEmailAddress', 'isEmpty', 'isEqual', 'isError', 'isExtensible', 'isFloat', 'isFrozen', 'isFunction', 'isGenerator', 'isGeneratorFunction', 'isHexadecimal', 'isHexColor', 'isInteger', 'isIP', 'isISBN', 'isISIN', 'isISRC', 'isISSN', 'isIterable', 'isIterableIterator', 'isIterator', 'isJCB', 'isJSON', 'isLatitude', 'isLength', 'isLongitude', 'isLuhn', 'isMACAddress', 'isMap', 'isMastercard', 'isMatch', 'isMD5', 'isMongoId', 'isNaN', 'isNull', 'isPhoneNumber', 'isPlural', 'isPostalCode', 'isPromise', 'isPunctuation', 'isRegExp', 'isSealed', 'isSemVer', 'isSet', 'isSHA1', 'isSHA256', 'isSHA384', 'isSHA512', 'isSingular', 'isString', 'isSymbol', 'isTime', 'isUndefined', 'isURL', 'isUUID', 'isVIN', 'isVisa', 'isWeakMap', 'isWeakSet'];

  describe('@scuba-squad/validation', function() {
    return it('should have several functions', function() {
      unit.object(index).hasProperties(FUNCTIONS).matchEach(function(value, key) {
        return typeof value === 'function' && /^is[A-Z]/.test(key);
      });
      return null;
    });
  });

}).call(this);
