# utils
kodmunki utilities

## Bookmarklets
Save the following code snippets as bookmarks in your target browser to load the target ku4 suite and use it on that page.

```
javascript:void((function(){
var script=document.createElement('script');
script.type='text/javascript';
script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window["ku4es-kernel"])};
script.src='https://cdn.jsdelivr.net/gh/kodmunki/utils/ku4es-kernel.js';
document.head.appendChild(script);
})());

```

### ku4es-kernel
```
javascript:void((function(){var script=document.createElement('script');script.type='text/javascript';script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window["ku4es-kernel"])};script.src='https://cdn.jsdelivr.net/gh/kodmunki/utils/ku4es-kernel.js';document.head.appendChild(script);})());

```


### ku4es-ui-kernel
```
javascript:void((function(){var script=document.createElement('script');script.type='text/javascript';script.onload=function(){window.ku4=Object.assign(window.ku4 || {}, window["ku4es-ui-kernel"])};script.src='https://cdn.jsdelivr.net/gh/kodmunki/utils/ku4es-ui-kernel.js';document.head.appendChild(script);})());

```
