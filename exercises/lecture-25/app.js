
// task 1

const list = ['html', 'css', 'javascript', 'react.js'];
let ul = document.createElement('ul');
list.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
document.body.appendChild(ul);
console.dir(ul);

// task 2

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
const ol = document.createElement('ol');
listWithHref.forEach(item => {
    const key = Object.keys(item)[0];
    const value = item[key];

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = value;
    a.textContent = key;

    li.appendChild(a);
    ol.appendChild(li);
});

document.body.appendChild(ol);

// task 3

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
const table = document.createElement('table');
table.innerHTML = `<tr style="background-color: blue; color: azure;">
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>degree</th>
                  </tr>`;

students.forEach(student => {
    table.innerHTML += `<tr>
                            <td>${student.firstName}</td>
                            <td>${student.lastName}</td>
                            <td>${student.degree}</td>
                        </tr>`;
});

document.body.appendChild(table);