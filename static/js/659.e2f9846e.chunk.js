/*! For license information please see 659.e2f9846e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[659],{368:function(t,e,n){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{aU:function(){return a},lX:function(){return h},Ep:function(){return s},cP:function(){return f}});var a,o=a||(a={});o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE";var i=function(t){return t};function u(t){t.preventDefault(),t.returnValue=""}function c(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function s(t){var e=t.pathname;e=void 0===e?"/":e;var n=t.search;return n=void 0===n?"":n,t=void 0===(t=t.hash)?"":t,n&&"?"!==n&&(e+="?"===n.charAt(0)?n:"?"+n),t&&"#"!==t&&(e+="#"===t.charAt(0)?t:"#"+t),e}function f(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),0<=(n=t.indexOf("?"))&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function h(t){function e(){var t=v.location,e=d.state||{};return[e.idx,i({pathname:t.pathname,search:t.search,hash:t.hash,state:e.usr||null,key:e.key||"default"})]}function n(t){return"string"===typeof t?t:s(t)}function o(t,e){return void 0===e&&(e=null),i(r({pathname:b.pathname,hash:"",search:""},"string"===typeof t?f(t):t,{state:e,key:l()}))}function h(t){g=t,t=e(),y=t[0],b=t[1],P.call({action:g,location:b})}function p(t){d.go(t)}void 0===t&&(t={});var v=void 0===(t=t.window)?document.defaultView:t,d=v.history,m=null;v.addEventListener("popstate",(function(){if(m)x.call(m),m=null;else{var t=a.Pop,n=e(),r=n[0];if(n=n[1],x.length){if(null!=r){var o=y-r;o&&(m={action:t,location:n,retry:function(){p(-1*o)}},p(o))}}else h(t)}}));var g=a.Pop,y=(t=e())[0],b=t[1],P=c(),x=c();return null==y&&(y=0,d.replaceState(r({},d.state,{idx:y}),"")),{get action(){return g},get location(){return b},createHref:n,push:function t(e,r){var i=a.Push,u=o(e,r);if(!x.length||(x.call({action:i,location:u,retry:function(){t(e,r)}}),0)){var c=[{usr:u.state,key:u.key,idx:y+1},n(u)];u=c[0],c=c[1];try{d.pushState(u,"",c)}catch(l){v.location.assign(c)}h(i)}},replace:function t(e,r){var i=a.Replace,u=o(e,r);x.length&&(x.call({action:i,location:u,retry:function(){t(e,r)}}),1)||(u=[{usr:u.state,key:u.key,idx:y},n(u)],d.replaceState(u[0],"",u[1]),h(i))},go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(t){return P.push(t)},block:function(t){var e=x.push(t);return 1===x.length&&v.addEventListener("beforeunload",u),function(){e(),x.length||v.removeEventListener("beforeunload",u)}}}}},504:function(t,e,n){n.d(e,{VK:function(){return s},rU:function(){return f}});var r=n(885),a=n(791),o=n(368),i=n(871);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}var l=["onClick","reloadDocument","replace","state","target","to"];function s(t){var e=t.basename,n=t.children,u=t.window,c=(0,a.useRef)();null==c.current&&(c.current=(0,o.lX)({window:u}));var l=c.current,s=(0,a.useState)({action:l.action,location:l.location}),f=(0,r.Z)(s,2),h=f[0],p=f[1];return(0,a.useLayoutEffect)((function(){return l.listen(p)}),[l]),(0,a.createElement)(i.F0,{basename:e,children:n,location:h.location,navigationType:h.action,navigator:l})}var f=(0,a.forwardRef)((function(t,e){var n=t.onClick,r=t.reloadDocument,s=t.replace,f=void 0!==s&&s,h=t.state,p=t.target,v=t.to,d=c(t,l),m=(0,i.oQ)(v),g=function(t,e){var n=void 0===e?{}:e,r=n.target,u=n.replace,c=n.state,l=(0,i.s0)(),s=(0,i.TH)(),f=(0,i.WU)(t);return(0,a.useCallback)((function(e){if(0===e.button&&(!r||"_self"===r)&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e)){e.preventDefault();var n=!!u||(0,o.Ep)(s)===(0,o.Ep)(f);l(t,{replace:n,state:c})}}),[s,l,f,u,c,r,t])}(v,{replace:f,state:h,target:p});return(0,a.createElement)("a",u({},d,{href:m,onClick:function(t){n&&n(t),t.defaultPrevented||r||g(t)},ref:e,target:p}))}))},871:function(t,e,n){n.d(e,{AW:function(){return f},F0:function(){return h},Z5:function(){return p},oQ:function(){return v},TH:function(){return m},s0:function(){return g},WU:function(){return b}});var r=n(885),a=n(791),o=n(368);function i(t,e){if(!t)throw new Error(e)}var u=(0,a.createContext)(null);var c=(0,a.createContext)(null);var l=(0,a.createContext)({outlet:null,matches:[]});function s(t){return function(t){var e=(0,a.useContext)(l).outlet;if(e)return(0,a.createElement)(y.Provider,{value:t},e);return e}(t.context)}function f(t){i(!1)}function h(t){var e=t.basename,n=void 0===e?"/":e,r=t.children,l=void 0===r?null:r,s=t.location,f=t.navigationType,h=void 0===f?o.aU.Pop:f,p=t.navigator,v=t.static,m=void 0!==v&&v;d()&&i(!1);var g=A(n),y=(0,a.useMemo)((function(){return{basename:g,navigator:p,static:m}}),[g,p,m]);"string"===typeof s&&(s=(0,o.cP)(s));var b=s,P=b.pathname,x=void 0===P?"/":P,w=b.search,E=void 0===w?"":w,S=b.hash,C=void 0===S?"":S,k=b.state,O=void 0===k?null:k,j=b.key,$=void 0===j?"default":j,Z=(0,a.useMemo)((function(){var t=W(x,g);return null==t?null:{pathname:t,search:E,hash:C,state:O,key:$}}),[g,x,E,C,O,$]);return null==Z?null:(0,a.createElement)(u.Provider,{value:y},(0,a.createElement)(c.Provider,{children:l,value:{location:Z,navigationType:h}}))}function p(t){var e=t.children,n=t.location;return function(t,e){d()||i(!1);var n=(0,a.useContext)(l).matches,r=n[n.length-1],u=r?r.params:{},c=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;0;var s,f=m();if(e){var h,p="string"===typeof e?(0,o.cP)(e):e;"/"===c||(null==(h=p.pathname)?void 0:h.startsWith(c))||i(!1),s=p}else s=f;var v=s.pathname||"/",g="/"===c?v:v.slice(c.length)||"/",y=function(t,e,n){void 0===n&&(n="/");var r=W(("string"===typeof e?(0,o.cP)(e):e).pathname||"/",n);if(null==r)return null;var a=x(t);!function(t){t.sort((function(t,e){return t.score!==e.score?e.score-t.score:function(t,e){var n=t.length===e.length&&t.slice(0,-1).every((function(t,n){return t===e[n]}));return n?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((function(t){return t.childrenIndex})),e.routesMeta.map((function(t){return t.childrenIndex})))}))}(a);for(var i=null,u=0;null==i&&u<a.length;++u)i=C(a[u],r);return i}(t,{pathname:g});0;return k(y&&y.map((function(t){return Object.assign({},t,{params:Object.assign({},u,t.params),pathname:$([c,t.pathname]),pathnameBase:"/"===t.pathnameBase?c:$([c,t.pathnameBase])})})),n)}(P(e),n)}function v(t){d()||i(!1);var e=(0,a.useContext)(u),n=e.basename,r=e.navigator,c=b(t),l=c.hash,s=c.pathname,f=c.search,h=s;if("/"!==n){var p=function(t){return""===t||""===t.pathname?"/":"string"===typeof t?(0,o.cP)(t).pathname:t.pathname}(t),v=null!=p&&p.endsWith("/");h="/"===s?n+(v?"/":""):$([n,s])}return r.createHref({pathname:h,search:f,hash:l})}function d(){return null!=(0,a.useContext)(c)}function m(){return d()||i(!1),(0,a.useContext)(c).location}function g(){d()||i(!1);var t=(0,a.useContext)(u),e=t.basename,n=t.navigator,r=(0,a.useContext)(l).matches,o=m().pathname,c=JSON.stringify(r.map((function(t){return t.pathnameBase}))),s=(0,a.useRef)(!1);return(0,a.useEffect)((function(){s.current=!0})),(0,a.useCallback)((function(t,r){if(void 0===r&&(r={}),s.current)if("number"!==typeof t){var a=j(t,JSON.parse(c),o);"/"!==e&&(a.pathname=$([e,a.pathname])),(r.replace?n.replace:n.push)(a,r.state)}else n.go(t)}),[e,n,c,o])}var y=(0,a.createContext)(null);function b(t){var e=(0,a.useContext)(l).matches,n=m().pathname,r=JSON.stringify(e.map((function(t){return t.pathnameBase})));return(0,a.useMemo)((function(){return j(t,JSON.parse(r),n)}),[t,r,n])}function P(t){var e=[];return a.Children.forEach(t,(function(t){if((0,a.isValidElement)(t))if(t.type!==a.Fragment){t.type!==f&&i(!1);var n={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(n.children=P(t.props.children)),e.push(n)}else e.push.apply(e,P(t.props.children))})),e}function x(t,e,n,r){return void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===r&&(r=""),t.forEach((function(t,a){var o={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:a,route:t};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||i(!1),o.relativePath=o.relativePath.slice(r.length));var u=$([r,o.relativePath]),c=n.concat(o);t.children&&t.children.length>0&&(!0===t.index&&i(!1),x(t.children,e,c,u)),(null!=t.path||t.index)&&e.push({path:u,score:S(u,t.index),routesMeta:c})})),e}var w=/^:\w+$/,E=function(t){return"*"===t};function S(t,e){var n=t.split("/"),r=n.length;return n.some(E)&&(r+=-2),e&&(r+=2),n.filter((function(t){return!E(t)})).reduce((function(t,e){return t+(w.test(e)?3:""===e?1:10)}),r)}function C(t,e){for(var n=t.routesMeta,r={},a="/",o=[],i=0;i<n.length;++i){var u=n[i],c=i===n.length-1,l="/"===a?e:e.slice(a.length)||"/",s=O({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},l);if(!s)return null;Object.assign(r,s.params);var f=u.route;o.push({params:r,pathname:$([a,s.pathname]),pathnameBase:$([a,s.pathnameBase]),route:f}),"/"!==s.pathnameBase&&(a=$([a,s.pathnameBase]))}return o}function k(t,e){return void 0===e&&(e=[]),null==t?null:t.reduceRight((function(n,r,o){return(0,a.createElement)(l.Provider,{children:void 0!==r.route.element?r.route.element:(0,a.createElement)(s,null),value:{outlet:n,matches:e.concat(t.slice(0,o+1))}})}),null)}function O(t,e){"string"===typeof t&&(t={path:t,caseSensitive:!1,end:!0});var n=function(t,e,n){void 0===e&&(e=!1);void 0===n&&(n=!0);var r=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(function(t,e){return r.push(e),"([^\\/]+)"}));t.endsWith("*")?(r.push("*"),a+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:\\b|\\/|$)";return[new RegExp(a,e?void 0:"i"),r]}(t.path,t.caseSensitive,t.end),a=(0,r.Z)(n,2),o=a[0],i=a[1],u=e.match(o);if(!u)return null;var c=u[0],l=c.replace(/(.)\/+$/,"$1"),s=u.slice(1);return{params:i.reduce((function(t,e,n){if("*"===e){var r=s[n]||"";l=c.slice(0,c.length-r.length).replace(/(.)\/+$/,"$1")}return t[e]=function(t,e){try{return decodeURIComponent(t)}catch(n){return t}}(s[n]||""),t}),{}),pathname:c,pathnameBase:l,pattern:t}}function j(t,e,n){var r,a="string"===typeof t?(0,o.cP)(t):t,i=""===t||""===a.pathname?"/":a.pathname;if(null==i)r=n;else{var u=e.length-1;if(i.startsWith("..")){for(var c=i.split("/");".."===c[0];)c.shift(),u-=1;a.pathname=c.join("/")}r=u>=0?e[u]:"/"}var l=function(t,e){void 0===e&&(e="/");var n="string"===typeof t?(0,o.cP)(t):t,r=n.pathname,a=n.search,i=void 0===a?"":a,u=n.hash,c=void 0===u?"":u,l=r?r.startsWith("/")?r:function(t,e){var n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((function(t){".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(r,e):e;return{pathname:l,search:Z(i),hash:B(c)}}(a,r);return i&&"/"!==i&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function W(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;var n=t.charAt(e.length);return n&&"/"!==n?null:t.slice(e.length)||"/"}var $=function(t){return t.join("/").replace(/\/\/+/g,"/")},A=function(t){return t.replace(/\/+$/,"").replace(/^\/*/,"/")},Z=function(t){return t&&"?"!==t?t.startsWith("?")?t:"?"+t:""},B=function(t){return t&&"#"!==t?t.startsWith("#")?t:"#"+t:""}},907:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},885:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(181);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},982:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(907);var a=n(181);function o(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(907);function a(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}}]);
//# sourceMappingURL=659.e2f9846e.chunk.js.map