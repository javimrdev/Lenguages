function f(input) {
    return input === undefined ? "Unknown" : (input || '');
}

console.log('Texto:', f('hola'));
console.log('Null:', '\'' + f(null) + '\'');
console.log('Undefined:', f(undefined));