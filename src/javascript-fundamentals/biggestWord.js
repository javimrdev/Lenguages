function biggestWord(phrase){
    const array = phrase.split(' ');
    let biggest = '';
    array.forEach(element => {
        if(element.length > biggest.length){
            biggest = element;
        }
    });

    return biggest;
}

console.log(biggestWord('cual es la palabra mas larga'));