class Stack {
    constructor() {
        this.items = []
    }
    push(data) {
        this.items.push(data);
    }
    pop() {
        if (this.items.length === 0) return 'Underflow';
        else return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printStack() {
        this.items.forEach((ele) => console.log(ele));
    }
    getFirstElement() {
        return this.items[0];
    }
    getLastElement() {
        if (this.items.length === 0) return 'Underflow';
        return this.items[this.items.length - 1];
    }
}