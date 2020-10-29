## Classes

<dl>
<dt><a href="#BinaryFile">BinaryFile</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#toBlob">toBlob(contentType)</a> ⇒ <code>Blob</code></dt>
<dd></dd>
<dt><a href="#parseDataUrl">parseDataUrl(dataUrl)</a> ⇒ <code><a href="#BinaryFile">BinaryFile</a></code></dt>
<dd></dd>
<dt><a href="#createBlobFromBinaryArray">createBlobFromBinaryArray(binaryArray, mimeType)</a> ⇒ <code>Blob</code></dt>
<dd></dd>
<dt><a href="#createBlobFromDataUrl">createBlobFromDataUrl(dataUrl)</a> ⇒ <code>Blob</code></dt>
<dd></dd>
<dt><a href="#readExifDataInDataUrl">readExifDataInDataUrl(dataUrl)</a> ⇒ <code>Object</code> | <code>Object</code></dt>
<dd></dd>
<dt><a href="#blobFromSrc">blobFromSrc(src, [options])</a> ⇒ <code>Promise.&lt;Blob&gt;</code></dt>
<dd></dd>
<dt><a href="#dataUrlFromSrc">dataUrlFromSrc(src, [options])</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#dataUrlFromFile">dataUrlFromFile(file, [options])</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#blobFromFile">blobFromFile(file, [options])</a> ⇒ <code>Promise.&lt;Blob&gt;</code></dt>
<dd></dd>
</dl>

<a name="BinaryFile"></a>

## BinaryFile
**Kind**: global class  
**Summary**: A binary file abstraction that exposes methods for
reading data from a binary file.  
<a name="new_BinaryFile_new"></a>

### new BinaryFile(byteString)

| Param |
| --- |
| byteString | 

<a name="toBlob"></a>

## toBlob(contentType) ⇒ <code>Blob</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| contentType | <code>string</code> | 

<a name="parseDataUrl"></a>

## parseDataUrl(dataUrl) ⇒ [<code>BinaryFile</code>](#BinaryFile)
**Kind**: global function  

| Param |
| --- |
| dataUrl | 

<a name="createBlobFromBinaryArray"></a>

## createBlobFromBinaryArray(binaryArray, mimeType) ⇒ <code>Blob</code>
**Kind**: global function  
**Summary**: Creates a Blob from a binary array, e.g. Uint16Array  

| Param | Type |
| --- | --- |
| binaryArray | <code>TypedArray</code> | 
| mimeType | <code>string</code> | 

<a name="createBlobFromDataUrl"></a>

## createBlobFromDataUrl(dataUrl) ⇒ <code>Blob</code>
**Kind**: global function  
**Summary**: Creates a blob from a dataURL  

| Param | Type |
| --- | --- |
| dataUrl | <code>string</code> | 

<a name="readExifDataInDataUrl"></a>

## readExifDataInDataUrl(dataUrl) ⇒ <code>Object</code> \| <code>Object</code>
**Kind**: global function  
**Summary**: Reads exif data out of a dataURL  

| Param | Type |
| --- | --- |
| dataUrl | <code>string</code> | 

<a name="blobFromSrc"></a>

## blobFromSrc(src, [options]) ⇒ <code>Promise.&lt;Blob&gt;</code>
**Kind**: global function  
**Summary**: Convert an image at src url to blob  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | path to target image |
| [options] | <code>Object</code> |  |
| options.crossOrigin | <code>boolean</code> | Set to true to support cross origin sources. |
| options.mimeType | <code>string</code> | A valid MIME type. |
| options.maxAttempts | <code>number</code> | The maximum number of attempts to convert before timeout. |
| options.maxDims | <code>number</code> |  |
| options.maxDims.width | <code>number</code> | Maximum width of converted asset |
| options.maxDims.height | <code>number</code> | Maximum height of converted asset |

<a name="dataUrlFromSrc"></a>

## dataUrlFromSrc(src, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  
**Summary**: Convert an image at src url to a dataURL  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | path to target image |
| [options] | <code>Object</code> |  |
| options.crossOrigin | <code>boolean</code> | Set to true to support cross origin sources. |
| options.mimeType | <code>string</code> | A valid MIME type. |
| options.maxAttempts | <code>number</code> | The maximum number of attempts to convert before timeout. |
| options.maxDims | <code>number</code> |  |
| options.maxDims.width | <code>number</code> | Maximum width of converted asset |
| options.maxDims.height | <code>number</code> | Maximum height of converted asset |

<a name="dataUrlFromFile"></a>

## dataUrlFromFile(file, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  
**Summary**: Convert an image file to a dataURL  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>File</code> | File to convert |
| [options] | <code>Object</code> |  |
| options.crossOrigin | <code>boolean</code> | Set to true to support cross origin sources. |
| options.mimeType | <code>string</code> | A valid MIME type. |
| options.maxAttempts | <code>number</code> | The maximum number of attempts to convert before timeout. |
| options.maxDims | <code>number</code> |  |
| options.maxDims.width | <code>number</code> | Maximum width of converted asset |
| options.maxDims.height | <code>number</code> | Maximum height of converted asset |

<a name="blobFromFile"></a>

## blobFromFile(file, [options]) ⇒ <code>Promise.&lt;Blob&gt;</code>
**Kind**: global function  
**Summary**: Convert an image file to a Blob  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>File</code> | File to convert |
| [options] | <code>Object</code> |  |
| options.crossOrigin | <code>boolean</code> | Set to true to support cross origin sources. |
| options.mimeType | <code>string</code> | A valid MIME type. |
| options.maxAttempts | <code>number</code> | The maximum number of attempts to convert before timeout. |
| options.maxDims | <code>number</code> |  |
| options.maxDims.width | <code>number</code> | Maximum width of converted asset |
| options.maxDims.height | <code>number</code> | Maximum height of converted asset |

