class Builder {
    build() {
        this.addEngine()
        this.addColor()
        this.addWheels()
    }
}

class BMWBuilder extends Builder {
    addEngine() {
        console.log('BMW ENGINE')
    }  
    addColor() {
        console.log('BLACK')
    }
    addWheels() {
        console.log('ADD WHEELS')
    }
}


class AUDIBuilder extends Builder {
    addEngine() {
        console.log('AUDI ENGINE')
    }  
    addColor() {
        console.log('WHITE')
    }
    addWheels() {
        console.log('ADD WHEELS')
    }
}

const bmwBulder = new BMWBuilder();
const audiBulder = new AUDIBuilder();
console.log(bmwBulder.build());
console.log(audiBulder.build());
