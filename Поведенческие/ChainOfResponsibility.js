class Account {//Все карты и методы оплаты 
    pay(orderPrice) {
      if(this.canPay(orderPrice)) {
        this.balance -=orderPrice; 
        console.log(`Оплата по карте ${this.name} успешна на сумму ${orderPrice}`)
      } else if(this.incomer) {
        console.log(`Оплата по карте ${this.name} не прошла`)
        this.incomer.pay(orderPrice)
      } else {
        console.log('На картах нет денег для оплаты')
      }
    }
    canPay(amount) {
       return this.balance >= amount
    }
    setNext(account) {
      this.incomer = account
    }
  }
  
  
  class Master extends  Account {
    constructor(balance) {
      super()
      this.name = 'Master'
      this.balance = balance
    }
  }
  
  class Qiwi extends  Account {
    constructor(balance) {
      super()
      this.name = 'Qiwi'
      this.balance = balance
    }
  }
  
  class Paypal extends  Account {
    constructor(balance) {
      super()
      this.name = 'Paypal'
      this.balance = balance
    }
  }
  
  const master = new Master(100);
  const paypal = new Paypal(200);
  const qiwi = new Qiwi(500);
  
  master.setNext(paypal)
  paypal.setNext(qiwi)
  
  master.pay(350)
  master.pay(150)