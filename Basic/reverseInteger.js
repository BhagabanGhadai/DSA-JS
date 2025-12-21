function reverseInteger(num) {
    const isNegative = num < 0;
    const reversedNum = parseInt(Math.abs(num).toString().split('').reverse().join(''), 10);
    return isNegative ? -reversedNum : reversedNum;
}

function reverseInteger(num) {
    const isNegative = num < 0;
    let original = Math.abs(num);
    let reversed = 0;

    while (original > 0) {
        const digit = original % 10;
        reversed = reversed * 10 + digit;
        original = Math.floor(original / 10);
    }

    return isNegative ? -reversed : reversed;
}

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-456)); // -654
console.log(reverseInteger(1000)); // 1
console.log(reverseInteger(0)); // 0
console.log(reverseInteger(7890));