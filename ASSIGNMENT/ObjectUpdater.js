"use strict";

let user = { name: "John", email: "john@mail.com", age: 21 };
const form = document.getElementById("userForm");
const output = document.getElementById("output");

function displayUser() {
    output.textContent = JSON.stringify(user, null, 2);
}

displayUser();

form.addEventListener("submit", function(e){
    e.preventDefault();
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);
    displayUser();
});
