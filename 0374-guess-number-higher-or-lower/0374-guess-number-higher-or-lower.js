/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    const getNumber = (start, end) => {
        const mid = Math.floor((start + end) / 2);
        const getGuess = guess(mid)

        if (getGuess == 0) return mid
        if (getGuess == 1) return getNumber(mid + 1, end)
        if (getGuess == -1) return getNumber(start, mid - 1)
    }
    return getNumber(0, n)
};