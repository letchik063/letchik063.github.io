const alert = document.querySelector('.alert');

// task 1

let btn = document.querySelector('.btn-primary');
btn.addEventListener('click', () => {
    alert.classList.add('alert-primary');
    alert.textContent = "A simple primary alert—check it out!";
});

// task 2 

let btn1 = document.querySelector('.btn-secondary');
btn1.addEventListener('click', () => {
    alert.classList.add('alert-primary');
    alert.textContent = "A simple secondary alert—check it out!";
})

// task 3

let btn2 = document.querySelector('.btn-success');
btn2.addEventListener('mouseover', () => {
    alert.classList.add('alert-success');
    alert.textContent = "A simple success alert—check it out!";   
})
btn2.addEventListener('mouseout', () => {
    alert.classList.remove('alert-success');
    alert.textContent = "";
});

// task 4

let btn3 = document.querySelector('.btn-danger');
btn3.addEventListener('focus', () => {
    alert.classList.add('alert-danger');
    alert.textContent = "A simple danger alert—check it out!";   
})
btn3.addEventListener('focusout', () => {
    alert.classList.remove('alert-danger');
    alert.textContent = "";
});

// task 5

function toggleMode() {
    let btnDark = document.querySelector('.btn-dark');
    let btnLight = document.querySelector('.btn-light');

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {

        btnDark.style.display = 'none';
        btnLight.style.display = 'inline-block';
    } else {
        btnDark.style.display = 'inline-block';
        btnLight.style.display = 'none';
    }
}
document.querySelector('.btn-dark').addEventListener('click', toggleMode);
document.querySelector('.btn-light').addEventListener('click', toggleMode);

// task 6

let btnInfo = document.querySelector('.btn-info');

btnInfo.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = "A simple info alert—check it out!";
    }
});

// task 7

let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    let cardTitle = cards[i].querySelector('.card-title');
    if (cardTitle) {
        console.log(cardTitle.textContent);
    }
}

// task 8

{
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    let addToCartButton = cards[i].querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        let title = cards[i].querySelector('.card-title').textContent;
        console.log(title);
        });
    }
}