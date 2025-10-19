"use strict";

const { expect } = require('chai');
const Pojazd = require('../src/pojazd_prototype');

describe('Pojazd (prototype - publiczne pola)', function () {
    it('powinien udostępniać status z poprawnymi polami', function () {
        const p = new Pojazd('P1', 130);
        const s = p.status();
        expect(s.id).to.equal('P1');
        expect(s.max_predkosc).to.equal(130);
        expect(s.predkosc).to.equal(0);
        expect(s.running).to.equal(false);
    });

    it('pola obiektu są publicznie dostępne do odczytu i zapisu', function () {
        const p = new Pojazd('P2', 140);
        expect(p).to.have.property('id', 'P2');
        p.id = 'P2-mod';
        expect(p.id).to.equal('P2-mod');
        p.predkosc = 50;
        expect(p.predkosc).to.equal(50);
    });

    it('dostępność prototype/constructor/_prototype', function () {
        const p = new Pojazd('P3', 110);
        // constructor
        expect(p.constructor).to.equal(Pojazd);
        // prototype is accessible via constructor.prototype
        expect(Pojazd.prototype).to.have.property('start');
        // _prototype does not exist by default
        expect(p).to.not.have.property('_prototype');
    });

    it('dodanie funkcji do prototypu po stworzeniu obiektu wpływa na instancję', function () {
        const p = new Pojazd('P4', 160);
        // teraz dodajemy funkcję do prototypu
        Pojazd.prototype.honk = function () { return 'beep'; };
        expect(typeof p.honk).to.equal('function');
        expect(p.honk()).to.equal('beep');
        // cleanup: usuńmy honk z prototypu
        delete Pojazd.prototype.honk;
    });

    it('metody start/stop/status działają poprawnie', function () {
        const p = new Pojazd('P5', 120);
        p.start(80);
        expect(p.predkosc).to.equal(80);
        p.stop();
        expect(p.predkosc).to.equal(0);
    });

});
