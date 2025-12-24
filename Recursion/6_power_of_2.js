function powerOfTwo(n) {
    if(n==0) return 1
    return 2*powerOfTwo(n-1)
}

function powerOfTwo(n) {
    if(n==0) return true
    else if((n%2!=0)||n<1) return false
    return powerOfTwo(n/2)
}

console.log(powerOfTwo(4))