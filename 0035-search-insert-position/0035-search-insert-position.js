/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let count = 0;
    
   for (let i = 0; i<nums.length; i++){
       if (nums[i] === target){
            return i
       }
       else if (nums[i] < target){
           count++
       }
    } 
    return count
};