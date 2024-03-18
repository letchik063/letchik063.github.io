// Task 1
let str1 = 'I\'m a string!'; // рядки однакової довжини 13
let str2 = "I'm a string!";
let length = str1.length === str2.length; // true
let loose = str1 == str2; // true
let strict = str1 === str2; // true

console.log(str1.length);
console.log(str2.length);

// Task 2 

let string5 = 'Hello World';
console.log(string5[0])
console.log(string5.charAt(0));

// Task 3

let str3 = "Hello Javascript";
console.log(str3[6])
console.log(str3.indexOf("J"));

// Task 4

console.log(str3[str3.length - 1]);
console.log(str3.charAt(str3.length - 1));

// Task 5

function lastChar(str3) {
    console.log(str3[str3.length - 1]);
    console.log(str3.charAt(str3.length - 1));
    let en = str3.length - 1;
    console.log(str3[en]);
} 
lastChar(str3);

// Task 6

let a = "When candles are out,";
let b = "all cats are grey.";
let cc = a.concat(b); 
console.log(cc);

// Task 7

let fact = "Fifteen is the same as";
let a7 = 5;
let b7 = 10;
a7 = a7 + b7;
console.log(fact + " " + a7)

// Task 8

let firstName = "Tom";
let lastName = "Cat";
function getFullName(firstName, lastName) {
    console.log(firstName + "  " + lastName);
}   
getFullName(firstName, lastName);

// Task 9

function greeting(getFullName) {
     return ("Hello, " + getFullName(firstName, lastName) + " !");
} 
greeting(getFullName);

// Task 10

function greeting() {
    "<div>" + 
        "<h1>Hello, Tom Cat!</h1>" + 
    "</div>";
}

// Task 11

let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
console.log(string1.trim());  // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"


const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber); // => '555-123'
phoneNumber1 = `'555-123\\n '`; 
console.log(phoneNumber1);// => '555-123 \n'

// Task 12

let sentence = "Always look on the bright side of life";
console.log(sentence.includes("look up")); // false
console.log(sentence.includes('look on')); // true
console.log(sentence.includes("look on", 8));  // true


// Task 13

let sentence13 = "Always look on the bright side of life";
console.log(sentence13.indexOf("l")); // 1
console.log(sentence13.indexOf("l"[fromIndex = 2])); // -1
console.log(sentence13.indexOf("L")); // -1

// Task 14

let sentence14 = "Always look on the bright side of life";
console.log(sentence14.slice(6, sentence14.length));
console.log(sentence14.slice(0, 6));// Always
console.log(sentence14.slice(7, 11));  // look

// Task 15
let usernameRegex = /^[a-z0-9_-]{8,16}$/;
let username1 = "user1234";
let username2 = "user_name-1234";
let username3 = "user";
console.log(usernameRegex.test(username1)); // true
console.log(usernameRegex.test(username2)); // true
console.log(usernameRegex.test(username3)); // false

// Task 16
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
let email1 = "user@example.com";
let email2 = "invalid_email.com";
console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false

// Task 17
let sentence17 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateText (letter){
    if(letter.length > 50){
          return sentence17.substring(0, 50) + "..."
    }
}
console.log(truncateText(sentence17));

function truncateTextSubstr(text) {
    if (text.length > 50) {
        return text.substr(0, 50) + '...';
    }
}
console.log(truncateTextSubstr(sentence17));
