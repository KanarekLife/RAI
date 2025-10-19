"use strict";

const { expect } = require('chai');
const Pojazd = require('../src/pojazd_closure');

describe('Pojazd (closure - prywatne pola)', function () {
    it('powinien udostępniać status z poprawnymi polami', function () {
        const p = new Pojazd('A1', 120);
        const s = p.status();
        expect(s).to.have.property('id', 'A1');
        expect(s).to.have.property('max_predkosc', 120);
        expect(s).to.have.property('predkosc', 0);
        expect(s).to.have.property('running', false);
    });

    it('start powinien ustawić prędkość i zwrócić aktualną prędkość', function () {
        const p = new Pojazd('B2', 150);
        const v = p.start(80);
        expect(v).to.equal(80);
        const s = p.status();
        expect(s.predkosc).to.equal(80);
        expect(s.running).to.equal(true);
    });

    it('start powinien ograniczyć prędkość do max_predkosc', function () {
        const p = new Pojazd('C3', 100);
        const v = p.start(200);
        expect(v).to.equal(100);
    });

    it('stop powinien wyzerować prędkość i ustawić running=false', function () {
        const p = new Pojazd('D4', 90);
        p.start(50);
        p.stop();
        const s = p.status();
        expect(s.predkosc).to.equal(0);
        expect(s.running).to.equal(false);
    });

    it('nie można odczytać prywatnych pól bezpośrednio', function () {
        const p = new Pojazd('E5', 70);
        // pola prywatne _id, _predkosc nie istnieją jako właściwości obiektu
        expect(p).to.not.have.property('_id');
        expect(p).to.not.have.property('_predkosc');
        expect(p).to.not.have.property('_max_predkosc');
        // próba nadpisania nie doda prywatnego pola do zamknięcia
        p._id = 'X';
        expect(p._id).to.equal('X'); // ale to jest nowa publiczna właściwość obiektu, nie wpływa na status()
        const s = p.status();
        expect(s.id).to.equal('E5');
    });

});
