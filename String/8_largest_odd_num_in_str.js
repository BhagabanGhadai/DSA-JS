function largestOddNumInStr(str){
    let largestOdd=-1
    for (let char of str){
        if(parseInt(char)>largestOdd&&char%2!=0) largestOdd=parseInt(char)
    }
    return largestOdd
}

console.log(largestOddNumInStr("52"))
console.log(largestOddNumInStr("4206"))
console.log(largestOddNumInStr("35427"))
console.log(largestOddNumInStr("89072"))