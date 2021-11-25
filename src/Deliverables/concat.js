const concat = (a, b) => {
    const arr = [...a, ...b];
    return arr;
}

const elements1 = [1, 2, 3, 4, 5]
const elements2 = [6, 7, 8, 9, 10];
const elements3 = [11, 12, 13, 14, 15];
const elements4 = [16, 17, 18, 19, 20];

console.log('Concat:', concat(elements1, elements2));

const multiConcat = (matriz) => {
    let finalArr = [];
    for (const arr of matriz) {
        finalArr = [...finalArr, ...arr];
    }
    return finalArr;
}

console.log('Multiconcat:', multiConcat([elements1, elements2, elements3, elements4]));