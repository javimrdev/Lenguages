function showPrimes(from, to) {
    for (var i = from; i <= to; i++) {
        let itIs;

        itIs = isPrime(i);

        if (itIs) {
            console.log(`${i} es numero primo!`);
        } else {
            console.log(`${i} no es numero primo!`);
        }
    }
}

function isPrime(num) {
    let itIs = true;

    for (var x = 2; x < num && itIs; x++) {
        itIs = num % x === 0 ? false : true;
    }

    return itIs;
}

showPrimes(1, 102);