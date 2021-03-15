function baseStrategy(amount) {
    return amount
}

function silverStrategy(amount) {
    return amount - amount * 0.20
}   


function goldStrategy(amount) {
    return amount - amount * 0.30
}   

class AutoCart {
    constructor() {
        this.amount = 0;
        this.discount = null;
    }

    checkout() {
        return this.discount(this.amount)
    }

    setDiscount(discount) {
        this.discount = discount;
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

const user = { cart: 'GoldStrategy', sum: 10000}
const cart = new AutoCart()
if(user.cart === 'BaseStrategy') {
    cart.setDiscount(baseStrategy)
    cart.setAmount(user.sum)
}

if(user.cart === 'SilverStrategy') {
    cart.setDiscount(silverStrategy)
    cart.setAmount(user.sum)
}

if(user.cart === 'GoldStrategy') {
    cart.setDiscount(goldStrategy)
    cart.setAmount(user.sum)
}

console.log(cart.checkout())