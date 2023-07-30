/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1
    // make the x = 1/x if the pow is a neg int, then make the n to pos int
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    // recursion x1 * x2 * ... * xn
    if (n % 2 === 0) {

        let halfPower = myPow(x, n / 2);
        return halfPower * halfPower;
    }
    else {
        return x * myPow(x, n - 1);
    }
};