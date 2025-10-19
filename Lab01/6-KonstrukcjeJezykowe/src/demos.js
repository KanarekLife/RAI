"use strict";

// Demos of multiple JS language constructions

// 1. class + 12. private methods/accessors
class Counter {
    #count = 0; // private field (works in modern Node/browsers)

    constructor(start = 0) {
        this.#count = start;
    }

    increment = () => { // property with arrow function (stage-3 in some configs) but supported in modern engines
        this.#count += 1;
        return this.#count;
    }

    get value() {
        return this.#count;
    }

    #secret() {
        return 'secret-' + this.#count;
    }
}

// 2. arrow functions, 3. block-scoped variables, 4. default parameters
const makeGreeter = (greeting = 'Cześć') => {
    let prefix = greeting; // let => block scope
    return name => `${prefix}, ${name}`; // template literals (6)
};

// 5. destructuring assignment
const person = { name: 'Ala', age: 30, city: 'Warsaw' };
const { name: personName, ...rest } = person;

// 7. rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// 8. this behavior in nested function and arrow
class ThisDemo {
    constructor() {
        this.x = 42;
    }
    getXWithNested() {
        const self = this; // classic workaround
        function nested() {
            return self.x;
        }
        return nested();
    }
    getXWithArrow() {
        const nested = () => this.x; // arrow preserves this
        return nested();
    }
}

// 9. optional chaining operator ?.
const user = { profile: { email: 'a@a.com' } };
const email = user?.profile?.email;
const missing = user?.contact?.phone; // undefined, no throw

// 10. String.prototype.replaceAll (ES2021)
const text = 'a b a b';
const replaced = text.replaceAll('a', 'x');

// 11. numeric separators
const bigNumber = 1_000_000;

// Additional features that require polyfills in older environments
// Array.prototype.includes
const arr = [1, 2, 3];
const hasTwo = arr.includes(2);

// Array.prototype.flat
const nested = [1, [2, 3]];
const flat = nested.flat();

// Object.fromEntries
const entries = [['a', 1], ['b', 2]];
const objFrom = Object.fromEntries(entries);

// Promise.prototype.finally
const p = Promise.resolve(5).finally(() => { });

// globalThis
const gThis = globalThis;

// usage examples to avoid unused variable warnings
const c = new Counter(2);
const v1 = c.increment();
const greeter = makeGreeter('Hej');
const g = greeter('Jan');
const s = sum(1, 2, 3, 4);
const t = new ThisDemo();
const tx1 = t.getXWithNested();
const tx2 = t.getXWithArrow();

module.exports = {
    Counter,
    makeGreeter,
    personName,
    rest,
    sum,
    ThisDemo,
    email,
    missing,
    replaced,
    bigNumber,
    v1, g, s, tx1, tx2
};
