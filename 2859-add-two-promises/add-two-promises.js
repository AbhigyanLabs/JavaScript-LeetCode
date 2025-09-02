/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    // Solution 1
    // Wait for both promises to resolve
    // const [val1, val2] = await Promise.all([promise1, promise2]);
    // Return the sum
    // return val1 + val2;


    //Solution 2
    // Wait for promise1 to resolve and store its resolved value in val1
    const val1 = await promise1;

    // Wait for promise2 to resolve and store its resolved value in val2
    const val2 = await promise2;

    // Return the sum of both resolved values
    return val1 + val2;
};


/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */