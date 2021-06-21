class Queue {
    constructor(){
        this.items=[];
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        if(this.items.isEmpty()) return 'Underflow'
        else return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;

    }
    printQueue(){
        this.items.forEach(ele=> console.log(ele))
    }
    getFirst(){
        if(this.items.isEmpty())return 'Underflow'
        else return this.items[0];
    }

}