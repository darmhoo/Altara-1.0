<<<<<<< HEAD
webpackJsonp([29],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59317872\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-md-3 pt-2", attrs: { id: "inventory" } }, [
      _c("h2", [_vm._v("Inventory")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59317872", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/LOG/inventory/inventory.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59317872\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/inventory/inventory.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\LOG\\inventory\\inventory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59317872", Component.options)
  } else {
    hotAPI.reload("data-v-59317872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([29],{HCUs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("I3G/"),s=(r=n)&&r.__esModule?r:{default:r};t.default={props:{},data:function(){return{form:{brand_id:"BR-0001",brand_name:null},mode:null,error:{},show:!1,resource:"brands",store:"/api/brands",method:"POST",title:"Create"}},beforeRouteEnter:function(e,t,a){a(function(t){return t.setMode(e.meta.mode)})},beforeRouteUpdate:function(e,t,a){this.store="/api/brands/"+this.$route.params.id,this.method="PUT",this.setMode(e.meta.mode),a()},methods:{setMode:function(e){this.show=!1,s.default.set(this.$data,"mode",e)},onCancel:function(){},onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.error={},console.log(e.form),e.$LIPS(!1)):e.$networkErr():e.$networkErr("form")})}}}},"RjO+":function(e,t,a){var r=a("VU/8")(a("HCUs"),a("wAJk"),!1,null,null,null);e.exports=r.exports},wAJk:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[a("h6",[e._v(e._s(e.mode)+" Brand")])]),e._v(" "),a("div",{staticClass:"card-body pl-4 pr-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("h5",[e._v("Brand Details")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Brand ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.brand_id,expression:"form.brand_id"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"brand id",disabled:"",name:"brand_id",placeholder:"brand id",type:"text"},domProps:{value:e.form.brand_id},on:{input:function(t){t.target.composing||e.$set(e.form,"brand_id",t.target.value)}}}),e._v(" "),e.errors.first("brand_id")?a("small",[e._v(e._s(e.errors.first("brand_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Brand name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.brand_name,expression:"form.brand_name"},{name:"validate",rawName:"v-validate",value:"required|max:150",expression:"'required|max:150'"}],staticClass:"form-control",attrs:{"data-vv-as":"brand name",name:"brand_name",placeholder:"brand name",type:"text"},domProps:{value:e.form.brand_name},on:{input:function(t){t.target.composing||e.$set(e.form,"brand_name",t.target.value)}}}),e._v(" "),e.errors.first("brand_name")?a("small",[e._v(e._s(e.errors.first("brand_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("hr",{staticClass:"style-two"})]),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[a("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?a("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.onCancel}},[e._v("Cancel")]):e._e(),e._v(" "),a("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                "+e._s(e._f("capitalize")(e.mode))+" Brand "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])},staticRenderFns:[]}}});
>>>>>>> a6badb66dd1c3c9d8d4944777dabf072e5614b15
