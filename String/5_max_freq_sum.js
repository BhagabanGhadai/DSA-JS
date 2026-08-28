function maxFrequencySum(s){
const freqMap = {};
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
let maxVowelFreq = 0;
let maxConsonantFreq = 0;
// Count frequency of each character
for (let char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
}
const entries = Object.entries(freqMap);
for(let [char, freq] of entries){
    if(vowels.has(char)){
        if(freq > maxVowelFreq){
            maxVowelFreq = freq;
        }
    } else {
        if(freq > maxConsonantFreq){
            maxConsonantFreq = freq;
        }
    }
}
return maxVowelFreq + maxConsonantFreq;

}

console.log(maxFrequencySum("abbcccddddeeeee")); // 5 + 4 = 9
console.log(maxFrequencySum("aabbcc")); // 2 + 2 = 4
console.log(maxFrequencySum("abc")); // 1 + 1 = 2