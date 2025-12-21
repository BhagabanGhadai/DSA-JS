function countDigit(num){
    let num = Math.abs(num)
    if(num===0) return 1
    let count=0
    while(true){
        if(num){
            num=Math.floor(num/10)
            count++
        }else{
            break
        }
    }
    return count
}
console.log(countDigit(578))

function countDigit(num){
    return String(num).length
}

console.log(countDigit(578))

function countDigit(num) {
    num = Math.abs(num);
    if (num < 10) return 1;
    return 1 + countDigit(Math.floor(num / 10));
}

console.log(countDigit(578))
