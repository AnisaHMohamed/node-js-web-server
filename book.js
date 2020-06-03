class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  info() {
    console.log(`The Book "${this.title}" was written by ${this.author}`);
  }
}
module.exports = Book;
