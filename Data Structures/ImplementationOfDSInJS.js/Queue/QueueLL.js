class Node{
    constructor(ele, next = null){
      this.data= ele;
      this.next = next;
    }
  }
  class Queue {
    constructor(){
      this.front = null;
      this.rear = null;
    }
  enque(ele){
    let node = new Node(ele);
    if(this.rear){
     
    this.rear.next = node;
    this.rear= node;
    }
   else{
     this.rear = node;
     this.front = node;
   }
  }
  deque(){
    if(this.isEmpty())return 'Underflow';
    let data = this.front.data;
    this.front= this.front.next;
    if(this.front == null){
      this.rear = null;
    }
    return data;
  }
  isEmpty(){
    return this.rear === null && this.front ===null;
  }
  printQueue(){
    if(this.isEmpty()) return 'Queue is Empty';
    let node = this.front;
    while(node.next){
      console.log(node.data);
      node = node.next;
    }
  }
  getFirstElement(){
    if(this.isEmpty())return 'Underflow';
    else return this.front.data;
  }
  getLastElement(){
    if(this.isEmpty())return 'Underflow';
    else {
     return this.rear.data;
    }
  }
    size(){
      if(this.front){
        let node = this.front;
        let count = 0;
        while(node){
          count++;
          node=node.next;
        }
        return count;
      }
      else return 0;
    }
    search(item){
      if(this.front){
      let node = this.front;
      while(node){
        if(node.data=== item) return true;
        node = node.next;
      }
      return false;
    }else return false;
    }
    
  }
  
  let s = new Queue();
  s.enque(2);
//   {
//     "front": {
//         "data": 2,
//         "next": null
//     },
//     "rear": {
//         "data": 2,
//         "next": null
//     }
// }
  s.enque(3);
//   {
//     "front": {
//         "data": 2,
//         "next": {
//             "data": 3,
//             "next": null
//         }
//     },
//     "rear": {
//         "data": 3,
//         "next": null
//     }
// }
  s.printQueue(); // 2 3
  s.getFirstElement(); // 2
  s.deque(); // 2
  s.deque(); // 3
  s.printQueue(); // Queue is Empty
  s.isEmpty(); // true
  s.getFirstElement(); // Underflow
  s.getLastElement() // Underflow