(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"OO+k":function(t,n,e){"use strict";e("B4/3"),e("ntG5"),e("jCQN"),e("oSis"),e("UA38")},gcOT:function(t,n,e){"use strict";var r,o,i,u,s,a,c,l;!function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"}(r||(r={})),function(t){t.Uri="uri",t.Base64="base64"}(o||(o={})),function(t){t.Application="APPLICATION",t.Documents="DOCUMENTS",t.Data="DATA",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE"}(i||(i={})),function(t){t.UTF8="utf8",t.ASCII="ascii",t.UTF16="utf18"}(u||(u={})),function(t){t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT"}(s||(s={})),function(t){t.Default="DEFAULT",t.Destructive="DESTRUCTIVE",t.Cancel="CANCEL"}(a||(a={})),function(t){t.Smart="smart",t.Shared="shared",t.User="user"}(c||(c={})),function(t){t.Dark="DARK",t.Light="LIGHT"}(l||(l={}));var f=new(function(){function t(){var t=this;this.Plugins={},this.platform="web",this.isNative=!1,this.Plugins=new Proxy(this.Plugins,{get:function(n,e){if(void 0===n[e]){var r=t;return new Proxy({},{get:function(t,n){return void 0===t[n]?r.pluginMethodNoop.bind(r,t,n,e):t[n]}})}return n[e]}})}return t.prototype.pluginMethodNoop=function(t,n,e){return Promise.reject(e+" does not have web implementation.")},t.prototype.getPlatform=function(){return this.platform},t.prototype.isPluginAvailable=function(t){return this.Plugins.hasOwnProperty(t)},t.prototype.handleError=function(t){console.error(t)},t}());f=window.Capacitor||f,window.Capacitor||(window.Capacitor=f);var d=f.Plugins,p=function(){function t(){this.plugins={},this.loadedPlugins={}}return t.prototype.addPlugin=function(t){this.plugins[t.config.name]=t},t.prototype.getPlugin=function(t){return this.plugins[t]},t.prototype.loadPlugin=function(t){var n=this.getPlugin(t);n?n.load():console.error("Unable to load web plugin "+t+", no such plugin found.")},t.prototype.getPlugins=function(){var t=[];for(var n in this.plugins)t.push(this.plugins[n]);return t},t}(),h=new p,m=function(){function t(t,n){this.config=t,this.loaded=!1,this.listeners={},this.windowListeners={},n?n.addPlugin(this):h.addPlugin(this)}return t.prototype.addWindowListener=function(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0},t.prototype.removeWindowListener=function(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)},t.prototype.addListener=function(t,n){var e=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);var r=this.windowListeners[t];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){e.removeListener(t,n)}}},t.prototype.removeListener=function(t,n){var e=this.listeners[t];if(e){var r=e.indexOf(n);this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}},t.prototype.notifyListeners=function(t,n){this.listeners[t].forEach(function(t){return t(n)})},t.prototype.hasListeners=function(t){return!!this.listeners[t].length},t.prototype.registerWindowListener=function(t,n){var e=this;this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:function(t){e.notifyListeners(n,t)}}},t.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},t.prototype.load=function(){this.loaded=!0},t}(),v=function(t){for(var n=0,e=h.getPlugins();n<e.length;n++)w(t,e[n])},w=function(t,n){t.hasOwnProperty(n.config.name)&&!function(t){return t.config.platforms&&t.config.platforms.indexOf(Capacitor.platform)>=0}(n)||(t[n.config.name]=n)},g=e("mrSG"),y=function(t){function n(){return t.call(this,{name:"Browser",platforms:["web"]})||this}return g.c(n,t),n.prototype.open=function(t){return g.b(this,void 0,void 0,function(){return g.d(this,function(n){return this._lastWindow=window.open(t.url,t.windowName||"_blank"),[2,Promise.resolve()]})})},n.prototype.prefetch=function(t){return g.b(this,void 0,void 0,function(){return g.d(this,function(t){return[2,Promise.resolve()]})})},n.prototype.close=function(){return g.b(this,void 0,void 0,function(){return g.d(this,function(t){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]})})},n}(m),b=new y,P=function(t){function n(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return g.c(n,t),n.prototype.getPhoto=function(t){return g.b(this,void 0,void 0,function(){var t=this;return g.d(this,function(n){return[2,new Promise(function(n,e){return g.b(t,void 0,void 0,function(){var t,r=this;return g.d(this,function(o){switch(o.label){case 0:return t=document.createElement("ion-pwa-camera-modal"),document.body.appendChild(t),[4,t.componentOnReady()];case 1:return o.sent(),t.addEventListener("onPhoto",function(o){return g.b(r,void 0,void 0,function(){var r,i;return g.d(this,function(u){switch(u.label){case 0:return null!==(r=o.detail)?[3,1]:(e(),[3,3]);case 1:return i=n,[4,this._getCameraPhoto(r)];case 2:i.apply(void 0,[u.sent()]),u.label=3;case 3:return t.dismiss(),[2]}})})}),t.present(),[2]}})})})]})})},n.prototype._getCameraPhoto=function(t){return new Promise(function(n,e){var r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){n({base64Data:r.result,webPath:r.result,format:"jpeg"})},r.onerror=function(t){e(t)}})},n}(m),x=new P,E=function(t){function n(){return t.call(this,{name:"Clipboard",platforms:["web"]})||this}return g.c(n,t),n.prototype.write=function(t){return g.b(this,void 0,void 0,function(){return g.d(this,function(n){switch(n.label){case 0:return navigator.clipboard?t.string||t.url?[4,navigator.clipboard.writeText(t.string||t.label)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return n.sent(),[3,3];case 2:if(t.image)return[2,Promise.reject("Setting images not supported on the web")];n.label=3;case 3:return[2,Promise.resolve()]}})})},n.prototype.read=function(t){return g.b(this,void 0,void 0,function(){var t,n,e,r;return g.d(this,function(o){switch(o.label){case 0:return navigator.clipboard?[4,navigator.clipboard.read()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:for(t=o.sent(),n=0,e=t.items;n<e.length;n++)if("text/plain"===(r=e[n]).type)return[2,Promise.resolve(r.getAs("text/plain"))];return[2,Promise.reject("Unable to get data from clipboard")]}})})},n}(m),C=new E,A=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return n.forEach(function(n){if(n&&"object"==typeof n)for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])}),t},L=function(t){function n(){return t.call(this,{name:"Geolocation",platforms:["web"]})||this}return g.c(n,t),n.prototype.getCurrentPosition=function(t){var n=this;return new Promise(function(e,r){return n.requestPermissions().then(function(n){window.navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){r(t)},A({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))})})},n.prototype.watchPosition=function(t,n){return""+window.navigator.geolocation.watchPosition(function(t){n(t)},function(t){n(null,t)},A({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))},n.prototype.clearWatch=function(t){return window.navigator.geolocation.clearWatch(parseInt(t.id,10)),Promise.resolve()},n}(m),S=new L,I=function(t){function n(){return t.call(this,{name:"Device",platforms:["web"]})||this}return g.c(n,t),n.prototype.getInfo=function(){return g.b(this,void 0,void 0,function(){var t,n,e;return g.d(this,function(r){switch(r.label){case 0:t=navigator.userAgent,console.log(t),n=this.parseUa(t),e={},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return e=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,Promise.resolve({model:n.model,platform:"pwa",appVersion:"",osVersion:n.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:e.level,isCharging:e.charging,uuid:this.getUid()})]}})})},n.prototype.parseUa=function(t){var n={},e=t.indexOf("(")+1,r=t.indexOf("Apple")-2,o=t.substring(e,r);return-1!==t.indexOf("Android")?(n.model=o.replace(" wv","").split("; ").pop().split(" Build")[0],n.osVersion=o.split("; ")[1]):(n.model=o.split("; ")[0],n.osVersion=navigator.oscpu?navigator.oscpu:o.split("; ").pop().split(" ")[3].replace(/_/g,".")),n},n.prototype.getUid=function(){var t=window.localStorage.getItem("_capuid");return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)}),window.localStorage.setItem("_capuid",t),t)},n}(m),O=new I,T=function(t){function n(){return t.call(this,{name:"Share",platforms:["web"]})||this}return g.c(n,t),n.prototype.share=function(t){return navigator.share?navigator.share({title:t.title,text:t.text,url:t.url}):Promise.reject("Web Share API not available")},n}(m),k=new T,R=function(t){function n(){return t.call(this,{name:"Modals",platforms:["web"]})||this}return g.c(n,t),n.prototype.alert=function(t){return g.b(this,void 0,void 0,function(){return g.d(this,function(n){return window.alert(t.message),[2,Promise.resolve()]})})},n.prototype.prompt=function(t){return g.b(this,void 0,void 0,function(){var n;return g.d(this,function(e){return n=window.prompt(t.message,t.inputPlaceholder||""),[2,Promise.resolve({value:n,cancelled:null===n})]})})},n.prototype.confirm=function(t){return g.b(this,void 0,void 0,function(){var n;return g.d(this,function(e){return n=window.confirm(t.message),[2,Promise.resolve({value:n})]})})},n.prototype.showActions=function(t){return g.b(this,void 0,void 0,function(){var n=this;return g.d(this,function(e){return[2,new Promise(function(e,r){return g.b(n,void 0,void 0,function(){var n,r;return g.d(this,function(o){switch(o.label){case 0:return(n=document.querySelector("ion-action-sheet-controller"))||(n=document.createElement("ion-action-sheet-controller"),document.body.appendChild(n)),[4,n.componentOnReady()];case 1:return o.sent(),r=t.options.map(function(t,n){return{text:t.title,role:t.style&&t.style.toLowerCase()||"",icon:t.icon||"",handler:function(){e({index:n})}}}),[4,n.create({title:t.title,buttons:r})];case 2:return[4,o.sent().present()];case 3:return o.sent(),[2]}})})})]})})},n}(m),U=new R,_=function(t){function n(){var n=t.call(this,{name:"Storage",platforms:["web"]})||this;return n.KEY_PREFIX="_cap_",n}return g.c(n,t),n.prototype.get=function(t){var n=this;return new Promise(function(e,r){e({value:window.localStorage.getItem(n.makeKey(t.key))})})},n.prototype.set=function(t){var n=this;return new Promise(function(e,r){window.localStorage.setItem(n.makeKey(t.key),t.value),e()})},n.prototype.remove=function(t){var n=this;return new Promise(function(e,r){window.localStorage.removeItem(n.makeKey(t.key)),e()})},n.prototype.keys=function(){var t=this;return new Promise(function(n,e){n({keys:Object.keys(localStorage).filter(function(n){return t.isKey(n)}).map(function(n){return t.getKey(n)})})})},n.prototype.clear=function(){var t=this;return new Promise(function(n,e){Object.keys(localStorage).filter(function(n){return t.isKey(n)}).forEach(function(t){return window.localStorage.removeItem(t)}),n()})},n.prototype.makeKey=function(t){return this.KEY_PREFIX+t},n.prototype.isKey=function(t){return 0===t.indexOf(this.KEY_PREFIX)},n.prototype.getKey=function(t){return t.substr(this.KEY_PREFIX.length)},n}(m),N=new _,D=function(t){function n(){return t.call(this,{name:"Toast",platforms:["web"]})||this}return g.c(n,t),n.prototype.show=function(t){return g.b(this,void 0,void 0,function(){var n,e;return g.d(this,function(r){switch(r.label){case 0:return(n=document.querySelector("ion-toast-controller"))||(n=document.createElement("ion-toast-controller"),document.body.appendChild(n)),[4,n.componentOnReady()];case 1:return r.sent(),e=3e3,t.duration&&(e="long"===t.duration?5e3:3e3),[4,n.create({position:"bottom",message:t.text,duration:e})];case 2:return[4,r.sent().present()];case 3:return[2,r.sent()]}})})},n}(m),K=new D;v(d);var j=function(t){w(d,t)};e.d(n,!1,function(){return r}),e.d(n,!1,function(){return o}),e.d(n,!1,function(){return i}),e.d(n,!1,function(){return u}),e.d(n,!1,function(){return s}),e.d(n,!1,function(){return a}),e.d(n,!1,function(){return c}),e.d(n,!1,function(){return l}),e.d(n,"a",function(){return f}),e.d(n,"b",function(){return d}),e.d(n,!1,function(){return j}),e.d(n,!1,function(){return y}),e.d(n,!1,function(){return b}),e.d(n,!1,function(){return P}),e.d(n,!1,function(){return x}),e.d(n,!1,function(){return E}),e.d(n,!1,function(){return C}),e.d(n,!1,function(){return L}),e.d(n,!1,function(){return S}),e.d(n,!1,function(){return I}),e.d(n,!1,function(){return O}),e.d(n,!1,function(){return T}),e.d(n,!1,function(){return k}),e.d(n,!1,function(){return R}),e.d(n,!1,function(){return U}),e.d(n,!1,function(){return _}),e.d(n,!1,function(){return N}),e.d(n,!1,function(){return D}),e.d(n,!1,function(){return K}),e.d(n,!1,function(){return p}),e.d(n,!1,function(){return h}),e.d(n,!1,function(){return m}),e.d(n,!1,function(){return v}),e.d(n,!1,function(){return w})}}]);