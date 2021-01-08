## Classes

<dl>
<dt><a href="#Token">Token</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#read">read([key])</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#write">write(key, value)</a> ⇒ <code><a href="#Token">Token</a></code></dt>
<dd></dd>
<dt><a href="#remove">remove(key)</a> ⇒ <code><a href="#Token">Token</a></code></dt>
<dd></dd>
<dt><a href="#sign">sign(key, [algorithm])</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#verify">verify(value, crt, [signature])</a> ⇒ <code><a href="#Token">Promise.&lt;Token&gt;</a></code></dt>
<dd></dd>
</dl>

<a name="Token"></a>

## Token
**Kind**: global class  
**Summary**: a JSON Web Token  
<a name="new_Token_new"></a>

### new Token(payload, [signature])

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | A valid JSON Web Token payload |
| [signature] | <code>string</code> | Optional signature to verify token origin. This can be useful as an added security measure to ensure the token originated from the expected origin to prevent CSRF attacks. Generate a signature and store it in a secure location, e.g. HttpOnly cookie. Then, pass this signature value to the Token.verify static method upon verification to confirm token origin. |

<a name="read"></a>

## read([key]) ⇒ <code>\*</code>
**Kind**: global function  
**Summary**: Reads the value at specified key or returns
the entire payload if no key is specified.  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | Key to read. |

<a name="write"></a>

## write(key, value) ⇒ [<code>Token</code>](#Token)
**Kind**: global function  
**Summary**: Writes a value to the payload  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Key for value to write. |
| value | <code>string</code> | Value to write. |

<a name="remove"></a>

## remove(key) ⇒ [<code>Token</code>](#Token)
**Kind**: global function  
**Summary**: Removes specified key.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Key to remove. |

<a name="sign"></a>

## sign(key, [algorithm]) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  
**Summary**: Returns a signed JWT  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>Buffer</code> |  | The private key to sign this token. |
| [algorithm] | <code>string</code> | <code>&quot;&#x27;RS256&#x27;&quot;</code> | The algorithm to use to sign. |

<a name="verify"></a>

## verify(value, crt, [signature]) ⇒ [<code>Promise.&lt;Token&gt;</code>](#Token)
**Kind**: global function  
**Summery**: Verifies a signed JWT and returns a Token if valid over the
passed public certificate.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | A signed JWT. |
| crt | <code>Buffer</code> | The public certificate to verify the passed value against |
| [signature] | <code>string</code> | Optional signature to verify origin of token. This can be useful as an added security measure to ensure the token originated from the expected origin to prevent CSRF attacks. |

