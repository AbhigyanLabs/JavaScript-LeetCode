/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// Define a function 'map' that takes an array 'arr' and a callback function 'fn'
var map = function(arr, fn) {
    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Apply the callback function to the element and its index, 
        // then replace the element with the result
        arr[i] = fn(arr[i], i);
    }
    // Return the modified array
    return arr;
};
