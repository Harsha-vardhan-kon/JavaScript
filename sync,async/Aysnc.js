function apiCalling(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data ID: ${dataid}`);  // Log the dataid
            resolve("the data");  // Resolve with a single value
        }, 2000);
    });
}

(async function api() {
    await apiCalling(1);  // Call with dataid = 1
    await apiCalling(2);  // Call with dataid = 2
    await apiCalling(3);  // Call with dataid = 3
    await apiCalling(4);  // Call with dataid = 4
    await apiCalling(5);  // Call with dataid = 5
})();


