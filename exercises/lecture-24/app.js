// Масив кольорів складається з 3 елементів.
const colors = ["blue", "green", "white"];

// task 1
function iter(item) {
     console.log(item);
 }
colors.forEach(iter);

// task 2

function iterate(item, index) {
    console.log(`${item}has index${index}`)
}
colors.forEach(iterate);

function iterate(item, index, array) {
    console.log(item);
    if (index === array.length - 1) {
        console.log('The last iteration!');
    }
}

// task 3

const letters = ['a', 'b', 'c'];
function iterate(letter) {
    console.log(this === window);
}
letters.forEach(iterate);

// task 4

const Numbers = [22, 3, 4, 10];
Numbers.forEach(function(number) {
    if (number % 2 === 1) {
    allEven = false;
    }
});
console.log(allEven);

// task 5

const numbers = [22, 3, 4, 10];
allEven = numbers.every(function(number) {
    return number % 2 === 0;
    });
   console.log(allEven); 

// task 6

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(index); 

// task - 7

const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find((element) => element > 10);
console.log(found);

// task - 8

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); 

// task - 9

const Numbers2 = [1, 30, 4, 21, 100000];

Numbers2.sort(function(a, b) {
    return a - b;
});

console.log(Numbers2);