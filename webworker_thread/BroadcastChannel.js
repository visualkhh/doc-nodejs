'use strict';

const {
    isMainThread,
    BroadcastChannel,
    Worker
} = require('worker_threads');

class User {
    sayHello() {
        console.log('Hello!');
    }
}
const bc = new BroadcastChannel('hello');

if (isMainThread) {
    let c = 0;
    bc.onmessage = (event) => {
        console.log(event.data);
        if (++c === 10) bc.close();
    };
    for (let n = 0; n < 10; n++)
        new Worker(__filename);
} else {
    bc.postMessage({name: 'hello', sasy: new User()});
    bc.close();
}