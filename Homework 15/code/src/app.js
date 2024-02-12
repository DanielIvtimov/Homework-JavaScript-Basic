console.log("=== Library ===");
function Library(name, books, address) {
    this.name = !name ? "unnamed" : name;
    this.books = !books ? [] : books;
    this.address = !address ? "unnamed" : address;
    this.numberOfMembers = this.books.length * 15;
    this.printBooks = function () {
        console.log(`Books in the library: ${this.books}`);
    }
    this.addLibrary = function (book) {
        this.books.push(book);
    }
    this.removeLibrary = function (book) {
        this.books = this.books.filter(b => b !== book);
    }
    this.AddBook = function (book) {
        let newBook = Object.create(book);
        this.books.push(newBook);
    }
}

let books = ["Book 1", "Book 2", "Book 3"];
let library = new Library("Fetkin Library", books, "7 Septemvri");
library.printBooks();
library.addLibrary("Book 1");
library.printBooks();


console.log("=== Book ===");
function Book(title, genre) {
    this.title = !title ? "unnamed" : title;
    this.genre = !genre ? "unnamed" : genre;
    this.libraries = [];
    this.authors = [];
    this.addLibrary = function (library) {
        this.libraries.push(library);
    }
    this.removeLibrary = function (library) {
        this.libraries = this.libraries.filter(lib => lib !== library);
    }
}

let book1 = new Book("Lord of the rings", "Božin Pavlovski");
let library1 = { name: "Fetkin Library", location: "7 Septemvri" };
let library2 = { name: "Central Library", location: "8 Mart" };
book1.addLibrary(library1);
book1.addLibrary(library2);
book1.removeLibrary(library1);
console.log(book1.title);
console.log(book1.genre);



console.log("=== Author ===");
function Author(firstName, lastName, birthYear) {
    this.firstName = !firstName ? "unnamed" : firstName;
    this.lastName = !lastName ? "unnamed" : lastName;
    this.birthYear = !birthYear ? "unnamed" : birthYear;
    this.books = [];
    this.currentBook = null;
    
    this.startBook = function(book){
        if (this.currentBook){
            this.books.push(this.currentBook);
        }
        this.currentBook = book;
    }
}

let author = new Author("Božin", "Pavlovski", 1942);
let book = new Book("Lord of the rings", "Božin Pavlovski");
author.startBook(book);
console.log(author.firstName);
console.log(author.lastName);
console.log(author.birthYear);










