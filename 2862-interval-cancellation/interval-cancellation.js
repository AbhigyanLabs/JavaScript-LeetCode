/**
 * Creates a cancellable repeating function executor.
 *
 * @param {Function} fn   - The function to be executed repeatedly.
 * @param {Array} args    - The arguments to pass to the function.
 * @param {number} t      - Interval time in milliseconds.
 * @return {Function}     - A cancel function that stops further executions.
 */
var cancellable = function(fn, args, t) {
    // Run the function immediately at time = 0
    fn(...args);

    // Schedule repeated execution every t milliseconds
    let timerId = setInterval(() => {
        fn(...args);
    }, t);

    // Return a function that cancels the interval
    const cancelFn = function() {
        clearInterval(timerId); // stop further executions
    };

    return cancelFn;
};