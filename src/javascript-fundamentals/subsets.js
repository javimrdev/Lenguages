function subsets(word) {
    let array = [];
    const reducer = (previousValue, currentValue) => {
        array.push(currentValue + previousValue);
        return currentValue + previousValue ;
    }
    word.substring(1, word.length).split('').reduceRight(reducer, []);
    return array.reverse();
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]