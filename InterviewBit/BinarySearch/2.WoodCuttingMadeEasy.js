// Also makes the question => 
// Value to be subtracted from array elements to make 
// sum of all elements equals K

let solve = (A, B) => {
    A.sort((a, b) => a - b);
    let [low, high, mid] = [0, A[A.length - 1], 0];
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        let wood = woodCollected(A, mid);
        if (wood === B) return mid;
        else if (wood > B) {
            low = mid + 1
        }
        else high = mid - 1
    }
    return mid;
}
let woodCollected = (A, height) => {
    collectedWood = 0;
    for (let val of A) {
        if (val > height) {
            collectedWood += val - height;
        }
    }
    return collectedWood;
}