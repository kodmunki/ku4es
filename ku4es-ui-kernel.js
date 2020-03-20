'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * @class Assert
 * @summary Encapsulates common assertions providing a clear API.
 */
class Assert {
  /**
   * @summary Returns true if and only if value is null.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */
  static isNull(value) {
    return value === null;
  }
  /**
   * @summary Returns true if and only if value is an empty string, empty array, or empty object literal.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isEmpty(value) {
    return Assert.isString(value) && value === '' || Assert.isArray(value) && value.length < 1 || Assert.isObjectLiteral(value) && Object.keys(value).length < 1;
  }
  /**
   * @summary Returns true if and only if value is undefined.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * @summary Returns true if and only if value is zero.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isZero(value) {
    return value === 0;
  }
  /**
   * @summary Returns true if value is null or undefined.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static exists(value) {
    return !(Assert.isUndefined(value) || Assert.isNull(value));
  }
  /**
   * @summary Returns true if value not {exists} or {isEmpty}.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isNullOrEmpty(value) {
    return !Assert.exists(value) || Assert.isEmpty(value);
  }
  /**
   * @summary Returns true if and only if value is an Array.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isArray(value) {
    return Array.isArray(value);
  }
  /**
   * @summary Returns true if and only if value is a boolean.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isBool(value) {
    return typeof value === 'boolean';
  }
  /**
   * @summary Returns true if and only if value is `true`.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isTrue(value) {
    return Assert.isBool(value) && value === true;
  }
  /**
   * @summary Returns true if and only if value is `false`.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isFalse(value) {
    return Assert.isBool(value) && value === false;
  }
  /**
   * @summary Returns true if and only if value is a Date.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isDate(value) {
    return value instanceof Date;
  }
  /**
   * @summary Returns true if and only if value is a number.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isNumber(value) {
    return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
  }
  /**
   * @summary Returns true if value is a number and is even.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isEven(value) {
    return this.isNumber(value) && !this.isZero(value) && value % 2 === 0;
  }
  /**
   * @summary Returns true if value is a number and is odd.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isOdd(value) {
    return this.isNumber(value) && !this.isZero(value) && !this.isEven(value);
  }
  /**
   * @summary Returns true if and only if value is a string.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }
  /**
   * @summary Returns true if and only if value is a function.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isFunction(value) {
    return value instanceof Function;
  }
  /**
   * @summary Returns true if and only if value is an Object.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isObject(value) {
    return Assert.exists(value) && typeof value === 'object' && !(Assert.isBool(value) || Assert.isNumber(value) || Assert.isDate(value) || Assert.isArray(value) || Assert.isString(value) || Assert.isFunction(value));
  }
  /**
   * @summary Returns true if and only if value is an object literal.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isObjectLiteral(value) {
    return Assert.isObject(value) && value.constructor === {}.constructor;
  }
  /**
   * @summary Returns true if value is not {isFalsy}.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isTruthy(value) {
    return !Assert.isFalsy(value);
  }
  /**
   * @summary Returns true if value {isZero}, {isFalse}, {isNullOrEmpty}, or {isNaN}.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */


  static isFalsy(value) {
    return Assert.isZero(value) || Assert.isFalse(value) || Assert.isNullOrEmpty(value) || isNaN(value);
  }

}
/**
 * @function round
 * @summary Rounds a value to the nearest tens exponent.
 * @global
 * @param {number} value
 * @param {number} toNearest
 * @returns {number}
 */


function round(value, toNearest = 0) {
  const operand = Math.pow(10, -toNearest);
  return Math.round(parseFloat((value * operand).toFixed(Math.abs(toNearest)))) / operand;
}

class Coord {
  constructor(x = 0, y = 0) {
    if (!(Assert.isNumber(x) && Assert.isNumber(y))) {
      throw new Error('Coord requires numeric x and y values');
    }

    this.x = x;
    this.y = y;
  }

  abs() {
    return new Coord(Math.abs(this.x), Math.abs(this.y));
  }

  add(other) {
    return new Coord(this.x + other.x, this.y + other.y);
  }

  divide(other) {
    return new Coord(this.x / other.x, this.y / other.y);
  }

