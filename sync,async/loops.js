// 4. Async with Loops (Processing Multiple Items)
// Write an async function processItems() that takes an array of strings, simulates processing each string with a delay of 1 second, and logs the result after each string is processed.

// Example Input: ["apple", "banana", "cherry"]

// Requirements:

// Use async/await to process each item sequentially.

// This is the sync function (renamed to processData)
async function processData(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing time for: ${input}`);
            resolve(input); // Resolving the array input
        }, 4000);
    });
}

// Async function to process items
async function processItems() {
    let arr = await processData(["apple", "banana", "cherry"]);  // Await the resolved array
    
    // Now we want to loop through the array and log each item
    let result = '';  // A string variable to accumulate the output

    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ' '; // Concatenate each item to the result string
    }

    console.log('Processed items:', result.trim()); // Log the final result
}

processItems();
