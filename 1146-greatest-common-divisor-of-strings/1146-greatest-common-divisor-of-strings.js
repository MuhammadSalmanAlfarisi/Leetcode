/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) return ""

  // recursive euclidian alg to find gcd
  let gcd = function (x, y) {
    if (!y) return x
    return gcd(y, x % y)
  }
  
  return str1.slice(0, gcd(str1.length, str2.length))
};