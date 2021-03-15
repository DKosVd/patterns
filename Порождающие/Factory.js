export class BmwFamily { //Фабрика по производству автомобилей семейного типа

    family() {
        return 'family'
    }

    create(type) {
        if(type === 'X5') {
            return new BMW(type, 150000, 200, this.family())
        }
        if(type === 'X6') {
            return new BMW(type, 13453455, 300, this.family())
        }
        throw new Error('Нет подходящего типа')
    }
}

export class BmwSport {

    sport() {
        return 'sport'
    }

    create(type) {
        if(type === 'X7') {
            return new BMW(type, 14124124, 350, this.sport())
        }
        throw TypeError('Нет подходящего типа')
    }
}


class BMW {
    constructor(type, price, speed, check) {
        this.type = type;
        this.price = price;
        this.speed = speed
        this.check = check;
    }
}




// console.log(factory.create('X5'));
// console.log(factory.create('X6'));
// try {
//     factory.create('X4')
// } catch(err) {
//     console.log(err.message)
// }