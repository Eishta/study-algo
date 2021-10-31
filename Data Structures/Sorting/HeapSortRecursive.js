// Time complexity - Heapify - O(logn), create and build heap => O(n) => so total = O(nlogn)
// Space->> Inplace sorting -> O(1)

// Links:-
// -> https://www.programiz.com/dsa/heap-sort -> explanation code
// -> Code in JS - https://www.geeksforgeeks.org/heap-sort/
// -> Abdul bari explanation of the concept -> https://www.youtube.com/watch?v=HqPJF2L5h9U&t=1097s

function sort(arr) {
    var n = arr.length; 

    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) //->  the first index of a non-leaf node is given by n/2 - 1.
        heapify(arr, n, i);

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}



function sort(arr){
    // build the tree from array and heapify after adding each element
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    // remove the first element and swap with the last element and then heapify again 
    for(let i=n-1;i>0;i--){
        [arr[0], arr[i]]=[arr[i], arr[0]];
        heapify(arr, i,0);  // total number of elements keep on decreasing as the elements from i+1 to n are sorted already
    }
}

function heapify(arr, n, i){
    let largest = i, l = 2*i+1, r = 2*2+2;
    if(l<n && arr[l]>arr[largest]){
        largest = l
    }
    if(r<n && arr[r]>arr[largest]){
        largest = r
    }
    if(largest!==i){
        [arr[largest], arr[i]]=[arr[i], arr[largest]];
        heapify(arr,n,largest);
    }
}