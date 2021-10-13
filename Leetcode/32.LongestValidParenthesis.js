// Given a string containing just the characters '(' and ')', 
// find the length of the longest valid (well-formed) parentheses substring.

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Link: https://www.youtube.com/watch?v=r0-zx5ejdq0
 var longestValidParentheses = function(s) {
    let stack =[-1];
    let max=0;
    for(let i=0;i<s.length;i++){
        let top = stack[stack.length-1];
        if(s[top] ==='(' && s[i]===')'){
            stack.pop();
            let newTop = stack[stack.length-1];
            max = Math.max(i-newTop, max)
        }else stack.push(i);
    }
    return max;
    
};

// Method 2- Dynamic programming
// Link: https://www.youtube.com/watch?v=ukyRR0oIAHU

let longestValidParentheses = (s)=>{
    let dp=Array(s.length+1).fill(0);
    let max = 0;

    for(let i=1;i<s.length;i++){
        let j = i-dp[i]-1;
        if(s[j]==='(' && j>=0 && s[i]==='('){
            dp[i+1] = dp[i] + dp[j] + 2;
            max=Math.max(max, dp[i+1])
        }
    }
    return max;
}