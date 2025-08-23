//Adding the js styles

const form = document.getElementById("form");
const username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkinput();
})

function checkinput(){
    //get the values from the inputs
    const usernameValue = username.value.trim();//Removes unnecessary space.
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ""){
        errorMessageFor(username, "Username cannot be blank");
    }
    else if (usernameValue.length < 6) {
        errorMessageFor(username, "Username must be at least 6 characters long");
    }
    else {
        successMessageFor(username);
    }
    
    // Add validation for other fields as needed
    //for email
    if (emailValue === ""){
        errorMessageFor(email, "email cannot be blank");
    }
    else {
        successMessageFor(email);
    }


    //for password
    if (passwordValue === ""){
        errorMessageFor(password, "password cannot be blank");
    }
    else if (passwordValue.length < 6){
        errorMessageFor(password, "Password must be at least 8 characters");
    }
    else {
        successMessageFor(password);
    }


    // Confirm Password
    if (password2Value === ""){
        errorMessageFor(password2, "Confirm password cannot be blank");
    }
    else if (password2Value !== passwordValue){
        errorMessageFor(password2, "Password mismatch");
    }
    else {
        successMessageFor(password2);
    }


    //Back to index
    if (usernameValue === successMessageFor() && email === successMessageFor() && password === successMessageFor() && password2 === successMessageFor() ) {
        document.index
    }
}

function errorMessageFor(input, message){
    const formControl = input.parentElement; //we are referencing .form-control in our html
    const small = formControl.querySelector("small");

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function successMessageFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
