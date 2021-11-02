function zipObject(keys, values) {
    let obj = {};
    keys.forEach((element, index) => {
        obj[element] = values[index] === undefined ? null : values[index];
    });
    return obj;
  }
  
  // Ejemplo
  console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}