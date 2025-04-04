// 7. Async/Await with Timeout
// Write an async function timeoutTask() that simulates a task with a delay of 3 seconds. 
// If the task is not completed within 2 seconds, it should throw an error saying "Task timed out".

 // Hint: You can simulate this with Promise.race().

 async function timeoutTask() {
    // This promise simulates a task that takes time to complete
    const taskPromise = new Promise((resolve, reject) => {
        // Simulate a task taking 3 seconds (you can adjust this duration)
        setTimeout(() => {
            resolve('Task completed');
        }, 3000);  // This simulates the task taking 3 seconds to complete
    });

    // This promise simulates a timeout after 2 seconds
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Task timed out');  // Rejects if task exceeds the timeout
        }, 2000);  // This simulates the timeout threshold of 2 seconds
    });

    // Use Promise.race to race the two promises
    try {
        const result = await Promise.race([taskPromise, timeoutPromise]);
        console.log(result);  // This will only run if the task completes within the time limit
    } catch (error) {
        console.error(error);  // This will run if the timeout occurs first
    }
}

timeoutTask();
