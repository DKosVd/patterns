class Car {
    constructor() {
        this.autoPilot = false;
        this.color = null
        this.seats = null
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car()
    }

    changeColor(color) {
        this.car.color = color;
        return this
    }

    changeSeats(seats) {
        this.car.seats = seats;
        return this
    }

    addAutoPilot() {
        this.car.autoPilot = true;
        return this
    }

    build() {
        return this.car;
    }
}

const car = new CarBuilder()
    .changeColor('white')
    .addAutoPilot()
    .changeSeats(5)
    .build();
    
console.log(car)