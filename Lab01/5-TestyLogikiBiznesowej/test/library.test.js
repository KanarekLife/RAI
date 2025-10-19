"use strict";

const { expect } = require('chai');
const Book = require('../src/book');
const Library = require('../src/library');

describe('Library business logic', function () {
    let lib;
    let book1, book2, book3;

    beforeEach(function () {
        lib = new Library();
        book1 = new Book({ id: 'b1', author: 'Author One', title: 'Node Patterns', price: 20, publisher: 'PubA', keywords: ['node', 'patterns'] });
        book2 = new Book({ id: 'b2', author: 'Author Two', title: 'JavaScript: The Good Parts', price: 25, publisher: 'PubB', keywords: ['javascript', 'good'] });
        book3 = new Book({ id: 'b3', author: 'Author Three', title: 'Clean Code', price: 30, publisher: 'PubC', keywords: ['clean', 'code'] });
        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);
    });

    it('powinien pozwolić wypożyczyć i zwrócić książkę', function () {
        expect(lib.wypozycz('b1', 'Jan')).to.equal(true);
        expect(lib.kto_wypozyczyl('b1')).to.equal('Jan');
        expect(lib.zwroc('b1')).to.equal(true);
        expect(lib.kto_wypozyczyl('b1')).to.equal(null);
    });

    it('nie pozwala wypożyczyć nieistniejącej książki', function () {
        expect(() => lib.wypozycz('bx', 'Ewa')).to.throw(Error);
    });

    it('nie pozwala wypożyczyć już wypożyczonej książki', function () {
        lib.wypozycz('b2', 'Ola');
        expect(() => lib.wypozycz('b2', 'Kamil')).to.throw(Error);
    });

    it('nie pozwala zwrócić nie-wypożyczonej książki', function () {
        expect(() => lib.zwroc('b3')).to.throw(Error);
    });

    it('kto_wypozyczyl zwraca null gdy książka wolna', function () {
        expect(lib.kto_wypozyczyl('b3')).to.equal(null);
    });

    it('powinien wyszukiwać po słowach kluczowych / tytule / autorze', function () {
        let res = lib.szukajPoSlowach('node');
        expect(res).to.be.an('array').with.lengthOf(1);
        expect(res[0].id).to.equal('b1');

        res = lib.szukajPoSlowach(['clean', 'code']);
        expect(res).to.be.an('array').with.lengthOf(1);
        expect(res[0].id).to.equal('b3');

        res = lib.szukajPoSlowach('javascript');
        expect(res).to.be.an('array').with.lengthOf(1);
        expect(res[0].id).to.equal('b2');

        // wyszukiwanie po fragmencie tytułu
        res = lib.szukajPoSlowach('clean');
        expect(res[0].title.toLowerCase()).to.include('clean');
    });

    it('dodanie książki z istniejącym id zgłasza błąd', function () {
        const dup = new Book({ id: 'b1', author: 'X' });
        expect(() => lib.addBook(dup)).to.throw(Error);
    });

    it('addBook wymaga instancji Book', function () {
        expect(() => lib.addBook({ id: 'z' })).to.throw(TypeError);
    });

});
