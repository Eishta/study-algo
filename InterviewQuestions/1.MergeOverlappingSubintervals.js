// Complexity 
// Time- O(nlogn)
// Space- O(n)

// Input:
// {{1,3}, {2,4}, {5,7}, {6,8}}

// Output:
// {{1,4},{5,8}}

let mergeInterval = (arr)=>{
    if(!arr.length){
        return[]; 
    }
    arr=arr.sort((a,b)=> a[0]-b[0]);
    let stack =[arr[0]];
    for(let i=1;i<arr.length;i++){
        let top= stack[stack.length-1];
        if(top[1] < arr[i][0]){
            stack.push(arr[i])
        }
        else if(top[1]<arr[i][1]){
            top=stack.pop();
            top[1] = Math.max(top[1],arr[i][1]);
            stack.push(top);
        }
    }
    return stack;

}

mergeInterval([[6,8],[1,9],[2,4],[4,7]])
// Output
[1, 9]

// Try O(1) Space