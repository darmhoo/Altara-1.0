webpackJsonp([12],{"1gIg":function(t,a,e){var r=e("VU/8")(e("wBhk"),e("Zdt2"),!1,function(t){e("qM0B")},null,null);t.exports=r.exports},UEJX:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r,i=e("1gIg"),s=(r=i)&&r.__esModule?r:{default:r};a.default={components:{AppNavigation:s.default}}},Vq3G:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"px-md-4 px-2"},[a("app-navigation",{attrs:{pageTitle:"Floor Sales and Logistics",pageTitleSmall:"FSL",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]}},Zdt2:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[t.$routerHistory.hasPrevious()?e("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[e("span",{staticClass:"mr-5 float-left"},[e("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),e("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),e("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[e("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),e("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?e("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[e("span",{staticClass:"ml-5 float-right"},[e("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),e("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},qM0B:function(t,a,e){var r=e("xucE");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("27e3f694",r,!0,{})},vyvX:function(t,a,e){var r=e("VU/8")(e("UEJX"),e("Vq3G"),!1,null,null,null);t.exports=r.exports},wBhk:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},xucE:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:2.4rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:2.6rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])}});