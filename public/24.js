<<<<<<< HEAD
webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/HomePage.vue":
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

exports.default = {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b80ac6e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-page sidebar-collapse" }, [
      _c("h1", [_vm._v("This is the profile page")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b80ac6e", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/profile/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b80ac6e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/HomePage.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\profile\\HomePage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b80ac6e", Component.options)
  } else {
    hotAPI.reload("data-v-5b80ac6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([24],{"57Cy":function(t,a,s){var i=s("VU/8")(s("N2ek"),s("mIVu"),!1,null,null,null);t.exports=i.exports},N2ek:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=l(s("I3G/")),e=s("uD8u"),n=l(s("TOoT"));function l(t){return t&&t.__esModule?t:{default:t}}var o=function(t){return"/caution"+(t.query.page?"?page="+t.query.page:"")};a.default={data:function(){return{show:!1,caution:null,cautions:{},columns:[{name:"Employee",col:4},{name:"Issued by",col:3},{name:"Reason",col:2},{name:"Penalty",col:2},{name:"Date",col:1}]}},beforeRouteEnter:function(t,a,s){(0,e.get)("/api"+o(t)).then(function(t){s(function(a){return a.prepareForm(t.data)})}).catch(function(t){s(function(a){return a.handleErr(t)})})},beforeRouteUpdate:function(t,a,s){var i=this;this.show=!1,this.$LIPS(!0),(0,e.get)("/api"+o(t)).then(function(t){i.prepareForm(t.data),s()}).catch(function(t){i.handleErr(t),s()})},methods:{fetch:function(){var t=this;this.$validator.validateAll().then(function(a){a?t.$network()?t.$router.push("/hrm"+o(t.query)):t.$networkErr():t.$networkErr("form")})},prepareForm:function(t){t.cautions.data.length<1&&0!==t.cautions.total&&this.$router.push({query:{page:t.cautions.last_page}}),t.cautions.data.length&&(i.default.set(this.$data,"cautions",t.cautions),this.show=!0),this.$LIPS(!1)},handleErr:function(t){n.default.setError("Error Fetching Cautions")},displayInfo:function(t){return i.default.set(this.$data,"caution",t),$("#view-caution").modal("toggle")}},updated:function(){var t=this;$('[data-toggle="tooltip"]').tooltip({boundary:"window",html:!0}),$(document).on("hidden.bs.modal",".modal",function(){return t.caution=""})}}},mIVu:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[s("div",{staticClass:"mt-5 attendance-head"},[s("div",{staticClass:"mb-5 row align-items-center"},[s("div",{staticClass:"col-12 title-con"},[s("span",{staticClass:"title"},[t._v("Caution Register")]),t._v(" "),s("div",{staticClass:"row justify-content-end"},[s("router-link",{staticClass:"text-link mt-3",attrs:{to:"caution/create"}},[t._v("click here to send caution a staff!")])],1)])])]),t._v(" "),t.show?s("div",{staticClass:"mt-5 row attendance-head mb-4"},t._l(t.columns,function(a){return s("div",{class:"col-"+a.col},[s("div",{staticClass:"row"},[s("div",{staticClass:"light-heading"},[s("span",{staticClass:"d-none d-sm-inline"}),t._v(" "+t._s(a.name))])])])})):t._e(),t._v(" "),s("div",{staticClass:"mt-1 attendance-body"},[t.show?s("div",[t._l(t.cautions.data,function(a,i){return s("div",{staticClass:"mb-3 px-0 row align-items-center attendance-item",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"click on here to view full details!"},on:{click:function(s){t.displayInfo(a)}}},[s("div",{staticClass:"col-12 col-xs-4 col-md-4 col-lg-4"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"ml-5 mr-3 sm-hide"},[s("span",{staticClass:"user mx-auto"},[t._v("\n                                    "+t._s(i+1+10*(t.cautions.current_page-1))+"\n                                ")])]),t._v(" "),s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v(t._s(a.user.full_name))])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.issuer.full_name))])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.reason_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.penalty_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-1 col-md-1 col-lg-1 pl-3 py-4 py-sm-0"},[s("div",{staticClass:"row"},[s("span",[t._v("\n                                "+t._s(a.date_text)+"\n                            ")])])])])}),t._v(" "),s("div",{staticClass:"mb-5 px-0 row align-items-center"},[s("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),s("div",{staticClass:"clearfix w-100 mt-4"},[s("div",{staticClass:"float-left"},[s("strong",{staticClass:"light-heading float-left"},[t._v("\n                                Displaying: "+t._s(t.cautions.from)+" - "+t._s(t.cautions.to)+" of "+t._s(t.cautions.total)+"\n                            ")])]),t._v(" "),s("nav",{staticClass:"float-right",attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination pagination-lg float-left"},[s("li",{staticClass:"page-item",class:t.cautions.first_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:1}}}},[t._v("\n                                        First\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.prev_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page-1}}}},[t._v("\n                                        Previous\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item"},[s("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.cautions.current_page))])]),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.next_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page+1}}}},[t._v("\n                                        Next\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.last_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.last_page}}}},[t._v("\n                                        Last\n                                    ")])],1)])])])])],2):s("div",{staticClass:"row attendance-item p-5 mb-5"},[s("span",{staticClass:"no-attendance"},[t._v("No cautions has been issued!")])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"view-caution"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header py-2"},[s("h6",{staticClass:"modal-title py-1"},[t._v("Caution")]),t._v(" "),s("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[s("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])])]),t._v(" "),s("form",[s("div",{staticClass:"modal-body"},[t.caution?s("div",{staticClass:"px-2"},[s("div",{staticClass:"px-4"},[s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Employee : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.user.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Issued by : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.issuer.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Reason : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.reason))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Penalty : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.penalty))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Date : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.date_text))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])])])])])])])},staticRenderFns:[]}}});
>>>>>>> a6badb66dd1c3c9d8d4944777dabf072e5614b15
