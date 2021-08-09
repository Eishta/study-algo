// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

 var longestPalindrome = function(s) {
    if(s===null || s.length < 1)return '';
    
    let [start,end]=[0,0];
    
    for(let i =0;i<s.length;i++){
        let len1= expandAroundCenter(s,i,i); // ex = aaeaa. - starts at e
        let len2 = expandAroundCenter(s,i,i+1); // e= aabbaa - compair in pairs
        let len = Math.max(len1,len2);
        if(len > end-start){
            start= i - Math.floor((len-1)/2);
            end = Math.floor(i+len/2);
        }
    }
    return s.substring(start,end+1);
};

let expandAroundCenter = (s, l,r)=>{
    if(s===null || l> r)return 0;
    
    while(l>=0 && r< s.length && s[l]===s[r]){
        l--; r++;
    }
    return r-l-1;
}