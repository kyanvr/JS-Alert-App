var wh=/([:*])(\w+)/g,_h="([^/]+)",Eh=/\*/g,Th="?(?:.*)",Ih=/\/\?/g,Sh="/?([^/]+|)",Ah="(?:/^|^)",kh="";function Lo(t){return t===void 0&&(t="/"),gs()?location.pathname+location.search+location.hash:t}function $(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function Xn(t){return typeof t=="string"}function bh(t){return typeof t=="function"}function Jn(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Rh(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(n,r,s){return n===null&&(n={}),n[e[s]]=decodeURIComponent(r),n},null)}function Yn(t){var e=$(t).split(/\?(.*)?$/);return[$(e[0]),e.slice(1).join("")]}function ps(t){for(var e={},n=t.split("&"),r=0;r<n.length;r++){var s=n[r].split("=");if(s[0]!==""){var i=decodeURIComponent(s[0]);e[i]?(Array.isArray(e[i])||(e[i]=[e[i]]),e[i].push(decodeURIComponent(s[1]||""))):e[i]=decodeURIComponent(s[1]||"")}}return e}function Mo(t,e){var n=Yn($(t.currentLocationPath)),r=n[0],s=n[1],i=s===""?null:ps(s),o=[],a;if(Xn(e.path)){if(a=Ah+$(e.path).replace(wh,function(h,d,g){return o.push(g),_h}).replace(Eh,Th).replace(Ih,Sh)+"$",$(e.path)===""&&$(r)==="")return{url:r,queryString:s,hashString:Jn(t.to),route:e,data:null,params:i}}else a=e.path;var c=new RegExp(a,kh),u=r.match(c);if(u){var l=Xn(e.path)?Rh(u,o):u.groups?u.groups:u.slice(1);return{url:$(r.replace(new RegExp("^"+t.instance.root),"")),queryString:s,hashString:Jn(t.to),route:e,data:l,params:i}}return!1}function Uo(){return!!(typeof window!="undefined"&&window.history&&window.history.pushState)}function Qe(t,e){return typeof t[e]=="undefined"||t[e]===!0}function Ch(t){if(!t)return{};var e=t.split(","),n={},r;return e.forEach(function(s){var i=s.split(":").map(function(o){return o.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":n.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=i[1];break;case"resolveOptionsHash":r||(r={}),r.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[i[0]]=i[1]==="true";break}}),r&&(n.resolveOptions=r),n}function gs(){return typeof window!="undefined"}function Nh(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(r){n[r]&&(e[r]||(e[r]=[]),e[r].push(n[r]))})}),e}function Se(t,e,n){var r=e||{},s=0;(function i(){if(!t[s]){n&&n(r);return}Array.isArray(t[s])?(t.splice.apply(t,[s,1].concat(t[s][0](r)?t[s][1]:t[s][2])),i()):t[s](r,function(o){typeof o=="undefined"||o===!0?(s+=1,i()):n&&n(r)})})()}Se.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};function xo(t,e){typeof t.currentLocationPath=="undefined"&&(t.currentLocationPath=t.to=Lo(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function ms(t,e){for(var n=0;n<t.instance.routes.length;n++){var r=t.instance.routes[n],s=Mo(t,r);if(s&&(t.matches||(t.matches=[]),t.matches.push(s),t.resolveOptions.strategy==="ONE")){e();return}}e()}function Oh(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve!="undefined"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent!="undefined"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function Dh(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var Fo=gs(),Ph=Uo();function Lh(t,e){if(Qe(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),r=Fo&&t.resolveOptions&&t.resolveOptions.hash===!0;Ph?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",r?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!r){var s=location.hash;location.hash="",location.hash=s}t.instance.__freezeListening=!1},1))):Fo&&(window.location.href=t.to)}e()}function Vo(t,e){var n=t.instance;if(!n.lastResolved()){e();return}Se(n.lastResolved().map(function(r){return function(s,i){if(!r.route.hooks||!r.route.hooks.leave){i();return}var o=!1,a=t.instance.matchLocation(r.route.path,t.currentLocationPath,!1);if(r.route.path!=="*")o=!a;else{var c=t.matches?t.matches.find(function(u){return r.route.path===u.route.path}):!1;o=!c}if(Qe(t.navigateOptions,"callHooks")&&o){Se(r.route.hooks.leave.map(function(u){return function(l,h){return u(function(d){d===!1?t.instance.__markAsClean(t):h()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return e()})}function Mh(t,e){t.match.route.hooks&&t.match.route.hooks.before&&Qe(t.navigateOptions,"callHooks")?Se(t.match.route.hooks.before.map(function(n){return function(s,i){return n(function(o){o===!1?t.instance.__markAsClean(t):i()},t.match)}}).concat([function(){return e()}])):e()}function Uh(t,e){Qe(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function xh(t,e){t.match.route.hooks&&t.match.route.hooks.after&&Qe(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(n){return n(t.match)}),e()}function Fh(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString){n.forEach(function(r){r.route.hooks&&r.route.hooks.already&&Qe(t.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(s){return s(t.match)})}),e(!1);return}e()}function Vh(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var r=Yn(t.currentLocationPath),s=r[0],i=r[1],o=Jn(t.to);n.path=$(s);var a={url:n.path,queryString:i,hashString:o,data:null,route:n,params:i!==""?ps(i):null};t.matches=[a],t.match=a}e()}function Bh(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning=="undefined")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function $h(t,e){t.instance._setCurrent(null),e()}function Bo(t,e){Qe(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var $o=[Fh,Mh,Uh,xh],qo=[Vo,Vh,Se.if(function(t){var e=t.notFoundHandled;return e},$o.concat([Bo]),[Bh,$h])];function ys(){return ys=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ys.apply(this,arguments)}function jo(t,e){var n=0;function r(){if(n===t.matches.length){Bo(t,e);return}Se($o,ys({},t,{match:t.matches[n]}),function(){n+=1,r()})}Vo(t,r)}function vs(t){t.instance.__markAsClean(t)}function ws(){return ws=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ws.apply(this,arguments)}var Ho="[data-navigo]";function Fw(t,e){var n=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ho},r=this,s="/",i=null,o=[],a=!1,c,u=Uo(),l=gs();t?s=$(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function h(f){return f.indexOf("#")>=0&&(n.hash===!0?f=f.split("#")[1]||"/":f=f.split("#")[0]),f}function d(f){return $(s+"/"+$(f))}function g(f,w,C,x){return f=Xn(f)?d(f):f,{name:x||$(String(f)),path:f,handler:w,hooks:Nh(C)}}function m(f,w,C){var x=this;return typeof f=="object"&&!(f instanceof RegExp)?(Object.keys(f).forEach(function(D){if(typeof f[D]=="function")x.on(D,f[D]);else{var Ie=f[D],Xt=Ie.uses,yh=Ie.as,vh=Ie.hooks;o.push(g(D,Xt,[c,vh],yh))}}),this):(typeof f=="function"&&(C=w,w=f,f=s),o.push(g(f,w,[c,C])),this)}function k(f,w){if(r.__dirty){r.__waiting.push(function(){return r.resolve(f,w)});return}else r.__dirty=!0;f=f?$(s)+"/"+$(f):void 0;var C={instance:r,to:f,currentLocationPath:f,navigateOptions:{},resolveOptions:ws({},n,w)};return Se([xo,ms,Se.if(function(x){var D=x.matches;return D&&D.length>0},jo,qo)],C,vs),C.matches?C.matches:!1}function T(f,w){if(r.__dirty){r.__waiting.push(function(){return r.navigate(f,w)});return}else r.__dirty=!0;f=$(s)+"/"+$(f);var C={instance:r,to:f,navigateOptions:w||{},resolveOptions:w&&w.resolveOptions?w.resolveOptions:n,currentLocationPath:h(f)};Se([Oh,Dh,ms,Se.if(function(x){var D=x.matches;return D&&D.length>0},jo,qo),Lh,vs],C,vs)}function z(f,w,C){var x=Oo(f,w);return x!==null?(T(x.replace(new RegExp("^/?"+s),""),C),!0):!1}function j(f){return this.routes=o=o.filter(function(w){return Xn(f)?$(w.path)!==$(f):bh(f)?f!==w.handler:String(w.path)!==String(f)}),this}function H(){u&&(this.__popstateListener=function(){r.__freezeListening||k()},window.addEventListener("popstate",this.__popstateListener))}function U(){this.routes=o=[],u&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=a=!0}function _e(f,w){return r._notFoundRoute=g("*",f,[c,w],"__NOT_FOUND__"),this}function Ee(){if(!!l)return Ne().forEach(function(f){if(f.getAttribute("data-navigo")==="false"||f.getAttribute("target")==="_blank"){f.hasListenerAttached&&f.removeEventListener("click",f.navigoHandler);return}f.hasListenerAttached||(f.hasListenerAttached=!0,f.navigoHandler=function(w){if((w.ctrlKey||w.metaKey)&&w.target.tagName.toLowerCase()==="a")return!1;var C=f.getAttribute("href");if(typeof C=="undefined"||C===null)return!1;if(C.match(/^(http|https)/)&&typeof URL!="undefined")try{var x=new URL(C);C=x.pathname+x.search}catch{}var D=Ch(f.getAttribute("data-navigo-options"));a||(w.preventDefault(),w.stopPropagation(),r.navigate($(C),D))},f.addEventListener("click",f.navigoHandler))}),r}function Ne(){return l?[].slice.call(document.querySelectorAll(n.linksSelector||Ho)):[]}function Ye(f){return"/"+s+"/"+$(f)}function Gt(f){return c=f,this}function fs(){return i}function Oo(f,w,C){var x=o.find(function(Xt){return Xt.name===f}),D=null;if(x){if(D=x.path,w)for(var Ie in w)D=D.replace(":"+Ie,w[Ie]);D=D.match(/^\//)?D:"/"+D}return D&&C&&!C.includeRoot&&(D=D.replace(new RegExp("^/"+s),"")),D}function dh(f){return f.getAttribute("href")}function Do(f){var w=Yn($(f)),C=w[0],x=w[1],D=x===""?null:ps(x),Ie=Jn(f),Xt=g(C,function(){},[c],C);return{url:C,queryString:x,hashString:Ie,route:Xt,data:null,params:D}}function fh(){return Do($(Lo(s)).replace(new RegExp("^"+s),""))}function ph(f){var w={instance:r,currentLocationPath:f,to:f,navigateOptions:{},resolveOptions:n};return ms(w,function(){}),w.matches?w.matches:!1}function gh(f,w,C){typeof w!="undefined"&&(typeof C=="undefined"||C)&&(w=d(w));var x={instance:r,to:w,currentLocationPath:w};xo(x,function(){}),typeof f=="string"&&(f=typeof C=="undefined"||C?d(f):f);var D=Mo(x,{name:String(f),path:f,handler:function(){},hooks:{}});return D||!1}function Gn(f,w,C){return typeof w=="string"&&(w=Po(w)),w?(w.hooks[f]||(w.hooks[f]=[]),w.hooks[f].push(C),function(){w.hooks[f]=w.hooks[f].filter(function(x){return x!==C})}):(console.warn("Route doesn't exists: "+w),function(){})}function Po(f){return typeof f=="string"?o.find(function(w){return w.name===d(f)}):o.find(function(w){return w.handler===f})}function mh(f){f.instance.__dirty=!1,f.instance.__waiting.length>0&&f.instance.__waiting.shift()()}this.root=s,this.routes=o,this.destroyed=a,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=mh,this.on=m,this.off=j,this.resolve=k,this.navigate=T,this.navigateByName=z,this.destroy=U,this.notFound=_e,this.updatePageLinks=Ee,this.link=Ye,this.hooks=Gt,this.extractGETParameters=function(f){return Yn(h(f))},this.lastResolved=fs,this.generate=Oo,this.getLinkPath=dh,this.match=ph,this.matchLocation=gh,this.getCurrentLocation=fh,this.addBeforeHook=Gn.bind(this,"before"),this.addAfterHook=Gn.bind(this,"after"),this.addAlreadyHook=Gn.bind(this,"already"),this.addLeaveHook=Gn.bind(this,"leave"),this.getRoute=Po,this._pathToMatchObject=Do,this._clean=$,this._checkForAHash=h,this._setCurrent=function(f){return i=r.current=f},H.call(this),Ee.call(this)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),r.push(n[l],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zh=function(t){try{return Hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function Wo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ko(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kh(){return J().indexOf("Electron/")>=0}function Go(){const t=J();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gh(){return J().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="FirebaseError";class Ze extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Xh,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ze(s,a,r)}}function Jh(t,e){return t.replace(Yh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yh=/\{\$([^}]+)}/g;function Qh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xo(i)&&Xo(o)){if(!Qn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zh(t,e){const n=new ed(t,e);return n.subscribe.bind(n)}class ed{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");td(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_s),s.error===void 0&&(s.error=_s),s.complete===void 0&&(s.complete=_s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function td(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return t&&t._delegate?t._delegate:t}class et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sd(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rd(t){return t===tt?void 0:t}function sd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));const od={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},ad=O.INFO,cd={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ud=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Es{constructor(e){this.name=e,this._logLevel=ad,this._logHandler=ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",Jo="0.7.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Es("@firebase/app"),dd="@firebase/app-compat",fd="@firebase/analytics-compat",pd="@firebase/analytics",gd="@firebase/app-check-compat",md="@firebase/app-check",yd="@firebase/auth",vd="@firebase/auth-compat",wd="@firebase/database",_d="@firebase/database-compat",Ed="@firebase/functions",Td="@firebase/functions-compat",Id="@firebase/installations",Sd="@firebase/installations-compat",Ad="@firebase/messaging",kd="@firebase/messaging-compat",bd="@firebase/performance",Rd="@firebase/performance-compat",Cd="@firebase/remote-config",Nd="@firebase/remote-config-compat",Od="@firebase/storage",Dd="@firebase/storage-compat",Pd="@firebase/firestore",Ld="@firebase/firestore-compat",Md="firebase",Ud="9.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="[DEFAULT]",xd={[Ts]:"fire-core",[dd]:"fire-core-compat",[pd]:"fire-analytics",[fd]:"fire-analytics-compat",[md]:"fire-app-check",[gd]:"fire-app-check-compat",[yd]:"fire-auth",[vd]:"fire-auth-compat",[wd]:"fire-rtdb",[_d]:"fire-rtdb-compat",[Ed]:"fire-fn",[Td]:"fire-fn-compat",[Id]:"fire-iid",[Sd]:"fire-iid-compat",[Ad]:"fire-fcm",[kd]:"fire-fcm-compat",[bd]:"fire-perf",[Rd]:"fire-perf-compat",[Cd]:"fire-rc",[Nd]:"fire-rc-compat",[Od]:"fire-gcs",[Dd]:"fire-gcs-compat",[Pd]:"fire-fst",[Ld]:"fire-fst-compat","fire-js":"fire-js",[Md]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map,Ss=new Map;function Fd(t,e){try{t.container.addComponent(e)}catch(n){Is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function St(t){const e=t.name;if(Ss.has(e))return Is.debug(`There were multiple attempts to register component ${e}.`),!1;Ss.set(e,t);for(const n of Zn.values())Fd(n,t);return!0}function er(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},tr=new Jt("app","Firebase",Vd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=Ud;function Vw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Yo,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw tr.create("bad-app-name",{appName:String(r)});const s=Zn.get(r);if(s){if(Qn(t,s.options)&&Qn(n,s.config))return s;throw tr.create("duplicate-app",{appName:r})}const i=new id(r);for(const a of Ss.values())i.addComponent(a);const o=new Bd(t,n,i);return Zn.set(r,o),o}function As(t=Yo){const e=Zn.get(t);if(!e)throw tr.create("no-app",{appName:t});return e}function Ae(t,e,n){var r;let s=(r=xd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Is.warn(a.join(" "));return}St(new et(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){St(new et("platform-logger",e=>new ld(e),"PRIVATE")),Ae(Ts,Jo,t),Ae(Ts,Jo,"esm2017"),Ae("fire-js","")}$d("");var qd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},v,ks=ks||{},I=qd||self;function nr(){}function bs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function en(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jd(t){return Object.prototype.hasOwnProperty.call(t,Rs)&&t[Rs]||(t[Rs]=++Hd)}var Rs="closure_uid_"+(1e9*Math.random()>>>0),Hd=0;function zd(t,e,n){return t.call.apply(t.bind,arguments)}function Wd(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Z(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=zd:Z=Wd,Z.apply(null,arguments)}function rr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ee(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ve(){this.s=this.s,this.o=this.o}var Kd=0,Gd={};Ve.prototype.s=!1;Ve.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Kd!=0)){var t=jd(this);delete Gd[t]}};Ve.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qo=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Zo=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Xd(t){e:{var e=$f;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ea(t){return Array.prototype.concat.apply([],arguments)}function Cs(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sr(t){return/^[\s\xa0]*$/.test(t)}var ta=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ce(t,e){return t.indexOf(e)!=-1}function Ns(t,e){return t<e?-1:t>e?1:0}var ue;e:{var na=I.navigator;if(na){var ra=na.userAgent;if(ra){ue=ra;break e}}ue=""}function Os(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function sa(t){const e={};for(const n in t)e[n]=t[n];return e}var ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oa(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ia.length;i++)n=ia[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ds(t){return Ds[" "](t),t}Ds[" "]=nr;function Jd(t){var e=Zd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Yd=ce(ue,"Opera"),kt=ce(ue,"Trident")||ce(ue,"MSIE"),aa=ce(ue,"Edge"),Ps=aa||kt,ca=ce(ue,"Gecko")&&!(ce(ue.toLowerCase(),"webkit")&&!ce(ue,"Edge"))&&!(ce(ue,"Trident")||ce(ue,"MSIE"))&&!ce(ue,"Edge"),Qd=ce(ue.toLowerCase(),"webkit")&&!ce(ue,"Edge");function ua(){var t=I.document;return t?t.documentMode:void 0}var ir;e:{var Ls="",Ms=function(){var t=ue;if(ca)return/rv:([^\);]+)(\)|;)/.exec(t);if(aa)return/Edge\/([\d\.]+)/.exec(t);if(kt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Qd)return/WebKit\/(\S+)/.exec(t);if(Yd)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ms&&(Ls=Ms?Ms[1]:""),kt){var Us=ua();if(Us!=null&&Us>parseFloat(Ls)){ir=String(Us);break e}}ir=Ls}var Zd={};function ef(){return Jd(function(){let t=0;const e=ta(String(ir)).split("."),n=ta("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ns(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ns(s[2].length==0,i[2].length==0)||Ns(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var xs;if(I.document&&kt){var la=ua();xs=la||parseInt(ir,10)||void 0}else xs=void 0;var tf=xs,nf=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",nr,e),I.removeEventListener("test",nr,e)}catch{}return t}();function se(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};function tn(t,e){if(se.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ca){e:{try{Ds(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tn.Z.h.call(this)}}ee(tn,se);var rf={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),sf=0;function of(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++sf,this.ca=this.fa=!1}function or(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ar(t){this.src=t,this.g={},this.h=0}ar.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Vs(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new of(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Fs(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Qo(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(or(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vs(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Bs="closure_lm_"+(1e6*Math.random()|0),$s={};function ha(t,e,n,r,s){if(r&&r.once)return fa(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ha(t,e[i],n,r,s);return null}return n=zs(n),t&&t[nn]?t.N(e,n,en(r)?!!r.capture:!!r,s):da(t,e,n,!1,r,s)}function da(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=en(s)?!!s.capture:!!s,a=js(t);if(a||(t[Bs]=a=new ar(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=af(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nf||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ga(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function af(){function t(n){return e.call(t.src,t.listener,n)}var e=cf;return t}function fa(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)fa(t,e[i],n,r,s);return null}return n=zs(n),t&&t[nn]?t.O(e,n,en(r)?!!r.capture:!!r,s):da(t,e,n,!0,r,s)}function pa(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)pa(t,e[i],n,r,s);else r=en(r)?!!r.capture:!!r,n=zs(n),t&&t[nn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Vs(i,n,r,s),-1<n&&(or(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=js(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vs(e,n,r,s)),(n=-1<t?e[t]:null)&&qs(n))}function qs(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[nn])Fs(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ga(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=js(e))?(Fs(n,t),n.h==0&&(n.src=null,e[Bs]=null)):or(t)}}}function ga(t){return t in $s?$s[t]:$s[t]="on"+t}function cf(t,e){if(t.ca)t=!0;else{e=new tn(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qs(t),t=n.call(r,e)}return t}function js(t){return t=t[Bs],t instanceof ar?t:null}var Hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(t){return typeof t=="function"?t:(t[Hs]||(t[Hs]=function(e){return t.handleEvent(e)}),t[Hs])}function Y(){Ve.call(this),this.i=new ar(this),this.P=this,this.I=null}ee(Y,Ve);Y.prototype[nn]=!0;Y.prototype.removeEventListener=function(t,e,n,r){pa(this,t,e,n,r)};function te(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new se(e,t);else if(e instanceof se)e.target=e.target||t;else{var s=e;e=new se(r,t),oa(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=cr(o,r,!0,e)&&s}if(o=e.g=t,s=cr(o,r,!0,e)&&s,s=cr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=cr(o,r,!1,e)&&s}Y.prototype.M=function(){if(Y.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)or(n[r]);delete t.g[e],t.h--}}this.I=null};Y.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Y.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function cr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Fs(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ws=I.JSON.stringify;function uf(){var t=ya;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lf{constructor(){this.h=this.g=null}add(e,n){const r=ma.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ma=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hf,t=>t.reset());class hf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function df(t){I.setTimeout(()=>{throw t},0)}function Ks(t,e){Gs||ff(),Xs||(Gs(),Xs=!0),ya.add(t,e)}var Gs;function ff(){var t=I.Promise.resolve(void 0);Gs=function(){t.then(pf)}}var Xs=!1,ya=new lf;function pf(){for(var t;t=uf();){try{t.h.call(t.g)}catch(n){df(n)}var e=ma;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xs=!1}function ur(t,e){Y.call(this),this.h=t||1,this.g=e||I,this.j=Z(this.kb,this),this.l=Date.now()}ee(ur,Y);v=ur.prototype;v.da=!1;v.S=null;v.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),te(this,"tick"),this.da&&(Js(this),this.start()))}};v.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Js(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}v.M=function(){ur.Z.M.call(this),Js(this),delete this.g};function Ys(t,e,n){if(typeof t=="function")n&&(t=Z(t,n));else if(t&&typeof t.handleEvent=="function")t=Z(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function va(t){t.g=Ys(()=>{t.g=null,t.i&&(t.i=!1,va(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gf extends Ve{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:va(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(t){Ve.call(this),this.h=t,this.g={}}ee(rn,Ve);var wa=[];function _a(t,e,n,r){Array.isArray(n)||(n&&(wa[0]=n.toString()),n=wa);for(var s=0;s<n.length;s++){var i=ha(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ea(t){Os(t.g,function(e,n){this.g.hasOwnProperty(n)&&qs(e)},t),t.g={}}rn.prototype.M=function(){rn.Z.M.call(this),Ea(this)};rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lr(){this.g=!0}lr.prototype.Aa=function(){this.g=!1};function mf(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function yf(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function bt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wf(t,n)+(r?" "+r:"")})}function vf(t,e){t.info(function(){return"TIMEOUT: "+e})}lr.prototype.info=function(){};function wf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ws(n)}catch{return e}}var nt={},Ta=null;function hr(){return Ta=Ta||new Y}nt.Ma="serverreachability";function Ia(t){se.call(this,nt.Ma,t)}ee(Ia,se);function sn(t){const e=hr();te(e,new Ia(e,t))}nt.STAT_EVENT="statevent";function Sa(t,e){se.call(this,nt.STAT_EVENT,t),this.stat=e}ee(Sa,se);function le(t){const e=hr();te(e,new Sa(e,t))}nt.Na="timingevent";function Aa(t,e){se.call(this,nt.Na,t),this.size=e}ee(Aa,se);function on(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var dr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ka={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qs(){}Qs.prototype.h=null;function ba(t){return t.h||(t.h=t.i())}function Ra(){}var an={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zs(){se.call(this,"d")}ee(Zs,se);function ei(){se.call(this,"c")}ee(ei,se);var ti;function fr(){}ee(fr,Qs);fr.prototype.g=function(){return new XMLHttpRequest};fr.prototype.i=function(){return{}};ti=new fr;function cn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new rn(this),this.P=_f,t=Ps?125:void 0,this.W=new ur(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ca}function Ca(){this.i=null,this.g="",this.h=!1}var _f=45e3,ni={},pr={};v=cn.prototype;v.setTimeout=function(t){this.P=t};function ri(t,e,n){t.K=1,t.v=wr(Oe(e)),t.s=n,t.U=!0,Na(t,null)}function Na(t,e){t.F=Date.now(),un(t),t.A=Oe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Va(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ca,t.g=cc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new gf(Z(t.Ia,t,t.g),t.O)),_a(t.V,t.g,"readystatechange",t.gb),e=t.H?sa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),sn(1),mf(t.j,t.u,t.A,t.m,t.X,t.s)}v.gb=function(t){t=t.target;const e=this.L;e&&De(t)==3?e.l():this.Ia(t)};v.Ia=function(t){try{if(t==this.g)e:{const l=De(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Ps||this.g&&(this.h.h||this.g.ga()||Ya(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?sn(3):sn(2)),gr(this);var n=this.g.ba();this.N=n;t:if(Oa(this)){var r=Ya(this.g);t="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){rt(this),ln(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,yf(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sr(a)){var u=a;break t}}u=null}if(n=u)bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,si(this,n);else{this.i=!1,this.o=3,le(12),rt(this),ln(this);break e}}this.U?(Da(this,l,o),Ps&&this.i&&l==3&&(_a(this.V,this.W,"tick",this.fb),this.W.start())):(bt(this.j,this.m,o,null),si(this,o)),l==4&&rt(this),this.i&&!this.I&&(l==4?sc(this.l,this):(this.i=!1,un(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,le(12)):(this.o=0,le(13)),rt(this),ln(this)}}}catch{}finally{}};function Oa(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Da(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=Ef(t,n),s==pr){e==4&&(t.o=4,le(14),r=!1),bt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ni){t.o=4,le(15),bt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bt(t.j,t.m,s,null),si(t,s);Oa(t)&&s!=pr&&s!=ni&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,le(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gi(e),e.L=!0,le(11))):(bt(t.j,t.m,n,"[Invalid Chunked Response]"),rt(t),ln(t))}v.fb=function(){if(this.g){var t=De(this.g),e=this.g.ga();this.C<e.length&&(gr(this),Da(this,t,e),this.i&&t!=4&&un(this))}};function Ef(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pr:(n=Number(e.substring(n,r)),isNaN(n)?ni:(r+=1,r+n>e.length?pr:(e=e.substr(r,n),t.C=r+n,e)))}v.cancel=function(){this.I=!0,rt(this)};function un(t){t.Y=Date.now()+t.P,Pa(t,t.P)}function Pa(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=on(Z(t.eb,t),e)}function gr(t){t.B&&(I.clearTimeout(t.B),t.B=null)}v.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vf(this.j,this.A),this.K!=2&&(sn(3),le(17)),rt(this),this.o=2,ln(this)):Pa(this,this.Y-t)};function ln(t){t.l.G==0||t.I||sc(t.l,t)}function rt(t){gr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Js(t.W),Ea(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function si(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ai(n.i,t))){if(n.I=t.N,!t.J&&ai(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ar(n),Ir(n);else break e;pi(n),le(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=on(Z(n.ab,n),6e3));if(1>=qa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ot(n,11)}else if((t.J||n.g==t)&&Ar(n),!sr(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(ce(m,"spdy")||ce(m,"quic")||ce(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ci(i,i.h),i.h=null))}if(r.D){const k=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(r.sa=k,B(r.F,r.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ac(r,r.H?r.la:null,r.W),o.J){ja(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(gr(a),un(a)),r.g=o}else nc(r);0<n.l.length&&Sr(n)}else u[0]!="stop"&&u[0]!="close"||ot(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ot(n,7):di(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}sn(4)}catch{}}function Tf(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ii(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bs(t)||typeof t=="string")Zo(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bs(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Tf(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Rt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Rt)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}v=Rt.prototype;v.R=function(){oi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};v.T=function(){return oi(this),this.g.concat()};function oi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];st(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],st(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}v.get=function(t,e){return st(this.h,t)?this.h[t]:e};v.set=function(t,e){st(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};v.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function st(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var La=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function If(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function it(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof it){this.g=e!==void 0?e:t.g,mr(this,t.j),this.s=t.s,yr(this,t.i),vr(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new Rt(e.g),n.h=e.h),Ma(this,n),this.o=t.o}else t&&(n=String(t).match(La))?(this.g=!!e,mr(this,n[1]||"",!0),this.s=hn(n[2]||""),yr(this,n[3]||"",!0),vr(this,n[4]),this.l=hn(n[5]||"",!0),Ma(this,n[6]||"",!0),this.o=hn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}it.prototype.toString=function(){var t=[],e=this.j;e&&t.push(dn(e,Ua,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(dn(e,Ua,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(dn(n,n.charAt(0)=="/"?Rf:bf,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",dn(n,Nf)),t.join("")};function Oe(t){return new it(t)}function mr(t,e,n){t.j=n?hn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yr(t,e,n){t.i=n?hn(e,!0):e}function vr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ma(t,e,n){e instanceof fn?(t.h=e,Of(t.h,t.g)):(n||(e=dn(e,Cf)),t.h=new fn(e,t.g))}function B(t,e,n){t.h.set(e,n)}function wr(t){return B(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sf(t){return t instanceof it?Oe(t):new it(t,void 0)}function Af(t,e,n,r){var s=new it(null,void 0);return t&&mr(s,t),e&&yr(s,e),n&&vr(s,n),r&&(s.l=r),s}function hn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ua=/[#\/\?@]/g,bf=/[#\?:]/g,Rf=/[#\?]/g,Cf=/[#\?@]/g,Nf=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Be(t){t.g||(t.g=new Rt,t.h=0,t.i&&If(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}v=fn.prototype;v.add=function(t,e){Be(this),this.i=null,t=Ct(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xa(t,e){Be(t),e=Ct(t,e),st(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,st(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&oi(t)))}function Fa(t,e){return Be(t),e=Ct(t,e),st(t.g.h,e)}v.forEach=function(t,e){Be(this),this.g.forEach(function(n,r){Zo(n,function(s){t.call(e,s,r,this)},this)},this)};v.T=function(){Be(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};v.R=function(t){Be(this);var e=[];if(typeof t=="string")Fa(this,t)&&(e=ea(e,this.g.get(Ct(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ea(e,t[n])}return e};v.set=function(t,e){return Be(this),this.i=null,t=Ct(this,t),Fa(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};v.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Va(t,e,n){xa(t,e),0<n.length&&(t.i=null,t.g.set(Ct(t,e),Cs(n)),t.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Ct(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Of(t,e){e&&!t.j&&(Be(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(xa(this,r),Va(this,s,n))},t)),t.j=e}var Df=class{constructor(t,e){this.h=t,this.g=e}};function Ba(t){this.l=t||Pf,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ea&&I.g.Ea()&&I.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pf=10;function $a(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qa(t){return t.h?1:t.g?t.g.size:0}function ai(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ci(t,e){t.g?t.g.add(e):t.h=e}function ja(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ba.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ha(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Cs(t.i)}function ui(){}ui.prototype.stringify=function(t){return I.JSON.stringify(t,void 0)};ui.prototype.parse=function(t){return I.JSON.parse(t,void 0)};function Lf(){this.g=new ui}function Mf(t,e,n){const r=n||"";try{ii(t,function(s,i){let o=s;en(s)&&(o=Ws(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Uf(t,e){const n=new lr;if(I.Image){const r=new Image;r.onload=rr(_r,n,r,"TestLoadImage: loaded",!0,e),r.onerror=rr(_r,n,r,"TestLoadImage: error",!1,e),r.onabort=rr(_r,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=rr(_r,n,r,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _r(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}ee(pn,Qs);pn.prototype.g=function(){return new Er(this.l,this.j)};pn.prototype.i=function(t){return function(){return t}}({});function Er(t,e){Y.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=li,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ee(Er,Y);var li=0;v=Er.prototype;v.open=function(t,e){if(this.readyState!=li)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,mn(this)};v.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||I).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=li};v.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mn(this)),this.g&&(this.readyState=3,mn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof I.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;za(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function za(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}v.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gn(this):mn(this),this.readyState==3&&za(this)}};v.Ua=function(t){this.g&&(this.response=this.responseText=t,gn(this))};v.Ta=function(t){this.g&&(this.response=t,gn(this))};v.ha=function(){this.g&&gn(this)};function gn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,mn(t)}v.setRequestHeader=function(t,e){this.v.append(t,e)};v.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xf=I.JSON.parse;function K(t){Y.call(this),this.headers=new Rt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Wa,this.K=this.L=!1}ee(K,Y);var Wa="",Ff=/^https?$/i,Vf=["POST","PUT"];v=K.prototype;v.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ti.g(),this.C=this.u?ba(this.u):ba(ti),this.g.onreadystatechange=Z(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ka(this,i);return}t=n||"";const s=new Rt(this.headers);r&&ii(r,function(i,o){s.set(o,i)}),r=Xd(s.T()),n=I.FormData&&t instanceof I.FormData,!(0<=Qo(Vf,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ja(this),0<this.B&&((this.K=Bf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.pa,this)):this.A=Ys(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ka(this,i)}};function Bf(t){return kt&&ef()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function $f(t){return t.toLowerCase()=="content-type"}v.pa=function(){typeof ks!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Ka(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ga(t),Tr(t)}function Ga(t){t.D||(t.D=!0,te(t,"complete"),te(t,"error"))}v.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,te(this,"complete"),te(this,"abort"),Tr(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tr(this,!0)),K.Z.M.call(this)};v.Fa=function(){this.s||(this.F||this.v||this.l?Xa(this):this.cb())};v.cb=function(){Xa(this)};function Xa(t){if(t.h&&typeof ks!="undefined"&&(!t.C[1]||De(t)!=4||t.ba()!=2)){if(t.v&&De(t)==4)Ys(t.Fa,0,t);else if(te(t,"readystatechange"),De(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(La)[1]||null;if(!s&&I.self&&I.self.location){var i=I.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ff.test(s?s.toLowerCase():"")}n=r}if(n)te(t,"complete"),te(t,"success");else{t.m=6;try{var o=2<De(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ga(t)}}finally{Tr(t)}}}}function Tr(t,e){if(t.g){Ja(t);const n=t.g,r=t.C[0]?nr:null;t.g=null,t.C=null,e||te(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ja(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}function De(t){return t.g?t.g.readyState:0}v.ba=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};v.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xf(e)}};function Ya(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Wa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}v.Da=function(){return this.m};v.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function qf(t){let e="";return Os(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function hi(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):B(t,e,n))}function yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qa(t){this.za=0,this.l=[],this.h=new lr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=yn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=yn("baseRetryDelayMs",5e3,t),this.$a=yn("retryDelaySeedMs",1e4,t),this.Ya=yn("forwardChannelMaxRetries",2,t),this.ra=yn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ba(t&&t.concurrentRequestLimit),this.Ca=new Lf,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}v=Qa.prototype;v.ma=8;v.G=1;function di(t){if(Za(t),t.G==3){var e=t.V++,n=Oe(t.F);B(n,"SID",t.J),B(n,"RID",e),B(n,"TYPE","terminate"),vn(t,n),e=new cn(t,t.h,e,void 0),e.K=2,e.v=wr(Oe(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(e.v.toString(),"")),!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=cc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),un(e)}oc(t)}v.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ir(t){t.g&&(gi(t),t.g.cancel(),t.g=null)}function Za(t){Ir(t),t.u&&(I.clearTimeout(t.u),t.u=null),Ar(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function fi(t,e){t.l.push(new Df(t.Za++,e)),t.G==3&&Sr(t)}function Sr(t){$a(t.i)||t.m||(t.m=!0,Ks(t.Ha,t),t.C=0)}function jf(t,e){return qa(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=on(Z(t.Ha,t,e),ic(t,t.C)),t.C++,!0)}v.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new cn(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=sa(i),oa(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tc(this,s,e),n=Oe(this.F),B(n,"RID",t),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),vn(this,n),this.o&&i&&hi(n,this.o,i),ci(this.i,s),this.Ra&&B(n,"TYPE","init"),this.ja?(B(n,"$req",e),B(n,"SID","null"),s.$=!0,ri(s,n,null)):ri(s,n,e),this.G=2}}else this.G==3&&(t?ec(this,t):this.l.length==0||$a(this.i)||ec(this))};function ec(t,e){var n;e?n=e.m:n=t.V++;const r=Oe(t.F);B(r,"SID",t.J),B(r,"RID",n),B(r,"AID",t.U),vn(t,r),t.o&&t.s&&hi(r,t.o,t.s),n=new cn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=tc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ci(t.i,n),ri(n,r,e)}function vn(t,e){t.j&&ii({},function(n,r){B(e,r,n)})}function tc(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Z(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{Mf(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function nc(t){t.g||t.u||(t.Y=1,Ks(t.Ga,t),t.A=0)}function pi(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=on(Z(t.Ga,t),ic(t,t.A)),t.A++,!0)}v.Ga=function(){if(this.u=null,rc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=on(Z(this.bb,this),t)}};v.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,le(10),Ir(this),rc(this))};function gi(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function rc(t){t.g=new cn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Oe(t.oa);B(e,"RID","rpc"),B(e,"SID",t.J),B(e,"CI",t.N?"0":"1"),B(e,"AID",t.U),vn(t,e),B(e,"TYPE","xmlhttp"),t.o&&t.s&&hi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=wr(Oe(e)),n.s=null,n.U=!0,Na(n,t)}v.ab=function(){this.v!=null&&(this.v=null,Ir(this),pi(this),le(19))};function Ar(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function sc(t,e){var n=null;if(t.g==e){Ar(t),gi(t),t.g=null;var r=2}else if(ai(t.i,e))n=e.D,ja(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=hr(),te(r,new Aa(r,n,e,s)),Sr(t)}else nc(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&jf(t,e)||r==2&&pi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ot(t,5);break;case 4:ot(t,10);break;case 3:ot(t,6);break;default:ot(t,2)}}}function ic(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ot(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Z(t.jb,t);n||(n=new it("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||mr(n,"https"),wr(n)),Uf(n.toString(),r)}else le(2);t.G=0,t.j&&t.j.va(e),oc(t),Za(t)}v.jb=function(t){t?(this.h.info("Successfully pinged google.com"),le(2)):(this.h.info("Failed to ping google.com"),le(1))};function oc(t){t.G=0,t.I=-1,t.j&&((Ha(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Cs(t.l),t.l.length=0),t.j.ua())}function ac(t,e,n){let r=Sf(n);if(r.i!="")e&&yr(r,e+"."+r.i),vr(r,r.m);else{const s=I.location;r=Af(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Os(t.aa,function(s,i){B(r,i,s)}),e=t.D,n=t.sa,e&&n&&B(r,e,n),B(r,"VER",t.ma),vn(t,r),r}function cc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new K(new pn({ib:!0})):new K(t.qa),e.L=t.H,e}function uc(){}v=uc.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Oa=function(){};function kr(){if(kt&&!(10<=Number(tf)))throw Error("Environmental error: no available transport.")}kr.prototype.g=function(t,e){return new me(t,e)};function me(t,e){Y.call(this),this.g=new Qa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!sr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nt(this)}ee(me,Y);me.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ks(Z(t.hb,t,e))),le(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ac(t,null,t.W),Sr(t)};me.prototype.close=function(){di(this.g)};me.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,fi(this.g,e)}else this.v?(e={},e.__data__=Ws(t),fi(this.g,e)):fi(this.g,t)};me.prototype.M=function(){this.g.j=null,delete this.j,di(this.g),delete this.g,me.Z.M.call(this)};function lc(t){Zs.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ee(lc,Zs);function hc(){ei.call(this),this.status=1}ee(hc,ei);function Nt(t){this.g=t}ee(Nt,uc);Nt.prototype.xa=function(){te(this.g,"a")};Nt.prototype.wa=function(t){te(this.g,new lc(t))};Nt.prototype.va=function(t){te(this.g,new hc(t))};Nt.prototype.ua=function(){te(this.g,"b")};kr.prototype.createWebChannel=kr.prototype.g;me.prototype.send=me.prototype.u;me.prototype.open=me.prototype.m;me.prototype.close=me.prototype.close;dr.NO_ERROR=0;dr.TIMEOUT=8;dr.HTTP_ERROR=6;ka.COMPLETE="complete";Ra.EventType=an;an.OPEN="a";an.CLOSE="b";an.ERROR="c";an.MESSAGE="d";Y.prototype.listen=Y.prototype.N;K.prototype.listenOnce=K.prototype.O;K.prototype.getLastError=K.prototype.La;K.prototype.getLastErrorCode=K.prototype.Da;K.prototype.getStatus=K.prototype.ba;K.prototype.getResponseJson=K.prototype.Qa;K.prototype.getResponseText=K.prototype.ga;K.prototype.send=K.prototype.ea;var Hf=function(){return new kr},zf=function(){return hr()},mi=dr,Wf=ka,Kf=nt,dc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Gf=pn,br=Ra,Xf=K;const fc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ot="9.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Es("@firebase/firestore");function pc(){return at.logLevel}function _(t,...e){if(at.logLevel<=O.DEBUG){const n=e.map(yi);at.debug(`Firestore (${Ot}): ${t}`,...n)}}function $e(t,...e){if(at.logLevel<=O.ERROR){const n=e.map(yi);at.error(`Firestore (${Ot}): ${t}`,...n)}}function gc(t,...e){if(at.logLevel<=O.WARN){const n=e.map(yi);at.warn(`Firestore (${Ot}): ${t}`,...n)}}function yi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Ot}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function M(t,e){t||b()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(de.UNAUTHENTICATED))}shutdown(){}}class Qf{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ct,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ct)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new Jf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new de(e)}}class Zf{constructor(e,n,r){this.type="FirstParty",this.user=de.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class ep{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Zf(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class np{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=s=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(s))};const r=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(M(typeof n.token=="string"),new tp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.I=-1;class mc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rp(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function L(t,e){return t<e?-1:t>e?1:0}function Dt(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new ye(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ut(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class q extends wn{construct(e,n,r){return new q(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new q(n)}static emptyPath(){return new q([])}}const sp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends wn{construct(e,n,r){return new fe(e,n,r)}static isValidIdentifier(e){return sp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(n)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.fields=e,e.sort(fe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dt(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ie(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ie(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const ip=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qe(t){if(M(!!t),typeof t=="string"){let e=0;const n=ip.exec(t);if(M(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pt(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _c(t){const e=t.mapValue.fields.__previous_value__;return wc(e)?_c(e):e}function En(t){const e=qe(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t==null}function Rr(t){return t===0&&1/t==-1/0}function op(t){return typeof t=="number"&&Number.isInteger(t)&&!Rr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(q.fromString(e))}static fromName(e){return new S(q.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new q(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wc(t)?4:10:b()}function ke(t,e){const n=lt(t);if(n!==lt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return En(t).isEqual(En(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=qe(r.timestampValue),o=qe(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Pt(r.bytesValue).isEqual(Pt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return G(r.geoPointValue.latitude)===G(s.geoPointValue.latitude)&&G(r.geoPointValue.longitude)===G(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return G(r.integerValue)===G(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=G(r.doubleValue),o=G(s.doubleValue);return i===o?Rr(i)===Rr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Dt(t.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(yc(i)!==yc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ke(i[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Tn(t,e){return(t.values||[]).find(n=>ke(n,e))!==void 0}function Mt(t,e){const n=lt(t),r=lt(e);if(n!==r)return L(n,r);switch(n){case 0:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=G(s.integerValue||s.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ec(t.timestampValue,e.timestampValue);case 4:return Ec(En(t),En(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Pt(s),a=Pt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=L(o[c],a[c]);if(u!==0)return u}return L(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=L(G(s.latitude),G(i.latitude));return o!==0?o:L(G(s.longitude),G(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Mt(o[c],a[c]);if(u)return u}return L(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=L(a[l],u[l]);if(h!==0)return h;const d=Mt(o[a[l]],c[u[l]]);if(d!==0)return d}return L(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function Ec(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return L(t,e);const n=qe(t),r=qe(e),s=L(n.seconds,r.seconds);return s!==0?s:L(n.nanos,r.nanos)}function wi(t){return _i(t)}function _i(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=qe(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,S.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=_i(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${_i(r.fields[a])}`;return i+"}"}(t.mapValue):b();var e,n}function Ei(t){return!!t&&"integerValue"in t}function Ti(t){return!!t&&"arrayValue"in t}function Tc(t){return!!t&&"nullValue"in t}function Ic(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cr(t){return!!t&&"mapValue"in t}function In(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ut(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=In(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=In(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=In(n)}setAll(e){let n=fe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=In(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Cr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Cr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ut(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ve(In(this.value))}}function Sc(t){const e=[];return ut(t.fields,(n,r)=>{const s=new fe([n]);if(Cr(r)){const i=Sc(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new oe(e,0,P.min(),ve.empty(),0)}static newFoundDocument(e,n,r){return new oe(e,1,n,r,0)}static newNoDocument(e,n){return new oe(e,2,n,ve.empty(),0)}static newUnknownDocument(e,n){return new oe(e,3,n,ve.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new oe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function Ac(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ap(t,e,n,r,s,i,o)}function Ii(t){const e=R(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Nr(e.startAt)),e.endAt&&(n+="|ub:",n+=Nr(e.endAt)),e.R=n}return e.R}function cp(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${wi(r.value)}`;var r}).join(", ")}]`),Lt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Nr(t.startAt)),t.endAt&&(e+=", endAt: "+Nr(t.endAt)),`Target(${e})`}function Si(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!yp(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ke(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rc(t.startAt,e.startAt)&&Rc(t.endAt,e.endAt)}function Ai(t){return S.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new lp(e,n,r):n==="array-contains"?new fp(e,r):n==="in"?new pp(e,r):n==="not-in"?new gp(e,r):n==="array-contains-any"?new mp(e,r):new pe(e,n,r)}static P(e,n,r){return n==="in"?new hp(e,r):new dp(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Mt(n,this.value)):n!==null&&lt(this.value)===lt(n)&&this.v(Mt(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function up(t){return t.field.canonicalString()+t.op.toString()+wi(t.value)}class lp extends pe{constructor(e,n,r){super(e,n,r),this.key=S.fromName(r.referenceValue)}matches(e){const n=S.comparator(e.key,this.key);return this.v(n)}}class hp extends pe{constructor(e,n){super(e,"in",n),this.keys=kc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dp extends pe{constructor(e,n){super(e,"not-in",n),this.keys=kc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>S.fromName(r.referenceValue))}class fp extends pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ti(n)&&Tn(n.arrayValue,this.value)}}class pp extends pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tn(this.value.arrayValue,n)}}class gp extends pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tn(this.value.arrayValue,n)}}class mp extends pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ti(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}class ki{constructor(e,n){this.position=e,this.before=n}}function Nr(t){return`${t.before?"b":"a"}:${t.position.map(e=>wi(e)).join(",")}`}class Ut{constructor(e,n="asc"){this.field=e,this.dir=n}}function yp(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function bc(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),n.key):r=Mt(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Rc(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ke(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function vp(t,e,n,r,s,i,o,a){return new Sn(t,e,n,r,s,i,o,a)}function bi(t){return new Sn(t)}function Or(t){return!Lt(t.limit)&&t.limitType==="F"}function Dr(t){return!Lt(t.limit)&&t.limitType==="L"}function Cc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nc(t){for(const e of t.filters)if(e.V())return e.field;return null}function wp(t){return t.collectionGroup!==null}function An(t){const e=R(t);if(e.S===null){e.S=[];const n=Nc(e),r=Cc(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new Ut(n)),e.S.push(new Ut(fe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Ut(fe.keyField(),i))}}}return e.S}function ht(t){const e=R(t);if(!e.D)if(e.limitType==="F")e.D=Ac(e.path,e.collectionGroup,An(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of An(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ut(i.field,o))}const r=e.endAt?new ki(e.endAt.position,!e.endAt.before):null,s=e.startAt?new ki(e.startAt.position,!e.startAt.before):null;e.D=Ac(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.D}function _p(t,e,n){return new Sn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pr(t,e){return Si(ht(t),ht(e))&&t.limitType===e.limitType}function Oc(t){return`${Ii(ht(t))}|lt:${t.limitType}`}function Ri(t){return`Query(target=${cp(ht(t))}; limitType=${t.limitType})`}function Lr(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):S.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!bc(n.startAt,An(n),r)||n.endAt&&bc(n.endAt,An(n),r))}(t,e)}function Dc(t){return(e,n)=>{let r=!1;for(const s of An(t)){const i=Ep(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ep(t,e,n){const r=t.field.isKeyField()?S.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Mt(a,c):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rr(e)?"-0":e}}function Lc(t){return{integerValue:""+t}}function Tp(t,e){return op(e)?Lc(e):Pc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this._=void 0}}function Ip(t,e,n){return t instanceof Ur?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof kn?Uc(t,e):t instanceof bn?xc(t,e):function(r,s){const i=Mc(r,s),o=Fc(i)+Fc(r.N);return Ei(i)&&Ei(r.N)?Lc(o):Pc(r.k,o)}(t,e)}function Sp(t,e,n){return t instanceof kn?Uc(t,e):t instanceof bn?xc(t,e):n}function Mc(t,e){return t instanceof xr?Ei(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ur extends Mr{}class kn extends Mr{constructor(e){super(),this.elements=e}}function Uc(t,e){const n=Vc(e);for(const r of t.elements)n.some(s=>ke(s,r))||n.push(r);return{arrayValue:{values:n}}}class bn extends Mr{constructor(e){super(),this.elements=e}}function xc(t,e){let n=Vc(e);for(const r of t.elements)n=n.filter(s=>!ke(s,r));return{arrayValue:{values:n}}}class xr extends Mr{constructor(e,n){super(),this.k=e,this.N=n}}function Fc(t){return G(t.integerValue||t.doubleValue)}function Vc(t){return Ti(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ap(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof kn&&r instanceof kn||n instanceof bn&&r instanceof bn?Dt(n.elements,r.elements,ke):n instanceof xr&&r instanceof xr?ke(n.N,r.N):n instanceof Ur&&r instanceof Ur}(t.transform,e.transform)}class kp{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vr{}function bp(t,e,n){t instanceof Br?function(r,s,i){const o=r.value.clone(),a=jc(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof dt?function(r,s,i){if(!Fr(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=jc(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(qc(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ci(t,e,n){t instanceof Br?function(r,s,i){if(!Fr(r.precondition,s))return;const o=r.value.clone(),a=Hc(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument($c(s),o).setHasLocalMutations()}(t,e,n):t instanceof dt?function(r,s,i){if(!Fr(r.precondition,s))return;const o=Hc(r.fieldTransforms,i,s),a=s.data;a.setAll(qc(r)),a.setAll(o),s.convertToFoundDocument($c(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Fr(r.precondition,s)&&s.convertToNoDocument(P.min())}(t,e)}function Rp(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Mc(r.transform,s||null);i!=null&&(n==null&&(n=ve.empty()),n.set(r.field,i))}return n||null}function Bc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Dt(n,r,(s,i)=>Ap(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function $c(t){return t.isFoundDocument()?t.version:P.min()}class Br extends Vr{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class dt extends Vr{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function qc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jc(t,e,n){const r=new Map;M(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Sp(o,a,n[s]))}return r}function Hc(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ip(i,o,e))}return r}class zc extends Vr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Cp extends Vr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,N;function Op(t){switch(t){default:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Wc(t){if(t===void 0)return $e("GRPC error has no .code"),p.UNKNOWN;switch(t){case X.OK:return p.OK;case X.CANCELLED:return p.CANCELLED;case X.UNKNOWN:return p.UNKNOWN;case X.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case X.INTERNAL:return p.INTERNAL;case X.UNAVAILABLE:return p.UNAVAILABLE;case X.UNAUTHENTICATED:return p.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case X.NOT_FOUND:return p.NOT_FOUND;case X.ALREADY_EXISTS:return p.ALREADY_EXISTS;case X.PERMISSION_DENIED:return p.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case X.ABORTED:return p.ABORTED;case X.OUT_OF_RANGE:return p.OUT_OF_RANGE;case X.UNIMPLEMENTED:return p.UNIMPLEMENTED;case X.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(N=X||(X={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.comparator=e,this.root=n||ne.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $r(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $r(this.root,e,this.comparator,!1)}getReverseIterator(){return new $r(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $r(this.root,e,this.comparator,!0)}}class $r{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ne{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:ne.RED,this.left=s!=null?s:ne.EMPTY,this.right=i!=null?i:ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ne(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kc(this.data.getIterator())}getIteratorFrom(e){return new Kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new re(this.comparator);return n.data=e,n}}class Kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new ae(S.comparator);function ft(){return Dp}const Pp=new ae(S.comparator);function Ni(){return Pp}const Lp=new ae(S.comparator);function Mp(){return Lp}const Up=new re(S.comparator);function F(...t){let e=Up;for(const n of t)e=e.add(n);return e}const xp=new re(L);function Gc(){return xp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Rn.createSynthesizedTargetChangeForCurrentChange(e,n)),new qr(P.min(),r,Gc(),ft(),F())}}class Rn{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Rn(ie.EMPTY_BYTE_STRING,n,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r,s){this.$=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Xc{constructor(e,n){this.targetId=e,this.O=n}}class Jc{constructor(e,n,r=ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yc{constructor(){this.M=0,this.L=Zc(),this.B=ie.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=F(),n=F(),r=F();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:b()}}),new Rn(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=Zc()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Fp{constructor(e){this.et=e,this.nt=new Map,this.st=ft(),this.it=Qc(),this.rt=new re(L)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,s)=>{this.lt(s)&&n(s)})}dt(e){const n=e.targetId,r=e.O.count,s=this.wt(n);if(s){const i=s.target;if(Ai(i))if(r===0){const o=new S(i.path);this.ct(n,o,oe.newNoDocument(o,P.min()))}else M(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ai(a.target)){const c=new S(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.ct(o,c,oe.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let r=F();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new qr(e,n,this.rt,this.st,r);return this.st=ft(),this.it=Qc(),this.rt=new re(L),s}at(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,n)?s.J(n,1):s.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Yc,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new re(L),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||_("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Yc),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Qc(){return new ae(S.comparator)}function Zc(){return new ae(S.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $p{constructor(e,n){this.databaseId=e,this.C=n}}function Hr(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eu(t,e){return t.C?e.toBase64():e.toUint8Array()}function qp(t,e){return Hr(t,e.toTimestamp())}function Le(t){return M(!!t),P.fromTimestamp(function(e){const n=qe(e);return new ye(n.seconds,n.nanos)}(t))}function Oi(t,e){return function(n){return new q(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tu(t){const e=q.fromString(t);return M(au(e)),e}function Di(t,e){return Oi(t.databaseId,e.path)}function Pi(t,e){const n=tu(e);if(n.get(1)!==t.databaseId.projectId)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new S(nu(n))}function Li(t,e){return Oi(t.databaseId,e)}function jp(t){const e=tu(t);return e.length===4?q.emptyPath():nu(e)}function Mi(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nu(t){return M(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ru(t,e,n){return{name:Di(t,e),fields:n.value.mapValue.fields}}function Hp(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.C?(M(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(M(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:Wc(c.code);return new E(u,c.message||"")}(o);n=new Jc(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pi(t,r.document.name),i=Le(r.document.updateTime),o=new ve({mapValue:{fields:r.document.fields}}),a=oe.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new jr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pi(t,r.document),i=r.readTime?Le(r.readTime):P.min(),o=oe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new jr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pi(t,r.document),i=r.removedTargetIds||[];n=new jr([],i,s,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Np(s),o=r.targetId;n=new Xc(o,i)}}return n}function zp(t,e){let n;if(e instanceof Br)n={update:ru(t,e.key,e.value)};else if(e instanceof zc)n={delete:Di(t,e.key)};else if(e instanceof dt)n={update:ru(t,e.key,e.data),updateMask:tg(e.fieldMask)};else{if(!(e instanceof Cp))return b();n={verify:Di(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ur)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),increment:o.N};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:qp(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function Wp(t,e){return t&&t.length>0?(M(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Le(r.updateTime):Le(s);return i.isEqual(P.min())&&(i=Le(s)),new kp(i,r.transformResults||[])}(n,e))):[]}function Kp(t,e){return{documents:[Li(t,e.path)]}}function Gp(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Li(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Li(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(Ic(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NAN"}};if(Tc(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ic(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NAN"}};if(Tc(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xt(l.field),op:Qp(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:xt(u.field),direction:Yp(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||Lt(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=iu(e.startAt)),e.endAt&&(n.structuredQuery.endAt=iu(e.endAt)),n}function Xp(t){let e=jp(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){M(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=su(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ut(Ft(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Lt(h)?null:h}(n.limit));let c=null;n.startAt&&(c=ou(n.startAt));let u=null;return n.endAt&&(u=ou(n.endAt)),vp(e,s,o,i,a,"F",c,u)}function Jp(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function su(t){return t?t.unaryFilter!==void 0?[eg(t)]:t.fieldFilter!==void 0?[Zp(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>su(e)).reduce((e,n)=>e.concat(n)):b():[]}function iu(t){return{before:t.before,values:t.position}}function ou(t){const e=!!t.before,n=t.values||[];return new ki(n,e)}function Yp(t){return Vp[t]}function Qp(t){return Bp[t]}function xt(t){return{fieldPath:t.canonicalString()}}function Ft(t){return fe.fromServerFormat(t.fieldPath)}function Zp(t){return pe.create(Ft(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function eg(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ft(t.unaryFilter.field);return pe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ft(t.unaryFilter.field);return pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ft(t.unaryFilter.field);return pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ft(t.unaryFilter.field);return pe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function tg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function au(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const ng="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,r)=>{n(e)})}static reject(e){return new y((n,r)=>{r(e)})}static waitFor(e){return new y((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=y.resolve(!1);for(const r of e)n=n.next(s=>s?y.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Cn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bp(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ci(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ci(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),F())}isEqual(e){return this.batchId===e.batchId&&Dt(this.mutations,e.mutations,(n,r)=>Bc(n,r))&&Dt(this.baseMutations,e.baseMutations,(n,r)=>Bc(n,r))}}class Ui{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){M(e.mutations.length===r.length);let s=Mp();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ui(e,n,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,s,i=P.min(),o=P.min(),a=ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.Gt=e}}function og(t){const e=Xp({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_p(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.zt=new cg}addToCollectionParentIndex(e,n){return this.zt.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.zt.getEntries(n))}}class cg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new re(q.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new re(q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Vt(0)}static re(){return new Vt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==ng)throw t;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){ut(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vc(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.changes=new On(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:P.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:oe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Pn(e,n,r))}Pn(e,n,r){return this.Je.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return S.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Sn(e,n.path):wp(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new S(n)).next(r=>{let s=Ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Dn(e,n,r){const s=n.collectionGroup;let i=Ni();return this.Jt.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Sn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.Cn(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Cn(e,n,r){let s,i;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,s).next(a=>{s=a;for(const c of i)for(const u of c.mutations){const l=u.key;let h=s.get(l);h==null&&(h=oe.newInvalidDocument(l),s=s.insert(l,h)),Ci(u,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(l))}}))).next(()=>(s.forEach((o,a)=>{Lr(n,a)||(s=s.remove(o))}),s))}Nn(e,n,r){let s=F();for(const o of n)for(const a of o.mutations)a instanceof dt&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.Je.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=s}static $n(e,n){let r=F(),s=F();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xi(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(P.min())?this.Mn(e,n):this.On.vn(e,s).next(i=>{const o=this.Ln(n,i);return(Or(n)||Dr(n))&&this.Bn(n.limitType,o,s,r)?this.Mn(e,n):(pc()<=O.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ri(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let r=new re(Dc(e));return n.forEach((s,i)=>{Lr(e,i)&&(r=r.add(i))}),r}Bn(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mn(e,n){return pc()<=O.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Ri(n)),this.On.getDocumentsMatchingQuery(e,n,P.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,s){this.persistence=e,this.Un=n,this.k=s,this.qn=new ae(L),this.Kn=new On(i=>Ii(i),Si),this.jn=P.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new cu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function dg(t,e,n,r){return new hg(t,e,n,r)}async function uu(t,e){const n=R(t);let r=n.An,s=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new cu(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=F();for(const d of a){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of c){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return s.vn(o,h).next(d=>({Gn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.An=r,n.Wn=s,n.Un.Fn(n.Wn),i}function fg(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(m=>{const k=c.docVersions.get(g);M(k!==null),m.version.compareTo(k)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&u.addEntry(m,c.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,s))})}function lu(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function pg(t,e){const n=R(t),r=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.He.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.He.addMatchingKeys(i,u.addedDocuments,l)));const d=u.resumeToken;if(d.approximateByteSize()>0){const g=h.withResumeToken(d,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(l,g),function(m,k,T){return M(k.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,g,u)&&a.push(n.He.updateTargetData(i,g))}});let c=ft();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(gg(i,o,e.documentUpdates,r,void 0).next(u=>{c=u})),!r.isEqual(P.min())){const u=n.He.getLastRemoteSnapshotVersion(i).next(l=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=s,i))}function gg(t,e,n,r,s){let i=F();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=ft();return n.forEach((c,u)=>{const l=o.get(c),h=(s==null?void 0:s.get(c))||r;u.isNoDocument()&&u.version.isEqual(P.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):_("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function mg(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function yg(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.He.getTargetData(r,e).next(i=>i?(s=i,y.resolve(s)):n.He.allocateTargetId(r).next(o=>(s=new pt(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qn.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Fi(t,e,n){const r=R(t),s=r.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Cn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(s.target)}function hu(t,e,n){const r=R(t);let s=P.min(),i=F();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=R(a),h=l.Kn.get(u);return h!==void 0?y.resolve(l.qn.get(h)):l.He.getTargetData(c,u)}(r,o,ht(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?s:P.min(),n?i:F())).next(a=>({documents:a,zn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return y.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Le(r.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:og(r.bundledQuery),readTime:Le(r.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.ts=new re(Q.es),this.ns=new re(Q.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Q(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Q(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new S(new q([])),r=new Q(n,e),s=new Q(n,e+1),i=[];return this.ns.forEachInRange([r,s],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new S(new q([])),r=new Q(n,e),s=new Q(n,e+1);let i=F();return this.ns.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Q(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Q{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return S.comparator(e.key,n.key)||L(e.fs,n.fs)}static ss(e,n){return L(e.fs,n.fs)||S.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new re(Q.es)}checkEmpty(e){return y.resolve(this.An.length===0)}addMutationBatch(e,n,r,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new sg(i,n,r,s);this.An.push(o);for(const a of s)this.ws=this.ws.add(new Q(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.gs(r),i=s<0?0:s;return y.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return y.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Q(n,0),s=new Q(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([r,s],o=>{const a=this._s(o.fs);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new re(L);return n.forEach(s=>{const i=new Q(s,0),o=new Q(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{r=r.add(a.fs)})}),y.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;S.isDocumentKey(i)||(i=i.child(""));const o=new Q(new S(i),0);let a=new re(L);return this.ws.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.fs)),!0)},o),y.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){M(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return y.forEach(n.mutations,s=>{const i=new Q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Q(n,0),s=this.ws.firstAfterOrEqual(r);return y.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,y.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new ae(S.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return y.resolve(r?r.document.clone():oe.newInvalidDocument(n))}getEntries(e,n){let r=ft();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():oe.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=ft();const i=new S(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||Lr(n,c)&&(s=s.insert(c.key,c.clone()))}return y.resolve(s)}Es(e,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Eg(this)}getSize(e){return y.resolve(this.size)}}class Eg extends ug{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.De.addEntry(e,s.document,this.getReadTime(r))):this.De.removeEntry(r)}),y.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.persistence=e,this.Is=new On(n=>Ii(n),Si),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.As=0,this.Rs=new Vi,this.targetCount=0,this.Ps=Vt.ie()}forEachTarget(e,n){return this.Is.forEach((r,s)=>n(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),y.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new Vt(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.ce(n),y.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return y.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),y.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),y.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return y.resolve(r)}containsKey(e,n){return y.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.bs={},this.Be=new vi(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Tg(this),this.Jt=new ag,this.Je=function(r,s){return new _g(r,s)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new ig(n),this.Ye=new vg(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new wg(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){_("MemoryPersistence","Starting transaction:",e);const s=new Sg(this.Be.next());return this.referenceDelegate.Vs(),r(s).next(i=>this.referenceDelegate.Ss(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ds(e,n){return y.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Sg extends rg{constructor(e){super(),this.currentSequenceNumber=e}}class Bi{constructor(e){this.persistence=e,this.Cs=new Vi,this.Ns=null}static ks(e){return new Bi(e)}get xs(){if(this.Ns)return this.Ns;throw b()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),y.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),y.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.xs,r=>{const s=S.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return y.or([()=>y.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class du{constructor(){this.activeTargetIds=Gc()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ag{constructor(){this.pi=new du,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new du,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,s,i){const o=this.Ui(e,n);_("RestConnection","Sending: ",o,r);const a={};return this.qi(a,s,i),this.Ki(e,o,a,r).then(c=>(_("RestConnection","Received: ",c),c),c=>{throw gc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ji(e,n,r,s,i){return this.Bi(e,n,r,s,i)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ot,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ui(e,n){const r=bg[e];return`${this.Mi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,s){return new Promise((i,o)=>{const a=new Xf;a.listenOnce(Wf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case mi.NO_ERROR:const u=a.getResponseJson();_("Connection","XHR received:",JSON.stringify(u)),i(u);break;case mi.TIMEOUT:_("Connection",'RPC "'+e+'" timed out'),o(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case mi.HTTP_ERROR:const l=a.getStatus();if(_("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(m)>=0?m:p.UNKNOWN}(h.status);o(new E(d,h.message))}else o(new E(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{_("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}Qi(e,n,r){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Hf(),o=zf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Gf({})),this.qi(a.initMessageHeaders,n,r),zo()||Ko()||Kh()||Go()||Gh()||Wo()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");_("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Rg({Vi:m=>{h?_("Connection","Not sending because WebChannel is closed:",m):(l||(_("Connection","Opening WebChannel transport."),u.open(),l=!0),_("Connection","WebChannel sending:",m),u.send(m))},Si:()=>u.close()}),g=(m,k,T)=>{m.listen(k,z=>{try{T(z)}catch(j){setTimeout(()=>{throw j},0)}})};return g(u,br.EventType.OPEN,()=>{h||_("Connection","WebChannel transport opened.")}),g(u,br.EventType.CLOSE,()=>{h||(h=!0,_("Connection","WebChannel transport closed"),d.Fi())}),g(u,br.EventType.ERROR,m=>{h||(h=!0,gc("Connection","WebChannel transport errored:",m),d.Fi(new E(p.UNAVAILABLE,"The operation could not be completed")))}),g(u,br.EventType.MESSAGE,m=>{var k;if(!h){const T=m.data[0];M(!!T);const z=T,j=z.error||((k=z[0])===null||k===void 0?void 0:k.error);if(j){_("Connection","WebChannel received error:",j);const H=j.status;let U=function(Ee){const Ne=X[Ee];if(Ne!==void 0)return Wc(Ne)}(H),_e=j.message;U===void 0&&(U=p.INTERNAL,_e="Unknown error status: "+H+" with message "+j.message),h=!0,d.Fi(new E(U,_e)),u.close()}else _("Connection","WebChannel received:",T),d.Oi(T)}}),g(o,Kf.STAT_EVENT,m=>{m.stat===dc.PROXY?_("Connection","Detected buffering proxy"):m.stat===dc.NOPROXY&&_("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}function $i(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){return new $p(t,!0)}class pu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Wi=r,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),s=Math.max(0,n-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s,i,o,a,c){this.Oe=e,this.nr=r,this.sr=s,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new pu(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===p.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.rr===n&&this.Ir(r,s)},r=>{e(()=>{const s=new E(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(s)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{r(()=>this.Ar(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ng extends gu{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=Hp(this.k,e),r=function(s){if(!("targetChange"in s))return P.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?P.min():i.readTime?Le(i.readTime):P.min()}(e);return this.listener.Pr(n,r)}br(e){const n={};n.database=Mi(this.k),n.addTarget=function(s,i){let o;const a=i.target;return o=Ai(a)?{documents:Kp(s,a)}:{query:Gp(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=eu(s,i.resumeToken):i.snapshotVersion.compareTo(P.min())>0&&(o.readTime=Hr(s,i.snapshotVersion.toTimestamp())),o}(this.k,e);const r=Jp(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Mi(this.k),n.removeTarget=e,this.gr(n)}}class Og extends gu{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=Wp(e.writeResults,e.commitTime),r=Le(e.commitTime);return this.listener.Cr(r,n)}return M(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Mi(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zp(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.Bi(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(p.UNKNOWN,s.toString())})}ji(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.ji(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(p.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class Pg{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?($e(n),this.Lr=!1):_("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{gt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.Gr.add(4),await Dn(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Wr(c)}(this))})}),this.Jr=new Pg(r,s)}}async function Wr(t){if(gt(t))for(const e of t.zr)await e(!0)}async function Dn(t){for(const e of t.zr)await e(!1)}function mu(t,e){const n=R(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Hi(n)?ji(n):Bt(n).lr()&&qi(n,e))}function yu(t,e){const n=R(t),r=Bt(n);n.Wr.delete(e),r.lr()&&vu(n,e),n.Wr.size===0&&(r.lr()?r._r():gt(n)&&n.Jr.set("Unknown"))}function qi(t,e){t.Yr.X(e.targetId),Bt(t).br(e)}function vu(t,e){t.Yr.X(e),Bt(t).vr(e)}function ji(t){t.Yr=new Fp({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Bt(t).start(),t.Jr.Br()}function Hi(t){return gt(t)&&!Bt(t).hr()&&t.Wr.size>0}function gt(t){return R(t).Gr.size===0}function wu(t){t.Yr=void 0}async function Mg(t){t.Wr.forEach((e,n)=>{qi(t,e)})}async function Ug(t,e){wu(t),Hi(t)?(t.Jr.Kr(e),ji(t)):t.Jr.set("Unknown")}async function xg(t,e,n){if(t.Jr.set("Online"),e instanceof Jc&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kr(t,r)}else if(e instanceof jr?t.Yr.ot(e):e instanceof Xc?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(P.min()))try{const r=await lu(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Wr.get(c);u&&s.Wr.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Wr.get(a);if(!c)return;s.Wr.set(a,c.withResumeToken(ie.EMPTY_BYTE_STRING,c.snapshotVersion)),vu(s,a);const u=new pt(c.target,a,1,c.sequenceNumber);qi(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Kr(t,r)}}async function Kr(t,e,n){if(!Cn(e))throw e;t.Gr.add(1),await Dn(t),t.Jr.set("Offline"),n||(n=()=>lu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Wr(t)})}function _u(t,e){return e().catch(n=>Kr(t,n,e))}async function Gr(t){const e=R(t),n=je(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Fg(e);)try{const s=await mg(e.localStore,r);if(s===null){e.Qr.length===0&&n._r();break}r=s.batchId,Vg(e,s)}catch(s){await Kr(e,s)}Eu(e)&&Tu(e)}function Fg(t){return gt(t)&&t.Qr.length<10}function Vg(t,e){t.Qr.push(e);const n=je(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Eu(t){return gt(t)&&!je(t).hr()&&t.Qr.length>0}function Tu(t){je(t).start()}async function Bg(t){je(t).kr()}async function $g(t){const e=je(t);for(const n of t.Qr)e.Dr(n.mutations)}async function qg(t,e,n){const r=t.Qr.shift(),s=Ui.from(r,e,n);await _u(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Gr(t)}async function jg(t,e){e&&je(t).Sr&&await async function(n,r){if(s=r.code,Op(s)&&s!==p.ABORTED){const i=n.Qr.shift();je(n).wr(),await _u(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Gr(n)}var s}(t,e),Eu(t)&&Tu(t)}async function Hg(t,e){const n=R(t);e?(n.Gr.delete(2),await Wr(n)):e||(n.Gr.add(2),await Dn(n),n.Jr.set("Unknown"))}function Bt(t){return t.Xr||(t.Xr=function(e,n,r){const s=R(e);return s.Fr(),new Ng(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:Mg.bind(null,t),Ni:Ug.bind(null,t),Pr:xg.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Hi(t)?ji(t):t.Jr.set("Unknown")):(await t.Xr.stop(),wu(t))})),t.Xr}function je(t){return t.Zr||(t.Zr=function(e,n,r){const s=R(e);return s.Fr(),new Og(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:Bg.bind(null,t),Ni:jg.bind(null,t),Nr:$g.bind(null,t),Cr:qg.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Gr(t)):(await t.Zr.stop(),t.Qr.length>0&&(_("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new zi(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wi(t,e){if($e("AsyncQueue",`${e}: ${t}`),Cn(t))return new E(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e?(n,r)=>e(n,r)||S.comparator(n.key,r.key):(n,r)=>S.comparator(n.key,r.key),this.keyedMap=Ni(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new $t(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.eo=new ae(S.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):b():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class qt{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new qt(e,n,$t.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.so=void 0,this.listeners=[]}}class Wg{constructor(){this.queries=new On(e=>Oc(e),Pr),this.onlineState="Unknown",this.io=new Set}}async function Kg(t,e){const n=R(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new zg),s)try{i.so=await n.onListen(r)}catch(o){const a=Wi(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&Ki(n)}async function Gg(t,e){const n=R(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Xg(t,e){const n=R(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(s)&&(r=!0);o.so=s}}r&&Ki(n)}function Jg(t,e,n){const r=R(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ki(t){t.io.forEach(e=>{e.next()})}class Yg{constructor(e,n,r){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=qt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.key=e}}class Au{constructor(e){this.key=e}}class Qg{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=F(),this.mutatedKeys=F(),this.Ao=Dc(e),this.Ro=new $t(this.Ao)}get Po(){return this.To}bo(e,n){const r=n?n.vo:new Iu,s=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Or(this.query)&&s.size===this.query.limit?s.last():null,u=Dr(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),g=Lr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;d&&g?d.data.isEqual(g.data)?m!==k&&(r.track({type:3,doc:g}),T=!0):this.Vo(d,g)||(r.track({type:2,doc:g}),T=!0,(c&&this.Ao(g,c)>0||u&&this.Ao(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),T=!0):d&&!g&&(r.track({type:1,doc:d}),T=!0,(c||u)&&(a=!0)),T&&(g?(o=o.add(g),i=k?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Or(this.query)||Dr(this.query))for(;o.size>this.query.limit;){const l=Or(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Ro:o,vo:r,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((u,l)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(h)-g(d)}(u.type,l.type)||this.Ao(u.doc,l.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new qt(this.query,e.Ro,s,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Iu,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=F(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Au(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Su(r))}),n}ko(e){this.To=e.zn,this.Io=F();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return qt.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Zg{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class em{constructor(e){this.key=e,this.$o=!1}}class tm{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Fo={},this.Oo=new On(a=>Oc(a),Pr),this.Mo=new Map,this.Lo=new Set,this.Bo=new ae(S.comparator),this.Uo=new Map,this.qo=new Vi,this.Ko={},this.jo=new Map,this.Qo=Vt.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function nm(t,e){const n=dm(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await yg(n.localStore,ht(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await rm(n,e,r,a==="current"),n.isPrimaryClient&&mu(n.remoteStore,o)}return s}async function rm(t,e,n,r){t.Go=(l,h,d)=>async function(g,m,k,T){let z=m.view.bo(k);z.Bn&&(z=await hu(g.localStore,m.query,!1).then(({documents:U})=>m.view.bo(U,z)));const j=T&&T.targetChanges.get(m.targetId),H=m.view.applyChanges(z,g.isPrimaryClient,j);return Ou(g,m.targetId,H.Co),H.snapshot}(t,l,h,d);const s=await hu(t.localStore,e,!0),i=new Qg(e,s.zn),o=i.bo(s.documents),a=Rn.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Ou(t,n,c.Co);const u=new Zg(e,n,i);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function sm(t,e){const n=R(t),r=n.Oo.get(e),s=n.Mo.get(r.targetId);if(s.length>1)return n.Mo.set(r.targetId,s.filter(i=>!Pr(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yu(n.remoteStore,r.targetId),Gi(n,r.targetId)}).catch(Nn)):(Gi(n,r.targetId),await Fi(n.localStore,r.targetId,!0))}async function im(t,e,n){const r=fm(t);try{const s=await function(i,o){const a=R(i),c=ye.now(),u=o.reduce((h,d)=>h.add(d.key),F());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,u).next(d=>{l=d;const g=[];for(const m of o){const k=Rp(m,l.get(m.key));k!=null&&g.push(new dt(m.key,k,Sc(k.value.mapValue),Pe.exists(!0)))}return a.An.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new ae(L)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(r,s.batchId,n),await Pn(r,s.changes),await Gr(r.remoteStore)}catch(s){const i=Wi(s,"Failed to persist write");n.reject(i)}}async function ku(t,e){const n=R(t);try{const r=await pg(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Uo.get(i);o&&(M(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.$o=!0:s.modifiedDocuments.size>0?M(o.$o):s.removedDocuments.size>0&&(M(o.$o),o.$o=!1))}),await Pn(n,r,e)}catch(r){await Nn(r)}}function bu(t,e,n){const r=R(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ro(o)&&(c=!0)}),c&&Ki(a)}(r.eventManager,e),s.length&&r.Fo.Pr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function om(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Uo.get(e),i=s&&s.key;if(i){let o=new ae(S.comparator);o=o.insert(i,oe.newNoDocument(i,P.min()));const a=F().add(i),c=new qr(P.min(),new Map,new re(L),o,a);await ku(r,c),r.Bo=r.Bo.remove(i),r.Uo.delete(e),Xi(r)}else await Fi(r.localStore,e,!1).then(()=>Gi(r,e,n)).catch(Nn)}async function am(t,e){const n=R(t),r=e.batch.batchId;try{const s=await fg(n.localStore,e);Cu(n,r,null),Ru(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pn(n,s)}catch(s){await Nn(s)}}async function cm(t,e,n){const r=R(t);try{const s=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.An.lookupMutationBatch(c,o).next(l=>(M(l!==null),u=l.keys(),a.An.removeMutationBatch(c,l))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,u))})}(r.localStore,e);Cu(r,e,n),Ru(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pn(r,s)}catch(s){await Nn(s)}}function Ru(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Cu(t,e,n){const r=R(t);let s=r.Ko[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ko[r.currentUser.toKey()]=s}}function Gi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||Nu(t,r)})}function Nu(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(yu(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Xi(t))}function Ou(t,e,n){for(const r of n)r instanceof Su?(t.qo.addReference(r.key,e),um(t,r)):r instanceof Au?(_("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Nu(t,r.key)):b()}function um(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(_("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Xi(t))}function Xi(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new S(q.fromString(e)),r=t.Qo.next();t.Uo.set(r,new em(n)),t.Bo=t.Bo.insert(n,r),mu(t.remoteStore,new pt(ht(bi(n.path)),r,2,vi.I))}}async function Pn(t,e,n){const r=R(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Go(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=xi.$n(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Fo.Pr(s),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.kn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Cn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qn.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);u.qn=u.qn.insert(h,m)}}}(r.localStore,i))}async function lm(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await uu(n.localStore,e);n.currentUser=e,function(s,i){s.jo.forEach(o=>{o.forEach(a=>{a.reject(new E(p.CANCELLED,i))})}),s.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pn(n,r.Gn)}}function hm(t,e){const n=R(t),r=n.Uo.get(e);if(r&&r.$o)return F().add(r.key);{let s=F();const i=n.Mo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Po)}return s}}function dm(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ku.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=om.bind(null,e),e.Fo.Pr=Xg.bind(null,e.eventManager),e.Fo.zo=Jg.bind(null,e.eventManager),e}function fm(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=am.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cm.bind(null,e),e}class pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=zr(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return dg(this.persistence,new lg,e.initialUser,this.k)}Yo(e){return new Ig(Bi.ks,this.k)}Jo(e){return new Ag}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lm.bind(null,this.syncEngine),await Hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wg}createDatastore(e){const n=zr(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Cg(s));var s;return function(i,o,a,c){return new Dg(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>bu(this.syncEngine,a,0),o=fu.bt()?new fu:new kg,new Lg(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new tm(r,s,i,o,a,c);return u&&(l.Wo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);_("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Dn(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=de.UNAUTHENTICATED,this.clientId=mc.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wi(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vm(t,e){t.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _m(t);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=R(i);a.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const c=gt(a);a.Gr.add(3),await Dn(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Wr(a)}(e.remoteStore,s)),t.onlineComponents=e}async function _m(t){return t.offlineComponents||(_("FirestoreClient","Using default OfflineComponentProvider"),await vm(t,new pm)),t.offlineComponents}async function Du(t){return t.onlineComponents||(_("FirestoreClient","Using default OnlineComponentProvider"),await wm(t,new gm)),t.onlineComponents}function Em(t){return Du(t).then(e=>e.syncEngine)}async function Pu(t){const e=await Du(t),n=e.eventManager;return n.onListen=nm.bind(null,e.syncEngine),n.onUnlisten=sm.bind(null,e.syncEngine),n}class Tm{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ln{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e,n){if(!n)throw new E(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Im(t,e,n,r){if(e===!0&&r===!0)throw new E(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uu(t){if(!S.isDocumentKey(t))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xu(t){if(S.isDocumentKey(t))throw new E(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ji(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Me(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ji(t);throw new E(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Im("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fu({}),this._settingsFrozen=!1,e instanceof Ln?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(s.options.projectId)}(e))}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yf;switch(n.type){case"gapi":const r=n.client;return M(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new ep(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Lu.get(e);n&&(_("ComponentProvider","Removing Datastore"),Lu.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}}class Mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class He extends Mn{constructor(e,n,r){super(e,n,bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new S(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function Bw(t,e,...n){if(t=V(t),Mu("collection","path",e),t instanceof Yi){const r=q.fromString(e,...n);return xu(r),new He(t,null,r)}{if(!(t instanceof ge||t instanceof He))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(q.fromString(e,...n));return xu(r),new He(t.firestore,null,r)}}function Sm(t,e,...n){if(t=V(t),arguments.length===1&&(e=mc.A()),Mu("doc","path",e),t instanceof Yi){const r=q.fromString(e,...n);return Uu(r),new ge(t,null,new S(r))}{if(!(t instanceof ge||t instanceof He))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(q.fromString(e,...n));return Uu(r),new ge(t.firestore,t instanceof He?t.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new pu(this,"async_queue_retry"),this.Ra=()=>{const n=$i();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=$i();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=$i();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new ct;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Cn(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(r=>{this.Ta=r,this.Ea=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw $e("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ea=!1,r))));return this.ma=n,n}enqueueAfterDelay(e,n,r){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const s=zi.createAndSchedule(this,e,n,r,i=>this.Va(i));return this.pa.push(s),s}Pa(){this.Ta&&b()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}function Vu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class mt extends Yi{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Am,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$u(this),this._firestoreClient.terminate()}}function $w(t=As()){return er(t,"firestore").getImmediate()}function Bu(t){return t._firestoreClient||$u(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $u(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Tm(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ym(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(ie.fromBase64String(e))}catch(n){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=/^__.*__$/;class bm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Br(e,this.data,n,this.fieldTransforms)}}class qu{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ju(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class eo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new eo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$a({path:r,Oa:!1});return s.Ma(e),s}La(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$a({path:r,Oa:!1});return s.ka(),s}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Qr(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(ju(this.xa)&&km.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Rm{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||zr(e)}ja(e,n,r,s=!1){return new eo({xa:e,methodName:n,Ka:r,path:fe.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function to(t){const e=t._freezeSettings(),n=zr(t._databaseId);return new Rm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hu(t,e,n,r,s,i={}){const o=t.ja(i.merge||i.mergeFields?2:0,e,n,s);no("Data must be an object, but it was:",o,r);const a=zu(r,o);let c,u;if(i.merge)c=new _n(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=ro(e,h,n);if(!o.contains(d))throw new E(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ku(l,d)||l.push(d)}c=new _n(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new bm(new ve(a),c,u)}class Jr extends Qi{_toFieldTransform(e){if(e.xa!==2)throw e.xa===1?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jr}}function Cm(t,e,n,r){const s=t.ja(1,e,n);no("Data must be an object, but it was:",s,r);const i=[],o=ve.empty();ut(r,(c,u)=>{const l=so(e,c,n);u=V(u);const h=s.La(l);if(u instanceof Jr)i.push(l);else{const d=Yr(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new _n(i);return new qu(o,a,s.fieldTransforms)}function Nm(t,e,n,r,s,i){const o=t.ja(1,e,n),a=[ro(e,r,n)],c=[s];if(i.length%2!=0)throw new E(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ro(e,i[d])),c.push(i[d+1]);const u=[],l=ve.empty();for(let d=a.length-1;d>=0;--d)if(!Ku(u,a[d])){const g=a[d];let m=c[d];m=V(m);const k=o.La(g);if(m instanceof Jr)u.push(g);else{const T=Yr(m,k);T!=null&&(u.push(g),l.set(g,T))}}const h=new _n(u);return new qu(l,h,o.fieldTransforms)}function Yr(t,e){if(Wu(t=V(t)))return no("Unsupported field value:",e,t),zu(t,e);if(t instanceof Qi)return function(n,r){if(!ju(r.xa))throw r.Ua(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ua(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Yr(o,r.Ba(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Tp(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ye.fromDate(n);return{timestampValue:Hr(r.k,s)}}if(n instanceof ye){const s=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Hr(r.k,s)}}if(n instanceof Zi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jt)return{bytesValue:eu(r.k,n._byteString)};if(n instanceof ge){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Oi(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ua(`Unsupported field value: ${Ji(n)}`)}(t,e)}function zu(t,e){const n={};return vc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ut(t,(r,s)=>{const i=Yr(s,e.Fa(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Zi||t instanceof jt||t instanceof ge||t instanceof Qi)}function no(t,e,n){if(!Wu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ji(n);throw r==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function ro(t,e,n){if((e=V(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return so(t,e);throw Qr("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Om=new RegExp("[~\\*/\\[\\]]");function so(t,e,n){if(e.search(Om)>=0)throw Qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xr(...e.split("."))._internalPath}catch{throw Qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qr(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(p.INVALID_ARGUMENT,a+t+c)}function Ku(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(io("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dm extends Gu{data(){return super.data()}}function io(t,e){return typeof e=="string"?so(t,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xu extends Gu{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(io("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zr extends Xu{data(e={}){return super.data(e)}}class Pm{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Un(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zr(this._firestore,this._userDataWriter,r.key,r,new Un(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Zr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Un(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Zr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Un(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Lm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Lm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){if(Dr(t)&&t.explicitOrderBy.length===0)throw new E(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Um{}function qw(t,...e){for(const n of e)t=n._apply(t);return t}class xm extends Um{constructor(e,n){super(),this.Ga=e,this.Ja=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new E(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ut(s,i);return function(a,c){if(Cc(a)===null){const u=Nc(a);u!==null&&Fm(a,u,c.field)}}(r,o),o}(e._query,this.Ga,this.Ja);return new Mn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Sn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function jw(t,e="asc"){const n=e,r=io("orderBy",t);return new xm(r,n)}function Fm(t,e,n){if(!n.isEqual(e))throw new E(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{convertValue(e,n="none"){switch(lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const r={};return ut(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Zi(G(e.latitude),G(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_c(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(En(e));default:return null}}convertTimestamp(e){const n=qe(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=q.fromString(e);M(au(r));const s=new Ln(r.get(1),r.get(3)),i=new S(r.popFirst(5));return s.isEqual(n)||$e(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Yu extends Vm{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,n)}}function Hw(t,e,n){t=Me(t,ge);const r=Me(t.firestore,mt),s=Ju(t.converter,e,n);return es(r,[Hu(to(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pe.none())])}function zw(t,e,n,...r){t=Me(t,ge);const s=Me(t.firestore,mt),i=to(s);let o;return o=typeof(e=V(e))=="string"||e instanceof Xr?Nm(i,"updateDoc",t._key,e,n,r):Cm(i,"updateDoc",t._key,e),es(s,[o.toMutation(t._key,Pe.exists(!0))])}function Ww(t){return es(Me(t.firestore,mt),[new zc(t._key,Pe.none())])}function Kw(t,e){const n=Me(t.firestore,mt),r=Sm(t),s=Ju(t.converter,e);return es(n,[Hu(to(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function Gw(t,...e){var n,r,s;t=V(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vu(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof ge)u=Me(t.firestore,mt),l=bi(t._key.path),c={next:h=>{e[o]&&e[o](Bm(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Me(t,Mn);u=Me(h.firestore,mt),l=h._query;const d=new Yu(u);c={next:g=>{e[o]&&e[o](new Pm(u,d,h,g))},error:e[o+1],complete:e[o+2]},Mm(t._query)}return function(h,d,g,m){const k=new mm(m),T=new Yg(d,k,g);return h.asyncQueue.enqueueAndForget(async()=>Kg(await Pu(h),T)),()=>{k.na(),h.asyncQueue.enqueueAndForget(async()=>Gg(await Pu(h),T))}}(Bu(u),l,a,c)}function es(t,e){return function(n,r){const s=new ct;return n.asyncQueue.enqueueAndForget(async()=>im(await Em(n),r,s)),s.promise}(Bu(t),e)}function Bm(t,e,n){const r=n.docs.get(e._key),s=new Yu(t);return new Xu(t,s,e._key,r,new Un(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ot=n})(At),St(new et("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new mt(s,new Qf(n.getProvider("auth-internal")),new np(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ae(fc,"3.4.1",t),Ae(fc,"3.4.1","esm2017")})();var $m="firebase",qm="9.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae($m,qm,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="firebasestorage.googleapis.com",Zu="storageBucket",jm=2*60*1e3,Hm=10*60*1e3;class W extends Ze{constructor(e,n){super(oo(e),`Firebase Storage: ${n} (${oo(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,W.prototype)}_codeEquals(e){return oo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function oo(t){return"storage/"+t}function ao(){const t="An unknown error occurred, please check the error payload for server response.";return new W("unknown",t)}function zm(t){return new W("object-not-found","Object '"+t+"' does not exist.")}function Wm(t){return new W("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Km(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new W("unauthenticated",t)}function Gm(){return new W("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Xm(t){return new W("unauthorized","User does not have permission to access '"+t+"'.")}function Jm(){return new W("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ym(){return new W("canceled","User canceled the upload/download.")}function Qm(t){return new W("invalid-url","Invalid URL '"+t+"'.")}function Zm(t){return new W("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ey(){return new W("no-default-bucket","No default bucket found. Did you set the '"+Zu+"' property when initializing the app?")}function ty(){return new W("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ny(){return new W("no-download-url","The given file does not have any download URLs.")}function co(t){return new W("invalid-argument",t)}function el(){return new W("app-deleted","The Firebase app was deleted.")}function ry(t){return new W("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xn(t,e){return new W("invalid-format","String does not match format '"+t+"': "+e)}function Fn(t){throw new W("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=we.makeFromUrl(e,n)}catch{return new we(e,"")}if(r.path==="")return r;throw Zm(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},k=n===Qu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",z=new RegExp(`^https?://${k}/${s}/${T}`,"i"),H=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:u},{regex:z,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<H.length;U++){const _e=H[U],Ee=_e.regex.exec(e);if(Ee){const Ne=Ee[_e.indices.bucket];let Ye=Ee[_e.indices.path];Ye||(Ye=""),r=new we(Ne,Ye),_e.postModify(r);break}}if(r==null)throw Qm(e);return r}}class sy{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...T){u||(u=!0,e.apply(null,T))}function h(T){s=setTimeout(()=>{s=null,t(g,c())},T)}function d(){i&&clearTimeout(i)}function g(T,...z){if(u){d();return}if(T){d(),l.call(null,T,...z);return}if(c()||o){d(),l.call(null,T,...z);return}r<64&&(r*=2);let H;a===1?(a=2,H=0):H=(r+Math.random())*1e3,h(H)}let m=!1;function k(T){m||(m=!0,d(),!u&&(s!==null?(T||(a=2),clearTimeout(s),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function oy(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){return t!==void 0}function cy(t){return typeof t=="object"&&!Array.isArray(t)}function uo(t){return typeof t=="string"||t instanceof String}function tl(t){return lo()&&t instanceof Blob}function lo(){return typeof Blob!="undefined"}function nl(t,e,n,r){if(r<e)throw co(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw co(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rl(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yt||(yt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ts(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===yt.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===yt.ABORT;r(!1,new ts(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ts(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());ay(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ao();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?el():Ym();o(c)}else{const c=Jm();o(c)}};this.canceled_?n(!1,new ts(!1,null,!0)):this.backoffId_=iy(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oy(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class ts{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ly(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hy(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function dy(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fy(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function py(t,e,n,r,s,i){const o=rl(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return dy(c,e),ly(c,n),hy(c,i),fy(c,r),new uy(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function my(...t){const e=gy();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(lo())return new Blob(t);throw new W("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function yy(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fo{constructor(e,n){this.data=e,this.contentType=n||null}}function wy(t,e){switch(t){case be.RAW:return new fo(sl(e));case be.BASE64:case be.BASE64URL:return new fo(il(t,e));case be.DATA_URL:return new fo(Ey(e),Ty(e))}throw ao()}function sl(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _y(t){let e;try{e=decodeURIComponent(t)}catch{throw xn(be.DATA_URL,"Malformed data URL.")}return sl(e)}function il(t,e){switch(t){case be.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw xn(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case be.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw xn(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vy(e)}catch{throw xn(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ol{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xn(be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Iy(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ey(t){const e=new ol(t);return e.base64?il(be.BASE64,e.rest):_y(e.rest)}function Ty(t){return new ol(t).contentType}function Iy(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){let r=0,s="";tl(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(tl(this.data_)){const r=this.data_,s=yy(r,e,n);return s===null?null:new ze(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ze(r,!0)}}static getBlob(...e){if(lo()){const n=e.map(r=>r instanceof ze?r.data_:r);return new ze(my.apply(null,n))}else{const n=e.map(o=>uo(o)?wy(be.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new ze(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){let e;try{e=JSON.parse(t)}catch{return null}return cy(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ay(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cl(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){return e}class he{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ky}}let ns=null;function by(t){return!uo(t)||t.length<2?t:cl(t)}function ul(){if(ns)return ns;const t=[];t.push(new he("bucket")),t.push(new he("generation")),t.push(new he("metageneration")),t.push(new he("name","fullPath",!0));function e(i,o){return by(o)}const n=new he("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new he("size");return s.xform=r,t.push(s),t.push(new he("timeCreated")),t.push(new he("updated")),t.push(new he("md5Hash",null,!0)),t.push(new he("cacheControl",null,!0)),t.push(new he("contentDisposition",null,!0)),t.push(new he("contentEncoding",null,!0)),t.push(new he("contentLanguage",null,!0)),t.push(new he("contentType",null,!0)),t.push(new he("metadata","customMetadata",!0)),ns=t,ns}function Ry(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new we(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Cy(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Ry(r,t),r}function ll(t,e,n){const r=al(e);return r===null?null:Cy(t,r,n)}function Ny(t,e,n,r){const s=al(e);if(s===null||!uo(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),g=ho(d,n,r),m=rl({alt:"media",token:u});return g+m})[0]}function Oy(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class hl{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){if(!t)throw ao()}function Dy(t,e){function n(r,s){const i=ll(t,s,e);return dl(i!==null),i}return n}function Py(t,e){function n(r,s){const i=ll(t,s,e);return dl(i!==null),Ny(i,s,t.host,t._protocol)}return n}function fl(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Gm():s=Km():n.getStatus()===402?s=Wm(t.bucket):n.getStatus()===403?s=Xm(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Ly(t){const e=fl(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zm(t.path)),i.serverResponse=s.serverResponse,i}return n}function My(t,e,n){const r=e.fullServerUrl(),s=ho(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new hl(s,i,Py(t,n),o);return a.errorHandler=Ly(e),a}function Uy(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xy(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Uy(null,e)),r}function Fy(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let H="";for(let U=0;U<2;U++)H=H+Math.random().toString().slice(2);return H}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=xy(e,r,s),l=Oy(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=ze.getBlob(h,r,d);if(g===null)throw ty();const m={name:u.fullPath},k=ho(i,t.host,t._protocol),T="POST",z=t.maxUploadRetryTime,j=new hl(k,T,Dy(t,n),z);return j.urlParams=m,j.headers=o,j.body=g.uploadData(),j.errorHandler=fl(e),j}class Vy{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Fn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class By extends Vy{initXhr(){this.xhr_.responseType="text"}}function pl(){return new By}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){this._service=e,n instanceof we?this._location=n:this._location=we.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vt(e,n)}get root(){const e=new we(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cl(this._location.path)}get storage(){return this._service}get parent(){const e=Sy(this._location.path);if(e===null)return null;const n=new we(this._location.bucket,e);return new vt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ry(e)}}function $y(t,e,n){t._throwIfRoot("uploadBytes");const r=Fy(t.storage,t._location,ul(),new ze(e,!0),n);return t.storage.makeRequestWithTokens(r,pl).then(s=>({metadata:s,ref:t}))}function qy(t){t._throwIfRoot("getDownloadURL");const e=My(t.storage,t._location,ul());return t.storage.makeRequestWithTokens(e,pl).then(n=>{if(n===null)throw ny();return n})}function jy(t,e){const n=Ay(t._location.path,e),r=new we(t._location.bucket,n);return new vt(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){return/^[A-Za-z]+:\/\//.test(t)}function zy(t,e){return new vt(t,e)}function gl(t,e){if(t instanceof po){const n=t;if(n._bucket==null)throw ey();const r=new vt(n,n._bucket);return e!=null?gl(r,e):r}else return e!==void 0?jy(t,e):t}function Wy(t,e){if(e&&Hy(e)){if(t instanceof po)return zy(t,e);throw co("To use ref(service, url), the first argument must be a Storage instance.")}else return gl(t,e)}function ml(t,e){const n=e==null?void 0:e[Zu];return n==null?null:we.makeFromBucketSpec(n,t)}class po{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Qu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jm,this._maxUploadRetryTime=Hm,this._requests=new Set,s!=null?this._bucket=we.makeFromBucketSpec(s,this._host):this._bucket=ml(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=we.makeFromBucketSpec(this._url,e):this._bucket=ml(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vt(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new sy(el());{const i=py(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yl="@firebase/storage",vl="0.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="storage";function Xw(t,e,n){return t=V(t),$y(t,e,n)}function Jw(t){return t=V(t),qy(t)}function Yw(t,e){return t=V(t),Wy(t,e)}function Qw(t=As(),e){return t=V(t),er(t,wl).getImmediate({identifier:e})}function Ky(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new po(n,r,s,e,At)}function Gy(){St(new et(wl,Ky,"PUBLIC").setMultipleInstances(!0)),Ae(yl,vl,""),Ae(yl,vl,"esm2017")}Gy();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function go(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xy=_l,El=new Jt("auth","Firebase",_l());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Es("@firebase/auth");function rs(t,...e){Tl.logLevel<=O.ERROR&&Tl.error(`Auth (${At}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw mo(t,...e)}function Re(t,...e){return mo(t,...e)}function Il(t,e,n){const r=Object.assign(Object.assign({},Xy()),{[e]:n});return new Jt("auth","Firebase",r).create(e,{appName:t.name})}function Jy(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Te(t,"argument-error"),Il(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return El.create(t,...e)}function A(t,e,...n){if(!t)throw mo(e,...n)}function Ue(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rs(e),new Error(e)}function xe(t,e){t||Ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map;function Fe(t){xe(t instanceof Function,"Expected a class definition");let e=Sl.get(t);return e?(xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sl.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){const n=er(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qn(i,e!=null?e:{}))return s;Te(s,"already-initialized")}return n.initialize({options:e})}function Qy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fe);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zy(){return Al()==="http:"||Al()==="https:"}function Al(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zy()||Wo()||"connection"in navigator)?navigator.onLine:!0}function tv(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){this.shortDelay=e,this.longDelay=n,xe(n>e,"Short delay should be less than long delay!"),this.isMobile=zo()||Ko()}get(){return ev()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Vn(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ht(t,e,n,r,s={}){return bl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Yt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kl.fetch()(Rl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nv),e);try{const s=new sv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Il(t,l,u);Te(t,l)}}catch(s){if(s instanceof Ze)throw s;Te(t,"network-request-failed")}}async function $n(t,e,n,r,s={}){const i=await Ht(t,e,n,r,s);return"mfaPendingCredential"in i&&Te(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vo(t.config,s):`${t.config.apiScheme}://${s}`}class sv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Re(this.auth,"timeout")),rv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Re(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t,e){return Ht(t,"POST","/v1/accounts:delete",e)}async function ov(t,e){return Ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function av(t,e=!1){const n=V(t),r=await n.getIdToken(e),s=Eo(r);A(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qn(_o(s.auth_time)),issuedAtTime:qn(_o(s.iat)),expirationTime:qn(_o(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _o(t){return Number(t)*1e3}function Eo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=zh(n);return s?JSON.parse(s):(rs("Failed to decode base64 JWT payload"),null)}catch(s){return rs("Caught error parsing JWT payload as JSON",s),null}}function cv(t){const e=Eo(t);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ze&&uv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wt(t,ov(n,{idToken:r}));A(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?fv(i.providerUserInfo):[],a=dv(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function hv(t){const e=V(t);await ss(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fv(t){return t.map(e=>{var{providerId:n}=e,r=go(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(t,e){const n=await bl(t,{},async()=>{const r=Yt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):cv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jn;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(A(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(A(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){A(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class _t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=go(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wt(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return av(this,e)}reload(){return hv(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wt(this,iv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,z=(u=n.createdAt)!==null&&u!==void 0?u:void 0,j=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:H,emailVerified:U,isAnonymous:_e,providerData:Ee,stsTokenManager:Ne}=n;A(H&&Ne,e,"internal-error");const Ye=jn.fromJSON(this.name,Ne);A(typeof H=="string",e,"internal-error"),We(h,e.name),We(d,e.name),A(typeof U=="boolean",e,"internal-error"),A(typeof _e=="boolean",e,"internal-error"),We(g,e.name),We(m,e.name),We(k,e.name),We(T,e.name),We(z,e.name),We(j,e.name);const Gt=new _t({uid:H,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:_e,photoURL:m,phoneNumber:g,tenantId:k,stsTokenManager:Ye,createdAt:z,lastLoginAt:j});return Ee&&Array.isArray(Ee)&&(Gt.providerData=Ee.map(fs=>Object.assign({},fs))),T&&(Gt._redirectEventId=T),Gt}static async _fromIdTokenResponse(e,n,r=!1){const s=new jn;s.updateFromServerResponse(n);const i=new _t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ss(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nl.type="NONE";const Ol=Nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e,n){return`firebase:${t}:${e}:${n}`}class zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=is(this.userKey,s.apiKey,i),this.fullPersistenceKey=is("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zt(Fe(Ol),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fe(Ol);const o=is(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=_t._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ml(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xl(e))return"Blackberry";if(Fl(e))return"Webos";if(To(e))return"Safari";if((e.includes("chrome/")||Ll(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pl(t=J()){return/firefox\//i.test(t)}function To(t=J()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ll(t=J()){return/crios\//i.test(t)}function Ml(t=J()){return/iemobile/i.test(t)}function Ul(t=J()){return/android/i.test(t)}function xl(t=J()){return/blackberry/i.test(t)}function Fl(t=J()){return/webos/i.test(t)}function os(t=J()){return/iphone|ipad|ipod/i.test(t)}function gv(t=J()){var e;return os(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function mv(){return Go()&&document.documentMode===10}function Vl(t=J()){return os(t)||Ul(t)||Fl(t)||xl(t)||/windows phone/i.test(t)||Ml(t)}function yv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e=[]){let n;switch(t){case"Browser":n=Dl(J());break;case"Worker":n=`${Dl(J())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${At}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=El,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ss(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fe(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[Fe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Hn(t){return V(t)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zh(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,n){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}async function ql(t,e){return Ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e){return $n(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e){return $n(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function Ev(t,e){return $n(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Io{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new zn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wv(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _v(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ql(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ev(e,{idToken:n,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return $n(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="http://localhost";class Et extends Io{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=go(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Et(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wt(e,n)}buildRequest(){const e={requestUri:Tv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sv(t){const e=Qt(Zt(t)).link,n=e?Qt(Zt(e)).deep_link_id:null,r=Qt(Zt(t)).deep_link_id;return(r?Qt(Zt(r)).link:null)||r||n||e||t}class So{constructor(e){var n,r,s,i,o,a;const c=Qt(Zt(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Iv((s=c.mode)!==null&&s!==void 0?s:null);A(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sv(e);try{return new So(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.providerId=Kt.PROVIDER_ID}static credential(e,n){return zn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=So.parseLink(n);return A(r,"argument-error"),zn._fromEmailAndCode(e,r.code,r.tenantId)}}Kt.PROVIDER_ID="password";Kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ao{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Wn{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Wn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Et._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ge.credential(n,r)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Wn{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Wn{constructor(){super("twitter.com")}static credential(e,n){return Et._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Je.credential(n,r)}catch{return null}}}Je.TWITTER_SIGN_IN_METHOD="twitter.com";Je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(t,e){return $n(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _t._fromIdTokenResponse(e,r,s),o=jl(r);return new Tt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jl(r);return new Tt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Ze{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,as.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new as(e,n,r,s)}}function Hl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(t,i,e,r):i})}async function kv(t,e,n=!1){const r=await wt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await wt(t,Hl(r,s,e,t),n);A(i.idToken,r,"internal-error");const o=Eo(i.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),Tt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Te(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t,e,n=!1){const r="signIn",s=await Hl(t,r,e),i=await Tt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rv(t,e){return zl(Hn(t),e)}async function Zw(t,e,n){const r=Hn(t),s=await Av(r,{returnSecureToken:!0,email:e,password:n}),i=await Tt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function e_(t,e,n){return Rv(V(t),Kt.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(t,e){return Ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=V(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await wt(r,Cv(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function n_(t,e){return Wl(V(t),e,null)}function r_(t,e){return Wl(V(t),null,e)}async function Wl(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await wt(t,ql(r,i));await t._updateTokensIfNecessary(o,!0)}function s_(t,e,n,r){return V(t).onAuthStateChanged(e,n,r)}function i_(t){return V(t).signOut()}async function o_(t){return V(t).delete()}const cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){const t=J();return To(t)||os(t)}const Ov=1e3,Dv=10;class Gl extends Kl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nv()&&yv(),this.fallbackToPolling=Vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Dv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const Pv=Gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xl.type="SESSION";const Jl=Xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new us(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Lv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ko("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Uv(t){Ce().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){return typeof Ce().WorkerGlobalScope!="undefined"&&typeof Ce().importScripts=="function"}async function xv(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vv(){return Yl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="firebaseLocalStorageDb",Bv=1,ls="firebaseLocalStorage",Zl="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hs(t,e){return t.transaction([ls],e?"readwrite":"readonly").objectStore(ls)}function $v(){const t=indexedDB.deleteDatabase(Ql);return new Kn(t).toPromise()}function bo(){const t=indexedDB.open(Ql,Bv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ls,{keyPath:Zl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ls)?e(r):(r.close(),await $v(),e(await bo()))})})}async function eh(t,e,n){const r=hs(t,!0).put({[Zl]:e,value:n});return new Kn(r).toPromise()}async function qv(t,e){const n=hs(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function th(t,e){const n=hs(t,!0).delete(e);return new Kn(n).toPromise()}const jv=800,Hv=3;class nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Vv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xv(),!this.activeServiceWorker)return;this.sender=new Mv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bo();return await eh(e,cs,"1"),await th(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>eh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=hs(s,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nh.type="LOCAL";const zv=nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Re("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Wv().appendChild(r)})}function Gv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){return e?Fe(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Io{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xv(t){return zl(t.auth,new Ro(t),t.bypassAuthState)}function Jv(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),bv(n,new Ro(t),t.bypassAuthState)}async function Yv(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),kv(n,new Ro(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xv;case"linkViaPopup":case"linkViaRedirect":return Yv;case"reauthViaPopup":case"reauthViaRedirect":return Jv;default:Te(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new Vn(2e3,1e4);async function a_(t,e,n){const r=Hn(t);Jy(t,e,Ao);const s=rh(r,n);return new It(r,"signInViaPopup",e,s).executeNotNull()}class It extends sh{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Qv.get())};e()}}It.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="pendingRedirect",Co=new Map;class ew extends sh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await tw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tw(t,e){const n=rw(e),r=nw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nw(t){return Fe(t._redirectPersistence)}function rw(t){return is(Zv,t.config.apiKey,t.name)}async function sw(t,e,n=!1){const r=Hn(t),s=rh(r,e),o=await new ew(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=10*60*1e3;class ow{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Re(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ih(e))}saveEventToCache(e){this.cachedEventUids.add(ih(e)),this.lastProcessedEventTime=Date.now()}}function ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(t,e={}){return Ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lw=/^https?/;async function hw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cw(t);for(const n of e)try{if(dw(n))return}catch{}Te(t,"unauthorized-domain")}function dw(t){const e=yo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lw.test(n))return!1;if(uw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new Vn(3e4,6e4);function ah(){const t=Ce().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pw(t){return new Promise((e,n)=>{var r,s,i;function o(){ah(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ah(),n(Re(t,"network-request-failed"))},timeout:fw.get()})}if((s=(r=Ce().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Ce().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Gv("iframefcb");return Ce()[a]=()=>{gapi.load?o():n(Re(t,"network-request-failed"))},Kv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ds=null,e})}let ds=null;function gw(t){return ds=ds||pw(t),ds}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new Vn(5e3,15e3),yw="__/auth/iframe",vw="emulator/auth/iframe",ww={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_w=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ew(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vo(e,vw):`https://${t.config.authDomain}/${yw}`,r={apiKey:e.apiKey,appName:t.name,v:At},s=_w.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yt(r).slice(1)}`}async function Tw(t){const e=await gw(t),n=Ce().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Ew(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ww,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Re(t,"network-request-failed"),a=Ce().setTimeout(()=>{i(o)},mw.get());function c(){Ce().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sw=500,Aw=600,kw="_blank",bw="http://localhost";class ch{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rw(t,e,n,r=Sw,s=Aw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Iw),{width:r.toString(),height:s.toString(),top:i,left:o}),u=J().toLowerCase();n&&(a=Ll(u)?kw:n),Pl(u)&&(e=e||bw,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(gv(u)&&a!=="_self")return Cw(e||"",a),new ch(null);const h=window.open(e||"",a,l);A(h,t,"popup-blocked");try{h.focus()}catch{}return new ch(h)}function Cw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="__/auth/handler",Ow="emulator/auth/handler";function uh(t,e,n,r,s,i){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:At,eventId:s};if(e instanceof Ao){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Wn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Dw(t)}?${Yt(a).slice(1)}`}function Dw({config:t}){return t.emulator?vo(t,Ow):`https://${t.authDomain}/${Nw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="webStorageSupport";class Pw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jl,this._completeRedirectFn=sw}async _openPopup(e,n,r,s){var i;xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=uh(e,n,r,yo(),s);return Rw(e,o,ko())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Uv(uh(e,n,r,yo(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tw(e),r=new ow(e);return n.register("authEvent",s=>(A(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(No,{type:No},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[No];o!==void 0&&n(!!o),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vl()||To()||os()}}const Lw=Pw;var lh="@firebase/auth",hh="0.19.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xw(t){St(new et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),A(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bl(t)},c=new vv(o,a);return Qy(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),St(new et("auth-internal",e=>{const n=Hn(e.getProvider("auth").getImmediate());return(r=>new Mw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(lh,hh,Uw(t)),Ae(lh,hh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t=As()){const e=er(t,"auth");return e.isInitialized()?e.getImmediate():Yy(t,{popupRedirectResolver:Lw,persistence:[zv,Pv,Jl]})}xw("Browser");export{Sm as D,Gw as E,Ge as G,$w as L,Fw as N,jw as Q,Kw as T,qw as U,Bw as V,ye as a,Hw as b,Jw as c,c_ as d,Zw as e,t_ as f,Qw as g,a_ as h,Vw as i,i_ as j,n_ as k,r_ as l,o_ as m,s_ as o,Ww as p,Yw as r,e_ as s,Xw as u,zw as y};
