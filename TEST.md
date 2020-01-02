# TOC
   - [@scuba-squad/validation](#scuba-squadvalidation)
   - [#isAfter](#isafter)
   - [#isAll](#isall)
   - [#isAlpha](#isalpha)
   - [#isAlphaNumeric](#isalphanumeric)
   - [#isAmericanExpress](#isamericanexpress)
   - [#isAny](#isany)
   - [#isArguments](#isarguments)
   - [#isArray](#isarray)
   - [#isAscii](#isascii)
   - [#isBase64](#isbase64)
   - [#isBefore](#isbefore)
   - [#isBoolean](#isboolean)
   - [#isCreditCard](#iscreditcard)
   - [#isDataURI](#isdatauri)
   - [#isDate](#isdate)
   - [#isDinersClub](#isdinersclub)
   - [#isDiscover](#isdiscover)
   - [#isDomainName](#isdomainname)
   - [#isEmailAddress](#isemailaddress)
   - [#isEmpty](#isempty)
   - [#isEqual](#isequal)
   - [#isError](#iserror)
   - [#isExtensible](#isextensible)
   - [#isFloat](#isfloat)
   - [#isFrozen](#isfrozen)
   - [#isFunction](#isfunction)
   - [#isGenerator](#isgenerator)
   - [#isGeneratorFunction](#isgeneratorfunction)
   - [#isHexColor](#ishexcolor)
   - [#isHexadecimal](#ishexadecimal)
   - [#isIP](#isip)
   - [#isISBN](#isisbn)
   - [#isISIN](#isisin)
   - [#isISRC](#isisrc)
   - [#isISSN](#isissn)
   - [#isInteger](#isinteger)
   - [#isIterable](#isiterable)
   - [#isIterableIterator](#isiterableiterator)
   - [#isIterator](#isiterator)
   - [#isJCB](#isjcb)
   - [#isJSON](#isjson)
   - [#isLatitude](#islatitude)
   - [#isLength](#islength)
   - [#isLongitude](#islongitude)
   - [#isLuhn](#isluhn)
   - [#isMACAddress](#ismacaddress)
   - [#isMD5](#ismd5)
   - [#isMap](#ismap)
   - [#isMastercard](#ismastercard)
   - [#isMatch](#ismatch)
   - [#isMongoId](#ismongoid)
   - [#isNaN](#isnan)
   - [#isNull](#isnull)
   - [#isPhoneNumber](#isphonenumber)
   - [#isPlural](#isplural)
   - [#isPort](#isport)
   - [#isPostalCode](#ispostalcode)
   - [#isPrimitive](#isprimitive)
   - [#isPromise](#ispromise)
   - [#isPunctuation](#ispunctuation)
   - [#isRegExp](#isregexp)
   - [#isSHA1](#issha1)
   - [#isSHA256](#issha256)
   - [#isSHA384](#issha384)
   - [#isSHA512](#issha512)
   - [#isSealed](#issealed)
   - [#isSemVer](#issemver)
   - [#isSet](#isset)
   - [#isSingular](#issingular)
   - [#isString](#isstring)
   - [#isSymbol](#issymbol)
   - [#isTime](#istime)
   - [#isURL](#isurl)
   - [#isURN](#isurn)
   - [#isUUID](#isuuid)
   - [#isUndefined](#isundefined)
   - [#isVIN](#isvin)
   - [#isVisa](#isvisa)
   - [#isWeakMap](#isweakmap)
   - [#isWeakSet](#isweakset)
<a name=""></a>
 
<a name="scuba-squadvalidation"></a>
# @scuba-squad/validation
should have several functions.

```js
unit
  .object(index)
  .hasProperties(FUNCTIONS)
  .matchEach((value, key) => {
    return typeof value === 'function' && /^is[A-Z]/u.test(key);
  });
```

<a name="isafter"></a>
# #isAfter
should be a function.

```js
unit
  .function(isAfter);
```

should return true for dates.

```js
unit
  .bool(isAfter(Date.now() + 500))
  .isTrue()
  .bool(isAfter(new Date(), new Date(500)))
  .isTrue()
  .bool(isAfter(new Date('2010-02-01'), new Date('2010-01-01')))
  .isTrue();
```

should return true for objects.

```js
unit
  .bool(isAfter({
    y: 2011,
  }, {
    y: 2010,
    M: 6,
  }))
  .isTrue()
  .bool(isAfter({
    H: 5,
  }, {
    H: 4,
    m: 20,
  }))
  .isTrue()
  .bool(isAfter({
    a: 5,
    z: 80,
  }, {
    y: 2000,
  }))
  .isTrue();
```

should return true for numeric arrays.

```js
const now = new Date();
unit
  .bool(isAfter([now.getFullYear() + 1, now.getMonth(), now.getDate()]))
  .isTrue()
  .bool(isAfter([2011], [2010, 1, 6]))
  .isTrue()
  .bool(isAfter([2000, 6, 15, 5], [
    2000,
    6,
    15,
    4,
    20,
    0,
  ]))
  .isTrue();
```

should return true for integers.

```js
unit
  .bool(isAfter(2, 1))
  .isTrue()
  .bool(isAfter(234988, 234987))
  .isTrue()
  .bool(isAfter(-239873, -239874))
  .isTrue()
  .bool(isAfter(1, 0))
  .isTrue();
```

should return true for floats.

```js
unit
  .bool(isAfter(1.5, 1.4))
  .isTrue()
  .bool(isAfter(-0.2, -0.3))
  .isTrue()
  .bool(isAfter(234.6, 234.5))
  .isTrue()
  .bool(isAfter(55.00000000001, 55))
  .isTrue();
```

should return true for pasable strings.

```js
unit
  .bool(isAfter('2013-02-09', '2013-02-08'))
  .isTrue()
  .bool(isAfter('2013-W06-6', '2013-W06-5'))
  .isTrue()
  .bool(isAfter('2013-040', '2013-039'))
  .isTrue()
  .bool(isAfter('20130209', '20130208'))
  .isTrue()
  .bool(isAfter('2013W066', '2013W065'))
  .isTrue()
  .bool(isAfter('2013W07', '2013W06'))
  .isTrue()
  .bool(isAfter('2013051', '2013050'))
  .isTrue()
  .bool(isAfter('2013-02-08T10', '2013-02-08T09'))
  .isTrue()
  .bool(isAfter('2013-02-08 10', '2013-02-08 09'))
  .isTrue()
  .bool(isAfter('2013-02-08 09:31', '2013-02-08 09:30'))
  .isTrue()
  .bool(isAfter('2013-02-08 09:30:27', '2013-02-08 09:30:26'))
  .isTrue()
  .bool(isAfter('2013-02-08 09:30:26.124', '2013-02-08 09:30:26.123'))
  .isTrue()
  .bool(isAfter('2013-02-08 24:00:00.000', '2013-02-08 23:59:59.999'))
  .isTrue()
  .bool(isAfter('20130208T080910,124', '20130208T080910,123'))
  .isTrue()
  .bool(isAfter('20130208T080910.124', '20130208T080910.123'))
  .isTrue()
  .bool(isAfter('20130208T080911', '20130208T080910'))
  .isTrue()
  .bool(isAfter('20130208T0810', '20130208T0809'))
  .isTrue()
  .bool(isAfter('20130208T09', '20130208T08'))
  .isTrue()
  .bool(isAfter('2013-02-08 10', '2013-02-08 09'))
  .isTrue()
  .bool(isAfter('2013-W06-5 10', '2013-W06-5 09'))
  .isTrue()
  .bool(isAfter('2013-039 10', '2013-039 09'))
  .isTrue()
  .bool(isAfter('2013-02-08 09+06:00', '2013-02-08 09+07:00'))
  .isTrue()
  .bool(isAfter('2013-02-08 09-0200', '2013-02-08 09-0100'))
  .isTrue()
  .bool(isAfter('2013-02-08 10Z', '2013-02-08 09Z'))
  .isTrue()
  .bool(isAfter('2013-02-08 09:30:26.123+06:00', '2013-02-08 09:30:26.123+07:00'))
  .isTrue()
  .bool(isAfter('2013-02-08 09:30:26.123+07', '2013-02-08 09:30:26.123+08'))
  .isTrue();
```

should return false for functions.

```js
unit
  .bool(isAfter(noop))
  .isFalse()
  .bool(isAfter(isAfter, noop))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isAfter(/asd/u))
  .isFalse()
  .bool(isAfter(/\d+/u))
  .isFalse()
  .bool(isAfter(/1/u))
  .isFalse()
  .bool(isAfter(new RegExp('3', 'u')))
  .isFalse();
```

should return false for non parsable strings.

```js
unit
  .bool(isAfter('adsf'))
  .isFalse()
  .bool(isAfter('34.6 is not valid'))
  .isFalse()
  .bool(isAfter('-45fg'))
  .isFalse();
```

should return false for non numeric arrays.

```js
unit
  .bool(isAfter(['a', 'b', 6, {}]))
  .isFalse()
  .bool(isAfter([5, 4, false, 'a']))
  .isFalse();
```

<a name="isall"></a>
# #isAll
should be a function.

```js
unit
  .function(isAll);
```

should return true for a value that passes truth test for provided functions.

```js
const test = [
  () => {
    return true;
  },
  (value) => {
    return value > 0;
  },
  (value) => {
    return value < 100;
  },
];
unit
  .bool(isAll(1, ...test))
  .isTrue()
  .bool(isAll(99, ...test))
  .isTrue()
  .bool(isAll(0.000001, ...test))
  .isTrue()
  .bool(isAll(99.99999, ...test))
  .isTrue();
```

should return true for a value that passes truth test for provided RegExp.

```js
const test = [
  /^\d+$/u,
  /5$/u,
];
unit
  .bool(isAll('15', ...test))
  .isTrue()
  .bool(isAll(5, ...test))
  .isTrue()
  .bool(isAll('09545', ...test))
  .isTrue();
```

should return true for a value that passes truth test for provided function references with additional arguments.

```js
const test = [
  'isDate',
  ['isBefore', '2050-01-01'],
  ['isAfter', '2000-01-01'],
];
unit
  .bool(isAll(new Date('2010-09-18'), ...test))
  .isTrue()
  .bool(isAll('2001-01-01', ...test))
  .isTrue()
  .bool(isAll(1526121842679, ...test))
  .isTrue()
  .bool(isAll({
    y: 2005,
  }, ...test))
  .isTrue();
```

should return false for a value that does not pass truth test for provided function references with additional arguments.

```js
const test = [
  'isDate',
  ['isBefore', '2000-02-01'],
  ['isAfter', '2000-01-01'],
];
unit
  .bool(isAll(new Date('2010-09-18'), ...test))
  .isFalse()
  .bool(isAll('2001-01-01', ...test))
  .isFalse()
  .bool(isAll(1526121842679, ...test))
  .isFalse()
  .bool(isAll({
    y: 2005,
  }, ...test))
  .isFalse();
```

should throw an error for any callable argument that can not be resolved to a function.

```js
unit
  .error(() => {
    return isAll(5, {});
  })
  .error(() => {
    return isAll(5, []);
  })
  .error(() => {
    return isAll(5, '5');
  })
  .error(() => {
    return isAll(5, 'nonExistantMethod');
  });
```

<a name="isalpha"></a>
# #isAlpha
should be a function.

```js
unit
  .function(isAlpha);
```

should return true for valid alpha only strings.

```js
unit
  .bool(isAlpha('aslkdjfh'))
  .isTrue()
  .bool(isAlpha('alsdiufhdsn'))
  .isTrue()
  .bool(isAlpha('qweidswekjsadkjbas'))
  .isTrue()
  .bool(isAlpha('dfkjhfkmnkckmbefawklndfs'))
  .isTrue()
  .bool(isAlpha('dh'))
  .isTrue()
  .bool(isAlpha('y'))
  .isTrue()
  .bool(isAlpha('adfsfoijdsfklfdskn'))
  .isTrue()
  .bool(isAlpha('awewiuhdfskjndsv'))
  .isTrue()
  .bool(isAlpha('sdflkhdfsknf'))
  .isTrue()
  .bool(isAlpha('sdkljhdslgldnfsf'))
  .isTrue()
  .bool(isAlpha('ekjhsdfkjdsf'))
  .isTrue()
  .bool(isAlpha('aweofhsdfdskfbn'))
  .isTrue()
  .bool(isAlpha('asdflkhdsmdsfkjds'))
  .isTrue()
  .bool(isAlpha('ewfkjfdslkdfskljdfs'))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isAlpha('we48tuer'))
  .isFalse()
  .bool(isAlpha('we[foewf]'))
  .isFalse()
  .bool(isAlpha('34w98uerj'))
  .isFalse()
  .bool(isAlpha('*&TYY'))
  .isFalse()
  .bool(isAlpha('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isAlpha('sdf.,.mdf'))
  .isFalse()
  .bool(isAlpha('we;o9tu49'))
  .isFalse()
  .bool(isAlpha('q23qo98441`'))
  .isFalse()
  .bool(isAlpha('ewr09ti34*&'))
  .isFalse()
  .bool(isAlpha('%sdkjvnnd'))
  .isFalse()
  .bool(isAlpha('=adkljfhsd'))
  .isFalse()
  .bool(isAlpha('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isAlpha('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isAlpha(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isAlpha(14))
  .isFalse()
  .bool(isAlpha(234987))
  .isFalse()
  .bool(isAlpha(-2398))
  .isFalse()
  .bool(isAlpha(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isAlpha(98.00007))
  .isFalse()
  .bool(isAlpha(-32407.3))
  .isFalse()
  .bool(isAlpha(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isAlpha(noop))
  .isFalse()
  .bool(isAlpha(isAlpha))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isAlpha(/asd/u))
  .isFalse()
  .bool(isAlpha(/\d+/u))
  .isFalse()
  .bool(isAlpha(/1/u))
  .isFalse()
  .bool(isAlpha(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isAlpha([]))
  .isFalse()
  .bool(isAlpha([1, 2, 3]))
  .isFalse()
  .bool(isAlpha(['a', 5, {}]))
  .isFalse();
```

should return false for null.

```js
unit
  .bool(isAlpha(null))
  .isFalse();
```

should return false for undefined.

```js
unit
  .bool(isAlpha())
  .isFalse()
  .bool(isAlpha(undefined))
  .isFalse();
```

<a name="isalphanumeric"></a>
# #isAlphaNumeric
should be a function.

```js
unit
  .function(isAlphaNumeric);
```

should return true for valid alphanumeric strings.

```js
unit
  .bool(isAlphaNumeric('aslkd4958jfh'))
  .isTrue()
  .bool(isAlphaNumeric('alsdiu2309fhdsn'))
  .isTrue()
  .bool(isAlphaNumeric('3lsdkfg80945'))
  .isTrue()
  .bool(isAlphaNumeric('34w98dfskjer'))
  .isTrue()
  .bool(isAlphaNumeric('2'))
  .isTrue()
  .bool(isAlphaNumeric('y'))
  .isTrue()
  .bool(isAlphaNumeric('34w98erhdf'))
  .isTrue()
  .bool(isAlphaNumeric('awewiuhdesfgkj4wi8efskjndsv'))
  .isTrue()
  .bool(isAlphaNumeric('34w98erfkuherh'))
  .isTrue()
  .bool(isAlphaNumeric('ewrituer89348'))
  .isTrue()
  .bool(isAlphaNumeric('elriterifgheri8t4'))
  .isTrue()
  .bool(isAlphaNumeric('eilrtyuer438of'))
  .isTrue()
  .bool(isAlphaNumeric('w48otuo4e8fh'))
  .isTrue()
  .bool(isAlphaNumeric('394wt348h'))
  .isTrue();
```

should return true for positive integers.

```js
unit
  .bool(isAlphaNumeric(14))
  .isTrue()
  .bool(isAlphaNumeric(234987))
  .isTrue()
  .bool(isAlphaNumeric(2398))
  .isTrue()
  .bool(isAlphaNumeric(2))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isAlphaNumeric('we48tue^r'))
  .isFalse()
  .bool(isAlphaNumeric('we[foewf]'))
  .isFalse()
  .bool(isAlphaNumeric('34w98ue&rj'))
  .isFalse()
  .bool(isAlphaNumeric('*&TYY'))
  .isFalse()
  .bool(isAlphaNumeric('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isAlphaNumeric('sdf.,.mdf'))
  .isFalse()
  .bool(isAlphaNumeric('we;o9tu49'))
  .isFalse()
  .bool(isAlphaNumeric('q23qo98441`'))
  .isFalse()
  .bool(isAlphaNumeric('ewr09ti34*&'))
  .isFalse()
  .bool(isAlphaNumeric('%sdkjvnnd'))
  .isFalse()
  .bool(isAlphaNumeric('=adkljfhsd'))
  .isFalse()
  .bool(isAlphaNumeric('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isAlphaNumeric('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isAlphaNumeric(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for negative integers.

```js
unit
  .bool(isAlphaNumeric(-1))
  .isFalse()
  .bool(isAlphaNumeric(-239874))
  .isFalse(0)
  .bool(isAlphaNumeric(-2397))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isAlphaNumeric(98.00007))
  .isFalse()
  .bool(isAlphaNumeric(-32407.3))
  .isFalse()
  .bool(isAlphaNumeric(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isAlphaNumeric(noop))
  .isFalse()
  .bool(isAlphaNumeric(isAlphaNumeric))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isAlphaNumeric(/asd/u))
  .isFalse()
  .bool(isAlphaNumeric(/\d+/u))
  .isFalse()
  .bool(isAlphaNumeric(/1/u))
  .isFalse()
  .bool(isAlphaNumeric(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isAlphaNumeric([]))
  .isFalse()
  .bool(isAlphaNumeric([1, 2, 3]))
  .isFalse()
  .bool(isAlphaNumeric(['a', 5, {}]))
  .isFalse();
```

should return false for null.

```js
unit
  .bool(isAlphaNumeric(null))
  .isFalse();
```

should return false for undefined.

```js
unit
  .bool(isAlphaNumeric())
  .isFalse()
  .bool(isAlphaNumeric(undefined))
  .isFalse();
```

<a name="isamericanexpress"></a>
# #isAmericanExpress
should be a function.

```js
unit
  .function(isAmericanExpress);
```

should return true for valid account numbers.

```js
unit
  .bool(isAmericanExpress('378282246310005'))
  .isTrue()
  .bool(isAmericanExpress('371449635398431'))
  .isTrue()
  .bool(isAmericanExpress('378734493671000'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isAmericanExpress('378282246310004'))
  .isFalse()
  .bool(isAmericanExpress('378282246310006'))
  .isFalse()
  .bool(isAmericanExpress('371449635398430'))
  .isFalse()
  .bool(isAmericanExpress('371449635398432'))
  .isFalse()
  .bool(isAmericanExpress('5610591081018250'))
  .isFalse()
  .bool(isAmericanExpress('30569309025904'))
  .isFalse()
  .bool(isAmericanExpress('6011111111111117'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isAmericanExpress(14))
  .isFalse()
  .bool(isAmericanExpress(234987))
  .isFalse()
  .bool(isAmericanExpress(-2398))
  .isFalse()
  .bool(isAmericanExpress(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isAmericanExpress(98.00007))
  .isFalse()
  .bool(isAmericanExpress(-32407.3))
  .isFalse()
  .bool(isAmericanExpress(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isAmericanExpress(noop))
  .isFalse()
  .bool(isAmericanExpress(isAmericanExpress))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isAmericanExpress('adsf'))
  .isFalse()
  .bool(isAmericanExpress('34.t'))
  .isFalse()
  .bool(isAmericanExpress('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isAmericanExpress(/asd/u))
  .isFalse()
  .bool(isAmericanExpress(/\d+/u))
  .isFalse()
  .bool(isAmericanExpress(/1/u))
  .isFalse()
  .bool(isAmericanExpress(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isAmericanExpress([]))
  .isFalse()
  .bool(isAmericanExpress([1, 2, 3]))
  .isFalse()
  .bool(isAmericanExpress(['a', 5, {}]))
  .isFalse();
```

<a name="isany"></a>
# #isAny
should be a function.

```js
unit
  .function(isAny);
```

should return true for a value that passes truth test for provided functions.

```js
const test = [
  (value) => {
    return typeof value === 'string';
  },
  (value) => {
    return typeof value === 'number';
  },
  (value) => {
    return typeof value === 'boolean';
  },
];
unit
  .bool(isAny('hello', ...test))
  .isTrue()
  .bool(isAny(1, ...test))
  .isTrue()
  .bool(isAny(true, ...test))
  .isTrue()
  .bool(isAny(false, ...test))
  .isTrue();
```

should return true for a value that passes truth test for provided RegExp.

```js
const test = [
  /^\d+$/u,
  /^hello/iu,
];
unit
  .bool(isAny('hello', ...test))
  .isTrue()
  .bool(isAny(5, ...test))
  .isTrue()
  .bool(isAny('0954', ...test))
  .isTrue();
```

should return true for a value that passes truth test for provided function references.

```js
const test = [
  'isDate',
  'isString',
  'isNull',
  'isUndefined',
];
unit
  .bool(isAny(new Date('2010-09-18'), ...test))
  .isTrue()
  .bool(isAny('string here', ...test))
  .isTrue()
  .bool(isAny(null, ...test))
  .isTrue()
  .bool(isAny(undefined, ...test))
  .isTrue();
```

should return false for a value that does not pass truth test for provided function references.

```js
const test = ['isURL', 'isNaN', ['isBefore', 5]];
unit
  .bool(isAny(new Date(), ...test))
  .isFalse()
  .bool(isAny('string here', ...test))
  .isFalse()
  .bool(isAny(3738, ...test))
  .isFalse()
  .bool(isAny(true, ...test))
  .isFalse();
```

should throw an error for any callable argument that can not be resolved to a function.

```js
unit
  .error(() => {
    return isAny(5, {});
  })
  .error(() => {
    return isAny(5, []);
  })
  .error(() => {
    return isAny(5, '5');
  })
  .error(() => {
    return isAny(5, 'nonExistantMethod');
  });
```

<a name="isarguments"></a>
# #isArguments
should be a function.

```js
unit
  .function(isArguments);
```

should return true for arguments.

```js
unit
  .bool(isArguments(arguments)) // eslint-disable-line prefer-rest-params
  .isTrue();
```

should return false for arrays.

```js
unit
  .bool(isArguments([]))
  .isFalse()
  .bool(isArguments([1, 2]))
  .isFalse()
  .bool(isArguments(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isArguments(1))
  .isFalse()
  .bool(isArguments(234987))
  .isFalse()
  .bool(isArguments(-239874))
  .isFalse()
  .bool(isArguments(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isArguments(1.1))
  .isFalse()
  .bool(isArguments(-0.4))
  .isFalse()
  .bool(isArguments(234.4))
  .isFalse()
  .bool(isArguments(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isArguments(noop))
  .isFalse()
  .bool(isArguments(isArguments))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isArguments('adsf'))
  .isFalse()
  .bool(isArguments('34.6'))
  .isFalse()
  .bool(isArguments('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isArguments(/asd/u))
  .isFalse()
  .bool(isArguments(/\d+/u))
  .isFalse()
  .bool(isArguments(/1/u))
  .isFalse()
  .bool(isArguments(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isArguments({}))
  .isFalse()
  .bool(isArguments(new String('asd')))
  .isFalse()
  .bool(isArguments({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isArguments(new Set()))
  .isFalse()
  .bool(isArguments(new Set().add(1)))
  .isFalse()
  .bool(isArguments(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isarray"></a>
# #isArray
should be a function.

```js
unit
  .function(isArray);
```

should return true for arrays.

```js
unit
  .bool(isArray([]))
  .isTrue()
  .bool(isArray([1, 2]))
  .isTrue()
  .bool(isArray(['a', {}, 6]))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isArray(1))
  .isFalse()
  .bool(isArray(234987))
  .isFalse()
  .bool(isArray(-239874))
  .isFalse()
  .bool(isArray(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isArray(1.1))
  .isFalse()
  .bool(isArray(-0.4))
  .isFalse()
  .bool(isArray(234.4))
  .isFalse()
  .bool(isArray(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isArray(noop))
  .isFalse()
  .bool(isArray(isArray))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isArray('adsf'))
  .isFalse()
  .bool(isArray('34.6'))
  .isFalse()
  .bool(isArray('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isArray(/asd/u))
  .isFalse()
  .bool(isArray(/\d+/u))
  .isFalse()
  .bool(isArray(/1/u))
  .isFalse()
  .bool(isArray(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isArray({}))
  .isFalse()
  .bool(isArray(new String('asd')))
  .isFalse()
  .bool(isArray({
    a: 5,
  }))
  .isFalse();
```

should return false for Map.

```js
unit
  .bool(isArray(new Map()))
  .isFalse()
  .bool(isArray(new Map([['a', 5], ['b', '$']])))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isArray(new Set()))
  .isFalse()
  .bool(isArray(new Set().add(1)))
  .isFalse()
  .bool(isArray(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isascii"></a>
# #isAscii
should be a function.

```js
unit
  .function(isAscii);
```

should return true for valid ascii only strings.

```js
unit
  .bool(isAscii('3498tuyawe;ofewh;'))
  .isTrue()
  .bool(isAscii('w3l4895tyew;fhaw3ori'))
  .isTrue()
  .bool(isAscii(';29348[-4  u23r120eiu]'))
  .isTrue()
  .bool(isAscii('q;230958iQ[E2;3O72  P4"]'))
  .isTrue()
  .bool(isAscii('~!@#$%^&*()_+|}{POIUYTREWQASDFGHJKL:"?><MNBVCXZ"}'))
  .isTrue()
  .bool(isAscii('qoe89fywalklfhe'))
  .isTrue()
  .bool(isAscii('q2[309ruawd;fgheher;]'))
  .isTrue()
  .bool(isAscii('w3;4o9t340r9u34'))
  .isTrue()
  .bool(isAscii(';w3outwepu'))
  .isTrue()
  .bool(isAscii('w3o45q[0ru32[]]'))
  .isTrue()
  .bool(isAscii('w34iou3q9ru32;r'))
  .isTrue()
  .bool(isAscii('q;o3ur[ru0340[]]'))
  .isTrue()
  .bool(isAscii(';q32ou3p49y934pu'))
  .isTrue()
  .bool(isAscii('2qi9389ry34pu439'))
  .isTrue();
```

should return true for integers.

```js
unit
  .bool(isAscii(14))
  .isTrue()
  .bool(isAscii(234987))
  .isTrue()
  .bool(isAscii(-2398))
  .isTrue()
  .bool(isAscii(2))
  .isTrue();
```

should return true for floats.

```js
unit
  .bool(isAscii(98.00007))
  .isTrue()
  .bool(isAscii(-32407.3))
  .isTrue()
  .bool(isAscii(0.1))
  .isTrue();
```

should return true for functions.

```js
unit
  .bool(isAscii(noop))
  .isTrue()
  .bool(isAscii(isAscii))
  .isTrue();
```

should return true for regexs.

```js
unit
  .bool(isAscii(/asd/u))
  .isTrue()
  .bool(isAscii(/\d+/u))
  .isTrue()
  .bool(isAscii(/1/u))
  .isTrue()
  .bool(isAscii(new RegExp('3', 'u')))
  .isTrue();
```

should return true for arrays.

```js
unit
  .bool(isAscii(['*']))
  .isTrue()
  .bool(isAscii([1, 2, 3]))
  .isTrue()
  .bool(isAscii(['a', 5, {}]))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isAscii('we48¡tuer'))
  .isFalse()
  .bool(isAscii('we[f¢oewf]'))
  .isFalse()
  .bool(isAscii('34w98¤uerj'))
  .isFalse()
  .bool(isAscii('*&T§YY'))
  .isFalse()
  .bool(isAscii('ser¨reg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isAscii('sdf.,.md«f'))
  .isFalse()
  .bool(isAscii('we;o®9tu49'))
  .isFalse()
  .bool(isAscii('q23qo¼98441`'))
  .isFalse()
  .bool(isAscii('ewr0Æ9ti34*&'))
  .isFalse()
  .bool(isAscii('%sdk×jvnnd'))
  .isFalse()
  .bool(isAscii('=adklãjfhsd'))
  .isFalse()
  .bool(isAscii('sadk÷jfh{sdkjf}'))
  .isFalse()
  .bool(isAscii('awekΛlhd[asldkfjsd]'))
  .isFalse()
  .bool(isAscii(',foiβadfoihf<lkewf'))
  .isFalse();
```

<a name="isbase64"></a>
# #isBase64
should be a function.

```js
unit
  .function(isBase64);
```

should return true for valid base64 encoded strings.

```js
unit
  .bool(isBase64('aifrledy'))
  .isTrue()
  .bool(isBase64('a83k/ts='))
  .isTrue()
  .bool(isBase64('eidnw9k3nhtl'))
  .isTrue()
  .bool(isBase64('s93jsla1un/t'))
  .isTrue()
  .bool(isBase64('dh=='))
  .isTrue()
  .bool(isBase64('tlf='))
  .isTrue()
  .bool(isBase64('qnothd7lk3nk'))
  .isTrue();
```

should return true for positive integers.

```js
unit
  .bool(isBase64(1401))
  .isTrue()
  .bool(isBase64(23498739))
  .isTrue()
  .bool(isBase64(2398))
  .isTrue()
  .bool(isBase64(2570))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isBase64('we48tuer='))
  .isFalse()
  .bool(isBase64('we[foewf]'))
  .isFalse()
  .bool(isBase64('34w98uerj'))
  .isFalse()
  .bool(isBase64('*&TYY'))
  .isFalse()
  .bool(isBase64('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isBase64('sdf.,.mdf'))
  .isFalse()
  .bool(isBase64('we;o9tu49'))
  .isFalse()
  .bool(isBase64('q23qo98441`'))
  .isFalse()
  .bool(isBase64('ewr09ti34*&'))
  .isFalse()
  .bool(isBase64('%sdkjvnnd'))
  .isFalse()
  .bool(isBase64('=adkljfhsd'))
  .isFalse()
  .bool(isBase64('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isBase64('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isBase64(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for negative integers.

```js
unit
  .bool(isBase64(-14))
  .isFalse()
  .bool(isBase64(-2349874))
  .isFalse()
  .bool(isBase64(-2398))
  .isFalse()
  .bool(isBase64(-2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isBase64(98.00007))
  .isFalse()
  .bool(isBase64(-32407.3))
  .isFalse()
  .bool(isBase64(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isBase64(noop))
  .isFalse()
  .bool(isBase64(isBase64))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isBase64(/asd/u))
  .isFalse()
  .bool(isBase64(/\d+/u))
  .isFalse()
  .bool(isBase64(/1/u))
  .isFalse()
  .bool(isBase64(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isBase64([]))
  .isFalse()
  .bool(isBase64([1, 2, 3]))
  .isFalse()
  .bool(isBase64(['a', 5, {}]))
  .isFalse();
```

<a name="isbefore"></a>
# #isBefore
should be a function.

```js
unit
  .function(isBefore);
```

should return true for dates.

```js
unit
  .bool(isBefore(Date.now() - 500))
  .isTrue()
  .bool(isBefore(new Date(500), new Date()))
  .isTrue()
  .bool(isBefore(new Date('2010-01-01'), new Date('2010-02-01')))
  .isTrue();
```

should return true for objects.

```js
unit
  .bool(isBefore({
    y: 2001,
  }, {
    y: 2010,
    M: 6,
  }))
  .isTrue()
  .bool(isBefore({
    H: 4,
  }, {
    H: 4,
    m: 20,
  }))
  .isTrue()
  .bool(isBefore({
    a: 5,
    z: 80,
  }, {
    y: 9999,
  }))
  .isTrue();
```

should return true for numeric arrays.

```js
const now = new Date();
unit
  .bool(isBefore([
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ]))
  .isTrue()
  .bool(isBefore([2010, 1, 6]))
  .isTrue()
  .bool(isBefore([
    2000,
    6,
    15,
    4,
    20,
    0,
  ]))
  .isTrue();
```

should return true for integers.

```js
unit
  .bool(isBefore(1, 2))
  .isTrue()
  .bool(isBefore(234987, 234988))
  .isTrue()
  .bool(isBefore(-239874, -239873))
  .isTrue()
  .bool(isBefore(0, 1))
  .isTrue();
```

should return true for floats.

```js
unit
  .bool(isBefore(1.4, 1.5))
  .isTrue()
  .bool(isBefore(-0.3, -0.2))
  .isTrue()
  .bool(isBefore(234.5, 234.6))
  .isTrue()
  .bool(isBefore(55, 55.00000000001))
  .isTrue();
```

should return true for pasable strings.

```js
unit
  .bool(isBefore('2013-02-08', '2013-02-09'))
  .isTrue()
  .bool(isBefore('2013-W06-5', '2013-W06-6'))
  .isTrue()
  .bool(isBefore('2013-039', '2013-040'))
  .isTrue()
  .bool(isBefore('20130208', '20130209'))
  .isTrue()
  .bool(isBefore('2013W065', '2013W066'))
  .isTrue()
  .bool(isBefore('2013W06', '2013W07'))
  .isTrue()
  .bool(isBefore('2013050', '2013051'))
  .isTrue()
  .bool(isBefore('2013-02-08T09', '2013-02-08T10'))
  .isTrue()
  .bool(isBefore('2013-02-08 09', '2013-02-08 10'))
  .isTrue()
  .bool(isBefore('2013-02-08 09:30', '2013-02-08 09:31'))
  .isTrue()
  .bool(isBefore('2013-02-08 09:30:26', '2013-02-08 09:30:27'))
  .isTrue()
  .bool(isBefore('2013-02-08 09:30:26.123', '2013-02-08 09:30:26.124'))
  .isTrue()
  .bool(isBefore('2013-02-08 23:59:59.999', '2013-02-08 24:00:00.000'))
  .isTrue()
  .bool(isBefore('20130208T080910,123', '20130208T080910,124'))
  .isTrue()
  .bool(isBefore('20130208T080910.123', '20130208T080910.124'))
  .isTrue()
  .bool(isBefore('20130208T080910', '20130208T080911'))
  .isTrue()
  .bool(isBefore('20130208T0809', '20130208T0810'))
  .isTrue()
  .bool(isBefore('20130208T08', '20130208T09'))
  .isTrue()
  .bool(isBefore('2013-02-08 09', '2013-02-08 10'))
  .isTrue()
  .bool(isBefore('2013-W06-5 09', '2013-W06-5 10'))
  .isTrue()
  .bool(isBefore('2013-039 09', '2013-039 10'))
  .isTrue()
  .bool(isBefore('2013-02-08 09+07:00', '2013-02-08 09+06:00'))
  .isTrue()
  .bool(isBefore('2013-02-08 09-0100', '2013-02-08 09-0200'))
  .isTrue()
  .bool(isBefore('2013-02-08 09Z', '2013-02-08 10Z'))
  .isTrue()
  .bool(isBefore('2013-02-08 09:30:26.123+07:00', '2013-02-08 09:30:26.123+06:00'))
  .isTrue()
  .bool(isBefore('2013-02-08 09:30:26.123+08', '2013-02-08 09:30:26.123+07'))
  .isTrue();
```

should return false for functions.

```js
unit
  .bool(isBefore(noop))
  .isFalse()
  .bool(isBefore(isBefore, noop))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isBefore(/asd/u))
  .isFalse()
  .bool(isBefore(/\d+/u))
  .isFalse()
  .bool(isBefore(/1/u))
  .isFalse()
  .bool(isBefore(new RegExp('3', 'u')))
  .isFalse();
```

should return false for non parsable strings.

```js
unit
  .bool(isBefore('adsf'))
  .isFalse()
  .bool(isBefore('34.6 is not valid'))
  .isFalse()
  .bool(isBefore('-45fg'))
  .isFalse();
```

should return false for non numeric arrays.

```js
unit
  .bool(isBefore(['a', 'b', 6, {}]))
  .isFalse()
  .bool(isBefore([5, 4, false, 'a']))
  .isFalse();
```

<a name="isboolean"></a>
# #isBoolean
should be a function.

```js
unit
  .function(isBoolean);
```

should return true for bools.

```js
unit
  .bool(isBoolean(true))
  .isTrue()
  .bool(isBoolean(false))
  .isTrue()
  .bool(isBoolean(new Boolean()))
  .isTrue()
  .bool(isBoolean(new Boolean(1)))
  .isTrue();
```

should return false for arrays.

```js
unit
  .bool(isBoolean([]))
  .isFalse()
  .bool(isBoolean([1, 2]))
  .isFalse()
  .bool(isBoolean(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isBoolean(1))
  .isFalse()
  .bool(isBoolean(234987))
  .isFalse()
  .bool(isBoolean(-239874))
  .isFalse()
  .bool(isBoolean(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isBoolean(1.1))
  .isFalse()
  .bool(isBoolean(-0.4))
  .isFalse()
  .bool(isBoolean(234.4))
  .isFalse()
  .bool(isBoolean(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isBoolean(noop))
  .isFalse()
  .bool(isBoolean(isBoolean))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isBoolean('adsf'))
  .isFalse()
  .bool(isBoolean('34.6'))
  .isFalse()
  .bool(isBoolean('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isBoolean(/asd/u))
  .isFalse()
  .bool(isBoolean(/\d+/u))
  .isFalse()
  .bool(isBoolean(/1/u))
  .isFalse()
  .bool(isBoolean(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isBoolean({}))
  .isFalse()
  .bool(isBoolean(new String('asd')))
  .isFalse()
  .bool(isBoolean({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isBoolean(new Set()))
  .isFalse()
  .bool(isBoolean(new Set().add(1)))
  .isFalse()
  .bool(isBoolean(new Set([1, 2, 3])))
  .isFalse();
```

<a name="iscreditcard"></a>
# #isCreditCard
should be a function.

```js
unit
  .function(isCreditCard);
```

should return true for valid account numbers.

```js
unit
  .bool(isCreditCard('378282246310005'))
  .isTrue()
  .bool(isCreditCard('371449635398431'))
  .isTrue()
  .bool(isCreditCard('378734493671000'))
  .isTrue()
  .bool(isCreditCard('30569309025904'))
  .isTrue()
  .bool(isCreditCard('38520000023237'))
  .isTrue()
  .bool(isCreditCard('6011111111111117'))
  .isTrue()
  .bool(isCreditCard('6011000990139424'))
  .isTrue()
  .bool(isCreditCard('3530111333300000'))
  .isTrue()
  .bool(isCreditCard('3566002020360505'))
  .isTrue()
  .bool(isCreditCard('5555555555554444'))
  .isTrue()
  .bool(isCreditCard('5105105105105100'))
  .isTrue()
  .bool(isCreditCard('4111111111111111'))
  .isTrue()
  .bool(isCreditCard('4012888888881881'))
  .isTrue()
  .bool(isCreditCard('4222222222222'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isCreditCard('378282246310004'))
  .isFalse()
  .bool(isCreditCard('371449635397431'))
  .isFalse()
  .bool(isCreditCard('378734494671000'))
  .isFalse()
  .bool(isCreditCard('30569209025904'))
  .isFalse()
  .bool(isCreditCard('38520100023237'))
  .isFalse()
  .bool(isCreditCard('6011161111111117'))
  .isFalse()
  .bool(isCreditCard('6011010990139424'))
  .isFalse()
  .bool(isCreditCard('3530161333300000'))
  .isFalse()
  .bool(isCreditCard('3566002070360505'))
  .isFalse()
  .bool(isCreditCard('5555555535554444'))
  .isFalse()
  .bool(isCreditCard('5105105155105100'))
  .isFalse()
  .bool(isCreditCard('4111111141111111'))
  .isFalse()
  .bool(isCreditCard('4012888848881881'))
  .isFalse()
  .bool(isCreditCard('4222222232222'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isCreditCard(14))
  .isFalse()
  .bool(isCreditCard(234987))
  .isFalse()
  .bool(isCreditCard(-2398))
  .isFalse()
  .bool(isCreditCard(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isCreditCard(98.00007))
  .isFalse()
  .bool(isCreditCard(-32407.3))
  .isFalse()
  .bool(isCreditCard(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isCreditCard(noop))
  .isFalse()
  .bool(isCreditCard(isCreditCard))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isCreditCard('adsf'))
  .isFalse()
  .bool(isCreditCard('34.t'))
  .isFalse()
  .bool(isCreditCard('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isCreditCard(/asd/u))
  .isFalse()
  .bool(isCreditCard(/\d+/u))
  .isFalse()
  .bool(isCreditCard(/1/u))
  .isFalse()
  .bool(isCreditCard(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isCreditCard([]))
  .isFalse()
  .bool(isCreditCard([1, 2, 3]))
  .isFalse()
  .bool(isCreditCard(['a', 5, {}]))
  .isFalse();
```

<a name="isdatauri"></a>
# #isDataURI
should be a function.

```js
unit
  .function(isDataURI);
```

should return true for valid datauri encoded strings.

```js
unit
  .bool(isDataURI('data:,'))
  .isTrue()
  .bool(isDataURI('data:text/vnd-example+xyz;foo=bar;base64,R0lGODdh'))
  .isTrue()
  .bool(isDataURI('data:text/plain;charset=UTF-8;page=21,the%20data:1234,5678'))
  .isTrue()
  .bool(isDataURI('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='))
  .isTrue()
  .bool(isDataURI('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC'))
  .isTrue()
  .bool(isDataURI('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDADIiJSwlHzIsKSw4NTI7S31RS0VFS5ltc1p9tZ++u7Kfr6zI4f/zyNT/16yv+v/9////////wfD/////////////2wBDATU4OEtCS5NRUZP/zq/O////////////////////////////////////////////////////////////////////wAARCAAYAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAQMAAgQF/8QAJRABAAIBBAEEAgMAAAAAAAAAAQIRAAMSITEEEyJBgTORUWFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOgM52xQDrjvAV5Xv0vfKUALlTQfeBm0HThMNHXkL0Lw/swN5qgA8yT4MCSOJV8mBz9Z05yfW8iSx7p4j+jA1aD6Wj7ZMzstsfvAas4UyRHvjrAkC9KhpLMClQntlqFc2X1gUj4viwVObKrddH9YDoHvuujAEuNV+bLwFS8XxdSr+Cq3Vf+4F5RgQl6ZR2p1eAzU/HX80YBYyJLCuexwJCO2O1bwCRidAfWBSctswbI12GAJT3yiwFR7+MBjGK2g/WAJR3FdF84E2rK5VR0YH/9k='))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isDataURI('data:we48tuer'))
  .isFalse()
  .bool(isDataURI('data:test,we[foewf]'))
  .isFalse()
  .bool(isDataURI('data:34w98uerj,'))
  .isFalse()
  .bool(isDataURI('*&TYY'))
  .isFalse()
  .bool(isDataURI('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isDataURI('sdf.,.mdf'))
  .isFalse()
  .bool(isDataURI('we;o9tu49'))
  .isFalse()
  .bool(isDataURI('q23qo98441`'))
  .isFalse()
  .bool(isDataURI('ewr09ti34*&'))
  .isFalse()
  .bool(isDataURI('%sdkjvnnd'))
  .isFalse()
  .bool(isDataURI('=adkljfhsd'))
  .isFalse()
  .bool(isDataURI('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isDataURI('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isDataURI(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isDataURI(14))
  .isFalse()
  .bool(isDataURI(234987))
  .isFalse()
  .bool(isDataURI(-2398))
  .isFalse()
  .bool(isDataURI(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isDataURI(98.00007))
  .isFalse()
  .bool(isDataURI(-32407.3))
  .isFalse()
  .bool(isDataURI(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isDataURI(noop))
  .isFalse()
  .bool(isDataURI(isDataURI))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isDataURI(/asd/u))
  .isFalse()
  .bool(isDataURI(/\d+/u))
  .isFalse()
  .bool(isDataURI(/1/u))
  .isFalse()
  .bool(isDataURI(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isDataURI([]))
  .isFalse()
  .bool(isDataURI([1, 2, 3]))
  .isFalse()
  .bool(isDataURI(['a', 5, {}]))
  .isFalse();
```

<a name="isdate"></a>
# #isDate
should be a function.

```js
unit
  .function(isDate);
```

should return true for dates.

```js
unit
  .bool(isDate(new Date()))
  .isTrue()
  .bool(isDate(new Date(500)))
  .isTrue()
  .bool(isDate(new Date('2010-01-01')))
  .isTrue()
  .bool(isDate(Date.now()))
  .isTrue();
```

should return true for objects.

```js
unit
  .bool(isDate({}))
  .isTrue()
  .bool(isDate({
    y: 2010,
    M: 6,
  }))
  .isTrue()
  .bool(isDate({
    H: 4,
    m: 20,
  }))
  .isTrue()
  .bool(isDate({
    a: 5,
    z: 80,
  }))
  .isTrue();
```

should return true for numeric arrays.

```js
unit
  .bool(isDate([]))
  .isTrue()
  .bool(isDate([2010, 1, 6]))
  .isTrue()
  .bool(isDate([
    2000,
    6,
    15,
    4,
    20,
    0,
  ]))
  .isTrue();
```

should return true for integers.

```js
unit
  .bool(isDate(1))
  .isTrue()
  .bool(isDate(234987))
  .isTrue()
  .bool(isDate(-239874))
  .isTrue()
  .bool(isDate(0))
  .isTrue();
```

should return true for floats.

```js
unit
  .bool(isDate(1.1))
  .isTrue()
  .bool(isDate(-0.4))
  .isTrue()
  .bool(isDate(234.4))
  .isTrue()
  .bool(isDate(54.00000000001))
  .isTrue();
```

should return true for pasable strings.

```js
unit
  .bool(isDate('2013-02-08'))
  .isTrue()
  .bool(isDate('2013-W06-5'))
  .isTrue()
  .bool(isDate('2013-039'))
  .isTrue()
  .bool(isDate('20130208'))
  .isTrue()
  .bool(isDate('2013W065'))
  .isTrue()
  .bool(isDate('2013W06'))
  .isTrue()
  .bool(isDate('2013050'))
  .isTrue()
  .bool(isDate('2013-02-08T09'))
  .isTrue()
  .bool(isDate('2013-02-08 09'))
  .isTrue()
  .bool(isDate('2013-02-08 09:30'))
  .isTrue()
  .bool(isDate('2013-02-08 09:30:26'))
  .isTrue()
  .bool(isDate('2013-02-08 09:30:26.123'))
  .isTrue()
  .bool(isDate('2013-02-08 24:00:00.000'))
  .isTrue()
  .bool(isDate('20130208T080910,123'))
  .isTrue()
  .bool(isDate('20130208T080910.123'))
  .isTrue()
  .bool(isDate('20130208T080910'))
  .isTrue()
  .bool(isDate('20130208T0809'))
  .isTrue()
  .bool(isDate('20130208T08'))
  .isTrue()
  .bool(isDate('2013-02-08 09'))
  .isTrue()
  .bool(isDate('2013-W06-5 09'))
  .isTrue()
  .bool(isDate('2013-039 09'))
  .isTrue()
  .bool(isDate('2013-02-08 09+07:00'))
  .isTrue()
  .bool(isDate('2013-02-08 09-0100'))
  .isTrue()
  .bool(isDate('2013-02-08 09Z'))
  .isTrue()
  .bool(isDate('2013-02-08 09:30:26.123+07:00'))
  .isTrue()
  .bool(isDate('2013-02-08 09:30:26.123+07'))
  .isTrue();
```

should return false for functions.

```js
unit
  .bool(isDate(noop))
  .isFalse()
  .bool(isDate(isDate))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isDate(/asd/u))
  .isFalse()
  .bool(isDate(/\d+/u))
  .isFalse()
  .bool(isDate(/1/u))
  .isFalse()
  .bool(isDate(new RegExp('3', 'u')))
  .isFalse();
```

should return false for non parsable strings.

```js
unit
  .bool(isDate('adsf'))
  .isFalse()
  .bool(isDate('34.6 is not valid'))
  .isFalse()
  .bool(isDate('-45fg'))
  .isFalse();
```

should return false for non numeric arrays.

```js
unit
  .bool(isDate(['a', 'b', 6, {}]))
  .isFalse()
  .bool(isDate([5, 4, false, 'a']))
  .isFalse();
```

<a name="isdinersclub"></a>
# #isDinersClub
should be a function.

```js
unit
  .function(isDinersClub);
```

should return true for valid account numbers.

```js
unit
  .bool(isDinersClub('30569309025904'))
  .isTrue()
  .bool(isDinersClub('38520000023237'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isDinersClub('378282246310004'))
  .isFalse()
  .bool(isDinersClub('378282246310006'))
  .isFalse()
  .bool(isDinersClub('371449635398430'))
  .isFalse()
  .bool(isDinersClub('371449635398432'))
  .isFalse()
  .bool(isDinersClub('5610591081018250'))
  .isFalse()
  .bool(isDinersClub('30569309025903'))
  .isFalse()
  .bool(isDinersClub('6011111111111117'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isDinersClub(14))
  .isFalse()
  .bool(isDinersClub(234987))
  .isFalse()
  .bool(isDinersClub(-2398))
  .isFalse()
  .bool(isDinersClub(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isDinersClub(98.00007))
  .isFalse()
  .bool(isDinersClub(-32407.3))
  .isFalse()
  .bool(isDinersClub(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isDinersClub(noop))
  .isFalse()
  .bool(isDinersClub(isDinersClub))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isDinersClub('adsf'))
  .isFalse()
  .bool(isDinersClub('34.t'))
  .isFalse()
  .bool(isDinersClub('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isDinersClub(/asd/u))
  .isFalse()
  .bool(isDinersClub(/\d+/u))
  .isFalse()
  .bool(isDinersClub(/1/u))
  .isFalse()
  .bool(isDinersClub(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isDinersClub([]))
  .isFalse()
  .bool(isDinersClub([1, 2, 3]))
  .isFalse()
  .bool(isDinersClub(['a', 5, {}]))
  .isFalse();
```

<a name="isdiscover"></a>
# #isDiscover
should be a function.

```js
unit
  .function(isDiscover);
```

should return true for valid account numbers.

```js
unit
  .bool(isDiscover('6011111111111117'))
  .isTrue()
  .bool(isDiscover('6011000990139424'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isDiscover('378282246310004'))
  .isFalse()
  .bool(isDiscover('378282246310006'))
  .isFalse()
  .bool(isDiscover('371449635398430'))
  .isFalse()
  .bool(isDiscover('371449635398432'))
  .isFalse()
  .bool(isDiscover('5610591081018250'))
  .isFalse()
  .bool(isDiscover('30569309025904'))
  .isFalse()
  .bool(isDiscover('6011111111111116'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isDiscover(14))
  .isFalse()
  .bool(isDiscover(234987))
  .isFalse()
  .bool(isDiscover(-2398))
  .isFalse()
  .bool(isDiscover(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isDiscover(98.00007))
  .isFalse()
  .bool(isDiscover(-32407.3))
  .isFalse()
  .bool(isDiscover(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isDiscover(noop))
  .isFalse()
  .bool(isDiscover(isDiscover))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isDiscover('adsf'))
  .isFalse()
  .bool(isDiscover('34.t'))
  .isFalse()
  .bool(isDiscover('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isDiscover(/asd/u))
  .isFalse()
  .bool(isDiscover(/\d+/u))
  .isFalse()
  .bool(isDiscover(/1/u))
  .isFalse()
  .bool(isDiscover(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isDiscover([]))
  .isFalse()
  .bool(isDiscover([1, 2, 3]))
  .isFalse()
  .bool(isDiscover(['a', 5, {}]))
  .isFalse();
```

<a name="isdomainname"></a>
# #isDomainName
should be a function.

```js
unit
  .function(isDomainName);
```

should return true for valid domain name strings.

```js
unit
  .bool(isDomainName('foo.com'))
  .isTrue()
  .bool(isDomainName('www.example.com'))
  .isTrue()
  .bool(isDomainName('✪df.ws'))
  .isTrue()
  .bool(isDomainName('⌘.ws'))
  .isTrue()
  .bool(isDomainName('☺.damowmow.com'))
  .isTrue()
  .bool(isDomainName('code.google.com'))
  .isTrue()
  .bool(isDomainName('j.mp'))
  .isTrue()
  .bool(isDomainName('مثال.إختبار'))
  .isTrue()
  .bool(isDomainName('例子.测试'))
  .isTrue()
  .bool(isDomainName('1337.net'))
  .isTrue()
  .bool(isDomainName('a.b-c.de'))
  .isTrue();
```

should return false for valid international domains when flag is false.

```js
unit
  .bool(isDomainName('✪df.ws', false))
  .isFalse()
  .bool(isDomainName('⌘.ws', false))
  .isFalse()
  .bool(isDomainName('☺.damowmow.com', false))
  .isFalse()
  .bool(isDomainName('مثال.إختبار', false))
  .isFalse()
  .bool(isDomainName('例子.测试', false))
  .isFalse();
```

should return false for invalid domain name strings.

```js
unit
  .bool(isDomainName(''))
  .isFalse()
  .bool(isDomainName('?'))
  .isFalse()
  .bool(isDomainName('??'))
  .isFalse()
  .bool(isDomainName('?.??'))
  .isFalse()
  .bool(isDomainName('#'))
  .isFalse()
  .bool(isDomainName('##'))
  .isFalse()
  .bool(isDomainName('##.$/'))
  .isFalse()
  .bool(isDomainName('foo bar'))
  .isFalse()
  .bool(isDomainName('//'))
  .isFalse()
  .bool(isDomainName('//a'))
  .isFalse()
  .bool(isDomainName('///a'))
  .isFalse()
  .bool(isDomainName('///'))
  .isFalse()
  .bool(isDomainName('a'))
  .isFalse()
  .bool(isDomainName('.foo.com'))
  .isFalse()
  .bool(isDomainName('1234'))
  .isFalse()
  .bool(isDomainName('test'))
  .isFalse()
  .bool(isDomainName(' shouldfail.com'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isDomainName(14))
  .isFalse()
  .bool(isDomainName(234987))
  .isFalse()
  .bool(isDomainName(-2398))
  .isFalse()
  .bool(isDomainName(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isDomainName(98.00007))
  .isFalse()
  .bool(isDomainName(-32407.3))
  .isFalse()
  .bool(isDomainName(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isDomainName(noop))
  .isFalse()
  .bool(isDomainName(isDomainName))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isDomainName(/asd/u))
  .isFalse()
  .bool(isDomainName(/\d+/u))
  .isFalse()
  .bool(isDomainName(/1/u))
  .isFalse()
  .bool(isDomainName(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isDomainName([]))
  .isFalse()
  .bool(isDomainName([1, 2, 3]))
  .isFalse()
  .bool(isDomainName(['a', 5, {}]))
  .isFalse();
```

<a name="isemailaddress"></a>
# #isEmailAddress
should be a function.

```js
unit
  .function(isEmailAddress);
```

should return true for valid email address strings.

```js
unit
  .bool(isEmailAddress('email@example.com'))
  .isTrue()
  .bool(isEmailAddress('firstname.lastname@example.com'))
  .isTrue()
  .bool(isEmailAddress('email@subdomain.example.com'))
  .isTrue()
  .bool(isEmailAddress('firstname+lastname@example.com'))
  .isTrue()
  .bool(isEmailAddress('disposable.style.email.with+symbol@example.com'))
  .isTrue()
  .bool(isEmailAddress('other.email-with-hyphen@example.com'))
  .isTrue()
  .bool(isEmailAddress('fully-qualified-domain@example.com'))
  .isTrue()
  .bool(isEmailAddress('user.name+tag+sorting@example.com'))
  .isTrue()
  .bool(isEmailAddress('example-indeed@strange-example.com'))
  .isTrue()
  .bool(isEmailAddress('x@example.com'))
  .isTrue()
  .bool(isEmailAddress('1234567890@example.com'))
  .isTrue()
  .bool(isEmailAddress('email@example-one.com'))
  .isTrue()
  .bool(isEmailAddress('_______@example.com'))
  .isTrue()
  .bool(isEmailAddress('email@example.name'))
  .isTrue()
  .bool(isEmailAddress('email@example.museum'))
  .isTrue()
  .bool(isEmailAddress('email@example.co.jp'))
  .isTrue()
  .bool(isEmailAddress('#!$%&\'*+-/=?^_`{}|~@example.org'))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isEmailAddress('Abc.example.com'))
  .isFalse()
  .bool(isEmailAddress('A@b@c@example.com'))
  .isFalse()
  .bool(isEmailAddress('a"b(c)d,e:f;g<h>i[jk]l@example.com'))
  .isFalse()
  .bool(isEmailAddress('just"not"right@example.com'))
  .isFalse()
  .bool(isEmailAddress('this is"notallowed@example.com'))
  .isFalse()
  .bool(isEmailAddress('this\\ still\\"not\\allowed@example.com'))
  .isFalse()
  .bool(isEmailAddress('john..doe@example.com'))
  .isFalse()
  .bool(isEmailAddress('john.doe@example..com'))
  .isFalse()
  .bool(isEmailAddress(' email@example.com'))
  .isFalse()
  .bool(isEmailAddress('email@example.com '))
  .isFalse()
  .bool(isEmailAddress('" "@example.org'))
  .isFalse()
  .bool(isEmailAddress('1234567890123456789012345678901234567890123456789012345678901234+x@example.com'))
  .isFalse()
  .bool(isEmailAddress('email@[123.123.123.123]')) // technically valid but discouraged
  .isFalse()
  .bool(isEmailAddress('user@[2001:DB8::1]')) // technically valid but discouraged
  .isFalse()
  .bool(isEmailAddress('"very.(),:;<>[]\\".VERY.\\"very@\\ \\"very\\".unusual"@strange.example.com')) // technically valid but discouraged
  .isFalse()
  .bool(isEmailAddress('user@localserver')) // technically valid but discouraged
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isEmailAddress(14))
  .isFalse()
  .bool(isEmailAddress(234987))
  .isFalse()
  .bool(isEmailAddress(-2398))
  .isFalse()
  .bool(isEmailAddress(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isEmailAddress(98.00007))
  .isFalse()
  .bool(isEmailAddress(-32407.3))
  .isFalse()
  .bool(isEmailAddress(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isEmailAddress(noop))
  .isFalse()
  .bool(isEmailAddress(isEmailAddress))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isEmailAddress(/asd/u))
  .isFalse()
  .bool(isEmailAddress(/\d+/u))
  .isFalse()
  .bool(isEmailAddress(/1/u))
  .isFalse()
  .bool(isEmailAddress(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isEmailAddress([]))
  .isFalse()
  .bool(isEmailAddress([1, 2, 3]))
  .isFalse()
  .bool(isEmailAddress(['a', 5, {}]))
  .isFalse();
```

<a name="isempty"></a>
# #isEmpty
should be a function.

```js
unit
  .function(isEmpty);
```

should return true for non iterable/enumerable objects.

```js
unit
  .bool(isEmpty({}))
  .isTrue()
  .bool(isEmpty([]))
  .isTrue()
  .bool(isEmpty(''))
  .isTrue();
```

should return true for integers.

```js
unit
  .bool(isEmpty(1))
  .isTrue()
  .bool(isEmpty(234987))
  .isTrue()
  .bool(isEmpty(-239874))
  .isTrue()
  .bool(isEmpty(0))
  .isTrue();
```

should return true for floats.

```js
unit
  .bool(isEmpty(1.1))
  .isTrue()
  .bool(isEmpty(-0.4))
  .isTrue()
  .bool(isEmpty(234.4))
  .isTrue()
  .bool(isEmpty(54.00000000001))
  .isTrue();
```

should return true for bools.

```js
unit
  .bool(isEmpty(true))
  .isTrue()
  .bool(isEmpty(false))
  .isTrue();
```

should return true for functions.

```js
unit
  .bool(isEmpty(noop))
  .isTrue()
  .bool(isEmpty(isEmpty))
  .isTrue();
```

should return true for regexs.

```js
unit
  .bool(isEmpty(/asd/u))
  .isTrue()
  .bool(isEmpty(/\d+/u))
  .isTrue()
  .bool(isEmpty(/1/u))
  .isTrue()
  .bool(isEmpty(new RegExp('3', 'u')))
  .isTrue();
```

should return false for arrays.

```js
unit
  .bool(isEmpty([1, 2]))
  .isFalse()
  .bool(isEmpty(['a', {}, 6]))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isEmpty('adsf'))
  .isFalse()
  .bool(isEmpty('34.6'))
  .isFalse()
  .bool(isEmpty('-45fg'))
  .isFalse();
```

should return false for enumerable objects.

```js
unit
  .bool(isEmpty(new String('asd')))
  .isFalse()
  .bool(isEmpty({
    a: 5,
  }))
  .isFalse();
```

<a name="isequal"></a>
# #isEqual
should be a function.

```js
unit
  .function(isEqual);
```

should return true for equal primatives.

```js
unit
  .bool(isEqual(null, null))
  .isTrue()
  .bool(isEqual(true, true))
  .isTrue()
  .bool(isEqual(false, false))
  .isTrue()
  .bool(isEqual(5, 5))
  .isTrue()
  .bool(isEqual('hi', 'hi'))
  .isTrue()
  .bool(isEqual(/\d/u, /\d/u))
  .isTrue()
  .bool(isEqual([1, 2, 3], [1, 2, 3]))
  .isTrue();
```

should return true for equal primative and objects.

```js
unit
  .bool(isEqual(new Number(5), 5))
  .isTrue()
  .bool(isEqual(new String('hi'), 'hi'))
  .isTrue()
  .bool(isEqual(new Boolean(true), true))
  .isTrue()
  .bool(isEqual(new Boolean(false), false))
  .isTrue()
  .bool(isEqual(new RegExp('\\d', 'u'), /\d/u))
  .isTrue()
  .bool(isEqual(new Array(1, 2, 3), [1, 2, 3]))
  .isTrue();
```

should return true for equal objects.

```js
unit
  .bool(isEqual(new Date('2000-01-01'), new Date('2000-01-01')))
  .isTrue()
  .bool(isEqual(new Number(5), new Number(5)))
  .isTrue()
  .bool(isEqual(new String('a'), new String('a')))
  .isTrue()
  .bool(isEqual(new RegExp('asd', 'u'), new RegExp('asd', 'u')))
  .isTrue()
  .bool(isEqual(new Array(1, 2), new Array(1, 2)))
  .isTrue();
```

should return true for equal object literals.

```js
unit
  .bool(isEqual({}, {}))
  .isTrue()
  .bool(isEqual({
    a: 5,
  }, {
    a: 5,
  }))
  .isTrue()
  .bool(isEqual({
    z: 'hi',
  }, {
    z: 'hi',
  }))
  .isTrue();
```

should return false for non equal object literals.

```js
unit
  .bool(isEqual({
    a: 5,
  }, {
    a: 4,
  }))
  .isFalse()
  .bool(isEqual({
    a: 5,
  }, {
    a: 5,
    b: 6,
  }))
  .isFalse()
  .bool(isEqual({
    a: 5,
  }, {
    z: 'hi',
  }))
  .isFalse();
```

should return false for non equal primative and objects.

```js
unit
  .bool(isEqual(new Number(2), 5))
  .isFalse()
  .bool(isEqual(new String('hi'), 'bye'))
  .isFalse()
  .bool(isEqual(new Boolean(true), false))
  .isFalse()
  .bool(isEqual(new Boolean(false), true))
  .isFalse()
  .bool(isEqual(new RegExp('asd', 'iu'), /asd/u))
  .isFalse()
  .bool(isEqual(new Array(1, 2, 3), [1, 2]))
  .isFalse();
```

should return false for non equal primatives.

```js
unit
  .bool(isEqual(3, 5))
  .isFalse()
  .bool(isEqual('hi', 'Hi'))
  .isFalse()
  .bool(isEqual(true, false))
  .isFalse()
  .bool(isEqual(/asd/u, /asd/iu))
  .isFalse()
  .bool(isEqual([1, 2, 3], [1, 3, 2]))
  .isFalse();
```

<a name="iserror"></a>
# #isError
should be a function.

```js
unit
  .function(isError);
```

should return true for Errors.

```js
unit
  .bool(isError(new Error()))
  .isTrue()
  .bool(isError(new EvalError()))
  .isTrue()
  .bool(isError(new RangeError()))
  .isTrue()
  .bool(isError(new ReferenceError()))
  .isTrue()
  .bool(isError(new SyntaxError()))
  .isTrue()
  .bool(isError(new TypeError()))
  .isTrue()
  .bool(isError(new URIError()))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isError(1))
  .isFalse()
  .bool(isError(234987))
  .isFalse()
  .bool(isError(-239874))
  .isFalse()
  .bool(isError(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isError(1.1))
  .isFalse()
  .bool(isError(-0.4))
  .isFalse()
  .bool(isError(234.4))
  .isFalse()
  .bool(isError(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isError(noop))
  .isFalse()
  .bool(isError(isError))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isError('adsf'))
  .isFalse()
  .bool(isError('34.6'))
  .isFalse()
  .bool(isError('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isError(/asd/u))
  .isFalse()
  .bool(isError(/\d+/u))
  .isFalse()
  .bool(isError(/1/u))
  .isFalse()
  .bool(isError(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isError({}))
  .isFalse()
  .bool(isError(new String('asd')))
  .isFalse()
  .bool(isError({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isError([]))
  .isFalse()
  .bool(isError([1, 2, 3]))
  .isFalse()
  .bool(isError(['a', new Error(), {}]))
  .isFalse();
```

<a name="isextensible"></a>
# #isExtensible
should be a function.

```js
unit
  .function(isExtensible);
```

should return true for object literals.

```js
unit
  .bool(isExtensible({}))
  .isTrue()
  .bool(isExtensible({
    a: 5,
  }))
  .isTrue();
```

should return true for arrays.

```js
unit
  .bool(isExtensible([]))
  .isTrue()
  .bool(isExtensible([1, 2]))
  .isTrue()
  .bool(isExtensible(new Array('a', {}, 6)))
  .isTrue();
```

should return true for regexs.

```js
unit
  .bool(isExtensible(/asd/u))
  .isTrue()
  .bool(isExtensible(/\d+/u))
  .isTrue()
  .bool(isExtensible(/1/u))
  .isTrue()
  .bool(isExtensible(new RegExp('3', 'u')))
  .isTrue();
```

should return true for functions.

```js
unit
  .bool(isExtensible(noop))
  .isTrue()
  .bool(isExtensible(isExtensible))
  .isTrue();
```

should return true for Map.

```js
unit
  .bool(isExtensible(new Map()))
  .isTrue()
  .bool(isExtensible(new Map([['a', 5], ['b', '$']])))
  .isTrue();
```

should return true for Set.

```js
unit
  .bool(isExtensible(new Set()))
  .isTrue()
  .bool(isExtensible(new Set().add(1)))
  .isTrue()
  .bool(isExtensible(new Set([1, 2, 3])))
  .isTrue();
```

should return false for primitives.

```js
unit
  .bool(isExtensible(1))
  .isFalse()
  .bool(isExtensible(234987))
  .isFalse()
  .bool(isExtensible(-239874))
  .isFalse()
  .bool(isExtensible(0))
  .isFalse()
  .bool(isExtensible(1.1))
  .isFalse()
  .bool(isExtensible(-0.4))
  .isFalse()
  .bool(isExtensible(234.4))
  .isFalse()
  .bool(isExtensible(54.00000000001))
  .isFalse()
  .bool(isExtensible('adsf'))
  .isFalse()
  .bool(isExtensible('34.6'))
  .isFalse()
  .bool(isExtensible('-45fg'))
  .isFalse();
```

should return false for object with preventExtensions.

```js
unit
  .bool(isExtensible(Object.preventExtensions({
    a: 5,
  })))
  .isFalse()
  .bool(isExtensible(Object.preventExtensions(new String('hi'))))
  .isFalse();
```

should return false for sealed objects.

```js
unit
  .bool(isExtensible(Object.seal({
    a: 5,
  })))
  .isFalse()
  .bool(isExtensible(Object.seal(new String('hi'))))
  .isFalse();
```

should return false for frozen objects.

```js
unit
  .bool(isExtensible(Object.freeze({
    a: 5,
  })))
  .isFalse()
  .bool(isExtensible(Object.freeze(new String('hi'))))
  .isFalse();
```

<a name="isfloat"></a>
# #isFloat
should be a function.

```js
unit
  .function(isFloat);
```

should return true for valid floats.

```js
unit
  .bool(isFloat(1.4))
  .isTrue()
  .bool(isFloat(234987))
  .isTrue()
  .bool(isFloat(-2398.74))
  .isTrue()
  .bool(isFloat(2.0))
  .isTrue()
  .bool(isFloat(0, {
    safe: true,
  }))
  .isTrue();
```

should return true for parsable floats.

```js
unit
  .bool(isFloat('98.00007'))
  .isTrue()
  .bool(isFloat('-32407.'))
  .isTrue()
  .bool(isFloat('0.1'))
  .isTrue();
```

should return true for objects that stringify to floats.

```js
unit
  .bool(isFloat(new String('123')))
  .isTrue()
  .bool(isFloat(new BigNumber('345345')))
  .isTrue();
```

should return false for functions.

```js
unit
  .bool(isFloat(noop))
  .isFalse()
  .bool(isFloat(isFloat))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isFloat('adsf'))
  .isFalse()
  .bool(isFloat('34.t'))
  .isFalse()
  .bool(isFloat('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isFloat(/asd/u))
  .isFalse()
  .bool(isFloat(/\d+/u))
  .isFalse()
  .bool(isFloat(/1/u))
  .isFalse()
  .bool(isFloat(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isFloat([]))
  .isFalse()
  .bool(isFloat([1, 2, 3]))
  .isFalse()
  .bool(isFloat(['a', 5, {}]))
  .isFalse();
```

should return false for objects that dont stringify to a float.

```js
unit
  .bool(isFloat({}))
  .isFalse()
  .bool(isFloat(new String('asd')))
  .isFalse()
  .bool(isFloat({
    a: 5,
  }))
  .isFalse();
```

should return false for floats that are less than the min option.

```js
unit
  .bool(isFloat(45.5, {
    min: 50,
  }))
  .isFalse()
  .bool(isFloat(99.9, {
    min: 100,
  }))
  .isFalse()
  .bool(isFloat('5.5', {
    min: '5.501',
  }))
  .isFalse()
  .bool(isFloat(5.5, {
    min: 5.501,
  }))
  .isFalse();
```

should return false for floats that are greater than the max option.

```js
unit
  .bool(isFloat(45.5, {
    max: 45,
  }))
  .isFalse()
  .bool(isFloat(100.000001, {
    max: 100,
  }))
  .isFalse()
  .bool(isFloat('5.5', {
    max: '5.4999',
  }))
  .isFalse()
  .bool(isFloat(5.5, {
    max: 5.4999,
  }))
  .isFalse();
```

should return false for floats that are not mod % the step option.

```js
unit
  .bool(isFloat(45.6, {
    step: 0.5,
  }))
  .isFalse()
  .bool(isFloat(12.1, {
    step: 0.2,
  }))
  .isFalse()
  .bool(isFloat('5', {
    step: '.6',
  }))
  .isFalse()
  .bool(isFloat(5, {
    step: 0.6,
  }))
  .isFalse();
```

should return false for floats that are not safe to cast when the safe option is true.

```js
unit
  .bool(isFloat(`${Number.MAX_VALUE}9`, {
    safe: true,
  }))
  .isFalse()
  .bool(isFloat(`-${Number.MAX_VALUE}9`, {
    safe: true,
  }))
  .isFalse();
```

should throw an error if opt.min is not a number | null | undefined.

```js
unit
  .error(() => {
    return isFloat(5, {
      min: 'a',
    });
  })
  .error(() => {
    return isFloat(5, {
      min: /a/u,
    });
  })
  .error(() => {
    return isFloat(5, {
      min: noop,
    });
  })
  .error(() => {
    return isFloat(5, {
      min: [],
    });
  })
  .error(() => {
    return isFloat(5, {
      min: {},
    });
  });
```

should throw an error if opt.max is not a number | null | undefined.

```js
unit
  .error(() => {
    return isFloat(5, {
      max: 'z',
    });
  })
  .error(() => {
    return isFloat(5, {
      max: /a/u,
    });
  })
  .error(() => {
    return isFloat(5, {
      max: noop,
    });
  })
  .error(() => {
    return isFloat(5, {
      max: [],
    });
  })
  .error(() => {
    return isFloat(5, {
      max: {},
    });
  });
```

should throw an error if opt.step is not a number | null | undefined.

```js
unit
  .error(() => {
    return isFloat(5, {
      step: 'g',
    });
  })
  .error(() => {
    return isFloat(5, {
      step: /a/u,
    });
  })
  .error(() => {
    return isFloat(5, {
      step: noop,
    });
  })
  .error(() => {
    return isFloat(5, {
      step: [],
    });
  })
  .error(() => {
    return isFloat(5, {
      step: {},
    });
  });
```

<a name="isfrozen"></a>
# #isFrozen
should be a function.

```js
unit
  .function(isFrozen);
```

should return true for frozen objects.

```js
unit
  .bool(isFrozen(Object.freeze({
    a: 5,
  })))
  .isTrue()
  .bool(isFrozen(Object.freeze(new String('hi'))))
  .isTrue();
```

should return true for empty sealed objects.

```js
unit
  .bool(isFrozen(Object.seal({})))
  .isTrue()
  .bool(isFrozen(Object.seal(new String('hi'))))
  .isTrue()
  .bool(isFrozen(Object.seal(new Number(5))))
  .isTrue();
```

should return true for empty objects with preventExtensions.

```js
unit
  .bool(isFrozen(Object.preventExtensions({})))
  .isTrue()
  .bool(isFrozen(Object.preventExtensions(new String('hi'))))
  .isTrue()
  .bool(isFrozen(Object.preventExtensions(new Number(5))))
  .isTrue();
```

should return true for primitives.

```js
unit
  .bool(isFrozen(1))
  .isTrue()
  .bool(isFrozen(234987))
  .isTrue()
  .bool(isFrozen(-239874))
  .isTrue()
  .bool(isFrozen(0))
  .isTrue()
  .bool(isFrozen(1.1))
  .isTrue()
  .bool(isFrozen(-0.4))
  .isTrue()
  .bool(isFrozen(234.4))
  .isTrue()
  .bool(isFrozen(54.00000000001))
  .isTrue()
  .bool(isFrozen('adsf'))
  .isTrue()
  .bool(isFrozen('34.6'))
  .isTrue()
  .bool(isFrozen('-45fg'))
  .isTrue();
```

should return false for object literals.

```js
unit
  .bool(isFrozen({}))
  .isFalse()
  .bool(isFrozen({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isFrozen([]))
  .isFalse()
  .bool(isFrozen([1, 2]))
  .isFalse()
  .bool(isFrozen(new Array('a', {}, 6)))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isFrozen(/asd/u))
  .isFalse()
  .bool(isFrozen(/\d+/u))
  .isFalse()
  .bool(isFrozen(/1/u))
  .isFalse()
  .bool(isFrozen(new RegExp('3', 'u')))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isFrozen(noop))
  .isFalse()
  .bool(isFrozen(isFrozen))
  .isFalse();
```

should return false for Map.

```js
unit
  .bool(isFrozen(new Map()))
  .isFalse()
  .bool(isFrozen(new Map([['a', 5], ['b', '$']])))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isFrozen(new Set()))
  .isFalse()
  .bool(isFrozen(new Set().add(1)))
  .isFalse()
  .bool(isFrozen(new Set([1, 2, 3])))
  .isFalse();
```

should return false for non empty objects with preventExtensions.

```js
unit
  .bool(isFrozen(Object.preventExtensions({
    a: 5,
  })))
  .isFalse()
  .bool(isFrozen(Object.preventExtensions({
    a: 'hi',
    b: true,
  })))
  .isFalse();
```

should return false for non empty sealed objects.

```js
unit
  .bool(isFrozen(Object.seal({
    a: 5,
  })))
  .isFalse()
  .bool(isFrozen(Object.seal({
    a: 'hi',
    b: true,
  })))
  .isFalse();
```

<a name="isfunction"></a>
# #isFunction
should be a function.

```js
unit
  .function(isFunction);
```

should return true for functions.

```js
unit
  .bool(isFunction(isFunction))
  .isTrue()
  .bool(isFunction(noop))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isFunction(1))
  .isFalse()
  .bool(isFunction(234987))
  .isFalse()
  .bool(isFunction(-239874))
  .isFalse()
  .bool(isFunction(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isFunction(1.1))
  .isFalse()
  .bool(isFunction(-0.4))
  .isFalse()
  .bool(isFunction(234.4))
  .isFalse()
  .bool(isFunction(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isFunction('adsf'))
  .isFalse()
  .bool(isFunction('34.6'))
  .isFalse()
  .bool(isFunction('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isFunction(/asd/u))
  .isFalse()
  .bool(isFunction(/\d+/u))
  .isFalse()
  .bool(isFunction(/1/u))
  .isFalse()
  .bool(isFunction(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isFunction({}))
  .isFalse()
  .bool(isFunction(new String('asd')))
  .isFalse()
  .bool(isFunction({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isFunction([]))
  .isFalse()
  .bool(isFunction([1, 2]))
  .isFalse()
  .bool(isFunction(['a', {}, 6]))
  .isFalse();
```

<a name="isgenerator"></a>
# #isGenerator
should be a function.

```js
unit
  .function(isGenerator);
```

should return true for a Generator object.

```js
const test = function* () {
  return yield 1;
};
unit
  .bool(isGenerator(test()))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isGenerator(1))
  .isFalse()
  .bool(isGenerator(234987))
  .isFalse()
  .bool(isGenerator(-239874))
  .isFalse()
  .bool(isGenerator(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isGenerator(1.1))
  .isFalse()
  .bool(isGenerator(-0.4))
  .isFalse()
  .bool(isGenerator(234.4))
  .isFalse()
  .bool(isGenerator(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isGenerator(noop))
  .isFalse()
  .bool(isGenerator(isGenerator))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isGenerator('adsf'))
  .isFalse()
  .bool(isGenerator('34.6'))
  .isFalse()
  .bool(isGenerator('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isGenerator(/asd/u))
  .isFalse()
  .bool(isGenerator(/\d+/u))
  .isFalse()
  .bool(isGenerator(/1/u))
  .isFalse()
  .bool(isGenerator(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isGenerator({}))
  .isFalse()
  .bool(isGenerator(new String('asd')))
  .isFalse()
  .bool(isGenerator({
    a: 5,
  }))
  .isFalse();
```

should return false for Map.

```js
unit
  .bool(isGenerator(new Map()))
  .isFalse()
  .bool(isGenerator(new Map([['a', 5], ['b', '$']])))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isGenerator(new Set()))
  .isFalse()
  .bool(isGenerator(new Set().add(1)))
  .isFalse()
  .bool(isGenerator(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isgeneratorfunction"></a>
# #isGeneratorFunction
should be a function.

```js
unit
  .function(isGeneratorFunction);
```

should return true for a Generator object.

```js
const test = function* () {
  yield 1;
};
unit
  .bool(isGeneratorFunction(test))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isGeneratorFunction(1))
  .isFalse()
  .bool(isGeneratorFunction(234987))
  .isFalse()
  .bool(isGeneratorFunction(-239874))
  .isFalse()
  .bool(isGeneratorFunction(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isGeneratorFunction(1.1))
  .isFalse()
  .bool(isGeneratorFunction(-0.4))
  .isFalse()
  .bool(isGeneratorFunction(234.4))
  .isFalse()
  .bool(isGeneratorFunction(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isGeneratorFunction(noop))
  .isFalse()
  .bool(isGeneratorFunction(isGeneratorFunction))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isGeneratorFunction('adsf'))
  .isFalse()
  .bool(isGeneratorFunction('34.6'))
  .isFalse()
  .bool(isGeneratorFunction('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isGeneratorFunction(/asd/u))
  .isFalse()
  .bool(isGeneratorFunction(/\d+/u))
  .isFalse()
  .bool(isGeneratorFunction(/1/u))
  .isFalse()
  .bool(isGeneratorFunction(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isGeneratorFunction({}))
  .isFalse()
  .bool(isGeneratorFunction(new String('asd')))
  .isFalse()
  .bool(isGeneratorFunction({
    a: 5,
  }))
  .isFalse();
```

should return false for Map.

```js
unit
  .bool(isGeneratorFunction(new Map()))
  .isFalse()
  .bool(isGeneratorFunction(new Map([['a', 5], ['b', '$']])))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isGeneratorFunction(new Set()))
  .isFalse()
  .bool(isGeneratorFunction(new Set().add(1)))
  .isFalse()
  .bool(isGeneratorFunction(new Set([1, 2, 3])))
  .isFalse();
```

<a name="ishexcolor"></a>
# #isHexColor
should be a function.

```js
unit
  .function(isHexColor);
```

should return true for valid hex color strings.

```js
unit
  .bool(isHexColor('fff'))
  .isTrue()
  .bool(isHexColor('a8fd34'))
  .isTrue()
  .bool(isHexColor('#fff'))
  .isTrue()
  .bool(isHexColor('#d58f92'))
  .isTrue()
  .bool(isHexColor('222'))
  .isTrue()
  .bool(isHexColor('#222222'))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isHexColor('we48tuer'))
  .isFalse()
  .bool(isHexColor('we[foewf]'))
  .isFalse()
  .bool(isHexColor('34w98uerj'))
  .isFalse()
  .bool(isHexColor('*&TYY'))
  .isFalse()
  .bool(isHexColor('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isHexColor('sdf.,.mdf'))
  .isFalse()
  .bool(isHexColor('we;o9tu49'))
  .isFalse()
  .bool(isHexColor('q23qo98441`'))
  .isFalse()
  .bool(isHexColor('ewr09ti34*&'))
  .isFalse()
  .bool(isHexColor('%sdkjvnnd'))
  .isFalse()
  .bool(isHexColor('=adkljfhsd'))
  .isFalse()
  .bool(isHexColor('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isHexColor('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isHexColor(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isHexColor(14))
  .isFalse()
  .bool(isHexColor(23487))
  .isFalse()
  .bool(isHexColor(-2398))
  .isFalse()
  .bool(isHexColor(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isHexColor(98.00007))
  .isFalse()
  .bool(isHexColor(-32407.3))
  .isFalse()
  .bool(isHexColor(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isHexColor(noop))
  .isFalse()
  .bool(isHexColor(isHexColor))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isHexColor(/asd/u))
  .isFalse()
  .bool(isHexColor(/\d+/u))
  .isFalse()
  .bool(isHexColor(/1/u))
  .isFalse()
  .bool(isHexColor(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isHexColor([]))
  .isFalse()
  .bool(isHexColor([1, 2, 3]))
  .isFalse()
  .bool(isHexColor(['a', 5, {}]))
  .isFalse();
```

<a name="ishexadecimal"></a>
# #isHexadecimal
should be a function.

```js
unit
  .function(isHexadecimal);
```

should return true for hex values.

```js
unit
  .bool(isHexadecimal(0x5af))
  .isTrue()
  .bool(isHexadecimal(0xF))
  .isTrue()
  .bool(isHexadecimal(0x00dD))
  .isTrue();
```

should return true for hex strings.

```js
unit
  .bool(isHexadecimal('a'))
  .isTrue()
  .bool(isHexadecimal('f'))
  .isTrue()
  .bool(isHexadecimal('3'))
  .isTrue()
  .bool(isHexadecimal('ad45'))
  .isTrue();
```

should return true for positive integers.

```js
unit
  .bool(isHexadecimal(1))
  .isTrue()
  .bool(isHexadecimal(234987))
  .isTrue()
  .bool(isHexadecimal(2398))
  .isTrue()
  .bool(isHexadecimal(0))
  .isTrue();
```

should return false for negative integers.

```js
unit
  .bool(isHexadecimal(-1))
  .isFalse()
  .bool(isHexadecimal(-234))
  .isFalse()
  .bool(isHexadecimal(-234987))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isHexadecimal(1.1))
  .isFalse()
  .bool(isHexadecimal(-0.4))
  .isFalse()
  .bool(isHexadecimal(234.4))
  .isFalse()
  .bool(isHexadecimal(54.00000000001))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isHexadecimal('adsf'))
  .isFalse()
  .bool(isHexadecimal('34.6'))
  .isFalse()
  .bool(isHexadecimal('-45fg'))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isHexadecimal(true))
  .isFalse()
  .bool(isHexadecimal(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isHexadecimal([]))
  .isFalse()
  .bool(isHexadecimal([1, 2]))
  .isFalse()
  .bool(isHexadecimal(['a', {}, 6]))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isHexadecimal(noop))
  .isFalse()
  .bool(isHexadecimal(isHexadecimal))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isHexadecimal(/asd/u))
  .isFalse()
  .bool(isHexadecimal(/\d+/u))
  .isFalse()
  .bool(isHexadecimal(/1/u))
  .isFalse()
  .bool(isHexadecimal(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isHexadecimal({}))
  .isFalse()
  .bool(isHexadecimal(new String('asd')))
  .isFalse()
  .bool(isHexadecimal({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isHexadecimal(new Set()))
  .isFalse()
  .bool(isHexadecimal(new Set().add(1)))
  .isFalse()
  .bool(isHexadecimal(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isip"></a>
# #isIP
should be a function.

```js
unit
  .function(isIP);
```

should return true for valid ip addresses.

```js
unit
  .bool(isIP('67.213.74.8'))
  .isTrue()
  .bool(isIP('10.0.0.1'))
  .isTrue()
  .bool(isIP('192.168.0.1'))
  .isTrue()
  .bool(isIP('127.0.0.1'))
  .isTrue()
  .bool(isIP('2001:0db8:0000:0000:0000:ff00:0042:8329'))
  .isTrue()
  .bool(isIP('2001:db8:0:0:0:ff00:42:8329'))
  .isTrue()
  .bool(isIP('2001:db8::ff00:42:8329'))
  .isTrue()
  .bool(isIP('::1'))
  .isTrue();
```

should return true for valid ipv4 addresses.

```js
unit
  .bool(isIP('67.213.74.8', 4))
  .isTrue()
  .bool(isIP('10.0.0.1', 4))
  .isTrue()
  .bool(isIP('192.168.0.1', '4'))
  .isTrue()
  .bool(isIP('127.0.0.1', 4))
  .isTrue();
```

should return true for valid ipv6 addresses.

```js
unit
  .bool(isIP('2001:0db8:0000:0000:0000:ff00:0042:8329', 6))
  .isTrue()
  .bool(isIP('2001:db8:0:0:0:ff00:42:8329', '6'))
  .isTrue()
  .bool(isIP('2001:db8::ff00:42:8329', 6))
  .isTrue()
  .bool(isIP('::1', 6))
  .isTrue();
```

should return false for valid ipv4 addresses with ipv6 flag.

```js
unit
  .bool(isIP('67.213.74.8', 6))
  .isFalse()
  .bool(isIP('10.0.0.1', 6))
  .isFalse()
  .bool(isIP('192.168.0.1', '6'))
  .isFalse()
  .bool(isIP('127.0.0.1', 6))
  .isFalse();
```

should return false for valid ipv6 addresses with ipv4 flag.

```js
unit
  .bool(isIP('2001:0db8:0000:0000:0000:ff00:0042:8329', 4))
  .isFalse()
  .bool(isIP('2001:db8:0:0:0:ff00:42:8329', '4'))
  .isFalse()
  .bool(isIP('2001:db8::ff00:42:8329', 4))
  .isFalse()
  .bool(isIP('::1', 4))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isIP(true))
  .isFalse()
  .bool(isIP(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isIP([]))
  .isFalse()
  .bool(isIP([1, 2]))
  .isFalse()
  .bool(isIP(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isIP(1))
  .isFalse()
  .bool(isIP(234987))
  .isFalse()
  .bool(isIP(-239874))
  .isFalse()
  .bool(isIP(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isIP(1.1))
  .isFalse()
  .bool(isIP(-0.4))
  .isFalse()
  .bool(isIP(234.4))
  .isFalse()
  .bool(isIP(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isIP(noop))
  .isFalse()
  .bool(isIP(isIP))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isIP('adsf'))
  .isFalse()
  .bool(isIP('34.6'))
  .isFalse()
  .bool(isIP('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isIP(/asd/u))
  .isFalse()
  .bool(isIP(/\d+/u))
  .isFalse()
  .bool(isIP(/1/u))
  .isFalse()
  .bool(isIP(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isIP({}))
  .isFalse()
  .bool(isIP(new String('asd')))
  .isFalse()
  .bool(isIP({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isIP(new Set()))
  .isFalse()
  .bool(isIP(new Set().add(1)))
  .isFalse()
  .bool(isIP(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isisbn"></a>
# #isISBN
should be a function.

```js
unit
  .function(isISBN);
```

should return true for valid ISBN strings.

```js
unit
  .bool(isISBN('99921-58-10-7'))
  .isTrue()
  .bool(isISBN('9971-5-0210-0'))
  .isTrue()
  .bool(isISBN('960-425-059-0'))
  .isTrue()
  .bool(isISBN('80-902734-1-6'))
  .isTrue()
  .bool(isISBN('85-359-0277-5'))
  .isTrue()
  .bool(isISBN('1-84356-028-3'))
  .isTrue()
  .bool(isISBN('0-684-84328-5'))
  .isTrue()
  .bool(isISBN('0-8044-2957-X'))
  .isTrue()
  .bool(isISBN('0-85131-041-9'))
  .isTrue()
  .bool(isISBN('0-943396-04-2'))
  .isTrue()
  .bool(isISBN('0-9752298-0-X'))
  .isTrue()
  .bool(isISBN('978-3-16-148410-0'))
  .isTrue()
  .bool(isISBN('9788175257665'))
  .isTrue();
```

should return false for ISBN not matching version.

```js
unit
  .bool(isISBN('99921-58-10-7', 13))
  .isFalse()
  .bool(isISBN('9971-5-0210-0', 13))
  .isFalse()
  .bool(isISBN('960-425-059-0', 13))
  .isFalse()
  .bool(isISBN('80-902734-1-6', 13))
  .isFalse()
  .bool(isISBN('85-359-0277-5', 13))
  .isFalse()
  .bool(isISBN('1-84356-028-3', 13))
  .isFalse()
  .bool(isISBN('0-684-84328-5', 13))
  .isFalse()
  .bool(isISBN('0-8044-2957-X', 13))
  .isFalse()
  .bool(isISBN('0-85131-041-9', 13))
  .isFalse()
  .bool(isISBN('0-943396-04-2', 13))
  .isFalse()
  .bool(isISBN('0-9752298-0-X', 13))
  .isFalse()
  .bool(isISBN('978-3-16-148410-0', 10))
  .isFalse()
  .bool(isISBN('9788175257665', 10))
  .isFalse();
```

should return false for invalid ISBN strings.

```js
unit
  .bool(isISBN('99921-58-10-3'))
  .isFalse()
  .bool(isISBN('9971-5-0210-4'))
  .isFalse()
  .bool(isISBN('960-425-059-2'))
  .isFalse()
  .bool(isISBN('80-902734-1-9'))
  .isFalse()
  .bool(isISBN('85-359-0277-1'))
  .isFalse()
  .bool(isISBN('1-84356-028-6'))
  .isFalse()
  .bool(isISBN('0-684-84328-9'))
  .isFalse()
  .bool(isISBN('0-8044-2957-3'))
  .isFalse()
  .bool(isISBN('0-85131-041-X'))
  .isFalse()
  .bool(isISBN('0-943396-04-8'))
  .isFalse()
  .bool(isISBN('0-9752298-0-9'))
  .isFalse()
  .bool(isISBN('978-3-17-148410-0'))
  .isFalse()
  .bool(isISBN('9788175257666'))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isISBN(true))
  .isFalse()
  .bool(isISBN(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isISBN([]))
  .isFalse()
  .bool(isISBN([1, 2]))
  .isFalse()
  .bool(isISBN(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isISBN(1))
  .isFalse()
  .bool(isISBN(234987))
  .isFalse()
  .bool(isISBN(-239874))
  .isFalse()
  .bool(isISBN(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isISBN(1.1))
  .isFalse()
  .bool(isISBN(-0.4))
  .isFalse()
  .bool(isISBN(234.4))
  .isFalse()
  .bool(isISBN(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isISBN(noop))
  .isFalse()
  .bool(isISBN(isISBN))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isISBN('adsf'))
  .isFalse()
  .bool(isISBN('34.6'))
  .isFalse()
  .bool(isISBN('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isISBN(/asd/u))
  .isFalse()
  .bool(isISBN(/\d+/u))
  .isFalse()
  .bool(isISBN(/1/u))
  .isFalse()
  .bool(isISBN(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isISBN({}))
  .isFalse()
  .bool(isISBN(new String('asd')))
  .isFalse()
  .bool(isISBN({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isISBN(new Set()))
  .isFalse()
  .bool(isISBN(new Set().add(1)))
  .isFalse()
  .bool(isISBN(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isisin"></a>
# #isISIN
should be a function.

```js
unit
  .function(isISIN);
```

should return true for valid ISIN strings.

```js
unit
  .bool(isISIN('US5949181045'))
  .isTrue()
  .bool(isISIN('US38259P5089'))
  .isTrue()
  .bool(isISIN('US0378331005'))
  .isTrue()
  .bool(isISIN('NL0000729408'))
  .isTrue()
  .bool(isISIN('JP3946600008'))
  .isTrue()
  .bool(isISIN('DE000DZ21632'))
  .isTrue()
  .bool(isISIN('DE000DB7HWY7'))
  .isTrue()
  .bool(isISIN('DE000CM7VX13'))
  .isTrue()
  .bool(isISIN('CH0031240127'))
  .isTrue()
  .bool(isISIN('CA9861913023'))
  .isTrue()
  .bool(isISIN('GB0002634946'))
  .isTrue();
```

should return false for invalid ISIN strings.

```js
unit
  .bool(isISIN('US5949187045'))
  .isFalse()
  .bool(isISIN('US38259P0089'))
  .isFalse()
  .bool(isISIN('US0378334005'))
  .isFalse()
  .bool(isISIN('NL000072G408'))
  .isFalse()
  .bool(isISIN('JP3946603008'))
  .isFalse()
  .bool(isISIN('DE000DZ2L632'))
  .isFalse()
  .bool(isISIN('DE000DBPHWY7'))
  .isFalse()
  .bool(isISIN('DE000CMFVX13'))
  .isFalse()
  .bool(isISIN('CH00312R0127'))
  .isFalse()
  .bool(isISIN('CA98619J3023'))
  .isFalse()
  .bool(isISIN('GB00026D4946'))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isISIN(true))
  .isFalse()
  .bool(isISIN(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isISIN([]))
  .isFalse()
  .bool(isISIN([1, 2]))
  .isFalse()
  .bool(isISIN(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isISIN(1))
  .isFalse()
  .bool(isISIN(234987))
  .isFalse()
  .bool(isISIN(-239874))
  .isFalse()
  .bool(isISIN(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isISIN(1.1))
  .isFalse()
  .bool(isISIN(-0.4))
  .isFalse()
  .bool(isISIN(234.4))
  .isFalse()
  .bool(isISIN(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isISIN(noop))
  .isFalse()
  .bool(isISIN(isISIN))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isISIN(/asd/u))
  .isFalse()
  .bool(isISIN(/\d+/u))
  .isFalse()
  .bool(isISIN(/1/u))
  .isFalse()
  .bool(isISIN(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isISIN({}))
  .isFalse()
  .bool(isISIN(new String('asd')))
  .isFalse()
  .bool(isISIN({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isISIN(new Set()))
  .isFalse()
  .bool(isISIN(new Set().add(1)))
  .isFalse()
  .bool(isISIN(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isisrc"></a>
# #isISRC
should be a function.

```js
unit
  .function(isISRC);
```

should return true for valid ISRC strings.

```js
unit
  .bool(isISRC('JMK401400212'))
  .isTrue()
  .bool(isISRC('GB6T61123438'))
  .isTrue()
  .bool(isISRC('US89Z6683415'))
  .isTrue()
  .bool(isISRC('AUT8T4386194'))
  .isTrue()
  .bool(isISRC('TH9TG7452938'))
  .isTrue()
  .bool(isISRC('RUYKF4639652'))
  .isTrue()
  .bool(isISRC('CN4H16593428'))
  .isTrue()
  .bool(isISRC('VN9TT7593452'))
  .isTrue()
  .bool(isISRC('DN5746324284'))
  .isTrue()
  .bool(isISRC('MX8574638393'))
  .isTrue()
  .bool(isISRC('CA7T57596012'))
  .isTrue()
  .bool(isISRC('TZ4KL4789202'))
  .isTrue();
```

should return false for invalid ISRC strings.

```js
unit
  .bool(isISRC('JMK40140021F'))
  .isFalse()
  .bool(isISRC('GB6T61123G38'))
  .isFalse()
  .bool(isISRC('US89Z6Y83415'))
  .isFalse()
  .bool(isISRC('AUT8T4-86194'))
  .isFalse()
  .bool(isISRC('TH9TG7/52938'))
  .isFalse()
  .bool(isISRC('RUYKF463=652'))
  .isFalse()
  .bool(isISRC('CN4H165935428'))
  .isFalse()
  .bool(isISRC('VN9TT759352'))
  .isFalse()
  .bool(isISRC('DN574632+284'))
  .isFalse()
  .bool(isISRC('MX8574$38393'))
  .isFalse()
  .bool(isISRC('C47T57596012'))
  .isFalse()
  .bool(isISRC('4Z4KL4789202'))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isISRC(true))
  .isFalse()
  .bool(isISRC(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isISRC([]))
  .isFalse()
  .bool(isISRC([1, 2]))
  .isFalse()
  .bool(isISRC(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isISRC(1))
  .isFalse()
  .bool(isISRC(234987))
  .isFalse()
  .bool(isISRC(-239874))
  .isFalse()
  .bool(isISRC(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isISRC(1.1))
  .isFalse()
  .bool(isISRC(-0.4))
  .isFalse()
  .bool(isISRC(234.4))
  .isFalse()
  .bool(isISRC(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isISRC(noop))
  .isFalse()
  .bool(isISRC(isISRC))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isISRC('adsf'))
  .isFalse()
  .bool(isISRC('34.6'))
  .isFalse()
  .bool(isISRC('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isISRC(/asd/u))
  .isFalse()
  .bool(isISRC(/\d+/u))
  .isFalse()
  .bool(isISRC(/1/u))
  .isFalse()
  .bool(isISRC(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isISRC({}))
  .isFalse()
  .bool(isISRC(new String('asd')))
  .isFalse()
  .bool(isISRC({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isISRC(new Set()))
  .isFalse()
  .bool(isISRC(new Set().add(1)))
  .isFalse()
  .bool(isISRC(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isissn"></a>
# #isISSN
should be a function.

```js
unit
  .function(isISSN);
```

should return true for valid ISSN strings.

```js
unit
  .bool(isISSN('0000-0019'))
  .isTrue()
  .bool(isISSN('0378-5955'))
  .isTrue()
  .bool(isISSN('2434561X'))
  .isTrue()
  .bool(isISSN('1943-8311'))
  .isTrue()
  .bool(isISSN('0953-4563'))
  .isTrue()
  .bool(isISSN('03178471'))
  .isTrue()
  .bool(isISSN('0001-5830'))
  .isTrue();
```

should return false for invalid ISSN strings.

```js
unit
  .bool(isISSN('000-00019'))
  .isFalse()
  .bool(isISSN('00156707'))
  .isFalse()
  .bool(isISSN('002X-9643'))
  .isFalse()
  .bool(isISSN('0F28-8292'))
  .isFalse()
  .bool(isISSN('0D33-7234'))
  .isFalse()
  .bool(isISSN('0043-1426'))
  .isFalse()
  .bool(isISSN('0066-57GX'))
  .isFalse()
  .bool(isISSN('0068-996Z'))
  .isFalse()
  .bool(isISSN('0069-430Y'))
  .isFalse()
  .bool(isISSN('9083-128X'))
  .isFalse()
  .bool(isISSN('4163-0350'))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isISSN(true))
  .isFalse()
  .bool(isISSN(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isISSN([]))
  .isFalse()
  .bool(isISSN([1, 2]))
  .isFalse()
  .bool(isISSN(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isISSN(1))
  .isFalse()
  .bool(isISSN(234987))
  .isFalse()
  .bool(isISSN(-239874))
  .isFalse()
  .bool(isISSN(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isISSN(1.1))
  .isFalse()
  .bool(isISSN(-0.4))
  .isFalse()
  .bool(isISSN(234.4))
  .isFalse()
  .bool(isISSN(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isISSN(noop))
  .isFalse()
  .bool(isISSN(isISSN))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isISSN(/asd/u))
  .isFalse()
  .bool(isISSN(/\d+/u))
  .isFalse()
  .bool(isISSN(/1/u))
  .isFalse()
  .bool(isISSN(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isISSN({}))
  .isFalse()
  .bool(isISSN(new String('asd')))
  .isFalse()
  .bool(isISSN({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isISSN(new Set()))
  .isFalse()
  .bool(isISSN(new Set().add(1)))
  .isFalse()
  .bool(isISSN(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isinteger"></a>
# #isInteger
should be a function.

```js
unit
  .function(isInteger);
```

should return true for valid integers.

```js
unit
  .bool(isInteger(1))
  .isTrue()
  .bool(isInteger(234987))
  .isTrue()
  .bool(isInteger(-239874))
  .isTrue()
  .bool(isInteger(0))
  .isTrue();
```

should return true for parsable integers.

```js
unit
  .bool(isInteger('98'))
  .isTrue()
  .bool(isInteger('-32407'))
  .isTrue()
  .bool(isInteger('0'))
  .isTrue();
```

should return true for zero precision integers.

```js
unit
  .bool(isInteger(5.0))
  .isTrue()
  .bool(isInteger(-6.0))
  .isTrue()
  .bool(isInteger('5.0'))
  .isTrue()
  .bool(isInteger('-6.0'))
  .isTrue()
  .bool(isInteger('234.'))
  .isTrue();
```

should return true for objects that stringify to integer.

```js
unit
  .bool(isInteger(new String('123')))
  .isTrue()
  .bool(isInteger(new BigNumber('345345')))
  .isTrue();
```

should return false for floats.

```js
unit
  .bool(isInteger(1.1))
  .isFalse()
  .bool(isInteger(-0.4))
  .isFalse()
  .bool(isInteger(234.4))
  .isFalse()
  .bool(isInteger(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isInteger(noop))
  .isFalse()
  .bool(isInteger(isInteger))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isInteger('adsf'))
  .isFalse()
  .bool(isInteger('34.6'))
  .isFalse()
  .bool(isInteger('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isInteger(/asd/u))
  .isFalse()
  .bool(isInteger(/\d+/u))
  .isFalse()
  .bool(isInteger(/1/u))
  .isFalse()
  .bool(isInteger(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isInteger([]))
  .isFalse()
  .bool(isInteger([1, 2, 3]))
  .isFalse()
  .bool(isInteger(['a', 5, {}]))
  .isFalse();
```

should return false for objects that dont stringify to an integer.

```js
unit
  .bool(isInteger({}))
  .isFalse()
  .bool(isInteger(new String('asd')))
  .isFalse()
  .bool(isInteger({
    a: 5,
  }))
  .isFalse();
```

should return false for integers that are less than the min option.

```js
unit
  .bool(isInteger(45, {
    min: 50,
  }))
  .isFalse()
  .bool(isInteger(99, {
    min: 100,
  }))
  .isFalse()
  .bool(isInteger('5', {
    min: '6',
  }))
  .isFalse()
  .bool(isInteger(5, {
    min: 6,
  }))
  .isFalse();
```

should return false for integers that are greater than the max option.

```js
unit
  .bool(isInteger(46, {
    max: 45,
  }))
  .isFalse()
  .bool(isInteger(100, {
    max: 99,
  }))
  .isFalse()
  .bool(isInteger('5', {
    max: '4',
  }))
  .isFalse()
  .bool(isInteger(5, {
    max: 4,
  }))
  .isFalse();
```

should return false for integers that are not mod % the step option.

```js
unit
  .bool(isInteger(45, {
    step: 10,
  }))
  .isFalse()
  .bool(isInteger(12, {
    step: 0.7,
  }))
  .isFalse()
  .bool(isInteger('5', {
    step: '3',
  }))
  .isFalse()
  .bool(isInteger(5, {
    step: 3,
  }))
  .isFalse();
```

should return false for integers that are not safe to cast when the safe option is true.

```js
unit
  .bool(isInteger(`${Number.MAX_SAFE_INTEGER}9`, {
    safe: true,
  }))
  .isFalse()
  .bool(isInteger(`${Number.MIN_SAFE_INTEGER}9`, {
    safe: true,
  }))
  .isFalse();
```

should throw an error if opt.min is not a number | null | undefined.

```js
unit
  .error(() => {
    return isInteger(5, {
      min: 'a',
    });
  })
  .error(() => {
    return isInteger(5, {
      min: /a/u,
    });
  })
  .error(() => {
    return isInteger(5, {
      min: noop,
    });
  })
  .error(() => {
    return isInteger(5, {
      min: [],
    });
  })
  .error(() => {
    return isInteger(5, {
      min: {},
    });
  });
```

should throw an error if opt.max is not a number | null | undefined.

```js
unit
  .error(() => {
    return isInteger(5, {
      max: 'z',
    });
  })
  .error(() => {
    return isInteger(5, {
      max: /a/u,
    });
  })
  .error(() => {
    return isInteger(5, {
      max: noop,
    });
  })
  .error(() => {
    return isInteger(5, {
      max: [],
    });
  })
  .error(() => {
    return isInteger(5, {
      max: {},
    });
  });
```

should throw an error if opt.step is not a number | null | undefined.

```js
unit
  .error(() => {
    return isInteger(5, {
      step: 'g',
    });
  })
  .error(() => {
    return isInteger(5, {
      step: /a/u,
    });
  })
  .error(() => {
    return isInteger(5, {
      step: noop,
    });
  })
  .error(() => {
    return isInteger(5, {
      step: [],
    });
  })
  .error(() => {
    return isInteger(5, {
      step: {},
    });
  });
```

<a name="isiterable"></a>
# #isIterable
should be a function.

```js
unit
  .function(isIterable);
```

should return true for arrays.

```js
unit
  .bool(isIterable([]))
  .isTrue()
  .bool(isIterable([1, 2, 3]))
  .isTrue();
```

should return true for Set objects.

```js
unit
  .bool(isIterable(new Set()))
  .isTrue()
  .bool(isIterable(new Set([1, 2, 3])))
  .isTrue();
```

should return true for Map objects.

```js
unit
  .bool(isIterable(new Map()))
  .isTrue()
  .bool(isIterable(new Map([['a', 1], ['b', 5]])))
  .isTrue();
```

should return true for strings.

```js
unit
  .bool(isIterable('adsf'))
  .isTrue()
  .bool(isIterable('34.6'))
  .isTrue()
  .bool(isIterable(new String('hello world!')))
  .isTrue();
```

should return false for WeakSet objects.

```js
unit
  .bool(isIterable(new WeakSet()))
  .isFalse()
  .bool(isIterable(new WeakSet([
    {
      a: 5,
      b: 'hi',
    },
  ])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isIterable(new WeakMap()))
  .isFalse()
  .bool(isIterable(new WeakMap([
    [{}, 5],
    [
      {
        a: 6,
      },
      6,
    ],
  ])))
  .isFalse();
```

should return false for object literals.

```js
unit
  .bool(isIterable({}))
  .isFalse()
  .bool(isIterable({
    a: 5,
  }))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isIterable(1))
  .isFalse()
  .bool(isIterable(234987))
  .isFalse()
  .bool(isIterable(-239874))
  .isFalse()
  .bool(isIterable(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isIterable(1.1))
  .isFalse()
  .bool(isIterable(-0.4))
  .isFalse()
  .bool(isIterable(234.4))
  .isFalse()
  .bool(isIterable(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isIterable(noop))
  .isFalse()
  .bool(isIterable(isIterable))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isIterable(/asd/u))
  .isFalse()
  .bool(isIterable(/\d+/u))
  .isFalse()
  .bool(isIterable(/1/u))
  .isFalse()
  .bool(isIterable(new RegExp('3', 'u')))
  .isFalse();
```

<a name="isiterableiterator"></a>
# #isIterableIterator
should be a function.

```js
unit
  .function(isIterableIterator);
```

should return true for generator function results.

```js
const test = function* () {
  return yield 1;
};
unit
  .bool(isIterableIterator(test()))
  .isTrue();
```

should return true for SetIterator objects.

```js
unit
  .bool(isIterableIterator(new Set()[Symbol.iterator]()))
  .isTrue();
```

should return true for MapIterator objects.

```js
unit
  .bool(isIterableIterator(new Map()[Symbol.iterator]()))
  .isTrue();
```

should return false for arrays.

```js
unit
  .bool(isIterableIterator([]))
  .isFalse()
  .bool(isIterableIterator([1, 2, 3]))
  .isFalse();
```

should return false for Set objects.

```js
unit
  .bool(isIterableIterator(new Set()))
  .isFalse()
  .bool(isIterableIterator(new Set([1, 2, 3])))
  .isFalse();
```

should return false for Map objects.

```js
unit
  .bool(isIterableIterator(new Map()))
  .isFalse()
  .bool(isIterableIterator(new Map([['a', 1], ['b', 5]])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isIterableIterator(new WeakSet()))
  .isFalse()
  .bool(isIterableIterator(new WeakSet([
    {
      a: 5,
      b: 'hi',
    },
  ])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isIterableIterator(new WeakMap()))
  .isFalse()
  .bool(isIterableIterator(new WeakMap([
    [{}, 5],
    [
      {
        a: 6,
      },
      6,
    ],
  ])))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isIterableIterator('adsf'))
  .isFalse()
  .bool(isIterableIterator('34.6'))
  .isFalse()
  .bool(isIterableIterator(new String('hello world!')))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isIterableIterator(new WeakSet()))
  .isFalse()
  .bool(isIterableIterator(new WeakSet([
    {
      a: 5,
      b: 'hi',
    },
  ])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isIterableIterator(new WeakMap()))
  .isFalse()
  .bool(isIterableIterator(new WeakMap([
    [{}, 5],
    [
      {
        a: 6,
      },
      6,
    ],
  ])))
  .isFalse();
```

should return false for object literals.

```js
unit
  .bool(isIterableIterator({}))
  .isFalse()
  .bool(isIterableIterator({
    a: 5,
  }))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isIterableIterator(1))
  .isFalse()
  .bool(isIterableIterator(234987))
  .isFalse()
  .bool(isIterableIterator(-239874))
  .isFalse()
  .bool(isIterableIterator(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isIterableIterator(1.1))
  .isFalse()
  .bool(isIterableIterator(-0.4))
  .isFalse()
  .bool(isIterableIterator(234.4))
  .isFalse()
  .bool(isIterableIterator(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isIterableIterator(noop))
  .isFalse()
  .bool(isIterableIterator(isIterableIterator))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isIterableIterator(/asd/u))
  .isFalse()
  .bool(isIterableIterator(/\d+/u))
  .isFalse()
  .bool(isIterableIterator(/1/u))
  .isFalse()
  .bool(isIterableIterator(new RegExp('3', 'u')))
  .isFalse();
```

<a name="isiterator"></a>
# #isIterator
should be a function.

```js
unit
  .function(isIterator);
```

should return true for generator function results.

```js
const test = function* () {
  return yield 1;
};
unit
  .bool(isIterator(test()))
  .isTrue();
```

should return true for SetIterator objects.

```js
unit
  .bool(isIterator(new Set()[Symbol.iterator]()))
  .isTrue();
```

should return true for MapIterator objects.

```js
unit
  .bool(isIterator(new Map()[Symbol.iterator]()))
  .isTrue();
```

should return false for arrays.

```js
unit
  .bool(isIterator([]))
  .isFalse()
  .bool(isIterator([1, 2, 3]))
  .isFalse();
```

should return false for Set objects.

```js
unit
  .bool(isIterator(new Set()))
  .isFalse()
  .bool(isIterator(new Set([1, 2, 3])))
  .isFalse();
```

should return false for Map objects.

```js
unit
  .bool(isIterator(new Map()))
  .isFalse()
  .bool(isIterator(new Map([['a', 1], ['b', 5]])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isIterator(new WeakSet()))
  .isFalse()
  .bool(isIterator(new WeakSet([
    {
      a: 5,
      b: 'hi',
    },
  ])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isIterator(new WeakMap()))
  .isFalse()
  .bool(isIterator(new WeakMap([
    [{}, 5],
    [
      {
        a: 6,
      },
      6,
    ],
  ])))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isIterator('adsf'))
  .isFalse()
  .bool(isIterator('34.6'))
  .isFalse()
  .bool(isIterator(new String('hello world!')))
  .isFalse();
```

should return false for object literals.

```js
unit
  .bool(isIterator({}))
  .isFalse()
  .bool(isIterator({
    a: 5,
  }))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isIterator(1))
  .isFalse()
  .bool(isIterator(234987))
  .isFalse()
  .bool(isIterator(-239874))
  .isFalse()
  .bool(isIterator(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isIterator(1.1))
  .isFalse()
  .bool(isIterator(-0.4))
  .isFalse()
  .bool(isIterator(234.4))
  .isFalse()
  .bool(isIterator(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isIterator(noop))
  .isFalse()
  .bool(isIterator(isIterator))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isIterator(/asd/u))
  .isFalse()
  .bool(isIterator(/\d+/u))
  .isFalse()
  .bool(isIterator(/1/u))
  .isFalse()
  .bool(isIterator(new RegExp('3', 'u')))
  .isFalse();
```

<a name="isjcb"></a>
# #isJCB
should be a function.

```js
unit
  .function(isJCB);
```

should return true for valid account numbers.

```js
unit
  .bool(isJCB('3530111333300000'))
  .isTrue()
  .bool(isJCB('3566002020360505'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isJCB('378282246310004'))
  .isFalse()
  .bool(isJCB('378282246310006'))
  .isFalse()
  .bool(isJCB('371449635398430'))
  .isFalse()
  .bool(isJCB('371449635398432'))
  .isFalse()
  .bool(isJCB('5610591081018250'))
  .isFalse()
  .bool(isJCB('30569309025904'))
  .isFalse()
  .bool(isJCB('6011111111111117'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isJCB(14))
  .isFalse()
  .bool(isJCB(234987))
  .isFalse()
  .bool(isJCB(-2398))
  .isFalse()
  .bool(isJCB(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isJCB(98.00007))
  .isFalse()
  .bool(isJCB(-32407.3))
  .isFalse()
  .bool(isJCB(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isJCB(noop))
  .isFalse()
  .bool(isJCB(isJCB))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isJCB('adsf'))
  .isFalse()
  .bool(isJCB('34.t'))
  .isFalse()
  .bool(isJCB('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isJCB(/asd/u))
  .isFalse()
  .bool(isJCB(/\d+/u))
  .isFalse()
  .bool(isJCB(/1/u))
  .isFalse()
  .bool(isJCB(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isJCB([]))
  .isFalse()
  .bool(isJCB([1, 2, 3]))
  .isFalse()
  .bool(isJCB(['a', 5, {}]))
  .isFalse();
```

<a name="isjson"></a>
# #isJSON
should be a function.

```js
unit
  .function(isJSON);
```

should return true for valid JSON strings.

```js
unit
  .bool(isJSON('{}'))
  .isTrue()
  .bool(isJSON('{"a":[1,2,3],"b":6}'))
  .isTrue()
  .bool(isJSON('[1,"2",6]'))
  .isTrue()
  .bool(isJSON('{"a":{"z":true,"x":5.6,"y":"h"},"b":-6}'))
  .isTrue()
  .bool(isJSON('{"a":false,"b":null}'))
  .isTrue();
```

should return true for integers.

```js
unit
  .bool(isJSON(14))
  .isTrue()
  .bool(isJSON(234987))
  .isTrue()
  .bool(isJSON(-2398))
  .isTrue()
  .bool(isJSON(2))
  .isTrue();
```

should return true for floats.

```js
unit
  .bool(isJSON(98.00007))
  .isTrue()
  .bool(isJSON(-32407.3))
  .isTrue()
  .bool(isJSON(0.1))
  .isTrue();
```

should return false for invalid JSON strings.

```js
unit
  .bool(isJSON('we48tuer'))
  .isFalse()
  .bool(isJSON('[a,6,h]'))
  .isFalse()
  .bool(isJSON('{a:false}'))
  .isFalse()
  .bool(isJSON('{"a":{6,"b":true}'))
  .isFalse()
  .bool(isJSON('{"b";false}'))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isJSON(noop))
  .isFalse()
  .bool(isJSON(isJSON))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isJSON(/asd/u))
  .isFalse()
  .bool(isJSON(/\d+/u))
  .isFalse()
  .bool(isJSON(/1/u))
  .isFalse()
  .bool(isJSON(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isJSON([]))
  .isFalse()
  .bool(isJSON([1, 2, 3]))
  .isFalse()
  .bool(isJSON(['a', 5, {}]))
  .isFalse();
```

<a name="islatitude"></a>
# #isLatitude
should be a function.

```js
unit
  .function(isLatitude);
```

should return true for valid latitude.

```js
unit
  .bool(isLatitude(1.4))
  .isTrue()
  .bool(isLatitude(-90))
  .isTrue()
  .bool(isLatitude(90))
  .isTrue()
  .bool(isLatitude(-2.0))
  .isTrue();
```

should return true for parsable latitude.

```js
unit
  .bool(isLatitude('89.00007'))
  .isTrue()
  .bool(isLatitude('-76.'))
  .isTrue()
  .bool(isLatitude('0.1'))
  .isTrue();
```

should return true for objects that stringify to latitude.

```js
unit
  .bool(isLatitude(new String('73')))
  .isTrue()
  .bool(isLatitude(new BigNumber('-45.7675')))
  .isTrue();
```

should return false for value < -90 or > 90.

```js
unit
  .bool(isLatitude(90.0000001))
  .isFalse()
  .bool(isLatitude(-90.000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isLatitude(noop))
  .isFalse()
  .bool(isLatitude(isLatitude))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isLatitude('adsf'))
  .isFalse()
  .bool(isLatitude('34.t'))
  .isFalse()
  .bool(isLatitude('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isLatitude(/asd/u))
  .isFalse()
  .bool(isLatitude(/\d+/u))
  .isFalse()
  .bool(isLatitude(/1/u))
  .isFalse()
  .bool(isLatitude(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isLatitude([]))
  .isFalse()
  .bool(isLatitude([1, 2, 3]))
  .isFalse()
  .bool(isLatitude(['a', 5, {}]))
  .isFalse();
```

should return false for objects that dont stringify to a latitude.

```js
unit
  .bool(isLatitude({}))
  .isFalse()
  .bool(isLatitude(new String('asd')))
  .isFalse()
  .bool(isLatitude({
    a: 5,
  }))
  .isFalse();
```

<a name="islength"></a>
# #isLength
should be a function.

```js
unit
  .function(isLength);
```

should return true for strings.

```js
unit
  .bool(isLength('a'))
  .isTrue()
  .bool(isLength('alkjdfhwekjcfncn83hr;32hhew;ihp81hluehflefhwedjklkdf'))
  .isTrue();
```

should return true for arrays.

```js
unit
  .bool(isLength([
    4,
    70,
    false,
    'asd',
  ]))
  .isTrue()
  .bool(isLength([2011]))
  .isTrue()
  .bool(isLength([
    2000,
    6,
    15,
    5,
  ]))
  .isTrue();
```

should return true for arrays with length greater than min.

```js
unit
  .bool(isLength([
    4,
    70,
    false,
    'asd',
  ], {
    min: 3,
  }))
  .isTrue()
  .bool(isLength([2011], {min: 0}))
  .isTrue()
  .bool(isLength([
    2000,
    6,
    15,
    5,
  ], {
    min: 4,
  }))
  .isTrue();
```

should return true for arrays with length less than max.

```js
unit
  .bool(isLength([
    4,
    70,
    false,
    'asd',
  ], {
    max: 5,
  }))
  .isTrue()
  .bool(isLength([2011], {max: 2}))
  .isTrue()
  .bool(isLength([
    2000,
    6,
    15,
    5,
  ], {
    max: 4,
  }))
  .isTrue();
```

should return true for function with arguments.

```js
unit
  .bool(isLength(isLength))
  .isTrue()
  .bool(isLength(parseInt))
  .isTrue()
  .bool(isLength(JSON.parse))
  .isTrue();
```

should return true for function with arguments greater than min.

```js
unit
  .bool(isLength(isLength, {min: 1}))
  .isTrue()
  .bool(isLength(parseInt, {min: 1}))
  .isTrue()
  .bool(isLength(JSON.parse, {min: 2}))
  .isTrue();
```

should return true for function with arguments less than max.

```js
unit
  .bool(isLength(isLength, {max: 3}))
  .isTrue()
  .bool(isLength(parseInt, {max: 4}))
  .isTrue()
  .bool(isLength(JSON.parse, {max: 2}))
  .isTrue();
```

should return true for objects with a length property.

```js
unit
  .bool(isLength({
    length: 5,
  }))
  .isTrue()
  .bool(isLength({
    a: 5,
    length: 1,
  }))
  .isTrue();
```

should return true for objects with a length property greater than min.

```js
unit
  .bool(isLength({
    length: 5,
  }, {
    min: 4,
  }))
  .isTrue()
  .bool(isLength({
    a: 5,
    length: 1,
  }, {
    min: 0,
  }))
  .isTrue();
```

should return true for objects with a length property less than max.

```js
unit
  .bool(isLength({
    length: 5,
  }, {
    max: 6,
  }))
  .isTrue()
  .bool(isLength({
    a: 5,
    length: 1,
  }, {
    max: 2,
  }))
  .isTrue();
```

should return false for strings not equal to length.

```js
unit
  .bool(isLength('a', 4))
  .isFalse()
  .bool(isLength('alkjdfhwekjcfncn83hr;32hhew;ihp81hluehfleriufhwedj', 12))
  .isFalse();
```

should return false for arrays not equal to length.

```js
unit
  .bool(isLength([
    4,
    70,
    false,
    'asd',
  ], 1))
  .isFalse()
  .bool(isLength([2011], 2))
  .isFalse()
  .bool(isLength([
    2000,
    6,
    15,
    5,
  ], 10))
  .isFalse();
```

should return false for function with arguments not equal to length.

```js
unit
  .bool(isLength(isLength, 3))
  .isFalse()
  .bool(isLength(parseInt, 8))
  .isFalse()
  .bool(isLength(JSON.parse, 1))
  .isFalse();
```

should return false for objects with enumerable length property not equal to length.

```js
unit
  .bool(isLength({
    length: 5,
  }, 4))
  .isFalse()
  .bool(isLength({
    a: 5,
    length: 1,
  }, 2))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isLength(2, 1))
  .isFalse()
  .bool(isLength(234988, 234987))
  .isFalse()
  .bool(isLength(-239873, -239874))
  .isFalse()
  .bool(isLength(1, 0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isLength(1.5, 1.4))
  .isFalse()
  .bool(isLength(-0.2, -0.3))
  .isFalse()
  .bool(isLength(234.6, 234.5))
  .isFalse()
  .bool(isLength(55.00000000001, 55))
  .isFalse();
```

should return false for dates.

```js
unit
  .bool(isLength(Date.now() + 500))
  .isFalse()
  .bool(isLength(new Date()))
  .isFalse()
  .bool(isLength(new Date('2010-02-01')))
  .isFalse();
```

should return false for functions without arguments.

```js
unit
  .bool(isLength(noop))
  .isFalse()
  .bool(isLength(Date.now))
  .isFalse();
```

should return false for objects without a length property.

```js
unit
  .bool(isLength({
    g: -6.4,
    k: 'asd',
  }))
  .isFalse()
  .bool(isLength({
    d: 'hi',
  }))
  .isFalse()
  .bool(isLength({
    a: 5,
    b: false,
  }))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isLength(/asd/u))
  .isFalse()
  .bool(isLength(/\d+/u))
  .isFalse()
  .bool(isLength(/1/u))
  .isFalse()
  .bool(isLength(new RegExp('3', 'u')))
  .isFalse();
```

<a name="islongitude"></a>
# #isLongitude
should be a function.

```js
unit
  .function(isLongitude);
```

should return true for valid longitude.

```js
unit
  .bool(isLongitude(1.4))
  .isTrue()
  .bool(isLongitude(180))
  .isTrue()
  .bool(isLongitude(-180))
  .isTrue()
  .bool(isLongitude(2.0))
  .isTrue();
```

should return true for parsable longitude.

```js
unit
  .bool(isLongitude('98.00007'))
  .isTrue()
  .bool(isLongitude('-112.7534'))
  .isTrue()
  .bool(isLongitude('0.1'))
  .isTrue();
```

should return true for objects that stringify to longitude.

```js
unit
  .bool(isLongitude(new String('123')))
  .isTrue()
  .bool(isLongitude(new BigNumber('-74.363')))
  .isTrue();
```

should return false for functions.

```js
unit
  .bool(isLongitude(noop))
  .isFalse()
  .bool(isLongitude(isLongitude))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isLongitude('adsf'))
  .isFalse()
  .bool(isLongitude('34.t'))
  .isFalse()
  .bool(isLongitude('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isLongitude(/asd/u))
  .isFalse()
  .bool(isLongitude(/\d+/u))
  .isFalse()
  .bool(isLongitude(/1/u))
  .isFalse()
  .bool(isLongitude(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isLongitude([]))
  .isFalse()
  .bool(isLongitude([1, 2, 3]))
  .isFalse()
  .bool(isLongitude(['a', 5, {}]))
  .isFalse();
```

should return false for objects that dont stringify to a longitude.

```js
unit
  .bool(isLongitude({}))
  .isFalse()
  .bool(isLongitude(new String('asd')))
  .isFalse()
  .bool(isLongitude({
    a: 5,
  }))
  .isFalse();
```

<a name="isluhn"></a>
# #isLuhn
should be a function.

```js
unit
  .function(isLuhn);
```

should return true for numbers passing the Luhn algorithm.

```js
unit
  .bool(isLuhn('378282246310005'))
  .isTrue()
  .bool(isLuhn('371449635398431'))
  .isTrue()
  .bool(isLuhn('378734493671000'))
  .isTrue()
  .bool(isLuhn('30569309025904'))
  .isTrue()
  .bool(isLuhn('38520000023237'))
  .isTrue()
  .bool(isLuhn('6011111111111117'))
  .isTrue()
  .bool(isLuhn('6011000990139424'))
  .isTrue()
  .bool(isLuhn('3530111333300000'))
  .isTrue()
  .bool(isLuhn('3566002020360505'))
  .isTrue()
  .bool(isLuhn('5555555555554444'))
  .isTrue()
  .bool(isLuhn('5105105105105100'))
  .isTrue()
  .bool(isLuhn('4111111111111111'))
  .isTrue()
  .bool(isLuhn('4012888888881881'))
  .isTrue()
  .bool(isLuhn('4222222222222'))
  .isTrue();
```

should return true for numbers passing the Luhn algorithm.

```js
unit
  .bool(isLuhn(378282246310005))
  .isTrue()
  .bool(isLuhn(371449635398431))
  .isTrue()
  .bool(isLuhn(378734493671000))
  .isTrue()
  .bool(isLuhn(30569309025904))
  .isTrue()
  .bool(isLuhn(38520000023237))
  .isTrue()
  .bool(isLuhn(6011111111111117))
  .isTrue()
  .bool(isLuhn(6011000990139424))
  .isTrue()
  .bool(isLuhn(3530111333300000))
  .isTrue()
  .bool(isLuhn(3566002020360505))
  .isTrue()
  .bool(isLuhn(5555555555554444))
  .isTrue()
  .bool(isLuhn(5105105105105100))
  .isTrue()
  .bool(isLuhn(4111111111111111))
  .isTrue()
  .bool(isLuhn(4012888888881881))
  .isTrue()
  .bool(isLuhn(4222222222222))
  .isTrue();
```

should return false for numbers not passing the Luhn algorithm.

```js
unit
  .bool(isLuhn('378282246310004'))
  .isFalse()
  .bool(isLuhn('371449635397431'))
  .isFalse()
  .bool(isLuhn('378734494671000'))
  .isFalse()
  .bool(isLuhn('30569209025904'))
  .isFalse()
  .bool(isLuhn('38520100023237'))
  .isFalse()
  .bool(isLuhn('6011161111111117'))
  .isFalse()
  .bool(isLuhn('6011010990139424'))
  .isFalse()
  .bool(isLuhn('3530161333300000'))
  .isFalse()
  .bool(isLuhn('3566002070360505'))
  .isFalse()
  .bool(isLuhn('5555555535554444'))
  .isFalse()
  .bool(isLuhn('5105105155105100'))
  .isFalse()
  .bool(isLuhn('4111111141111111'))
  .isFalse()
  .bool(isLuhn('4012888848881881'))
  .isFalse()
  .bool(isLuhn('4222222232222'))
  .isFalse();
```

should return false for integers not passing the Luhn algorithm.

```js
unit
  .bool(isLuhn(14))
  .isFalse()
  .bool(isLuhn(234987))
  .isFalse()
  .bool(isLuhn(-2398))
  .isFalse()
  .bool(isLuhn(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isLuhn(98.00007))
  .isFalse()
  .bool(isLuhn(-32407.3))
  .isFalse()
  .bool(isLuhn(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isLuhn(noop))
  .isFalse()
  .bool(isLuhn(isLuhn))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isLuhn('adsf'))
  .isFalse()
  .bool(isLuhn('34.t'))
  .isFalse()
  .bool(isLuhn('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isLuhn(/asd/u))
  .isFalse()
  .bool(isLuhn(/\d+/u))
  .isFalse()
  .bool(isLuhn(/1/u))
  .isFalse()
  .bool(isLuhn(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isLuhn([]))
  .isFalse()
  .bool(isLuhn([1, 2, 3]))
  .isFalse()
  .bool(isLuhn(['a', 5, {}]))
  .isFalse();
```

<a name="ismacaddress"></a>
# #isMACAddress
should be a function.

```js
unit
  .function(isMACAddress);
```

should return true for valid MAC address strings.

```js
unit
  .bool(isMACAddress('af:4f:a8:93:01:d2'))
  .isTrue()
  .bool(isMACAddress('5c:ff:1a:c8:bc:a0'))
  .isTrue()
  .bool(isMACAddress('fa:28:d4:f8:aa:01'))
  .isTrue()
  .bool(isMACAddress('56:73:37:f7:ad:c2'))
  .isTrue()
  .bool(isMACAddress('d2:39:67:bb:5c:f8'))
  .isTrue()
  .bool(isMACAddress('9d:dd:70:fa:c5:2b'))
  .isTrue()
  .bool(isMACAddress('7a:ff:d2:48:f3:9f'))
  .isTrue();
```

should return false for invalid MAC address strings.

```js
unit
  .bool(isMACAddress('af:4f:a8:f93:01:d2'))
  .isFalse()
  .bool(isMACAddress('af:4f:a8:h3:01:d2'))
  .isFalse()
  .bool(isMACAddress('af:4f:a8:93:01'))
  .isFalse()
  .bool(isMACAddress('*&TYY'))
  .isFalse()
  .bool(isMACAddress('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isMACAddress('sdf.,.mdf'))
  .isFalse()
  .bool(isMACAddress('we;o9tu49'))
  .isFalse()
  .bool(isMACAddress('q23qo98441`'))
  .isFalse()
  .bool(isMACAddress('ewr09ti34*&'))
  .isFalse()
  .bool(isMACAddress('%sdkjvnnd'))
  .isFalse()
  .bool(isMACAddress('=adkljfhsd'))
  .isFalse()
  .bool(isMACAddress('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isMACAddress('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isMACAddress(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isMACAddress(14))
  .isFalse()
  .bool(isMACAddress(234987))
  .isFalse()
  .bool(isMACAddress(-2398))
  .isFalse()
  .bool(isMACAddress(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isMACAddress(98.00007))
  .isFalse()
  .bool(isMACAddress(-32407.3))
  .isFalse()
  .bool(isMACAddress(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isMACAddress(noop))
  .isFalse()
  .bool(isMACAddress(isMACAddress))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isMACAddress(/asd/u))
  .isFalse()
  .bool(isMACAddress(/\d+/u))
  .isFalse()
  .bool(isMACAddress(/1/u))
  .isFalse()
  .bool(isMACAddress(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isMACAddress([]))
  .isFalse()
  .bool(isMACAddress([1, 2, 3]))
  .isFalse()
  .bool(isMACAddress(['a', 5, {}]))
  .isFalse();
```

<a name="ismd5"></a>
# #isMD5
should be a function.

```js
unit
  .function(isMD5);
```

should return true for valid MD5 strings.

```js
unit
  .bool(isMD5('62c4f0b4dbe2a9cf80e003bdd7011f54'))
  .isTrue()
  .bool(isMD5('db755bf69b1e53b94502c41dae860344'))
  .isTrue()
  .bool(isMD5('93d7c4f1405d323a34273d2ec04ad13c'))
  .isTrue()
  .bool(isMD5('ae898bce08fcd570d7e36d3409237739'))
  .isTrue()
  .bool(isMD5('1e65382d1447e877d867947269bbfebf'))
  .isTrue()
  .bool(isMD5('f9ac64ad54ed5add763e588938f6ac9a'))
  .isTrue()
  .bool(isMD5('190102c2743633072e050c8d697faebc'))
  .isTrue();
```

should return false for invalid MD5 strings.

```js
unit
  .bool(isMD5('190102c2743633072e050c8d697faebx'))
  .isFalse()
  .bool(isMD5('af:hf:a8:93:01:d2'))
  .isFalse()
  .bool(isMD5('af:4f:a8:93:01'))
  .isFalse()
  .bool(isMD5('*&TYY'))
  .isFalse()
  .bool(isMD5('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isMD5('sdf.,.mdf'))
  .isFalse()
  .bool(isMD5('we;o9tu49'))
  .isFalse()
  .bool(isMD5('q23qo98441`'))
  .isFalse()
  .bool(isMD5('ewr09ti34*&'))
  .isFalse()
  .bool(isMD5('%sdkjvnnd'))
  .isFalse()
  .bool(isMD5('=adkljfhsd'))
  .isFalse()
  .bool(isMD5('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isMD5('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isMD5(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isMD5(14))
  .isFalse()
  .bool(isMD5(234987))
  .isFalse()
  .bool(isMD5(-2398))
  .isFalse()
  .bool(isMD5(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isMD5(98.00007))
  .isFalse()
  .bool(isMD5(-32407.3))
  .isFalse()
  .bool(isMD5(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isMD5(noop))
  .isFalse()
  .bool(isMD5(isMD5))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isMD5(/asd/u))
  .isFalse()
  .bool(isMD5(/\d+/u))
  .isFalse()
  .bool(isMD5(/1/u))
  .isFalse()
  .bool(isMD5(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isMD5([]))
  .isFalse()
  .bool(isMD5([1, 2, 3]))
  .isFalse()
  .bool(isMD5(['a', 5, {}]))
  .isFalse();
```

<a name="ismap"></a>
# #isMap
should be a function.

```js
unit
  .function(isMap);
```

should return true for Map objects.

```js
unit
  .bool(isMap(new Map()))
  .isTrue()
  .bool(isMap(new Map([['value', '3']])))
  .isTrue();
```

should return false for WeakMap objects.

```js
unit
  .bool(isMap(new WeakMap()))
  .isFalse()
  .bool(isMap(new WeakMap([
    [
      {
        a: 4,
      },
      4,
    ],
  ])))
  .isFalse();
```

should return false for Set objects.

```js
unit
  .bool(isMap(new Set()))
  .isFalse()
  .bool(isMap(new Set([4])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isMap(new WeakSet()))
  .isFalse()
  .bool(isMap(new WeakSet([
    {
      a: 4,
    },
  ])))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isMap(1))
  .isFalse()
  .bool(isMap(234987))
  .isFalse()
  .bool(isMap(-239874))
  .isFalse()
  .bool(isMap(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isMap(1.1))
  .isFalse()
  .bool(isMap(-0.4))
  .isFalse()
  .bool(isMap(234.4))
  .isFalse()
  .bool(isMap(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isMap('adsf'))
  .isFalse()
  .bool(isMap('34.6'))
  .isFalse()
  .bool(isMap('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isMap({}))
  .isFalse()
  .bool(isMap(new String('asd')))
  .isFalse()
  .bool(isMap({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isMap([]))
  .isFalse()
  .bool(isMap([1, 2]))
  .isFalse()
  .bool(isMap(['a', {}, 6]))
  .isFalse();
```

<a name="ismastercard"></a>
# #isMastercard
should be a function.

```js
unit
  .function(isMastercard);
```

should return true for valid account numbers.

```js
unit
  .bool(isMastercard('5555555555554444'))
  .isTrue()
  .bool(isMastercard('5105105105105100'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isMastercard('378282246310004'))
  .isFalse()
  .bool(isMastercard('378282246310006'))
  .isFalse()
  .bool(isMastercard('371449635398430'))
  .isFalse()
  .bool(isMastercard('371449635398432'))
  .isFalse()
  .bool(isMastercard('5610591081018250'))
  .isFalse()
  .bool(isMastercard('30569309025904'))
  .isFalse()
  .bool(isMastercard('6011111111111117'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isMastercard(14))
  .isFalse()
  .bool(isMastercard(234987))
  .isFalse()
  .bool(isMastercard(-2398))
  .isFalse()
  .bool(isMastercard(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isMastercard(98.00007))
  .isFalse()
  .bool(isMastercard(-32407.3))
  .isFalse()
  .bool(isMastercard(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isMastercard(noop))
  .isFalse()
  .bool(isMastercard(isMastercard))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isMastercard('adsf'))
  .isFalse()
  .bool(isMastercard('34.t'))
  .isFalse()
  .bool(isMastercard('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isMastercard(/asd/u))
  .isFalse()
  .bool(isMastercard(/\d+/u))
  .isFalse()
  .bool(isMastercard(/1/u))
  .isFalse()
  .bool(isMastercard(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isMastercard([]))
  .isFalse()
  .bool(isMastercard([1, 2, 3]))
  .isFalse()
  .bool(isMastercard(['a', 5, {}]))
  .isFalse();
```

<a name="ismatch"></a>
# #isMatch
should be a function.

```js
unit
  .function(isMatch);
```

should return true for objects containing matching properties.

```js
const test = {
  a: 5,
  b: 'bye',
};
unit
  .bool(isMatch(test, {
    a: 5,
  }))
  .isTrue()
  .bool(isMatch(test, {
    b: 'bye',
  }))
  .isTrue()
  .bool(isMatch(test, {
    a: 5,
    b: 'bye',
  }))
  .isTrue()
  .bool(isMatch(test, {}))
  .isTrue();
```

should return false for objects not matching properties.

```js
const test = {
  a: 5,
  b: 'bye',
};
unit
  .bool(isMatch(test, {
    a: 6,
  }))
  .isFalse()
  .bool(isMatch(test, {
    b: 'hi',
  }))
  .isFalse()
  .bool(isMatch(test, {
    a: 5,
    b: 'b',
  }))
  .isFalse()
  .bool(isMatch(test, {
    c: 5,
  }))
  .isFalse();
```

<a name="ismongoid"></a>
# #isMongoId
should be a function.

```js
unit
  .function(isMongoId);
```

should return true for valid Mongo ID strings.

```js
unit
  .bool(isMongoId('62c4f0b4dbe2a9cf80e003bd'))
  .isTrue()
  .bool(isMongoId('db755bf69b1e53b94502c41d'))
  .isTrue()
  .bool(isMongoId('93d7c4f1405d323a34273d2e'))
  .isTrue()
  .bool(isMongoId('ae898bce08fcd570d7e36d34'))
  .isTrue()
  .bool(isMongoId('1e65382d1447e877d8679472'))
  .isTrue()
  .bool(isMongoId('f9ac64ad54ed5add763e5889'))
  .isTrue()
  .bool(isMongoId('190102c2743633072e050c8d'))
  .isTrue();
```

should return false for invalid Mongo ID strings.

```js
unit
  .bool(isMongoId('ae898bce08fcd570d7e36d3g'))
  .isFalse()
  .bool(isMongoId('af:hf:a8:93:01:d2'))
  .isFalse()
  .bool(isMongoId('af:4f:a8:93:01'))
  .isFalse()
  .bool(isMongoId('*&TYY'))
  .isFalse()
  .bool(isMongoId('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isMongoId('sdf.,.mdf'))
  .isFalse()
  .bool(isMongoId('we;o9tu49'))
  .isFalse()
  .bool(isMongoId('q23qo98441`'))
  .isFalse()
  .bool(isMongoId('ewr09ti34*&'))
  .isFalse()
  .bool(isMongoId('%sdkjvnnd'))
  .isFalse()
  .bool(isMongoId('=adkljfhsd'))
  .isFalse()
  .bool(isMongoId('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isMongoId('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isMongoId(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isMongoId(14))
  .isFalse()
  .bool(isMongoId(234987))
  .isFalse()
  .bool(isMongoId(-2398))
  .isFalse()
  .bool(isMongoId(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isMongoId(98.00007))
  .isFalse()
  .bool(isMongoId(-32407.3))
  .isFalse()
  .bool(isMongoId(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isMongoId(noop))
  .isFalse()
  .bool(isMongoId(isMongoId))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isMongoId(/asd/u))
  .isFalse()
  .bool(isMongoId(/\d+/u))
  .isFalse()
  .bool(isMongoId(/1/u))
  .isFalse()
  .bool(isMongoId(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isMongoId([]))
  .isFalse()
  .bool(isMongoId([1, 2, 3]))
  .isFalse()
  .bool(isMongoId(['a', 5, {}]))
  .isFalse();
```

<a name="isnan"></a>
# #isNaN
should be a function.

```js
unit
  .function(isNaN);
```

should return true for NaN.

```js
unit
  .bool(isNaN(0 / 0))
  .isTrue()
  .bool(isNaN(1 - 'a'))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isNaN(1))
  .isFalse()
  .bool(isNaN(234987))
  .isFalse()
  .bool(isNaN(-239874))
  .isFalse()
  .bool(isNaN(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isNaN(1.1))
  .isFalse()
  .bool(isNaN(-0.4))
  .isFalse()
  .bool(isNaN(234.4))
  .isFalse()
  .bool(isNaN(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isNaN('adsf'))
  .isFalse()
  .bool(isNaN('34.6'))
  .isFalse()
  .bool(isNaN('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isNaN(/asd/u))
  .isFalse()
  .bool(isNaN(/\d+/u))
  .isFalse()
  .bool(isNaN(/1/u))
  .isFalse()
  .bool(isNaN(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isNaN({}))
  .isFalse()
  .bool(isNaN(new String('asd')))
  .isFalse()
  .bool(isNaN({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isNaN([]))
  .isFalse()
  .bool(isNaN([1, 2]))
  .isFalse()
  .bool(isNaN(['a', {}, 6]))
  .isFalse();
```

<a name="isnull"></a>
# #isNull
should be a function.

```js
unit
  .function(isNull);
```

should return true for null.

```js
unit
  .bool(isNull(null))
  .isTrue();
```

should return false for undefined.

```js
unit
  .bool(isNull(undefined))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isNull(1))
  .isFalse()
  .bool(isNull(234987))
  .isFalse()
  .bool(isNull(-239874))
  .isFalse()
  .bool(isNull(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isNull(1.1))
  .isFalse()
  .bool(isNull(-0.4))
  .isFalse()
  .bool(isNull(234.4))
  .isFalse()
  .bool(isNull(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isNull('adsf'))
  .isFalse()
  .bool(isNull('34.6'))
  .isFalse()
  .bool(isNull('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isNull(/asd/u))
  .isFalse()
  .bool(isNull(/\d+/u))
  .isFalse()
  .bool(isNull(/1/u))
  .isFalse()
  .bool(isNull(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isNull({}))
  .isFalse()
  .bool(isNull(new String('asd')))
  .isFalse()
  .bool(isNull({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isNull([]))
  .isFalse()
  .bool(isNull([1, 2]))
  .isFalse()
  .bool(isNull(['a', {}, 6]))
  .isFalse();
```

<a name="isphonenumber"></a>
# #isPhoneNumber
should be a function.

```js
unit
  .function(isPhoneNumber);
```

should return true for valid phone numbers with international calling code.

```js
unit
  .bool(isPhoneNumber('+1 650-253-0000'))
  .isTrue()
  .bool(isPhoneNumber('+1 800-642-7676'))
  .isTrue()
  .bool(isPhoneNumber('+1 800–692–7753'))
  .isTrue()
  .bool(isPhoneNumber('+44 20 7416 5000'))
  .isTrue()
  .bool(isPhoneNumber('+44 20 7638 4141'))
  .isTrue()
  .bool(isPhoneNumber('+44 871 894 3000'))
  .isTrue()
  .bool(isPhoneNumber('+52 55 5546 7670'))
  .isTrue()
  .bool(isPhoneNumber('+52 55 4040 5300'))
  .isTrue()
  .bool(isPhoneNumber('+61 7 3252 0666'))
  .isTrue()
  .bool(isPhoneNumber('+61 7 3176 2111'))
  .isTrue()
  .bool(isPhoneNumber('+7 499 907-07-22'))
  .isTrue()
  .bool(isPhoneNumber('+7 495 688-07-44'))
  .isTrue()
  .bool(isPhoneNumber('+852 3955 0581'))
  .isTrue()
  .bool(isPhoneNumber('+86 21 3253 1090'))
  .isTrue()
  .bool(isPhoneNumber('+86 21 5407 7000'))
  .isTrue()
  .bool(isPhoneNumber('+66 2 132 1888'))
  .isTrue()
  .bool(isPhoneNumber('+66 2 667 1000'))
  .isTrue();
```

should return true for valid phone numbers with ios3166-1 alpha-2 code.

```js
unit
  .bool(isPhoneNumber('650-253-0000', 'US'))
  .isTrue()
  .bool(isPhoneNumber('806-642-7676', 'US'))
  .isTrue()
  .bool(isPhoneNumber('406–692–7753', 'US'))
  .isTrue()
  .bool(isPhoneNumber('020 76140100', 'GB'))
  .isTrue()
  .bool(isPhoneNumber('020 35030000', 'GB'))
  .isTrue()
  .bool(isPhoneNumber('0161 8359929', 'GB'))
  .isTrue()
  .bool(isPhoneNumber('01453 884643', 'GB'))
  .isTrue()
  .bool(isPhoneNumber('55 5521 4181', 'MX'))
  .isTrue()
  .bool(isPhoneNumber('55 5226 2663', 'MX'))
  .isTrue()
  .bool(isPhoneNumber('2 9351 2222', 'AU'))
  .isTrue()
  .bool(isPhoneNumber('2 9282 2833', 'AU'))
  .isTrue()
  .bool(isPhoneNumber('499 244-45-81', 'RU'))
  .isTrue()
  .bool(isPhoneNumber('499 248-30-03', 'RU'))
  .isTrue()
  .bool(isPhoneNumber('3955 0581', 'HK'))
  .isTrue()
  .bool(isPhoneNumber('10 6301 2835', 'CN'))
  .isTrue()
  .bool(isPhoneNumber('10 6511 8101', 'CN'))
  .isTrue()
  .bool(isPhoneNumber('2 132 1888', 'TH'))
  .isTrue()
  .bool(isPhoneNumber('2 667 1000', 'TH'))
  .isTrue();
```

should return true for valid phone numbers with ios3166-1 alpha-3 code.

```js
unit
  .bool(isPhoneNumber('650-253-0000', 'USA'))
  .isTrue()
  .bool(isPhoneNumber('806-642-7676', 'USA'))
  .isTrue()
  .bool(isPhoneNumber('406–692–7753', 'USA'))
  .isTrue()
  .bool(isPhoneNumber('020 76140100', 'GBR'))
  .isTrue()
  .bool(isPhoneNumber('020 35030000', 'GBR'))
  .isTrue()
  .bool(isPhoneNumber('0161 8359929', 'GBR'))
  .isTrue()
  .bool(isPhoneNumber('01453 884643', 'GBR'))
  .isTrue()
  .bool(isPhoneNumber('55 5521 4181', 'MEX'))
  .isTrue()
  .bool(isPhoneNumber('55 5226 2663', 'MEX'))
  .isTrue()
  .bool(isPhoneNumber('2 9351 2222', 'AUS'))
  .isTrue()
  .bool(isPhoneNumber('2 9282 2833', 'AUS'))
  .isTrue()
  .bool(isPhoneNumber('499 244-45-81', 'RUS'))
  .isTrue()
  .bool(isPhoneNumber('499 248-30-03', 'RUS'))
  .isTrue()
  .bool(isPhoneNumber('3955 0581', 'HKG'))
  .isTrue()
  .bool(isPhoneNumber('10 6301 2835', 'CHN'))
  .isTrue()
  .bool(isPhoneNumber('10 6511 8101', 'CHN'))
  .isTrue()
  .bool(isPhoneNumber('2 132 1888', 'THA'))
  .isTrue()
  .bool(isPhoneNumber('2 667 1000', 'THA'))
  .isTrue();
```

should return true for valid phone numbers with ios3166-1 numeric code.

```js
unit
  .bool(isPhoneNumber('650-253-0000', '840'))
  .isTrue()
  .bool(isPhoneNumber('806-642-7676', '840'))
  .isTrue()
  .bool(isPhoneNumber('406–692–7753', '840'))
  .isTrue()
  .bool(isPhoneNumber('020 76140100', '826'))
  .isTrue()
  .bool(isPhoneNumber('020 35030000', '826'))
  .isTrue()
  .bool(isPhoneNumber('0161 8359929', '826'))
  .isTrue()
  .bool(isPhoneNumber('01453 884643', '826'))
  .isTrue()
  .bool(isPhoneNumber('55 5521 4181', '484'))
  .isTrue()
  .bool(isPhoneNumber('55 5226 2663', '484'))
  .isTrue()
  .bool(isPhoneNumber('2 9351 2222', '036'))
  .isTrue()
  .bool(isPhoneNumber('2 9282 2833', '036'))
  .isTrue()
  .bool(isPhoneNumber('499 244-45-81', '643'))
  .isTrue()
  .bool(isPhoneNumber('499 248-30-03', '643'))
  .isTrue()
  .bool(isPhoneNumber('3955 0581', '344'))
  .isTrue()
  .bool(isPhoneNumber('10 6301 2835', '156'))
  .isTrue()
  .bool(isPhoneNumber('10 6511 8101', '156'))
  .isTrue()
  .bool(isPhoneNumber('2 132 1888', '764'))
  .isTrue()
  .bool(isPhoneNumber('2 667 1000', '764'))
  .isTrue();
```

should return true for valid phone numbers with @scuba-squad/country.

```js
const test = {
  US: Country.getByIso2Code('US'),
  GB: Country.getByIso2Code('GB'),
  MX: Country.getByIso2Code('MX'),
  AU: Country.getByIso2Code('AU'),
  RU: Country.getByIso2Code('RU'),
  HK: Country.getByIso2Code('HK'),
  CN: Country.getByIso2Code('CN'),
  TH: Country.getByIso2Code('TH'),
};
unit
  .bool(isPhoneNumber('650-253-0000', test.US))
  .isTrue()
  .bool(isPhoneNumber('806-642-7676', test.US))
  .isTrue()
  .bool(isPhoneNumber('406–692–7753', test.US))
  .isTrue()
  .bool(isPhoneNumber('020 76140100', test.GB))
  .isTrue()
  .bool(isPhoneNumber('020 35030000', test.GB))
  .isTrue()
  .bool(isPhoneNumber('0161 8359929', test.GB))
  .isTrue()
  .bool(isPhoneNumber('01453 884643', test.GB))
  .isTrue()
  .bool(isPhoneNumber('55 5521 4181', test.MX))
  .isTrue()
  .bool(isPhoneNumber('55 5226 2663', test.MX))
  .isTrue()
  .bool(isPhoneNumber('2 9351 2222', test.AU))
  .isTrue()
  .bool(isPhoneNumber('2 9282 2833', test.AU))
  .isTrue()
  .bool(isPhoneNumber('499 244-45-81', test.RU))
  .isTrue()
  .bool(isPhoneNumber('499 248-30-03', test.RU))
  .isTrue()
  .bool(isPhoneNumber('3955 0581', test.HK))
  .isTrue()
  .bool(isPhoneNumber('10 6301 2835', test.CN))
  .isTrue()
  .bool(isPhoneNumber('10 6511 8101', test.CN))
  .isTrue()
  .bool(isPhoneNumber('2 132 1888', test.TH))
  .isTrue()
  .bool(isPhoneNumber('2 667 1000', test.TH))
  .isTrue();
```

should return false for valid phone numbers with international calling code with invalid country code.

```js
unit
  .bool(isPhoneNumber('+1 650-253-0000', 'MX'))
  .isFalse()
  .bool(isPhoneNumber('+1 800-642-7676', 'RUS'))
  .isFalse()
  .bool(isPhoneNumber('+1 800–692–7753', 'AU'))
  .isFalse()
  .bool(isPhoneNumber('+44 20 7416 5000', 'CN'))
  .isFalse()
  .bool(isPhoneNumber('+44 20 7638 4141', 'HK'))
  .isFalse()
  .bool(isPhoneNumber('+44 871 894 3000', 'TH'))
  .isFalse()
  .bool(isPhoneNumber('+52 55 5546 7670', 'VN'))
  .isFalse()
  .bool(isPhoneNumber('+52 55 4040 5300', 'DK'))
  .isFalse()
  .bool(isPhoneNumber('+61 7 3252 0666', 'CA'))
  .isFalse()
  .bool(isPhoneNumber('+61 7 3176 2111', 'MX'))
  .isFalse()
  .bool(isPhoneNumber('+7 499 907-07-22', 'TZ'))
  .isFalse()
  .bool(isPhoneNumber('+7 495 688-07-44', 'US'))
  .isFalse()
  .bool(isPhoneNumber('+852 3955 0581', 'NZ'))
  .isFalse()
  .bool(isPhoneNumber('+86 21 3253 1090', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('+86 21 5407 7000', 'CU'))
  .isFalse()
  .bool(isPhoneNumber('+66 2 132 1888', 'IS'))
  .isFalse()
  .bool(isPhoneNumber('+66 2 667 1000', 'MV'))
  .isFalse();
```

should return false for valid phone numbers with invalid country code.

```js
unit
  .bool(isPhoneNumber('650-253-0000', 'MX'))
  .isFalse()
  .bool(isPhoneNumber('806-642-7676', 'CN'))
  .isFalse()
  .bool(isPhoneNumber('406–692–7753', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('020 76140100', 'US'))
  .isFalse()
  .bool(isPhoneNumber('020 35030000', 'RU'))
  .isFalse()
  .bool(isPhoneNumber('0161 8359929', 'AU'))
  .isFalse()
  .bool(isPhoneNumber('01453 884643', 'CN'))
  .isFalse()
  .bool(isPhoneNumber('55 5521 4181', 'US'))
  .isFalse()
  .bool(isPhoneNumber('55 5226 2663', 'RU'))
  .isFalse()
  .bool(isPhoneNumber('2 9351 2222', 'RU'))
  .isFalse()
  .bool(isPhoneNumber('2 9282 2833', 'TH'))
  .isFalse()
  .bool(isPhoneNumber('499 244-45-81', 'AU'))
  .isFalse()
  .bool(isPhoneNumber('499 248-30-03', 'US'))
  .isFalse()
  .bool(isPhoneNumber('852 3955 0581', 'US'))
  .isFalse()
  .bool(isPhoneNumber('10 6301 2835', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('10 6511 8101', 'TH'))
  .isFalse()
  .bool(isPhoneNumber('2 132 1888', 'RU'))
  .isFalse()
  .bool(isPhoneNumber('2 667 1000', 'US'))
  .isFalse();
```

should return false for invalid phone numbers.

```js
unit
  .bool(isPhoneNumber('123-253-0000', 'US'))
  .isFalse()
  .bool(isPhoneNumber('999-642-7676', 'US'))
  .isFalse()
  .bool(isPhoneNumber('555–692–7753', 'US'))
  .isFalse()
  .bool(isPhoneNumber('921 76140100', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('35030000', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('2222 8359929', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('22 01453 884643', 'GB'))
  .isFalse()
  .bool(isPhoneNumber('57 5521 4181', 'MX'))
  .isFalse()
  .bool(isPhoneNumber('11 5226 2663', 'MX'))
  .isFalse()
  .bool(isPhoneNumber('0 9351 2222', 'AU'))
  .isFalse()
  .bool(isPhoneNumber('6 9282 2833', 'AU'))
  .isFalse()
  .bool(isPhoneNumber('111 244-45-81', 'RU'))
  .isFalse()
  .bool(isPhoneNumber('191 248-30-03', 'RU'))
  .isFalse()
  .bool(isPhoneNumber('+863 3955 0581', 'CN'))
  .isFalse()
  .bool(isPhoneNumber('00 6301 2835', 'CN'))
  .isFalse()
  .bool(isPhoneNumber('69 6511 8101', 'CN'))
  .isFalse()
  .bool(isPhoneNumber('6 132 1888', 'TH'))
  .isFalse()
  .bool(isPhoneNumber('9 667 1000', 'TH'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isPhoneNumber(14))
  .isFalse()
  .bool(isPhoneNumber(234987))
  .isFalse()
  .bool(isPhoneNumber(-2398))
  .isFalse()
  .bool(isPhoneNumber(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isPhoneNumber(98.00007))
  .isFalse()
  .bool(isPhoneNumber(-32407.3))
  .isFalse()
  .bool(isPhoneNumber(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isPhoneNumber(noop))
  .isFalse()
  .bool(isPhoneNumber(isPhoneNumber))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isPhoneNumber('adsf'))
  .isFalse()
  .bool(isPhoneNumber('34.t'))
  .isFalse()
  .bool(isPhoneNumber('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isPhoneNumber(/asd/u))
  .isFalse()
  .bool(isPhoneNumber(/\d+/u))
  .isFalse()
  .bool(isPhoneNumber(/1/u))
  .isFalse()
  .bool(isPhoneNumber(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPhoneNumber([]))
  .isFalse()
  .bool(isPhoneNumber([1, 2, 3]))
  .isFalse()
  .bool(isPhoneNumber(['a', 5, {}]))
  .isFalse();
```

<a name="isplural"></a>
# #isPlural
should be a function.

```js
unit
  .function(isPlural);
```

should return true for plural strings.

```js
unit
  .bool(isPlural('items'))
  .isTrue()
  .bool(isPlural('cars'))
  .isTrue()
  .bool(isPlural('bars'))
  .isTrue()
  .bool(isPlural('tables'))
  .isTrue()
  .bool(isPlural('chairs'))
  .isTrue();
```

should return false for singular strings.

```js
unit
  .bool(isPlural('item'))
  .isFalse()
  .bool(isPlural('car'))
  .isFalse()
  .bool(isPlural('bar'))
  .isFalse()
  .bool(isPlural('table'))
  .isFalse()
  .bool(isPlural('chair'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isPlural(14))
  .isFalse()
  .bool(isPlural(234987))
  .isFalse()
  .bool(isPlural(-2398))
  .isFalse()
  .bool(isPlural(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isPlural(98.00007))
  .isFalse()
  .bool(isPlural(-32407.3))
  .isFalse()
  .bool(isPlural(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isPlural(noop))
  .isFalse()
  .bool(isPlural(isPlural))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isPlural(/asd/u))
  .isFalse()
  .bool(isPlural(/\d+/u))
  .isFalse()
  .bool(isPlural(/1/u))
  .isFalse()
  .bool(isPlural(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPlural([]))
  .isFalse()
  .bool(isPlural([1, 2, 3]))
  .isFalse()
  .bool(isPlural(['a', 5, {}]))
  .isFalse();
```

should return false for null.

```js
unit
  .bool(isPlural(null))
  .isFalse();
```

should return false for undefined.

```js
unit
  .bool(isPlural())
  .isFalse()
  .bool(isPlural(undefined))
  .isFalse();
```

<a name="isport"></a>
# #isPort
should be a function.

```js
unit
  .function(isPort);
```

should return true for valid port numbers.

```js
unit
  .bool(isPort(1))
  .isTrue()
  .bool(isPort(65535))
  .isTrue()
  .bool(isPort(80))
  .isTrue()
  .bool(isPort(26))
  .isTrue()
  .bool(isPort(443))
  .isTrue();
```

should return true for parsable port numbers.

```js
unit
  .bool(isPort('80'))
  .isTrue()
  .bool(isPort('26'))
  .isTrue()
  .bool(isPort('8000'))
  .isTrue();
```

should return true for objects that stringify to a port number.

```js
unit
  .bool(isPort(new String('80')))
  .isTrue()
  .bool(isPort(new BigNumber('8080')))
  .isTrue();
```

should return false for value < 1 or > 65535.

```js
unit
  .bool(isPort(0))
  .isFalse()
  .bool(isPort(65536))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isPort(noop))
  .isFalse()
  .bool(isPort(isPort))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isPort('adsf'))
  .isFalse()
  .bool(isPort('34.t'))
  .isFalse()
  .bool(isPort('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isPort(/asd/u))
  .isFalse()
  .bool(isPort(/\d+/u))
  .isFalse()
  .bool(isPort(/1/u))
  .isFalse()
  .bool(isPort(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPort([]))
  .isFalse()
  .bool(isPort([1, 2, 3]))
  .isFalse()
  .bool(isPort(['a', 5, {}]))
  .isFalse();
```

should return false for objects that dont stringify to a latitude.

```js
unit
  .bool(isPort({}))
  .isFalse()
  .bool(isPort(new String('asd')))
  .isFalse()
  .bool(isPort({
    a: 5,
  }))
  .isFalse();
```

<a name="ispostalcode"></a>
# #isPostalCode
should be a function.

```js
unit
  .function(isPostalCode);
```

should return true for valid postal codes from any country when country is not provided.

```js
unit
  .bool(isPostalCode('90210'))
  .isTrue()
  .bool(isPostalCode('91154 1034'))
  .isTrue()
  .bool(isPostalCode('91154-1034'))
  .isTrue()
  .bool(isPostalCode('911541034'))
  .isTrue()
  .bool(isPostalCode('ab5g 9wt'))
  .isTrue()
  .bool(isPostalCode('ab5g-9wt'))
  .isTrue()
  .bool(isPostalCode('ab5g9wt'))
  .isTrue()
  .bool(isPostalCode('37850'))
  .isTrue()
  .bool(isPostalCode('85138'))
  .isTrue()
  .bool(isPostalCode('6391'))
  .isTrue()
  .bool(isPostalCode('9652'))
  .isTrue()
  .bool(isPostalCode('453901'))
  .isTrue()
  .bool(isPostalCode('675239'))
  .isTrue()
  .bool(isPostalCode('728451'))
  .isTrue()
  .bool(isPostalCode('853832'))
  .isTrue()
  .bool(isPostalCode('907424'))
  .isTrue()
  .bool(isPostalCode('70257'))
  .isTrue()
  .bool(isPostalCode('52835'))
  .isTrue();
```

should return true for valid postal codes with ISO3166-1 alpha-2 code.

```js
unit
  .bool(isPostalCode('90210', 'US'))
  .isTrue()
  .bool(isPostalCode('91154 1034', 'US'))
  .isTrue()
  .bool(isPostalCode('91154-1034', 'US'))
  .isTrue()
  .bool(isPostalCode('911541034', 'US'))
  .isTrue()
  .bool(isPostalCode('ab5g 9wt', 'GB'))
  .isTrue()
  .bool(isPostalCode('ab5g-9wt', 'GB'))
  .isTrue()
  .bool(isPostalCode('ab5g9wt', 'GB'))
  .isTrue()
  .bool(isPostalCode('37850', 'MX'))
  .isTrue()
  .bool(isPostalCode('85138', 'MX'))
  .isTrue()
  .bool(isPostalCode('6391', 'AU'))
  .isTrue()
  .bool(isPostalCode('9652', 'AU'))
  .isTrue()
  .bool(isPostalCode('453901', 'RU'))
  .isTrue()
  .bool(isPostalCode('675239', 'RU'))
  .isTrue()
  .bool(isPostalCode('728451', 'CN'))
  .isTrue()
  .bool(isPostalCode('853832', 'CN'))
  .isTrue()
  .bool(isPostalCode('907424', 'CN'))
  .isTrue()
  .bool(isPostalCode('70257', 'TH'))
  .isTrue()
  .bool(isPostalCode('52835', 'TH'))
  .isTrue();
```

should return true for valid postal codes with ISO3166-1 alpha-3 code.

```js
unit
  .bool(isPostalCode('90210', 'USA'))
  .isTrue()
  .bool(isPostalCode('91154 1034', 'USA'))
  .isTrue()
  .bool(isPostalCode('91154-1034', 'USA'))
  .isTrue()
  .bool(isPostalCode('911541034', 'USA'))
  .isTrue()
  .bool(isPostalCode('ab5g 9wt', 'GBR'))
  .isTrue()
  .bool(isPostalCode('ab5g-9wt', 'GBR'))
  .isTrue()
  .bool(isPostalCode('ab5g9wt', 'GBR'))
  .isTrue()
  .bool(isPostalCode('37850', 'MEX'))
  .isTrue()
  .bool(isPostalCode('85138', 'MEX'))
  .isTrue()
  .bool(isPostalCode('6391', 'AUS'))
  .isTrue()
  .bool(isPostalCode('9652', 'AUS'))
  .isTrue()
  .bool(isPostalCode('453901', 'RUS'))
  .isTrue()
  .bool(isPostalCode('675239', 'RUS'))
  .isTrue()
  .bool(isPostalCode('728451', 'CHN'))
  .isTrue()
  .bool(isPostalCode('853832', 'CHN'))
  .isTrue()
  .bool(isPostalCode('907424', 'CHN'))
  .isTrue()
  .bool(isPostalCode('70257', 'THA'))
  .isTrue()
  .bool(isPostalCode('52835', 'THA'))
  .isTrue();
```

should return true for valid postal codes with ISO3166-1 numeric code.

```js
unit
  .bool(isPostalCode('90210', '840'))
  .isTrue()
  .bool(isPostalCode('91154 1034', '840'))
  .isTrue()
  .bool(isPostalCode('91154-1034', '840'))
  .isTrue()
  .bool(isPostalCode('911541034', '840'))
  .isTrue()
  .bool(isPostalCode('ab5g 9wt', '826'))
  .isTrue()
  .bool(isPostalCode('ab5g-9wt', '826'))
  .isTrue()
  .bool(isPostalCode('ab5g9wt', '826'))
  .isTrue()
  .bool(isPostalCode('37850', '484'))
  .isTrue()
  .bool(isPostalCode('85138', '484'))
  .isTrue()
  .bool(isPostalCode('6391', '036'))
  .isTrue()
  .bool(isPostalCode('9652', '036'))
  .isTrue()
  .bool(isPostalCode('453901', '643'))
  .isTrue()
  .bool(isPostalCode('675239', '643'))
  .isTrue()
  .bool(isPostalCode('728451', '156'))
  .isTrue()
  .bool(isPostalCode('853832', '156'))
  .isTrue()
  .bool(isPostalCode('907424', '156'))
  .isTrue()
  .bool(isPostalCode('70257', '764'))
  .isTrue()
  .bool(isPostalCode('52835', '764'))
  .isTrue();
```

should return true for valid postal codes with @scuba-squad/country.

```js
const test = {
  US: Country.getByIso2Code('US'),
  GB: Country.getByIso2Code('GB'),
  MX: Country.getByIso2Code('MX'),
  AU: Country.getByIso2Code('AU'),
  RU: Country.getByIso2Code('RU'),
  CN: Country.getByIso2Code('CN'),
  TH: Country.getByIso2Code('TH'),
};
unit
  .bool(isPostalCode('90210', test.US))
  .isTrue()
  .bool(isPostalCode('91154 1034', test.US))
  .isTrue()
  .bool(isPostalCode('91154-1034', test.US))
  .isTrue()
  .bool(isPostalCode('911541034', test.US))
  .isTrue()
  .bool(isPostalCode('ab5g 9wt', test.GB))
  .isTrue()
  .bool(isPostalCode('ab5g-9wt', test.GB))
  .isTrue()
  .bool(isPostalCode('ab5g9wt', test.GB))
  .isTrue()
  .bool(isPostalCode('37850', test.MX))
  .isTrue()
  .bool(isPostalCode('85138', test.MX))
  .isTrue()
  .bool(isPostalCode('6391', test.AU))
  .isTrue()
  .bool(isPostalCode('9652', test.AU))
  .isTrue()
  .bool(isPostalCode('453901', test.RU))
  .isTrue()
  .bool(isPostalCode('675239', test.RU))
  .isTrue()
  .bool(isPostalCode('728451', test.CN))
  .isTrue()
  .bool(isPostalCode('853832', test.CN))
  .isTrue()
  .bool(isPostalCode('907424', test.CN))
  .isTrue()
  .bool(isPostalCode('70257', test.TH))
  .isTrue()
  .bool(isPostalCode('52835', test.TH))
  .isTrue();
```

should return false for valid postal codes with invalid country code.

```js
unit
  .bool(isPostalCode('90210', 'AU'))
  .isFalse()
  .bool(isPostalCode('91154 1034', 'AU'))
  .isFalse()
  .bool(isPostalCode('91154-1034', 'AU'))
  .isFalse()
  .bool(isPostalCode('911541034', 'AU'))
  .isFalse()
  .bool(isPostalCode('ab5g 9wt', 'MX'))
  .isFalse()
  .bool(isPostalCode('ab5g-9wt', 'MX'))
  .isFalse()
  .bool(isPostalCode('ab5g9wt', 'MX'))
  .isFalse()
  .bool(isPostalCode('37850', 'GB'))
  .isFalse()
  .bool(isPostalCode('85138', 'GB'))
  .isFalse()
  .bool(isPostalCode('6391', 'US'))
  .isFalse()
  .bool(isPostalCode('9652', 'US'))
  .isFalse()
  .bool(isPostalCode('453901', 'TH'))
  .isFalse()
  .bool(isPostalCode('675239', 'TH'))
  .isFalse()
  .bool(isPostalCode('728451', 'CA'))
  .isFalse()
  .bool(isPostalCode('853832', 'CA'))
  .isFalse()
  .bool(isPostalCode('907424', 'CA'))
  .isFalse()
  .bool(isPostalCode('70257', 'CN'))
  .isFalse()
  .bool(isPostalCode('52835', 'CN'))
  .isFalse();
```

should return false for invalid postal codes.

```js
unit
  .bool(isPostalCode('90-210', 'US'))
  .isFalse()
  .bool(isPostalCode('911 541034', 'US'))
  .isFalse()
  .bool(isPostalCode('9115-41034', 'US'))
  .isFalse()
  .bool(isPostalCode('91151034', 'US'))
  .isFalse()
  .bool(isPostalCode('abtg 9wt', 'GB'))
  .isFalse()
  .bool(isPostalCode('ab5g/9wt', 'GB'))
  .isFalse()
  .bool(isPostalCode('ab5g94t', 'GB'))
  .isFalse()
  .bool(isPostalCode('3750', 'MX'))
  .isFalse()
  .bool(isPostalCode('856138', 'MX'))
  .isFalse()
  .bool(isPostalCode('63951', 'AU'))
  .isFalse()
  .bool(isPostalCode('965', 'AU'))
  .isFalse()
  .bool(isPostalCode('45901', 'RU'))
  .isFalse()
  .bool(isPostalCode('6745239', 'RU'))
  .isFalse()
  .bool(isPostalCode('7287451', 'CN'))
  .isFalse()
  .bool(isPostalCode('85332', 'CN'))
  .isFalse()
  .bool(isPostalCode('907-424', 'CN'))
  .isFalse()
  .bool(isPostalCode('7027', 'TH'))
  .isFalse()
  .bool(isPostalCode('528435', 'TH'))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isPostalCode(noop))
  .isFalse()
  .bool(isPostalCode(isPostalCode))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isPostalCode('adsfghjkl'))
  .isFalse()
  .bool(isPostalCode('34.t'))
  .isFalse()
  .bool(isPostalCode('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isPostalCode(/asd/u))
  .isFalse()
  .bool(isPostalCode(/\d+/u))
  .isFalse()
  .bool(isPostalCode(/1/u))
  .isFalse()
  .bool(isPostalCode(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPostalCode([]))
  .isFalse()
  .bool(isPostalCode([1, 2, 3]))
  .isFalse()
  .bool(isPostalCode(['a', 5, {}]))
  .isFalse();
```

should throw an error when country can not be coerced into a @scuba-squad/country object.

```js
unit
  .error(() => {
    return isPostalCode('12345', {});
  })
  .error(() => {
    return isPostalCode('12345', []);
  })
  .error(() => {
    return isPostalCode('12345', /asdf/);
  })
  .error(() => {
    return isPostalCode('12345', 5);
  })
  .error(() => {
    return isPostalCode('12345', true);
  })
  .error(() => {
    return isPostalCode('12345', 'a');
  });
```

<a name="isprimitive"></a>
# #isPrimitive
should be a function.

```js
unit
  .function(isPrimitive);
```

should return true for undefined.

```js
unit
  .bool(isPrimitive())
  .isTrue()
  .bool(isPrimitive(undefined))
  .isTrue();
```

should return true for null.

```js
unit
  .bool(isPrimitive(null))
  .isTrue();
```

should return true for primitive booleans.

```js
unit
  .bool(isPrimitive(true))
  .isTrue()
  .bool(isPrimitive(false))
  .isTrue();
```

should return true for primitive strings.

```js
unit
  .bool(isPrimitive(''))
  .isTrue()
  .bool(isPrimitive('hello'))
  .isTrue()
  .bool(isPrimitive('#hash'))
  .isTrue();
```

should return true for primitive numbers.

```js
unit
  .bool(isPrimitive(0))
  .isTrue()
  .bool(isPrimitive(1))
  .isTrue()
  .bool(isPrimitive(-1))
  .isTrue()
  .bool(isPrimitive(0.99))
  .isTrue()
  .bool(isPrimitive(-0.99))
  .isTrue();
```

should return true for NaN.

```js
unit
  .bool(isPrimitive(0 / 0))
  .isTrue();
```

should return true for Infinity.

```js
unit
  .bool(isPrimitive(2e308))
  .isTrue()
  .bool(isPrimitive(-2e308))
  .isTrue();
```

should return true for symbols.

```js
unit
  .bool(isPrimitive(Symbol()))
  .isTrue()
  .bool(isPrimitive(Symbol.iterator))
  .isTrue();
```

should return false for boolean objects.

```js
unit
  .bool(isPrimitive(new Boolean()))
  .isFalse()
  .bool(isPrimitive(new Boolean(1)))
  .isFalse();
```

should return false for string objects.

```js
unit
  .bool(isPrimitive(new String()))
  .isFalse()
  .bool(isPrimitive(new String('hello')))
  .isFalse()
  .bool(isPrimitive(new String('#hash')))
  .isFalse();
```

should return false for number objects.

```js
unit
  .bool(isPrimitive(new Number(0)))
  .isFalse()
  .bool(isPrimitive(new Number(1)))
  .isFalse()
  .bool(isPrimitive(new Number(-1)))
  .isFalse()
  .bool(isPrimitive(new Number(0.99)))
  .isFalse()
  .bool(isPrimitive(new Number(-0.99)))
  .isFalse();
```

should return false for NaN number objects.

```js
unit
  .bool(isPrimitive(new Number(0 / 0)))
  .isFalse();
```

should return false for Infinity number objects.

```js
unit
  .bool(isPrimitive(new Number(2e308)))
  .isFalse()
  .bool(isPrimitive(new Number(-2e308)))
  .isFalse();
```

should return false for regular expressions.

```js
unit
  .bool(isPrimitive(/asd/u))
  .isFalse()
  .bool(isPrimitive(/^.*$/u))
  .isFalse();
```

should return false for object wrapped symbols.

```js
unit
  .bool(isPrimitive(Object(Symbol())))
  .isFalse()
  .bool(isPrimitive(Object(Symbol.iterator)))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isPrimitive({}))
  .isFalse()
  .bool(isPrimitive(new Date()))
  .isFalse()
  .bool(isPrimitive(new RegExp('', 'u')))
  .isFalse()
  .bool(isPrimitive(new Set()))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPrimitive([]))
  .isFalse()
  .bool(isPrimitive(new Array()))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isPrimitive(isPrimitive))
  .isFalse()
  .bool(isPrimitive(noop))
  .isFalse();
```

<a name="ispromise"></a>
# #isPromise
should be a function.

```js
unit
  .function(isPromise);
```

should return true for Promise objects.

```js
unit
  .bool(isPromise(new Promise(noop)))
  .isTrue()
  .bool(isPromise(Promise.resolve()))
  .isTrue()
  .bool(isPromise(Promise.reject().catch(noop)))
  .isTrue();
```

should return false for Set objects.

```js
unit
  .bool(isPromise(new Set()))
  .isFalse()
  .bool(isPromise(new Set([4])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isPromise(new WeakSet()))
  .isFalse()
  .bool(isPromise(new WeakSet([
    {
      a: 4,
    },
  ])))
  .isFalse();
```

should return false for Map objects.

```js
unit
  .bool(isPromise(new Map()))
  .isFalse()
  .bool(isPromise(new Map([['value', '3']])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isPromise(new WeakMap()))
  .isFalse()
  .bool(isPromise(new WeakMap([
    [
      {
        a: 4,
      },
      4,
    ],
  ])))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isPromise(1))
  .isFalse()
  .bool(isPromise(234987))
  .isFalse()
  .bool(isPromise(-239874))
  .isFalse()
  .bool(isPromise(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isPromise(1.1))
  .isFalse()
  .bool(isPromise(-0.4))
  .isFalse()
  .bool(isPromise(234.4))
  .isFalse()
  .bool(isPromise(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isPromise('adsf'))
  .isFalse()
  .bool(isPromise('34.6'))
  .isFalse()
  .bool(isPromise('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isPromise({}))
  .isFalse()
  .bool(isPromise(new String('asd')))
  .isFalse()
  .bool(isPromise({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPromise([]))
  .isFalse()
  .bool(isPromise([1, 2]))
  .isFalse()
  .bool(isPromise(['a', {}, 6]))
  .isFalse();
```

<a name="ispunctuation"></a>
# #isPunctuation
should be a function.

```js
unit
  .function(isPunctuation);
```

should return true for valid punctuation only strings.

```js
unit
  .bool(isPunctuation('#!@'))
  .isTrue()
  .bool(isPunctuation('!"#%&\'()*,-./:;?@[]_{}'))
  .isTrue();
```

should return false for invalid strings.

```js
unit
  .bool(isPunctuation('we48tuer'))
  .isFalse()
  .bool(isPunctuation('we[foewf]'))
  .isFalse()
  .bool(isPunctuation('34w98uerj'))
  .isFalse()
  .bool(isPunctuation('*&TYY'))
  .isFalse()
  .bool(isPunctuation('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isPunctuation('sdf.,.mdf'))
  .isFalse()
  .bool(isPunctuation('we;o9tu49'))
  .isFalse()
  .bool(isPunctuation('q23qo98441`'))
  .isFalse()
  .bool(isPunctuation('ewr09ti34*&'))
  .isFalse()
  .bool(isPunctuation('%sdkjvnnd'))
  .isFalse()
  .bool(isPunctuation('=adkljfhsd'))
  .isFalse()
  .bool(isPunctuation('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isPunctuation('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isPunctuation(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isPunctuation(14))
  .isFalse()
  .bool(isPunctuation(234987))
  .isFalse()
  .bool(isPunctuation(-2398))
  .isFalse()
  .bool(isPunctuation(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isPunctuation(98.00007))
  .isFalse()
  .bool(isPunctuation(-32407.3))
  .isFalse()
  .bool(isPunctuation(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isPunctuation(noop))
  .isFalse()
  .bool(isPunctuation(isPunctuation))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isPunctuation(/asd/u))
  .isFalse()
  .bool(isPunctuation(/\d+/u))
  .isFalse()
  .bool(isPunctuation(/1/u))
  .isFalse()
  .bool(isPunctuation(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isPunctuation([]))
  .isFalse()
  .bool(isPunctuation([1, 2, 3]))
  .isFalse()
  .bool(isPunctuation(['a', 5, {}]))
  .isFalse();
```

<a name="isregexp"></a>
# #isRegExp
should be a function.

```js
unit
  .function(isRegExp);
```

should return true for regexs.

```js
unit
  .bool(isRegExp(/asd/u))
  .isTrue()
  .bool(isRegExp(/\d+/u))
  .isTrue()
  .bool(isRegExp(/1/u))
  .isTrue()
  .bool(isRegExp(new RegExp('3', 'u')))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isRegExp(1))
  .isFalse()
  .bool(isRegExp(234987))
  .isFalse()
  .bool(isRegExp(-239874))
  .isFalse()
  .bool(isRegExp(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isRegExp(1.1))
  .isFalse()
  .bool(isRegExp(-0.4))
  .isFalse()
  .bool(isRegExp(234.4))
  .isFalse()
  .bool(isRegExp(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isRegExp('adsf'))
  .isFalse()
  .bool(isRegExp('34.6'))
  .isFalse()
  .bool(isRegExp('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isRegExp({}))
  .isFalse()
  .bool(isRegExp(new String('asd')))
  .isFalse()
  .bool(isRegExp({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isRegExp([]))
  .isFalse()
  .bool(isRegExp([1, 2]))
  .isFalse()
  .bool(isRegExp(['a', {}, 6]))
  .isFalse();
```

<a name="issha1"></a>
# #isSHA1
should be a function.

```js
unit
  .function(isSHA1);
```

should return true for valid SHA1 strings.

```js
unit
  .bool(isSHA1('62c4f0b4dbe2a9cf80e003bdd7011f54f6a8cb3d'))
  .isTrue()
  .bool(isSHA1('db755bf69b1e53b94502c41dae860344bd67ad9f'))
  .isTrue()
  .bool(isSHA1('93d7c4f1405d323a34273d2ec04ad13c67df9b3a'))
  .isTrue()
  .bool(isSHA1('ae898bce08fcd570d7e36d3409237739ff69b2a5'))
  .isTrue()
  .bool(isSHA1('1e65382d1447e877d867947269bbfebf6723dbf6'))
  .isTrue()
  .bool(isSHA1('f9ac64ad54ed5add763e588938f6ac9a790abf3d'))
  .isTrue()
  .bool(isSHA1('190102c2743633072e050c8d697faebc0714dfa7'))
  .isTrue();
```

should return false for invalid SHA1 strings.

```js
unit
  .bool(isSHA1('af:4ff:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA1('af:hf:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA1('af:4f:a8:93:01'))
  .isFalse()
  .bool(isSHA1('*&TYY'))
  .isFalse()
  .bool(isSHA1('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isSHA1('sdf.,.mdf'))
  .isFalse()
  .bool(isSHA1('we;o9tu49'))
  .isFalse()
  .bool(isSHA1('q23qo98441`'))
  .isFalse()
  .bool(isSHA1('ewr09ti34*&'))
  .isFalse()
  .bool(isSHA1('%sdkjvnnd'))
  .isFalse()
  .bool(isSHA1('=adkljfhsd'))
  .isFalse()
  .bool(isSHA1('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isSHA1('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isSHA1(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSHA1(14))
  .isFalse()
  .bool(isSHA1(234987))
  .isFalse()
  .bool(isSHA1(-2398))
  .isFalse()
  .bool(isSHA1(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSHA1(98.00007))
  .isFalse()
  .bool(isSHA1(-32407.3))
  .isFalse()
  .bool(isSHA1(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSHA1(noop))
  .isFalse()
  .bool(isSHA1(isSHA1))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSHA1(/asd/u))
  .isFalse()
  .bool(isSHA1(/\d+/u))
  .isFalse()
  .bool(isSHA1(/1/u))
  .isFalse()
  .bool(isSHA1(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSHA1([]))
  .isFalse()
  .bool(isSHA1([1, 2, 3]))
  .isFalse()
  .bool(isSHA1(['a', 5, {}]))
  .isFalse();
```

<a name="issha256"></a>
# #isSHA256
should be a function.

```js
unit
  .function(isSHA256);
```

should return true for valid SHA256 strings.

```js
unit
  .bool(isSHA256('62c4f0b4dbe2a9cf80e003bdd7011f54'.repeat(2)))
  .isTrue()
  .bool(isSHA256('db755bf69b1e53b94502c41dae860344'.repeat(2)))
  .isTrue()
  .bool(isSHA256('93d7c4f1405d323a34273d2ec04ad13c'.repeat(2)))
  .isTrue()
  .bool(isSHA256('ae898bce08fcd570d7e36d3409237739'.repeat(2)))
  .isTrue()
  .bool(isSHA256('1e65382d1447e877d867947269bbfebf'.repeat(2)))
  .isTrue()
  .bool(isSHA256('f9ac64ad54ed5add763e588938f6ac9a'.repeat(2)))
  .isTrue()
  .bool(isSHA256('190102c2743633072e050c8d697faebc'.repeat(2)))
  .isTrue();
```

should return false for invalid SHA256 strings.

```js
unit
  .bool(isSHA256('af:4ff:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA256('af:hf:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA256('af:4f:a8:93:01'))
  .isFalse()
  .bool(isSHA256('*&TYY'))
  .isFalse()
  .bool(isSHA256('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isSHA256('sdf.,.mdf'))
  .isFalse()
  .bool(isSHA256('we;o9tu49'))
  .isFalse()
  .bool(isSHA256('q23qo98441`'))
  .isFalse()
  .bool(isSHA256('ewr09ti34*&'))
  .isFalse()
  .bool(isSHA256('%sdkjvnnd'))
  .isFalse()
  .bool(isSHA256('=adkljfhsd'))
  .isFalse()
  .bool(isSHA256('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isSHA256('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isSHA256(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSHA256(14))
  .isFalse()
  .bool(isSHA256(234987))
  .isFalse()
  .bool(isSHA256(-2398))
  .isFalse()
  .bool(isSHA256(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSHA256(98.00007))
  .isFalse()
  .bool(isSHA256(-32407.3))
  .isFalse()
  .bool(isSHA256(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSHA256(noop))
  .isFalse()
  .bool(isSHA256(isSHA256))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSHA256(/asd/u))
  .isFalse()
  .bool(isSHA256(/\d+/u))
  .isFalse()
  .bool(isSHA256(/1/u))
  .isFalse()
  .bool(isSHA256(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSHA256([]))
  .isFalse()
  .bool(isSHA256([1, 2, 3]))
  .isFalse()
  .bool(isSHA256(['a', 5, {}]))
  .isFalse();
```

<a name="issha384"></a>
# #isSHA384
should be a function.

```js
unit
  .function(isSHA384);
```

should return true for valid SHA384 strings.

```js
unit
  .bool(isSHA384('62c4f0b4dbe2a9cf80e003bdd7011f54'.repeat(3)))
  .isTrue()
  .bool(isSHA384('db755bf69b1e53b94502c41dae860344'.repeat(3)))
  .isTrue()
  .bool(isSHA384('93d7c4f1405d323a34273d2ec04ad13c'.repeat(3)))
  .isTrue()
  .bool(isSHA384('ae898bce08fcd570d7e36d3409237739'.repeat(3)))
  .isTrue()
  .bool(isSHA384('1e65382d1447e877d867947269bbfebf'.repeat(3)))
  .isTrue()
  .bool(isSHA384('f9ac64ad54ed5add763e588938f6ac9a'.repeat(3)))
  .isTrue()
  .bool(isSHA384('190102c2743633072e050c8d697faebc'.repeat(3)))
  .isTrue();
```

should return false for invalid SHA384 strings.

```js
unit
  .bool(isSHA384('af:4ff:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA384('af:hf:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA384('af:4f:a8:93:01'))
  .isFalse()
  .bool(isSHA384('*&TYY'))
  .isFalse()
  .bool(isSHA384('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isSHA384('sdf.,.mdf'))
  .isFalse()
  .bool(isSHA384('we;o9tu49'))
  .isFalse()
  .bool(isSHA384('q23qo98441`'))
  .isFalse()
  .bool(isSHA384('ewr09ti34*&'))
  .isFalse()
  .bool(isSHA384('%sdkjvnnd'))
  .isFalse()
  .bool(isSHA384('=adkljfhsd'))
  .isFalse()
  .bool(isSHA384('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isSHA384('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isSHA384(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSHA384(14))
  .isFalse()
  .bool(isSHA384(234987))
  .isFalse()
  .bool(isSHA384(-2398))
  .isFalse()
  .bool(isSHA384(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSHA384(98.00007))
  .isFalse()
  .bool(isSHA384(-32407.3))
  .isFalse()
  .bool(isSHA384(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSHA384(noop))
  .isFalse()
  .bool(isSHA384(isSHA384))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSHA384(/asd/u))
  .isFalse()
  .bool(isSHA384(/\d+/u))
  .isFalse()
  .bool(isSHA384(/1/u))
  .isFalse()
  .bool(isSHA384(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSHA384([]))
  .isFalse()
  .bool(isSHA384([1, 2, 3]))
  .isFalse()
  .bool(isSHA384(['a', 5, {}]))
  .isFalse();
```

<a name="issha512"></a>
# #isSHA512
should be a function.

```js
unit
  .function(isSHA512);
```

should return true for valid SHA512 strings.

```js
unit
  .bool(isSHA512('62c4f0b4dbe2a9cf80e003bdd7011f54'.repeat(4)))
  .isTrue()
  .bool(isSHA512('db755bf69b1e53b94502c41dae860344'.repeat(4)))
  .isTrue()
  .bool(isSHA512('93d7c4f1405d323a34273d2ec04ad13c'.repeat(4)))
  .isTrue()
  .bool(isSHA512('ae898bce08fcd570d7e36d3409237739'.repeat(4)))
  .isTrue()
  .bool(isSHA512('1e65382d1447e877d867947269bbfebf'.repeat(4)))
  .isTrue()
  .bool(isSHA512('f9ac64ad54ed5add763e588938f6ac9a'.repeat(4)))
  .isTrue()
  .bool(isSHA512('190102c2743633072e050c8d697faebc'.repeat(4)))
  .isTrue();
```

should return false for invalid SHA512 strings.

```js
unit
  .bool(isSHA512('af:4ff:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA512('af:hf:a8:93:01:d2'))
  .isFalse()
  .bool(isSHA512('af:4f:a8:93:01'))
  .isFalse()
  .bool(isSHA512('*&TYY'))
  .isFalse()
  .bool(isSHA512('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isSHA512('sdf.,.mdf'))
  .isFalse()
  .bool(isSHA512('we;o9tu49'))
  .isFalse()
  .bool(isSHA512('q23qo98441`'))
  .isFalse()
  .bool(isSHA512('ewr09ti34*&'))
  .isFalse()
  .bool(isSHA512('%sdkjvnnd'))
  .isFalse()
  .bool(isSHA512('=adkljfhsd'))
  .isFalse()
  .bool(isSHA512('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isSHA512('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isSHA512(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSHA512(14))
  .isFalse()
  .bool(isSHA512(234987))
  .isFalse()
  .bool(isSHA512(-2398))
  .isFalse()
  .bool(isSHA512(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSHA512(98.00007))
  .isFalse()
  .bool(isSHA512(-32407.3))
  .isFalse()
  .bool(isSHA512(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSHA512(noop))
  .isFalse()
  .bool(isSHA512(isSHA512))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSHA512(/asd/u))
  .isFalse()
  .bool(isSHA512(/\d+/u))
  .isFalse()
  .bool(isSHA512(/1/u))
  .isFalse()
  .bool(isSHA512(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSHA512([]))
  .isFalse()
  .bool(isSHA512([1, 2, 3]))
  .isFalse()
  .bool(isSHA512(['a', 5, {}]))
  .isFalse();
```

<a name="issealed"></a>
# #isSealed
should be a function.

```js
unit
  .function(isSealed);
```

should return true for sealed objects.

```js
unit
  .bool(isSealed(Object.seal({
    a: 5,
  })))
  .isTrue()
  .bool(isSealed(Object.seal(new String('hi'))))
  .isTrue();
```

should return true for frozen objects.

```js
unit
  .bool(isSealed(Object.freeze({
    a: 5,
  })))
  .isTrue()
  .bool(isSealed(Object.freeze(new String('hi'))))
  .isTrue();
```

should return true for empty objects with preventExtensions.

```js
unit
  .bool(isSealed(Object.preventExtensions({})))
  .isTrue()
  .bool(isSealed(Object.preventExtensions(new String('hi'))))
  .isTrue()
  .bool(isSealed(Object.preventExtensions(new Number(5))))
  .isTrue();
```

should return true for primitives.

```js
unit
  .bool(isSealed(1))
  .isTrue()
  .bool(isSealed(234987))
  .isTrue()
  .bool(isSealed(-239874))
  .isTrue()
  .bool(isSealed(0))
  .isTrue()
  .bool(isSealed(1.1))
  .isTrue()
  .bool(isSealed(-0.4))
  .isTrue()
  .bool(isSealed(234.4))
  .isTrue()
  .bool(isSealed(54.00000000001))
  .isTrue()
  .bool(isSealed('adsf'))
  .isTrue()
  .bool(isSealed('34.6'))
  .isTrue()
  .bool(isSealed('-45fg'))
  .isTrue();
```

should return false for object literals.

```js
unit
  .bool(isSealed({}))
  .isFalse()
  .bool(isSealed({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSealed([]))
  .isFalse()
  .bool(isSealed([1, 2]))
  .isFalse()
  .bool(isSealed(new Array('a', {}, 6)))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSealed(/asd/u))
  .isFalse()
  .bool(isSealed(/\d+/u))
  .isFalse()
  .bool(isSealed(/1/u))
  .isFalse()
  .bool(isSealed(new RegExp('3', 'u')))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSealed(noop))
  .isFalse()
  .bool(isSealed(isSealed))
  .isFalse();
```

should return false for Map.

```js
unit
  .bool(isSealed(new Map()))
  .isFalse()
  .bool(isSealed(new Map([['a', 5], ['b', '$']])))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isSealed(new Set()))
  .isFalse()
  .bool(isSealed(new Set().add(1)))
  .isFalse()
  .bool(isSealed(new Set([1, 2, 3])))
  .isFalse();
```

should return false for non empty objects with preventExtensions.

```js
unit
  .bool(isSealed(Object.preventExtensions({
    a: 5,
  })))
  .isFalse()
  .bool(isSealed(Object.preventExtensions({
    a: 'hi',
    b: true,
  })))
  .isFalse();
```

<a name="issemver"></a>
# #isSemVer
should be a function.

```js
unit
  .function(isSemVer);
```

should return true for valid semver strings.

```js
unit
  .bool(isSemVer('0.0.0'))
  .isTrue()
  .bool(isSemVer('1.0.0'))
  .isTrue()
  .bool(isSemVer('1.0.0-beta.0.7'))
  .isTrue()
  .bool(isSemVer('1.0.0+rc.2.6'))
  .isTrue()
  .bool(isSemVer('1.0.0-alpha.-.0.0pi'))
  .isTrue()
  .bool(isSemVer('1.0.0------------odd.why-'))
  .isTrue()
  .bool(isSemVer('1.0.0-beta.0.7+rc.2.6'))
  .isTrue()
  .bool(isSemVer('1.0.0+rc.5.6-beta'))
  .isTrue();
```

should return false for invalid semver strings.

```js
unit
  .bool(isSemVer('1'))
  .isFalse()
  .bool(isSemVer('1.0'))
  .isFalse()
  .bool(isSemVer('1.0.a'))
  .isFalse()
  .bool(isSemVer('v1.0.5'))
  .isFalse()
  .bool(isSemVer('+1.0.0'))
  .isFalse()
  .bool(isSemVer('-1.0.0'))
  .isFalse()
  .bool(isSemVer('1.0.0-00.1'))
  .isFalse()
  .bool(isSemVer('1.0.0-+rc'))
  .isFalse()
  .bool(isSemVer('1.0.0-<beta>'))
  .isFalse()
  .bool(isSemVer('1.0.0-@5'))
  .isFalse()
  .bool(isSemVer('1.0.0-6.*'))
  .isFalse()
  .bool(isSemVer('1.0.0-4(a)'))
  .isFalse()
  .bool(isSemVer('1.0.0+rc.5.6-beta+4'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSemVer(14))
  .isFalse()
  .bool(isSemVer(234987))
  .isFalse()
  .bool(isSemVer(-2398))
  .isFalse()
  .bool(isSemVer(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSemVer(98.00007))
  .isFalse()
  .bool(isSemVer(-32407.3))
  .isFalse()
  .bool(isSemVer(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSemVer(noop))
  .isFalse()
  .bool(isSemVer(isSemVer))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSemVer(/asd/u))
  .isFalse()
  .bool(isSemVer(/\d+/u))
  .isFalse()
  .bool(isSemVer(/1/u))
  .isFalse()
  .bool(isSemVer(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSemVer([]))
  .isFalse()
  .bool(isSemVer([1, 2, 3]))
  .isFalse()
  .bool(isSemVer(['a', 5, {}]))
  .isFalse();
```

should return false for null.

```js
unit
  .bool(isSemVer(null))
  .isFalse();
```

should return false for undefined.

```js
unit
  .bool(isSemVer())
  .isFalse()
  .bool(isSemVer(undefined))
  .isFalse();
```

<a name="isset"></a>
# #isSet
should be a function.

```js
unit
  .function(isSet);
```

should return true for Set objects.

```js
unit
  .bool(isSet(new Set()))
  .isTrue()
  .bool(isSet(new Set([4])))
  .isTrue();
```

should return false for Map objects.

```js
unit
  .bool(isSet(new Map()))
  .isFalse()
  .bool(isSet(new Map([['value', '3']])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isSet(new WeakMap()))
  .isFalse()
  .bool(isSet(new WeakMap([
    [
      {
        a: 4,
      },
      4,
    ],
  ])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isSet(new WeakSet()))
  .isFalse()
  .bool(isSet(new WeakSet([
    {
      a: 4,
    },
  ])))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSet(1))
  .isFalse()
  .bool(isSet(234987))
  .isFalse()
  .bool(isSet(-239874))
  .isFalse()
  .bool(isSet(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSet(1.1))
  .isFalse()
  .bool(isSet(-0.4))
  .isFalse()
  .bool(isSet(234.4))
  .isFalse()
  .bool(isSet(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isSet('adsf'))
  .isFalse()
  .bool(isSet('34.6'))
  .isFalse()
  .bool(isSet('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isSet({}))
  .isFalse()
  .bool(isSet(new String('asd')))
  .isFalse()
  .bool(isSet({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSet([]))
  .isFalse()
  .bool(isSet([1, 2]))
  .isFalse()
  .bool(isSet(['a', {}, 6]))
  .isFalse();
```

<a name="issingular"></a>
# #isSingular
should be a function.

```js
unit
  .function(isSingular);
```

should return true for singular strings.

```js
unit
  .bool(isSingular('item'))
  .isTrue()
  .bool(isSingular('car'))
  .isTrue()
  .bool(isSingular('bar'))
  .isTrue()
  .bool(isSingular('table'))
  .isTrue()
  .bool(isSingular('chair'))
  .isTrue();
```

should return false for plural strings.

```js
unit
  .bool(isSingular('items'))
  .isFalse()
  .bool(isSingular('cars'))
  .isFalse()
  .bool(isSingular('bars'))
  .isFalse()
  .bool(isSingular('tables'))
  .isFalse()
  .bool(isSingular('chairs'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSingular(14))
  .isFalse()
  .bool(isSingular(234987))
  .isFalse()
  .bool(isSingular(-2398))
  .isFalse()
  .bool(isSingular(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSingular(98.00007))
  .isFalse()
  .bool(isSingular(-32407.3))
  .isFalse()
  .bool(isSingular(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isSingular(noop))
  .isFalse()
  .bool(isSingular(isSingular))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isSingular(/asd/u))
  .isFalse()
  .bool(isSingular(/\d+/u))
  .isFalse()
  .bool(isSingular(/1/u))
  .isFalse()
  .bool(isSingular(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSingular([]))
  .isFalse()
  .bool(isSingular([1, 2, 3]))
  .isFalse()
  .bool(isSingular(['a', 5, {}]))
  .isFalse();
```

should return false for null.

```js
unit
  .bool(isSingular(null))
  .isFalse();
```

should return false for undefined.

```js
unit
  .bool(isSingular())
  .isFalse()
  .bool(isSingular(undefined))
  .isFalse();
```

<a name="isstring"></a>
# #isString
should be a function.

```js
unit
  .function(isString);
```

should return true for strings.

```js
unit
  .bool(isString('hi'))
  .isTrue()
  .bool(isString('34'))
  .isTrue()
  .bool(isString(new String('new')))
  .isTrue();
```

should return false for integers.

```js
unit
  .bool(isString(1))
  .isFalse()
  .bool(isString(234987))
  .isFalse()
  .bool(isString(-239874))
  .isFalse()
  .bool(isString(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isString(1.1))
  .isFalse()
  .bool(isString(-0.4))
  .isFalse()
  .bool(isString(234.4))
  .isFalse()
  .bool(isString(54.00000000001))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isString(/asd/u))
  .isFalse()
  .bool(isString(/\d+/u))
  .isFalse()
  .bool(isString(/1/u))
  .isFalse()
  .bool(isString(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isString({}))
  .isFalse()
  .bool(isString(new Error('boo')))
  .isFalse()
  .bool(isString({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isString([]))
  .isFalse()
  .bool(isString([1, 2]))
  .isFalse()
  .bool(isString(['a', {}, 6]))
  .isFalse();
```

<a name="issymbol"></a>
# #isSymbol
should be a function.

```js
unit
  .function(isSymbol);
```

should return true for Symbol references.

```js
unit
  .bool(isSymbol(Symbol()))
  .isTrue()
  .bool(isSymbol(Symbol.iterator))
  .isTrue()
  .bool(isSymbol(Symbol.unscopables))
  .isTrue();
```

should return false for Set objects.

```js
unit
  .bool(isSymbol(new Set()))
  .isFalse()
  .bool(isSymbol(new Set([4])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isSymbol(new WeakSet()))
  .isFalse()
  .bool(isSymbol(new WeakSet([
    {
      a: 4,
    },
  ])))
  .isFalse();
```

should return false for Map objects.

```js
unit
  .bool(isSymbol(new Map()))
  .isFalse()
  .bool(isSymbol(new Map([['value', '3']])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isSymbol(new WeakMap()))
  .isFalse()
  .bool(isSymbol(new WeakMap([
    [
      {
        a: 4,
      },
      4,
    ],
  ])))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isSymbol(1))
  .isFalse()
  .bool(isSymbol(234987))
  .isFalse()
  .bool(isSymbol(-239874))
  .isFalse()
  .bool(isSymbol(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isSymbol(1.1))
  .isFalse()
  .bool(isSymbol(-0.4))
  .isFalse()
  .bool(isSymbol(234.4))
  .isFalse()
  .bool(isSymbol(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isSymbol('adsf'))
  .isFalse()
  .bool(isSymbol('34.6'))
  .isFalse()
  .bool(isSymbol('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isSymbol({}))
  .isFalse()
  .bool(isSymbol(new String('asd')))
  .isFalse()
  .bool(isSymbol({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isSymbol([]))
  .isFalse()
  .bool(isSymbol([1, 2]))
  .isFalse()
  .bool(isSymbol(['a', {}, 6]))
  .isFalse();
```

<a name="istime"></a>
# #isTime
should be a function.

```js
unit
  .function(isTime);
```

should return true for valid time strings.

```js
unit
  .bool(isTime('23:59:59.999999999'))
  .isTrue()
  .bool(isTime('00:00:00.000000001'))
  .isTrue()
  .bool(isTime('11:59:59AM'))
  .isTrue()
  .bool(isTime('1:24 P.M.'))
  .isTrue()
  .bool(isTime('6 AM'))
  .isTrue()
  .bool(isTime('13:01Z'))
  .isTrue()
  .bool(isTime('13:01+3'))
  .isTrue()
  .bool(isTime('13:00-3'))
  .isTrue()
  .bool(isTime('13:01 +3:00'))
  .isTrue()
  .bool(isTime('13:01 MST'))
  .isTrue()
  .bool(isTime('13:01 Mountain Standard Time'))
  .isTrue()
  .bool(isTime('13:01 America/Denver'))
  .isTrue()
  .bool(isTime('00:00:00.001 AM MST'))
  .isTrue();
```

should return true for integers < 24.

```js
unit
  .bool(isTime(0))
  .isTrue()
  .bool(isTime(23))
  .isTrue();
```

should return false for invalid time strings.

```js
unit
  .bool(isTime('24'))
  .isFalse()
  .bool(isTime('13:01PM'))
  .isFalse()
  .bool(isTime('13AM'))
  .isFalse()
  .bool(isTime('5:50:60'))
  .isFalse()
  .bool(isTime('24:00'))
  .isFalse()
  .bool(isTime('11 A.M. T'))
  .isFalse()
  .bool(isTime('3:60'))
  .isFalse()
  .bool(isTime('4:20 F.M.'))
  .isFalse()
  .bool(isTime('12:34:34:56:12'))
  .isFalse();
```

should return false for integers > 24.

```js
unit
  .bool(isTime(25))
  .isFalse()
  .bool(isTime(234987))
  .isFalse()
  .bool(isTime(-2398))
  .isFalse()
  .bool(isTime(2587))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isTime(0.1))
  .isFalse()
  .bool(isTime(5.34))
  .isFalse()
  .bool(isTime(98.00007))
  .isFalse()
  .bool(isTime(-32407.3))
  .isFalse()
  .bool(isTime(24.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isTime(noop))
  .isFalse()
  .bool(isTime(isTime))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isTime(/asd/u))
  .isFalse()
  .bool(isTime(/\d+/u))
  .isFalse()
  .bool(isTime(/1/u))
  .isFalse()
  .bool(isTime(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isTime([]))
  .isFalse()
  .bool(isTime([1589, 23487, 'f']))
  .isFalse()
  .bool(isTime(['a', 5, {}]))
  .isFalse();
```

<a name="isurl"></a>
# #isURL
should be a function.

```js
unit
  .function(isURL);
```

should return true for valid url strings.

```js
unit
  .bool(isURL('http://foo.com/blah_blah'))
  .isTrue()
  .bool(isURL('http://foo.com/blah_blah/'))
  .isTrue()
  .bool(isURL('http://www.example.com/wpstyle/?p=364'))
  .isTrue()
  .bool(isURL('https://www.example.com/foo/?bar=baz&inga=42&quux'))
  .isTrue()
  .bool(isURL('http://✪df.ws/123'))
  .isTrue()
  .bool(isURL('http://userid:password@example.com:8080'))
  .isTrue()
  .bool(isURL('http://userid:password@example.com:8080/'))
  .isTrue()
  .bool(isURL('http://userid@example.com'))
  .isTrue()
  .bool(isURL('http://userid@example.com/'))
  .isTrue()
  .bool(isURL('http://userid:password@example.com'))
  .isTrue()
  .bool(isURL('http://userid:password@example.com/'))
  .isTrue()
  .bool(isURL('http://⌘.ws'))
  .isTrue()
  .bool(isURL('http://⌘.ws/'))
  .isTrue()
  .bool(isURL('http://☺.damowmow.com/'))
  .isTrue()
  .bool(isURL('http://code.google.com/events/#&product=browser'))
  .isTrue()
  .bool(isURL('http://j.mp'))
  .isTrue()
  .bool(isURL('ftp://foo.bar/baz'))
  .isTrue()
  .bool(isURL('http://foo.com/blah_(wikipedia)#cite-1'))
  .isTrue()
  .bool(isURL('http://foo.com/blah_(wikipedia)_blah#cite-1'))
  .isTrue()
  .bool(isURL('http://foo.com/(something)?after=parens'))
  .isTrue()
  .bool(isURL('http://foo.bar/?q=Test%20URL-encoded%20stuff'))
  .isTrue()
  .bool(isURL('http://مثال.إختبار'))
  .isTrue()
  .bool(isURL('http://例子.测试'))
  .isTrue()
  .bool(isURL('http://a1-._~!$&(\')+=*,;%24@example.com'))
  .isTrue()
  .bool(isURL('http://1337.net'))
  .isTrue()
  .bool(isURL('http://a.b-c.de'))
  .isTrue()
  .bool(isURL('http://223.255.255.254/path/to?q=1#hash'))
  .isTrue()
  .bool(isURL('http://[2001:db8::ff00:42:8329]/path/to?q=1#hash'))
  .isTrue();
```

should return false for invalid url strings.

```js
unit
  .bool(isURL('http://'))
  .isFalse()
  .bool(isURL('http://?'))
  .isFalse()
  .bool(isURL('http://??'))
  .isFalse()
  .bool(isURL('http://??/'))
  .isFalse()
  .bool(isURL('http://#'))
  .isFalse()
  .bool(isURL('http://##'))
  .isFalse()
  .bool(isURL('http://##/'))
  .isFalse()
  .bool(isURL('http://foo.bar?q=Spaces should be encoded'))
  .isFalse()
  .bool(isURL('//'))
  .isFalse()
  .bool(isURL('//a'))
  .isFalse()
  .bool(isURL('///a'))
  .isFalse()
  .bool(isURL('///'))
  .isFalse()
  .bool(isURL('http:///a'))
  .isFalse()
  .bool(isURL('foo.com'))
  .isFalse()
  .bool(isURL('rdar://1234'))
  .isFalse()
  .bool(isURL('h://test'))
  .isFalse()
  .bool(isURL('http:// shouldfail.com'))
  .isFalse()
  .bool(isURL(':// shouldfail.com'))
  .isFalse()
  .bool(isURL('http://foo.bar/foo(bar)baz quux'))
  .isFalse()
  .bool(isURL('http://-error-.invalid/'))
  .isFalse()
  .bool(isURL('http://-a.b.co'))
  .isFalse()
  .bool(isURL('http://a.b-.co'))
  .isFalse()
  .bool(isURL('http://3628126748'))
  .isFalse()
  .bool(isURL('http://.www.foo.bar/'))
  .isFalse()
  .bool(isURL('http://www.foo.bar./'))
  .isFalse()
  .bool(isURL('http://.www.foo.bar./'))
  .isFalse()
  .bool(isURL('http://foo.com/unicode_(✪)_in_parens'))
  .isFalse()
  .bool(isURL('http://➡.ws/䨹'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isURL(14))
  .isFalse()
  .bool(isURL(234987))
  .isFalse()
  .bool(isURL(-2398))
  .isFalse()
  .bool(isURL(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isURL(98.00007))
  .isFalse()
  .bool(isURL(-32407.3))
  .isFalse()
  .bool(isURL(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isURL(noop))
  .isFalse()
  .bool(isURL(isURL))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isURL('adsf'))
  .isFalse()
  .bool(isURL('34.t'))
  .isFalse()
  .bool(isURL('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isURL(/asd/u))
  .isFalse()
  .bool(isURL(/\d+/u))
  .isFalse()
  .bool(isURL(/1/u))
  .isFalse()
  .bool(isURL(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isURL([]))
  .isFalse()
  .bool(isURL([1, 2, 3]))
  .isFalse()
  .bool(isURL(['a', 5, {}]))
  .isFalse();
```

<a name="isurn"></a>
# #isURN
should be a function.

```js
unit
  .function(isURN);
```

should return true for valid url strings.

```js
unit
  .bool(isURN('urn:isbn:0451450523'))
  .isTrue()
  .bool(isURN('urn:isan:0000-0000-9E59-0000-O-0000-0000-2'))
  .isTrue()
  .bool(isURN('urn:ISSN:0167-6423'))
  .isTrue()
  .bool(isURN('urn:ietf:rfc:2648'))
  .isTrue()
  .bool(isURN('urn:mpeg:mpeg7:schema:2001'))
  .isTrue()
  .bool(isURN('urn:oid:2.16.840'))
  .isTrue()
  .bool(isURN('urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66'))
  .isTrue()
  .bool(isURN('urn:nbn:de:bvb:19-146642'))
  .isTrue()
  .bool(isURN('urn:lex:eu:council:directive:2010-03-09;2010-19-UE'))
  .isTrue()
  .bool(isURN('urn:lsid:zoobank.org:pub:CDC8D258-8F57-41DC-B560-247E17D3DC8C'))
  .isTrue()
  .bool(isURN('URN:EXAMPLE:a123%2cz456'))
  .isTrue()
  .bool(isURN('urn:example:a123,z456/bar'))
  .isTrue()
  .bool(isURN('urn:example:a123,z456?+abc'))
  .isTrue()
  .bool(isURN('urn:example:a123,z456?=xyz'))
  .isTrue()
  .bool(isURN('urn:example:a123,z456#789'))
  .isTrue()
  .bool(isURN('urn:example:weather?=lat=39.56&lon=-104.85'))
  .isTrue()
  .bool(isURN('urn:example:weather?+lang=en-US?=lat=39.56&lon=-104.85'))
  .isTrue()
  .bool(isURN('urn:example:weather?+lang=en-US?=lat=39.56&lon=-104.85#tomorrow'))
  .isTrue()
  .bool(isURN('urn:example:weather#tomorrow?+lang=en-US?=lat=39.56&lon=-104.85'))
  .isTrue()
  .bool(isURN('urn:example:weather?=lat=39.56&lon=-104.85?+lang=en-US#tomorrow'))
  .isTrue();
```

should return false for invalid url strings.

```js
unit
  .bool(isURN('urn:isbn-:0451450523'))
  .isFalse()
  .bool(isURN('urn:-isbn:0451450523'))
  .isFalse()
  .bool(isURN('urn:isbn/0451450523'))
  .isFalse()
  .bool(isURN('urn:is&bn:0451450523'))
  .isFalse()
  .bool(isURN('urn:i:0451450523'))
  .isFalse()
  .bool(isURN('urn:example:weather?=q=this should be percent encoded'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isURN(14))
  .isFalse()
  .bool(isURN(234987))
  .isFalse()
  .bool(isURN(-2398))
  .isFalse()
  .bool(isURN(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isURN(98.00007))
  .isFalse()
  .bool(isURN(-32407.3))
  .isFalse()
  .bool(isURN(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isURN(noop))
  .isFalse()
  .bool(isURN(isURN))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isURN(/asd/u))
  .isFalse()
  .bool(isURN(/\d+/u))
  .isFalse()
  .bool(isURN(/1/u))
  .isFalse()
  .bool(isURN(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isURN([]))
  .isFalse()
  .bool(isURN([1, 2, 3]))
  .isFalse()
  .bool(isURN(['a', 5, {}]))
  .isFalse();
```

<a name="isuuid"></a>
# #isUUID
should be a function.

```js
unit
  .function(isUUID);
```

should return true for valid UUID strings.

```js
unit
  .bool(isUUID('2fed40d0-774e-11e7-b5a5-be2e44b06b34'))
  .isTrue()
  .bool(isUUID('2fed4332-774e-11e7-b5a5-be2e44b06b34'))
  .isTrue()
  .bool(isUUID('2fed44b8-774e-11e7-b5a5-be2e44b06b34'))
  .isTrue()
  .bool(isUUID('2fed4652-774e-11e7-b5a5-be2e44b06b34'))
  .isTrue()
  .bool(isUUID('2fed485a-774e-11e7-b5a5-be2e44b06b34'))
  .isTrue()
  .bool(isUUID('5c97cda6-5d05-47f5-8174-541ad610e6bf'))
  .isTrue()
  .bool(isUUID('a533c026-be21-453b-afcc-99f4d83eed36'))
  .isTrue()
  .bool(isUUID('737e6050-7b96-499b-b71e-efa75d1b90c2'))
  .isTrue()
  .bool(isUUID('35a95b8c-186d-4088-a602-fd126b47bafd'))
  .isTrue()
  .bool(isUUID('36045104-c1ee-4e88-a9d9-2c44863028fd'))
  .isTrue();
```

should return false for invalid UUID strings.

```js
unit
  .bool(isUUID('we48tuer'))
  .isFalse()
  .bool(isUUID('we[foewf]'))
  .isFalse()
  .bool(isUUID('34w98uerj'))
  .isFalse()
  .bool(isUUID('*&TYY'))
  .isFalse()
  .bool(isUUID('serreg;dfskdfkjfgjh'))
  .isFalse()
  .bool(isUUID('sdf.,.mdf'))
  .isFalse()
  .bool(isUUID('we;o9tu49'))
  .isFalse()
  .bool(isUUID('q23qo98441`'))
  .isFalse()
  .bool(isUUID('ewr09ti34*&'))
  .isFalse()
  .bool(isUUID('%sdkjvnnd'))
  .isFalse()
  .bool(isUUID('=adkljfhsd'))
  .isFalse()
  .bool(isUUID('sadkjfh{sdkjf}'))
  .isFalse()
  .bool(isUUID('aweklhd[asldkfjsd]'))
  .isFalse()
  .bool(isUUID(',foiadfoihf<lkewf'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isUUID(14))
  .isFalse()
  .bool(isUUID(234987))
  .isFalse()
  .bool(isUUID(-2398))
  .isFalse()
  .bool(isUUID(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isUUID(98.00007))
  .isFalse()
  .bool(isUUID(-32407.3))
  .isFalse()
  .bool(isUUID(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isUUID(noop))
  .isFalse()
  .bool(isUUID(isUUID))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isUUID(/asd/u))
  .isFalse()
  .bool(isUUID(/\d+/u))
  .isFalse()
  .bool(isUUID(/1/u))
  .isFalse()
  .bool(isUUID(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isUUID([]))
  .isFalse()
  .bool(isUUID([1, 2, 3]))
  .isFalse()
  .bool(isUUID(['a', 5, {}]))
  .isFalse();
```

<a name="isundefined"></a>
# #isUndefined
should be a function.

```js
unit
  .function(isUndefined);
```

should return true for undefined.

```js
unit
  .bool(isUndefined())
  .isTrue()
  .bool(isUndefined(undefined))
  .isTrue()
  .bool(isUndefined({
    a: 5,
  }.b))
  .isTrue();
```

should return true for deleted properties on an object.

```js
const test = {
  a: 5,
  b: true,
};
unit
  .given(delete test.a)
  .bool(isUndefined(test.a))
  .isTrue()
  .bool(isUndefined(test.z))
  .isTrue();
```

should return false for null.

```js
unit
  .bool(isUndefined(null))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isUndefined(1))
  .isFalse()
  .bool(isUndefined(234987))
  .isFalse()
  .bool(isUndefined(-239874))
  .isFalse()
  .bool(isUndefined(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isUndefined(1.1))
  .isFalse()
  .bool(isUndefined(-0.4))
  .isFalse()
  .bool(isUndefined(234.4))
  .isFalse()
  .bool(isUndefined(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isUndefined('adsf'))
  .isFalse()
  .bool(isUndefined('34.6'))
  .isFalse()
  .bool(isUndefined('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isUndefined(/asd/u))
  .isFalse()
  .bool(isUndefined(/\d+/u))
  .isFalse()
  .bool(isUndefined(/1/u))
  .isFalse()
  .bool(isUndefined(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isUndefined({}))
  .isFalse()
  .bool(isUndefined(new String('asd')))
  .isFalse()
  .bool(isUndefined({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isUndefined([]))
  .isFalse()
  .bool(isUndefined([1, 2]))
  .isFalse()
  .bool(isUndefined(['a', {}, 6]))
  .isFalse();
```

<a name="isvin"></a>
# #isVIN
should be a function.

```js
unit
  .function(isVIN);
```

should return true for valid VIN strings.

```js
unit
  .bool(isVIN('4A4MN41S15E063265'))
  .isTrue()
  .bool(isVIN('WVWLK93C97E010461'))
  .isTrue()
  .bool(isVIN('5TBET38136S515018'))
  .isTrue()
  .bool(isVIN('1GNKRGED0CJ102908'))
  .isTrue()
  .bool(isVIN('1GCGC33F6TF039278'))
  .isTrue()
  .bool(isVIN('3N1AB51D92L747926'))
  .isTrue()
  .bool(isVIN('2A4GP44R06R831856'))
  .isTrue()
  .bool(isVIN('1G1ZT54875F181445'))
  .isTrue()
  .bool(isVIN('4V4NC9GF81N352070'))
  .isTrue()
  .bool(isVIN('1FTMF1CWXAKC34755'))
  .isTrue()
  .bool(isVIN('JT2VK12E9P0115326'))
  .isTrue();
```

should return false for invalid VIN strings.

```js
unit
  .bool(isVIN('4A4MN41415E063265'))
  .isFalse()
  .bool(isVIN('WVWLK93Y97E010461'))
  .isFalse()
  .bool(isVIN('5TBET381361515018'))
  .isFalse()
  .bool(isVIN('1GNKRGEA0CJ102908'))
  .isFalse()
  .bool(isVIN('1GCGC33G6TF039278'))
  .isFalse()
  .bool(isVIN('3N1AB51092L747926'))
  .isFalse()
  .bool(isVIN('2B4GP44Z06R831856'))
  .isFalse()
  .bool(isVIN('1G1ZT54475F181445'))
  .isFalse()
  .bool(isVIN('4V4NC9GF11N352070'))
  .isFalse()
  .bool(isVIN('1FTMF1CWXFKC34755'))
  .isFalse()
  .bool(isVIN('JT2VK12E9J0115326'))
  .isFalse();
```

should return false for bools.

```js
unit
  .bool(isVIN(true))
  .isFalse()
  .bool(isVIN(false))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isVIN([]))
  .isFalse()
  .bool(isVIN([1, 2]))
  .isFalse()
  .bool(isVIN(['a', {}, 6]))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isVIN(1))
  .isFalse()
  .bool(isVIN(234987))
  .isFalse()
  .bool(isVIN(-239874))
  .isFalse()
  .bool(isVIN(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isVIN(1.1))
  .isFalse()
  .bool(isVIN(-0.4))
  .isFalse()
  .bool(isVIN(234.4))
  .isFalse()
  .bool(isVIN(54.00000000001))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isVIN(noop))
  .isFalse()
  .bool(isVIN(isVIN))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isVIN('adsf'))
  .isFalse()
  .bool(isVIN('34.6'))
  .isFalse()
  .bool(isVIN('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isVIN(/asd/u))
  .isFalse()
  .bool(isVIN(/\d+/u))
  .isFalse()
  .bool(isVIN(/1/u))
  .isFalse()
  .bool(isVIN(new RegExp('3', 'u')))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isVIN({}))
  .isFalse()
  .bool(isVIN(new String('asd')))
  .isFalse()
  .bool(isVIN({
    a: 5,
  }))
  .isFalse();
```

should return false for Set.

```js
unit
  .bool(isVIN(new Set()))
  .isFalse()
  .bool(isVIN(new Set().add(1)))
  .isFalse()
  .bool(isVIN(new Set([1, 2, 3])))
  .isFalse();
```

<a name="isvisa"></a>
# #isVisa
should be a function.

```js
unit
  .function(isVisa);
```

should return true for valid account numbers.

```js
unit
  .bool(isVisa('4111111111111111'))
  .isTrue()
  .bool(isVisa('4012888888881881'))
  .isTrue()
  .bool(isVisa('4222222222222'))
  .isTrue();
```

should return false for invalid account numbers.

```js
unit
  .bool(isVisa('378282246310004'))
  .isFalse()
  .bool(isVisa('378282246310006'))
  .isFalse()
  .bool(isVisa('371449635398430'))
  .isFalse()
  .bool(isVisa('371449635398432'))
  .isFalse()
  .bool(isVisa('5610591081018250'))
  .isFalse()
  .bool(isVisa('30569309025904'))
  .isFalse()
  .bool(isVisa('6011111111111117'))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isVisa(14))
  .isFalse()
  .bool(isVisa(234987))
  .isFalse()
  .bool(isVisa(-2398))
  .isFalse()
  .bool(isVisa(2))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isVisa(98.00007))
  .isFalse()
  .bool(isVisa(-32407.3))
  .isFalse()
  .bool(isVisa(0.1))
  .isFalse();
```

should return false for functions.

```js
unit
  .bool(isVisa(noop))
  .isFalse()
  .bool(isVisa(isVisa))
  .isFalse();
```

should return false for invalid strings.

```js
unit
  .bool(isVisa('adsf'))
  .isFalse()
  .bool(isVisa('34.t'))
  .isFalse()
  .bool(isVisa('-45fg'))
  .isFalse();
```

should return false for regexs.

```js
unit
  .bool(isVisa(/asd/u))
  .isFalse()
  .bool(isVisa(/\d+/u))
  .isFalse()
  .bool(isVisa(/1/u))
  .isFalse()
  .bool(isVisa(new RegExp('3', 'u')))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isVisa([]))
  .isFalse()
  .bool(isVisa([1, 2, 3]))
  .isFalse()
  .bool(isVisa(['a', 5, {}]))
  .isFalse();
```

<a name="isweakmap"></a>
# #isWeakMap
should be a function.

```js
unit
  .function(isWeakMap);
```

should return true for WeakMap objects.

```js
unit
  .bool(isWeakMap(new WeakMap()))
  .isTrue()
  .bool(isWeakMap(new WeakMap([
    [
      {
        a: 4,
      },
      4,
    ],
  ])))
  .isTrue();
```

should return false for Map objects.

```js
unit
  .bool(isWeakMap(new Map()))
  .isFalse()
  .bool(isWeakMap(new Map([['value', '3']])))
  .isFalse();
```

should return false for Set objects.

```js
unit
  .bool(isWeakMap(new Set()))
  .isFalse()
  .bool(isWeakMap(new Set([4])))
  .isFalse();
```

should return false for WeakSet objects.

```js
unit
  .bool(isWeakMap(new WeakSet()))
  .isFalse()
  .bool(isWeakMap(new WeakSet([
    {
      a: 4,
    },
  ])))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isWeakMap(1))
  .isFalse()
  .bool(isWeakMap(234987))
  .isFalse()
  .bool(isWeakMap(-239874))
  .isFalse()
  .bool(isWeakMap(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isWeakMap(1.1))
  .isFalse()
  .bool(isWeakMap(-0.4))
  .isFalse()
  .bool(isWeakMap(234.4))
  .isFalse()
  .bool(isWeakMap(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isWeakMap('adsf'))
  .isFalse()
  .bool(isWeakMap('34.6'))
  .isFalse()
  .bool(isWeakMap('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isWeakMap({}))
  .isFalse()
  .bool(isWeakMap(new String('asd')))
  .isFalse()
  .bool(isWeakMap({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isWeakMap([]))
  .isFalse()
  .bool(isWeakMap([1, 2]))
  .isFalse()
  .bool(isWeakMap(['a', {}, 6]))
  .isFalse();
```

<a name="isweakset"></a>
# #isWeakSet
should be a function.

```js
unit
  .function(isWeakSet);
```

should return true for WeakSet objects.

```js
unit
  .bool(isWeakSet(new WeakSet()))
  .isTrue()
  .bool(isWeakSet(new WeakSet([
    {
      a: 4,
    },
  ])))
  .isTrue();
```

should return false for Set objects.

```js
unit
  .bool(isWeakSet(new Set()))
  .isFalse()
  .bool(isWeakSet(new Set([4])))
  .isFalse();
```

should return false for Map objects.

```js
unit
  .bool(isWeakSet(new Map()))
  .isFalse()
  .bool(isWeakSet(new Map([['value', '3']])))
  .isFalse();
```

should return false for WeakMap objects.

```js
unit
  .bool(isWeakSet(new WeakMap()))
  .isFalse()
  .bool(isWeakSet(new WeakMap([
    [
      {
        a: 4,
      },
      4,
    ],
  ])))
  .isFalse();
```

should return false for integers.

```js
unit
  .bool(isWeakSet(1))
  .isFalse()
  .bool(isWeakSet(234987))
  .isFalse()
  .bool(isWeakSet(-239874))
  .isFalse()
  .bool(isWeakSet(0))
  .isFalse();
```

should return false for floats.

```js
unit
  .bool(isWeakSet(1.1))
  .isFalse()
  .bool(isWeakSet(-0.4))
  .isFalse()
  .bool(isWeakSet(234.4))
  .isFalse()
  .bool(isWeakSet(54.00000000001))
  .isFalse();
```

should return false for strings.

```js
unit
  .bool(isWeakSet('adsf'))
  .isFalse()
  .bool(isWeakSet('34.6'))
  .isFalse()
  .bool(isWeakSet('-45fg'))
  .isFalse();
```

should return false for objects.

```js
unit
  .bool(isWeakSet({}))
  .isFalse()
  .bool(isWeakSet(new String('asd')))
  .isFalse()
  .bool(isWeakSet({
    a: 5,
  }))
  .isFalse();
```

should return false for arrays.

```js
unit
  .bool(isWeakSet([]))
  .isFalse()
  .bool(isWeakSet([1, 2]))
  .isFalse()
  .bool(isWeakSet(['a', {}, 6]))
  .isFalse();
```

