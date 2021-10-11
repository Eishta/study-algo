// Queue = FIFO 
// queue.enqueue(1),queue.enqueue(2),queue.enqueue(3) = [1,2,3]
// queue.dequeue() = 1 , [2,3]
// queue.dequeue() = 2 , [3]
// queue.dequeue() = 3 , []
// Stack = FILO
// stack.push(1),stack.push(2),stack.push(3) = [1,2,3]
// stack.pop() = 3 , [1,2]
// stack.pop() = 2 , [1]
// stack.pop() = 1 , []

// enqueue is same as push but dequeue is opposite of pop
// so we maintain 2 stacks => stack1 to enqueue, stack2 to help in maintaining data in reverse order in stack1
// Queue = FIFO 
// queue.enqueue(1), stack1= [1]
// queue.enqueue(2), stack1=[2,1]
// queue.enqueue(3) ,stack1= [3,2,1]
// queue.dequeue() = 1 , [3,2]
// queue.dequeue() = 2 , [3]
// queue.dequeue() = 3 , []

class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    // enqueue is a costly function here
    enqueue(ele) {
        if (this.s1.length) {
            while (this.s1.length) {
                this.s2.push(this.s1.pop());
            }
            this.s1.push(ele);
            while (this.s2.length) {
                this.s1.push(this.s2.pop());
            }
        }
        else {
            this.s1.push(ele);
        }
    }
    dequeue() {
        if (this.isEmpty()) return 'Underflow';
        return this.s1.pop();
    }
    isEmpty() {
        return !this.s1.length;
    }
    printQueue() {
        if (this.isEmpty()) return 'Queue is Empty';
        for (let i = this.s1.length - 1; i >= 0; i++) {
            console.log(this.s1[i]);
        }
    }
    getFirstElement() {
        if (this.isEmpty()) return 'Underflow';
        else return this.s1[this.s1.length - 1];
    }
    getLastElement() {
        if (this.isEmpty()) return 'Underflow';
        else {
            return this.s1[0];
        }
    }
    size() {
        if (this.isEmpty()) return 0;
        else {
            return this.s1.length;
        }
    }
    search(item) {
        if (this.s1.length) {
            for (let ele of this.s1) {
                if (ele === item) return true
            }
            return false
        } else return false;
    }


}

let que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.printQueue(); // 1 2 3
que.getFirstElement(); // 1
que.getLastElement(); // 3
que.dequeue(); // 1
que.isEmpty(); // false
que.dequeue(); // 2
que.dequeue(); // 3
que.isEmpty(); // true
