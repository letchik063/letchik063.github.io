const form = document.getElementById("registrationForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const {username, email, password} = form.elements;
    const errorMessages = document.getElementById("errorMessages");

    errorMessages.innerHTML = "";

    if (!username.value.trim()) {
        displayError("Ім’я користувача не може бути пустим");
        return;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Невірний формат електронної адреси");
        return;
    }

    if (!containsUpperCase(password) || !containsLowerCase(password) || !containsNumber(password) || !containsSpecialChar(password)) {
        displayError("Пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.");
        return;
    }
    form.submit();

});
form.addEventListener("submit", () => {
    form.reset();
});

function displayError(message) {
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = `<div>${message}</div>`;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}

function containsLowerCase(str) {
    return /[a-z]/.test(str);
}

function containsNumber(str) {
    return /\d/.test(str);
}

function containsSpecialChar(str) {
    return /[^\w\s]/.test(str);
}