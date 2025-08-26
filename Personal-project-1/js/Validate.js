document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const username = document.getElementById("Username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInput();
    });

    function checkInput() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        let isValid = true; // Track overall validity

        if (usernameValue === "") {
            errorMessageFor(username, "Username cannot be blank");
            isValid = false;
        } else {
            successMessageFor(username);
        }

        if (emailValue === "") {
            errorMessageFor(email, "Email cannot be blank");
            isValid = false;
        } else {
            successMessageFor(email);
        }

        if (passwordValue === "") {
            errorMessageFor(password, "Password cannot be blank");
            isValid = false;
        } else {
            successMessageFor(password);
        }

        if (password2Value === "") {
            errorMessageFor(password2, "Confirm password cannot be blank");
            isValid = false;
        } else if (password2Value !== passwordValue) {
            errorMessageFor(password2, "Password mismatch");
            isValid = false;
        } else {
            successMessageFor(password2);
        }

        // Redirect only if all validations are successful
        if (isValid) {
            window.location.href = './Index.html'; // Redirect to the index page
        }
    }

    function errorMessageFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        small.innerText = message;
        formControl.className = "form-control error";
    }

    function successMessageFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
});
