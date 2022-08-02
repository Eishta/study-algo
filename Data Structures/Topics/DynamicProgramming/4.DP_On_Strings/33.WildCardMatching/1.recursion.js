let isMatch = function (s, p){

    function solve(i,j){
        if(i<0 && j< 0)return true;
        if(j<0 && i>=0)return false;
        if(i<0 && j>=0){
            for(let ii =0;ii<=j;ii++){
               if(p[ii]!=='*')return false;
            }
            return true
        }
        if(s[i] === p[j] || p[j] === '?'){
            return solve(i-1, j-1)
        }
        else {
            if(p[j] === '*'){
                return solve(i-1, j) || solve(i,j-1)
            }else return false;
        }
    }

    return solve(s.length -1,p.length -1)
}