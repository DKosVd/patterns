class Iterator {
    create(el) {
        if(Array.isArray(el) || typeof el === 'string') {
            return new IteratorWithIndex(el)
        } else {
            return new IteratorObject(el)
        }
    }
}


class IteratorWithIndex {
    constructor(el) {
        this.index = 0;
        this.elem = el;
    }

    next() {
        return this.elem[this.index++];
    }

    hasNext() {
        return this.index < this.elem.length;
    }
}

class IteratorObject {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.obj = el;
    }

    next() {
        return this.obj[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}


const collection = new Iterator().create({a: 'h', b: 'e'});

while (collection.hasNext()) {
    console.log(collection.next())
}