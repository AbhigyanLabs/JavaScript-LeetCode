/**
 * @param {number} millis
 * @return {Promise}
 */

// Asynchronous function to pause execution for a given number of milliseconds
async function sleep(millis) {
    // Return a new Promise that resolves after the specified time
    return new Promise(function(resolve) {
        // setTimeout will call 'resolve' after 'millis' milliseconds
        setTimeout(resolve, millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */