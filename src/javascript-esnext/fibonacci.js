const fib = n => {
    let result = 0;
    if(n === 0 || n === 1) return n;

    for(let x = 0; x <= n; x++){
        result += x;
    }

    return result;
  };

  console.log('fib de 3', fib(3))
  console.log('fib de 10', fib(10))
  console.log('fib de 20', fib(20))