  equals(other) {
    return this.x === other.x && this.y === other.y;
  }

  multiply(other) {
    return new Coord(this.x * other.x, this.y * other.y);
  }

  subtract(other) {
    return new Coord(this.x - other.x, this.y - other.y);
  }

  round(decimal = 0) {
    return new Coord(round(this.x, decimal), round(this.y, decimal));
  }

  half() {
    return this.divide(new Coord(2, 2));
  }

  value() {
    return {
      x: this.x,
      y: this.y
    };
  }

  toString() {
    return `(${this.x},${this.y})`;
  }

  static canParse(candidate) {
    if (Assert.isArray(candidate)) {
      return !(isNaN(candidate[0]) || isNaN(candidate[1]));
    }

    if (Assert.isObjectLiteral(candidate) && 'x' in candidate && 'y' in candidate) {
      return !(isNaN(candidate.x) || isNaN(candidate.y));
    }

    return candidate instanceof Coord;
  }

  static parse(obj) {
    if (!Assert.exists(obj)) {
      return null;
    }

    if (obj instanceof Coord) {
      return obj;
    }

    if (Assert.isArray(obj)) {
      return new Coord(obj[0], obj[1]);
    }

    if (Assert.isObjectLiteral(obj) && Assert.exists(obj.x) && Assert.exists(obj.y)) {
      return new Coord(obj.x, obj.y);
    }

    return null;
  }

  static tryParse(obj) {
    return Coord.canParse(obj) ? Coord.parse(obj) : null;
  }

}

class Vector extends Coord {
  constructor(x = 0, y = 0) {
    super(x, y);
    this.lengthSquared = Math.pow(x, 2) + Math.pow(y, 2);
    this.magnitude = Math.sqrt(this.lengthSquared);
    this.unitNormalX = x === 0 && y === 0 ? 0 : x / this.magnitude;
    this.unitNormalY = x === 0 && y === 0 ? 0 : y / this.magnitude;
  }

  isZero() {
    return this.x === 0 && this.y === 0;
  }

  equals(other) {
    return other instanceof Vector && this.x === other.x && this.y === other.y;
  }

  normal() {
    return new Vector(this.unitNormalX, this.unitNormalY);
  }

  invert() {
    return new Vector(-this.x, -this.y);
  }

  norm() {
    return new Vector(Math.abs(this.x), Math.abs(this.y));
  }

  perpendicular() {
    return new Vector(-this.y, this.x);
  }

  add(other) {
    return other instanceof Vector ? new Vector(this.x + other.x, this.y + other.y) : null;
  }

  dot(other) {
    return other instanceof Vector ? this.x * other.x + this.y * other.y : null;
  }

  perpendicularAtTo(other) {
    if (!(other instanceof Vector)) {
      return null;
    }

    const p = other.add(this.projectionOfOnto(other).invert());
    return new Vector(p.x, p.y);
  }

  projectionOfOnto(other) {
    if (!(other instanceof Vector)) {
      return null;
    }

    const p = other.normal().scale(this.dot(other.normal()));
    return new Vector(p.x, p.y);
  }

  scale(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  unitNormalDot(other) {
    if (!(other instanceof Vector)) {
      return null;
    }

    return this.normal().x * other.normal().x + this.normal().y * other.normal().y;
  }

  reflect(incident) {
    if (!(incident instanceof Vector)) {
      return null;
    }

    if (incident.isZero()) {
      return this;
    }

    const inorm = incident.normal();
    return this.add(inorm.scale(2 * inorm.dot(this)).invert());
  }

  round(decimal = 0) {
    return new Vector(round(this.x, decimal), round(this.y, decimal));
  }

}

class Point extends Coord {
  constructor(x, y) {
    super(x, y);
  }

  isAbove(other) {
    return this.y < other.y;
  }

  isBelow(other) {
    return this.y > other.y;
  }

  isLeftOf(other) {
    return this.x < other.x;
  }

  isRightOf(other) {
    return this.x > other.x;
  }

