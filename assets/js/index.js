let myLibrary = [];

function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(author, title, numberOfPages, read) {
    const newBook = Object.create(Book.prototype);
    newBook.prototype.author = author;
    newBook.prototype.title = title;
    newBook.prototype.numberOfPages = numberOfPages;
    newBook.prototype.read = read;

    myLibrary.push(newBook);
}

addBookToLibrary("J.R.R Tolkien", "The Hobbit", "325", true);
addBookToLibrary("F. Scott Fitzgerald", "The Great Gatsby", "290", true);
addBookToLibrary("Fyodor Dostoevsky", "Crime and Punishment", "650", true);
addBookToLibrary("Julia Leigh", "The Hunter", "170", false);