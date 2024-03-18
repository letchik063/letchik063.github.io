// Task 1
const person = {
    name: "Alex",  
    age: 30
}
console.log(person.name);
console.log(person.age);

// Task 2
const person1 = {
    name: {
        firstName: "Alex",
        lastName: "Glushkov"
    },
    age: 30,
 // Task 3  
    bio() {
        return `${this.name.firstName} ${this.name.lastName} ${this.age}`;
    },
// Task 4
    introduceSelf() {
        return `Hi! I'm ${this.name.firstName}`;
    }
}
console.log(person1.name.firstName);
console.log(person1.name.lastName);
console.log(person1.bio());
console.log(person1.introduceSelf())

// Task 5
function createPerson(name) {
    this.name = name;
    this.introduceSelf = function() {
    return `Hi! I'm ${this.name}`};
}
const Person1 = new createPerson("Mario");
const Person2 = new createPerson("Tomas");
console.log(Person1.introduceSelf());
console.log(Person2.introduceSelf());


// Task 6
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
    return `Hi! I'm ${this.name}`};
}
const Person3 = new Person("Mary");
const Person4 = new Person("Tom");
console.log(Person3.introduceSelf());
console.log(Person4.introduceSelf());
console.log(Person3.hasOwnProperty('prop'));

// false - 'prop' has not been defined

// Task - 7

const DirtyMartini = {
    english_please () {
        return text1
    },
excuse_my_french () {
        return text2
    }
}
let text1 = `ingredients:
6 fluid ounces gin
1 dash dry vermouth (0.0351951ml) 
1 fluid ounce brine from olive jar
4 stuffed green olives`;

let text2 =`ingrédients:
170.4786 ml de gin,
1 trait de vermouth sec(0.0351951ml)
28.4131 ml de saumure du pot d'olive
4 olives vertes farcies`;

console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());