(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24455aa9"],{"2f1b":function(e,t,o){"use strict";o("c090")},"6a97":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-sm-6"},[o("h3",[e._v("Nuevo producto")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.agregarNuevoProducto.apply(null,arguments)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"nombre"}},[e._v("Nombre")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.nombre,expression:"producto.nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombre",name:"nombre",minlength:"4",maxlength:"40",required:""},domProps:{value:e.producto.nombre},on:{input:function(t){t.target.composing||e.$set(e.producto,"nombre",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"categoria"}},[e._v("Categoria")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.producto.categoria,expression:"producto.categoria"}],staticClass:"form-control",attrs:{name:"categoria",id:"categoria",required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.producto,"categoria",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Elija una opción")]),o("option",{attrs:{value:"dulce"}},[e._v("Dulce")]),o("option",{attrs:{value:"salado"}},[e._v("Salado")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"imagen"}},[e._v("URL Imagen")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.imagen,expression:"producto.imagen"}],staticClass:"form-control",attrs:{type:"text",id:"imagen",name:"imagen",required:""},domProps:{value:e.producto.imagen},on:{input:function(t){t.target.composing||e.$set(e.producto,"imagen",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"precio"}},[e._v("Precio")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.producto.precio,expression:"producto.precio",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"100",max:"9999",step:"100",id:"precio",name:"precio",required:""},domProps:{value:e.producto.precio},on:{input:function(t){t.target.composing||e.$set(e.producto,"precio",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.oferta,expression:"producto.oferta"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"oferta"},domProps:{checked:Array.isArray(e.producto.oferta)?e._i(e.producto.oferta,"")>-1:e.producto.oferta},on:{change:function(t){var o=e.producto.oferta,r=t.target,a=!!r.checked;if(Array.isArray(o)){var c="",n=e._i(o,c);r.checked?n<0&&e.$set(e.producto,"oferta",o.concat([c])):n>-1&&e.$set(e.producto,"oferta",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(e.producto,"oferta",a)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"oferta"}},[e._v(" Oferta ")])]),e.producto.oferta?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"descuento"}},[e._v("Descuento")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.producto.descuento,expression:"producto.descuento",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"descuento",name:"descuento",required:"",min:"0",max:"99",step:"1"},domProps:{value:e.producto.descuento},on:{input:function(t){t.target.composing||e.$set(e.producto,"descuento",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]):e._e(),o("button",{staticClass:"btn btn-success product-create",attrs:{type:"submit"}},[e._v("Crear producto")])])])])},a=[],c=o("5530"),n={data:function(){return{producto:{nombre:null,categoria:null,peso:null,precio:null,oferta:!1,descuento:null,imagen:""}}},methods:{agregarNuevoProducto:function(){this.$store.dispatch("productos/crearProducto",Object(c["a"])({},this.producto)),this.$router.push("/")}}},s=n,u=(o("2f1b"),o("2877")),i=Object(u["a"])(s,r,a,!1,null,"7fa6480e",null);t["default"]=i.exports},c090:function(e,t,o){}}]);
//# sourceMappingURL=chunk-24455aa9.fa4b0738.js.map