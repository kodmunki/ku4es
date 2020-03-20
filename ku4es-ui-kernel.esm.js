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
    return (
      (Assert.isString(value) && value === '') ||
      (Assert.isArray(value) && value.length < 1) ||
      (Assert.isObjectLiteral(value) && Object.keys(value).length < 1 )
    );
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
    return  Assert.exists(value) &&
            typeof value === 'object' &&
            !(Assert.isBool(value) ||
              Assert.isNumber(value) ||
              Assert.isDate(value) ||
              Assert.isArray(value) ||
              Assert.isString(value) ||
              Assert.isFunction(value));
  }

  /**
   * @summary Returns true if and only if value is an object literal.
   * @memberOf Assert
   * @static
   * @param {*} value - value to test
   * @returns {boolean}
   */
  static isObjectLiteral(value) {
    return  Assert.isObject(value) &&
            value.constructor === ({}).constructor;
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
    if(!(Assert.isNumber(x) && Assert.isNumber(y))) {
      throw new Error('Coord requires numeric x and y values');
    }
    this.x = x;
    this.y = y;
  }

  abs(){
    return new Coord(Math.abs(this.x), Math.abs(this.y));
  }

  add(other) {
    return new Coord(this.x + other.x, this.y + other.y);
  }

  divide(other) {
    return new Coord(this.x / other.x, this.y / other.y);
  }

  equals(other) {
    return (this.x === other.x) && (this.y === other.y);
  }

  multiply(other) {
    return new Coord(this.x * other.x, this.y * other.y);
  }

  subtract(other) {
    return new Coord(this.x - other.x, this.y - other.y);
  }

  round(decimal = 0){
    return new Coord(round(this.x, decimal), round(this.y, decimal));
  }

  half(){ return this.divide(new Coord(2, 2)); }

  value() { return { x: this.x, y: this.y }; }

  toString() { return `(${this.x},${this.y})`; }

  static canParse(candidate) {
    if (Assert.isArray(candidate)) { return !(isNaN(candidate[0]) || isNaN(candidate[1])); }
    if (Assert.isObjectLiteral(candidate) && 'x' in candidate && 'y' in candidate) {
      return !(isNaN(candidate.x) || isNaN(candidate.y));
    }
    return candidate instanceof Coord;
  }

  static parse(obj) {
    if (!Assert.exists(obj)) { return null; }
    if (obj instanceof Coord) { return obj; }
    if (Assert.isArray(obj)) { return new Coord(obj[0], obj[1]); }
    if (Assert.isObjectLiteral(obj) &&
        Assert.exists(obj.x) &&
        Assert.exists(obj.y)) { return new Coord(obj.x, obj.y); }
    return null;
  }

  static tryParse(obj){
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

  isZero() { return this.x === 0 && this.y === 0; }

  equals(other) {
    return other instanceof Vector && this.x === other.x && this.y === other.y;
  }

  normal() { return new Vector(this.unitNormalX, this.unitNormalY); }

  invert() { return new Vector(-this.x, -this.y); }

  norm() { return new Vector(Math.abs(this.x), Math.abs(this.y)); }

  perpendicular(){ return new Vector(-this.y, this.x); }

  add(other) {
    return other instanceof Vector ? new Vector(this.x + other.x, this.y + other.y) : null;
  }

  dot(other) {
    return other instanceof Vector ? (this.x * other.x) + (this.y * other.y) : null;
  }

  perpendicularAtTo(other) {
    if(!(other instanceof Vector)) { return null; }
    const p = other.add(this.projectionOfOnto(other).invert());
    return new Vector(p.x, p.y);
  }

  projectionOfOnto(other) {
    if(!(other instanceof Vector)) { return null; }
    const p = other.normal().scale(this.dot(other.normal()));
    return new Vector(p.x, p.y);
  }

  scale(scalar) {
    return new Vector((this.x * scalar), (this.y * scalar));
  }

  unitNormalDot(other) {
    if(!(other instanceof Vector)) { return null; }
    return (this.normal().x * other.normal().x) +
      (this.normal().y * other.normal().y);
  }

  reflect(incident){
    if(!(incident instanceof Vector)) { return null; }
    if(incident.isZero()) { return this; }
    const inorm = incident.normal();
    return this.add(inorm.scale(2 * (inorm.dot(this))).invert());
  }

  round(decimal = 0){
    return new Vector(round(this.x, decimal), round(this.y, decimal));
  }

}

class Point extends Coord {

  constructor(x, y) {
    super(x, y);
  }

  isAbove(other) { return this.y < other.y; }

  isBelow(other) { return this.y > other.y; }

  isLeftOf(other) { return this.x < other.x; }

