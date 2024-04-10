const ul = document.querySelector('ul');

const input = document.getElementById('item');

function addTask(text) {
    const newTask = document.createElement('li');
    newTask.textContent = text;
    ul.appendChild(newTask);
}

 
function add() {
    const newItemText = input.value;
    itemsArray.push(newItemText);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(newItemText);
    input.value = '';
}


function del() {
    localStorage.removeItem("items");
    itemsArray = [];
    ul.innerHTML = '';
}

let itemsArray;
if (localStorage.getItem("items")) {
    itemsArray = JSON.parse(localStorage.getItem("items"));
} else {
    itemsArray = [];
}

itemsArray.forEach(item => {
    addTask(item);
});