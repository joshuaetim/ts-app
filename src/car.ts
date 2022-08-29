abstract class Machine {
    constructor(public manufacturer: string) {
    }

    summary(): string {
        return `${this.manufacturer} makes this machine`;
    }

    abstract moreInfo(): string;
}

class Car extends Machine {
    constructor(manufacturer: string, public position: number, protected speed: number) {
        super(manufacturer);
    }

    move() {
        this.position += this.speed;
        console.log(`moved ${this.speed}`);
    }

    moreInfo(): string {
        return `this is a car located at ${this.position} and is moving at ${this.speed}mph`;
    }
}

let myCar = new Car("Konda", 10, 70);
myCar.move();
console.log(myCar.summary());
console.log(myCar.moreInfo());
myCar.move();
console.log(myCar.moreInfo());
