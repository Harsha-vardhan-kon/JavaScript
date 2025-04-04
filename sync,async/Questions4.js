// 8. Parallel Async Operations
// Write an async function runInParallel() that performs multiple independent tasks in parallel, using async/await and Promise.all().

// Example:

// Task 1: Resolve a promise with 1 after 1 second.

// Task 2: Resolve a promise with 2 after 2 seconds.

// Task 3: Resolve a promise with 3 after 3 seconds.

// Requirements:

// Return all results when all tasks are completed.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First promise resolved"), 1000);  // resolves after 1 second
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second promise resolved"), 2000);  // resolves after 2 seconds
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Third promise resolved"), 1500);  // resolves after 1.5 seconds
});

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);  // Output: ["First promise resolved", "Second promise resolved", "Third promise resolved"]
    })
    .catch(error => {
        console.error(error);
    });
