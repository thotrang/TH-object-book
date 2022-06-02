"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    get Title() {
        return this.title;
    }
    get Author() {
        return this.author;
    }
    get AlreadyRead() {
        return this.alreadyRead;
    }
    set Title(title) {
        this.title = title;
    }
    set Author(author) {
        this.author = author;
    }
    set AlreadyRead(alreadyRead) {
        this.alreadyRead = alreadyRead;
    }
}
exports.Book = Book;
//# sourceMappingURL=book.js.map