function isomorphicString(str1, str2) {
  if (str1.length != str2.length) return;
  const str1ToStr2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!str1ToStr2[str1[i]]) {
      str1ToStr2[str1[i]] = str2[i];
    } else if (str1ToStr2[str1[i]] != str2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isomorphicString("egg","add"))
console.log(isomorphicString("foo","bar"))