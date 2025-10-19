"use strict";

// Konstruktor Pojazd wykorzystujący pola publiczne i metody w prototypie
function Pojazd(id, max_predkosc) {
    this.id = id;
    this.max_predkosc = max_predkosc;
    this.predkosc = 0;
    this.running = false;
}

Pojazd.prototype.status = function () {
    return {
        id: this.id,
        max_predkosc: this.max_predkosc,
        predkosc: this.predkosc,
        running: this.running
    };
};

Pojazd.prototype.start = function (predkosc) {
    if (typeof predkosc !== 'number') throw new TypeError('predkosc must be a number');
    if (predkosc < 0) throw new RangeError('predkosc must be >= 0');
    this.predkosc = Math.min(predkosc, this.max_predkosc);
    this.running = true;
    return this.predkosc;
};

Pojazd.prototype.stop = function () {
    this.predkosc = 0;
    this.running = false;
};

module.exports = Pojazd;
