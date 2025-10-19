"use strict";

const Book = require('./book');

class Library {
    constructor() {
        // books: array of Book instances
        this.books = [];
        // rentals: map bookId -> borrower (string) or null if free
        this.rentals = new Map();
    }

    addBook(book) {
        if (!(book instanceof Book)) throw new TypeError('book must be an instance of Book');
        if (this.books.some(b => b.id === book.id)) throw new Error('book with same id already exists');
        this.books.push(book);
        this.rentals.set(book.id, null);
    }

    wypozycz(bookId, borrower) {
        if (!this.rentals.has(bookId)) throw new Error('book not found');
        if (!borrower) throw new Error('borrower is required');
        const current = this.rentals.get(bookId);
        if (current) throw new Error('book already borrowed');
        this.rentals.set(bookId, borrower);
        return true;
    }

    zwroc(bookId) {
        if (!this.rentals.has(bookId)) throw new Error('book not found');
        const current = this.rentals.get(bookId);
        if (!current) throw new Error('book is not borrowed');
        this.rentals.set(bookId, null);
        return true;
    }

    kto_wypozyczyl(bookId) {
        if (!this.rentals.has(bookId)) throw new Error('book not found');
        return this.rentals.get(bookId);
    }

    // search by keywords (array or single), returns array of matching books
    szukajPoSlowach(terms) {
        const tArray = Array.isArray(terms) ? terms : [terms];
        const lowered = tArray.map(t => String(t).toLowerCase());
        return this.books.filter(book =>
            // match if any keyword in book.keywords matches any search term
            book.keywords.some(k => lowered.includes(k)) ||
            // or title/author contains any of terms
            lowered.some(term => (book.title || '').toLowerCase().includes(term) || (book.author || '').toLowerCase().includes(term))
        );
    }

    // utility: find book by id
    findBook(bookId) {
        return this.books.find(b => b.id === bookId) || null;
    }
}

module.exports = Library;
