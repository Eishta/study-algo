/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     if(nums.length<=0) return;
//     let m= Math.trunc(nums.length/2);
//     if(target === nums[m])return m;
//     else if(target< nums[m])searchInsert(nums.slice(0,m), target);
//     else searchInsert(nums.slice(m+1), target)
    
// };
var searchInsert = function(nums, target) {
    const middle = Math.floor(nums.length / 2);
       let offset = 0;
       let result = 0;
       if(target > nums[middle]){
           result = searchInsert(nums.slice(middle + 1, nums.length), target);
           offset = middle + 1;
       }
       else if(target < nums[middle]){
           result = searchInsert(nums.slice(0, middle), target);
       }
       else if(target === nums[middle]){
           result = middle;
       }
       else{
           result = 0;
       }
       return result + offset;
   };