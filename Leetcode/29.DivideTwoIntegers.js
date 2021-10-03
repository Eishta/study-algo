// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.
var divide = function (dividend, divisor) {
    let count = 0, flag = false;
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    if (!dividend) return dividend;
    if (divisor < 0) {
        divisor = -1 * divisor;
        flag = !flag
    }
    if (dividend < 0) {
        dividend *= -1;
        flag = !flag;
    }
    while (dividend >= divisor) {
        dividend -= divisor;
        count++
    }
    if (count > Math.pow(2, 31) - 1) count = Math.pow(2, 31)
    return flag ? -count : count;
};