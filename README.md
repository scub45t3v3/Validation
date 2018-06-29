# Validation

<a name="status"></a>
[![Build Status](https://travis-ci.org/scub45t3v3/Validation.svg?branch=master)](https://travis-ci.org/scub45t3v3/Validation)

<a name="toc"></a>
## Table of Content
  * [Status](#status)
  * [Purpose](#purpose)
  * [Installation](#installation)
  * [API](#api)
  * [Test](#test)
  * [License](#license)

<a name="purpose"></a>
## Purpose
Collection of helpful functions for data validation

<a name="installation"></a>
## Installation
Via [npm](https://www.npmjs.com/)

```bash
npm install Validation
```

<a name="api"></a>
## API
### `isAfter(value: date | number | string | array | object, compare: ?date | number | string | array | object = Date.now()): boolean`
**Added in:** v1.0.0

Check if the `value` is after the `compare`

**arguments:**
1. `value: date | number | string | array | object`
2. `compare: ?date | number | string | array | object = Date.now()`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAfter(new Date(2020), new Date(2010)); // true
Validation.isAfter(9, 5); // true
Validation.isAfter('2020-01-01', '2010-01-01'); // true
Validation.isAfter({y: 2020}, {y: 2010}); // true
Validation.isAfter('2030-01-01'); // true / compare defaults to Date.now()

Validation.isAfter(9) // false / compare defaults to Date.now()
```

### `isAll(value: mixed, ...callable: function | string | regexp | array): boolean`
**Added in:** v1.0.0

Check if the `value` passes all the provided `callable` functions

**arguments:**
1. `value: mixed`
2. `...callable: function | string | regexp | array`
  - *function is any function that can be called passing `value` as the first argument*
  - *string is name of a `@scuba-squad/validation` function*
  - *regexp is a regexp to validate against using a bound `test` method*
  - *array allows for additional arguments to be passed to the function*

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAll('hello world!', 'isString', ['isLength', {max: 16}]); // true
Validation.isAll('{"a": 5}', 'isJSON', function(value) {
  value = JSON.parse(value);

  return !!value.a;
}); // true
```

### `isAlpha(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` contains only case insensitive ascii characters A-Z

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAlpha('asdf'); // true

Validation.isAlpha('asdf4'); // false
```

### `isAlphaNumberic(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` contains only case insensitive ascii characters A-Z and/or 0-9

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAlphaNumberic('asdf'); // true
Validation.isAlphaNumberic('asdf4'); // true

Validation.isAlphaNumberic('asdf!'); // false
```

### `isAmericanExpress(value: string | number): boolean`
**Added in:** v1.0.0

Check if the `value` is an American Express primary account number

**arguments:**
1. `value: string | number`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAmericanExpress('378282246310005'); // true

Validation.isAmericanExpress('6011111111111117'); // false
```

### `isAny(value: mixed, ...callable: function | string | regexp | array): boolean`
**Added in:** v1.0.0

Check if the `value` passes any of the provided `callable` functions

**arguments:**
1. `value: mixed`
2. `...callable: function | string | regexp | array`
  - *function is any function that can be called passing `value` as the first argument*
  - *string is name of a `@scuba-squad/validation` function*
  - *regexp is a regexp to validate against using a bound `test` method*
  - *array allows for additional arguments to be passed to the function*

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAny(5, 'isUndefined', 'isNull', 'isInteger'); // true
Validation.isAny('6011111111111117', 'isAmericanExpress', 'isDiscover'); // true
```

### `isArguments(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is an [Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

let fn = function() {
  Validation.isArguments(arguments); // true
};

let spread = function(arg, ...rest) {
  Validation.isArguments(arg); // false
  Validation.isArguments(rest); // false
};
```

### `isArray(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isArray([]); // true
Validation.isArray(Array.from(new Set([1, 2]))); // true

Validation.isArray(new Set([1, 2])); // false
let fn = function() {
  Validation.isArray(arguments); // false
};
```

### `isAscii(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` contains only ascii characters

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isAscii('hello world!'); // true
Validation.isAscii('~!@#$%^&*()_+|}{POIUYTREWQASDFGHJKL:"?><MNBVCXZ"}'); // true

Validation.isAscii('Δ'); // false
Validation.isAscii('=adklãjfhsd'); // false
```

### `isBase64(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a base64 encoded string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isBase64('aifrledy'); // true
Validation.isBase64('a83k/ts='); // true

Validation.isBase64('we48tuer='); // false
Validation.isBase64('=adkljfhsd'); // false
```

### `isBefore(value: date | number | string | array | object, compare: ?date | number | string | array | object = Date.now()): boolean`
**Added in:** v1.0.0

Check if the `value` is before the `compare`

**arguments:**
1. `value: date | number | string | array | object`
2. `compare: ?date | number | string | array | object = Date.now()`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isBefore(new Date(2010)); // true / compare defaults to Date.now()
Validation.isBefore(5, 9); // true
Validation.isBefore('2010-01-01', '2020'); // true
Validation.isBefore({y: 2010}, {y: 2020}); // true
Validation.isBefore(9); // true / compare defaults to Date.now()

Validation.isBefore('2030-01-01'); // false / compare defaults to Date.now()
```

### `isBoolean(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) object or primitive

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isBoolean(true); // true
Validation.isBoolean(false); // true
Validation.isBoolean(new Boolean()); // true

Validation.isBoolean(1); // false
Validation.isBoolean('true'); // false
```

### `isCreditCard(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a credit card primary account number

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isCreditCard('378282246310005'); // true
Validation.isCreditCard('6011111111111117'); // true
Validation.isCreditCard('3530111333300000'); // true
Validation.isCreditCard('5555555555554444'); // true
Validation.isCreditCard('4111111111111111'); // true
Validation.isCreditCard('4222222222222'); // true

Validation.isCreditCard('378282246310004'); // false
Validation.isCreditCard('6011161111111117'); // false
Validation.isCreditCard('5555555535554444'); // false
```

### `isDataURI(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [data URI](https://en.wikipedia.org/wiki/Data_URI_scheme) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isDataURI('data:,'); // true
Validation.isDataURI('data:text/vnd-example+xyz;foo=bar;base64,R0lGODdh'); // true
Validation.isDataURI('data:text/plain;charset=UTF-8;page=21,the%20data:1234,5678'); // true

Validation.isDataURI('data:we48tuer'); // false
Validation.isDataURI('data:test,we[foewf]'); // false
Validation.isDataURI('data:34w98uerj,'); // false
```

### `isDate(value: date | number | string | array | object): boolean`
**Added in:** v1.0.0

Check if the `value` is a date object or parsable as 1 *via moment.js*

**arguments:**
1. `value: date | number | string | array | object`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isDate(new Date()); // true
Validation.isDate(Date.now()); // true
Validation.isDate('2020-01-01'); // true
Validation.isDate([2020, 1, 1]); // true
Validation.isDate({y: 2020}); // true
```

### `isDinersClub(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a Diners Club card primary account number

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isDinersClub('30569309025904'); // true
Validation.isDinersClub('38520000023237'); // true

Validation.isDinersClub('378282246310004'); // false
Validation.isDinersClub('6011111111111117'); // false
```

### `isDiscover(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is Discover card primary account number

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isDiscover('6011111111111117'); // true
Validation.isDiscover('6011000990139424'); // true

Validation.isDiscover('378282246310004'); // false
Validation.isDiscover('6011111111111116'); // false
```

### `isDomainName(value: mixed, idn: boolean = true): boolean`
**Added in:** v1.0.0

Check if the `value` is a [domain name](https://en.wikipedia.org/wiki/Domain_name)

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isDomainName('code.google.com'); // true
Validation.isDomainName('例子.测试'); // true

Validation.isDomainName('.foo.com'); // false
Validation.isDomainName('##.$/'); // false
```

### `isEmailAddress(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is an email address string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isEmailAddress('#!$%&\'*+-/=?^_`{}|~@example.org'); // true
Validation.isEmailAddress('email@123.123.123.123'); // true
Validation.isEmailAddress('email@example.co.jp'); // true

Validation.isEmailAddress('A@b@c@example.com'); // false
Validation.isEmailAddress('a"b(c)d,e:f;g<h>i[j\k]l@example.com'); // false
Validation.isEmailAddress('this\ still\"not\\allowed@example.com'); // false
```

### `isEmpty(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is empty

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isEmpty({}); // true
Validation.isEmpty([]); // true
Validation.isEmpty(''); // true

Validation.isEmpty({a: 5}); // false
Validation.isEmpty([1]); // false
Validation.isEmpty('a'); // false
```

### `isEqual(value: mixed, compare: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is equal to the `compare`

**arguments:**
1. `value: mixed`
2. `compare: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isEqual(true, new Boolean(1)); // true
Validation.isEqual({a: 5}, {a: 5}); // true
Validation.isEqual(/asd/, new RegExp('asd')); // true

Validation.isEqual({a: 5}, {a: 5, b: undefined}); // false
Validation.isEqual([1, 2, 3], [1, 3, 2]); // false
```

### `isError(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isError(new Error()); // true
Validation.isError(new TypeError()); // true
Validation.isError(new ReferenceError()); // true

try {
  throw 'this is a string';
} catch (error) {
  Validation.isError(error); // false
}
```

### `isExtensible(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [Extensible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isExtensible({a: 5}); // true
Validation.isExtensible([1, 2]); // true

Validation.isExtensible(1); // false
Validation.isExtensible(Object.preventExtensions({a: 5})); // false
```

### `isFloat(value: mixed, opt: {min: ?number, max: ?number, step: ?number, safe: ?boolean} = {}): boolean`
**Added in:** v1.0.0

Check if the `value` is a floating point number

**arguments:**
1. `value: mixed`
2. `opt: object = {}`
    - `min: ?number` minimum acceptable value
    - `max: ?number` maximum acceptable value
    - `step: ?number` value must be divisible by
    - `safe: ?boolean` value must be castable to a number without loss of precision

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isFloat('5.6'); // true
Validation.isFloat(4, {min: 0, max: 5, step: .5}); // true
Validation.isFloat('1.7976931348623157e+308'); // true

Validation.isFloat(4.1, {min: 0, max: 5, step: .5}); // false
Validation.isFloat('1.7976931348623157e+309', {safe: true}); // false
```

### `isFrozen(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [Frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isFrozen(Object.freeze({a: 5})); // true
Validation.isFrozen(1); // true

Validation.isFrozen({a: 5}); // false
Validation.isFrozen([1, 2]); // false
```

### `isFunction(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isFunction(function(){}); // true
Validation.isFunction(Validation.isFunction); // true

Validation.isFunction({
  fn: function(){}
}); // false
```

### `isGenerator(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

Validation.isGenerator(gen()); // true

Validation.isGenerator(gen); // false
Validation.isGenerator(function(){}); // false
```

### `isGeneratorFunction(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [GeneratorFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

Validation.isGeneratorFunction(gen); // true

Validation.isGeneratorFunction(function(){}); // false
```

### `isHexadecimal(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isHexadecimal(0x5af); // true
Validation.isHexadecimal(45); // true
Validation.isHexadecimal('ad45'); // true

Validation.isHexadecimal('adsf'); // false
Validation.isHexadecimal(-45); // false
```

### `isHexColor(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Hex triplet color](https://en.wikipedia.org/wiki/Web_colors) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isHexColor('#fFfffF'); // true
Validation.isHexColor('#fff'); // true
Validation.isHexColor('fff'); // true

Validation.isHexColor('#asd'); // false
Validation.isHexColor('ffff'); // false
```

### `isInteger(value: mixed, opt: {min: ?number, max: ?number, step: ?number, safe: ?boolean} = {}): boolean`
**Added in:** v1.0.0

Check if the `value` is an integer value

**arguments:**
1. `value: mixed`
2. `opt: object = {}`
    - `min: ?number` minimum acceptable value
    - `max: ?number` maximum acceptable value
    - `step: ?number` value must be divisible by
    - `safe: ?boolean` value must be castable to a number without loss of precision

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isInteger(5); // true
Validation.isInteger(5, {min: 0, max: 5}); // true
Validation.isInteger('9007199254740991', {safe: true}); // true

Validation.isInteger(5.1); // false
Validation.isInteger(6, {min: 0, max: 5}); // false
Validation.isInteger('9007199254740992', {safe: true}); // false
```

### `isIP(value: string, version: ?number): boolean`
**Added in:** v1.0.0

Check if the `value` is an [ip address](https://en.wikipedia.org/wiki/IP_address) string of the optional `version`

**arguments:**
1. `value: string`
2. `version: ?number` 4 or 6

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isIP('67.213.74.8'); // true
Validation.isIP('67.213.74.8', 4); // true
Validation.isIP('2001:db8::ff00:42:8329'); // true
Validation.isIP('2001:db8::ff00:42:8329', 6); // true

Validation.isIP('67.213.74.8', 6); // false
Validation.isIP('2001:db8::ff00:42:8329', 4); // false
```

### `isISBN(value: string, version: ?number): boolean`
**Added in:** v1.0.0

Check if the `value` is an [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) string of the optioanl `version`

**arguments:**
1. `value: string`
2. `version: ?number` 10 or 13

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isISBN('99921-58-10-7'); // true
Validation.isISBN('978-3-16-148410-0'); // true

Validation.isISBN('99921-58-10-7', 13); // false
Validation.isISBN('978-3-16-148410-0', 10); // false
```

### `isISIN(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is an [ISIN](https://en.wikipedia.org/wiki/International_Securities_Identification_Number) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isISIN('US5949181045'); // true
Validation.isISIN('DE000DB7HWY7'); // true

Validation.isISIN('JP3946603008'); // false
Validation.isISIN('DE000CMFVX13'); // false
```

### `isISRC(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [ISRC](http://isrc.ifpi.org/en/) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isISRC('JMK401400212'); // true
Validation.isISRC('VN9TT7593452'); // true

Validation.isISRC('JMK40140021F'); // false
Validation.isISRC('4Z4KL4789202'); // false
```

### `isISSN(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is an [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isISSN('0000-0019'); // true
Validation.isISSN('2434561X'); // true

Validation.isISSN('000-00019'); // false
Validation.isISSN('9083-128X'); // false
```

### `isIterable(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is an [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) protocol

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isIterable([1, 2, 3]); // true
Validation.isIterable('adsf'); // true

Validation.isIterable({a: 5}); // false
```

### `isIterableIterator(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is an [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) and [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) protocol

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

Validation.isIterableIterator(gen()); // true
Validation.isIterableIterator(new Set()[Symbol.iterator]()); // true

Validation.isIterableIterator([1, 2, 3]); // false
Validation.isIterableIterator('adsf'); // false
```

### `isIterator(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is an [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) protocol

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

Validation.isIterator(gen()); // true
Validation.isIterator(new Set()[Symbol.iterator]()); // true

Validation.isIterator([1, 2, 3]); // false
Validation.isIterator('adsf'); // false
```

### `isJCB(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a JCB card primary account number

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isJCB('3530111333300000'); // true
Validation.isJCB('3566002020360505'); // true

Validation.isJCB('378282246310004'); // false
Validation.isJCB('6011111111111117'); // false
```

### `isJSON(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [JSON](https://json.org/) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isJSON('{"a":{"z":true,"x":5.6,"y":"h"},"b":-6}'); // true
Validation.isJSON('true'); // true

Validation.isJSON('{a:false}'); // false
Validation.isJSON('truez'); // false
```

### `isLatitude(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Latitude](https://en.wikipedia.org/wiki/Latitude) coordinate

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isLatitude(90); // true
Validation.isLatitude(-90); // true

Validation.isLatitude(90.00001); // false
Validation.isLatitude(-90.00001); // false
```

### `isLength(value: mixed, length: ?number | {min: ?number = 1, max: ?number}): boolean`
**Added in:** v1.0.0

Check if the `value` is a specific length

**arguments:**
1. `value: mixed`
2. `length: ?number | {min: ?number = 1, max: ?number}`
  - `min: ?number = 1` minimum acceptable length
  - `max: ?number` maximum acceptable length

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isLength([1]); // true / min defaults to 1
Validation.isLength('asd', 3); // true / passing a number checks exact length
Validation.isLength(new Set([1, 2]), {max: 5}); // true / size is checked if length is not defined

Validation.isLength([]); // false / length is not > 1
Validaiton.isLength([1, 2], 3); // false / length is not equal to 3
Validation.isLength({a: 5}); // false / no length or size property
```

### `isLongitude(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Longitude](https://en.wikipedia.org/wiki/Longitude) coordinate

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isLongitude(180); // true
Validation.isLongitude(-180); // true

Validation.isLongitude(180.00001); // false
Validation.isLongitude(-180.00001); // false
```

### `isLuhn(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) number

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isLuhn('378282246310005'); // true
Validation.isLuhn(38520000023237); // true

Validation.isLuhn('30569209025904'); // false
Validation.isLuhn(14); // false
```

### `isMACAddress(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [MAC address](https://en.wikipedia.org/wiki/MAC_address) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isMACAddress('af:4f:a8:93:01:d2'); // true
Validation.isMACAddress('d2:39:67:bb:5c:f8'); // true

Validation.isMACAddress('af:4f:a8:h3:01:d2'); // false
Validation.isMACAddress('af:4f:a8:93:01'); // false
```

### `isMap(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validaiton.isMap(new Map()); // true

Validation.isMap(new WeakMap()); // false
```

### `isMastercard(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a Mastercard primary account number

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isMastercard('5555555555554444'); // true
Validation.isMastercard('5105105105105100'); // true

Validation.isMastercard('378282246310004'); // false
Validation.isMastercard('5610591081018250'); // false
```

### `isMatch(value: mixed, compare: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` contains the `key: value` pairs from the `compare` object

**arguments:**
1. `value: mixed`
2. `compare: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isMatch({a: 5, b: true}, {b: true}); // true
Validation.isMatch({z: 'hi', x: 'bye'}, {z: 'hi', x: 'bye'}); // true

Validation.isMatch({a: 5, b: true}, {b: false}); // false
Validation.isMatch({z: 'hi', x: 'bye'}, {z: 'hi', g: 'bye'}); // false
```

### `isMD5(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a MD5 hash string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isMD5('62c4f0b4dbe2a9cf80e003bdd7011f54'); // true
Validation.isMD5('190102c2743633072e050c8d697faebc'); // true

Validation.isMD5('190102c2743633072e050c8d697faebx'); // false
Validation.isMD5('af:4ff:a8:93:01:d2'); // false
```

### `isMongoId(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a mongoDB id string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isMongoId('62c4f0b4dbe2a9cf80e003bd'); // true
Validation.isMongoId('ae898bce08fcd570d7e36d34'); // true

Validation.isMongoId('ae898bce08fcd570d7e36d3g'); // false
Validation.isMongoId('af:hf:a8:93:01:d2'); // false
```

### `isNaN(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isNaN(NaN); // true
Validation.isNaN(1 - 'a'); // true

Validation.isNaN(1 + 3); // false
Validation.isNan('NaN'); // false
```

### `isNull(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) primitive

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isNull(null); // true

Validation.isNull(undefined); // false
Validation.isNull(void 0); // false
```

### `isPhoneNumber(value: string, country: ?string | @scuba-squad/country): boolean`
**Added in:** v1.0.0

Check if the `value` is a phone number string for the provided `country`

**arguments:**
1. `value: string`
2. `country: ?string | @scuba-squad/country`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPhoneNumber('2 9282 2833', 'AU'); // true
Validation.isPhoneNumber('499 248-30-03', 'RUS'); // true
Validation.isPhoneNumber('406–692–7753', '840'); // true
Validation.isPhoneNumber('+44 20 7638 4141'); // true / country not required with international calling code

Validation.isPhoneNumber('806-642-7676', 'CN'); // false
Validation.isPhoneNumber('555–692–7753', 'US'); // false
Validation.isPhoneNumber('+44 20 7638 4141', 'US'); // false
```

### `isPlural(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a plural word

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPlural('items'); // true
Validation.isPlural('cars'); // true

Validation.isPlural('table'); // false
Validation.isPlural('chair'); // false
```

### `isPort(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [network port](https://en.wikipedia.org/wiki/Port_(computer_networking))

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPort(26); // true
Validation.isPort('80'); // true
Validation.isPort(65535); //true

Validation.isPort(0); // false
Validation.isPort(65536); // false
```

### `isPostalCode(value: string, country: ?string | @scuba-squad/country): boolean`
**Added in:** v1.0.0

Check if the `value` is a postal code string for the optionally provided `country`

**arguments:**
1. `value: string`
2. `country: ?string | @scuba-squad/country`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPostalCode('90210'); // true
Validation.isPostalCode('ab5g-9wt', 'GB'); // true
Validation.isPostalCode('ab5g-9wt', 'GBR'); // true
Validation.isPostalCode('ab5g-9wt', '826'); // true

Validation.isPostalCode('90210', 'AU'); // false
Validation.isPostalCode('9115-41034', 'US'); // false
```

### `isPrimitive(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPrimitive(undefined); // true
Validation.isPrimitive(null); // true
Validation.isPrimitive(false); // true
Validation.isPrimitive(0); // true
Validation.isPrimitive(''); // true
Validation.isPrimitive(NaN); // true
Validation.isPrimitive(Infinity); // true
Validation.isPrimitive(Symbol()); // true

Validation.isPrimitive(new Boolean()); // false
Validation.isPrimitive(new Number(0)); // false
Validation.isPrimitive(new String('')); // false
```

### `isPromise(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPromise(new Promise(function(resolve, reject){})); // true
Validation.isPromise(Promise.resolve()); // true

Validation.isPromise(function(resolve, reject){}); // false
```

### `isPunctuation(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` contains only ascii punctuation characters

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isPunctuation('!"#%&\'()*,-./:;?@[]_{}'); // true

Validation.isPunctuation('hello world!'); // false
```

### `isRegExp(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isRegExp(/asd/); // true
Validation.isRegExp(new RegExp('3')); // true

Validation.isRegExp('/asd/'); // false
```

### `isSealed(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [Sealed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSealed(Object.seal({a: 5})); // true
Validation.isSealed(1); // true

Validation.isSealed({a: 5}); // false
Validation.isSealed([1, 2]); // false
```

### `isSemVer(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [semver](https://semver.org/) string

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSemVer('1.0.0'); // true
Validation.isSemVer('1.0.0-beta.0.7+rc.2.6'); // true

Validation.isSemVer('v1.0.5'); // false
Validation.isSemVer('1.0.0-00.1'); // false
```

### `isSet(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSet(new Set([1, 2])); // true

Validation.isSet([1, 2]); // false
Validation.isSet(new Map([['a', 5]])); // false
```

### `isSHA1(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [SHA1](https://en.wikipedia.org/wiki/SHA-1) string

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');
```

### `isSHA256(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [SHA-256](https://en.wikipedia.org/wiki/SHA-2) string

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSHA256('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'); // true

Validation.isSHA256('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85'); // false
Validation.isSHA256('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85X'); //false
```

### `isSHA384(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [SHA-384](https://en.wikipedia.org/wiki/SHA-2) string

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSHA384('38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b'); // true

Validation.isSHA384('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'); // false
Validation.isSHA384('38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b9'); //false
```

### `isSHA512(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [SHA-512](https://en.wikipedia.org/wiki/SHA-2) string

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSHA512('cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'); // true

Validation.isSHA512('38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b'); //false
Validation.isSHA512('cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da'); // false
```

### `isSingular(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a singular word

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSingular('item'); // true
Validation.isSingular('car'); // true

Validation.isSingular('tables'); // false
Validation.isSingular('chairs'); // false
```

### `isString(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object or primitive

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isString('hello world!'); // true
Validation.isString(new String('hi')); // true

Validation.isString(true); // false
Validation.isString(/asd/); // false
```

### `isSymbol(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) primitive

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isSymbol(Symbol()); // true
Validation.isSymbol(Symbol.iterator); // true

Validation.isSymbol({a: 5}); // false
Validation.isSymbol([1, 2]); // false
```

### `isTime(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a time string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isTime('23:59:59.999999999'); // true / 24hr format
Validation.isTime('1:24 P.M.'); // true / meridiem
Validation.isTime('6 AM'); // true / meridiem
Validation.isTime('13:01Z'); // true / Z indicates UTC timezone
Validation.isTime('13:01+3'); // true / time zone offeset from UTC
Validation.isTime('13:01 MST'); // true / timezone abbreviation
Validation.isTime('13:01 Mountain Standard Time'); // true / timezone name
Validation.isTime('13:01 America/Denver'); // true / tzdb name

Validation.isTime('24'); // false / 24 hr is invalid
Validation.isTime('3:60'); // false / 60 min is invalid
Validation.isTime('13:01PM'); // false / meridiem is 12hr format
```

### `isUndefined(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) primitive

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isUndefined(); // true
Validation.isUndefined(undefined); // true

Validation.isUndefined(null); // false
```

### `isURL(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [URL](https://en.wikipedia.org/wiki/URL) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isURL('http://google.com'); // true
Validation.isURL('http://例子.测试'); // true
Validation.isURL('http://a1-._~!$&(\')+=*,;%24@example.com'); // true

Validation.isURL('http://-error-.invalid/'); // false
Validation.isURL('http://foo.bar?q=Spaces should be encoded'); // false
```

### `isURN(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isURN('urn:ietf:rfc:2648'); // true
Validation.isURN('URN:EXAMPLE:a123%2cz456'); // true
Validation.isURN('urn:example:weather?+lang=en-US?=lat=39.56&lon=-104.85#tomorrow'); // true

Validation.isURN('urn:isbn/0451450523'); // false
Validation.isURN('urn:example:weather?=q=this should be percent encoded'); // false
```

### `isUUID(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isUUID('2fed40d0-774e-11e7-b5a5-be2e44b06b34'); // true
Validation.isUUID('737e6050-7b96-499b-b71e-efa75d1b90c2'); // true

Validation.isUUID('2fed40d0774e11e7b5a5be2e44b06b34'); // false
```

### `isVIN(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a [VIN](https://en.wikipedia.org/wiki/Vehicle_identification_number) string

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isVIN('4A4MN41S15E063265'); // true
Validation.isVIN('3N1AB51D92L747926'); // true

Validation.isVIN('4A4MN41415E063265'); // false
Validation.isVIN('1GCGC33G6TF039278'); // false
```

### `isVisa(value: string): boolean`
**Added in:** v1.0.0

Check if the `value` is a Visa card primary account number

**arguments:**
1. `value: string`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isVisa('4111111111111111'); // true
Validation.isVisa('4012888888881881'); // true
Validation.isVisa('4222222222222'); // true

Validation.isVisa('378282246310004'); // false
Validation.isVisa('5610591081018250'); // false
```

### `isWeakMap(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isWeakMap(new WeakMap()); // true
Validation.isWeakMap(new WeakMap([[{a: 4}, 4]])); // true

Validation.isWeakMap(new Map()); // false
Validation.isWeakMap(new WeakSet()); // false
```

### `isWeakSet(value: mixed): boolean`
**Added in:** v1.0.0

Check if the `value` is a [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) object

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Validation = require('@scuba-squad/validation');

Validation.isWeakSet(new WeakSet()); // true
Validation.isWeakSet(new WeakSet([{a: 4}])); // true

Validation.isWeakSet(new Set()); // false
Validation.isWeakSet(new WeakMap()); // false
```

<a name="test"></a>
## Test
```bash
npm install
npm test
```

<a name="license"></a>
## License
[MIT](LICENSE)