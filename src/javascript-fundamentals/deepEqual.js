var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
    let equal = true;
    for (const key of Object.getOwnPropertyNames(a)) {
        equal = b.hasOwnProperty(key) ? equal : false;
    }

    return equal;
}

console.log(isEqual(user, clonedUser)); // true

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };

function isDeepEqual(a, b) {
    let equal = true;
    for (const key of Object.getOwnPropertyNames(a)) {
        equal = typeof a[key] === 'object'
            ? isDeepEqual(a[key], b[key]) && equal
            : b.hasOwnProperty(key) && b[key] === a[key] ? equal : false;
    }
    return equal;
}

console.log(isDeepEqual(user, clonedUser)); // true