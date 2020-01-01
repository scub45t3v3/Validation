'use strict';

// include dependencies
const unit = require('unit.js');
const index = require('../index');
const FUNCTIONS = [
  'isAfter',
  'isAll',
  'isAlpha',
  'isAlphaNumeric',
  'isAmericanExpress',
  'isAny',
  'isArguments',
  'isArray',
  'isAscii',
  'isBase64',
  'isBefore',
  'isBoolean',
  'isCreditCard',
  'isDataURI',
  'isDate',
  'isDinersClub',
  'isDiscover',
  'isDomainName',
  'isEmailAddress',
  'isEmpty',
  'isEqual',
  'isError',
  'isExtensible',
  'isFloat',
  'isFrozen',
  'isFunction',
  'isGenerator',
  'isGeneratorFunction',
  'isHexadecimal',
  'isHexColor',
  'isInteger',
  'isIP',
  'isISBN',
  'isISIN',
  'isISRC',
  'isISSN',
  'isIterable',
  'isIterableIterator',
  'isIterator',
  'isJCB',
  'isJSON',
  'isLatitude',
  'isLength',
  'isLongitude',
  'isLuhn',
  'isMACAddress',
  'isMap',
  'isMastercard',
  'isMatch',
  'isMD5',
  'isMongoId',
  'isNaN',
  'isNull',
  'isPhoneNumber',
  'isPlural',
  'isPort',
  'isPostalCode',
  'isPrimitive',
  'isPromise',
  'isPunctuation',
  'isRegExp',
  'isSealed',
  'isSemVer',
  'isSet',
  'isSHA1',
  'isSHA256',
  'isSHA384',
  'isSHA512',
  'isSingular',
  'isString',
  'isSymbol',
  'isTime',
  'isUndefined',
  'isURL',
  'isURN',
  'isUUID',
  'isVIN',
  'isVisa',
  'isWeakMap',
  'isWeakSet',
];

// describe @scuba-squad/validation
describe('@scuba-squad/validation', () => {
  it('should have several functions', () => {
    unit
      .object(index)
      .hasProperties(FUNCTIONS)
      .matchEach((value, key) => {
        return typeof value === 'function' && /^is[A-Z]/.test(key);
      });
  }); // end it
}); // end describe @scuba-squad/validation