'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isTime');
const REGEX = /^(?<hour>[0-1]?\d|2[0-3])(?::?(?<minute>[0-5]\d)(?::?(?<second>[0-5]\d)(?:[.,](?<millisecond>\d{1,9}))?)?)?\s*(?<meridiem>(?:[ap][.,\s-]*m[.,-]*)(?!\w))?\s*(?<timezone>Z|[+-](?:[0-1]?\d|2[0-3])(?::?[0-5]\d)?|[a-z]{2,5}|[a-z\u00c0-\u024f\s'-]+time|[a-z_]{1,256}\/[a-z_]{1,256})?$/iu;

const isTime = (value) => {
  debug('call:isTime(%o)', value);

  try {
    const {
      groups: {
        hour,
        meridiem,
      },
    } = REGEX.exec(`${value}`.trim());

    return meridiem == null || parseInt(hour) < 13;
  } catch (error) {
    return false;
  }
};

// export as commonjs module
module.exports = isTime;