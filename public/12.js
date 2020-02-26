webpackJsonp([12],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},"Aj3+":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{title:"Generate Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){var a=t.slug,n=t.name;return r("option",{domProps:{value:a}},[e._v(e._s(e._f("capitalize")(n)))])})],2),e._v(" "),e.errors.first("f1.report_type")?r("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{disabled:!e.$store.getters.auth("DSALead"),"data-vv-as":"office branch","data-vv-validate-on":"blur",name:"branch_id"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?r("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date from",name:"date_from",type:"date"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?r("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date to",name:"date_to",type:"date"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?r("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),r("custom-header",{attrs:{title:"Send Daily Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f2",id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("typeahead",{attrs:{options:e.users,caption:"full_name"},model:{value:e.dailyReport.user_id,callback:function(t){e.$set(e.dailyReport,"user_id",t)},expression:"dailyReport.user_id"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?r("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?r("small",[e._v(e._s(e.errors.first("f2.number_on_portal"))+"\n                        ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms submitted to captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?r("small",[e._v("\n                            "+e._s(e.errors.first("f2.number_to_captain"))+"\n                        ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?r("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])],1)])},staticRenderFns:[]}},EJ7O:function(e,t,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);e.exports=a.exports},GBQg:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},GqYo:function(e,t,r){var a=r("VU/8")(r("MmHb"),r("iAiK"),!1,function(e){r("SBKC")},"data-v-1f6e6fa2",null);e.exports=a.exports},MmHb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("nv24");t.default={props:{options:{type:Array,default:function(){return[]}},caption:{type:[String,Number],default:null},value:{type:[String,Number],default:null},nameValue:{type:[String,Number],default:null}},data:function(){return{open:!1,selectIndex:0,displayText:"",search:""}},computed:{filteredOptions:function(){var e=this,t=new RegExp(this.search,"i");return this.options.filter(function(r){return t.test(r.id)||t.test(r[e.caption])})}},watch:{value:function(e){e&&this.select(this.options.find(function(t){return t.id===e}))}},methods:{onDownKey:function(){this.filteredOptions.length-1>this.selectIndex&&this.selectIndex++},onUpKey:function(){this.selectIndex>0&&this.selectIndex--},onEnterKey:function(){var e=this.filteredOptions[this.selectIndex];e&&this.select(e)},select:function(e){this.displayText=e[this.caption],this.$emit("input",e.id),this.$refs.search.blur()},toggle:function(e){e.target!==this.$refs.toggle&&e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]||(this.open?e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]&&this.$refs.search.blur():this.$refs.search.focus())},onFocus:function(){this.open=!0},onBlur:function(){this.search="",this.open=!1},onEscape:function(){this.$refs.search.blur()}},created:function(){var e=this;a.EventBus.$on("clearTypeAhead",function(){return e.displayText=null})}}},SBKC:function(e,t,r){var a=r("GBQg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("7948959c",a,!0,{})},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("K23+")),n=i(r("GqYo")),s=r("p/p5"),o=i(r("EJ7O"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Typeahead:n.default,CustomHeader:o.default},beforeCreate:function(){var e=this;!this.$store.getters.auth("DSACaptain")&&this.$networkErr("page"),(0,s.get)("/api/user/"+this.$store.state.user_id).then(function(t){var r=t.data;e.report.branch=r.user.branch,e.pageBranch.push(r.user.branch)}),(0,s.get)("/api/user/getBranchUsers").then(function(t){var r=t.data;return e.users=r.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var r=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id}),a=r.id,n=r.name;e.report.branch={id:a,name:n},(0,s.postD)("/api/report",e.report).then(function(t){var r=t.data,a=window.URL.createObjectURL(new Blob([r])),s=document.createElement("a");s.href=a,s.setAttribute("download",e.report.type+"_for_"+n+".xlsx"),document.body.appendChild(s),s.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=new Date,t=e.getDay(),r=e.getDate()-t+(0===t?-6:1),a=new Date(e.setDate(r)),n=new Date;n.setDate(a.getDate()+4),this.report.from=a=this.$getDate(a),this.report.to=n=this.$getDate(n)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){if(t){if(!e.dailyReport.user_id)return e.$scrollToTop(),a.default.setError("Please select a DSA.");e.$network()?(e.$LIPS(!0),(0,s.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){var r=t.data;e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),r.submitted&&a.default.setSuccess(r.message)}).catch(function(){return a.default.setError("Error logging report please try again later!")})):e.$networkErr()}else e.$networkErr("form")})}}}},iAiK:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"position-relative",class:e.open?"typeahead typeahead__open":"typeahead"},[r("div",{ref:"toggle",staticClass:"typeahead__toggle",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"typeahead__search",attrs:{type:"text",value:"null"},domProps:{value:e.search},on:{blur:e.onBlur,focus:e.onFocus,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onDownKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.onEscape(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onUpKey(t):null}],input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),r("span",{ref:"text",staticClass:"typeahead__text"},[e._v("\n        "+e._s(e.displayText)+"\n     ")])]),e._v(" "),e.open?r("ul",{staticClass:"typeahead__list"},e._l(e.filteredOptions,function(t,a){return r("li",{key:a,staticClass:"typeahead__item"},[r("a",{staticClass:"typeahead__link",class:[e.selectIndex===a?"typeahead__active":""],on:{mousedown:function(r){r.preventDefault(),e.select(t)}}},[e._v("\n                "+e._s(t[e.caption])+"\n            ")])])})):e._e()])},staticRenderFns:[]}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("Aj3+"),!1,null,null,null);e.exports=a.exports},nv24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=void 0;var a,n=r("I3G/"),s=(a=n)&&a.__esModule?a:{default:a};t.EventBus=new s.default},oKx2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}},rjj0:function(e,t,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=r("tTVk"),s={},o=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,u=!1,d=function(){},c=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var r=e[t],a=s[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(_(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var o=[];for(n=0;n<r.parts.length;n++)o.push(_(r.parts[n]));s[r.id]={id:r.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function _(e){var t,r,a=document.querySelector("style["+p+'~="'+e.id+'"]');if(a){if(u)return d;a.parentNode.removeChild(a)}if(f){var n=l++;a=i||(i=v()),t=y.bind(null,a,n,!1),r=y.bind(null,a,n,!0)}else a=v(),t=function(e,t){var r=t.css,a=t.media,n=t.sourceMap;a&&e.setAttribute("media",a);c.ssrId&&e.setAttribute(p,t.id);n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else r()}}e.exports=function(e,t,r,a){u=r,c=a||{};var o=n(e,t);return m(o),function(t){for(var r=[],a=0;a<o.length;a++){var i=o[a];(l=s[i.id]).refs--,r.push(l)}t?m(o=n(e,t)):o=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete s[l.id]}}}};var h,g=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function y(e,t,r,a){var n=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var s=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},tTVk:function(e,t){e.exports=function(e,t){for(var r=[],a={},n=0;n<t.length;n++){var s=t[n],o=s[0],i={id:e+":"+n,css:s[1],media:s[2],sourceMap:s[3]};a[o]?a[o].parts.push(i):r.push(a[o]={id:o,parts:[i]})}return r}}});