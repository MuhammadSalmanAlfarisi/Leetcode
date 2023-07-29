/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 1) {
            continue
        }
        if (
            // if the array starts with a 0 OR if the number before this index == 0
            (i == 0 || flowerbed[i - 1] == 0) &&
            // if the array after this == 0 OR if the array ends with a 0
            (flowerbed[i + 1] == 0 || i == flowerbed.length - 1)) {
            // changes the current index to 0
            flowerbed[i] = 1
            n--;
        }
    }
    return (n <= 0)
};