/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    // using two pointers to compare each indexes once
    for (let right = 1; right < nums.length; right++) {
        // if the next value != prev value, then shift the left pointer
        if (nums[right] !== nums[left]) {
            left++
            nums[left] = nums[right]
        }
    }
    return left + 1
};