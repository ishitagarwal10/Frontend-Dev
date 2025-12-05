"use strict";

const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let valid = true;
    output.textContent = "";

    // Reset borders
    [name, email, phone, password].forEach(i => i.style.border = "");

    // Name: only alphabets
    if(!/^[A-Za-z]+$/.test(name.value)){
        valid = false;
        name.style.border = "1px solid red";
        output.textContent += "Invalid Name\n";
    }

    // Email
    if(!/^\S+@\S+\.\S+$/.test(email.value)){
        valid = false;
        email.style.border = "1px solid red";
        output.textContent += "Invalid Email\n";
    }

    // Phone
    if(!/^\d{10}$/.test(phone.value)){
        valid = false;
        phone.style.border = "1px solid red";
        output.textContent += "Invalid Phone\n";
    }

    // Password
    if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{1,}$/.test(password.value)){
        valid = false;
        password.style.border = "1px solid red";
        output.textContent += "Invalid Password\n";
    }

    if(valid) output.textContent = "Form submitted successfully!";
});
