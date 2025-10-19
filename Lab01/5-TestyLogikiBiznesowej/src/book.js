"use strict";

class Book {
    constructor({ id, author, title, price = 0, publisher = '', keywords = [] } = {}) {
        if (!id) throw new Error('id is required');
        this.id = id;
        this.author = author || '';
        this.title = title || '';
        this.price = price;
        this.publisher = publisher;
        // store keywords as lowercase for easier search
        this.keywords = Array.isArray(keywords) ? keywords.map(k => String(k).toLowerCase()) : [];
    }
}

module.exports = Book;
