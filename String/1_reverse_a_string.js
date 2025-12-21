function reverseString(str){
    return str.split('').reverse().join('')
}

function reverseString(str){
    let reversed = '';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}

function reverseString(str){
   const arr=str.split('');
    for(let i=0;i<Math.floor(arr.length/2);i++){
        const temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr.join('');
}

function reverseString(str){
   const arr=str.split('');
    let left=0;
    let right=arr.length-1;
    while(left<right){
        const temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++
        right--
    }
    return arr.join('');
}

console.log(reverseString("hello"))
console.log(reverseString("hello world"))