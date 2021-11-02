const clone = (source) => {
    let obj = {};
    const props = Object.getOwnPropertyNames(source);
    for (const key of Object.getOwnPropertyNames(source)) {
        obj[key] = source[key];
    }
    Object.setPrototypeOf(obj, Object.getPrototypeOf(source));
    return obj;
}

var objectTest = {
    nombre: 'Javi',
    edad: 26,
    hobbies: ['motos', 'basket', 'futbol', 'naturaleza'],
    cumpleaños: function() { this.edad++ }
}
console.log(clone(objectTest));

function merge(source, target) {
    let clonedObj = clone(target);
    for (const [key, value] of Object.entries(source)) {
        clonedObj[key] = value;
    }
    return clonedObj;
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b));