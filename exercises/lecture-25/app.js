
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
    ];
    
    const table = document.createElement('table');
    
    // Додаємо рядок заголовків таблиці
    const headerRow = document.createElement('tr');
    headerRow.style.backgroundColor = 'blue';
    headerRow.style.color = 'azure';
    ['firstName', 'lastName', 'degree'].forEach(columnName => {
    const th = document.createElement('th');
    th.textContent = columnName;
    headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    // Додаємо дані про студентів до таблиці
    students.forEach(student => {
    const row = document.createElement('tr');
    ['firstName', 'lastName', 'degree'].forEach(columnName => {
    const td = document.createElement('td');
    td.textContent = student[columnName];
    row.appendChild(td);
    });
    table.appendChild(row);
    });
    
    document.body.appendChild(table);