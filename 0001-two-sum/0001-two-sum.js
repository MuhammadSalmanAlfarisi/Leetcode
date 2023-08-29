/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    for (let l = 0; l < nums.length-1; l++){
        for (let r = l+1; r < nums.length; r++){
            if (nums[r] + nums[l] === target){
                return [l, r]
            }
        }
    }
};