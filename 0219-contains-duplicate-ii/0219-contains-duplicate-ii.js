/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // loop j in reverse to i, so that we can iterate each j through i
  for (let i = 0; i < nums.length - 1; i++) {
    let j = nums.length - 1;
    while (i < j) {
      // IF there are 2 distict indices resulting of nums[i] == nums[j]
      // && abs(i-j) <= k
      if ((nums[i] == nums[j]) && (Math.abs(i - j) <= k)) {
        return true
      }
      j--
    }
  }
  return false
};