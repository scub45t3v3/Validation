(function() {
  var REGEX, isTime;

  REGEX = /^([0-1]?\d|2[0-3])(?::?([0-5]\d)(?::?([0-5]\d)(?:[.,](\d{1,9}))?)?)?\s*((?:[ap][.,\s-]*m[.,-]*)(?!\w))?\s*(Z|[+-](?:[0-1]?\d|2[0-3])(?::?[0-5]\d)?|[a-z]{2,5}|[a-z\u00c0-\u024f\s'-]+time|[a-z_]{1,256}\/[a-z_]{1,256})?$/i; // hour
  // minute
  // second
  // fractional second (deci, centi, milli, micro, nano)
  // optional space
  // meridiem
  // optional space
  // Z = UTC, GMT, +0, -0
  // offset +h:m | -h:m
  // timezone abbreviation
  // timezone name
  // tzdb name

  isTime = function(value) {
    var ref, ref1;
    value = (ref = (value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`) != null ? typeof ref.trim === "function" ? (ref1 = ref.trim()) != null ? ref1.match(REGEX) : void 0 : void 0 : void 0;
    return !!value && (((value != null ? value[5] : void 0) == null) || parseInt(value != null ? value[1] : void 0) < 13);
  };

  module.exports = isTime;

}).call(this);
