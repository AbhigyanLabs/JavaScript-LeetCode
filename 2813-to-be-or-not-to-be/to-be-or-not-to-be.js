/**
 * @param {string} val
 * @return {Object}
 */
 
// 'expect' function to create assertions for a given value
var expect = function(val) {
    return {
        // Checks if the value is exactly equal to 'val1'
        toBe: function(val1) {
            if (val === val1) {
                return true;           // Assertion passed
            } else {
                throw new Error("Not Equal"); // Assertion failed
            }
        },

        // Checks if the value is NOT equal to 'val1'
        notToBe: function(val1) {
            if (val !== val1) {
                return true;           // Assertion passed
            } else {
                throw new Error("Equal"); // Assertion failed
            }
        }
    }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */