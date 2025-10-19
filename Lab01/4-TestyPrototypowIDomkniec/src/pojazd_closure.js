"use strict";

// Konstruktor Pojazd wykorzystujący domknięcie do emulacji prywatnych pól
function Pojazd(id, max_predkosc) {
    // prywatne zmienne
    var _id = id;
    var _max_predkosc = max_predkosc;
    var _predkosc = 0;
    var _running = false;

    // publiczny interfejs (metody zamknięte w obiekcie)
    this.status = function () {
        return {
            id: _id,
            max_predkosc: _max_predkosc,
            predkosc: _predkosc,
            running: _running
        };
    };

    this.start = function (predkosc) {
        if (typeof predkosc !== 'number') throw new TypeError('predkosc must be a number');
        if (predkosc < 0) throw new RangeError('predkosc must be >= 0');
        _predkosc = Math.min(predkosc, _max_predkosc);
        _running = true;
        return _predkosc;
    };

    this.stop = function () {
        _predkosc = 0;
        _running = false;
    };
}

module.exports = Pojazd;
