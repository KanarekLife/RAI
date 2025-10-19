"use strict";

// Demos of multiple JS language constructions

// 1. class + 12. private methods/accessors
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/es.weak-set.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/esnext.string.replace-all.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _user$profile, _user$contact;
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _count = /*#__PURE__*/new WeakMap();
var _Counter_brand = /*#__PURE__*/new WeakSet();
var Counter = /*#__PURE__*/function () {
  // private field (works in modern Node/browsers)

  function Counter() {
    var _this = this;
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _classCallCheck(this, Counter);
    _classPrivateMethodInitSpec(this, _Counter_brand);
    _classPrivateFieldInitSpec(this, _count, 0);
    _defineProperty(this, "increment", function () {
      // property with arrow function (stage-3 in some configs) but supported in modern engines
      _classPrivateFieldSet(_count, _this, _classPrivateFieldGet(_count, _this) + 1);
      return _classPrivateFieldGet(_count, _this);
    });
    _classPrivateFieldSet(_count, this, start);
  }
  return _createClass(Counter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(_count, this);
    }
  }]);
}(); // 2. arrow functions, 3. block-scoped variables, 4. default parameters
function _secret() {
  return 'secret-' + _classPrivateFieldGet(_count, this);
}
var makeGreeter = function makeGreeter() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cześć';
  var prefix = greeting; // let => block scope
  return function (name) {
    return "".concat(prefix, ", ").concat(name);
  }; // template literals (6)
};

// 5. destructuring assignment
var person = {
  name: 'Ala',
  age: 30,
  city: 'Warsaw'
};
var personName = person.name,
  rest = _objectWithoutProperties(person, ["name"]);

// 7. rest parameters
function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (a, b) {
    return a + b;
  }, 0);
}

// 8. this behavior in nested function and arrow
var ThisDemo = /*#__PURE__*/function () {
  function ThisDemo() {
    _classCallCheck(this, ThisDemo);
    this.x = 42;
  }
  return _createClass(ThisDemo, [{
    key: "getXWithNested",
    value: function getXWithNested() {
      var self = this; // classic workaround
      function nested() {
        return self.x;
      }
      return nested();
    }
  }, {
    key: "getXWithArrow",
    value: function getXWithArrow() {
      var _this2 = this;
      var nested = function nested() {
        return _this2.x;
      }; // arrow preserves this
      return nested();
    }
  }]);
}(); // 9. optional chaining operator ?.
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
var p = Promise.resolve(5).finally(function () {});

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
  Counter: Counter,
  makeGreeter: makeGreeter,
  personName: personName,
  rest: rest,
  sum: sum,
  ThisDemo: ThisDemo,
  email: email,
  missing: missing,
  replaced: replaced,
  bigNumber: bigNumber,
  v1: v1,
  g: g,
  s: s,
  tx1: tx1,
  tx2: tx2
};