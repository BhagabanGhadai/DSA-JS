function sumOfFirstNNumbers(n) {
    if(n<=1){
        return n;
    }
    return n+sumOfFirstNNumbers(n-1)
}

console.log(sumOfFirstNNumbers(5))