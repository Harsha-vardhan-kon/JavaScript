// 1. Basic Asynchronous Task
// Write an async function waitForNumber() that simulates a delay of 2 seconds and returns the number 42 after the delay.

// Requirements:

// Use async/await to simulate a delay using setTimeout.

// Call waitForNumber() and log the result.

async function waitForNumber(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`The delay time is ${delay}`);
            resolve(delay);  // Resolve the promise with the delay value
        }, 2000);
    });
}

async function delayBy() {
    let timeDelay = await waitForNumber(42);  // Await the result from waitForNumber
    console.log(timeDelay);  // Log the result after the delay
}

delayBy();


// 2. Handling Multiple Promises Sequentially
// Write an async function fetchNumbers() that resolves an array of numbers [1, 2, 3, 4, 5] one by one with a delay of 1 second between each number.

// Hint: Use await inside a loop.

// Requirements:

// Log each number after the delay.

async function fetchNumbers(numbers) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`the number ${numbers}`) 
            resolve(numbers)
        },1000)
    })
    
}

async function loop() {
    let numbers=[1,2,3,4,5];
    for(let i=0;i<numbers.length;i++){
        await fetchNumbers(numbers[i])
    }
    console.log(numbers)
}
loop();


