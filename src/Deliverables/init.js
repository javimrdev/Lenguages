const init = (arr) => {
    const [lastEl, ...rest] = arr.reverse();
    return rest;
}; 

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(init(elements));