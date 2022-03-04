const { MessageChannel, receiveMessageOnPort } = require('worker_threads');
const { port1, port2 } = new MessageChannel();
class User {
    sayHello() {
        console.log('Hello!');
    }
}
port1.postMessage({ hello: 'world', user: new User() });

console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'world' } }
console.log(receiveMessageOnPort(port2));
// Prints: undefined