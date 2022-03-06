const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename, { workerData: 'Hello, world!' });
} else {
    // const NewObj = require('./newobj');
    // Object.setPrototypeOf(obj, NewObj.prototype);
    //
    // console.log({
    //     a: obj.a,
    //     b: obj.b,
    //     c: obj.c()
    // });
    console.log(workerData);  // Prints 'Hello, world!'.
}