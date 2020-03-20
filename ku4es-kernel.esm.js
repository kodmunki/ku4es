class t{static isNull(t){return null===t}static isEmpty(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1}static isUndefined(t){return void 0===t}static isZero(t){return 0===t}static exists(e){return!(t.isUndefined(e)||t.isNull(e))}static isNullOrEmpty(e){return!t.exists(e)||t.isEmpty(e)}static isArray(t){return Array.isArray(t)}static isBool(t){return"boolean"==typeof t}static isTrue(e){return t.isBool(e)&&!0===e}static isFalse(e){return t.isBool(e)&&!1===e}static isDate(t){return t instanceof Date}static isNumber(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}static isEven(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}static isOdd(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}static isString(t){return"string"==typeof t||t instanceof String}static isFunction(t){return t instanceof Function}static isObject(e){return t.exists(e)&&"object"==typeof e&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))}static isObjectLiteral(e){return t.isObject(e)&&e.constructor==={}.constructor}static isTruthy(e){return!t.isFalsy(e)}static isFalsy(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)}}function e(...t){return"".concat(...t)}function r(t,...e){return e.reduce((t,e,r)=>t.replace(new RegExp(`\\{${r}\\}`,"g"),e.toString()),t)}function s(t){return i(n(t))}function i(e){return t.exists(e)&&t.isFunction(e.replace)?e.replace(/^[\s\n]*/,""):e}function n(e){return t.exists(e)&&t.isFunction(e.replace)?e.replace(/[\s\n]*$/,""):e}function a(t=""){return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()}class u{constructor(t="",e="",r=""){this._first=t||"",this._middle=e||"",this._last=r||""}get first(){return this._first}get middle(){return this._middle}get last(){return this._last}get full(){const e=t.isNullOrEmpty(this.middle)?"F L":"F M L";return s(this.toString(e).replace(/\s+/," "))}get initials(){const e=t.isNullOrEmpty(this.middle)?"f.l.":"f.m.l.";return s(this.toString(e).replace(/\s{2,}/,""))}equals(e){return t.exists(e)&&e.first===this.first&&e.middle===this.middle&&e.last===this.last}toString(e){const r=this.first.charAt(0),s=this.middle.charAt(0),i=this.last.charAt(0);return t.isNullOrEmpty(e)?this.full:e.replace(/([FfMmLl])/g,"{$1}").replace("{F}",this.first).replace("{M}",this.middle).replace("{L}",this.last).replace("{f}",r).replace("{m}",s).replace("{l}",i)}}let o;class c{constructor(t,e,r){if(e<1||e>12)throw new Error("Invalid month at Assert.DayPoint");if(r<1||r>h(e,t))throw new Error("Invalid date at DayPoint");this.value=arguments.length>=3?new Date(t,e-1,r):new Date,this.day=this.value.getDay(),this.date=r,this.month=e,this.year=t}get shortYear(){const t=this.year.toString();return parseInt(t.substr(t.length-2))}get isWeekday(){const t=this.day;return t>0&&t<6}get isWeekend(){return!this.isWeekday}get isLeapYear(){return l(this.year)}get nextDay(){return d(this,1,0,0)}get prevDay(){return d(this,-1,0,0)}get nextMonth(){return d(this,0,1,0)}get prevMonth(){return d(this,0,-1,0)}get nextYear(){return d(this,0,0,1)}get prevYear(){return d(this,0,0,-1)}get firstDayOfMonth(){return new c(this.year,this.month,1)}get lastDayOfMonth(){return new c(this.year,this.month,h(this.month,this.year))}add(t,e,r){function s(t,e,r){let s=t,i=e;for(;i--;)s=s[r];return s}const{abs:i}=Math,n=i(t),a=i(r),u=i(e),o=r<0?"prevDay":"nextDay",c=e<0?"prevMonth":"nextMonth";return s(s(s(this,n,t<0?"prevYear":"nextYear"),u,c),a,o)}isBefore(t){return!(this.isAfter(t)||this.equals(t))}isAfter(t){const e=this.year,r=t.year,s=this.month,i=t.month;return e>r||(e===r&&s>i||e===r&&s===i&&this.date>t.date)}equals(t){return this.year===t.year&&this.month===t.month&&this.date===t.date}toString(t="mm/dd/yyyy"){const e=/y{3,}/i.test(t)?this.year:this.shortYear,s=this.month,i=this.date,n=/m{2}/i.test(t)&&s<10?"0{1}":"{1}",a=/d{2}/i.test(t)&&i<10?"0{2}":"{2}";return r(t.replace(/y+/gi,"{0}").replace(/m+/gi,n).replace(/d+/gi,a),e,s,i)}toDate(){return this.value}toJson(){return this.value.toJSON()}static canParse(e){return!!(t.isString(e)||t.isNumber(e)||t.isDate(e))&&!isNaN(new Date(e).valueOf())}static parse(e){if(e instanceof c)return e;let i=t.isString(e)?s(e).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):e;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(i)){const t=i.split("-"),[e]=t;t.push(e),t.shift(),i=t.join("/")}const n=new Date(i);if(!t.exists(i)||isNaN(n.valueOf()))throw new Error(r("Cannot parse value= {0}",i));return new c(n.getFullYear(),n.getMonth()+1,n.getDate())}static tryParse(t){return c.canParse(t)?c.parse(t):null}static assumeNow(t){o=c.parse(t)}static get today(){return o||c.parse(new Date)}}function h(e,r){return 2===e?l(r)?29:28:e<8&&t.isEven(e)||e>7&&t.isOdd(e)?30:31}function l(t){const r=t.toString().split(/\B/);return parseFloat(e(r[r.length-2],r[r.length-1]))%4==0}function d(t,e,r,s){const i=t.month,n=t.year,a=t.date,u=r,o=s;let l=a+e,d=i+u,y=n+o;if(a+e>h(i,n)&&(l=1,d=i+u+1),a+e<1){const e=t.prevMonth;l=h(e.month,e.year),d=i+u-1}return d>12&&(d=1,y=n+o+1),d<1&&(d=12,y=n+o-1),new c(y,d,l)}function y(t,e=0){const r=Math.pow(10,-e);return Math.round(parseFloat((t*r).toFixed(Math.abs(e))))/r}function f(t,e=0){return y(t+5*Math.pow(10,e-1),e)}function p(t,e=0){if(0===t)return 0;return y(t-5*Math.pow(10,e-1),e)}function m(t,e=0){return t<0?f(t,e):p(t,e)}function w(t,e){return 0===e?Math.abs(t):w(e,t%e)}function g(t,e=0){const r=parseInt(t);return isNaN(r)?e:r}function x(t,e=0){const r=parseFloat(t);return isNaN(r)?e:r}class v{constructor(e=0,r){if(!t.isNumber(e))throw new Error("Money requires valid numeric amount.");const s=m(e);this.cents=/\./.test(e)?parseFloat(e.toString().replace(/\d+\./,".")):0,this.dollars=s,this.currency=r||"$",this.value=e}add(t){return N(this,t),new v(this.value+t.value,this.currency)}subtract(t){return N(this,t),new v(this.value-t.value,this.currency)}multiply(e){if(!t.isNumber(e))throw new Error(`Invalid factor ${e}`);return new v(this.value*e,this.currency)}divide(e){if(!t.isNumber(e))throw new Error(`Invalid divisor ${e}`);return new v(this.value/e,this.currency)}equals(t){return this.isOfCurrency(t)&&this.value===t.value}isGreaterThan(t){return N(this,t),this.value>t.value}isLessThan(t){return N(this,t),this.value<t.value}get nearestWhole(){return new v(y(this.value,0),this.currency)}get nearestDollar(){return this.nearestWhole}round(t=-2){return new v(y(this.value,t),this.currency)}roundDown(t=-2){return new v(p(this.value,t),this.currency)}roundUp(t=-2){return new v(f(this.value,t),this.currency)}exchange(t,e){return new v(this.multiply(t).value,e)}isOfCurrency(t){return this.currency===t.currency}toString(t="d.c2"){const[,e,r]=/d(.)c(\d+)/.exec(t),s={".":",",",":"."}[e],i=function(t,e){if(0===t)return"0";const r=t.toString().replace(/[^\d]/,"").split(/\B/);let s=0;return r.reverse().reduce((t,r)=>(s>0&&!(s%3)&&(t.push(e),s=0),t.push(r),s++,t),[]).reverse().join("").replace(/[^\d]$/,"")}(this.dollars,s),n=function(t,e){const r=t.toString().replace(/[^\d]|0\./g,""),s="0".repeat(e);return`${r}${s}`.slice(0,e)}(this.cents,g(r,2)),a=`${this.currency}${i}${e}${n}`;return this.value<0?`(${a})`:a}static zero(t){return new v(0,t)}static isMoney(t){return t instanceof v}static canParse(t){try{return v.parse(t),!0}catch(t){return!1}}static parse(e){if(t.isNumber(e))return new v(e);let r=e;if(/,\d{2}$/.test(e)){const t=e.split(","),s=t.pop();r=`${t.join().replace(/\./g,",")}.${s}`}const s=/(\(.*\))|(-)/.test(r),i=s?1:0,n=r.match(/[^\d.,-]/g),a=t.isArray(n)?n[i]:null,u=parseFloat(r.replace(/[^\d.]/g,""));return new v(s?-u:u,a)}static tryParse(t){return v.canParse(t)?v.parse(t):null}}function N(t,e){if(!t.isOfCurrency(e))throw new Error(`Invalid operation on non-conforming currencies. ${t.currency} !== ${e.currency}`)}class b{constructor(e=0,r=0){if(!t.isNumber(e)||!t.isNumber(r))throw new Error("Coord requires numeric x and y values");this.x=e,this.y=r}abs(){return new b(Math.abs(this.x),Math.abs(this.y))}add(t){return new b(this.x+t.x,this.y+t.y)}divide(t){return new b(this.x/t.x,this.y/t.y)}equals(t){return this.x===t.x&&this.y===t.y}multiply(t){return new b(this.x*t.x,this.y*t.y)}subtract(t){return new b(this.x-t.x,this.y-t.y)}round(t=0){return new b(y(this.x,t),y(this.y,t))}half(){return this.divide(new b(2,2))}value(){return{x:this.x,y:this.y}}toString(){return`(${this.x},${this.y})`}static canParse(e){return t.isArray(e)?!(isNaN(e[0])||isNaN(e[1])):t.isObjectLiteral(e)&&"x"in e&&"y"in e?!(isNaN(e.x)||isNaN(e.y)):e instanceof b}static parse(e){return t.exists(e)?e instanceof b?e:t.isArray(e)?new b(e[0],e[1]):t.isObjectLiteral(e)&&t.exists(e.x)&&t.exists(e.y)?new b(e.x,e.y):null:null}static tryParse(t){return b.canParse(t)?b.parse(t):null}}class A extends b{constructor(t=0,e=0){super(t,e),this.lengthSquared=Math.pow(t,2)+Math.pow(e,2),this.magnitude=Math.sqrt(this.lengthSquared),this.unitNormalX=0===t&&0===e?0:t/this.magnitude,this.unitNormalY=0===t&&0===e?0:e/this.magnitude}isZero(){return 0===this.x&&0===this.y}equals(t){return t instanceof A&&this.x===t.x&&this.y===t.y}normal(){return new A(this.unitNormalX,this.unitNormalY)}invert(){return new A(-this.x,-this.y)}norm(){return new A(Math.abs(this.x),Math.abs(this.y))}perpendicular(){return new A(-this.y,this.x)}add(t){return t instanceof A?new A(this.x+t.x,this.y+t.y):null}dot(t){return t instanceof A?this.x*t.x+this.y*t.y:null}perpendicularAtTo(t){if(!(t instanceof A))return null;const e=t.add(this.projectionOfOnto(t).invert());return new A(e.x,e.y)}projectionOfOnto(t){if(!(t instanceof A))return null;const e=t.normal().scale(this.dot(t.normal()));return new A(e.x,e.y)}scale(t){return new A(this.x*t,this.y*t)}unitNormalDot(t){return t instanceof A?this.normal().x*t.normal().x+this.normal().y*t.normal().y:null}reflect(t){if(!(t instanceof A))return null;if(t.isZero())return this;const e=t.normal();return this.add(e.scale(2*e.dot(this)).invert())}round(t=0){return new A(y(this.x,t),y(this.y,t))}}class S extends b{constructor(t,e){super(t,e)}isAbove(t){return this.y<t.y}isBelow(t){return this.y>t.y}isLeftOf(t){return this.x<t.x}isRightOf(t){return this.x>t.x}distanceFrom(t){return new A(this.x-t.x,this.y-t.y)}distanceTo(t){return this.distanceFrom(t).invert()}static canParse(t){return t instanceof S||b.canParse(t)}static parse(t){if(t instanceof S)return t;const e=b.parse(t);return new S(e.x,e.y)}static tryParse(t){return S.canParse(t)?S.parse(t):null}}class ${constructor(t=0,e=0,r=0,s=0){this.origin=new S(t,e),this.dimensions=new b(r,s),this.diagonal=S.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half()}contains(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)}aspectToFit(t){const e=this.dimensions,r=t.dimensions,s=r.x,i=r.y;let n=e.x,a=e.y;return n>a&&0!==n?(a*=s/n,n=s,a>i&&(a=i,n*=a/e.y)):a>i&&(n*=i/a,a=i),new $(this.origin.x,this.origin.y,n,a)}}function O(){return Math.random().toString().substr(2)}function M(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}class B{constructor(){if(this.constructor===B)throw new Error("Cannot instantiate abstract class: AbstractSpecification")}and(t){return new F(this,t)}or(t){return new _(this,t)}xor(t){return new D(this,t)}not(t){return new E(this,t)}isSatisfiedBy(){throw new Error("Abstract method must be implemented.")}}class F extends B{constructor(t,e){super(),this._specificationA=t,this._specificationB=e}isSatisfiedBy(t){return this._specificationA.isSatisfiedBy(t)&&this._specificationB.isSatisfiedBy(t)}}class _ extends B{constructor(t,e){super(),this._specificationA=t,this._specificationB=e}isSatisfiedBy(t){return this._specificationA.isSatisfiedBy(t)||this._specificationB.isSatisfiedBy(t)}}class D extends B{constructor(t,e){super(),this._specificationA=t,this._specificationB=e}isSatisfiedBy(t){return!this._specificationA.isSatisfiedBy(t)!=!this._specificationB.isSatisfiedBy(t)}}class E extends B{constructor(t){super(),this._specification=t}isSatisfiedBy(t){return!this._specification.isSatisfiedBy(t)}}class P{constructor(){if(this.constructor===P)throw new Error("Cannot instantiate abstract class.")}execute(){throw new Error("Abstract method must be implemented.")}}var j=(t,e,r=!1)=>{let s;return(...i)=>{const n=r&&!s;clearTimeout(s),s=setTimeout(()=>{s=null,r||t(...i)},e),n&&t(...i)}};var z=Object.freeze({__proto__:null,alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i}),L=t=>setTimeout(t,0),T=t=>new Promise(e=>setTimeout(e,t));export{B as AbstractSpecification,P as AbstractStrategy,t as Assert,b as Coord,c as DayPoint,v as Money,u as Name,S as Point,$ as Rectangle,A as Vector,e as build,a as capitalize,j as debounce,r as format,w as gcd,L as nextTick,z as regex,y as round,p as roundDown,m as roundTowardZero,f as roundUp,s as trim,n as trimEnd,i as trimStart,x as tryParseFloat,g as tryParseInt,O as uid,M as uuid,T as wait};
