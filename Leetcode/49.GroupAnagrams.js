// my version
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n) 
var groupAnagrams = function(strs) {
    let map={};
    let result = [];
    for(let ele of strs){
        let sEle = ele.split('').sort().join('');
        if(map[sEle]){
            map[sEle].push(ele);
        }
        else{
            map[sEle] = [ele];
        }
    }
    return Object.values(map);
};