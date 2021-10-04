## Classes

<dl>
<dt><a href="#Cookie">Cookie</a></dt>
<dd></dd>
<dt><a href="#Dto">Dto</a></dt>
<dd></dd>
<dt><a href="#Device">Device</a></dt>
<dd></dd>
<dt><a href="#Document">Document</a></dt>
<dd></dd>
<dt><a href="#Event">Event</a></dt>
<dd></dd>
<dt><a href="#Key">Key</a></dt>
<dd></dd>
<dt><a href="#Keyboard">Keyboard</a></dt>
<dd></dd>
<dt><a href="#Swipe">Swipe</a></dt>
<dd></dd>
<dt><a href="#Store">Store</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#form">form</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#string">string</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#worker">worker(func)</a> ⇒ <code>Worker</code></dt>
<dd></dd>
</dl>

<a name="Cookie"></a>

## Cookie
**Kind**: global class  
**Summary**: serializes, deserializes, and reads browser cookies.  

* [Cookie](#Cookie)
    * [.serialize(value, [params])](#Cookie.serialize) ⇒ [<code>string</code>](#string)
    * [.deserialize(value)](#Cookie.deserialize) ⇒ <code>\*</code>
    * [.read(value)](#Cookie.read) ⇒ <code>Object</code>

<a name="Cookie.serialize"></a>

### Cookie.serialize(value, [params]) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>Cookie</code>](#Cookie)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Data to be serialized |
| [params] | <code>Object</code> | Cookie parameters |
| [params.name] | [<code>string</code>](#string) | Cookie name |
| [params.expires] | <code>Date</code> | Cookie expiry date |
| [params.path] | [<code>string</code>](#string) | Cookie path |
| [params.domain] | [<code>string</code>](#string) | Cookie domain |
| [params.secure] | <code>boolean</code> | Sets cookie to 'secure' when true |

<a name="Cookie.deserialize"></a>

### Cookie.deserialize(value) ⇒ <code>\*</code>
**Kind**: static method of [<code>Cookie</code>](#Cookie)  
**Access**: public  

| Param | Type |
| --- | --- |
| value | [<code>string</code>](#string) | 

<a name="Cookie.read"></a>

### Cookie.read(value) ⇒ <code>Object</code>
**Kind**: static method of [<code>Cookie</code>](#Cookie)  
**Summary**: Read data stored in a cookie  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>string</code>](#string) | Browser cookie to read. |

<a name="Dto"></a>

## Dto
**Kind**: global class  
**Summary**: A powerful data object that can parse and serialize JavaScript
data into multiple formats: JSON, Query String, Form Data, JWT, base64.  

* [Dto](#Dto)
    * _instance_
        * [.value](#Dto+value) ⇒ <code>\*</code> \| <code>Object</code>
        * [.name](#Dto+name) ⇒ [<code>string</code>](#string)
        * [.name](#Dto+name)
        * [.read([key])](#Dto+read) ⇒ <code>\*</code>
        * [.remove(key)](#Dto+remove) ⇒ [<code>Dto</code>](#Dto)
        * [.write(key, value)](#Dto+write) ⇒ [<code>Dto</code>](#Dto)
        * [.update(value)](#Dto+update) ⇒ [<code>Dto</code>](#Dto)
        * [.clear()](#Dto+clear) ⇒ [<code>Dto</code>](#Dto)
        * [.encode([stripPadding], [unsafe])](#Dto+encode) ⇒ [<code>string</code>](#string) \| <code>undefined</code>
        * [.toFormData()](#Dto+toFormData) ⇒ <code>FormData</code>
        * [.toJson()](#Dto+toJson) ⇒ [<code>string</code>](#string)
        * [.toQueryString()](#Dto+toQueryString) ⇒ [<code>string</code>](#string)
    * _static_
        * [.decode(value, [name])](#Dto.decode) ⇒ [<code>Dto</code>](#Dto)
        * [.parseFormData(value)](#Dto.parseFormData) ⇒ [<code>Dto</code>](#Dto)
        * [.parseJson(value)](#Dto.parseJson) ⇒ [<code>Dto</code>](#Dto)
        * [.parseJwt(value)](#Dto.parseJwt) ⇒ <code>any</code>
        * [.parseQueryString(value)](#Dto.parseQueryString) ⇒ [<code>Dto</code>](#Dto)

<a name="Dto+value"></a>

### dto.value ⇒ <code>\*</code> \| <code>Object</code>
**Kind**: instance property of [<code>Dto</code>](#Dto)  
**Access**: public  
<a name="Dto+name"></a>

### dto.name ⇒ [<code>string</code>](#string)
**Kind**: instance property of [<code>Dto</code>](#Dto)  
**Access**: public  
<a name="Dto+name"></a>

### dto.name
**Kind**: instance property of [<code>Dto</code>](#Dto)  
**Access**: public  

| Param | Type |
| --- | --- |
| value | [<code>string</code>](#string) | 

<a name="Dto+read"></a>

### dto.read([key]) ⇒ <code>\*</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Return value for key or all values if not passed.  
**Access**: public  

| Param | Type |
| --- | --- |
| [key] | [<code>string</code>](#string) \| <code>number</code> | 

<a name="Dto+remove"></a>

### dto.remove(key) ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Remove value at key  
**Access**: public  

| Param | Type |
| --- | --- |
| key | [<code>string</code>](#string) \| <code>function</code> | 

<a name="Dto+write"></a>

### dto.write(key, value) ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Write value to key  
**Access**: public  

| Param |
| --- |
| key | 
| value | 

<a name="Dto+update"></a>

### dto.update(value) ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Update data with passed data  
**Access**: public  

| Param |
| --- |
| value | 

<a name="Dto+clear"></a>

### dto.clear() ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Clears all data from this Dto. It does not
remove this Dto from persistent storage.  
**Access**: public  
<a name="Dto+encode"></a>

### dto.encode([stripPadding], [unsafe]) ⇒ [<code>string</code>](#string) \| <code>undefined</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns a base64 encoded string containg the value
of of this Dto.  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [stripPadding] | <code>boolean</code> | <code>false</code> | Will strip base64 padding when true. |
| [unsafe] | <code>boolean</code> | <code>false</code> | Will escape special characters when encoding preventing erroneous errors in some cases, but making the value unsafe for transfer and decoding outside of Dto as special characters will have to be unescaped after decoding. |

<a name="Dto+toFormData"></a>

### dto.toFormData() ⇒ <code>FormData</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns Dto as FormData  
**Access**: public  
<a name="Dto+toJson"></a>

### dto.toJson() ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns Dto as JSON  
**Access**: public  
<a name="Dto+toQueryString"></a>

### dto.toQueryString() ⇒ [<code>string</code>](#string)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns Dto as query string  
**Access**: public  
<a name="Dto.decode"></a>

### Dto.decode(value, [name]) ⇒ [<code>Dto</code>](#Dto)
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Returns a new Dto having value of the passed base64 encoded string.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>string</code>](#string) | Initial value for the returned Dto. |
| [name] | [<code>string</code>](#string) | Name for the returned Dto. |

<a name="Dto.parseFormData"></a>

### Dto.parseFormData(value) ⇒ [<code>Dto</code>](#Dto)
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Parse a Dto from FormData  
**Access**: public  

| Param |
| --- |
| value | 

<a name="Dto.parseJson"></a>

### Dto.parseJson(value) ⇒ [<code>Dto</code>](#Dto)
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Parse a Dto from JSON data  
**Access**: public  

| Param |
| --- |
| value | 

<a name="Dto.parseJwt"></a>

### Dto.parseJwt(value) ⇒ <code>any</code>
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Parse a Dto from a JWT  
**Access**: public  

| Param |
| --- |
| value | 

<a name="Dto.parseQueryString"></a>

### Dto.parseQueryString(value) ⇒ [<code>Dto</code>](#Dto)
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Parse a Dto from a query string  
**Access**: public  

| Param |
| --- |
| value | 

<a name="Device"></a>

## Device
**Kind**: global class  
**Summary**: Device abstraction  

* [Device](#Device)
    * [.orientation](#Device.orientation) ⇒ [<code>string</code>](#string)
    * [.landscapePrimary](#Device.landscapePrimary) ⇒ [<code>string</code>](#string)
    * [.landscapeSecondary](#Device.landscapeSecondary) ⇒ [<code>string</code>](#string)
    * [.portraitPrimary](#Device.portraitPrimary) ⇒ [<code>string</code>](#string)
    * [.portraitSecondary](#Device.portraitSecondary) ⇒ [<code>string</code>](#string)
    * [.isMobile](#Device.isMobile) ⇒ <code>boolean</code>

<a name="Device.orientation"></a>

### Device.orientation ⇒ [<code>string</code>](#string)
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Returns the current Device orientation which can be
tested against the available Device orientation
constants to determine the orientation of the device.  
**Access**: public  
<a name="Device.landscapePrimary"></a>

### Device.landscapePrimary ⇒ [<code>string</code>](#string)
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in landscape.  
**Access**: public  
<a name="Device.landscapeSecondary"></a>

### Device.landscapeSecondary ⇒ [<code>string</code>](#string)
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in landscape.  
**Access**: public  
<a name="Device.portraitPrimary"></a>

### Device.portraitPrimary ⇒ [<code>string</code>](#string)
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in portrait.  
**Access**: public  
<a name="Device.portraitSecondary"></a>

### Device.portraitSecondary ⇒ [<code>string</code>](#string)
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in portrait
and upside-down.  
**Access**: public  
<a name="Device.isMobile"></a>

### Device.isMobile ⇒ <code>boolean</code>
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Returns true if device is mobile.  
**Access**: public  
<a name="Document"></a>

## Document
**Kind**: global class  
**Summary**: Document abstraction  

* [Document](#Document)
    * [.scrollbarWidth](#Document.scrollbarWidth) ⇒ <code>number</code>
    * [.isScrollPrevented](#Document.isScrollPrevented) ⇒ <code>boolean</code>
    * [.scroll](#Document.scroll) ⇒ <code>Scroll</code>
    * [.preventScroll()](#Document.preventScroll)
    * [.resumeScroll()](#Document.resumeScroll)
    * [.onPreventScroll(method)](#Document.onPreventScroll)
    * [.onResumeScroll(method)](#Document.onResumeScroll)
    * [.on(event, key, method, options)](#Document.on) ⇒ <code>Object</code>
    * [.onKeyPress(key, method, options)](#Document.onKeyPress) ⇒ <code>Object</code>
    * [.onKeyDown(key, method, options)](#Document.onKeyDown) ⇒ <code>Object</code>
    * [.onKeyUp(key, method, options)](#Document.onKeyUp) ⇒ <code>Object</code>

<a name="Document.scrollbarWidth"></a>

### Document.scrollbarWidth ⇒ <code>number</code>
**Kind**: static property of [<code>Document</code>](#Document)  
**Summary**: Width of the scrollbar  
**Access**: public  
<a name="Document.isScrollPrevented"></a>

### Document.isScrollPrevented ⇒ <code>boolean</code>
**Kind**: static property of [<code>Document</code>](#Document)  
**Summary**: Returns true if document scrolling is prevented  
**Access**: public  
<a name="Document.scroll"></a>

### Document.scroll ⇒ <code>Scroll</code>
**Kind**: static property of [<code>Document</code>](#Document)  
**Summary**: Gets the Document Scroll instance that can be queried
to determine scroll direction: left, right, up, down.  
**Access**: public  
<a name="Document.preventScroll"></a>

### Document.preventScroll()
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Prevents document from being scrollable  
**Access**: public  
<a name="Document.resumeScroll"></a>

### Document.resumeScroll()
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Resumes scrollability for document after being
rendered unscrollable.  
**Access**: public  
<a name="Document.onPreventScroll"></a>

### Document.onPreventScroll(method)
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Adds a method to call when scroll is prevented.  
**Access**: public  

| Param | Type |
| --- | --- |
| method | <code>function</code> | 

<a name="Document.onResumeScroll"></a>

### Document.onResumeScroll(method)
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Adds a method to call when scroll is resumed.  
**Access**: public  

| Param | Type |
| --- | --- |
| method | <code>function</code> | 

<a name="Document.on"></a>

### Document.on(event, key, method, options) ⇒ <code>Object</code>
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Subscribes to keyboard event  
**Returns**: <code>Object</code> - - method to call to
unsubscribe target listener from keyboard.  
**Access**: public  

| Param | Type |
| --- | --- |
| event |  | 
| key | [<code>Key</code>](#Key) | 
| method | <code>function</code> | 
| options | <code>Object</code> | 

<a name="Document.onKeyPress"></a>

### Document.onKeyPress(key, method, options) ⇒ <code>Object</code>
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Subscribes to keyboard keypress event  
**Returns**: <code>Object</code> - - method to call to
unsubscribe target listener from keyboard.  
**Access**: public  

| Param | Type |
| --- | --- |
| key | [<code>Key</code>](#Key) | 
| method | <code>function</code> | 
| options | <code>Object</code> | 

<a name="Document.onKeyDown"></a>

### Document.onKeyDown(key, method, options) ⇒ <code>Object</code>
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Subscribes to keyboard keydown event  
**Returns**: <code>Object</code> - - method to call to
unsubscribe target listener from keyboard.  
**Access**: public  

| Param | Type |
| --- | --- |
| key | [<code>Key</code>](#Key) | 
| method | <code>function</code> | 
| options | <code>Object</code> | 

<a name="Document.onKeyUp"></a>

### Document.onKeyUp(key, method, options) ⇒ <code>Object</code>
**Kind**: static method of [<code>Document</code>](#Document)  
**Summary**: Subscribes to keyboard keyup event  
**Returns**: <code>Object</code> - - method to call to
unsubscribe target listener from keyboard.  
**Access**: public  

| Param | Type |
| --- | --- |
| key | [<code>Key</code>](#Key) | 
| method | <code>function</code> | 
| options | <code>Object</code> | 

<a name="Event"></a>

## Event
**Kind**: global class  
**Summary**: Event abstraction  
<a name="Event.mute"></a>

### Event.mute(event) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Event</code>](#Event)  
**Summary**: Hard stops any further activity from passed event.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| event | [<code>Event</code>](#Event) | Event to hard stop. |

<a name="Key"></a>

## Key
**Kind**: global class  
**Summary**: Keyboard Key abstraction  

* [Key](#Key)
    * [new Key(MDNKeyIdentifier, [MSKeyIdentifier])](#new_Key_new)
    * _instance_
        * [.alt](#Key+alt) ⇒ [<code>Key</code>](#Key)
        * [.ctrl](#Key+ctrl) ⇒ [<code>Key</code>](#Key)
        * [.meta](#Key+meta) ⇒ [<code>Key</code>](#Key)
        * [.shift](#Key+shift) ⇒ [<code>Key</code>](#Key)
        * [.equals(other)](#Key+equals) ⇒ <code>boolean</code>
        * [.didFire(event)](#Key+didFire) ⇒ <code>boolean</code>
    * _static_
        * [.press](#Key.press) ⇒ [<code>Key</code>](#Key)
        * [.down](#Key.down) ⇒ [<code>Key</code>](#Key)
        * [.up](#Key.up) ⇒ [<code>Key</code>](#Key)
        * [.any](#Key.any) ⇒ [<code>Key</code>](#Key)
        * [.esc](#Key.esc) ⇒ [<code>Key</code>](#Key)
        * [.enter](#Key.enter) ⇒ [<code>Key</code>](#Key)
        * [.space](#Key.space) ⇒ [<code>Key</code>](#Key)
        * [.tab](#Key.tab) ⇒ [<code>Key</code>](#Key)
        * [.left](#Key.left) ⇒ [<code>Key</code>](#Key)
        * [.right](#Key.right) ⇒ [<code>Key</code>](#Key)

<a name="new_Key_new"></a>

### new Key(MDNKeyIdentifier, [MSKeyIdentifier])

| Param | Type | Description |
| --- | --- | --- |
| MDNKeyIdentifier | <code>String</code> | The MDN Key Identifier https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values |
| [MSKeyIdentifier] | <code>String</code> | The Microsoft Key Identifier for those keys that have browser specific implementations for MS https://msdn.microsoft.com/en-us/ie/gg305568(v=vs.94) |

<a name="Key+alt"></a>

### key.alt ⇒ [<code>Key</code>](#Key)
**Kind**: instance property of [<code>Key</code>](#Key)  
**Summary**: Returns Key with alt.  
**Returns**: [<code>Key</code>](#Key) - - Key with alt  
**Access**: public  
<a name="Key+ctrl"></a>

### key.ctrl ⇒ [<code>Key</code>](#Key)
**Kind**: instance property of [<code>Key</code>](#Key)  
**Summary**: Returns Key with ctrl.  
**Returns**: [<code>Key</code>](#Key) - - Key with ctrl  
**Access**: public  
<a name="Key+meta"></a>

### key.meta ⇒ [<code>Key</code>](#Key)
**Kind**: instance property of [<code>Key</code>](#Key)  
**Summary**: Returns Key with meta.  
**Returns**: [<code>Key</code>](#Key) - - Key with meta  
**Access**: public  
<a name="Key+shift"></a>

### key.shift ⇒ [<code>Key</code>](#Key)
**Kind**: instance property of [<code>Key</code>](#Key)  
**Summary**: Returns Key with shift.  
**Returns**: [<code>Key</code>](#Key) - - this Key with shift  
**Access**: public  
<a name="Key+equals"></a>

### key.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Key</code>](#Key)  
**Summary**: Returns true if this Key equals other.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Key</code>](#Key) | 

<a name="Key+didFire"></a>

### key.didFire(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Key</code>](#Key)  
**Summary**: Returns true if this Key did fire event.  
**Access**: public  

| Param | Type |
| --- | --- |
| event | <code>KeyboardEvent</code> | 

<a name="Key.press"></a>

### Key.press ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns a Key action keypress.  
**Access**: public  
<a name="Key.down"></a>

### Key.down ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns a Key action keydown.  
**Access**: public  
<a name="Key.up"></a>

### Key.up ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns a Key action keyup.  
**Access**: public  
<a name="Key.any"></a>

### Key.any ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns a Key that will equal any other Key.  
**Access**: public  
<a name="Key.esc"></a>

### Key.esc ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns Key, Esacpe.  
**Access**: public  
<a name="Key.enter"></a>

### Key.enter ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns Key, Enter.  
**Access**: public  
<a name="Key.space"></a>

### Key.space ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns Key, Space.  
**Access**: public  
<a name="Key.tab"></a>

### Key.tab ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns Key, Tab.  
**Access**: public  
<a name="Key.left"></a>

### Key.left ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns Key, Left Arrow.  
**Access**: public  
<a name="Key.right"></a>

### Key.right ⇒ [<code>Key</code>](#Key)
**Kind**: static property of [<code>Key</code>](#Key)  
**Summary**: Returns Key, Right Arrow.  
**Access**: public  
<a name="Keyboard"></a>

## Keyboard
**Kind**: global class  
**Summary**: a global keyboard abstraction  
<a name="Swipe"></a>

## Swipe
**Kind**: global class  
**Summary**: Encapsulates touch event management.  

* [Swipe](#Swipe)
    * [new Swipe(element, tolerance)](#new_Swipe_new)
    * [.onLeft(method)](#Swipe+onLeft) ⇒ <code>this</code>
    * [.onRight(method)](#Swipe+onRight) ⇒ <code>this</code>
    * [.onMove(method)](#Swipe+onMove) ⇒ <code>this</code>
    * [.destroy()](#Swipe+destroy) ⇒ <code>this</code>

<a name="new_Swipe_new"></a>

### new Swipe(element, tolerance)

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Element that will listen for swipe events. |
| tolerance | <code>number</code> | The distance in pixels a swipe must travel to trigger a swipe event. |

<a name="Swipe+onLeft"></a>

### swipe.onLeft(method) ⇒ <code>this</code>
**Kind**: instance method of [<code>Swipe</code>](#Swipe)  
**Summary**: Subscribes method to be called when user swipes left.  
**Access**: public  

| Param | Type |
| --- | --- |
| method | <code>function</code> | 

<a name="Swipe+onRight"></a>

### swipe.onRight(method) ⇒ <code>this</code>
**Kind**: instance method of [<code>Swipe</code>](#Swipe)  
**Summary**: Subscribes method to be called when user swipes right.  
**Access**: public  

| Param | Type |
| --- | --- |
| method | <code>function</code> | 

<a name="Swipe+onMove"></a>

### swipe.onMove(method) ⇒ <code>this</code>
**Kind**: instance method of [<code>Swipe</code>](#Swipe)  
**Summary**: Subscribes method to be called when user swipes.  
**Access**: public  

| Param | Type |
| --- | --- |
| method | <code>function</code> | 

<a name="Swipe+destroy"></a>

### swipe.destroy() ⇒ <code>this</code>
**Kind**: instance method of [<code>Swipe</code>](#Swipe)  
**Summary**: Clean up all potential memory leaks.  
**Access**: public  
<a name="Store"></a>

## Store
**Kind**: global class  
**Summary**: Global persistent data store.  

* [Store](#Store)
    * [.connected](#Store.connected)
    * [.connect()](#Store.connect)
    * [.disconnect()](#Store.disconnect)
    * [.read(name)](#Store.read) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.write(name, data)](#Store.write) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.remove(name)](#Store.remove) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.delete(name)](#Store.delete) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.save()](#Store.save) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.estimate()](#Store.estimate) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.saved()](#Store.saved) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Store.connected"></a>

### Store.connected
**Kind**: static property of [<code>Store</code>](#Store)  
**Summary**: Returns true when Store is connected to data store.  
**Access**: public  
<a name="Store.connect"></a>

### Store.connect()
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Connect Store to data store.  
**Access**: public  
<a name="Store.disconnect"></a>

### Store.disconnect()
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Disconnect Store from data store.  
**Access**: public  
<a name="Store.read"></a>

### Store.read(name) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Read data from collection with name.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>string</code>](#string) | Name of target collection. |

<a name="Store.write"></a>

### Store.write(name, data) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Write data to the collection with name.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>string</code>](#string) | Name of target collection. |
| data | <code>\*</code> | Data to write to collection |

<a name="Store.remove"></a>

### Store.remove(name) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Remove collection with name.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>string</code>](#string) | Name of target collection. |

<a name="Store.delete"></a>

### Store.delete(name) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Delete collection with name.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>string</code>](#string) | Name of target collection. |

<a name="Store.save"></a>

### Store.save() ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Save Store (Requires secure connection, i.e. HTTPS)  
**Access**: public  
<a name="Store.estimate"></a>

### Store.estimate() ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: Storage estimates.  
**Access**: public  
<a name="Store.saved"></a>

### Store.saved() ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: static method of [<code>Store</code>](#Store)  
**Summary**: True if the Store is saved.  
**Access**: public  
<a name="form"></a>

## form : <code>object</code>
**Kind**: global namespace  

* [form](#form) : <code>object</code>
    * [.readData(form)](#form.readData) ⇒ <code>FormData</code>
    * [.read(form)](#form.read) ⇒ <code>Object</code>
    * [.readJson(form)](#form.readJson) ⇒ [<code>string</code>](#string)
    * [.write(form, data)](#form.write)

<a name="form.readData"></a>

### form.readData(form) ⇒ <code>FormData</code>
**Kind**: static method of [<code>form</code>](#form)  
**Summary**: Reads data as FormData from a form.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to read. |

<a name="form.read"></a>

### form.read(form) ⇒ <code>Object</code>
**Kind**: static method of [<code>form</code>](#form)  
**Summary**: Reads data as an object of key value pairs
from a form. Where the keys are the names of each
field and the values are the value of these fields.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to read. |

<a name="form.readJson"></a>

### form.readJson(form) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>form</code>](#form)  
**Summary**: Reads data as JSON of key value pairs
from a form. Where the keys are the names of each
field and the values are the value of these fields.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to read. |

<a name="form.write"></a>

### form.write(form, data)
**Kind**: static method of [<code>form</code>](#form)  
**Summary**: Write data as an object to a form. Where
the keys are the names of each field and the values
are the value of these fields.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to write to. |
| data | <code>Object</code> |  |

<a name="string"></a>

## string : <code>object</code>
**Kind**: global namespace  

* [string](#string) : <code>object</code>
    * [.encodeBase64(string, [stripPadding])](#string.encodeBase64) ⇒ [<code>string</code>](#string)
    * [.exports.decodeBase64(string)](#string.exports.decodeBase64) ⇒ [<code>string</code>](#string)
    * [.exports.encodeUtf8(string)](#string.exports.encodeUtf8) ⇒ [<code>string</code>](#string)
    * [.exports.decodeUtf8(string)](#string.exports.decodeUtf8) ⇒ [<code>string</code>](#string)

<a name="string.encodeBase64"></a>

### string.encodeBase64(string, [stripPadding]) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Base64 encodes a string.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | string to encode |
| [stripPadding] | <code>boolean</code> | return value will have base64 padding characters stripped when true. |

<a name="string.exports.decodeBase64"></a>

### string.exports.decodeBase64(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Decodes Base64 encoded string.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | string to decode. |

<a name="string.exports.encodeUtf8"></a>

### string.exports.encodeUtf8(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: UTF8 encodes a string.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | string to encode |

<a name="string.exports.decodeUtf8"></a>

### string.exports.decodeUtf8(string) ⇒ [<code>string</code>](#string)
**Kind**: static method of [<code>string</code>](#string)  
**Summary**: Decodes UTF8 encoded string.  

| Param | Type | Description |
| --- | --- | --- |
| string | [<code>string</code>](#string) | string to decode. |

<a name="worker"></a>

## worker(func) ⇒ <code>Worker</code>
**Kind**: global function  
**Summary**: Returns a new Worker that runs the logic of the passed function.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function containing the logic to be run in the Worker. |

