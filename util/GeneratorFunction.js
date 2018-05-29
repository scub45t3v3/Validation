(function() {
  /*
   * dummy genrator function declaration that is never used or called. It only
   * exists to get the prototype constructor function for use in determining if
   * a value is an instanceof the constructor. This is done since the constructor
   * is not exposed as a class definition and is instead interpeted at runtime.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
   *
   * This causes the test to never achive 100% since the gen function is never
   * executed
   */
  var gen;

  gen = function*() {
    return (yield true);
  };

  module.exports = Object.getPrototypeOf(gen).constructor;

}).call(this);
