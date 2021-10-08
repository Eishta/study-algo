class Node {
    constructor(ele, next = null) {
        this.data = ele;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(ele) {
        let node = new Node(ele);
        if (this.top) {

            node.next = this.top;
            this.top = node;
        }
        else {
            this.top = node;
        }
    }
    pop() {
        if (this.isEmpty()) return 'Underflow';
        let top = this.top.data;
        this.top = this.top.next;
        return top;
    }
    isEmpty() {
        return !this.top;
    }
    printStack() {
        if (this.isEmpty()) return 'Stack is Empty';
        let node = this.top;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
    getFirstElement() {
        if (this.isEmpty()) return 'Underflow';
        else return this.top.data;
    }
    getLastElement() {
        if (this.isEmpty()) return 'Underflow';
        else {
            let node = this.top;
            while (node.next) {
                node = node.next;
            }
            return node.data;
        }
    }
    size() {
        if (this.top) {
            let node = this.top;
            let count = 0;
            while (node) {
                count++;
                node = node.next;
            }
            return count;
        }
        else return 0;
    }
    search(item) {
        if (this.top) {
            let node = this.top;
            while (node) {
                if (node.data === item) return true;
                node = node.next;
            }
            return false;
        } else return false;
    }

}

let s = new Stack();
s.push(2);
s.push(3);

// stack 
// {
//     "top": {
//         "data": 3,
//             "next": {
//             "data": 2,
//                 "next": null
//         }
//     }
// }

s.printStack(); // 3 2
s.getFirstElement(); // 3
s.pop(); // 3
s.pop(); // 2
s.printStack(); // Stack is Empty
s.isEmpty(); // true
s.getFirstElement(); // Underflow
s.getLastElement() // UnderFlow
