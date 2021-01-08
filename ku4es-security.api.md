<a name="Token"></a>

## Token
**Kind**: global class  
**Summary**: a JSON Web Token  

* [Token](#Token)
    * [new Token(payload, [signature], [readonly])](#new_Token_new)
    * [.payload](#Token+payload) ⇒ <code>Object</code>
    * [.readonly](#Token+readonly) ⇒ <code>boolean</code>
    * [.read([key])](#Token+read) ⇒ <code>\*</code>
    * [.write(key, value)](#Token+write) ⇒ [<code>Token</code>](#Token)
    * [.remove(key)](#Token+remove) ⇒ [<code>Token</code>](#Token)
    * [.sign(key, [algorithm])](#Token+sign) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.verify(jwt, crt, [signature])](#Token+verify) ⇒ [<code>Promise.&lt;Token&gt;</code>](#Token)
    * [.parse(jwt)](#Token+parse) ⇒ [<code>Token</code>](#Token)

<a name="new_Token_new"></a>

### new Token(payload, [signature], [readonly])

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | A valid JSON Web Token payload |
| [signature] | <code>string</code> \| <code>null</code> | Optional signature to verify token origin. This can be useful as an added security measure to ensure the token originated from the expected origin to prevent CSRF attacks. Generate a signature and store it in a secure location, e.g. HttpOnly cookie. Then, pass this signature value to the Token.verify static method upon verification to confirm token origin. |
| [readonly] | <code>boolean</code> | - Creates a readonly token when true. |

<a name="Token+payload"></a>

### token.payload ⇒ <code>Object</code>
**Kind**: instance property of [<code>Token</code>](#Token)  
**Summary**: An object value of this Token's payload.
Although it is recommended to use the `read` and `write`
methods of Token, this method can be useful if you use
Token to store a flat data structure that you intend to
operate on with other ES* methods.  
**Access**: public  
<a name="Token+readonly"></a>

### token.readonly ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Token</code>](#Token)  
**Summary**: Returns true if this Token is readonly  
**Access**: public  
<a name="Token+read"></a>

### token.read([key]) ⇒ <code>\*</code>
**Kind**: instance method of [<code>Token</code>](#Token)  
**Summary**: Reads the value at specified key or returns
the entire payload if no key is specified.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | Key to read. |

<a name="Token+write"></a>

### token.write(key, value) ⇒ [<code>Token</code>](#Token)
**Kind**: instance method of [<code>Token</code>](#Token)  
**Summary**: Writes a value to the payload  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Key for value to write. |
| value | <code>string</code> | Value to write. |

<a name="Token+remove"></a>

### token.remove(key) ⇒ [<code>Token</code>](#Token)
**Kind**: instance method of [<code>Token</code>](#Token)  
**Summary**: Removes specified key.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Key to remove. |

<a name="Token+sign"></a>

### token.sign(key, [algorithm]) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>Token</code>](#Token)  
**Summary**: Returns a signed JWT  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>Buffer</code> |  | The private key to sign this token. |
| [algorithm] | <code>string</code> | <code>&quot;&#x27;RS256&#x27;&quot;</code> | The algorithm to use to sign. |

<a name="Token+verify"></a>

### token.verify(jwt, crt, [signature]) ⇒ [<code>Promise.&lt;Token&gt;</code>](#Token)
**Kind**: instance method of [<code>Token</code>](#Token)  
**Summary**: Verifies a signed JWT and returns a Token if valid over the
passed public certificate.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| jwt | <code>string</code> | A signed JWT. |
| crt | <code>Buffer</code> | The public certificate to verify the passed value against |
| [signature] | <code>string</code> | Optional signature to verify origin of token. This can be useful as an added security measure to ensure the token originated from the expected origin to prevent CSRF attacks. |

<a name="Token+parse"></a>

### token.parse(jwt) ⇒ [<code>Token</code>](#Token)
**Kind**: instance method of [<code>Token</code>](#Token)  
**Summary**: !!!WARNING - This is not a secure method and
should not be run on your server. Use `Token.verify` on
your server to ensure Token integrity!!! This method is
safe to run on your client and useful for an isomorphic
javascript token implementation. This method parses a Token
from a signed JWT, but does NOT verify paylaod. This enables
readonly access  
**Access**: public  

| Param | Description |
| --- | --- |
| jwt | A signed JWT. |

