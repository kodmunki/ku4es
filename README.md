# ku4es
**kodmunki Utilities for ECMAScript**

This project includes links, script tags, and bookmarklets for including some, or all of the 
ku4es stack in your projects.

<table>
    <tr>
        <td rowspan="2" style="text-align:center">
            <a href="#ku4es-ui-data">ku4es-ui-data</a>
        </td>
    </tr>
    <tr>
        <td style="text-align:center">
            <a href="#ku4es-ui-kernel">ku4es-ui-kernel</a>
        </td>
        <td style="text-align:center">
            <a href="#ku4es-data">ku4es-data</a>
        </td>
    </tr>
    <tr>
        <td colspan="2" style="text-align:center">
            <a href="#ku4es-kernel">ku4es-kernel</a>
        </td>
    </tr>
</table>

### ku4es-kernel

ku4es-kernel are core JavaScript entities highly useful in many projects
as a standalone dependency, and the foundation of higher-level ku4es libraries.
[Docs here](ku4es-kernel.api.md).

```html
<script src="https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-kernel.js"></script>
```

#### Bookmarklet

```
javascript:void((function(){var script=document.createElement('script');script.type='text/javascript';script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window.ku4es_kernel)};script.src='https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-kernel.js';document.head.appendChild(script);})());
```

### ku4es-ui-kernel

An incredible suit of UI tools that are succinct, expressive, speak to their
intention and are a joy to code with. Powerful tools for form and keyboard key
management, document control, and complex user actions like swiping.
[Docs here](ku4es-ui-kernel.api.md).

[ku4es-ui-kernel](https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-ui-kernel.js)

```html
<script src="https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-ui-kernel.js"></script>
```

#### Bookmarklet

```
javascript:void((function(){var script=document.createElement('script');script.type='text/javascript';script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window.ku4es_ui_kernel)};script.src='https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-ui-kernel.js';document.head.appendChild(script);})());
```


### ku4es-data

A core suit of tools for reading binary and image file meta data.
[Docs here](ku4es-data.api.md).

[ku4es-data](https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-data.js)

```html
<script src="https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-data.js"></script>
```

#### Bookmarklet

```
javascript:void((function(){var script=document.createElement('script');script.type='text/javascript';script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window.ku4es_data)};script.src='https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-data.js';document.head.appendChild(script);})());
```

### ku4es-ui-data

A  suit of tools binary and image file metadata.
[Docs here](ku4es-data.api.md).

[ku4es-ui-data](https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-ui-data.js)

```html
<script src="https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-ui-data.js"></script>
```

#### Bookmarklet

```
javascript:void((function(){var script=document.createElement('script');script.type='text/javascript';script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window.ku4es_ui_data)};script.src='https://cdn.jsdelivr.net/gh/kodmunki/ku4es/ku4es-ui-data.js';document.head.appendChild(script);})());

```
