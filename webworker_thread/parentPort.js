const { Worker, isMainThread, parentPort, threadId } = require('worker_threads');
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('Hello');
    }
}
if (isMainThread) {
    const worker = new Worker(__filename);
    worker.once('message', (message) => {
        console.log(message);  // Prints 'Hello, world!'.
    });
    // worker.postMessage('Hello, world!');
    worker.postMessage({name: 'hhh'});
    worker.postMessage({name: 'hh2h'});
    worker.postMessage({name: 'hh2h'});


    const worker2 = new Worker(__filename);
    worker2.once('message', (message) => {
        console.log(message);  // Prints 'Hello, world!'.
    });
    worker2.postMessage({name: '2hhh'});
    worker2.postMessage({name: '2hh2h'});
    worker2.postMessage({name: '2hh2h'});
    // worker.postMessage({name: 'Hello, world!', say: () => {
    //         console.log('Hello, world!');
    //     }});
} else {
    // When a message from the parent thread is received, send it back:
    // parentPort.once('message', (message) => {
    parentPort.on('message', (message) => {
        console.log('---------', threadId, message);
        // parentPort.postMessage(message);
    });
}