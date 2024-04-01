// task 1

const classes = ['first', 'second', 'third', 'fourth'];
let h1 = document.getElementsByTagName('h1')
console.log(h1);
console.log(typeof h1);
console.log(h1.length);
for (i = 0; i < h1.length; i++) {
    console.log(h1[i]); 
}

// task 2

let p1 = document.querySelector('#p1');
console.log(p1);
p1.style.backgroundColor = "gold";

// task 3

let p2 = document.querySelector('#p2');
console.log(p2);
p2.style.cssText = "background-color:gold; color: blue; font-size: 2rem;"

// task 4

let p3 = document.querySelector('#p3');
console.log(p3);
p3.classList.add('third');

// task 5

let p4 = document.querySelector('#p4');
console.log(p4);
p4.classList.add('fourth', 'border');

// task 6

let containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild);
}

// task 7

let containers1 = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild.textContent);
}

// task 8

let headers = document.querySelectorAll('.container header');
const classes = ['first', 'second', 'third', 'fourth'];
console.log(headers)
for (let i = 0; i < headers.length; i++) {
    switch (i) {
        case 0:
            break;
        case 1:
            headers[i].innerHTML = "<h2 class='title second'>Second Title</h2>";
            break;
        case 2:
            headers[i].innerHTML = "<h3 class='title third'>Third Title</h3>";
            break;
        case 3:
            const oldId = headers[i].id;
            const oldClass = headers[i].className;
            headers[i].outerHTML = `<h4 class="title fourth" id="${oldId}">Fourth Title</h4>`;
            break;
        default:
            break;
    }
    headers[i].classList.add(classes[i]);
}