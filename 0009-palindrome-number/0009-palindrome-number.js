/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Make number to array
    var num = String(x).split("").map((x) => {
        return Number(x)
    })
    // Shallow array because reverse() changes the original array
    var rev = [...num].reverse()
    console.log(rev + " and " + num)
    for (let i = 0; i < rev.length; i++) {
        if (num[i] != rev[i]) {
            return false
        }
    }
    return true
};