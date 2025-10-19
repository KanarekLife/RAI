"use strict";

// Demos of multiple JS language constructions

// 1. class + 12. private methods/accessors
var _user$profile, _user$contact;
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _count = /*#__PURE__*/new WeakMap();
var _Counter_brand = /*#__PURE__*/new WeakSet();
class Counter {
  // private field (works in modern Node/browsers)

  constructor() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _classPrivateMethodInitSpec(this, _Counter_brand);
    _classPrivateFieldInitSpec(this, _count, 0);
    _defineProperty(this, "increment", () => {
      // property with arrow function (stage-3 in some configs) but supported in modern engines
      _classPrivateFieldSet(_count, this, _classPrivateFieldGet(_count, this) + 1);
      return _classPrivateFieldGet(_count, this);
    });
    _classPrivateFieldSet(_count, this, start);
  }
  get value() {
    return _classPrivateFieldGet(_count, this);
  }
}

// 2. arrow functions, 3. block-scoped variables, 4. default parameters
function _secret() {
  return 'secret-' + _classPrivateFieldGet(_count, this);
}
var makeGreeter = function makeGreeter() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cześć';
  var prefix = greeting; // let => block scope
  return name => "".concat(prefix, ", ").concat(name); // template literals (6)
};

// 5. destructuring assignment
var person = {
  name: 'Ala',
  age: 30,
  city: 'Warsaw'
};
var {
    name: personName
  } = person,
  rest = _objectWithoutProperties(person, ["name"]);

// 7. rest parameters
function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce((a, b) => a + b, 0);
}

// 8. this behavior in nested function and arrow
class ThisDemo {
  constructor() {
    this.x = 42;
  }
  getXWithNested() {
    var self = this; // classic workaround
    function nested() {
      return self.x;
    }
    return nested();
  }
  getXWithArrow() {
    var nested = () => this.x; // arrow preserves this
    return nested();
  }
}

// 9. optional chaining operator ?.
var user = {
  profile: {
    email: 'a@a.com'
  }
};
var email = user === null || user === void 0 || (_user$profile = user.profile) === null || _user$profile === void 0 ? void 0 : _user$profile.email;
var missing = user === null || user === void 0 || (_user$contact = user.contact) === null || _user$contact === void 0 ? void 0 : _user$contact.phone; // undefined, no throw

// 10. String.prototype.replaceAll (ES2021)
var text = 'a b a b';
var replaced = text.replaceAll('a', 'x');

// 11. numeric separators
var bigNumber = 1000000;

// Additional features that require polyfills in older environments
// Array.prototype.includes
var arr = [1, 2, 3];
var hasTwo = arr.includes(2);

// Array.prototype.flat
var nested = [1, [2, 3]];
var flat = nested.flat();

// Object.fromEntries
var entries = [['a', 1], ['b', 2]];
var objFrom = Object.fromEntries(entries);

// Promise.prototype.finally
var p = Promise.resolve(5).finally(() => {});

// globalThis
var gThis = globalThis;

// usage examples to avoid unused variable warnings
var c = new Counter(2);
var v1 = c.increment();
var greeter = makeGreeter('Hej');
var g = greeter('Jan');
var s = sum(1, 2, 3, 4);
var t = new ThisDemo();
var tx1 = t.getXWithNested();
var tx2 = t.getXWithArrow();
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
  v1,
  g,
  s,
  tx1,
  tx2
};