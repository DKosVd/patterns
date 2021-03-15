class Memento { //Снимок
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value
    }
}

class Creator { //Сохранение снимка и получение значения снимка
    save(value) {
        return new Memento(value)
    }

    restore(memento) {
        if(memento){
            return memento.getValue()
        }
    }
}

class CareTaker {//Добавление снимка и возвращение снимка
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento)
    }

    getMemento(index) {
        return this.mementos[index]
    }
}


const creator = new Creator();
const caretaker = new CareTaker();

caretaker.addMemento(creator.save('Hello'))
caretaker.addMemento(creator.save('Hello World'))
console.log(creator.restore(caretaker.getMemento(1)))

