webpackJsonp([7],{"0GzS":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".typeahead{border-radius:3px;border:1px solid #ccc;position:relative;z-index:1;width:100%;font-size:14px}.typeahead__open{border:1px solid #41b883}.typeahead__open .typeahead__text{color:#999;opacity:.4}.typeahead__toggle{position:relative;z-index:1;width:100%}.typeahead__search{position:absolute;top:0;left:0;width:100%;display:block;cursor:text;background:transparent;border:none;outline:none;z-index:2}.typeahead__search,.typeahead__text{line-height:1em;font-size:1em;padding:10px}.typeahead__text{min-height:36px;display:inline-block;position:relative;z-index:3}.typeahead__list{margin:0;padding:0}.typeahead__item{display:block;border-top:1px solid #f4f4f4}.typeahead__link{display:block;padding:10px;line-height:1em;font-size:1em;cursor:pointer}.typeahead__active{background:#41b883;color:#fff}",""])},"2Q7A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,n.post)("/api/log",{action:e,description:t})};var n=a("uD8u")},"3/IS":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v("Send Caution")]),e._v(" "),a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:"."}},[e._v("view all cautions!")])],1)])])]),e._v(" "),a("div",{staticClass:"mt-5 row attendance-head mb-4"},e._l(e.sections,function(t){return a("div",{class:"col-"+t.col},[a("div",{staticClass:"row"},[a("div",{staticClass:"light-heading"},[a("span",{staticClass:"d-none d-sm-inline"}),e._v(" "+e._s(t.name))])])])})),e._v(" "),a("div",{staticClass:"mt-1 attendance-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("div",{staticClass:"mb-3 p-5 row align-items-center shadow-sm rounded bg-white"},[a("h5",[e._v("Supplier Details")]),e._v(" "),a("div",{staticClass:"w-100"},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Employee Name")]),e._v(" "),a("typeahead",{attrs:{options:e.users,caption:"full_name"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}})],1),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Issued by")]),e._v(" "),a("typeahead",{attrs:{options:e.users,caption:"full_name"},model:{value:e.form.issuer_id,callback:function(t){e.$set(e.form,"issuer_id",t)},expression:"form.issuer_id"}})],1)]),e._v(" "),a("div",{staticClass:"w-100"},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Reason")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.reason,expression:"form.reason"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"reason",placeholder:"reason for caution",rows:"1"},domProps:{value:e.form.reason},on:{input:function(t){t.target.composing||e.$set(e.form,"reason",t.target.value)}}}),e._v(" "),e.errors.first("reason")?a("small",[e._v(e._s(e.errors.first("reason")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Penalty")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.penalty,expression:"form.penalty"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"penalty"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"penalty",t.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:""}},[e._v("-- select penalty --")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("penalties")])]),e._v(" "),e.errors.first("penalty")?a("small",[e._v(e._s(e.errors.first("penalty")))]):e._e()])]),e._v(" "),a("div",{staticClass:"w-100"},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date,expression:"form.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date",name:"date",type:"date"},domProps:{value:e.form.date},on:{input:function(t){t.target.composing||e.$set(e.form,"date",t.target.value)}}}),e._v(" "),e.errors.first("date")?a("small",[e._v(e._s(e.errors.first("date")))]):e._e()])])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),e._v(" "),a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                create Attendance "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])},staticRenderFns:[]}},"32hk":function(e,t,a){var n=a("0GzS");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("20165ead",n,!0,{})},GqYo:function(e,t,a){var n=a("VU/8")(a("MmHb"),a("wtFL"),!1,function(e){a("32hk")},null,null);e.exports=n.exports},La9N:function(e,t,a){var n=a("VU/8")(a("WvS4"),a("3/IS"),!1,null,null,null);e.exports=n.exports},MmHb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{options:{type:Array,default:function(){return[]}},caption:{type:[String,Number],default:null},value:{type:[String,Number],default:null}},data:function(){return{open:!1,selectIndex:0,displayText:"",search:""}},computed:{typeaheadState:function(){return this.open?"typeahead typeahead__open":"typeahead"},filteredOptions:function(){var e=this,t=new RegExp(this.search,"i");return this.options.filter(function(a){return t.test(a.id)||t.test(a[e.caption])})}},methods:{onDownKey:function(){this.filteredOptions.length-1>this.selectIndex&&this.selectIndex++},onUpKey:function(){this.selectIndex>0&&this.selectIndex--},onEnterKey:function(){var e=this.filteredOptions[this.selectIndex];e&&this.select(e)},select:function(e){this.displayText=e[this.caption],this.$emit("input",e.id),this.$refs.search.blur()},toggle:function(e){e.target!==this.$refs.toggle&&e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]||(this.open?e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]&&this.$refs.search.blur():this.$refs.search.focus())},onFocus:function(){this.open=!0},onBlur:function(){this.search="",this.open=!1},onEscape:function(){this.$refs.search.blur()}}}},WvS4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("I3G/")),s=a("uD8u"),r=a("2Q7A"),o=l(a("TOoT")),i=l(a("GqYo"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Typeahead:i.default},data:function(){return{users:null,options:[{id:1,text:"Apple"},{id:2,text:"Mango"},{id:3,text:"Guava"}],columns:{},show:!1,form:{},error:{},sections:[{name:"Employee",col:4},{name:"Issued by",col:3},{name:"Reason",col:2},{name:"Penalty",col:2},{name:"Date",col:1}]}},beforeRouteEnter:function(e,t,a){(0,s.get)("/api/caution/create").then(function(e){a(function(t){return t.prepareForm(e.data)})}).catch(function(e){a(function(t){return t.handleErr(e)})})},beforeRouteUpdate:function(e,t,a){var n=this;this.show=!1,this.$LIPS(!0),(0,s.get)("/api/caution/create").then(function(e){n.prepareForm(e.data),a()}).catch(function(e){n.handleErr(e),a()})},methods:{onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.error={},(0,s.post)("/api/caution",{form:e.form}).then(function(t){t.data.saved&&((0,r.log)("Caution To By",""+e.form.user_id),e.prepareForm(t.data),o.default.setSuccess("Caution sent!",3e3))}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){return e.$LIPS(!1)})):e.$networkErr():e.$networkErr("form")})},prepareForm:function(e){n.default.set(this.$data,"form",e.form),n.default.set(this.$data,"users",e.users),this.show=!0,this.$LIPS(!1)},handleErr:function(e){o.default.setError("Error Fetching Attendance")}}}},wtFL:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.typeaheadState},[a("div",{ref:"toggle",staticClass:"typeahead__toggle",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"typeahead__search",attrs:{type:"text"},domProps:{value:e.search},on:{blur:e.onBlur,focus:e.onFocus,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onDownKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.onEscape(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onUpKey(t):null}],input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("span",{ref:"text",staticClass:"typeahead__text"},[e._v("\n         "+e._s(e.displayText)+"\n      ")])]),e._v(" "),e.open?a("ul",{staticClass:"typeahead__list"},e._l(e.filteredOptions,function(t,n){return a("li",{key:n,staticClass:"typeahead__item"},[a("a",{staticClass:"typeahead__link",class:[e.selectIndex===n?"typeahead__active":""],on:{mousedown:function(a){a.preventDefault(),e.select(t)}}},[e._v("\n            "+e._s(t[e.caption])+"\n         ")])])})):e._e()])},staticRenderFns:[]}}});