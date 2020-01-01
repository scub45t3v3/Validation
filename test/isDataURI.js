'use strict';

// include dependencies
const unit = require('unit.js');
const {noop} = require('underscore');
const isDataURI = require('../isDataURI');

// describe #isDataURI
describe('#isDataURI', () => {
  it('should be a function', () => {
    unit
      .function(isDataURI);
  }); // end it

  it('should return true for valid datauri encoded strings', () => {
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
  }); // end it

  it('should return false for invalid strings', () => {
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
  }); // end it

  it('should return false for integers', () => {
    unit
      .bool(isDataURI(14))
      .isFalse()
      .bool(isDataURI(234987))
      .isFalse()
      .bool(isDataURI(-2398))
      .isFalse()
      .bool(isDataURI(2))
      .isFalse();
  }); // end it

  it('should return false for floats', () => {
    unit
      .bool(isDataURI(98.00007))
      .isFalse()
      .bool(isDataURI(-32407.3))
      .isFalse()
      .bool(isDataURI(0.1))
      .isFalse();
  }); // end it

  it('should return false for functions', () => {
    unit
      .bool(isDataURI(noop))
      .isFalse()
      .bool(isDataURI(isDataURI))
      .isFalse();
  }); // end it

  it('should return false for regexs', () => {
    unit
      .bool(isDataURI(/asd/))
      .isFalse()
      .bool(isDataURI(/\d+/))
      .isFalse()
      .bool(isDataURI(/1/))
      .isFalse()
      .bool(isDataURI(new RegExp('3')))
      .isFalse();
  }); // end it

  it('should return false for arrays', () => {
    unit
      .bool(isDataURI([]))
      .isFalse()
      .bool(isDataURI([1, 2, 3]))
      .isFalse()
      .bool(isDataURI(['a', 5, {}]))
      .isFalse();
  }); // end it
}); // end describe #isDataURI