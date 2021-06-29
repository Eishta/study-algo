let sortArray = a => {
    let [x, y, z] = [0, 0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 0) x++;
        else if (a[i] === 1) y++;
        else z++;
    }
    a=[];
    while (x != 0) {a.push(0);x--;}
    while (y != 0) {a.push(1);y--;}
    while (z != 0) {a.push(2);z--}
    return a;
}