  distanceFrom(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  distanceTo(other) {
    return this.distanceFrom(other).invert();
  }

  static canParse(candidate) {
    return candidate instanceof Point || Coord.canParse(candidate);
  }

  static parse(obj) {
    if (obj instanceof Point) {
      return obj;
    }

    const coord = Coord.parse(obj);
    return new Point(coord.x, coord.y);
  }

  static tryParse(candidate) {
    return Point.canParse(candidate) ? Point.parse(candidate) : null;
  }

}
/**
 * @summary Returns a "unique" string.
 * @function uid
 * @global
 * @returns {string}
 */


function uid() {
  return Math.random().toString().substr(2);
}

var _evt = {};
/**
 * @class Event
 * @summary Event abstraction
 * @static
 */

var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, null, [{
    key: "mute",

    /**
     * @summary Hard stops any further activity from passed event.
     * @memberOf Event
     * @public
     * @static
     * @param {Event} event - Event to hard stop.
     * @returns {boolean}
     */
    value: function mute(event) {
      if (!Assert.exists(event)) {
        return false;
      }

      if (Assert.isFunction(event.preventDefault)) {
        event.preventDefault();
      }

      if (Assert.isFunction(event.stopPropagation)) {
        event.stopPropagation();
      }

      if (Assert.isFunction(event.stopImmediatePropagation)) {
        event.stopImmediatePropagation();
      }

      if (Assert.exists(event.cancelBubble)) {
        event.cancelBubble = true;
      }

      return false;
    }
    /**
     * @summary Adds an event lister to target element and returns an id for future
     * event listener removal and memory leak prevention.
     * @memberOf Event
     * @public
     * @static
     * @param {Element} element - Element to add event listener to.
     * @param {string} event - event to subscribe to.
     * @param {function} callback - method to call when click event fires.
     * @param {{}} options - UIEvent options
     * @returns {*}
     */

  }, {
    key: "add",
    value: function add(element, event, callback, options) {
      var id = uid();
      _evt[id] = {
        element: element,
        event: event,
        callback: callback,
        options: options
      };
      element.addEventListener(event, callback, options);
      return id;
    }
    /**
     * @summary Removes event listener subscribed with `Event.add`
     * @memberOf Event
     * @public
     * @static
     * @param {string} id - Id returned from `Event.add`
     */

  }, {
    key: "remove",
    value: function remove(id) {
      var _evt$id = _evt[id],
          element = _evt$id.element,
          event = _evt$id.event,
          callback = _evt$id.callback,
          options = _evt$id.options;
      element.removeEventListener(event, callback, options);
    }
  }]);

  return Event;
}();

/**
 * @class Document
 * @summary Document abstraction
 * @static
 */

var Document = /*#__PURE__*/function () {
  function Document() {
    _classCallCheck(this, Document);
  }

  _createClass(Document, null, [{
    key: "preventScroll",

    /**
     * @summary Prevents document from being scrollable
     * @memberOf Document
     * @public
     * @static
     */
    value: function preventScroll() {
      Document.position = document.body.style.position;
      Document.top = document.body.style.top;
      Document.left = document.body.style.left;
      Document.width = document.body.style.width;
      Document.height = document.body.style.height;
      Document.documentWidth = document.documentElement.style.width;
      Document.documentHeight = document.documentElement.style.height;
      Document.overflowY = document.documentElement.style.overflowY;
      Document.scrollX = window.scrollX || window.pageXOffset;
      Document.scrollY = window.scrollY || window.pageYOffset;
      var scrollbarWidth = Document.scrollbarWidth;
      document.body.style.position = 'fixed';
      document.body.style.left = "-".concat(Document.scrollX, "px");
      document.body.style.top = "-".concat(Document.scrollY, "px");
      document.body.style.width = "calc(100vw - ".concat(scrollbarWidth, "px)");
      document.body.style.height = 'calc(100% + 1px)';
      document.documentElement.style.width = '100wh';
      document.documentElement.style.height = '100vh';
      document.documentElement.style.overflowY = scrollbarWidth && 'scroll';
    }
    /**
     * @summary Resumes scrollability for document after being
     * rendered unscrollable.
     * @memberOf Document
     * @public
     * @static
     */

  }, {
    key: "resumeScroll",
    value: function resumeScroll() {
      document.body.style.position = Document.position;
      document.body.style.top = Document.top;
      document.body.style.left = Document.left;
      document.body.style.width = Document.width;
      document.body.style.height = Document.height;
      document.documentElement.style.width = Document.documentWidth;
      document.documentElement.style.height = Document.documentHeight;
      document.documentElement.style.overflowY = Document.overflowY;
      window.scrollTo(Document.scrollX, Document.scrollY);
      Document.position = null;
      Document.top = null;
      Document.left = null;
      Document.width = null;
      Document.height = null;
      Document.documentWidth = null;
      Document.documentHeight = null;
      Document.overflowY = null;
      Document.scrollX = null;
      Document.scrollY = null;
    }
    /**
     * @summary Subscribes to click event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Document
     * @public
     * @static
     * @param {function} callback - method to call when click event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */

  }, {
    key: "onClick",
    value: function onClick(callback, options) {
      return Event.add(document, 'click', callback, options);
    }
    /**
     * @summary Subscribes to keyup event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Document
     * @public
     * @static
     * @param {function} callback - method to call when keyup event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(callback, options) {
      return Event.add(document, 'keyup', callback, options);
    }
    /**
     * @summary Removes event listener subscribed with `Document.[method]`
     * @memberOf Document
     * @public
     * @static
     * @param {string} id - Id returned from `Document.[method]`
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(id) {
      Event.remove(id);
    }
  }, {
    key: "scrollbarWidth",
    get: function get() {
      return window.innerWidth - document.documentElement.clientWidth;
    }
    /**
     * @summary Returns true if document scrolling is prevented
     * @memberOf Document
     * @public
     * @static
     * @returns {boolean}
     */

  }, {
    key: "isScrollPrevented",
    get: function get() {
      return Assert.exists(Document.scrollY);
    }
  }]);

  return Document;
}();

