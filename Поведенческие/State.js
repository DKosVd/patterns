class OrderStatus {
    constructor(name, setStatus) {
        this.name = name;
        this.status = setStatus;
    }

    next() {
        return new this.status()
    }
}

class Wait extends OrderStatus {
    constructor() {
        super('Wait', Shipping)
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('Shipping', Delivered)
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('Delivered', Delivered)
    }
}

class Order {
    constructor() {
        this.state = new Wait(); //name: 'Wait', status: class Shipping
    }

    next() {
        this.state = this.state.next(); 
    }
}

const order = new Order();

console.log(order.state)
order.next(); // new Shipping 
console.log(order.state) //name: 'Shipping', status: class Delivered
order.next();// new Delivered
console.log(order.state) // name: Delivered, status: class Delivered
//Меняем статус заказа