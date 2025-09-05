/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */


var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {

            // Set a timeout: if 'fn' takes longer than 't' ms, reject the promise
            const timer = setTimeout(() => reject("Time Limit Exceeded"), t);

            // Call the provided function with arguments
            // - If it resolves, call resolve
            // - If it rejects, call reject
            // - In both cases, clear the timeout
            fn(...args).then(resolve, reject)
        });
    };
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */