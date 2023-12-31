// The library
let myLibrary = [];

// Book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? 'Read' : 'Not Read';
}

Book.prototype.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

// Add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const container = document.querySelector('.container');
const dialog = document.querySelector('.dialog');

// Display library in cards
function displayBooksInLibrary() {

    resetCard();

    myLibrary.forEach((el) => {
        const card = document.createElement('div');
        const ul = document.createElement('ul');

        card.classList.add('card')

        container.appendChild(card);
        card.appendChild(ul);

        for (let x in el) {

            if (typeof el[x] == "function" || x == 'id') {
                continue;
            }

            const li = document.createElement('li');
            const label = document.createElement('label');
            const div = document.createElement('div');
            const btn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            btn.classList.add('read-button')

            btn.addEventListener('click', () => {

                el.read == 'Read' ? el.read = 'Not Read' : el.read = 'Read';

                displayBooksInLibrary();
            })

            deleteBtn.classList.add('delete-button');
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.textContent = 'DELETE';

            deleteBtn.addEventListener('click', () => {

                const index = myLibrary.indexOf(el);
                myLibrary.splice(index,1);

                displayBooksInLibrary();
            })

            ul.appendChild(li);

            if (el[x] == 'Read' || el[x] == 'Not Read') {
                btn.textContent = el[x];

                card.appendChild(btn);
                card.appendChild(deleteBtn);
            } else {
                label.textContent = `${x}:`
                div.textContent = `${el[x]}`;

                if (x == 'title') {
                    let id = `${el[x]}`.toLowerCase().split(' ');
                    id = id.join('-');

                    el.id = `book-${id}`;
                    card.id = `card-${id}`;
                }

                li.appendChild(label);
                li.appendChild(div);
            }
        }
    })
}


function resetCard() {

    const card = document.querySelectorAll('.card');

    for (el of card) {
        el.remove();
    }
}

const btn = document.querySelector('.btn');

btn.addEventListener("click", () => {

    dialog.showModal();
});

const submit = document.querySelector('.submit.btn');

submit.addEventListener('click', () => {

    const input = document.querySelectorAll('input');
    const read = document.getElementById('read');
    let title;
    let author;
    let pages;
    let isRead = false;

    for (let el of input) {

        let id = el.id;
        let value = el.value;

        switch(id) {
            case 'title':
                title = value;
                break;
            case 'author':
                author = value;
                break;
            case 'pages':
                pages = value;
        }

        el.value = null;
    }

    if (read.checked == true) {
        isRead = true;
    }

    const book = new Book(title, author, pages, isRead);

    addBookToLibrary(book);
    displayBooksInLibrary();
    dialog.close();
});

