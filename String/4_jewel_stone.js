function jewelStone(jewels, stones) {
    let jewelSet = new Set(jewels);
    let count = 0;

    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
}

function jewelStone(jewels, stones) {
    let jewelSet = new Set();
    let count = 0;

    for (let jewel of jewels) {
        jewelSet.add(jewel);
    }
    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
}
console.log(jewelStone("aA", "aAAbbbb")); // 3
console.log(jewelStone("z", "ZZ")); // 0