var numDistinct = function (s, t) {
    let prev =  Array(t.length+1).fill(0);
    prev[0] = 1;
    for(let i = 1;i<=s.length;i++){
        for(let j = t.length;j>0;j--){
            if(s[i-1]===t[j-1] ){
                prev[j] = prev[j-1] + prev[j]
            }else  prev[j] =  prev[j]
        }
        
    }
    return prev[t.length]
};


// Time Complexity: O(N*M) -  There are two nested loops.

// Space Complexity: O(M) - We are using an external array of size ‘M+1’ to store only one row.