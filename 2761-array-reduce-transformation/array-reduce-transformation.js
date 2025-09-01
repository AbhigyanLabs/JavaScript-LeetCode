/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
    // Start with the given initial value
    let val = init;

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Update the accumulator by applying the reducer function
        val = fn(val, nums[i]);
    }

    // Return the final accumulated result after processing all elements
    return val;
};