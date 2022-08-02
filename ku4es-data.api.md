## Classes

<dl>
<dt><a href="#BinaryFile">BinaryFile</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#readExif">readExif(file)</a> ⇒ <code>Object</code></dt>
<dd><p>Read the EXIF data out of a valid BinaryFile.</p>
</dd>
<dt><a href="#read">read(file)</a> ⇒ <code>*</code></dt>
<dd><p>Read the EXIF data out of a valid JPG BinaryFile.</p>
</dd>
</dl>

<a name="BinaryFile"></a>

## BinaryFile
**Kind**: global class  

* [BinaryFile](#BinaryFile)
    * [new BinaryFile(byteString)](#new_BinaryFile_new)
    * [.getByteAt(index)](#BinaryFile+getByteAt) ⇒ <code>Number</code>
    * [.getLength()](#BinaryFile+getLength) ⇒ <code>\*</code>
    * [.getStringAt(a, b)](#BinaryFile+getStringAt) ⇒ <code>string</code>
    * [.getShortAt(offset, isBigEndian)](#BinaryFile+getShortAt) ⇒ <code>\*</code>
    * [.getLongAt(offset, isBigEndian)](#BinaryFile+getLongAt) ⇒ <code>\*</code>
    * [.getSLongAt(offset, isBigEndian)](#BinaryFile+getSLongAt) ⇒ <code>number</code>

<a name="new_BinaryFile_new"></a>

### new BinaryFile(byteString)
A binary file abstraction that exposes methods for
reading data from a binary file.


| Param | Description |
| --- | --- |
| byteString | a binary byte string |

<a name="BinaryFile+getByteAt"></a>

### binaryFile.getByteAt(index) ⇒ <code>Number</code>
Return the byte value at index

**Kind**: instance method of [<code>BinaryFile</code>](#BinaryFile)  
**Access**: public  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="BinaryFile+getLength"></a>

### binaryFile.getLength() ⇒ <code>\*</code>
Return the length of the file

**Kind**: instance method of [<code>BinaryFile</code>](#BinaryFile)  
**Access**: public  
<a name="BinaryFile+getStringAt"></a>

### binaryFile.getStringAt(a, b) ⇒ <code>string</code>
Return string value starting at position a of length b

**Kind**: instance method of [<code>BinaryFile</code>](#BinaryFile)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="BinaryFile+getShortAt"></a>

### binaryFile.getShortAt(offset, isBigEndian) ⇒ <code>\*</code>
Return the short value at offset

**Kind**: instance method of [<code>BinaryFile</code>](#BinaryFile)  
**Access**: public  

| Param | Type |
| --- | --- |
| offset | <code>number</code> | 
| isBigEndian | <code>Boolean</code> | 

<a name="BinaryFile+getLongAt"></a>

### binaryFile.getLongAt(offset, isBigEndian) ⇒ <code>\*</code>
Return the long value at offset

**Kind**: instance method of [<code>BinaryFile</code>](#BinaryFile)  
**Access**: public  

| Param | Type |
| --- | --- |
| offset | <code>number</code> | 
| isBigEndian | <code>Boolean</code> | 

<a name="BinaryFile+getSLongAt"></a>

### binaryFile.getSLongAt(offset, isBigEndian) ⇒ <code>number</code>
Return the signed long value at offset

**Kind**: instance method of [<code>BinaryFile</code>](#BinaryFile)  
**Access**: public  

| Param | Type |
| --- | --- |
| offset | <code>number</code> | 
| isBigEndian | <code>Boolean</code> | 

<a name="readExif"></a>

## readExif(file) ⇒ <code>Object</code>
Read the EXIF data out of a valid BinaryFile.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| file | [<code>BinaryFile</code>](#BinaryFile) | A valid JPEG BinaryFile |

<a name="read"></a>

## read(file) ⇒ <code>\*</code>
Read the EXIF data out of a valid JPG BinaryFile.

**Kind**: global function  

| Param | Description |
| --- | --- |
| file | A valid JPG file binary |

