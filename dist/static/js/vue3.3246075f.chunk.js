(this["webpackJsonpmain-react17"]=this["webpackJsonpmain-react17"]||[]).push([[7],{411:function(t,o,e){var n=e(0),a=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function c(t,o){for(var e=arguments.length,c=new Array(e>2?e-2:0),r=2;r<e;r++)c[r-2]=arguments[r];if("string"!==typeof t||!/^micro-app(-\S+)?/.test(t)||!o)return n.createElement.apply(null,[t,o].concat(c));var l=Object.assign({},o);return l.ref=function(t){if("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t),t)for(var e in"[object Object]"===toString.call(o.data)&&t.data!==o.data&&(t.data=o.data),o)if(Object.prototype.hasOwnProperty.call(o,e)&&a.includes(e.toLowerCase())&&"function"===typeof o[e]&&(!t[e]||t[e]!==o[e])){var n=e.toLowerCase().replace("on","");t[e]&&t.removeEventListener(n,t[e],!1),t.addEventListener(n,o[e],!1),t[e]=o[e]}},n.createElement.apply(null,[t,l].concat(c))}t.exports=c,t.exports.default=c},412:function(t,o,e){"use strict";var n={nextjs11:"http://localhost:4002",nuxtjs2:"http://localhost:4003",react16:"http://localhost:4004",react17:"http://localhost:4005",sidebar:"http://localhost:4006",vite:"http://localhost:4007",vue2:"http://localhost:4008",vue3:"http://localhost:4009",webpack5:"http://localhost:4010"};Object.keys(n).forEach((function(t){n[t]=window.location.origin}));var a=window.location,c=a.protocol,r=a.hostname;n.nextjs11="".concat(c,"//").concat(r,":5005"),n.nuxtjs2="".concat(c,"//").concat(r,":6005"),o.a=n},418:function(t,o,e){"use strict";e.r(o);var n=e(56),a=e(411),c=e.n(a),r=e(0),l=e(412);o.default=function(){var t=Object(r.useState)({msg:"\u6765\u81ea\u57fa\u5ea7\u7684\u6570\u636e"}),o=Object(n.a)(t,2),e=o[0],a=o[1];return c()("div",null,c()("micro-app",{name:"appname-vue3",url:"".concat(l.a.vue3,"/child/vue3/"),baseroute:"/main-react17/app-vue3",data:e,onCreated:function(){console.log("child-vue3 \u521b\u5efa\u4e86")},onBeforemount:function(){console.log("child-vue3 \u5373\u5c06\u88ab\u6e32\u67d3")},onMounted:function(){console.log("child-vue3 \u5df2\u7ecf\u6e32\u67d3\u5b8c\u6210"),setTimeout((function(){a({msg:"\u6765\u81ea\u57fa\u5ea7\u7684\u65b0\u6570\u636e"})}),2e3)},onUnmount:function(){console.log("child-vue3 \u5378\u8f7d\u4e86")},onError:function(){console.log("child-vue3 \u52a0\u8f7d\u51fa\u9519\u4e86")},onDataChange:function(t){console.log("\u6765\u81ea\u5b50\u5e94\u7528 child-vue3 \u7684\u6570\u636e:",t.detail.data)}}))}}}]);
//# sourceMappingURL=vue3.3246075f.chunk.js.map