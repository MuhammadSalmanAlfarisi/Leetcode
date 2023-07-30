/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0
  let right = s.length - 1
  let arr = s.split("")
  let vow = ["a", "A", "i", "I", "u", "U", "e", "E", "o", "O"]
  while (left < right) {
    if ((vow.indexOf(arr[left]) >= 0) && (vow.indexOf(arr[right]) >= 0)) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    if (vow.indexOf(arr[left]) < 0) {
      left++
    }
    if (vow.indexOf(arr[right]) < 0) {
      right--
    }
  }
  return arr.join("")
};