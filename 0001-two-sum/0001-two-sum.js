/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numMap = new Map(); // Create a Map to store values and indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            // Return the indices of the two numbers
            return [numMap.get(complement), i];
        }

        // Add the current number and its index to the map
        numMap.set(nums[i], i);
    }

    // No solution found
    return [];
}