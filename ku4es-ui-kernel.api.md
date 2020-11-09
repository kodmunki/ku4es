## Classes

<dl>
<dt><a href="#Key">Key</a></dt>
<dd></dd>
<dt><a href="#Swipe">Swipe</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#orientation">orientation</a> ⇒ <code>string</code></dt>
<dd><p>Returns the current Device orientation which can be
tested against the available Device orientation
constants to determine the orientation of the device.</p>
</dd>
<dt><a href="#landscapePrimary">landscapePrimary</a> ⇒ <code>string</code></dt>
<dd><p>Constant to test if device is oriented in landscape.</p>
</dd>
<dt><a href="#landscapeSecondary">landscapeSecondary</a> ⇒ <code>string</code></dt>
<dd><p>Constant to test if device is oriented in landscape
and upside-down.</p>
</dd>
<dt><a href="#portraitPrimary">portraitPrimary</a> ⇒ <code>string</code></dt>
<dd><p>Constant to test if device is oriented in portrait.</p>
</dd>
<dt><a href="#portraitSecondary">portraitSecondary</a> ⇒ <code>string</code></dt>
<dd><p>Constant to test if device is oriented in portrait
and upside-down.</p>
</dd>
<dt><a href="#isMobile">isMobile</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if device is mobile</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#readData">readData(form)</a> ⇒ <code>FormData</code></dt>
<dd></dd>
<dt><a href="#read">read(form)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#readJson">readJson(form)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#write">write(form, data)</a></dt>
<dd></dd>
<dt><a href="#encodeBase64">encodeBase64(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#decodeBase64">decodeBase64(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#encodeUtf8">encodeUtf8(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#decodeUtf8">decodeUtf8(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

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
<a name="orientation"></a>

## orientation ⇒ <code>string</code>
Returns the current Device orientation which can be
tested against the available Device orientation
constants to determine the orientation of the device.

**Kind**: global variable  
<a name="landscapePrimary"></a>

## landscapePrimary ⇒ <code>string</code>
Constant to test if device is oriented in landscape.

**Kind**: global variable  
<a name="landscapeSecondary"></a>

## landscapeSecondary ⇒ <code>string</code>
Constant to test if device is oriented in landscape
and upside-down.

**Kind**: global variable  
<a name="portraitPrimary"></a>

## portraitPrimary ⇒ <code>string</code>
Constant to test if device is oriented in portrait.

**Kind**: global variable  
<a name="portraitSecondary"></a>

## portraitSecondary ⇒ <code>string</code>
Constant to test if device is oriented in portrait
and upside-down.

**Kind**: global variable  
<a name="isMobile"></a>

## isMobile ⇒ <code>boolean</code>
Returns true if device is mobile

**Kind**: global variable  
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

## encodeBase64(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Base64 encodes a string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to encode |

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
<a name="Document"></a>

## .Document
**Kind**: static class  
**Summary**: Document abstraction  

* [.Document](#Document)
    * [.isScrollPrevented](#Document.isScrollPrevented) ⇒ <code>boolean</code>
    * [.preventScroll()](#Document.preventScroll)
    * [.resumeScroll()](#Document.resumeScroll)
    * [.on(event, key, method, options)](#Document.on) ⇒ <code>Object</code>
    * [.onKeyPress(key, method, options)](#Document.onKeyPress) ⇒ <code>Object</code>
    * [.onKeyDown(key, method, options)](#Document.onKeyDown) ⇒ <code>Object</code>
    * [.onKeyUp(key, method, options)](#Document.onKeyUp) ⇒ <code>Object</code>

<a name="Document.isScrollPrevented"></a>

### Document.isScrollPrevented ⇒ <code>boolean</code>
**Kind**: static property of [<code>Document</code>](#Document)  
**Summary**: Returns true if document scrolling is prevented  
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

