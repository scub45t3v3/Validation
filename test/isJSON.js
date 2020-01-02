'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isJSON = require('../isJSON');

// describe #isJSON
describe('#isJSON', () => {
  it('should be a function', () => {
    unit
      .function(isJSON);
  }); // end it

  it('should return true for valid JSON strings', () => {
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
  }); // end it

  it('should return true for integers', () => {
    unit
      .bool(isJSON(14))
      .isTrue()
      .bool(isJSON(234987))
      .isTrue()
      .bool(isJSON(-2398))
      .isTrue()
      .bool(isJSON(2))
      .isTrue();
  }); // end it

  it('should return true for floats', () => {
    unit
      .bool(isJSON(98.00007))
      .isTrue()
      .bool(isJSON(-32407.3))
      .isTrue()
      .bool(isJSON(0.1))
      .isTrue();
  }); // end it

  it('should return false for invalid JSON strings', () => {
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
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isJSON(noop))
      .isFalse()
      .bool(isJSON(isJSON))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isJSON(/asd/u))
      .isFalse()
      .bool(isJSON(/\d+/u))
      .isFalse()
      .bool(isJSON(/1/u))
      .isFalse()
      .bool(isJSON(new RegExp('3', 'u')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isJSON([]))
      .isFalse()
      .bool(isJSON([1, 2, 3]))
      .isFalse()
      .bool(isJSON(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isJSON