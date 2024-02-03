class List {


    constructor(data) {
        this.data = data
    }

    add(el) {
        this.data = this.data
    }

    remove(idx) {

    }

    get(idx) {

    }

    size(size) {

    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));