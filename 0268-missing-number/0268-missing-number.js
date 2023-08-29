/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length+1;
    let Sn = (n/2)*(n-1)
    
    for (let i = 0; i < nums.length; i++){
        Sn -= nums[i]
    }
    return Sn 
};