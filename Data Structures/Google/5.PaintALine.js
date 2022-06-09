// Problem Statement:
// There is a Line (Like X axis) which we need to paint. you are given a list of pairs which is needs to be painted, such as (4, 10), (7, 13), (16,20), (1, 40). There is a cost to paint a particular area which is equal to the distance.
// Such as for (4, 10) the cost is 10 - 4 = 6. and so on. you have write the code to calculate the cost required to paint each of the given pairs. note that if the area is already painted once, no need to paint it again.

// Example.
// first we paint (4, 10), which costs 6, then we paint (7, 13), but we already know that 7-10 is already painted, so we will paint only 10-13 which will cost us 3 only.
// Then we will paint (16, 20) which will cost 4, and finally the pair (1-40) will be painted which will cost (40 - 1) - (10-4) - (13-10) - (20-16) which is 26. so the output array will be [6, 3, 4, 26]



function amountPainted(paint) {
    let answer = Array(paint.length);
    let arr = Array();
    for (let i = 0; i < paint.length; i++) {
        let count = 0;
        let start = paint[i][0]; // ex=> [4,10] => start = 4, end = 10
        let end = paint[i][1];
        while (end > start) { 
            if (!arr[start]) {  // ex-> we came across [1,40] => at arr[4] we find 16, so now the start moves to 16, we will paint after that
                arr[start] = end; // put from start to end --> end 
                count++;  // cur pair cost
                start++;
            } else {
                start = arr[start];
            }
        }
        answer[i] = count;
    }
    return answer;
}
