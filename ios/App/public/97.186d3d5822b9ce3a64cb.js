(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{RSJo:function(n,l,e){"use strict";e.r(l);var t,o,u,i,r,a,s,c,d=e("CcnG"),p=function(){},h=e("ntG5"),f=e("M9A9"),m=e("ZYCi"),g=e("KkUS"),v=e("CI40"),y=e("fHOL"),b=e("tXrQ"),w=e("Ip0R"),P=e("ixy7"),k=e("gcOT");e("OO+k"),function(n){n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS"}(t||(t={})),function(n){n.Uri="uri",n.Base64="base64"}(o||(o={})),function(n){n.Application="APPLICATION",n.Documents="DOCUMENTS",n.Data="DATA",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE"}(u||(u={})),function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf18"}(i||(i={})),function(n){n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT"}(r||(r={})),function(n){n.Default="DEFAULT",n.Destructive="DESTRUCTIVE",n.Cancel="CANCEL"}(a||(a={})),function(n){n.Smart="smart",n.Shared="shared",n.User="user"}(s||(s={})),function(n){n.Dark="DARK",n.Light="LIGHT"}(c||(c={}));var x=new(function(){function n(){var n=this;this.Plugins={},this.platform="web",this.isNative=!1,this.Plugins=new Proxy(this.Plugins,{get:function(l,e){if(void 0===l[e]){var t=n;return new Proxy({},{get:function(n,l){return void 0===n[l]?t.pluginMethodNoop.bind(t,n,l,e):n[l]}})}return l[e]}})}return n.prototype.pluginMethodNoop=function(n,l,e){return Promise.reject(e+" does not have web implementation.")},n.prototype.getPlatform=function(){return this.platform},n.prototype.isPluginAvailable=function(n){return this.Plugins.hasOwnProperty(n)},n.prototype.handleError=function(n){console.error(n)},n}());x=window.Capacitor||x,window.Capacitor||(window.Capacitor=x);var S=x.Plugins,K=new(function(){function n(){this.plugins={},this.loadedPlugins={}}return n.prototype.addPlugin=function(n){this.plugins[n.config.name]=n},n.prototype.getPlugin=function(n){return this.plugins[n]},n.prototype.loadPlugin=function(n){var l=this.getPlugin(n);l?l.load():console.error("Unable to load web plugin "+n+", no such plugin found.")},n.prototype.getPlugins=function(){var n=[];for(var l in this.plugins)n.push(this.plugins[l]);return n},n}()),C=function(){function n(n,l){this.config=n,this.loaded=!1,this.listeners={},this.windowListeners={},l?l.addPlugin(this):K.addPlugin(this)}return n.prototype.addWindowListener=function(n){window.addEventListener(n.windowEventName,n.handler),n.registered=!0},n.prototype.removeWindowListener=function(n){n&&(window.removeEventListener(n.windowEventName,n.handler),n.registered=!1)},n.prototype.addListener=function(n,l){var e=this;this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(l);var t=this.windowListeners[n];return t&&!t.registered&&this.addWindowListener(t),{remove:function(){e.removeListener(n,l)}}},n.prototype.removeListener=function(n,l){var e=this.listeners[n];if(e){var t=e.indexOf(l);this.listeners[n].splice(t,1),this.listeners[n].length||this.removeWindowListener(this.windowListeners[n])}},n.prototype.notifyListeners=function(n,l){this.listeners[n].forEach(function(n){return n(l)})},n.prototype.hasListeners=function(n){return!!this.listeners[n].length},n.prototype.registerWindowListener=function(n,l){var e=this;this.windowListeners[l]={registered:!1,windowEventName:n,pluginEventName:l,handler:function(n){e.notifyListeners(l,n)}}},n.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},n.prototype.load=function(){this.loaded=!0},n}(),I=function(n,l){n.hasOwnProperty(l.config.name)&&!function(n){return n.config.platforms&&n.config.platforms.indexOf(Capacitor.platform)>=0}(l)||(n[l.config.name]=l)},V=e("mrSG"),J=(new(function(n){function l(){return n.call(this,{name:"Browser",platforms:["web"]})||this}return V.c(l,n),l.prototype.open=function(n){return V.b(this,void 0,void 0,function(){return V.d(this,function(l){return this._lastWindow=window.open(n.url,n.windowName||"_blank"),[2,Promise.resolve()]})})},l.prototype.prefetch=function(n){return V.b(this,void 0,void 0,function(){return V.d(this,function(n){return[2,Promise.resolve()]})})},l.prototype.close=function(){return V.b(this,void 0,void 0,function(){return V.d(this,function(n){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]})})},l}(C)),new(function(n){function l(){return n.call(this,{name:"Camera",platforms:["web"]})||this}return V.c(l,n),l.prototype.getPhoto=function(n){return V.b(this,void 0,void 0,function(){var n=this;return V.d(this,function(l){return[2,new Promise(function(l,e){return V.b(n,void 0,void 0,function(){var n,t=this;return V.d(this,function(o){switch(o.label){case 0:return n=document.createElement("ion-pwa-camera-modal"),document.body.appendChild(n),[4,n.componentOnReady()];case 1:return o.sent(),n.addEventListener("onPhoto",function(o){return V.b(t,void 0,void 0,function(){var t,u;return V.d(this,function(i){switch(i.label){case 0:return null!==(t=o.detail)?[3,1]:(e(),[3,3]);case 1:return u=l,[4,this._getCameraPhoto(t)];case 2:u.apply(void 0,[i.sent()]),i.label=3;case 3:return n.dismiss(),[2]}})})}),n.present(),[2]}})})})]})})},l.prototype._getCameraPhoto=function(n){return new Promise(function(l,e){var t=new FileReader;t.readAsDataURL(n),t.onloadend=function(){l({base64Data:t.result,webPath:t.result,format:"jpeg"})},t.onerror=function(n){e(n)}})},l}(C)),new(function(n){function l(){return n.call(this,{name:"Clipboard",platforms:["web"]})||this}return V.c(l,n),l.prototype.write=function(n){return V.b(this,void 0,void 0,function(){return V.d(this,function(l){switch(l.label){case 0:return navigator.clipboard?n.string||n.url?[4,navigator.clipboard.writeText(n.string||n.label)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return l.sent(),[3,3];case 2:if(n.image)return[2,Promise.reject("Setting images not supported on the web")];l.label=3;case 3:return[2,Promise.resolve()]}})})},l.prototype.read=function(n){return V.b(this,void 0,void 0,function(){var n,l,e,t;return V.d(this,function(o){switch(o.label){case 0:return navigator.clipboard?[4,navigator.clipboard.read()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:for(n=o.sent(),l=0,e=n.items;l<e.length;l++)if("text/plain"===(t=e[l]).type)return[2,Promise.resolve(t.getAs("text/plain"))];return[2,Promise.reject("Unable to get data from clipboard")]}})})},l}(C)),function(n){for(var l=[],e=1;e<arguments.length;e++)l[e-1]=arguments[e];return l.forEach(function(l){if(l&&"object"==typeof l)for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])}),n});new(function(n){function l(){return n.call(this,{name:"Geolocation",platforms:["web"]})||this}return V.c(l,n),l.prototype.getCurrentPosition=function(n){var l=this;return new Promise(function(e,t){return l.requestPermissions().then(function(l){window.navigator.geolocation.getCurrentPosition(function(n){e(n)},function(n){t(n)},J({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},n))})})},l.prototype.watchPosition=function(n,l){return""+window.navigator.geolocation.watchPosition(function(n){l(n)},function(n){l(null,n)},J({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},n))},l.prototype.clearWatch=function(n){return window.navigator.geolocation.clearWatch(parseInt(n.id,10)),Promise.resolve()},l}(C)),new(function(n){function l(){return n.call(this,{name:"Device",platforms:["web"]})||this}return V.c(l,n),l.prototype.getInfo=function(){return V.b(this,void 0,void 0,function(){var n,l,e;return V.d(this,function(t){switch(t.label){case 0:n=navigator.userAgent,l=this.parseUa(n),e={},t.label=1;case 1:return t.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return e=t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2,Promise.resolve({model:l.model,platform:"pwa",appVersion:"",osVersion:l.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:e.level,isCharging:e.charging,uuid:this.getUid()})]}})})},l.prototype.parseUa=function(n){var l={},e=n.indexOf("(")+1,t=n.indexOf("Apple")-2,o=n.substring(e,t);return-1!==n.indexOf("Android")?(l.model=o.replace(" wv","").split("; ").pop().split(" Build")[0],l.osVersion=o.split("; ")[1]):(l.model=o.split("; ")[0],l.osVersion=navigator.oscpu?navigator.oscpu:o.split("; ").pop().split(" ")[3].replace(/_/g,".")),l},l.prototype.getUid=function(){var n=window.localStorage.getItem("_capuid");return n||(n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var l=16*Math.random()|0;return("x"==n?l:3&l|8).toString(16)}),window.localStorage.setItem("_capuid",n),n)},l}(C)),new(function(n){function l(){return n.call(this,{name:"Share",platforms:["web"]})||this}return V.c(l,n),l.prototype.share=function(n){return navigator.share?navigator.share({title:n.title,text:n.text,url:n.url}):Promise.reject("Web Share API not available")},l}(C)),new(function(n){function l(){return n.call(this,{name:"Modals",platforms:["web"]})||this}return V.c(l,n),l.prototype.alert=function(n){return V.b(this,void 0,void 0,function(){return V.d(this,function(l){return window.alert(n.message),[2,Promise.resolve()]})})},l.prototype.prompt=function(n){return V.b(this,void 0,void 0,function(){var l;return V.d(this,function(e){return l=window.prompt(n.message,n.inputPlaceholder||""),[2,Promise.resolve({value:l,cancelled:null===l})]})})},l.prototype.confirm=function(n){return V.b(this,void 0,void 0,function(){var l;return V.d(this,function(e){return l=window.confirm(n.message),[2,Promise.resolve({value:l})]})})},l.prototype.showActions=function(n){return V.b(this,void 0,void 0,function(){var l=this;return V.d(this,function(e){return[2,new Promise(function(e,t){return V.b(l,void 0,void 0,function(){var l,t;return V.d(this,function(o){switch(o.label){case 0:return(l=document.querySelector("ion-action-sheet-controller"))||(l=document.createElement("ion-action-sheet-controller"),document.body.appendChild(l)),[4,l.componentOnReady()];case 1:return o.sent(),t=n.options.map(function(n,l){return{text:n.title,role:n.style&&n.style.toLowerCase()||"",icon:n.icon||"",handler:function(){e({index:l})}}}),[4,l.create({title:n.title,buttons:t})];case 2:return[4,o.sent().present()];case 3:return o.sent(),[2]}})})})]})})},l}(C)),new(function(n){function l(){var l=n.call(this,{name:"Storage",platforms:["web"]})||this;return l.KEY_PREFIX="_cap_",l}return V.c(l,n),l.prototype.get=function(n){var l=this;return new Promise(function(e,t){e({value:window.localStorage.getItem(l.makeKey(n.key))})})},l.prototype.set=function(n){var l=this;return new Promise(function(e,t){window.localStorage.setItem(l.makeKey(n.key),n.value),e()})},l.prototype.remove=function(n){var l=this;return new Promise(function(e,t){window.localStorage.removeItem(l.makeKey(n.key)),e()})},l.prototype.keys=function(){var n=this;return new Promise(function(l,e){l({keys:Object.keys(localStorage).filter(function(l){return n.isKey(l)}).map(function(l){return n.getKey(l)})})})},l.prototype.clear=function(){var n=this;return new Promise(function(l,e){Object.keys(localStorage).filter(function(l){return n.isKey(l)}).forEach(function(n){return window.localStorage.removeItem(n)}),l()})},l.prototype.makeKey=function(n){return this.KEY_PREFIX+n},l.prototype.isKey=function(n){return 0===n.indexOf(this.KEY_PREFIX)},l.prototype.getKey=function(n){return n.substr(this.KEY_PREFIX.length)},l}(C)),new(function(n){function l(){return n.call(this,{name:"Toast",platforms:["web"]})||this}return V.c(l,n),l.prototype.show=function(n){return V.b(this,void 0,void 0,function(){var l,e;return V.d(this,function(t){switch(t.label){case 0:return(l=document.querySelector("ion-toast-controller"))||(l=document.createElement("ion-toast-controller"),document.body.appendChild(l)),[4,l.componentOnReady()];case 1:return t.sent(),e=3e3,n.duration&&(e="long"===n.duration?5e3:3e3),[4,l.create({position:"bottom",message:n.text,duration:e})];case 2:return[4,t.sent().present()];case 3:return[2,t.sent()]}})})},l}(C)),function(n){for(var l=0,e=K.getPlugins();l<e.length;l++)I(n,e[l])}(S);var E=function(n,l,e,t){return new(e||(e=Promise))(function(o,u){function i(n){try{a(t.next(n))}catch(n){u(n)}}function r(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new e(function(l){l(n.value)}).then(i,r)}a((t=t.apply(n,l||[])).next())})};function A(){return window.YT}function W(){return A().Player}function Y(){return A().PlayerState}const L=new class extends C{constructor(){super({name:"YoutubePlayerPluginWeb",platforms:["web"]}),this.players=[],this.playerApiLoaded=!1,this.defaultSizes={height:270,width:367}}loadPlayerApi(){return E(this,void 0,void 0,function*(){return console.log("[Youtube Player Plugin Web]: loadPlayerApi"),yield new Promise(n=>{window.onYouTubeIframeAPIReady=(()=>{console.log("[Youtube Player Plugin Web]: onYouTubeIframeAPIReady"),this.playerApiLoaded=!0,n(!0)});const l=document.createElement("script");l.type="text/javascript",l.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(l,e)})})}checkSize(n){const l={height:n.playerSize.height||this.defaultSizes.height,width:n.playerSize.width||this.defaultSizes.width};return l.height>window.innerHeight&&(l.height=window.innerHeight),l.width>window.innerWidth&&(l.width=window.innerWidth),l}createPlayer(n){return E(this,void 0,void 0,function*(){console.log("[Youtube Player Plugin Web]: createPlayer"),console.log("options",n);const l=this.checkSize(n);return console.log("playerSize",l),yield new Promise(e=>{console.log(A());const t=W();this.players[n.playerId]=new t(n.playerId,Object.assign({},n.playerVars,l,{videoId:n.videoId,events:{onReady:()=>(console.log("[Youtube Player Plugin Web]: onPlayerReady"),e({playerReady:!0,player:this.players[n.playerId]})),onStateChange:n=>{switch(console.log("[Youtube Player Plugin Web]: onPlayerStateChange",n.data),n.data){case Y().PLAYING:console.log("[Youtube Player Plugin Web]: playing");break;case Y().PAUSED:console.log("[Youtube Player Plugin Web]: paused");break;case Y().ENDED:console.log("[Youtube Player Plugin Web]: ended");break;case Y().BUFFERING:console.log("[Youtube Player Plugin Web]: buffering");break;case Y().CUED:console.log("[Youtube Player Plugin Web]: cued")}},onPlaybackQualityChange:()=>{console.log("[Youtube Player Plugin Web]: onPlayerPlaybackQualityChange")},onError:()=>{console.log("[Youtube Player Plugin Web]: onPlayerError")}}})),console.log("players",this.players),console.log("player",this.players[n.playerId])})})}initialize(n){return E(this,void 0,void 0,function*(){if(console.log("[Youtube Player Plugin Web]: initialize"),!this.playerApiLoaded){const n=yield this.loadPlayerApi();console.log("[Youtube Player Plugin Web]: loadPlayerApi result",n)}if(W&&this.playerApiLoaded){const l=yield this.createPlayer(n);return console.log("[Youtube Player Plugin Web]: initialize completed",l),Promise.resolve(l)}})}destroy(n){return E(this,void 0,void 0,function*(){return console.log("[Youtube Player Plugin Web]: destroy"),this.players[n].destroy(),Promise.resolve({result:{method:"destroy",value:!0}})})}stopVideo(n){return E(this,void 0,void 0,function*(){return console.log("[Youtube Player Plugin Web]: stopVideo"),this.players[n].stopVideo(),Promise.resolve({result:{method:"stopVideo",value:!0}})})}playVideo(n){return E(this,void 0,void 0,function*(){return console.log("[Youtube Player Plugin Web]: playVideo"),this.players[n].playVideo(),Promise.resolve({result:{method:"playVideo",value:!0}})})}pauseVideo(n){return E(this,void 0,void 0,function*(){return console.log("[Youtube Player Plugin Web]: pauseVideo"),this.players[n].pauseVideo(),Promise.resolve({result:{method:"pauseVideo",value:!0}})})}seekTo(n,l,e){return E(this,void 0,void 0,function*(){return console.log("[Youtube Player Plugin Web]: seekTo"),this.players[n].seekTo(l,e),Promise.resolve({result:{method:"seekTo",value:!0,seconds:l,allowSeekAhead:e}})})}loadVideoById(n,l){return E(this,void 0,void 0,function*(){return this.players[n].loadVideoById(l),Promise.resolve({result:{method:"loadVideoById",value:!0,options:l}})})}cueVideoById(n,l){return E(this,void 0,void 0,function*(){return this.players[n].cueVideoById(l),Promise.resolve({result:{method:"cueVideoById",value:!0,options:l}})})}mute(n){return E(this,void 0,void 0,function*(){return this.players[n].mute(),Promise.resolve({result:{method:"mute",value:!0}})})}unMute(n){return E(this,void 0,void 0,function*(){return this.players[n].unMute(),Promise.resolve({result:{method:"unMute",value:!0}})})}isMuted(n){return E(this,void 0,void 0,function*(){return Promise.resolve({result:{method:"isMuted",value:this.players[n].isMuted()}})})}setVolume(n,l){return E(this,void 0,void 0,function*(){return this.players[n].setVolume(l),Promise.resolve({result:{method:"setVolume",value:l}})})}getVolume(n){return E(this,void 0,void 0,function*(){return Promise.resolve({result:{method:"getVolume",value:this.players[n].getVolume()}})})}toggleFullScreen(n,l){return E(this,void 0,void 0,function*(){let{height:e,width:t}=this.defaultSizes;return l||(e=window.innerHeight,t=window.innerWidth),this.players[n].setSize(t,e),Promise.resolve({result:{method:"toggleFullScreen",value:l}})})}echo(n){return E(this,void 0,void 0,function*(){return console.log("ECHO",n),Promise.resolve(n)})}};var R=function(n,l,e,t){return new(e||(e=Promise))(function(o,u){function i(n){try{a(t.next(n))}catch(n){u(n)}}function r(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new e(function(l){l(n.value)}).then(i,r)}a((t=t.apply(n,l||[])).next())})},U=function(n,l){var e,t,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function r(u){return function(r){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=t[2&u[0]?"return":u[0]?"throw":"next"])&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[0,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,t=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=l.call(n,i)}catch(n){u=[6,n],t=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,r])}}},O=function(){function n(n,l){this.modalCtrl=n,this.navParams=l,console.log("YoutubeModalComponent::constructor | method called")}return n.prototype.ngOnInit=function(){console.log("YoutubeModalComponent::ngOnInit | method called"),this.item=this.navParams.data.modalProps.item,console.log(this.item)},n.prototype.ngAfterViewInit=function(){this.initializeYoutubePlayerPluginWeb()},n.prototype.dismiss=function(){this.destroyYoutubePlayer(),this.modalCtrl.dismiss()},n.prototype.initializeYoutubePlayerPluginWeb=function(){return R(this,void 0,void 0,function(){var n;return U(this,function(l){switch(l.label){case 0:return[4,L.initialize({playerId:this.item.id,playerSize:{width:640,height:360},videoId:this.item.videoId})];case 1:return n=l.sent(),console.log("playerReady",n),[2]}})})},n.prototype.destroyYoutubePlayer=function(){return R(this,void 0,void 0,function(){var n;return U(this,function(l){switch(l.label){case 0:return[4,L.destroy(this.item.id)];case 1:return n=l.sent(),console.log("destroyYoutubePlayer",n),[2]}})})},n.prototype.stopVideo=function(){return R(this,void 0,void 0,function(){var n;return U(this,function(l){switch(l.label){case 0:return[4,L.stopVideo(this.item.id)];case 1:return n=l.sent(),console.log("stopVideo",n),[2]}})})},n.prototype.loadNewVideo=function(){return R(this,void 0,void 0,function(){var n;return U(this,function(l){switch(l.label){case 0:return[4,L.cueVideoById(this.item.id,{videoId:"nQSpMO6N0tc"})];case 1:return n=l.sent(),console.log("loadNewVideo",n),[2]}})})},n.prototype.toggleFullscreen=function(){return R(this,void 0,void 0,function(){var n;return U(this,function(l){switch(l.label){case 0:return[4,L.toggleFullScreen(this.item.id,!1)];case 1:return n=l.sent(),console.log("toggleFullscreen",n),[2]}})})},n}(),F=function(n,l,e,t){return new(e||(e=Promise))(function(o,u){function i(n){try{a(t.next(n))}catch(n){u(n)}}function r(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new e(function(l){l(n.value)}).then(i,r)}a((t=t.apply(n,l||[])).next())})},T=function(n,l){var e,t,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function r(u){return function(r){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=t[2&u[0]?"return":u[0]?"throw":"next"])&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[0,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,t=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=l.call(n,i)}catch(n){u=[6,n],t=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,r])}}},M=function(){function n(n,l,e){this.route=n,this.itemService=l,this.modalCtrl=e,this.currentYear=(new Date).getFullYear()}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this.route.snapshot.paramMap.get("id");this.item=this.itemService.getItem(n)},n.prototype.watchVideo=function(){console.log("DetailsPage::watchVideo | method called"),console.log("DetailsPage::watchVideo -> platform: "+k.a.platform),"web"===k.a.platform?this.presentModal():this.testYoutubePlayerPlugin()},n.prototype.testYoutubePlayerPlugin=function(){return F(this,void 0,void 0,function(){var n,l;return T(this,function(e){switch(e.label){case 0:return[4,(n=k.b.YoutubePlayer).echo({value:"hola"})];case 1:return l=e.sent(),console.log("result",l),[4,n.initialize({playerId:"player",width:640,height:360,videoId:this.item.videoId})];case 2:return e.sent(),[2]}})})},n.prototype.presentModal=function(){return F(this,void 0,void 0,function(){var n,l;return T(this,function(e){switch(e.label){case 0:return[4,this.modalCtrl.create({component:O,componentProps:{modalProps:{item:this.item}}})];case 1:return[4,(n=e.sent()).present()];case 2:return e.sent(),[4,n.onWillDismiss()];case 3:return(l=e.sent().data)&&console.log("data",l),[2]}})})},n}(),N=e("9opb"),D=d.Ia({encapsulation:2,styles:[[".item{min-height:64px}.title{padding-left:10px}.action-button{padding-right:10px}.github-button{width:49px;height:20px;padding-right:5px;display:inline}"]],data:{}});function z(n){return d.Va(0,[(n()(),d.Ka(0,0,null,null,47,"ion-card",[],null,null,null,null,null)),d.Ja(1,16384,null,0,h.g,[d.k],null,null),(n()(),d.Ka(2,0,null,null,7,"ion-item",[["class","avatar"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,4).onClick(e)&&t),t},null,null)),d.Ja(3,16384,null,0,h.C,[d.k],null,null),d.Ja(4,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(5,0,null,null,2,"ion-avatar",[["item-start",""]],null,null,null,null,null)),d.Ja(6,16384,null,0,h.b,[],null,null),(n()(),d.Ka(7,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),d.Ka(8,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),d.Ua(9,null,["",""])),(n()(),d.Ka(10,0,null,null,3,"ion-item",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,12).onClick(e)&&t),t},null,null)),d.Ja(11,16384,null,0,h.C,[d.k],null,null),d.Ja(12,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(13,0,null,null,0,"img",[["src","https://placeimg.com/640/480/nature"]],null,null,null,null,null)),(n()(),d.Ka(14,0,null,null,11,"ion-card-content",[],null,null,null,null,null)),d.Ja(15,16384,null,0,h.h,[d.k],null,null),(n()(),d.Ka(16,0,null,null,9,"ion-item",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,18).onClick(e)&&t),t},null,null)),d.Ja(17,16384,null,0,h.C,[d.k],null,null),d.Ja(18,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(19,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),d.Ua(20,null,["",""])),(n()(),d.Ka(21,0,null,null,4,"ion-badge",[["slot","end"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.watchVideo()&&t),t},null,null)),d.Ja(22,16384,null,0,h.d,[d.k],null,null),(n()(),d.Ka(23,0,null,null,1,"ion-icon",[["name","eye"]],null,null,null,null,null)),d.Ja(24,16384,null,0,g.a,[d.k],{name:[0,"name"]},null),(n()(),d.Ua(-1,null,[" Watch Video"])),(n()(),d.Ka(26,0,null,null,21,"ion-row",[],null,null,null,null,null)),d.Ja(27,16384,null,0,h.Ba,[],null,null),(n()(),d.Ka(28,0,null,null,19,"ion-item",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,30).onClick(e)&&t),t},null,null)),d.Ja(29,16384,null,0,h.C,[d.k],null,null),d.Ja(30,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(31,0,null,null,6,"ion-button",[["class","action-button"],["clear",""],["icon-left",""],["small",""]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,33).onClick(e)&&t),t},null,null)),d.Ja(32,16384,null,0,h.e,[d.k],null,null),d.Ja(33,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(34,0,null,null,1,"ion-icon",[["name","thumbs-up"]],null,null,null,null,null)),d.Ja(35,16384,null,0,g.a,[d.k],{name:[0,"name"]},null),(n()(),d.Ka(36,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),d.Ua(-1,null,["12 Likes"])),(n()(),d.Ka(38,0,null,null,6,"ion-button",[["clear",""],["icon-left",""],["small",""]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,40).onClick(e)&&t),t},null,null)),d.Ja(39,16384,null,0,h.e,[d.k],null,null),d.Ja(40,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(41,0,null,null,1,"ion-icon",[["name","text"]],null,null,null,null,null)),d.Ja(42,16384,null,0,g.a,[d.k],{name:[0,"name"]},null),(n()(),d.Ka(43,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),d.Ua(-1,null,["4 Comments"])),(n()(),d.Ka(45,0,null,null,2,"ion-note",[["slot","end"]],null,null,null,null,null)),d.Ja(46,16384,null,0,h.S,[d.k],null,null),(n()(),d.Ua(-1,null,[" 11h ago "]))],function(n,l){n(l,24,0,"eye"),n(l,35,0,"thumbs-up"),n(l,42,0,"text")},function(n,l){var e=l.component;n(l,7,0,null==e.item?null:e.item.image),n(l,9,0,null==e.item?null:e.item.title),n(l,20,0,null==e.item?null:e.item.description)})}function j(n){return d.Va(0,[(n()(),d.Ka(0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,null,null)),d.Ja(1,16384,null,0,h.w,[d.k],null,null),(n()(),d.Ka(2,0,null,null,9,"ion-toolbar",[["color","primary"]],null,null,null,null,null)),d.Ja(3,16384,null,0,h.Va,[d.k],{color:[0,"color"]},null),(n()(),d.Ka(4,0,null,null,4,"ion-buttons",[["slot","start"]],null,null,null,null,null)),d.Ja(5,16384,null,0,h.f,[],null,null),(n()(),d.Ka(6,0,null,null,2,"ion-back-button",[["text","home"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,8).onClick(e)&&t),t},null,null)),d.Ja(7,16384,null,0,h.c,[d.k],{text:[0,"text"]},null),d.Ja(8,16384,null,0,v.a,[[2,m.l],[2,y.a],b.a,d.k],null,null),(n()(),d.Ka(9,0,null,null,2,"ion-title",[],null,null,null,null,null)),d.Ja(10,16384,null,0,h.Wa,[d.k],null,null),(n()(),d.Ua(-1,null,["Master Detail Pattern Ionic 4 with Angular Routing"])),(n()(),d.Ka(12,0,null,null,3,"ion-content",[["no-bounce",""]],null,null,null,null,null)),d.Ja(13,16384,null,0,h.p,[d.k],null,null),(n()(),d.Ba(16777216,null,null,1,null,z)),d.Ja(15,16384,null,0,w.i,[d.M,d.J],{ngIf:[0,"ngIf"]},null),(n()(),d.Ka(16,0,null,null,12,"ion-footer",[],null,null,null,null,null)),d.Ja(17,16384,null,0,h.u,[d.k],null,null),(n()(),d.Ka(18,0,null,null,10,"ion-toolbar",[["color","primary"]],null,null,null,null,null)),d.Ja(19,16384,null,0,h.Va,[d.k],{color:[0,"color"]},null),(n()(),d.Ka(20,0,null,null,2,"ion-title",[],null,null,null,null,null)),d.Ja(21,16384,null,0,h.Wa,[d.k],null,null),(n()(),d.Ua(22,null,["\xa9 "," Adri\xe1n Brito Pacheco"])),(n()(),d.Ka(23,0,null,null,5,"ion-buttons",[["slot","end"]],null,null,null,null,null)),d.Ja(24,16384,null,0,h.f,[],null,null),(n()(),d.Ka(25,0,null,null,1,"div",[["class","github-button"]],null,null,null,null,null)),(n()(),d.Ka(26,0,null,null,0,"iframe",[["allowtransparency","true"],["frameborder","0"],["scrolling","no"],["src","https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach%2Fangular-ionic-master-detail&title=&aria-label=Star%20abritopach%2Fangular-ionic-master-detail%20on%20GitHub&data-icon=octicon-star&data-text=Star"],["style","width: 50px; height: 20px; border: none;"]],null,null,null,null,null)),(n()(),d.Ka(27,0,null,null,1,"div",[["class","github-button"]],null,null,null,null,null)),(n()(),d.Ka(28,0,null,null,0,"iframe",[["allowtransparency","true"],["frameborder","0"],["scrolling","no"],["src","https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach&title=&aria-label=Follow%20%40abritopach%20on%20GitHub&data-text=GitHub"],["style","width: 67px; height: 20px; border: none;"]],null,null,null,null,null))],function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,7,0,"home"),n(l,15,0,e.item),n(l,19,0,"primary")},function(n,l){n(l,22,0,l.component.currentYear)})}var B=d.Ga("app-page-detail",M,function(n){return d.Va(0,[(n()(),d.Ka(0,0,null,null,1,"app-page-detail",[],null,null,null,j,D)),d.Ja(1,114688,null,0,M,[m.a,P.a,N.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),H=e("W9JI"),_=d.Ia({encapsulation:2,styles:[[""]],data:{}});function G(n){return d.Va(0,[(n()(),d.Ka(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),d.Ja(1,16384,null,0,h.w,[d.k],null,null),(n()(),d.Ka(2,0,null,null,8,"ion-toolbar",[["color","tertiary"]],null,null,null,null,null)),d.Ja(3,16384,null,0,h.Va,[d.k],{color:[0,"color"]},null),(n()(),d.Ka(4,0,null,null,3,"ion-buttons",[["slot","end"]],null,null,null,null,null)),d.Ja(5,16384,null,0,h.f,[],null,null),(n()(),d.Ka(6,0,null,null,1,"ion-icon",[["color","light"],["name","close"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dismiss()&&t),t},null,null)),d.Ja(7,16384,null,0,g.a,[d.k],{color:[0,"color"],name:[1,"name"]},null),(n()(),d.Ka(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),d.Ja(9,16384,null,0,h.Wa,[d.k],null,null),(n()(),d.Ua(-1,null,[" Youtube video "])),(n()(),d.Ka(11,0,null,null,17,"ion-content",[["class","outer-content"],["padding",""]],null,null,null,null,null)),d.Ja(12,16384,null,0,h.p,[d.k],null,null),(n()(),d.Ka(13,0,null,null,3,"ion-item",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==d.Sa(n,15).onClick(e)&&t),t},null,null)),d.Ja(14,16384,null,0,h.C,[d.k],null,null),d.Ja(15,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ka(16,0,null,null,0,"div",[],[[8,"id",0]],null,null,null,null)),(n()(),d.Ka(17,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==d.Sa(n,19).onClick(e)&&t),"click"===l&&(t=!1!==o.stopVideo()&&t),t},null,null)),d.Ja(18,16384,null,0,h.e,[d.k],null,null),d.Ja(19,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ua(-1,null,["Stop Video"])),(n()(),d.Ka(21,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==d.Sa(n,23).onClick(e)&&t),"click"===l&&(t=!1!==o.loadNewVideo()&&t),t},null,null)),d.Ja(22,16384,null,0,h.e,[d.k],null,null),d.Ja(23,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ua(-1,null,["Load New Video"])),(n()(),d.Ka(25,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==d.Sa(n,27).onClick(e)&&t),"click"===l&&(t=!1!==o.toggleFullscreen()&&t),t},null,null)),d.Ja(26,16384,null,0,h.e,[d.k],null,null),d.Ja(27,16384,null,0,f.a,[[2,m.l],d.k],null,null),(n()(),d.Ua(-1,null,["toggleFullscreen"]))],function(n,l){n(l,3,0,"tertiary"),n(l,7,0,"light","close")},function(n,l){n(l,16,0,l.component.item.id)})}var X=d.Ga("app-youtube-modal",O,function(n){return d.Va(0,[(n()(),d.Ka(0,0,null,null,1,"app-youtube-modal",[],null,null,null,G,_)),d.Ja(1,4308992,null,0,O,[N.a,H.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),q=e("95zI"),Q=e("apKv"),Z=e("B4/3"),$=function(){};e.d(l,"DetailModuleNgFactory",function(){return nn});var nn=d.Ha(p,[],function(n){return d.Qa([d.Ra(512,d.j,d.W,[[8,[B,X]],[3,d.j],d.v]),d.Ra(4608,w.k,w.j,[d.s,[2,w.p]]),d.Ra(4608,q.a,q.a,[d.x,d.g]),d.Ra(4608,N.a,N.a,[q.a,d.j,d.p]),d.Ra(4608,Q.a,Q.a,[q.a,d.j,d.p]),d.Ra(1073742336,w.b,w.b,[]),d.Ra(1073742336,Z.a,Z.a,[]),d.Ra(1073742336,m.n,m.n,[[2,m.r],[2,m.l]]),d.Ra(1073742336,$,$,[]),d.Ra(1073742336,p,p,[]),d.Ra(1024,m.j,function(){return[[{path:"",component:M}]]},[])])})}}]);