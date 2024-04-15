// task 1

function waitForUserInput() {
    setTimeout(function() {
        const firstNameInput = document.querySelector('input[name="firstName"]');
        const lastNameInput = document.querySelector('input[name="lastName"]');

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (firstName === '' && lastName === '') {
            document.getElementById('waiting').textContent = "I'm miss You";
        } else {
            document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
        }
    }, 10000);
}

waitForUserInput();

// task 2

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;
xhr.onload = function() {
  const response = JSON.parse(xhr.responseText);
  let postsHTML = '';
  response.forEach(post => {
    postsHTML += template(post);
  });
  document.getElementById('demo').innerHTML = postsHTML;
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();