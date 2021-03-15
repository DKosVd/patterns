import { BmwFamily, BmwSport } from "./Factory.js";

class BmwProduce { //Абстрактная фабрика для выборка конкретной фабрики
    create(kind) {
        if (kind === 'sport') {
            return new BmwSport()
        }
        if( kind === 'family') {
            return new BmwFamily()
        }
    }
}

const bmwProd = new BmwProduce();
const bmwFactory = bmwProd.create('family');
const bmwModel = bmwFactory.create('X5')
console.log(bmwModel)