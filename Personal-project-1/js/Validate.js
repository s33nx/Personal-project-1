// Adding the js styles

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const username = document.getElementById("Username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkinput();
    });

    function checkinput() {
        // Get the values from the inputs
        const usernameValue = username.value.trim(); // Removes unnecessary space.
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (usernameValue === "") {
            errorMessageFor(username, "Username cannot be blank");
        } else if (usernameValue.length < 6) {
            errorMessageFor(username, "Username must be at least 6 characters long");
        } else {
            successMessageFor(username);
        }

        // Add validation for other fields as needed
        // For email
        if (emailValue === "") {
            errorMessageFor(email, "Email cannot be blank");
        } else {
            successMessageFor(email);
        }

        // For password
        if (passwordValue === "") {
            errorMessageFor(password, "Password cannot be blank");
        } else if (passwordValue.length < 6) {
            errorMessageFor(password, "Password must be at least 6 characters");
        } else {
            successMessageFor(password);
        }

        // Confirm Password
        if (password2Value === "") {
            errorMessageFor(password2, "Confirm password cannot be blank");
        } else if (password2Value !== passwordValue) {
            errorMessageFor(password2, "Password mismatch");
        } else {
            successMessageFor(password2);
        }

        // Redirect to index if all validations are successful
        if (usernameValue && emailValue && passwordValue && password2Value) {
            window.location.href = './Index.html'; // Redirect to the index page
        }
    }

    function errorMessageFor(input, message) {
        const formControl = input.parentElement; // We are referencing .form-control in our HTML
        const small = formControl.querySelector("small");

        // Add error message inside small
        small.innerText = message;

        // Add error class
        formControl.className = "form-control error";
    }

    function successMessageFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
});
