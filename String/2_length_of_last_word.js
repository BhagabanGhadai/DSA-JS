function lengthOfLastWord(s) {
  let trimmedString = s.trim();
  if (trimmedString.length === 0) return 0;

  let n = trimmedString.length - 1;
  let count = 0;
  while (n >= 0) {
    if (trimmedString[n] === " ") {
      break;
    }
    count++;
    n--;
  }
  return count;
}

function lengthOfLastWord(s) {
  let arr=s.trim().split(" ");
  return arr[arr.length - 1].length;
}

function lengthOfLastWord(s) {
  let words = s.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord("a")); // 1
console.log(lengthOfLastWord(" ")); // 0
console.log(lengthOfLastWord("")); // 0
