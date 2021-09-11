function gcd(a, b) {
    if (a === 0) return b;
    else if (b == 0) return a;
    else if (a === b) return a;
    else if (a > b) return gcd(a - b, b);
    else return gcd(a, b - a);
}
gcd(98,56)
14

function gcdEuclideand(a, b) {
    if (a === 0) return b;
    else if (b == 0) return a;
    else return gcd(b, a%b);
}
gcdEuclideand(98,56)
14