(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,r=void 0!==a&&a,o=t.hasQuery,i=void 0!==o&&o;return n||r&&i}},"1TCz":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);var o=n("q1tI"),i=n.n(o),c=n("8Kt/"),s=n.n(c),u=n("JDnx"),l=(n("RNiq"),n("MX0m")),f=n.n(l),d=n("YFqc"),p=n.n(d),m=n("wx14"),v=n("zLVn"),h=n("17x9"),b=n.n(h),y=n("TSYQ"),g=n.n(y),x=n("33Jr"),j={tabs:b.a.bool,pills:b.a.bool,vertical:b.a.oneOfType([b.a.bool,b.a.string]),horizontal:b.a.string,justified:b.a.bool,fill:b.a.bool,navbar:b.a.bool,card:b.a.bool,tag:x.c,className:b.a.string,cssModule:b.a.object},O=function(t){var e=t.className,n=t.cssModule,a=t.tabs,r=t.pills,o=t.vertical,c=t.horizontal,s=t.justified,u=t.fill,l=t.navbar,f=t.card,d=t.tag,p=Object(v.a)(t,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),h=Object(x.b)(g()(e,l?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(o),{"nav-tabs":a,"card-header-tabs":f&&a,"nav-pills":r,"card-header-pills":f&&r,"nav-justified":s,"nav-fill":u}),n);return i.a.createElement(d,Object(m.a)({},p,{className:h}))};O.propTypes=j,O.defaultProps={tag:"ul",vertical:!1};var w=O,S={tag:x.c,active:b.a.bool,className:b.a.string,cssModule:b.a.object},M=function(t){var e=t.className,n=t.cssModule,a=t.active,r=t.tag,o=Object(v.a)(t,["className","cssModule","active","tag"]),c=Object(x.b)(g()(e,"nav-item",!!a&&"active"),n);return i.a.createElement(r,Object(m.a)({},o,{className:c}))};M.propTypes=S,M.defaultProps={tag:"li"};var A=M,_=n("1Yj4"),I=i.a.createElement,N=function(t){var e=Object(o.useContext)(u.a).user;return console.log("currentContext:",Object(o.useContext)(u.a)),I("div",null,I(s.a,null,I("title",null,"Full Stack Restaurant App"),I("meta",{charSet:"utf-8"}),I("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),I("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),I("script",{src:"https://js.stripe.com/v3"})),I("header",{className:"jsx-3796417845"},I(f.a,{id:"3796417845"},["a.jsx-3796417845{color:white;}","h5.jsx-3796417845{color:white;padding-top:11px;}"]),I(w,{className:"navbar navbar-dark bg-dark"},I(A,null,I(p.a,{href:"/"},I("a",{className:"jsx-3796417845 navbar-brand"},"Home"))),I(A,{className:"ml-auto"},e?I("h5",{className:"jsx-3796417845"},e.username):I(p.a,{href:"/register"},I("a",{className:"jsx-3796417845 nav-link"}," Sign up"))),I(A,null,e?I(p.a,{href:"/"},I("a",{onClick:function(){logout(),setUser(null)},className:"jsx-3796417845 nav-link"},"Logout")):I(p.a,{href:"/login"},I("a",{className:"jsx-3796417845 nav-link"},"Sign in"))))),I(_.a,null,t.children))},k=(n("p46w"),i.a.createElement);e.default=function(t){var e=Object(o.useContext)(u.a),n=e.cart,a=e.addItem,i=e.removeItem,c=e.user,l=(e.setUser,Object(o.useState)({cart:n})),f=l[0],d=l[1],p=Object(o.useState)({user:c}),m=(p[0],p[1]),v=t.Component,h=t.pageProps;return function(t){d({user:t})},a=function(t){var e=f.cart.items,n=!0;if(e.length>0&&(n=e.find((function(e){return e.id===t.id})))||(n=!1),console.log("Found Item value: ".concat(JSON.stringify(n))),n)console.log("Total so far:  ".concat(f.cart.total)),o={items:e.map((function(t){return t.id===n.id?Object.assign({},t,{quantity:t.quantity+1}):t})),total:f.cart.total+t.price};else{var a=JSON.parse(JSON.stringify(t));a.quantity=1;var o={items:[].concat(r(f.cart.items),[a]),total:f.cart.total+t.price};d({cart:o}),console.log("Total items: ".concat(JSON.stringify(o)))}d({cart:o}),console.log("state reset to cart:".concat(JSON.stringify(f)))},i=function(t){var e=f.cart.items,n=e.find((function(e){return e.id===t.id}));if(n.quantity>1)var a={items:e.map((function(t){return t.id===n.id?Object.assign({},t,{quantity:t.quantity-1}):t})),total:f.cart.total-t.price};else{console.log("Try remove item ".concat(JSON.stringify(n)));var r=e.findIndex((function(t){return t.id===n.id}));e.splice(r,1);a={items:e,total:f.cart.total-t.price}}d({cart:a})},k(u.a.Provider,{value:{cart:f.cart,addItem:a,removeItem:i,isAuthenticated:isAuthenticated,user:c,setUser:function(t){m({user:t})}}},k(s.a,null,k("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),k(N,null,k(v,h)))}},"7W2i":function(t,e,n){var a=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var a,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=a?Object.getOwnPropertyDescriptor(t,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(r.type){case"title":case"base":e.has(r.type)?o=!1:e.add(r.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var u=d[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],f=a[u]||new Set;f.has(l)?o=!1:(f.add(l),a[u]=f)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},e)}m.rewind=function(){};var v=m;e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var a;e.__esModule=!0,e.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});e.HeadManagerContext=r},Ijbi:function(t,e,n){var a=n("WkPL");t.exports=function(t){if(Array.isArray(t))return a(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return a(t)||r(t)||o(t)||i()}},Xuae:function(t,e,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),f=function(t){i(n,t);var e=u(n);function n(t){var o;return r(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=f},a1gu:function(t,e,n){var a=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?r(t):e}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var a;e.__esModule=!0,e.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});e.AmpStateContext=r}}]);