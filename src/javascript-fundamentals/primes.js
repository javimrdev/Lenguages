function showPrimes(from, to) {
    for (var i = from; i <= to; i++) {
        let isPrime = true;
        let msg = '';
        for (var x = 2; x < i && isPrime; x++) {
            isPrime = i % x === 0 ? false : true;
        }

        if (isPrime) { 
            console.log(`${i} es numero primo!`);  
        }else{
            console.log(`${i} no es numero primo!`); 
        }
    }
}

showPrimes(1, 10);