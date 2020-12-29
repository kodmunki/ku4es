## Classes

<dl>
<dt><a href="#Cookie">Cookie</a></dt>
<dd></dd>
<dt><a href="#Dto">Dto</a></dt>
<dd></dd>
<dt><a href="#Key">Key</a></dt>
<dd></dd>
<dt><a href="#Swipe">Swipe</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#encode">encode([stripPadding])</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd></dd>
<dt><a href="#decode">decode(value, [name])</a> ⇒ <code><a href="#Dto">Dto</a></code></dt>
<dd></dd>
<dt><a href="#readData">readData(form)</a> ⇒ <code>FormData</code></dt>
<dd></dd>
<dt><a href="#read">read(form)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#readJson">readJson(form)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#write">write(form, data)</a></dt>
<dd></dd>
<dt><a href="#encodeBase64">encodeBase64(string, [stripPadding])</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#decodeBase64">decodeBase64(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#encodeUtf8">encodeUtf8(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#decodeUtf8">decodeUtf8(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="Cookie"></a>

## Cookie
**Kind**: global class  
**Summary**: serializes, deserializes, and reads browser cookies.  

* [Cookie](#Cookie)
    * [.serialize(value, [params])](#Cookie.serialize) ⇒ <code>string</code>
    * [.deserialize(value)](#Cookie.deserialize) ⇒ <code>\*</code>
    * [.read(value)](#Cookie.read) ⇒ <code>Object</code>

<a name="Cookie.serialize"></a>

### Cookie.serialize(value, [params]) ⇒ <code>string</code>
**Kind**: static method of [<code>Cookie</code>](#Cookie)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Data to be serialized |
| [params] | <code>Object</code> | Cookie parameters |
| [params.name] | <code>string</code> | Cookie name |
| [params.expires] | <code>Date</code> | Cookie expiry date |
| [params.path] | <code>string</code> | Cookie path |
| [params.domain] | <code>string</code> | Cookie domain |
| [params.secure] | <code>boolean</code> | Sets cookie to 'secure' when true |

<a name="Cookie.deserialize"></a>

### Cookie.deserialize(value) ⇒ <code>\*</code>
**Kind**: static method of [<code>Cookie</code>](#Cookie)  
**Access**: public  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Cookie.read"></a>

### Cookie.read(value) ⇒ <code>Object</code>
**Kind**: static method of [<code>Cookie</code>](#Cookie)  
**Summary**: Read data stored in a cookie  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Browser cookie to read. |

<a name="Dto"></a>

## Dto
**Kind**: global class  
**Summary**: A powerful data object that can parse and serialize JavaScript
data into multiple formats: Cookie  

* [Dto](#Dto)
    * _instance_
        * [.name](#Dto+name)
        * [.name](#Dto+name)
        * [.read(key)](#Dto+read) ⇒ <code>\*</code>
        * [.remove(key)](#Dto+remove) ⇒ [<code>Dto</code>](#Dto)
        * [.write(key, value)](#Dto+write) ⇒ [<code>Dto</code>](#Dto)
        * [.update(data)](#Dto+update) ⇒ [<code>Dto</code>](#Dto)
        * [.save()](#Dto+save) ⇒ [<code>Dto</code>](#Dto)
        * [.saveAs(name)](#Dto+saveAs) ⇒ [<code>Dto</code>](#Dto)
        * [.delete()](#Dto+delete) ⇒ [<code>Dto</code>](#Dto)
        * [.toFormData()](#Dto+toFormData) ⇒ <code>FormData</code>
        * [.toJson()](#Dto+toJson) ⇒ <code>string</code>
        * [.toQueryString()](#Dto+toQueryString) ⇒ <code>string</code>
    * _static_
        * [.parseFormData(value)](#Dto.parseFormData) ⇒ [<code>Dto</code>](#Dto)
        * [.parseJson(value)](#Dto.parseJson) ⇒ [<code>Dto</code>](#Dto)
        * [.parseQueryString(value)](#Dto.parseQueryString) ⇒ [<code>Dto</code>](#Dto)
        * [.load(name)](#Dto.load) ⇒ [<code>Promise.&lt;Dto&gt;</code>](#Dto)

<a name="Dto+name"></a>

### dto.name
**Kind**: instance property of [<code>Dto</code>](#Dto)  
**Access**: public  
<a name="Dto+name"></a>

### dto.name
**Kind**: instance property of [<code>Dto</code>](#Dto)  
**Access**: public  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Dto+read"></a>

### dto.read(key) ⇒ <code>\*</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Return value for key  
**Access**: public  

| Param |
| --- |
| key | 

<a name="Dto+remove"></a>

### dto.remove(key) ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Remove value at key  
**Access**: public  

| Param |
| --- |
| key | 

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

### dto.update(data) ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Update data with passed data  
**Access**: public  

| Param |
| --- |
| data | 

<a name="Dto+save"></a>

### dto.save() ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Persist Dto locally  
**Access**: public  
<a name="Dto+saveAs"></a>

### dto.saveAs(name) ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Persist Dto locally as name  
**Access**: public  

| Param |
| --- |
| name | 

<a name="Dto+delete"></a>

### dto.delete() ⇒ [<code>Dto</code>](#Dto)
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Delete locally saved Dto  
**Access**: public  
<a name="Dto+toFormData"></a>

### dto.toFormData() ⇒ <code>FormData</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns Dto as FormData  
**Access**: public  
<a name="Dto+toJson"></a>

### dto.toJson() ⇒ <code>string</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns Dto as JSON  
**Access**: public  
<a name="Dto+toQueryString"></a>

### dto.toQueryString() ⇒ <code>string</code>
**Kind**: instance method of [<code>Dto</code>](#Dto)  
**Summary**: Returns Dto as query string  
**Access**: public  
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

<a name="Dto.parseQueryString"></a>

### Dto.parseQueryString(value) ⇒ [<code>Dto</code>](#Dto)
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Parse a Dto from a query string  
**Access**: public  

| Param |
| --- |
| value | 

<a name="Dto.load"></a>

### Dto.load(name) ⇒ [<code>Promise.&lt;Dto&gt;</code>](#Dto)
**Kind**: static method of [<code>Dto</code>](#Dto)  
**Summary**: Load a locally saved Dto by name  
**Access**: public  

| Param |
| --- |
| name | 

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
<a name="encode"></a>

## encode([stripPadding]) ⇒ <code>string</code> \| <code>undefined</code>
**Kind**: global function  
**Summary**: Returns a base64 encoded string containg the value
of of this Dto.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [stripPadding] | <code>boolean</code> | <code>false</code> | Will strip base64 padding when true. |

<a name="decode"></a>

## decode(value, [name]) ⇒ [<code>Dto</code>](#Dto)
**Kind**: global function  
**Summary**: Returns a new Dto having value of the passed base64 encoded string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Initial value for the returned Dto. |
| [name] | <code>string</code> | Name for the returned Dto. |

<a name="readData"></a>

## readData(form) ⇒ <code>FormData</code>
**Kind**: global function  
**Summary**: Reads data as FormData from a form.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to read. |

<a name="read"></a>

## read(form) ⇒ <code>Object</code>
**Kind**: global function  
**Summary**: Reads data as an object of key value pairs
from a form. Where the keys are the names of each
field and the values are the value of these fields.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to read. |

<a name="readJson"></a>

## readJson(form) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Reads data as JSON of key value pairs
from a form. Where the keys are the names of each
field and the values are the value of these fields.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to read. |

<a name="write"></a>

## write(form, data)
**Kind**: global function  
**Summary**: Write data as an object to a form. Where
the keys are the names of each field and the values
are the value of these fields.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | the form to write to. |
| data | <code>Object</code> |  |

<a name="encodeBase64"></a>

## encodeBase64(string, [stripPadding]) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Base64 encodes a string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to encode |
| [stripPadding] | <code>boolean</code> | return value will have base64 padding characters stripped when true. |

<a name="decodeBase64"></a>

## decodeBase64(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Decodes Base64 encoded string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to decode. |

<a name="encodeUtf8"></a>

## encodeUtf8(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: UTF8 encodes a string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to encode |

<a name="decodeUtf8"></a>

## decodeUtf8(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Decodes UTF8 encoded string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to decode. |

<a name="Device"></a>

## .Device
**Kind**: static class  
**Summary**: Device abstraction  

* [.Device](#Device)
    * [.orientation](#Device.orientation) ⇒ <code>string</code>
    * [.landscapePrimary](#Device.landscapePrimary) ⇒ <code>string</code>
    * [.landscapeSecondary](#Device.landscapeSecondary) ⇒ <code>string</code>
    * [.portraitPrimary](#Device.portraitPrimary) ⇒ <code>string</code>
    * [.portraitSecondary](#Device.portraitSecondary) ⇒ <code>string</code>
    * [.isMobile](#Device.isMobile) ⇒ <code>boolean</code>

<a name="Device.orientation"></a>

### Device.orientation ⇒ <code>string</code>
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Returns the current Device orientation which can be
tested against the available Device orientation
constants to determine the orientation of the device.  
**Access**: public  
<a name="Device.landscapePrimary"></a>

### Device.landscapePrimary ⇒ <code>string</code>
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in landscape.  
**Access**: public  
<a name="Device.landscapeSecondary"></a>

### Device.landscapeSecondary ⇒ <code>string</code>
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in landscape.  
**Access**: public  
<a name="Device.portraitPrimary"></a>

### Device.portraitPrimary ⇒ <code>string</code>
**Kind**: static property of [<code>Device</code>](#Device)  
**Summary**: Constant to test if device is oriented in portrait.  
**Access**: public  
<a name="Device.portraitSecondary"></a>

### Device.portraitSecondary ⇒ <code>string</code>
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

## .Document
**Kind**: static class  
**Summary**: Document abstraction  

* [.Document](#Document)
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

## .Event
**Kind**: static class  
**Summary**: Event abstraction  
<a name="Event.mute"></a>

### Event.mute(event) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Event</code>](#Event)  
**Summary**: Hard stops any further activity from passed event.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| event | [<code>Event</code>](#Event) | Event to hard stop. |

