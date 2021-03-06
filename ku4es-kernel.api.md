## Classes

<dl>
<dt><a href="#Assert">Assert</a></dt>
<dd></dd>
<dt><a href="#Name">Name</a></dt>
<dd></dd>
<dt><a href="#Rolodex">Rolodex</a></dt>
<dd></dd>
<dt><a href="#DayPoint">DayPoint</a></dt>
<dd></dd>
<dt><a href="#Money">Money</a></dt>
<dd></dd>
<dt><a href="#Coord">Coord</a></dt>
<dd></dd>
<dt><a href="#Interval">Interval</a></dt>
<dd></dd>
<dt><a href="#Timeout">Timeout</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#math">math</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#regex">regex</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#string">string</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#deduplicate">deduplicate(array)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#debounce">debounce(func, wait, [immediate])</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#feature">feature(policy, method)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#opt">opt(method, value)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#nextTick">nextTick(func)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#wait">wait(timeout)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd></dd>
</dl>

<a name="Assert"></a>

## Assert
**Kind**: global class  
**Summary**: Encapsulates common assertions providing a clear API.  

* [Assert](#Assert)
    * [.isNull(value)](#Assert.isNull) ⇒ <code>boolean</code>
    * [.isEmpty(value)](#Assert.isEmpty) ⇒ <code>boolean</code>
    * [.isUndefined(value)](#Assert.isUndefined) ⇒ <code>boolean</code>
    * [.isZero(value)](#Assert.isZero) ⇒ <code>boolean</code>
    * [.exists(value)](#Assert.exists) ⇒ <code>boolean</code>
    * [.isNullOrEmpty(value)](#Assert.isNullOrEmpty) ⇒ <code>boolean</code>
    * [.isArray(value)](#Assert.isArray) ⇒ <code>boolean</code>
    * [.isBool(value)](#Assert.isBool) ⇒ <code>boolean</code>
    * [.isTrue(value)](#Assert.isTrue) ⇒ <code>boolean</code>
    * [.isFalse(value)](#Assert.isFalse) ⇒ <code>boolean</code>
    * [.isDate(value)](#Assert.isDate) ⇒ <code>boolean</code>
    * [.isNumber(value)](#Assert.isNumber) ⇒ <code>boolean</code>
    * [.isEven(value)](#Assert.isEven) ⇒ <code>boolean</code>
    * [.isOdd(value)](#Assert.isOdd) ⇒ <code>boolean</code>
    * [.isString(value)](#Assert.isString) ⇒ <code>boolean</code>
    * [.isFunction(value)](#Assert.isFunction) ⇒ <code>boolean</code>
    * [.isAsyncFunction(value)](#Assert.isAsyncFunction) ⇒ <code>boolean</code>
    * [.isPromise(value)](#Assert.isPromise) ⇒ <code>boolean</code>
    * [.isObject(value)](#Assert.isObject) ⇒ <code>boolean</code>
    * [.isObjectLiteral(value)](#Assert.isObjectLiteral) ⇒ <code>boolean</code>
    * [.isTruthy(value)](#Assert.isTruthy) ⇒ <code>boolean</code>
    * [.isFalsy(value)](#Assert.isFalsy) ⇒ <code>boolean</code>

<a name="Assert.isNull"></a>

### Assert.isNull(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isEmpty"></a>

### Assert.isEmpty(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an empty string, empty array, or empty object literal.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isUndefined"></a>

### Assert.isUndefined(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isZero"></a>

### Assert.isZero(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is zero.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.exists"></a>

### Assert.exists(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is null or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isNullOrEmpty"></a>

### Assert.isNullOrEmpty(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value not {exists} or {isEmpty}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isArray"></a>

### Assert.isArray(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an Array.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isBool"></a>

### Assert.isBool(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a boolean.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isTrue"></a>

### Assert.isTrue(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is `true`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isFalse"></a>

### Assert.isFalse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isDate"></a>

### Assert.isDate(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a Date.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isNumber"></a>

### Assert.isNumber(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a number.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isEven"></a>

### Assert.isEven(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is a number and is even.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isOdd"></a>

### Assert.isOdd(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is a number and is odd.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isString"></a>

### Assert.isString(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isFunction"></a>

### Assert.isFunction(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a function.
Note: AsyncFunction will also return true for this check.
It is advisable to check first for AsyncFunction, then for
Function where you may be expecting either.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isAsyncFunction"></a>

### Assert.isAsyncFunction(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isPromise"></a>

### Assert.isPromise(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a Promise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isObject"></a>

### Assert.isObject(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an Object.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isObjectLiteral"></a>

### Assert.isObjectLiteral(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an object literal.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isTruthy"></a>

### Assert.isTruthy(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is not {isFalsy}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isFalsy"></a>

### Assert.isFalsy(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value {isZero}, {isFalse}, {isNullOrEmpty}, or {isNaN}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Name"></a>

## Name
**Kind**: global class  
**Summary**: A person's proper name  

* [Name](#Name)
    * [new Name(first, middle, last)](#new_Name_new)
    * [.first](#Name+first) ⇒ [<code>string</code>](#string)
    * [.middle](#Name+middle) ⇒ [<code>string</code>](#string)
    * [.last](#Name+last) ⇒ [<code>string</code>](#string)
    * [.full](#Name+full) ⇒ [<code>string</code>](#string)
    * [.initials](#Name+initials) ⇒ [<code>string</code>](#string)
    * [.equals(other)](#Name+equals) ⇒ <code>boolean</code>
    * [.toString([format])](#Name+toString) ⇒ [<code>string</code>](#string)

<a name="new_Name_new"></a>

### new Name(first, middle, last)

| Param | Type |
| --- | --- |
| first | [<code>string</code>](#string) | 
| middle | [<code>string</code>](#string) | 
| last | [<code>string</code>](#string) | 

<a name="Name+first"></a>

### name.first ⇒ [<code>string</code>](#string)
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: First name.  
**Access**: public  
<a name="Name+middle"></a>

### name.middle ⇒ [<code>string</code>](#string)
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Middle name.  
**Access**: public  
<a name="Name+last"></a>

### name.last ⇒ [<code>string</code>](#string)
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Last name.  
**Access**: public  
<a name="Name+full"></a>

### name.full ⇒ [<code>string</code>](#string)
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Space delimited first, [middle] and last name.  
**Access**: public  
<a name="Name+initials"></a>

### name.initials ⇒ [<code>string</code>](#string)
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Initials delimited by '.'.  
**Access**: public  
<a name="Name+equals"></a>

### name.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Name</code>](#Name)  
**Summary**: Returns true if this is equal to another Name.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Name</code>](#Name) | 

<a name="Name+toString"></a>

### name.toString([format]) ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>Name</code>](#Name)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [format] | [<code>string</code>](#string) | An optional format that can include: F, M, L, f, m, l where F, M, L represent the first, middle, and last name values respectively, and f, m, l represent the first initial, middle initial, and last initial respectively.<br/> _**Example**: `new Name('John', 'Bob', 'Doe').toString('F m. L')` === `'John B. Doe'`_ |

<a name="Rolodex"></a>

## Rolodex
**Kind**: global class  
**Summary**: Serially traverses an array forward and backward.  

* [Rolodex](#Rolodex)
    * [new Rolodex(list)](#new_Rolodex_new)
    * [.isEmpty](#Rolodex+isEmpty) ⇒ <code>boolean</code>
    * [.index](#Rolodex+index) ⇒ <code>boolean</code>
    * [.length](#Rolodex+length) ⇒ <code>number</code>
    * [.current](#Rolodex+current) ⇒ <code>\*</code>
    * [.next](#Rolodex+next) ⇒ <code>\*</code>
    * [.prev](#Rolodex+prev) ⇒ <code>\*</code>
    * [.peekNext](#Rolodex+peekNext) ⇒ <code>\*</code>
    * [.peekPrev](#Rolodex+peekPrev) ⇒ <code>\*</code>

<a name="new_Rolodex_new"></a>

### new Rolodex(list)

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | An array of items to manage. |

<a name="Rolodex+isEmpty"></a>

### rolodex.isEmpty ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Returns true if is empty.  
**Access**: public  
<a name="Rolodex+index"></a>

### rolodex.index ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Returns true if is empty.  
**Access**: public  
<a name="Rolodex+length"></a>

### rolodex.length ⇒ <code>number</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Returns number of values in the Rolodex.  
**Access**: public  
<a name="Rolodex+current"></a>

### rolodex.current ⇒ <code>\*</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Returns current value at Rolodex head.  
**Access**: public  
<a name="Rolodex+next"></a>

### rolodex.next ⇒ <code>\*</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Advance the head of the Rolodex one position moving
to the zero index if at the last index and return that value.  
**Access**: public  
<a name="Rolodex+prev"></a>

### rolodex.prev ⇒ <code>\*</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Recede the head of the Rolodex one position moving
to the last index if at the zero index and return that value.  
**Access**: public  
<a name="Rolodex+peekNext"></a>

### rolodex.peekNext ⇒ <code>\*</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Return the next value without moving the head.  
**Access**: public  
<a name="Rolodex+peekPrev"></a>

### rolodex.peekPrev ⇒ <code>\*</code>
**Kind**: instance property of [<code>Rolodex</code>](#Rolodex)  
**Summary**: Return the previous value without moving the head.  
**Access**: public  
<a name="DayPoint"></a>

## DayPoint
**Kind**: global class  
**Summary**: Date utility class.  

* [DayPoint](#DayPoint)
    * [new DayPoint(year, month, date)](#new_DayPoint_new)
    * _instance_
        * [.value](#DayPoint+value) ⇒ <code>number</code>
        * [.day](#DayPoint+day) ⇒ <code>number</code>
        * [.date](#DayPoint+date) ⇒ <code>number</code>
        * [.month](#DayPoint+month) ⇒ <code>number</code>
        * [.year](#DayPoint+year) ⇒ <code>number</code>
        * [.shortYear](#DayPoint+shortYear) ⇒ <code>number</code>
        * [.isWeekday](#DayPoint+isWeekday) ⇒ <code>boolean</code>
        * [.isWeekend](#DayPoint+isWeekend) ⇒ <code>boolean</code>
        * [.isLeapYear](#DayPoint+isLeapYear) ⇒ <code>boolean</code>
        * [.nextDay](#DayPoint+nextDay) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.prevDay](#DayPoint+prevDay) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.nextMonth](#DayPoint+nextMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.prevMonth](#DayPoint+prevMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.nextYear](#DayPoint+nextYear) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.prevYear](#DayPoint+prevYear) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.firstDayOfMonth](#DayPoint+firstDayOfMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.lastDayOfMonth](#DayPoint+lastDayOfMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.add(years, months, days)](#DayPoint+add) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.isBefore(other)](#DayPoint+isBefore) ⇒ <code>boolean</code>
        * [.isAfter(other)](#DayPoint+isAfter) ⇒ <code>boolean</code>
        * [.equals(other)](#DayPoint+equals) ⇒ <code>boolean</code>
        * [.toString(formatString)](#DayPoint+toString) ⇒ [<code>string</code>](#string)
        * [.toDate()](#DayPoint+toDate) ⇒ <code>Date</code>
        * [.toJson()](#DayPoint+toJson) ⇒ [<code>string</code>](#string)
    * _static_
        * [.today](#DayPoint.today) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.canParse(value)](#DayPoint.canParse) ⇒ <code>boolean</code>
        * [.parse(value)](#DayPoint.parse) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.tryParse(value)](#DayPoint.tryParse) ⇒ [<code>DayPoint</code>](#DayPoint) \| <code>null</code>
        * [.assumeNow(dayPoint)](#DayPoint.assumeNow)

<a name="new_DayPoint_new"></a>

### new DayPoint(year, month, date)

| Param | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | a valid year. |
| month | <code>number</code> | a valid month (1-12) where 1 = January and 12 = December. |
| date | <code>number</code> | a valid date for a given month. |

<a name="DayPoint+value"></a>

### dayPoint.value ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns value.  
**Access**: public  
<a name="DayPoint+day"></a>

### dayPoint.day ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns day.  
**Access**: public  
<a name="DayPoint+date"></a>

### dayPoint.date ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns date.  
**Access**: public  
<a name="DayPoint+month"></a>

### dayPoint.month ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns month.  
**Access**: public  
<a name="DayPoint+year"></a>

### dayPoint.year ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns year.  
**Access**: public  
<a name="DayPoint+shortYear"></a>

### dayPoint.shortYear ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a truncated two digit year.  
**Access**: public  
<a name="DayPoint+isWeekday"></a>

### dayPoint.isWeekday ⇒ <code>boolean</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true for days Monday-Friday.  
**Access**: public  
<a name="DayPoint+isWeekend"></a>

### dayPoint.isWeekend ⇒ <code>boolean</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true for days Saturday and Sunday  
**Access**: public  
<a name="DayPoint+isLeapYear"></a>

### dayPoint.isLeapYear ⇒ <code>boolean</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true for years that have a February 29th date.  
**Access**: public  
<a name="DayPoint+nextDay"></a>

### dayPoint.nextDay ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the day following this day.  
**Access**: public  
<a name="DayPoint+prevDay"></a>

### dayPoint.prevDay ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the day preceding this day.  
**Access**: public  
<a name="DayPoint+nextMonth"></a>

### dayPoint.nextMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month following this month.<br/>
_**Warning**: This method will error when navigating to next months that do not include a current day._  
**Access**: public  
<a name="DayPoint+prevMonth"></a>

### dayPoint.prevMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month preceding this month.<br/>
_**Warning**: This method will error when navigating to previous months that do not include a current day._  
**Access**: public  
<a name="DayPoint+nextYear"></a>

### dayPoint.nextYear ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month following this month.<br/>
_**Warning**: This method will error when navigating to next years that do not include a current day._  
**Access**: public  
<a name="DayPoint+prevYear"></a>

### dayPoint.prevYear ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month preceding this month.<br/>
_**Warning**: This method will error when navigating to previous years that do not include a current day._  
**Access**: public  
<a name="DayPoint+firstDayOfMonth"></a>

### dayPoint.firstDayOfMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the first day of this month and year.  
**Access**: public  
<a name="DayPoint+lastDayOfMonth"></a>

### dayPoint.lastDayOfMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the last day of this month and year.  
**Access**: public  
<a name="DayPoint+add"></a>

### dayPoint.add(years, months, days) ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint modified by the number of years, months, and days passed.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| years | <code>number</code> | The number of years to add or subtract from this DayPoint. |
| months | <code>number</code> | The number of months to add or subtract from this DayPoint. |
| days | <code>number</code> | The number of days to add or subtract from this DayPoint. |

<a name="DayPoint+isBefore"></a>

### dayPoint.isBefore(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the other DayPoint is before this DayPoint.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>DayPoint</code>](#DayPoint) | DayPoint to compare. |

<a name="DayPoint+isAfter"></a>

### dayPoint.isAfter(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the other DayPoint is after this DayPoint.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>DayPoint</code>](#DayPoint) | DayPoint to compare. |

<a name="DayPoint+equals"></a>

### dayPoint.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the other DayPoint is equal to this DayPoint.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>DayPoint</code>](#DayPoint) | DayPoint to compare. |

<a name="DayPoint+toString"></a>

### dayPoint.toString(formatString) ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a date string formatted per the passed format string.  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| formatString | [<code>string</code>](#string) | <code>&quot;mm/dd/yyyy&quot;</code> | format string where m = month, d = date, y = year.<br/> _**Example**: For date, January, 12, 2018, `'mm/dd/yy' -> '01/12/18'` & `'dd/mm/yyyy' -> '12/01/2018'`._ |

<a name="DayPoint+toDate"></a>

### dayPoint.toDate() ⇒ <code>Date</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a `Date` value of this.  
**Access**: public  
<a name="DayPoint+toJson"></a>

### dayPoint.toJson() ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a JSON string value of this.  
**Access**: public  
<a name="DayPoint.today"></a>

### DayPoint.today ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: static property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint with value now.  
**Access**: public  
<a name="DayPoint.canParse"></a>

### DayPoint.canParse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the value can be successfully parsed.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>string</code>](#string) | A string value to test. |

<a name="DayPoint.parse"></a>

### DayPoint.parse(value) ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint with the parsed value of the passed value.<br/>
_**Warning**: this method will throw an error for values that cannot be parsed._  
**Access**: public  

| Param | Type |
| --- | --- |
| value | [<code>string</code>](#string) | 

<a name="DayPoint.tryParse"></a>

### DayPoint.tryParse(value) ⇒ [<code>DayPoint</code>](#DayPoint) \| <code>null</code>
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint with the parsed value of the passed value.
_**Note**: Will return null for values that cannot be parsed._  
**Access**: public  

| Param | Type |
| --- | --- |
| value | [<code>string</code>](#string) | 

<a name="DayPoint.assumeNow"></a>

### DayPoint.assumeNow(dayPoint)
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Sets the concept of now to the passed value instead of using
now as defined by the system clock.  
**Access**: public  

| Param | Type |
| --- | --- |
| dayPoint | [<code>DayPoint</code>](#DayPoint) | 

<a name="Money"></a>

## Money
**Kind**: global class  

* [Money](#Money)
    * [new Money(amount, [currency])](#new_Money_new)
    * _instance_
        * [.cents](#Money+cents) ⇒ <code>number</code>
        * [.dollars](#Money+dollars) ⇒ <code>number</code>
        * [.currency](#Money+currency) ⇒ <code>number</code>
        * [.value](#Money+value) ⇒ <code>number</code>
        * [.nearestWhole](#Money+nearestWhole) ⇒ [<code>Money</code>](#Money)
        * [.nearestDollar](#Money+nearestDollar) ⇒ [<code>Money</code>](#Money)
        * [.add(other)](#Money+add) ⇒ [<code>Money</code>](#Money)
        * [.subtract(other)](#Money+subtract) ⇒ [<code>Money</code>](#Money)
        * [.multiply(factor)](#Money+multiply) ⇒ [<code>Money</code>](#Money)
        * [.divide(divisor)](#Money+divide) ⇒ [<code>Money</code>](#Money)
        * [.equals(other)](#Money+equals) ⇒ <code>boolean</code>
        * [.isGreaterThan(other)](#Money+isGreaterThan) ⇒ <code>boolean</code>
        * [.isLessThan(other)](#Money+isLessThan) ⇒ <code>boolean</code>
        * [.round([to])](#Money+round) ⇒ [<code>Money</code>](#Money)
        * [.roundDown([to])](#Money+roundDown) ⇒ [<code>Money</code>](#Money)
        * [.roundUp([to])](#Money+roundUp) ⇒ [<code>Money</code>](#Money)
        * [.exchange(rate, currency)](#Money+exchange) ⇒ [<code>Money</code>](#Money)
        * [.isOfCurrency(other)](#Money+isOfCurrency) ⇒ <code>boolean</code>
        * [.toString([format], [delimiter])](#Money+toString) ⇒ [<code>string</code>](#string)
    * _static_
        * [.zero(currency)](#Money.zero) ⇒ [<code>Money</code>](#Money)
        * [.isMoney(other)](#Money.isMoney) ⇒ <code>boolean</code>
        * [.canParse(value)](#Money.canParse) ⇒ <code>boolean</code>
        * [.parse(value)](#Money.parse) ⇒ [<code>Money</code>](#Money)
        * [.tryParse(value)](#Money.tryParse) ⇒ [<code>Money</code>](#Money)

<a name="new_Money_new"></a>

### new Money(amount, [currency])

| Param | Type |
| --- | --- |
| amount | <code>number</code> | 
| [currency] | [<code>string</code>](#string) | 

<a name="Money+cents"></a>

### money.cents ⇒ <code>number</code>
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns cents.  
**Access**: public  
<a name="Money+dollars"></a>

### money.dollars ⇒ <code>number</code>
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns dollars.  
**Access**: public  
<a name="Money+currency"></a>

### money.currency ⇒ <code>number</code>
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns currency.  
**Access**: public  
<a name="Money+value"></a>

### money.value ⇒ <code>number</code>
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns value.  
**Access**: public  
<a name="Money+nearestWhole"></a>

### money.nearestWhole ⇒ [<code>Money</code>](#Money)
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` rounded to the nearest whole value.  
**Access**: public  
<a name="Money+nearestDollar"></a>

### money.nearestDollar ⇒ [<code>Money</code>](#Money)
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded to the nearest whole value.
_**Note**: This property is simply an API for common US usage.  
**Access**: public  
<a name="Money+add"></a>

### money.add(other) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the sum two `Money`s.<br/>
_**Warning**: will throw an error for dissimilar currencies.
Use `isOfCurrency` to check currencies and `exchange` as necessary._  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>Money</code>](#Money) | {Money} of currency to add to this |

<a name="Money+subtract"></a>

### money.subtract(other) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the difference two `Money`s.<br/>
_**Warning**: will throw an error for dissimilar currencies.
Use `isOfCurrency` to check currencies and `exchange` as necessary._  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+multiply"></a>

### money.multiply(factor) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the product of `this` multiplied by factor  
**Access**: public  

| Param | Type |
| --- | --- |
| factor | <code>number</code> | 

<a name="Money+divide"></a>

### money.divide(divisor) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the quotient of `this` divided by divisor.  
**Access**: public  

| Param | Type |
| --- | --- |
| divisor | <code>number</code> | 

<a name="Money+equals"></a>

### money.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if `this` and another `Money` have equal values and currencies.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+isGreaterThan"></a>

### money.isGreaterThan(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if `this` value is greater than another `Money` of the same currency's value.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+isLessThan"></a>

### money.isLessThan(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if `this` value is less than another `Money` of the same currency's value.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+round"></a>

### money.round([to]) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded to the nearest tens exponent.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [to] | <code>number</code> | tens exponent to round to. |

<a name="Money+roundDown"></a>

### money.roundDown([to]) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded down to the nearest tens exponent.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [to] | <code>number</code> | tens exponent to round to. |

<a name="Money+roundUp"></a>

### money.roundUp([to]) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded up to the nearest tens exponent.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [to] | <code>number</code> | tens exponent to round to. |

<a name="Money+exchange"></a>

### money.exchange(rate, currency) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` with type currency and value calculated over the passed rate of exchange.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| rate | <code>number</code> | rate of exchange |
| currency | [<code>string</code>](#string) | symbol for target currency |

<a name="Money+isOfCurrency"></a>

### money.isOfCurrency(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if the target `Money` is of the same currency.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>Money</code>](#Money) | other Money |

<a name="Money+toString"></a>

### money.toString([format], [delimiter]) ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a string representation of this formatted to the
passed format, where format follows the following rules:<br/>
`<wholeValue(d)><decimalCharacter(.|,)><fractionalValue(c)><numberOfFractionalValues(_)>`<br/>
 _**Example**: for money with value `1234.5678` and currency 'C', `d,c2` would return `'C1.234,56'`_  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | [<code>string</code>](#string) | <code>&quot;d.c2&quot;</code> | format string. |
| [delimiter] | [<code>string</code>](#string) |  | a 1000x grouping delimiter. |

<a name="Money.zero"></a>

### Money.zero(currency) ⇒ [<code>Money</code>](#Money)
**Kind**: static method of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` with a zero value.  
**Access**: public  

| Param | Type |
| --- | --- |
| currency | [<code>string</code>](#string) | 

<a name="Money.isMoney"></a>

### Money.isMoney(other) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Money</code>](#Money)  
**Summary**: Returns true if other is an instance of `Money`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | <code>\*</code> | value to test |

<a name="Money.canParse"></a>

### Money.canParse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Money</code>](#Money)  
**Summary**: Returns true if value can be parsed to `Money`.  
**Access**: public  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="Money.parse"></a>

### Money.parse(value) ⇒ [<code>Money</code>](#Money)
**Kind**: static method of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` with value and currency calculated from passed value
if value can be parsed into `Money`. Otherwise will throw an error.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to parse to Money |

<a name="Money.tryParse"></a>

### Money.tryParse(value) ⇒ [<code>Money</code>](#Money)
**Kind**: static method of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` with value and currency calculated from passed value
if value can be parsed into `Money`, otherwise null.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to parse to Money |

<a name="Coord"></a>

## Coord
**Kind**: global class  
**Summary**: Coordindate  

* [Coord](#Coord)
    * [new Coord(x, y)](#new_Coord_new)
    * _instance_
        * [.x](#Coord+x) ⇒ <code>number</code>
        * [.y](#Coord+y) ⇒ <code>number</code>
        * [.value](#Coord+value) ⇒ <code>Object</code>
        * [.half](#Coord+half) ⇒ [<code>Coord</code>](#Coord)
        * [.abs](#Coord+abs) ⇒ [<code>Coord</code>](#Coord)
        * [.equals(other)](#Coord+equals) ⇒ <code>boolean</code>
        * [.add(other)](#Coord+add) ⇒ [<code>Coord</code>](#Coord)
        * [.subtract(other)](#Coord+subtract) ⇒ [<code>Coord</code>](#Coord)
        * [.multiply(other)](#Coord+multiply) ⇒ [<code>Coord</code>](#Coord)
        * [.divide(other)](#Coord+divide) ⇒ [<code>Coord</code>](#Coord)
        * [.round(toNearest)](#Coord+round) ⇒ [<code>Coord</code>](#Coord)
        * [.toString()](#Coord+toString) ⇒ [<code>string</code>](#string)
    * _static_
        * [.canParse(value)](#Coord.canParse) ⇒ <code>boolean</code>
        * [.parse(obj)](#Coord.parse) ⇒ [<code>Coord</code>](#Coord)
        * [.tryParse(obj)](#Coord.tryParse) ⇒ [<code>Coord</code>](#Coord) \| <code>null</code>

<a name="new_Coord_new"></a>

### new Coord(x, y)

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="Coord+x"></a>

### coord.x ⇒ <code>number</code>
**Kind**: instance property of [<code>Coord</code>](#Coord)  
**Summary**: x value.  
**Access**: public  
<a name="Coord+y"></a>

### coord.y ⇒ <code>number</code>
**Kind**: instance property of [<code>Coord</code>](#Coord)  
**Summary**: y value.  
**Access**: public  
<a name="Coord+value"></a>

### coord.value ⇒ <code>Object</code>
**Kind**: instance property of [<code>Coord</code>](#Coord)  
**Summary**: Returns an object containing the x and y values.  
**Access**: public  
<a name="Coord+half"></a>

### coord.half ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance property of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord with value half of this Coord.  
**Access**: public  
<a name="Coord+abs"></a>

### coord.abs ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance property of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord with absolute value of this Coord.  
**Access**: public  
<a name="Coord+equals"></a>

### coord.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns true if this equals other.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Coord</code>](#Coord) | 

<a name="Coord+add"></a>

### coord.add(other) ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord whose value is the sum of this and other.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Coord</code>](#Coord) | 

<a name="Coord+subtract"></a>

### coord.subtract(other) ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord whose value is the difference of this and other.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Coord</code>](#Coord) | 

<a name="Coord+multiply"></a>

### coord.multiply(other) ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord whose value is the product of this and other.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Coord</code>](#Coord) | 

<a name="Coord+divide"></a>

### coord.divide(other) ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord whose value is the quotient of this and other.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Coord</code>](#Coord) | 

<a name="Coord+round"></a>

### coord.round(toNearest) ⇒ [<code>Coord</code>](#Coord)
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord whose value is this rounded to nearest tens exponent.  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| toNearest | <code>number</code> | <code>0</code> | 

<a name="Coord+toString"></a>

### coord.toString() ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>Coord</code>](#Coord)  
**Summary**: Returns string value.  
**Access**: public  
<a name="Coord.canParse"></a>

### Coord.canParse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Coord</code>](#Coord)  
**Summary**: Returns true if the value can be successfully parsed.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>string</code>](#string) | A string value to test. |

<a name="Coord.parse"></a>

### Coord.parse(obj) ⇒ [<code>Coord</code>](#Coord)
**Kind**: static method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord with the parsed value of the passed value.<br/>
_**Warning**: this method will throw an error for values that cannot be parsed._  
**Access**: public  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

<a name="Coord.tryParse"></a>

### Coord.tryParse(obj) ⇒ [<code>Coord</code>](#Coord) \| <code>null</code>
**Kind**: static method of [<code>Coord</code>](#Coord)  
**Summary**: Returns a Coord with the parsed value of the passed value.
_**Note**: Will return null for values that cannot be parsed._  
**Access**: public  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

<a name="Interval"></a>

## Interval
**Kind**: global class  
**Summary**: encapsulates timer boilerplate  

* [Interval](#Interval)
    * [new Interval(milliseconds)](#new_Interval_new)
    * [.isRunning](#Interval+isRunning) ⇒ <code>boolean</code>
    * [.onInterval()](#Interval+onInterval) ⇒ <code>this</code>
    * [.start()](#Interval+start) ⇒ <code>this</code>
    * [.clear()](#Interval+clear) ⇒ <code>this</code>

<a name="new_Interval_new"></a>

### new Interval(milliseconds)

| Param | Type |
| --- | --- |
| milliseconds | <code>number</code> | 

<a name="Interval+isRunning"></a>

### interval.isRunning ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Interval</code>](#Interval)  
**Summary**: Returns true if this Interval is running.  
**Access**: public  
<a name="Interval+onInterval"></a>

### interval.onInterval() ⇒ <code>this</code>
**Kind**: instance method of [<code>Interval</code>](#Interval)  
**Summary**: Sets method to call on interval.  
**Access**: public  

| Param | Type |
| --- | --- |
| method. | <code>function</code> | 

<a name="Interval+start"></a>

### interval.start() ⇒ <code>this</code>
**Kind**: instance method of [<code>Interval</code>](#Interval)  
**Summary**: Starts timer.  
**Access**: public  
<a name="Interval+clear"></a>

### interval.clear() ⇒ <code>this</code>
**Kind**: instance method of [<code>Interval</code>](#Interval)  
**Summary**: Clears timer.  
**Access**: public  
<a name="Timeout"></a>

## Timeout
**Kind**: global class  
**Summary**: encapsulates timer boilerplate  

* [Timeout](#Timeout)
    * [new Timeout(milliseconds)](#new_Timeout_new)
    * [.isRunning](#Timeout+isRunning) ⇒ <code>boolean</code>
    * [.onTimeout()](#Timeout+onTimeout) ⇒ <code>this</code>
    * [.start()](#Timeout+start) ⇒ <code>this</code>
    * [.clear()](#Timeout+clear) ⇒ <code>this</code>

<a name="new_Timeout_new"></a>

### new Timeout(milliseconds)

| Param | Type |
| --- | --- |
| milliseconds | <code>number</code> | 

<a name="Timeout+isRunning"></a>

### timeout.isRunning ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Timeout</code>](#Timeout)  
**Summary**: Returns true if this Timeout is running.  
**Access**: public  
<a name="Timeout+onTimeout"></a>

### timeout.onTimeout() ⇒ <code>this</code>
**Kind**: instance method of [<code>Timeout</code>](#Timeout)  
**Summary**: Sets method to call on timeout.  
**Access**: public  

| Param | Type |
| --- | --- |
| method. | <code>function</code> | 

<a name="Timeout+start"></a>

### timeout.start() ⇒ <code>this</code>
**Kind**: instance method of [<code>Timeout</code>](#Timeout)  
**Summary**: Starts timer.  
**Access**: public  
<a name="Timeout+clear"></a>

### timeout.clear() ⇒ <code>this</code>
**Kind**: instance method of [<code>Timeout</code>](#Timeout)  
**Summary**: Clears timer.  
**Access**: public  
<a name="math"></a>

## math : <code>object</code>
**Kind**: global namespace  

* [math](#math) : <code>object</code>
    * [.random([min], [max])](#math.random) ⇒ <code>number</code>
    * [.round(value, toNearest)](#math.round) ⇒ <code>number</code>
    * [.roundUp(value, toNearest)](#math.roundUp) ⇒ <code>number</code>
    * [.roundDown(value, toNearest)](#math.roundDown) ⇒ <code>number</code>
    * [.roundTowardZero(value, toNearest)](#math.roundTowardZero) ⇒ <code>number</code>
    * [.gcd(a, b)](#math.gcd) ⇒ <code>number</code>
    * [.fib(n)](#math.fib) ⇒ <code>number</code>
    * [.fib2(n)](#math.fib2) ⇒ <code>number</code>
    * [.fibArray(n)](#math.fibArray) ⇒ <code>number</code>
    * [.fibArray2(n)](#math.fibArray2) ⇒ <code>number</code>
    * [.tryParseInt(value, valueIfNan)](#math.tryParseInt) ⇒ <code>number</code>
    * [.tryParseFloat(value, valueIfNan)](#math.tryParseFloat) ⇒ <code>number</code>

<a name="math.random"></a>

### math.random([min], [max]) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns a random value between 0 and 1 by default. Will
return a random number between a min an max value if passed.  

| Param | Type | Description |
| --- | --- | --- |
| [min] | <code>number</code> | random number will not precede this value. |
| [max] | <code>number</code> | random number will not exceed this value. |

<a name="math.round"></a>

### math.round(value, toNearest) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Rounds a value to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="math.roundUp"></a>

### math.roundUp(value, toNearest) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Rounds a value up to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="math.roundDown"></a>

### math.roundDown(value, toNearest) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Rounds a value down to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="math.roundTowardZero"></a>

### math.roundTowardZero(value, toNearest) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Rounds a value toward zero to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="math.gcd"></a>

### math.gcd(a, b) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns the greatest common denominator for arguments a and b.  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="math.fib"></a>

### math.fib(n) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns the nth number in a Fibonacci set.<br/>
_**Note**: zero indexed._<br/>
_**Warning**: Due to this function's attempt at leveraging tail-calls
it can cause stack overflows for large values of n._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | index. |

<a name="math.fib2"></a>

### math.fib2(n) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns the nth number in a Fibonacci set.<br/>
_**Note**: zero indexed._<br/>
_**Warning**: This function has better performance and is not
prone to stack overflows as is fib._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | index. |

<a name="math.fibArray"></a>

### math.fibArray(n) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns an array of length n with Fibonacci values.<br/>
_**Warning**: Due to this function's attempt at leveraging tail-calls
it can cause stack overflows for large values of n._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | length. |

<a name="math.fibArray2"></a>

### math.fibArray2(n) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns an array of length n with Fibonacci values.<br/>
_**Warning**: This function has better performance and is not
prone to stack overflows as is fibArray._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | length. |

<a name="math.tryParseInt"></a>

### math.tryParseInt(value, valueIfNan) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns a parsed integer value for values that can be parsed,
or a set value if passed, or zero.  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>string</code>](#string) | value to parse. |
| valueIfNan | <code>number</code> | value to return if {value} cannot be parsed. |

<a name="math.tryParseFloat"></a>

### math.tryParseFloat(value, valueIfNan) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#math)  
**Summary**: Returns a parsed float value for values that can be parsed,
or a set value if passed, or zero.  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>string</code>](#string) | value to parse. |
| valueIfNan | <code>number</code> | value to return if {value} cannot be parsed. |

<a name="regex"></a>

## regex : <code>object</code>
**Kind**: global namespace  

* [regex](#regex) : <code>object</code>
    * [.alpha](#regex.alpha) : <code>RegExp</code>
    * [.alphaNumeric](#regex.alphaNumeric) : <code>RegExp</code>
    * [.base64](#regex.base64) : <code>RegExp</code>
    * [.dataUrl](#regex.dataUrl) : <code>RegExp</code>
    * [.email](#regex.email) : <code>RegExp</code>
    * [.empty](#regex.empty) : <code>RegExp</code>
    * [.numeric](#regex.numeric) : <code>RegExp</code>
    * [.script](#regex.script) : <code>RegExp</code>
    * [.uid](#regex.uid) : <code>RegExp</code>
    * [.url](#regex.url) : <code>RegExp</code>
    * [.uuid](#regex.uuid) : <code>RegExp</code>
    * [.debounce(regex)](#regex.debounce) ⇒ [<code>string</code>](#string)
    * [.escape(string)](#regex.escape) ⇒ [<code>string</code>](#string)

<a name="regex.alpha"></a>

### regex.alpha : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.alphaNumeric"></a>

### regex.alphaNumeric : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.base64"></a>

### regex.base64 : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.dataUrl"></a>

### regex.dataUrl : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.email"></a>

### regex.email : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.empty"></a>

### regex.empty : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.numeric"></a>

### regex.numeric : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.script"></a>

### regex.script : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.uid"></a>

### regex.uid : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.url"></a>

### regex.url : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.uuid"></a>

### regex.uuid : <code>RegExp</code>
**Kind**: static constant of [<code>regex</code>](#regex)  
<a name="regex.debounce"></a>

### regex.debounce(regex) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>regex</code>](#regex)  
**Summary**: Converts a RegExp to a Regular Expression pattern string.  
**Returns**: [<code>string</code>](#string) - - Regular Expression pattern  

| Param | Type | Description |
| --- | --- | --- |
| regex | <code>RegExp</code> | RegExp to convert to pattern |

<a name="regex.escape"></a>

### regex.escape(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>regex</code>](#regex)  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | A regex string to escape for using in RegExp(string) |

<a name="string"></a>

## string : <code>object</code>
**Kind**: global namespace  

* [string](#string) : <code>object</code>
    * [.exports.build(rest)](#string.exports.build) ⇒ [<code>string</code>](#string)
    * [.exports.chunk(string, size)](#string.exports.chunk) ⇒ [<code>Array.&lt;string&gt;</code>](#string)
    * [.exports.format(format, rest)](#string.exports.format) ⇒ [<code>string</code>](#string)
    * [.exports.trim(string)](#string.exports.trim) ⇒ [<code>string</code>](#string)
    * [.exports.trimStart(string)](#string.exports.trimStart) ⇒ [<code>string</code>](#string)
    * [.exports.trimEnd(string)](#string.exports.trimEnd) ⇒ [<code>string</code>](#string)
    * [.exports.capitalize(string)](#string.exports.capitalize) ⇒ [<code>string</code>](#string)
    * [.exports.mask(string, template, [char])](#string.exports.mask) ⇒ [<code>string</code>](#string)
    * [.exports.unmask(string, template, [char])](#string.exports.unmask) ⇒ [<code>string</code>](#string)

<a name="string.exports.build"></a>

### string.exports.build(rest) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Builds a string from string arguments.  

| Param |
| --- |
| rest | 

<a name="string.exports.chunk"></a>

### string.exports.chunk(string, size) ⇒ [<code>Array.&lt;string&gt;</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns an array of substring strings of size.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | the string value to chunk. |
| size | <code>number</code> | the size of each chunk. |

<a name="string.exports.format"></a>

### string.exports.format(format, rest) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string template filled with passed values.  

| Param | Type | Description |
| --- | --- | --- |
| format | [<code>string</code>](#string) | String format in the form "${0} indexed ${1}." |
| rest | [<code>string</code>](#string) | Value arguments e.g. "Zero", "arguments" |

<a name="string.exports.trim"></a>

### string.exports.trim(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string with leading and trailing whitespace trimmed.  

| Param |
| --- |
| string | 

<a name="string.exports.trimStart"></a>

### string.exports.trimStart(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string with leading whitespace trimmed.  

| Param |
| --- |
| string | 

<a name="string.exports.trimEnd"></a>

### string.exports.trimEnd(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string with trailing whitespace trimmed.  

| Param |
| --- |
| string | 

<a name="string.exports.capitalize"></a>

### string.exports.capitalize(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string with the first character capitalized.  

| Param |
| --- |
| string | 

<a name="string.exports.mask"></a>

### string.exports.mask(string, template, [char]) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string masked over the passed template.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | String to mask |
| template | [<code>string</code>](#string) \| <code>function</code> | Mask template |
| [char] | [<code>string</code>](#string) | Mask character in template defaults to '_'. |

<a name="string.exports.unmask"></a>

### string.exports.unmask(string, template, [char]) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Returns a string unmasked over the passed template.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | String to unmask |
| template | [<code>string</code>](#string) \| <code>function</code> | Mask template |
| [char] | [<code>string</code>](#string) | Mask character in template defaults to '_'. |

<a name="deduplicate"></a>

## deduplicate(array) ⇒ <code>Array</code>
**Kind**: global function  
**Summary**: Returns a new array with values of input array having duplicates removed.  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 

<a name="debounce"></a>

## debounce(func, wait, [immediate]) ⇒ <code>function</code>
**Kind**: global function  
**Summary**: Returns a debounced function per the function and wait passed  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to debounce. |
| wait | <code>number</code> | The time to wait between calls of func. |
| [immediate] | <code>boolean</code> | True if func should be called immediately. |

<a name="feature"></a>

## feature(policy, method) ⇒ <code>\*</code>
**Kind**: global function  
**Summary**: Feature flag that takes a feature policy
and a method and will call the method IFF the policy
value is or returns true.  

| Param | Type |
| --- | --- |
| policy | <code>boolean</code> \| <code>function</code> \| <code>Promise</code> | 
| method | <code>function</code> | 

<a name="opt"></a>

## opt(method, value) ⇒ <code>\*</code>
**Kind**: global function  
**Summary**: returns that return value of the passed method
or the value if the passed method throws an error.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>function</code> | method to execute. |
| value | <code>\*</code> | Value to return if method fails. |

<a name="opt.async"></a>

### opt.async(method, value) ⇒ <code>\*</code>
**Kind**: static method of [<code>opt</code>](#opt)  
**Summary**: returns that return value of the passed method
or the value if the passed method throws an error.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>AsyncFunction</code> \| <code>Promise</code> | method to execute. |
| value | <code>\*</code> | Value to return if method fails. |

<a name="nextTick"></a>

## nextTick(func) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Postpones function execution until the next event loop.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | function to move to the next event loop |

<a name="wait"></a>

## wait(timeout) ⇒ <code>Promise.&lt;any&gt;</code>
**Kind**: global function  
**Summary**: A promisified setTimeout.  

| Param | Type | Description |
| --- | --- | --- |
| timeout | <code>number</code> | the number of milliseconds to wait |

