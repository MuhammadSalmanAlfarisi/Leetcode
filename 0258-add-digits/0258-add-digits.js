/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    
    let sum = 0
    while (num >= 10) {
        sum = Math.floor(num / 10) + (num % 10)
        num = sum
    }
    return num
};