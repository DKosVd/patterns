class Basket { //Один объект(Пример корзина товаров)
    constructor() {
        if(typeof Basket.instanse === 'object') {
            return Basket.instanse;
        }
        this.store = {};
        Basket.instanse = this;
        return this;
    }


    getBasketStore() {
        return this.store;
    }

    basketPush(name, price) {
        this.store[name] = price;
        return
    }

}

const basket = new Basket();

const car = new Basket();
const pc = new Basket();
car.basketPush('BMW', 12312313)
pc.basketPush('i5', 1231254)


console.log(basket.getBasketStore())