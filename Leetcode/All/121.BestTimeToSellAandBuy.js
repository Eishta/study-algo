let maxProfit = nums =>{
    let min = Infinity;
    let max = 0;
    nums.forEach(e=> {
        min > e &&(min = e);
        max < e-min &&( max= e-min);

    })
    return max;
}