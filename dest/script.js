"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}
let greeter = new Greeter("Hello world!");
console.log(greeter.greet());
