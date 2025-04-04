// 5. Sequential Delay with Async/Await
// Write a function delayAndLog() that logs a number from an array, waits for 2 seconds, and then logs the next number from the array. Do this for all numbers in the array.

// Example Input: [10, 20, 30, 40]

// Requirements:

// Use async/await to introduce a delay for each number in the sequence.


// This function simulates a delay and logs the input data
function delayAndLog(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`The data: ${input}`);
            resolve(input);  // Resolving the input value
        }, 2000);
    });
}

async function delay() {
   
    let arr = [10, 20, 30, 40];  // Define the array to process

    // Loop through each value in the array and process it
    for (let i = 0; i < arr.length; i++) {
        let result = await delayAndLog(arr[i]);  // Wait for the promise to resolve
       // store.push(result);  // Add the resolved value to the store array
       console.log(result)
    }

    
}

delay();
