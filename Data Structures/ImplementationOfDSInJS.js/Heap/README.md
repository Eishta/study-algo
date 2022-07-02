## Heap Data Structure
Heap data structure is a complete binary tree that satisfies the heap property, where any given node is

* always greater than its child node/s and the key of the root node is the largest among all other nodes. This property is also called max heap property.
* always smaller than the child node/s and the key of the root node is the smallest among all other nodes. This property is also called min heap property.


#### Heapify 
1. Get the input array say = 3,9,2,1,4,5
2. Create complete binary tree from it -> if i is parent => legft = 2 * i + 1, right = 2 * i + 2
3. Heapify - select the non-leaf element say i 
4. Set it as largest 
5. The index of left child is given by 2i + 1 and the right child is given by 2i + 2.
If leftChild is greater than currentElement (i.e. element at ith index), set leftChildIndex as largest.
If rightChild is greater than element in largest, set rightChildIndex as largest.
6. Swap largest with currentElement


##### To create a Max-Heap:

MaxHeap(array, size)
  loop from the first index of non-leaf node down to zero
    call heapify


##### Algorithm

heapify(array)
    Root = array[0]
    Largest = largest( array[0] , array [2*0 + 1]. array[2*0+2])
    if(Root != Largest)
          Swap(Root, Largest)

Heapify(array, size, i)
  set i as largest
  leftChild = 2i + 1
  rightChild = 2i + 2
  
  if leftChild > array[largest]
    set leftChildIndex as largest
  if rightChild > array[largest]
    set rightChildIndex as largest

  swap array[i] and array[largest]