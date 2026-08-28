function findsWordContaining(words, substring) {
    let result = [];

    for (let [index, word] of words.entries()) {
        if (word.includes(substring)) {
            result.push(index);
        }
    }

    return result;
}

function findsWordContaining(words, substring) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(substring)) {
            result.push(i);
        }
    }

    return result;
}

function findsWordContaining(words, substring) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j <= words[i].length - substring.length; j++) {
            if (words[i].substring(j, j + substring.length) === substring) {
                result.push(i);
                break;
            }
        }
    }

    return result;
}


console.log(findsWordContaining(['leet','code'], "e")); // [0, 1]
console.log(findsWordContaining(['hello','world'], "wo")); // [1]
console.log(findsWordContaining(['abc','def','ghi'], "x")); // []