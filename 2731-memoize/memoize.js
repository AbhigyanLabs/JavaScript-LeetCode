/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    const cache = {}; // Object to store previously computed results
    return function(...args) {
        const key = JSON.stringify(args); // Serialize arguments to create a unique key

        // If result for these arguments exists in cache, return it
        if (key in cache) {
            return cache[key];
        }

        // Compute the result for the given arguments
        const result = fn.apply(this, args);

        // Store the computed result in cache using key
        cache[key] = result;

        // Return the computed result
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */