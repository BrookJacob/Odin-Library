let myLibrary = [];

function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;

}

function addBookToLibrary(author, title, numberOfPages, read) {
    const newBook = new Book(author, title, numberOfPages, read);

    myLibrary.push(newBook);
}

addBookToLibrary("J.R.R Tolkien", "The Hobbit", "325", true);
addBookToLibrary("F. Scott Fitzgerald", "The Great Gatsby", "290", true);
addBookToLibrary("Fyodor Dostoevsky", "Crime and Punishment", "650", true);
addBookToLibrary("Julia Leigh", "The Hunter", "170", false);

function populateDOM(library) {
    const books = document.getElementsByClassName('books')[0];
    library.forEach(book => {
        const content = document.createElement('div');
        content.classList.add('content');

        const title = document.createElement('h3');
        title.classList.add('content-title');
        title.innerText = book.title;
        content.appendChild(title);

        const author = document.createElement('p');
        author.classList.add('content-author');
        author.innerText = book.author;
        content.appendChild(author);

        const numberOfPages = document.createElement('p');
        numberOfPages.classList.add('content-pages');
        numberOfPages.innerText = book.numberOfPages;
        content.appendChild(numberOfPages);

        if (book.read == true) {
            content.style.backgroundColor = "#78A1BB";
        } else {
            content.style.backgroundColor = "#EBF5EE";
        }

        books.appendChild(content);

    });
}

populateDOM(myLibrary);