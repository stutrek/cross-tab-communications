!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("CrossDomain",[],n):"object"==typeof exports?exports.CrossDomain=n():e.CrossDomain=n()}(this,function(){return function(e){function n(s){if(t[s])return t[s].exports;var o=t[s]={exports:{},id:s,loaded:!1};return e[s].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var s=null,o=!1,r=[],i={};window.addEventListener("message",function(e){var n=e.data;if(n.isCrossTab){var t=n.channel,a=n.message;i[t].listeners.forEach(function(e){return e(a)})}n.isCrossTabStartup&&(o=!0,r.forEach(function(e){"addChannel"===e.method?s.contentWindow.postMessage({isCrossTabAdd:!0,channel:e.args[0]},"*"):i[e.channel][e.method].apply(i[e.channel],e.args)}),r=null)});var a=function e(n){var a=this;if(t(this,e),this.listen=function(e){a.listeners.indexOf(e)===-1&&a.listeners.push(e)},this.remove=function(e){a.listeners=a.listeners.filter(function(n){return n!==e})},this.emit=function(e){o?s.contentWindow.postMessage({isCrossTab:!0,channel:a.id,message:e},"*"):r.push({channel:a.id,method:"emit",args:[e]})},!s)throw new Error('To use cross-tab-channel across domains you must first CrossTab.createIframe("http://path/to/cross-tab-channel/iframe.html")');return i[n]?i[n]:(i[n]=this,this.id=n,this.listeners=[],void("undefined"!=typeof window&&(o?s.contentWindow.postMessage({isCrossTabAdd:!0,channel:n},"*"):r.push({method:"addChannel",args:[n]}))))};a.createIframe=function(e){s=document.createElement("iframe"),s.src=e,s.style.position="absolute",s.style.pointerEvents="none",s.style.zIndex="-1",document.body.appendChild(s)},e.exports=a}])});
//# sourceMappingURL=CrossDomain.js.map