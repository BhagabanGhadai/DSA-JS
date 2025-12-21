function palindromeString(str){
    return str === str.split('').reverse().join('');
}

function palindromeString(str){
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

// Test cases
// console.log(palindromeString("racecar")); // true
// console.log(palindromeString("hello"));   // false
// console.log(palindromeString("madam"));   // true
// console.log(palindromeString("world"));   // false
// console.log(palindromeString("level"));   // true
// console.log(palindromeString("javascript")); // false
// console.log(palindromeString("noon"));    // true
// console.log(palindromeString("python"));   // false
// console.log(palindromeString("civic"));    // true
// console.log(palindromeString("openai"));   // false


function palindromeNumber(num){
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function palindromeNumber(num){
    if(num < 0) return false; // Negative numbers are not palindromes
    let reversed=0
    let original=num

    while(num>0){
        const digit=num%10
        reversed=reversed*10+digit
        num=Math.floor(num/10)
    }
    return original===reversed
}

console.log(palindromeNumber(121)); // true
console.log(palindromeNumber(-121)); // false
console.log(palindromeNumber(10)); // false
console.log(palindromeNumber(12321)); // true
console.log(palindromeNumber(1234321)); // true
console.log(palindromeNumber(12345)); // false
console.log(palindromeNumber(0)); // true
console.log(palindromeNumber(1)); // true
console.log(palindromeNumber(1221)); // true
console.log(palindromeNumber(123321)); // true