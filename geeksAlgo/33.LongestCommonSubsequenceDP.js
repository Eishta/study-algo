let findLongestCommonSubsequence = (str1,str2,m,n)=>{
    let L=Array(m+1).fill(Array(m+1).fill(0));
    for(let i=0;i<m+1;i++){
        for(let j=0;j<n+1;j++){
            if(i==0 || j==0){
                L[i][j] =0;
            }
            else if(str1[i-1] ===str2[j-1] ){
                L[i][j] = L[i-1][j-1] +1
            }
            else{
                L[i][j] = Math.max(L[i-1][j],L[i][j-1]);
            }
        }
    }
    return L[m][n];
}