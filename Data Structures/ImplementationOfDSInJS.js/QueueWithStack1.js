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
class Queue{
    constructor(){
        this.s1=[];
        this.s2=[];
    }
    // enqueue is a costly function here
    enqueue(data){
        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
        this.s1.push(data);
        while(this.s2.length){
            this.s1.push(this.s2.pop());
        }
    }
    dequeue(){
        if(!this.s1.length) return 'Queue is Empty';
        else return this.s1.pop();
    }
    peek(){
        if(!this.s1.length) return 'Queue is Empty';
        else return this.s1[this.s1.length-1];
    }
    isEmpty(){
        return !!this.s1.length;
    }
}