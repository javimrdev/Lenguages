const dices = () => {
    let result = [null, null];

    const reset = () => {
        result = [null, null];
        console.log('Debes tirar primero');
    }

    const thrown = () => {
        const firstThrown = (Math.ceil((Math.random() * 10)) % 6) + 1;
        const secondThrown = (Math.ceil((Math.random() * 10)) % 6) + 1;
        result = [firstThrown, secondThrown];

        if (firstThrown === 6 && secondThrown === 6)
            console.log('Doble 6!! Tenes premio!!');
        else
            console.log(`${firstThrown} y ${secondThrown}, sigue intentandolo`);
    }

    return {
        reset: reset,
        thrown: thrown
    }
}