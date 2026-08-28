function largestOddSubString(str){
    let n=str.length-1
    while(n>=0){
        if(Number(str[n])%2!=0){
            return str.substring(0,n+1)
        }
        n--
    }
    return ""
}

console.log(largestOddSubString("52"))
console.log(largestOddSubString("4206"))
console.log(largestOddSubString("35427"))
console.log(largestOddSubString("89072"))