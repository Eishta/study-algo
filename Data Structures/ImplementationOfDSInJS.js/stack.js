class Stack {
    constructor() {
        this.items = [];
    }
    push(ele) {
        this.items.push(ele);

    }
    pop() {
        if (this.isEmpty()) {
            return 'Underflow'
        }
        else {
            return this.items.pop();
        }
    }
    isEmpty() {
        return !this.items.length
    }
    printStack() {
        if (this.isEmpty()) return 'Stack is Empty'
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

let s = new Stack();
s.push(2);
s.push(3);
s.printStack(); // 2 3
s.getFirstElement(); // 2
s.pop(); // 3
s.pop(); // 2
s.printStack();  // 'Stack is Empty'
s.isEmpty(); // true
s.getFirstElement();  // 'Underflow'
s.getLastElement(); // 'Underflow'
