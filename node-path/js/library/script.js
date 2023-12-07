const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? 'read' : 'not read yet';
}

Book.prototype.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const container = document.querySelector('.container');

function displayBooksInLibrary() {
    myLibrary.forEach((el) => {
        const card = document.createElement('div');
        const ul = document.createElement('ul');

        container.appendChild(card);
        card.appendChild(ul);

        for (let x in el) {
            const li = document.createElement('li');
            li.textContent = `${x} : ${el[x]}`;

            ul.appendChild(li);
        }
    })
}