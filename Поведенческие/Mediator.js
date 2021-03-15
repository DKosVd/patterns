class Mediator {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Имя покупателя ${name}. Автомобиль ${auto}`);
        console.log(`Информация ${info}`);
        this.addCustomers(name)
    }

    addCustomers(customer) {
        this.customers.push(customer);
    }

    showCustomers() {
        return this.customers
    }
}

class Customers {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.mediator.orderAuto(this, auto, info)
    }
}

const mediator = new Mediator();
const Danil = new Customers('Danil', mediator);
const Danila = new Customers('Danila', mediator);
Danil.makeOrder('BMW X7', 'Информация об автомобиле');
Danila.makeOrder('BMW X7', 'Информация об автомобиле')

console.log(mediator.showCustomers())