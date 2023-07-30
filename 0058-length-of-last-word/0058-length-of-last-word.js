/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim()
    return str.split(" ").at(-1).length
};