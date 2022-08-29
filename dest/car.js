"use strict";
class Machine {
    constructor(manufacturer) {
        this.manufacturer = manufacturer;
    }
    summary() {
        return `${this.manufacturer} makes this machine`;
    }
}
class Car extends Machine {
    constructor(manufacturer, position, speed) {
        super(manufacturer);
        this.position = position;
        this.speed = speed;
    }
    move() {
        this.position += this.speed;
        console.log(`moved ${this.speed}`);
    }
    moreInfo() {
        return `this is a car located at ${this.position} and is moving at ${this.speed}mph`;
    }
}
let myCar = new Car("Konda", 10, 70);
myCar.move();
console.log(myCar.summary());
console.log(myCar.moreInfo());
myCar.move();
console.log(myCar.moreInfo());
