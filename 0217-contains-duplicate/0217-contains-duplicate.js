/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // make new set function
    let set = new Set()
    // for loop using nums as a param
    for (let i = 0; i < nums.length; i++) {
        // if the set has the current number then true
        if (set.has(nums[i])) {
            return true
        }
        // if not, add current number to set
        set.add(nums[i])
    }
    // return false when there is no matching numbers
    return false
};