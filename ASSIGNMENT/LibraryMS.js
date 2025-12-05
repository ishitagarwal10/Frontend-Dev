"use strict";

class Book {
    constructor(title, author, ISBN, isIssued=false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if(!this.isIssued) this.isIssued = true;
    }

    returnBook() {
        if(this.isIssued) this.isIssued = false;
    }
}

const books = [
    new Book("Book A", "Author A", "001"),
    new Book("Book B", "Author B", "002", true),
    new Book("Book C", "Author C", "003")
];

let output = "Available Books:\n";
books.filter(b => !b.isIssued).forEach(b => output += `${b.title} (${b.ISBN})\n`);

// Issue a book by ISBN
let isbnToIssue = "003";
const bookToIssue = books.find(b => b.ISBN === isbnToIssue);
if(bookToIssue) bookToIssue.issueBook();
output += `\nBook Issued: ${bookToIssue.title} (${bookToIssue.ISBN})`;

document.getElementById("output").textContent = output;
