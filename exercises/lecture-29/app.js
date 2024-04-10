
class AuthException extends Error {
    constructor(code, message) {
        this.message;
    }

    toString() {
        return this.message;
    }
}

let isAuth = (auth) => auth ?? false;

let dialogBoxId = document.getElementById("dialogBox");

function showDialog(e) {
    dialogBoxId.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
        }
    });

    dialogBoxId.showModal();
}

function closeDialog() {
    dialogBoxId.close();
}




let checkAuth = document.querySelector("check-auth");

checkAuth.addEventListener('click', () => {
    try {
        if (!isAuth) {
        throw new AuthException(
            "FORBIDDEN",
           "You don't have access to this page"
        );
    }  else  window.open("/succed.html");
    
    } catch (e) {
        console.error(e);
        console.error(e.toString());
        e.preventDefault();
        dialogBoxId.querySelector('.message').textContent = e;
          
    }
})