webpackJsonp([8],{"/O7o":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"[data-function=display].status[data-v-decdc92c]{border-top-right-radius:0;border-bottom-right-radius:0}.status.dropdown-toggle[data-v-decdc92c]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;padding:1rem!important}.approved.dropdown-toggle[data-v-decdc92c]{background:-webkit-gradient(linear,left top,left bottom,from(#00a368),to(#00662a));background:linear-gradient(180deg,#00a368,#00662a)}.not-approved.dropdown-toggle[data-v-decdc92c]{background:-webkit-gradient(linear,left top,left bottom,from(#e12424),to(#a40000));background:linear-gradient(180deg,#e12424,#a40000)}.dropdown-toggle[data-v-decdc92c]:after{border-top:.6em solid;border-right:.6em solid transparent;border-left:.6em solid transparent}",""])},"1gIg":function(t,e,a){var s=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);t.exports=s.exports},"3eq/":function(t,e,a){var s=a("/O7o");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("7ad2d932",s,!0,{})},"9sZT":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),a("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},Or4O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},r=a("NYxO"),o=a("nv24");e.default={props:["link","size","customer"],data:function(){return{status:null,unfilteredOptions:[{caption:"Change sales agent",modal:"toggleChangeCustomerManagerModal",authAccess:"DSACaptain"}]}},methods:{toggleModal:function(t){o.EventBus.$emit(t,this.customer)}},computed:s({},(0,r.mapGetters)(["auth"]),{filteredOptions:function(){var t=this;return this.unfilteredOptions.filter(function(e){return t.auth(e.authAccess)})},isApproved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)},buttonClass:function(){return this.size&&(this.link?"status status-sm "+this.status:"status mt-md-5 my-sm-2 mt-0 "+this.status)},getLink:function(){if(this.link){if(this.auth("DVAAccess"))return"dva/"+this.link;if(this.auth("ALTARAPAYAccess"))return"altarapay/"+this.link}return"#"}}),created:function(){this.status=this.isApproved?"approved":"not-approved"}}},Re9q:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"position-relative d-flex align-items-stretch"},[a("router-link",{class:t.buttonClass+" text-uppercase",attrs:{tag:t.link?"a":"span",to:t.getLink,"data-function":"display"}},[t._v("\n        "+t._s(t.status.split("-").join(" "))+"\n        "),a("i",{class:"ml-3 fas fa-"+(t.isApproved?"check":"times")})]),t._v(" "),a("span",{class:t.buttonClass+" dropdown-toggle dropdown-toggle-split d-flex align-items-center",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),t._v(" "),a("div",{staticClass:"dropdown-menu"},t._l(t.filteredOptions,function(e){return a("a",{key:e.modal,staticClass:"dropdown-item",attrs:{href:"javascript:"},on:{click:function(a){t.toggleModal(e.modal)}}},[t._v("\n            "+t._s(e.caption)+"\n        ")])}))],1)},staticRenderFns:[]}},"X+Zd":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},r=p(a("I3G/")),o=a("NYxO"),n=a("ic49"),i=p(a("K23+")),l=a("m2tk"),c=a("p/p5"),d=p(a("1gIg")),u=p(a("vRKz"));function p(t){return t&&t.__esModule?t:{default:t}}e.default={components:{ApprovalStatusButton:u.default,AppNavigation:d.default},data:function(){return{model:{},columns:{},query:{page:1,column:"id",direction:"desc",per_page:10,search_column:"id",search_operator:"greater_than",search_input:0},operators:{equal:"=",not_equal:"<>",less_than:"<",greater_than:">",less_than_or_equal_to:"<=",greater_than_or_equal_to:">=",in:"IN",like:"LIKE"},form:{},portal_access:[{name:"grant",value:1},{name:"deny",value:0}]}},created:function(){this.$prepareStates(),this.$prepareBranches(),this.fetchIndexData(),$(document).on("click","tr",function(){$("tr.current").removeClass("current"),$(this).addClass("current")}),this.addCustomerOptionsModalsToDom()},updated:function(){$('[data-toggle="tooltip"]').tooltip()},methods:s({next:function(){this.model.next_page_url&&(this.query.page++,this.fetchIndexData())},prev:function(){this.model.prev_page_url&&(this.query.page--,this.fetchIndexData())},toggleOrder:function(t){t===this.query.column?this.query.direction="desc"===this.query.direction?"asc":"desc":(this.query.column=t,this.query.direcntion="asc"),this.fetchIndexData()},fetchIndexData:function(){var t=this;this.$LIPS(!0),$(".modal").modal("hide"),(0,c.get)(this.$route.meta.source+"?page="+this.query.page+"&column="+this.query.column+"&per_page="+this.query.per_page+"&direction="+this.query.direction+"&search_input="+this.query.search_input+"&search_column="+this.query.search_column+"&search_operator="+this.query.search_operator).then(function(e){var a=e.data.model.data;a.length&&a.forEach(function(e){a[0].state_id&&(e.state_id=t.$store.getters.getStates.find(function(t){return t.id===e.state_id}).name),a[0].branch_id&&(e.branch_id=t.$store.getters.getBranches.find(function(t){return t.id===e.branch_id}).name),t.isModel("customer")&&(e.verification=t.$getCustomerApprovalStatus(e.verification))}),r.default.set(t.$data,"model",e.data.model),r.default.set(t.$data,"columns",e.data.columns),t.$scrollToTop(),t.$LIPS(!1)})},update:function(t,e){this.form=t,$("#"+e).modal("toggle")},resetPassword:function(){var t=this;this.$network()?(this.$LIPS(!0),(0,c.get)("/api/reset-password/"+this.form.id).then(function(e){var a=e.data.password,s=t.form,r=s.staff_id,o=s.phone_number,c="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+r+", new password: "+a;(0,n.log)("resetUserPassword",r),new l.Message(c,o,!1).send(function(e){return 200===e.status&&t.done()}),i.default.setSuccess("Password reset successful!")})):this.$networkErr()},myLog:function(t){var e=this;this.$network()?(this.$LIPS(!0),(0,c.byMethod)("PUT","/api/user/"+t,this.form).then(function(t){var e=t.data;(0,n.log)("PortalAccessUpdated",String(e.staff_id)),i.default.setSuccess("Portal access updated",2e4)}).catch(function(t){var e=t.response.data.message;i.default.setError(e||"Error updating status. Try again later!",1e4)}).finally(function(){return e.done()})):this.$networkErr()},done:function(){this.$scrollToTop(),this.$LIPS(!1),$(".modal").modal("hide")},isModel:function(t){return this.$route.meta.appModel===t}},(0,o.mapActions)("ModalAccess",["addCustomerOptionsModalsToDom","removeCustomerOptionsModalsFromDom"])),destroyed:function(){this.removeCustomerOptionsModalsFromDom()}}},Y1qv:function(t,e,a){var s=a("VU/8")(a("X+Zd"),a("wxNN"),!1,null,null,null);t.exports=s.exports},rjj0:function(t,e,a){var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=a("tTVk"),o={},n=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,d=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var e=0;e<t.length;e++){var a=t[e],s=o[a.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](a.parts[r]);for(;r<a.parts.length;r++)s.parts.push(h(a.parts[r]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{var n=[];for(r=0;r<a.parts.length;r++)n.push(h(a.parts[r]));o[a.id]={id:a.id,refs:1,parts:n}}}}function v(){var t=document.createElement("style");return t.type="text/css",n.appendChild(t),t}function h(t){var e,a,s=document.querySelector("style["+p+'~="'+t.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(f){var r=l++;s=i||(i=v()),e=b.bind(null,s,r,!1),a=b.bind(null,s,r,!0)}else s=v(),e=function(t,e){var a=e.css,s=e.media,r=e.sourceMap;s&&t.setAttribute("media",s);u.ssrId&&t.setAttribute(p,e.id);r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,s),a=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}t.exports=function(t,e,a,s){c=a,u=s||{};var n=r(t,e);return m(n),function(e){for(var a=[],s=0;s<n.length;s++){var i=n[s];(l=o[i.id]).refs--,a.push(l)}e?m(n=r(t,e)):n=[];for(s=0;s<a.length;s++){var l;if(0===(l=a[s]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var _,g=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function b(t,e,a,s){var r=a?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],s={},r=0;r<e.length;r++){var o=e[r],n=o[0],i={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};s[n]?s[n].parts.push(i):a.push(s[n]={id:n,parts:[i]})}return a}},vRKz:function(t,e,a){var s=a("VU/8")(a("Or4O"),a("Re9q"),!1,function(t){a("3eq/")},"data-v-decdc92c",null);t.exports=s.exports},wBhk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},wxNN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{class:t.isModel("customer")&&"px-md-4 px-2"},[t.isModel("customer")?a("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},previous:{path:t.$routerHistory.previous().path},pageTitle:t._f("capitalize")(t.$route.meta.appModel+" List"),pageTitleSmall:t._f("capitalize")(t.$route.meta.appModel+". List")}}):t._e(),t._v(" "),a("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeEdit"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"px-5 py-4"},[a("div",{staticClass:"px-3 clearfix"},[a("h5",{staticClass:"h5-custom float-left m-0"},[t._v(t._s(t._f("capitalize")(t.$route.meta.appModel))+" Management")]),t._v(" "),a("router-link",{staticClass:"float-right btn btn-primary bg-default m-0",attrs:{to:t.$route.meta.new+"/create"}},[t._v("\n                            Add "+t._s(t.$route.meta.appModel)+"!\n                        ")])],1)]),t._v(" "),a("hr",{staticClass:"m-0"}),t._v(" "),a("div",[a("div",{staticClass:"card-body p-4 p-md-5"},[a("div",{staticClass:"clearfix w-100"},[a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[t._v("Search Column")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.query.search_column,expression:"query.search_column"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.query,"search_column",e.target.multiple?a:a[0])}}},t._l(t.columns,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(t._f("capitalize")(e))+"\n                                    ")])}))]),t._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[t._v("Search Operator")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.query.search_operator,expression:"query.search_operator"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.query,"search_operator",e.target.multiple?a:a[0])}}},t._l(t.operators,function(e,s){return a("option",{domProps:{value:s}},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"},[a("label",[t._v("Search Input")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.search_input,expression:"query.search_input"}],staticClass:"form-control",attrs:{placeholder:"search...",type:"text"},domProps:{value:t.query.search_input},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchIndexData()},input:function(e){e.target.composing||t.$set(t.query,"search_input",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"},[a("button",{staticClass:"btn btn-block bg-default mb-0 mt-3 mt-md-4",on:{click:function(e){t.fetchIndexData()}}},[t._v("Filter\n                                ")])])]),t._v(" "),a("div",{staticClass:"px-0 px-md-3 mt-3 table-responsive"},[a("table",{staticClass:"table m-0 table-bordered table-hover"},[a("thead",{staticClass:"thead-light"},[a("tr",[t._l(t.columns,function(e){return a("th",{attrs:{scope:"col"},on:{click:function(a){t.toggleOrder(e)}}},[a("span",[t._v(t._s(t._f("capitalize")(e)))]),t._v(" "),e===t.query.column?a("span",{staticClass:"dv-table-column"},["desc"===t.query.direction?a("span",[t._v("↑")]):a("span",[t._v("↓")])]):t._e()])}),t._v(" "),a("th",{attrs:{scope:"col"}},[a("span",[t._v("Action")])])],2)]),t._v(" "),a("tbody",t._l(t.model.data,function(e){return a("tr",[t._l(e,function(s,r){return a("td",[["verification"].includes(r)?a("ApprovalStatusButton",{key:e.id,attrs:{size:"small",customer:e,link:"verification?id="+e.id}}):a("span",[t._v(t._s(s))])],1)}),t._v(" "),t.isModel("user")?a("td",[a("router-link",{staticClass:"text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",attrs:{to:"employee/"+e.id+"/edit","data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Detail"}},[a("i",{staticClass:"fas fa-user-edit"})]),t._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-icon btn-sm float-left btn-round",class:{"btn-success":e.portal_access,"btn-danger":!e.portal_access},attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Portal Access"},on:{click:function(a){t.update(e,"editPortalAccess")}}},[e.portal_access?a("i",{staticClass:"fas fa-lock-open"}):a("i",{staticClass:"fas fa-lock"})]),t._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Reset Employee Password"},on:{click:function(a){t.update(e,"editPassword")}}},[a("i",{staticClass:"fas fa-key"})])],1):t._e(),t._v(" "),t.isModel("branch")||t.isModel("product")||t.isModel("brand")||t.isModel("category")||t.isModel("supplier")?a("td",[a("button",{staticClass:"text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"update details"},on:{click:function(a){t.$router.push(t.$route.meta.new+"/"+e.id+"/edit")}}},[a("i",{staticClass:"fas fa-cog"})])]):t._e()],2)}))])]),t._v(" "),a("nav",{staticClass:"clearfix pt-5",attrs:{"aria-label":"Page navigation example"}},[a("span",{staticClass:"float-left col-md-6 col-12 px-0 mb-5 mb-md-0"},[t._v("\n                                Displaying: "+t._s(t.model.from)+" - "+t._s(t.model.to)+" of "+t._s(t.model.total)+" "+t._s(t._f("capitalize")(t.$route.meta.appModel))+" (s)\n                            ")]),t._v(" "),a("span",{staticClass:"justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"},[a("ul",{staticClass:"pagination m-0 float-right"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(e){t.prev()}}},[a("i",{staticClass:"fas fa-arrow-circle-left"})])]),t._v(" "),a("li",{staticClass:"page-item"},[a("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.model.current_page))])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(e){t.next()}}},[a("i",{staticClass:"fas fa-arrow-circle-right"})])])]),t._v(" "),a("span",{staticClass:"float-left"},[a("span",{staticClass:"py-2 pr-3 float-left"},[t._v("Rows Per Page ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.per_page,expression:"query.per_page"}],staticClass:"form-control w-25",attrs:{placeholder:"search...",type:"text"},domProps:{value:t.query.per_page},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchIndexData()},input:function(e){e.target.composing||t.$set(t.query,"per_page",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPortalAccess"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("Edit Employee Portal Access")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-0 mb-2"},[a("span",{staticClass:"mb-2 w-100 float-left pl-1 text-center"},[t._v("\n                                               Please Verify you selected the right access before clicking "),a("br"),t._v(" "),a("strong",[t._v("Save Changes ")]),t._v("!\n                                            ")]),t._v(" "),t._l(t.portal_access,function(e){var s=e.name,r=e.value;return a("div",{staticClass:"radio p-0 col-6 float-left text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.portal_access,expression:"form.portal_access"}],attrs:{id:s,name:"access",type:"radio"},domProps:{value:r,checked:t._q(t.form.portal_access,r)},on:{change:function(e){t.$set(t.form,"portal_access",r)}}}),t._v(" "),a("label",{attrs:{for:s}},[t._v(t._s(t._f("capitalize")(s))+" Access")])])})],2)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("\n                                            cancel\n                                        ")]),t._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:t.$isProcessing,type:"button"},on:{click:function(e){t.myLog(t.form.id)}}},[t._v("\n                                            Save changes\n                                            "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPassword"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("Reset Employee Password")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-2 mb-4 "},[a("span",[t._v("A new password will be sent to the employee via "),a("strong",[t._v("sms")]),t._v(" on the\n                                                  telephone He/She "),a("strong",[t._v("used for registration")]),t._v(" on this portal.\n                                                "),a("br"),a("br"),t._v("Please Kindly verify that the phone to receive the new password is on and active!\n                                            ")]),t._v(" "),a("br"),a("br"),t._v(" "),a("u",[a("em",[t._v("click the continue and reset password to finish this\n                                                task!")])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("\n                                            cancel\n                                        ")]),t._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:t.$isProcessing,type:"button"},on:{click:t.resetPassword}},[t._v("\n                                            continue and reset password "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])])],1)])},staticRenderFns:[]}}});