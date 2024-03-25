// task 1
const fruits = 'apple banana cantaloupe blueberries grapefruit';
const fruitsArray = fruits.split(' ');
console.log(fruitsArray);

// task 2

for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

// task 3

let i = 0;
while (i < fruitsArray.length) {
    console.log(fruitsArray[i]);
    i++;
}

// task 4

i = 0;
do {
    console.log(fruitsArray[i]);
    i++;
}while(i<fruitsArray.length);

// task 5

for (const frut of fruitsArray) {
    console.log(frut);
}

// task 6

const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

// task 7

const names = ['Batman'];
names.push('Joker')
console.log(names)

// task 8 

const names2 = ['Batman'];
names2.unshift('Joker')
console.log(names2)

// task 9 

names3 = ['Batman', 'Joker', 'Bane'];
names3.unshift('Catwoman')
console.log(names3)

// task 10

names4 = ['Batman', 'Joker', 'Bane'];
names4 = ['Catwoman', ...names4];
console.log(names4);

// task 11

names5 = ['Batman', 'Joker', 'Bane'];
names5.splice(1, 0, 'Catwoman');
console.log(names5);

// task 12

const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names6.splice(1, 2)
console.log(names6)

// task 13

const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names7.splice(1, 2, 'Alfred');
console.log(names7);

// task 14

const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names8.includes('Alfred')) {
    names8.push('Alfred');
}
console.log(names8);

// task 15

const names9 = ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred'];
for (let i = 0; i < names9.length; i++) {
    if (names9[i] === 'Alfred') {
        names9.splice(i, 1);
        i--;
    }
}
console.log(names9); 