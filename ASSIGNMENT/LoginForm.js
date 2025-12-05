"use strict";

const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let msg = "";

    if(username.length < 5) msg += "Username must be at least 5 characters\n";
    if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password))
        msg += "Password must be at least 8 chars, include number, upper/lowercase, special char\n";

    output.textContent = msg || "Login successful!";
});
