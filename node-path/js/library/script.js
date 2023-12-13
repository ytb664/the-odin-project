const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? 'Read' : 'Not Read';
}

Book.prototype.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const container = document.querySelector('.container');
const dialog = document.querySelector('.dialog');

function displayBooksInLibrary() {

    myLibrary.forEach((el) => {
        const card = document.createElement('div');
        const ul = document.createElement('ul');

        card.classList.add('card')

        container.appendChild(card);
        card.appendChild(ul);

        for (let x in el) {

            if ((typeof el[x]) == "function") {
                continue;
            }

            const li = document.createElement('li');
            const label = document.createElement('label');
            const div = document.createElement('div');
            const btn = document.createElement('button');
            btn.classList.add('read-button')

            ul.appendChild(li);

            if (el[x] == 'Read' || el[x] == 'Not Read') {
                btn.textContent = el[x];

                li.appendChild(btn);
            } else {
                label.textContent = `${x}:`
                div.textContent = `${el[x]}`;

                if (x == 'title') {
                    let id = `${el[x]}`.toLowerCase().split(' ');
                    id = id.join('-');

                    card.id = `card-${id}`;
                }

                li.appendChild(label);
                li.appendChild(div);
            }
        }
    })
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
    }

    if (read.checked == true) {
        isRead = true;
    }

    const book = new Book(title, author, pages, isRead);

    addBookToLibrary(book);
    displayBooksInLibrary();
    dialog.close();
});

const readBtn = document.querySelectorAll('.read-button');

for (let el of readBtn) {


}