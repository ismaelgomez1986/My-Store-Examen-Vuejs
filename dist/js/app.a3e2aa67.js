(function(t){function e(e){for(var n,r,s=e[0],u=e[1],i=e[2],d=0,l=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(n=!1)}n&&(c.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},a={app:0},c=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-17a21861":"438886f1","chunk-24455aa9":"fa4b0738","chunk-2cb0c8ca":"c6b2102d"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o={"chunk-17a21861":1,"chunk-24455aa9":1,"chunk-2cb0c8ca":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-17a21861":"295fa45d","chunk-24455aa9":"18834dab","chunk-2cb0c8ca":"c61bbf88"}[t]+".css",a=u.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===a))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],d=i.getAttribute("data-href");if(d===n||d===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],p.parentNode.removeChild(p),o(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(p);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/My-Store-Examen-Vuejs/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Toolbar"),o("div",{staticClass:"container-fluid"},[o("router-view")],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[o("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Pizzas Casera")]),t._m(0),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.items,(function(e,n){return o("li",{key:n,staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:e.to}},[t._v(t._s(e.text))])],1)})),0)])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],u={data:function(){return{items:[{text:"Inicio",to:"/"},{text:"Nuevo producto",to:"/nuevo-producto"},{text:"Carrito de Compras",to:"/carrito"}]}}},i=u,d=o("2877"),l=Object(d["a"])(i,c,s,!1,null,null,null),p=l.exports,f={components:{Toolbar:p}},m=f,b=Object(d["a"])(m,r,a,!1,null,null,null),h=b.exports,g=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f"));n["a"].use(g["a"]);var v=[{path:"/",name:"Inicio",component:function(){return o.e("chunk-17a21861").then(o.bind(null,"b53f"))}},{path:"/nuevo-producto",name:"NuevoProducto",component:function(){return o.e("chunk-24455aa9").then(o.bind(null,"6a97"))}},{path:"/carrito",name:"CarritoDeCompras",component:function(){return o.e("chunk-2cb0c8ca").then(o.bind(null,"1c71"))}}],O=new g["a"]({mode:"history",base:"/My-Store-Examen-Vuejs/",routes:v}),P=O,C=o("2f62"),_=o("1da1"),T=o("5530"),y=o("15fd"),A=(o("96cf"),o("a434"),o("c740"),["stock"]),k=function(t){return new Promise((function(e){setTimeout((function(){e()}),t)}))},R={namespaced:!0,state:{todosLosProductos:[]},getters:{totalTotal:function(t){return t.todosLosProductos.reduce((function(t,e){return t+=e.precio*(1-e.descuento/100)*e.cantidad,t}),0)}},mutations:{AGREGAR_PRODUCTO:function(t,e){t.todosLosProductos.push(e)},AGREGAR_CANTIDAD_PRODUCTO:function(t,e){t.todosLosProductos[e].cantidad++},QUITAR_CANTIDAD_PRODUCTO:function(t,e){t.todosLosProductos[e].cantidad--},QUITAR_PRODUCTO:function(t,e){t.todosLosProductos.splice(e,1)},QUITAR_TODOS_PRODUCTOS:function(t){t.todosLosProductos=[]}},actions:{agregarProducto:function(t,e){var o=t.state.todosLosProductos.findIndex((function(t){return t.nombre===e.nombre}));if(-1===o){e.stock;var n=Object(y["a"])(e,A);t.commit("AGREGAR_PRODUCTO",Object(T["a"])(Object(T["a"])({},n),{},{cantidad:1}))}else t.commit("AGREGAR_CANTIDAD_PRODUCTO",o)},quitarProducto:function(t,e){var o=t.state.todosLosProductos.findIndex((function(t){return t.nombre===e.nombre}));o>=0?t.state.todosLosProductos[o].cantidad>1?t.commit("QUITAR_CANTIDAD_PRODUCTO",o):t.commit("QUITAR_PRODUCTO",o):console.error("el producto no existe en el carrito de compras")},comprar:function(t){return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k(5e3);case 2:console.log("Productos comprados"),console.table(t.state.todosLosProductos),t.commit("QUITAR_TODOS_PRODUCTOS");case 5:case"end":return e.stop()}}),e)})))()}}},D=(o("4de4"),o("caad"),o("2532"),{namespaced:!0,state:{todosLosProductos:[{nombre:"Margarita",categoria:"Dulce",peso:"1kg",oferta:!1,descuento:0,precio:6500,stock:10,imagen:"https://th.bing.com/th/id/OIP.hLoofgXXprZtKj15xhIvIwHaE5?pid=ImgDet&rs=1"},{nombre:"Peperoni",categoria:"Salado",peso:"100gr",oferta:!0,descuento:10,precio:8e3,stock:10,imagen:"https://th.bing.com/th/id/OIP.1jNxQyfXuM2Af8AO2D3RAgHaE8?pid=ImgDet&rs=1"},{nombre:"Napolitana",categoria:"Salado",peso:"50gr",oferta:!1,descuento:0,precio:1e4,stock:10,imagen:"https://truffle-assets.imgix.net/23df7da4-pizza-napolitana_l_thumb.jpg?w=600&fl=progressive&auto=format,compress&cs=tinysrgb&dpr=1"},{nombre:"Pollo y bacon",categoria:"Salado",peso:"500gr",oferta:!0,descuento:50,precio:14e3,stock:10,imagen:"https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg"}]},getters:{productoDisponiblePorNombre:function(t){return function(e){return t.todosLosProductos.filter((function(t){return t.precio<=e||t.nombre.toLowerCase().includes(e)||t.categoria.toLowerCase().includes(e)}))}}},mutations:{AGREGAR_PRODUCTO:function(t,e){t.todosLosProductos.push(e)}},actions:{crearProducto:function(t,e){t.commit("AGREGAR_PRODUCTO",e)}}});n["a"].use(C["a"]);var w=new C["a"].Store({state:{},mutations:{},actions:{},modules:{carrito:R,productos:D}});n["a"].config.productionTip=!1,new n["a"]({router:P,store:w,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.a3e2aa67.js.map