function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
}

//¿Qué muestra por consola esta llamada?
f("JS rocks!", { b: "b" }); 
// 2, true, false, false

//¿Y con estos argumentos?
//f({ b: "b" });
// 3, true, true, true

//¿Y ahora?
//f("JS sucks!", null, 13);
// 3, true, false, true
