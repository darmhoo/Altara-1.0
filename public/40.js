webpackJsonp([40],{"7Roy":function(t,a,e){var s=e("VU/8")(e("oGME"),e("JNkd"),!1,null,null,null);t.exports=s.exports},JNkd:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[e("div",{staticClass:"mt-5 attendance-head"},[e("div",{staticClass:"mb-5 row align-items-center"},[e("div",{staticClass:"col-12 title-con"},[e("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"row justify-content-end"},[e("a",{staticClass:"text-link mt-3",attrs:{href:"javascript:"},on:{click:function(a){t.$router.push("attendance/create")}}},[t._v("\n                            click here to create attendance!")]),t._v(" "),e("span",{staticClass:"mx-4 mt-3"},[t._v("||")]),t._v(" "),e("a",{staticClass:"text-link mt-3",attrs:{href:"javascript:"},on:{click:t.toggleGuide}},[t._v("\n                            view table guide!")])])])])]),t._v(" "),e("div",{staticClass:"attendance-body",attrs:{id:"table-guide"}},[e("div",{staticClass:"pt-5 row bg-white shadow-sm card-radius"},[e("div",[e("td",{staticClass:"arrEarly leftLate"},[e("span",[t._v("A")])]),t._v(" "),e("span",[t._v("In before/at 9:00am "),e("br"),t._v(" Out after/at 6:00pm")])]),t._v(" "),e("div",[e("td",{staticClass:"arrEarly leftEarly"},[e("span",[t._v("A")])]),t._v(" "),e("span",[t._v("In before/at 9:00am  "),e("br"),t._v(" Out Before 6:00pm")])]),t._v(" "),e("div",[e("td",{staticClass:"arrLate leftLate"},[e("span",[t._v("A")])]),t._v(" "),e("span",{staticClass:"d-inline-block"},[t._v("In after 9:00am  "),e("br"),t._v(" Out after/at 6:00pm")])]),t._v(" "),e("div",[e("td",{staticClass:"arrLate leftEarly"},[e("span",[t._v("A")])]),t._v(" "),e("span",{staticClass:"d-inline-block"},[t._v("In after 9:00am  "),e("br"),t._v(" Out before 6:00pm")])]),t._v(" "),e("div",[e("td",{staticClass:"absent"},[e("span",[t._v("A")])]),t._v(" "),e("span",[t._v("Absent")])])])]),t._v(" "),e("div",{staticClass:"mt-5 row attendance-head"},t._l(["Branch","Month","Year"],function(a){return e("div",{staticClass:"col-4 col-sm-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"light-heading"},[e("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(a))])])])})),t._v(" "),e("div",{staticClass:"mt-2 mt-lg-3 row attendance-head"},[t._l(["branch","month","year"],function(a){return e("div",{staticClass:"col-4 col-sm-3"},[e("div",{staticClass:"row"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.query[a],expression:"query[caption]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select",attrs:{name:a,"data-vv-validate-on":"blur"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.query,a,e.target.multiple?s:s[0])}}},[e("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(a))]),t._v(" "),t._l(t.$store.getters.getBranches,function(s){return"branch"===a?e("option",{domProps:{value:s.id}},[t._v("\n                            "+t._s(t._f("capitalize")(s.name))+"\n                        ")]):t._e()}),t._v(" "),t._l(t.$store.getters.getMonths,function(s){return"month"===a?e("option",{domProps:{value:s.id}},[t._v("\n                            "+t._s(s.name)+"\n                        ")]):t._e()}),t._v(" "),t._l(t.$store.getters.getYears,function(s){return"year"===a?e("option",{domProps:{value:s}},[t._v("\n                            "+t._s(s)+"\n                        ")]):t._e()})],2),t._v(" "),t.errors.first(a)?e("small",{staticClass:"text-muted"},[t._v(t._s(t.errors.first(a)))]):t._e()])])}),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"row d-flex justify-content-end"},[e("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(a){t.fetch()}}},[t._v("View Attendance")])])])],2),t._v(" "),e("div",{staticClass:"attendance-body"},[t.show?e("div",{staticClass:"mt-5 row"},[e("div",{staticClass:"card"},[e("div",{staticClass:"image-and-names float-left"},[e("table",{staticClass:"table table-names"},[e("thead",[e("tr",[e("th",{staticClass:"ml-5"},[t._v("Employee Name")])])]),t._v(" "),e("tbody",t._l(t.attendances,function(a){return e("tr",[e("td",[e("div",{staticClass:"row align-items-center m-0 user-details"},[e("span",{staticClass:"user mx-auto"},[e("i",{staticClass:"user-icon fas fa-user-alt"})]),t._v(" "),e("div",{staticClass:" col user-name"},[t._v(t._s(""+a.full_name))])])])])}))])]),t._v(" "),e("div",{staticClass:"float-left daily-attendance"},[e("table",{staticClass:"table table-details table-bordered"},[e("thead",[e("tr",t._l(t.columns,function(a){return e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(a.month+" "+a.date))]),e("br"),e("span",{staticClass:"light-heading day"},[t._v("\n                                    "+t._s(""+a.dayString)+"\n                                ")])])}))]),t._v(" "),e("tbody",t._l(t.attendances,function(a){return e("tr",t._l(t.columns,function(s){return e("td",{class:t.checkClass(a,s),on:{click:function(e){t.displayInfo(a,s)}}},[t._v("\n                                    "+t._s(t.isPresent(a,s))+"\n                                ")])}))}))])])])]):e("div",{staticClass:"row attendance-item p-5 my-5"},[e("span",{staticClass:"no-attendance"},[t._v("Kindly Select Branch, Month and, Year to get started!")])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"viewAttendance"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[t._v("Attendance")]),t._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])]),t._v(" "),e("form",[e("div",{staticClass:"modal-body"},[t.currAttendance?e("div",{staticClass:"px-2"},[e("div",{staticClass:"px-4"},[e("div",{staticClass:"row"},[e("span",[e("strong",[t._v("Status : ")])]),t._v(" "),e("div",{staticClass:"col"},[t._v(t._s(t.currAttendance.is_present?"Present":"Absent"))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",[e("strong",[t._v("Arrival Time : ")])]),t._v(" "),e("div",{staticClass:"col"},[t._v(t._s(t.$timeConvert(t.currAttendance.arrival_time)))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",[e("strong",[t._v("Departure time : ")])]),t._v(" "),e("div",{staticClass:"col"},[t._v(t._s(t.$timeConvert(t.currAttendance.departure_time)))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",[e("strong",[t._v("Date : ")])]),t._v(" "),e("div",{staticClass:"col"},[t._v(t._s(t.currAttendance.date))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",[e("strong",[t._v("Remark : ")])]),t._v(" "),e("div",{staticClass:"col"},[t._v(t._s(t.currAttendance.remark))])])])]):e("div",{staticClass:"px-2"},[e("div",{staticClass:"px-4 row"},[e("span",[e("strong",[t._v("Status : ")])]),t._v(" "),e("div",{staticClass:"col"},[t._v("No Attendance")])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])])])])])])])},staticRenderFns:[]}},oGME:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i(e("I3G/")),n=e("p/p5"),r=i(e("K23+"));function i(t){return t&&t.__esModule?t:{default:t}}var l=function(t){return"/attendance?branch="+t.branch+"&month="+t.month+"&year="+t.year};a.default={data:function(){return{columns:{},show:!1,currAttendance:{},query:{month:"",branch:"",year:""},attendances:{}}},beforeRouteEnter:function(t,a,e){var s=t.query;s.branch?(0,n.get)("/api"+l(s)).then(function(t){var a=t.data;return e(function(t){return t.prepareForm(a)})}).catch(function(t){return e(function(a){return a.handleErr(t)})}):e()},beforeRouteUpdate:function(t,a,e){var s=t.query,r=this;this.show=!1,s.branch?(this.$LIPS(!0),(0,n.get)("/api"+l(s)).then(function(t){var a=t.data;r.prepareForm(a),e()}).catch(function(t){r.handleErr(t),e()})):e()},created:function(){this.$prepareBranches();var t=this.$route.query,a=new Date,e=t.year?t.year:a.getFullYear(),n=t.month?t.month:a.getMonth()+1;s.default.set(this.$data.query,"year",e),s.default.set(this.$data.query,"month",n>=10||2===n.length?n:"0"+n),this.completeQry&&s.default.set(this.$data.query,"branch",t.branch)},methods:{fetch:function(){var t=this;this.$validator.validateAll().then(function(a){a?t.$network()?t.$router.push("/hrm"+l(t.query)):t.$networkErr():t.$networkErr("form")})},prepareForm:function(t){t&&(s.default.set(this.$data,"columns",t.columns),s.default.set(this.$data,"attendances",t.attendances),s.default.set(this.$data.query,"branch",t.branch[0].id),this.show=!0),this.$LIPS(!1)},handleErr:function(t){r.default.setError("Error Fetching Attendance")},isPresent:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=a?a.fullDate:null,n=null,r=t.attendances.filter(function(t){return t.date===s});return r.length>0&&(n=e?r[0][e]:r[0].is_present?"P":"A"),n},earlyOrLate:function(t,a){var e=[],s=t.attendances.filter(function(t){return t.date===a.fullDate});return s.length&&(e[0]=s[0].arrival_time>"09:00"?"arrLate":"arrEarly",s[0].departure_time?e[1]=s[0].departure_time<"18:00"?"leftEarly":"leftLate":e[1]="didNotSignOut"),e},checkClass:function(t,a){var e=void 0,s=this.isPresent(t,a),n=this.earlyOrLate(t,a);return["Sun","Sat"].includes(a.dayString)?e="weekend":"P"===s?n.length&&(e=n.join(" ")):e="A"===s?"absent":"",e},toggleGuide:function(){$("#table-guide").slideToggle()},displayInfo:function(t,a){var e,n=a?a.fullDate:null;return e=t.attendances.filter(function(t){return t.date===n}),s.default.set(this.$data,"currAttendance",e[0]?e[0]:null),$("#viewAttendance").modal("toggle")}},computed:{completeQry:function(){return this.$route.query.year&&this.$route.query.month&&this.$route.query.branch},title:function(){var t="Attendance";if(this.completeQry){var a=this.$route.query.month,e=this.$route.query.year;t+=" "+(a?" - "+this.$store.getters.getMonths[parseInt(a)-1].name:"")+" "+(e||"")}return t}},mounted:function(){var t=this;$(document).on("hidden.bs.modal",".modal",function(){return t.currAttendance={}}),this.toggleGuide()}}}});