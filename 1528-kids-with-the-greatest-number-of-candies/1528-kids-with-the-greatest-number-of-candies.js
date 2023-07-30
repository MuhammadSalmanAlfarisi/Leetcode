/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = candies[0]
    let result = []
    // get highest candy
    for (let i = 0; i < candies.length; i++) {
        if (max < candies[i]) {
            max = candies[i]
        }
    }
    // loop through candies
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true)
        }
        else { result.push(false) }
    }
    return result
};