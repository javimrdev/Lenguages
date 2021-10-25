function f() {
    console.log(a);
    console.log(g());

    var a = "good job!";
    function g() {
        return a;
    }
    console.log(a);
}

f();
///////// equivalent /////////
/* Imprime undefined, undefined y 'good job' porque en las dos primeras impresiones de 'a' aun no esta declarada*/
var a;

function f() {
    var a;
    a = 'good job';
    function g() {
        return a;
    }
}

f()

////////////////////////////

var a = 1;

(function () {
    console.log(a);
    var a = 2;
    b = 4;
    var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);

///////// equivalent /////////
/* imprime undefined, 1, 4 y undefined. Primero undefined porque 'a'
dentro de la funcion esta declarada despues del console.log y 
el segundo console log de 'a' seria 1 que es el valor global,
'b' 4 porque ya se declara en la function pero como esta declarada
de manera global, el valor se asigna de forma global. Y 'c' es undefined
porque aplica el closure dentro de la funcion
 */
var a = 1, b;

(function () {
    var a, c;
    a = 2;
    b = 4;
    c = 3;
})();

////////////////////////////

f();
var a = 1;

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a);
console.log(b);
console.log(c);

///////// equivalent /////////
/* imprime 1, 1, 4 y undefined, porque 'c' esta dentro de la funcion y aplica el closure */
f();
var a = 1, b;

function f() {
  b = 4;
  var c = 3;
}