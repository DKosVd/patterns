class Auto {
    accept(visitor) {
        visitor(this)
    }
}

class BMW extends Auto {
    info() {
        return 'Info about BMW'
    }
}

class AUDI extends Auto {
    info() {
        return 'Info about AUDI'
    }
}

function exportVisitor(auto) {
    if( auto instanceof BMW) {
        auto.export = console.log(`Export data: ${auto.info()}`)
    }
    if( auto instanceof AUDI ) {
        auto.export = console.log(`Export data: ${auto.info()}`)
    }
}

const bmw = new BMW();
const audi = new AUDI();
bmw.accept(exportVisitor)
audi.accept(exportVisitor)

