let ifSubstring = (str, target) => {
    let t = 0;
    for (let i = 0; i < str.length; i++) {
        if (t === target.length) return [true,i-t];
        if (str[i] === target[t]) {
            t++;
        }
        else {
            t = 0;
        }
    }
    return false;
}