
// task 1

function calculate(numbers) {
    let sum = 0;
    for (const number of numbers) {
      sum = sum + number;
    }
    return sum;
   }
   calculate([1, 2, 4]); // => 7
   
   // sum() - це функція, яка описує операцію додавання. 
   function sum(n1, n2) {
      return n1 + n2;
   }
   
   // multiply() - це функція, яка описує операцію множення.
   
   function multiply(n1, n2) {
      return n1 * n2;
   }
   
function calculate(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
        result = operation(result, number);
    }
    return result;
}
console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));

// task 2

const student_names = ["Wick", "Malcolm", "Smith"];
const sn = student_names.map(
    (value, index, student_names) => (
        "name :" + value , "index  " + index, "array: [" + student_names
    )
);
console.log(sn);

// task 3

const students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
let maxDegree = 600;
let result = students_information.map(function(student) {
    let percentage = (student.degree / maxDegree) * 100;
    return { name: student.name, degree: student.degree, percentage: percentage };
});

console.log(result);

// task 4

const arr =
[1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const res = arr.reduce((current) => (res.push(current)));
console.log(res);

// task 5

Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase(); 
    }
};
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc();