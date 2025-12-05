"use strict";

const form = document.getElementById("ticketForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let seats = Number(document.getElementById("seats").value);

    let valid = true;
    let msg = "";

    if(!/^[A-Za-z]+$/.test(name)) { valid = false; msg += "Invalid Name\n"; }
    if(!/^\S+@\S+\.\S+$/.test(email)) { valid = false; msg += "Invalid Email\n"; }
    if(!(seats >=1 && seats <=10)) { valid = false; msg += "Seats must be 1-10\n"; }

    if(valid){
        const ticket = {name, email, seats};
        output.textContent = "Ticket booked:\n" + JSON.stringify(ticket, null, 2);
    } else {
        output.textContent = msg;
    }
});
