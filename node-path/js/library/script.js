const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? 'read' : 'not read yet';
    this.info = function() {
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read}`
    };
}

function addBookToLibrary() {

}