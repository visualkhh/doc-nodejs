const { Worker, isMainThread } = require('worker_threads');

console.log('start')
if (isMainThread) {
    // This re-loads the current file inside a Worker instance.
    new Worker(__filename);
} else {
    console.log('Inside Worker!');
    console.log(isMainThread);  // Prints 'false'.
}
console.log('end')
