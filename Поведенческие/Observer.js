class Observer {
    constructor() {
        this.news = ''
        this.observers = [];
    }

    setNews(text) {
        this.news = text
        this.notifyAll();
    }

    notifyAll() {
        if(this.observers.length)  {
            return this.observers.forEach(observer => observer.inform(this.news))
        }
        console.log('Некого оповещать')
        return;
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter( el => !(el === observer))
    }
}


class User {
    constructor(name) {
        this.name = name;
    }

    inform(news) {
        console.log(`Dear, ${this.name } hot news special for you ${news}`)
    }
}

const observer = new Observer();

const Danil = new User('Danil')
const Kirill = new User('Kirill')
observer.subscribe(Danil)
observer.subscribe(Kirill)
observer.unsubscribe(Danil)
observer.setNews('Hello')