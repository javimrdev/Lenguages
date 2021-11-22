const last = (arr) => {
    const [lastEl, ...rest] = arr.reverse();
    return lastEl;
}

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(last(elements));