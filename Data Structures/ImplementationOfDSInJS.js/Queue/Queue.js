class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(ele) {
        this.items.push(ele);

    }
    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow'
        }
        else {
            return this.items.shift();
        }
    }
    isEmpty() {
        return !this.items.length
    }
    printQueue() {
        if (this.isEmpty()) return 'Queue is Empty'
        this.items.forEach(ele => console.log(ele))
    }
    getFirstElement() {
        if (this.isEmpty()) return 'Underflow';
        else return this.items[0];
    }
    getLastElement() {
        if (this.isEmpty()) return 'Underflow';
        else return this.items[this.items.length - 1];
    }
}

let s = new Queue();
s.enqueue(2);
s.enqueue(3);
s.printQueue(); // 2 3
s.getFirstElement(); // 2
s.dequeue(); // 2
s.dequeue(); // 3
s.printQueue(); // 'Queue is Empty'
s.isEmpty(); // true
s.getFirstElement(); // 'Underflow'
s.getLastElement(); // 'Underflow'
