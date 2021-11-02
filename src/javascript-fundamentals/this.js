var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); // 'Jimenez'
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // 'Perez'
console.log(surnameFunction.call(person)); // 'Gonzalez'

//Todo depende del ambito en el que se ejecute, si lo hace ejecutandolo desde el interior de Wife, desde person, o desde el ambito general, cogera un surname u otro.