import storageAvailable from './storageAvailable.js';

export default class Library {
  // class library consist of list of books
  books = [];

  constructor() {
    this.books = [];
    // Load intial book stored
    const localBooksData = localStorage.getItem('books');
    if (localBooksData) {
      this.books = JSON.parse(localBooksData);
    }
  }

  // check if a book exists
  bookExists(book) {
    for (let i = 0; i < this.books.length; i += 1) {
      if (
        this.books[i].title === book.title
        && this.books[i].author === book.author
      ) {
        return true;
      }
    }
    return false;
  }

  // add a new book
  addBook(book) {
    if (!this.bookExists(book)) {
      this.books.push(book);
      this.updateLocalStorage();
      return book;
    }
    // eslint-disable-next-line no-alert
    alert('The Book and Author exist');
    return null;
  }

  // Remove a book from the list of lists
  removeBook(book) {
    for (let i = 0; i < this.books.length; i += 1) {
      if (
        this.books[i].title === book.title
        && this.books[i].author === book.author
      ) {
        this.books.splice(i, 1);
        this.updateLocalStorage();
        return;
      }
    }
  }

  // update locastorage
  updateLocalStorage() {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
}
