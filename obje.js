const me = {
    name: "Furkan",
    age: 25,
    hobbies: ["music", "tennis", "coding"],
    sayHello: function () {
        console.log(`hello `);
    },
};

console.log(me.sayHello());

function Person(name, age, address, hobbies) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.hobbies = hobbies;
    this.isAdult = age >= 18;
    this.merhabaDe = function () {
        console.log("Hello");
    };
}

const me2 = new Person("Furkan", 25, "Adana", "coding");
console.log(me2);

const person4 = new Person();

const aaaaa = {
    name: "Furkan",
    age: 25,
};

const newobj = { ...aaaaa };
console.log(newobj);
const ali = aaaaa;
console.log(aaaaa, ali);
ali.age = 32;
console.log(aaaaa, ali);