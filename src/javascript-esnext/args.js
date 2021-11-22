function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
}

// ¿Qué muestra por consola esta llamada?
// f("JS rocks!", { b: "b" }); 
// 2
// "JS rocks!", true
// { b: "b" }, true
// 100, false

// ¿Y con estos argumentos?
// f({ b: "b" });
// 1
// { b: "b" }, true,
// undefined, true
// 100, false

// ¿Y ahora?
// f("JS sucks!", null, 13);
// peta porque no puede hacer destructuring de un null