/**
 * @class Window
 * @summary Window abstraction
 * @static
 */

var Window = /*#__PURE__*/function () {
  function Window() {
    _classCallCheck(this, Window);
  }

  _createClass(Window, null, [{
    key: "onClick",

    /**
     * @summary Subscribes to click event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Window
     * @public
     * @static
     * @param {function} callback - method to call when click event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */
    value: function onClick(callback, options) {
      return Event.add(window, 'click', callback, options);
    }
    /**
     * @summary Subscribes to keyup event and returns pointer to the subscription
     * to be used to unsubscribe to the event and prevent memory leakage.
     * @memberOf Window
     * @public
     * @static
     * @param {function} callback - method to call when keyup event fires.
     * @param {{}} options - UIEvent options
     * @returns {string} EventId - Id of event subscription. Use to remove event.
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(callback, options) {
      return Event.add(window, 'keyup', callback, options);
    }
    /**
     * @summary Removes event listener subscribed with `Window.[method]`
     * @memberOf Window
     * @public
     * @static
     * @param {string} id - Id returned from `Window.[method]`
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(id) {
      Event.remove(id);
    }
  }]);

  return Window;
}();

var Key = /*#__PURE__*/function () {
  /**
   * @constructor Key
   * @summary Keyboard Key abstraction
   * @param {String} MDNKeyIdentifier - The MDN Key Identifier
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   * @param {String} [MSKeyIdentifier] - The Microsoft Key Identifier for those
   * keys that have browser specific implementations for MS
   * https://msdn.microsoft.com/en-us/ie/gg305568(v=vs.94)
   */
  function Key(MDNKeyIdentifier, MSKeyIdentifier) {
    _classCallCheck(this, Key);

    this.key = MDNKeyIdentifier;
    this.msKey = MSKeyIdentifier || MDNKeyIdentifier;
  }
  /**
   * @summary Returns true if this Key equals other.
   * @memberOf Key
   * @public
   * @instance
   * @param {Key} other
   * @returns {boolean}
   */


  _createClass(Key, [{
    key: "equals",
    value: function equals(other) {
      return other instanceof Key && (this.key === other.key || this.msKey === other.msKey);
    }
    /**
     * @summary Returns true if this Key did fire event.
     * @memberOf Key
     * @public
     * @instance
     * @param {KeyboardEvent} event
     * @returns {boolean}
     */

  }, {
    key: "didFire",
    value: function didFire(event) {
      var code = event.code,
          key = event.key;
      var value = key === 'Dead' ? code : key;
      return event && (this.equals(new Key(value)) || this.key === 'ANY');
    }
    /**
     * @summary Returns a Key action keypress.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }], [{
    key: "press",
    get: function get() {
      return 'keypress';
    }
    /**
     * @summary Returns a Key action keydown.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "down",
    get: function get() {
      return 'keydown';
    }
    /**
     * @summary Returns a Key action keyup.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "up",
    get: function get() {
      return 'keyup';
    }
    /**
     * @summary Returns a Key that will equal any other Key.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "any",
    get: function get() {
      return new Key('ANY');
    }
    /**
     * @summary Returns Key, Esacpe.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "esc",
    get: function get() {
      return new Key('Escape', 'Esc');
    }
    /**
     * @summary Returns Key, Enter.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "enter",
    get: function get() {
      return new Key('Enter');
    }
    /**
     * @summary Returns Key, Space.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "space",
    get: function get() {
      return new Key(' ', 'Spacebar');
    }
    /**
     * @summary Returns Key, Tab.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "tab",
    get: function get() {
      return new Key('Tab');
    }
    /**
     * @summary Returns Key, Left Arrow.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "left",
    get: function get() {
      return new Key('ArrowLeft', 'Left');
    }
    /**
     * @summary Returns Key, Right Arrow.
     * @memberOf Key
     * @public
     * @static
     * @returns {Key}
     */

  }, {
    key: "right",
    get: function get() {
      return new Key('ArrowRight', 'Right');
    }
  }]);

  return Key;
}();

var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);
  }

  _createClass(Keyboard, null, [{
    key: "on",

    /**
     * @summary Subscribes to keyboard event
     * @memberOf Document
     * @public
     * @static
     * @param event
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */
    value: function on(event, key, method) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var listener = function listener(e) {
        return key.didFire(e) ? method(e, key) : null;
      };

      window.addEventListener(event, listener, capture);
      return {
        unsubscribe: function unsubscribe() {
          window.removeEventListener(event, listener);
        }
      };
    }
    /**
     * @summary Subscribes to keyboard keypress event
     * @memberOf Document
     * @public
     * @static
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */

  }, {
    key: "onKeyPress",
    value: function onKeyPress(key, method) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Keyboard.on(Key.press, key, method, capture);
    }
    /**
     * @summary Subscribes to keyboard keydown event
     * @memberOf Document
     * @public
     * @static
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(key, method) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Keyboard.on(Key.down, key, method, capture);
    }
    /**
     * @summary Subscribes to keyboard keyup event
     * @memberOf Document
     * @public
     * @static
     * @param {Key} key
     * @param {function} method
     * @param {boolean} capture
     * @returns {{unsubscribe: unsubscribe}}
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(key, method) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Keyboard.on(Key.up, key, method, capture);
    }
  }]);

  return Keyboard;
}();

var Swipe = /*#__PURE__*/function () {
  /**
   * @constructor Swipe
   * @summary Encapsulates touch event management.
   * @param element {Element} - Element that will listen for swipe events.
   * @param tolerance {number} - The distance in pixels a swipe must travel to trigger a swipe event.
   */
  function Swipe(element) {
    var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Swipe);

    this.didTouchStart = this.didTouchStart.bind(this);
    this.didTouchEnd = this.didTouchEnd.bind(this);
    this.didTouchMove = this.didTouchMove.bind(this);
    element.addEventListener('touchstart', this.didTouchStart, {
      capture: false,
      passive: true
    });
    element.addEventListener('touchend', this.didTouchEnd, {
      capture: false,
      passive: true
    });
    element.addEventListener('touchmove', this.didTouchMove, {
      capture: false,
      passive: true
    });
    this.element = element;
    this.tolerance = tolerance;
  }
  /**
   * @summary Subscribes method to be called when user swipes left.
   * @memberOf Swipe
   * @public
   * @instance
   * @param {Function} method
   * @returns {this}
   */


  _createClass(Swipe, [{
    key: "onLeft",
    value: function onLeft(method) {
      this.didSwipeLeft = method;
      return this;
    }
    /**
     * @summary Subscribes method to be called when user swipes right.
     * @memberOf Swipe
     * @public
     * @instance
     * @param {Function} method
     * @returns {this}
     */

  }, {
    key: "onRight",
    value: function onRight(method) {
      this.didSwipeRight = method;
      return this;
    }
    /**
     * @summary Subscribes method to be called when user swipes.
     * @memberOf Swipe
     * @public
     * @instance
     * @param {Function} method
     * @returns {this}
     */

  }, {
    key: "onMove",
    value: function onMove(method) {
      this.didMove = method;
      return this;
    }
    /**
     * @summary Clean up all potential memory leaks.
     * @memberOf Swipe
     * @public
     * @instance
     * @returns {this}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var element = this.element;
      element.removeEventListener('touchstart', this.didTouchStart, false);
      element.removeEventListener('touchend', this.didTouchEnd, false);
      element.removeEventListener('touchmove', this.didTouchMove, false);
      return this;
    }
  }, {
    key: "didTouchStart",
    value: function didTouchStart(_ref) {
      var _ref$touches = _slicedToArray(_ref.touches, 1),
          touch = _ref$touches[0];

      this.touchStartPoint = new Point(touch.pageX, touch.pageY);
    }
  }, {
    key: "didTouchEnd",
    value: function didTouchEnd(e) {
      var _e$changedTouches = _slicedToArray(e.changedTouches, 1),
          touch = _e$changedTouches[0];

      var touchStartPoint = this.touchStartPoint;
      var touchEndPoint = new Point(touch.pageX, touch.pageY);

      if (touchEndPoint.isLeftOf(touchStartPoint) && Math.abs(touchEndPoint.distanceFrom(touchStartPoint).x) > this.tolerance) {
        this.didSwipeLeft(e);
      }

      if (touchEndPoint.isRightOf(touchStartPoint) && Math.abs(touchEndPoint.distanceFrom(touchStartPoint).x) > this.tolerance) {
        this.didSwipeRight(e);
      }
    }
  }, {
    key: "didTouchMove",
    value: function didTouchMove(e) {
      var _e$touches = _slicedToArray(e.touches, 1),
          touch = _e$touches[0];

      var touchStartPoint = this.touchStartPoint;
      var touchEndPoint = new Point(touch.pageX, touch.pageY);
      this.didMove({
        distance: touchEndPoint.distanceFrom(touchStartPoint),
        up: touchEndPoint.isAbove(touchStartPoint),
        down: touchEndPoint.isBelow(touchStartPoint),
        left: touchEndPoint.isLeftOf(touchStartPoint),
        right: touchEndPoint.isRightOf(touchStartPoint)
      });
    }
  }]);

  return Swipe;
}();

/**
 * @summary Base64 encodes a string.
 * @param {string} string - string to encode
 * @returns {string}
 */

function encodeBase64(string) {
  if (!Assert.isString(string)) {
    throw new Error('Cannot encode non-string values.');
  }

  return window.btoa(string);
}
/**
 * @summary Decodes Base64 encoded string.
 * @param {string} string - string to decode.
 * @returns {string}
 */


function decodeBase64(string) {
  if (!Assert.isString(string)) {
    throw new Error('Cannot encode non-string values.');
  }

  return window.atob(string);
}
/**
 * @summary UTF8 encodes a string.
 * @param {string} string - string to encode
 * @returns {string}
 */


function encodeUtf8(string) {
  if (!Assert.isString(string)) {
    throw new Error('Cannot encode non-string values.');
  }

  return decodeURIComponent(encodeURIComponent(string));
}
/**
 * @summary Decodes UTF8 encoded string.
 * @param {string} string - string to decode.
 * @returns {string}
 */


function decodeUtf8(string) {
  if (!Assert.isString(string)) {
    throw new Error('Cannot decode non-string values.');
  }

  return decodeURIComponent(encodeURIComponent(string));
}

exports.Document = Document;
exports.Event = Event;
exports.Key = Key;
exports.Keyboard = Keyboard;
exports.Swipe = Swipe;
exports.Window = Window;
exports.decodeBase64 = decodeBase64;
exports.decodeUtf8 = decodeUtf8;
exports.encodeBase64 = encodeBase64;
exports.encodeUtf8 = encodeUtf8;
