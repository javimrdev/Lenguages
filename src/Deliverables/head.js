const head = (arr) => {
    const [firstEl, ...rest] = arr;
    return firstEl;
}

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(head(elements));