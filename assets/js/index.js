let myLibrary = [];

class Book {

    constructor(author, title, numberOfPages, read) {
        this.author = author;
        this.title = title;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }

    changeReadStatus() {
        if (this.read == true) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
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

    //Reset book DOM
    const content = Array.from(document.getElementsByClassName('content'));

    content.forEach(book => {
        book.remove();
    })

    //Add library array to DOM
    const books = document.getElementsByClassName('books')[0];

    library.forEach(book => {
        //Create Book Container
        const content = document.createElement('div');
        content.classList.add('content');
        content.dataset.index = myLibrary.indexOf(book);

        //Create Book Info Container
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');

        //Create Title for Book Info Container
        const title = document.createElement('h3');
        title.classList.add('content-title');
        title.innerText = book.title;
        bookInfo.appendChild(title);

        //Create Author for Book Info Container
        const author = document.createElement('p');
        author.classList.add('content-author');
        author.innerText = book.author;
        bookInfo.appendChild(author);

        //Create Number of Pages for Book Info Container
        const numberOfPages = document.createElement('p');
        numberOfPages.classList.add('content-pages');
        numberOfPages.innerText = book.numberOfPages;
        bookInfo.appendChild(numberOfPages);

        //Create Book Buttons Container for Book Container
        const bookButtons = document.createElement('div');
        bookButtons.classList.add('book-buttons');
        //Create Read/Not Read Button for Book Buttons Container
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.innerText = "Read";
        bookButtons.appendChild(readButton);
        //Create Remove Button for Book Buttons Container
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.innerText = "-";
        bookButtons.appendChild(removeButton);

        content.appendChild(bookInfo)
        content.appendChild(bookButtons);

        if (book.read == true) {
            readButton.classList.add('read');
            readButton.innerText = "Read";
        } else {
            readButton.classList.add('not-read');
            readButton.innerText = "Not Read";
        }

        books.appendChild(content);
    });

    const removeBook = Array.from(document.getElementsByClassName('remove-button'));
    removeBook.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log(e);
            const book = myLibrary[button.parentNode.parentNode.dataset.index];
            console.log(book);
            const index = myLibrary.indexOf(book);
            console.log(index);
            myLibrary.splice(index, 1);

            populateDOM(myLibrary);
            console.log(removeBook.length)
        });
    })
}


//element selectors for controlling the modal
const modal = document.getElementsByClassName('modal')[0];
const openModal = document.getElementsByClassName('add')[0];
const closeModal = document.getElementsByClassName('close')[0];

openModal.addEventListener('click', function() {
    modal.style.display = "block";
})

closeModal.addEventListener('click', function() {
    modal.style.display = "none";
})

window.addEventListener('click', function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


//Add Book To myLibrary
const addBook = document.getElementsByClassName('confirm')[0];

addBook.addEventListener('click', function() {
    const authorInput = document.getElementById('author').value;
    const titleInput = document.getElementById('title').value;
    const pagesInput = document.getElementById('pages').value;
    const readInput = document.querySelector('input[name="read"]:checked').value;
    addBookToLibrary(authorInput, titleInput, pagesInput, readInput);
    populateDOM(myLibrary)
    modal.style.display = "none";
})

populateDOM(myLibrary);

const readBook = Array.from(document.getElementsByClassName('read-button'));
readBook.forEach(button => {
    button.addEventListener('click', function() {
        const book = myLibrary[button.parentNode.parentNode.dataset.index];
        book.changeReadStatus();
        if (book.read == true) {
            button.classList.remove('not-read');
            button.classList.add('read');
            button.innerText = "Read";
        } else {
            button.classList.add('not-read');
            button.classList.remove('read');
            button.innerText = "Not Read";
        }
    });
});