let unionIntersection = (A, B, m, n) => {
    let [union, intersection] = [[], []];
    let [i, j] = [0, 0];

    while (i < m && j < n) {
        if (a[i]<b[j]) {
            union.push(a[i]);
            i++;
        }
        else if(a[i]>b[j]){
            union.push(b[j]);
            j++;
        }
        else{
            union.push(a[i]);
            intersection.push(a[i]);
            i++;
            j++;
        }
    }
    while(i<m){
        union.push(a[i]);
        intersection.push(a[i]);
        i++;
    }
    while(j<n){
        union.push(b[j]);
        intersection.push(b[j]);
        j++;
    }
    return [union,intersection];
}
