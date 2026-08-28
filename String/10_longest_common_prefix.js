function longestCommonPrefix(str1,str2,str3){
    let substring=""
    for(let i=0;i<Math.min(str1.length,str2.length,str3.length);i++){
        if(str1[i]==str2[i]&&str2[i]==str3[i]) substring+=str1[i]
        else break
    }
    return substring
}

console.log(longestCommonPrefix("flower","flight","flow"))
console.log(longestCommonPrefix("dog","racecar","car"))