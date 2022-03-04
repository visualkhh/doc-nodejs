const { Worker, isMainThread, parentPort } = require('worker_threads');
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
    worker.postMessage({name: 'hhh', say: new User(), sayType: User});
    // worker.postMessage({name: 'Hello, world!', say: () => {
    //         console.log('Hello, world!');
    //     }});
} else {
    // When a message from the parent thread is received, send it back:
    parentPort.once('message', (message) => {
        console.log('---------', message);
        // parentPort.postMessage(message);
    });
}