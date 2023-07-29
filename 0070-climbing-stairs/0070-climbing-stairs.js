/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) {
        return 1
    }

    let first = 1
    let second = 1
    let third = 0

    // fibonacci sequence where the next number 
    // is the sum of 2 numbers before it 
    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third
};