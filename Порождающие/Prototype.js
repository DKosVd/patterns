class Circle { //Создание прототипов от одного объекта
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    produce() {
        return new Circle(this.x, this.y, this.color)
    }
}


const circlePrototype = new Circle(10, 15, 'black');
const circleFirst = circlePrototype.produce();
circleFirst.x = 20;
const circleSecond = circlePrototype.produce();
console.log(circleFirst, circleSecond)