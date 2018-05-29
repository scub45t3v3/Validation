(function() {
  var REGEX, getCheckDigit, isVIN, transliterate;

  REGEX = /^[a-hj-nprs-z\d]{17}$/i;

  isVIN = function(value) {
    if (!REGEX.test(value)) {
      return false;
    }
    return getCheckDigit(value) === value[8].toUpperCase();
  };

  transliterate = function(char) {
    char = char != null ? char.toUpperCase() : void 0;
    return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(char) % 10;
  };

  getCheckDigit = function(value) {
    var char, i, idx, len, map, ref, sum, weights;
    map = '0123456789X';
    weights = '8765432X098765432';
    sum = 0;
    ref = value.toUpperCase().split('');
    for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
      char = ref[idx];
      sum += transliterate(char) * map.indexOf(weights[idx]);
    }
    return map[sum % 11];
  };

  module.exports = isVIN;

}).call(this);
