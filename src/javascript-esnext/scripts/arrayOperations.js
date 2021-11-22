const arr1 = ['primero', 'segundo', 'tercero', 'cuarto'];
const arr2 = ['primero', 'segundo', 'tercero', 'cuarto'];
const arr3 = ['primero', 'segundo', 'tercero', 'cuarto'];
const arr4 = ['primero', 'segundo', 'tercero', 'cuarto'];

const head = ([ firstElement, ...rest ]) => firstElement;

const tail = ([firstElement, ...rest]) => rest;

const init = arr => {
    const [firstElement, ...rest] = arr.reverse();
    return rest;
}

const last = arr => arr[arr.length - 1];


console.log(head(arr1));
console.log(tail(arr2));
console.log(init(arr3));
console.log(last(arr4));