webpackJsonp([23],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},"Aj3+":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[a("custom-header",{attrs:{title:"Generate Report"}}),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[a("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Type")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){var r=t.slug,o=t.name;return a("option",{domProps:{value:r}},[e._v(e._s(e._f("capitalize")(o)))])})],2),e._v(" "),e.errors.first("f1.report_type")?a("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Branch")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{disabled:!e.$store.getters.auth("DSALead"),"data-vv-as":"office branch","data-vv-validate-on":"blur",name:"branch_id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?a("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Date from:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date from",name:"date_from",type:"date"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?a("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Date To:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date to",name:"date_to",type:"date"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?a("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Generate Report "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),a("custom-header",{attrs:{title:"Send Daily Report"}}),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{attrs:{"data-vv-scope":"f2",id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[a("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("DSA (Name-ID)")]),e._v(" "),a("typeahead",{attrs:{options:e.users,caption:"full_name"},model:{value:e.dailyReport.user_id,callback:function(t){e.$set(e.dailyReport,"user_id",t)},expression:"dailyReport.user_id"}})],1),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?a("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Forms registered on portal")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?a("small",[e._v(e._s(e.errors.first("f2.number_on_portal"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Forms submitted to captain")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?a("small",[e._v("\n                            "+e._s(e.errors.first("f2.number_to_captain"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?a("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Log Report "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])],1)])},staticRenderFns:[]}},EJ7O:function(e,t,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);e.exports=r.exports},UorG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("K23+")),o=n(a("GqYo")),s=a("p/p5"),i=n(a("EJ7O"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Typeahead:o.default,CustomHeader:i.default},beforeCreate:function(){var e=this;!this.$store.getters.auth("DSACaptain")&&this.$networkErr("page"),(0,s.get)("/api/user/"+this.$store.state.user_id).then(function(t){var a=t.data;e.report.branch=a.user.branch,e.pageBranch.push(a.user.branch)}),(0,s.get)("/api/user/getBranchUsers").then(function(t){var a=t.data;return e.users=a.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var a=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id}),r=a.id,o=a.name;e.report.branch={id:r,name:o},(0,s.postD)("/api/report",e.report).then(function(t){var a=t.data,r=window.URL.createObjectURL(new Blob([a])),s=document.createElement("a");s.href=r,s.setAttribute("download",e.report.type+"_for_"+o+".xlsx"),document.body.appendChild(s),s.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=new Date,t=e.getDay(),a=e.getDate()-t+(0===t?-6:1),r=new Date(e.setDate(a)),o=new Date;o.setDate(r.getDate()+4),this.report.from=r=this.$getDate(r),this.report.to=o=this.$getDate(o)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){if(t){if(!e.dailyReport.user_id)return e.$scrollToTop(),r.default.setError("Please select a DSA.");e.$network()?(e.$LIPS(!0),(0,s.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){var a=t.data;e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),a.submitted&&r.default.setSuccess(a.message)}).catch(function(){return r.default.setError("Error logging report please try again later!")})):e.$networkErr()}else e.$networkErr("form")})}}}},khuM:function(e,t,a){var r=a("VU/8")(a("UorG"),a("Aj3+"),!1,null,null,null);e.exports=r.exports},oKx2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}}});