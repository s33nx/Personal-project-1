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
        const passwordValue = password ? password.value.trim() : ""; // Check if password exists
        const password2Value = password2 ? password2.value.trim() : ""; // Check if password2 exists

        let isValid = true; // Track overall validity

        // Check if it's a login form (no password fields)
        const isLoginForm = !password;

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

        // Only validate password fields if it's a signup form
        if (!isLoginForm) {
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

 // Hide loading screen when page is fully loaded
            window.addEventListener('load', function() {
                setTimeout(function() {
                    document.getElementById('loading-screen').style.opacity = '0';
                    document.body.classList.add('loaded');
                    setTimeout(function() {
                        document.getElementById('loading-screen').style.display = 'none';
                    }, 500);
                }, 1000); // Show loading screen for at least 1 second
            });
