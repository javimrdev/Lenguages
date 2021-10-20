function Person(name) {
    this.name = name;
}

Person.prototype.walk = function () {
    console.log("I'm walking");
};

var john = new Person("John");

const values = (obj) => {
    let entriesValue = [];

    for (const [key, value] of Object.entries(obj)) {
        entriesValue.push(value);
    }

    return entriesValue;
}

console.log(values(john));
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]
