1. Maintain a temp array.
2. Traverse through the array, 
*  i -> 1 to n - 1
* * if(arr[i] > temp.last) push into temp and increase  the length
* * else replace the element in temp with the arr[i] by finding its position using Binary search in temp(temp is sorted as the elements are inserted in incresaing order)
3. The main purpose of replacing is to maintain the LIS in temp (temp is not the LIS as the order of elements is not maintained)
