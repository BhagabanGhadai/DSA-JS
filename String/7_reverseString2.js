function reverseString2(str,k){
    const arr=str.split('');
    for(let i=0;i<arr.length;i+=2*k){
        [arr[i],arr[Math.min(i+k-1,arr.length-1)]]=[arr[Math.min(i+k-1,arr.length-1)],arr[i]];
    }
    return arr.join('');
}

function reverseString2(str,k){
    const arr=str.split('');
    for(let i=0;i<arr.length;i+=2*k){
        [arr[i],arr[Math.min(i+1,arr.length-1)]]=[arr[Math.min(i+1,arr.length-1)],arr[i]];
    }
    return arr.join('');
}
console.log(reverseString2('abcdefg',2))//bacdfeg
console.log(reverseString2('hijklmnop',2))//ihjkmlop
console.log(reverseString2('1234567890',1))//2143658709