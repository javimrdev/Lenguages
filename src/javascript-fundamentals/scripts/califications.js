import { values } from "./values.js";

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function getCalification(val) {
    if (val === 10)
        return 'Matrícula de Honor';
    else if (val >= 9)
        return 'Sobresaliente';
    else if (val >= 7)
        return 'Notable';
    else if (val >= 6)
        return 'Bien';
    else if (val >= 5)
        return 'Suficiente'
    else if (val >= 4)
        return 'Insuficiente'
    else
        return 'Muy deficiente';
}

function printAverage(classResults) {
    const arr = values(classResults);
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    const media = arr.reduce(reducer, initialValue);
    return getCalification(media / arr.length);
}

console.log(printAverage(eso2o));