  isRightOf(other) { return this.x > other.x; }

  distanceFrom(other) { return new Vector(this.x - other.x, this.y - other.y); }

  distanceTo(other) { return this.distanceFrom(other).invert(); }

  static canParse(candidate){
    return candidate instanceof Point || Coord.canParse(candidate);
  }

  static parse(obj) {
    if(obj instanceof Point) { return obj; }
    const coord = Coord.parse(obj);
    return new Point(coord.x, coord.y);
  }

  static tryParse(candidate){ return Point.canParse(candidate) ? Point.parse(candidate) : null; }
}

/**
 * @summary Returns a "unique" string.
 * @function uid
 * @global
 * @returns {string}
 */
function uid () {
  return Math.random().toString().substr(2);
}

const _evt = { };

/**
 * @class Event
 * @summary Event abstraction
 * @static
 */
class Event {

  /**
   * @summary Hard stops any further activity from passed event.
   * @memberOf Event
   * @public
   * @static
   * @param {Event} event - Event to hard stop.
   * @returns {boolean}
   */
  static mute(event) {
    if(!Assert.exists(event)) { return false; }
    if(Assert.isFunction(event.preventDefault)) { event.preventDefault(); }
    if(Assert.isFunction(event.stopPropagation)) { event.stopPropagation(); }
    if(Assert.isFunction(event.stopImmediatePropagation)) { event.stopImmediatePropagation(); }
    if(Assert.exists(event.cancelBubble)) { event.cancelBubble = true; }
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
  static add(element, event, callback, options) {
    const id = uid();
    _evt[id] = { element, event, callback, options };
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
  static remove(id) {
    const { element, event, callback, options } = _evt[id];
    element.removeEventListener(event, callback, options);
  }

}

/**
 * @class Document
 * @summary Document abstraction
 * @static
 */
class Document {

  static get scrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  /**
   * @summary Returns true if document scrolling is prevented
   * @memberOf Document
   * @public
   * @static
   * @returns {boolean}
   */
  static get isScrollPrevented() {
    return Assert.exists(Document.scrollY);
  }

  /**
   * @summary Prevents document from being scrollable
   * @memberOf Document
   * @public
   * @static
   */
  static preventScroll() {
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

    const { scrollbarWidth } = Document;
    document.body.style.position = 'fixed';
    document.body.style.left = `-${Document.scrollX}px`;
    document.body.style.top = `-${Document.scrollY}px`;
    document.body.style.width = `calc(100vw - ${scrollbarWidth}px)`;
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
  static resumeScroll() {
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
  static onClick(callback, options) {
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
  static onKeyUp(callback, options) {
    return Event.add(document, 'keyup', callback, options);
  }

  /**
   * @summary Removes event listener subscribed with `Document.[method]`
   * @memberOf Document
   * @public
   * @static
   * @param {string} id - Id returned from `Document.[method]`
   */
  static removeEvent(id) {
    Event.remove(id);
  }

}

/**
 * @class Window
 * @summary Window abstraction
 * @static
 */
class Window {

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
  static onClick(callback, options) {
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
  static onKeyUp(callback, options) {
    return Event.add(window, 'keyup', callback, options);
  }

  /**
   * @summary Removes event listener subscribed with `Window.[method]`
   * @memberOf Window
   * @public
   * @static
   * @param {string} id - Id returned from `Window.[method]`
   */
  static removeEvent(id) {
    Event.remove(id);
  }

}

class Key {
  /**
   * @constructor Key
   * @summary Keyboard Key abstraction
   * @param {String} MDNKeyIdentifier - The MDN Key Identifier
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   * @param {String} [MSKeyIdentifier] - The Microsoft Key Identifier for those
   * keys that have browser specific implementations for MS
   * https://msdn.microsoft.com/en-us/ie/gg305568(v=vs.94)
   */
  constructor(MDNKeyIdentifier, MSKeyIdentifier) {
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
  equals(other) {
    return (
      other instanceof Key &&
      (this.key === other.key || this.msKey === other.msKey)
    );
  }

  /**
   * @summary Returns true if this Key did fire event.
   * @memberOf Key
   * @public
   * @instance
   * @param {KeyboardEvent} event
   * @returns {boolean}
   */
  didFire(event) {
    const { code, key } = event;
    const value = key === 'Dead' ? code : key;
    return event && (this.equals(new Key(value)) || this.key === 'ANY');
  }

  /**
   * @summary Returns a Key action keypress.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get press() {
    return 'keypress';
  }

  /**
   * @summary Returns a Key action keydown.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get down() {
    return 'keydown';
  }

  /**
   * @summary Returns a Key action keyup.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get up() {
    return 'keyup';
  }

  /**
   * @summary Returns a Key that will equal any other Key.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get any() {
    return new Key('ANY');
  }

  /**
   * @summary Returns Key, Esacpe.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get esc() {
    return new Key('Escape', 'Esc');
  }

  /**
   * @summary Returns Key, Enter.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get enter() {
    return new Key('Enter');
  }

  /**
   * @summary Returns Key, Space.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get space() {
    return new Key(' ', 'Spacebar');
  }

  /**
   * @summary Returns Key, Tab.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get tab() {
    return new Key('Tab');
  }

  /**
   * @summary Returns Key, Left Arrow.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get left() {
    return new Key('ArrowLeft', 'Left');
  }

  /**
   * @summary Returns Key, Right Arrow.
   * @memberOf Key
   * @public
   * @static
   * @returns {Key}
   */
  static get right() {
    return new Key('ArrowRight', 'Right');
  }
}

class Keyboard {

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
  static on(event, key, method, capture = false) {
    const listener = e => (key.didFire(e) ? method(e, key) : null);
    window.addEventListener(event, listener, capture);
    return {
      unsubscribe: () => {
        window.removeEventListener(event, listener);
      },
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
  static onKeyPress(key, method, capture = false) {
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
  static onKeyDown(key, method, capture = false) {
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
  static onKeyUp(key, method, capture = false) {
    return Keyboard.on(Key.up, key, method, capture);
  }
}

class Swipe {
  /**
   * @constructor Swipe
   * @summary Encapsulates touch event management.
   * @param element {Element} - Element that will listen for swipe events.
   * @param tolerance {number} - The distance in pixels a swipe must travel to trigger a swipe event.
   */
  constructor(element, tolerance = 0) {
    this.didTouchStart = this.didTouchStart.bind(this);
    this.didTouchEnd = this.didTouchEnd.bind(this);
    this.didTouchMove = this.didTouchMove.bind(this);

    element.addEventListener('touchstart', this.didTouchStart, { capture: false, passive: true });
    element.addEventListener('touchend', this.didTouchEnd,  { capture: false, passive: true });
    element.addEventListener('touchmove', this.didTouchMove,  { capture: false, passive: true });

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
  onLeft(method) {
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
  onRight(method) {
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
  onMove(method) {
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
  destroy() {
    const { element } = this;
    element.removeEventListener('touchstart', this.didTouchStart, false);
    element.removeEventListener('touchend', this.didTouchEnd, false);
    element.removeEventListener('touchmove', this.didTouchMove, false);
    return this;
  }

  didTouchStart({touches: [touch]}) {
    this.touchStartPoint = new Point(touch.pageX, touch.pageY);
  }

  didTouchEnd(e) {
    const [touch] = e.changedTouches;
    const { touchStartPoint } = this;
    const touchEndPoint = new Point(touch.pageX, touch.pageY);

    if (
      touchEndPoint.isLeftOf(touchStartPoint) &&
      Math.abs(touchEndPoint.distanceFrom(touchStartPoint).x) > this.tolerance
    ) {
      this.didSwipeLeft(e);
    }
    if (
      touchEndPoint.isRightOf(touchStartPoint) &&
      Math.abs(touchEndPoint.distanceFrom(touchStartPoint).x) > this.tolerance
    ) {
      this.didSwipeRight(e);
    }
  }

  didTouchMove(e) {
    const [touch] = e.touches;
    const { touchStartPoint } = this;
    const touchEndPoint = new Point(touch.pageX, touch.pageY);

    this.didMove({
      distance: touchEndPoint.distanceFrom(touchStartPoint),
      up: touchEndPoint.isAbove(touchStartPoint),
      down: touchEndPoint.isBelow(touchStartPoint),
      left: touchEndPoint.isLeftOf(touchStartPoint),
      right: touchEndPoint.isRightOf(touchStartPoint),
    });
  }
}

/**
 * @summary Base64 encodes a string.
 * @param {string} string - string to encode
 * @returns {string}
 */
function encodeBase64(string) {
  if(!Assert.isString(string)) {
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
  if(!Assert.isString(string)) {
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
  if(!Assert.isString(string)) { throw new Error('Cannot encode non-string values.'); }
  return decodeURIComponent(encodeURIComponent(string));
}

/**
 * @summary Decodes UTF8 encoded string.
 * @param {string} string - string to decode.
 * @returns {string}
 */
function decodeUtf8(string) {
  if(!Assert.isString(string)) { throw new Error('Cannot decode non-string values.'); }
  return decodeURIComponent(encodeURIComponent(string));
}

export { Document, Event, Key, Keyboard, Swipe, Window, decodeBase64, decodeUtf8, encodeBase64, encodeUtf8 };
