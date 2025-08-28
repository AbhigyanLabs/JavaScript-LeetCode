/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */


// Function to create a counter with increment, decrement, and reset functionality
var createCounter = function(init) {
    const org = init; // Store the original initial value for reset

    return {
        // Increases the counter by 1 and returns the new value
        increment: function() {
            return ++init; // Pre-increment: update first, then return
        },

        // Decreases the counter by 1 and returns the new value
        decrement: function() {
            return --init; // Pre-decrement: update first, then return
        },

        // Resets the counter to the original initial value and returns it
        reset: function() {
            init = org;    // Reset counter
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */