webpackJsonp([15],{"2Q7A":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,a.post)("/api/log",{action:e,description:t})};var a=r("uD8u")},ACyo:function(e,t,r){var a=r("VU/8")(r("Q52E"),r("djyR"),!1,null,null,null);e.exports=a.exports},Q52E:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r("Xxa5")),n=l(r("I3G/")),o=r("2Q7A"),i=l(r("TOoT")),s=r("uD8u");function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function a(n,o){try{var i=t[n](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function u(e){return{create:"/api/branch/create",edit:"/api/branch/"+e.params.id+"/edit"}[e.meta.mode]}t.default={data:function(){return{form:{},banks:{},error:{},mode:null,show:!1,resource:"/branch",store:"/api/branch",method:"POST"}},beforeRouteEnter:function(e,t,r){(0,s.get)(u(e)).then(function(e){r(function(t){return t.prepareForm(e.data)})})},beforeRouteUpdate:function(e,t,r){var a=this;this.show=!1,(0,s.get)(u(e)).then(function(e){a.prepareForm(e.data),r()})},methods:{prepareForm:function(){var e=c(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$prepareStates();case 2:this.mode=this.$route.meta.mode,this.error={},this.errors.clear(),n.default.set(this.$data,"form",t.form),n.default.set(this.$data,"banks",t.banks),"edit"===this.$route.meta.mode&&(this.store="/api/branch/"+this.$route.params.id,this.method="PUT"),this.show=!0;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSave:function(){var e=c(a.default.mark(function e(){var t=this;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),t.error={},(0,s.byMethod)(t.method,t.store,t.form).then(function(e){(e.data.saved||e.data.updated)&&((0,o.log)("Branch "+t.mode+"d",""+t.form.employee_id),i.default.setSuccess("Branch "+t.mode+"d successfully!",2e4))}).catch(function(e){422===(e=e.response).status&&(t.error=e.data.errors?e.data.errors:e.data,t.$networkErr("unique"))}).finally(function(){return t.done()})):t.$networkErr():t.$networkErr("form")});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),done:function(){this.$router.push("/fsl/branch")}}}},SldL:function(e,t){!function(t){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=x;var m="suspendedStart",f="suspendedYield",v="executing",d="completed",p={},h={};h[i]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(j([])));g&&g!==a&&n.call(g,i)&&(h=g);var y=N.prototype=w.prototype=Object.create(h);C.prototype=y.constructor=N,N.constructor=C,N[l]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(y),e},u.awrap=function(e){return{__await:e}},E(L.prototype),L.prototype[s]=function(){return this},u.AsyncIterator=L,u.async=function(e,t,r,a){var n=new L(x(e,t,r,a));return u.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},E(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},u.values=j,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,n){return s.type="throw",s.arg=e,t.next=a,n&&(t.method="next",t.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),p}}}function x(e,t,r,a){var n=t&&t.prototype instanceof w?t:w,o=Object.create(n.prototype),i=new q(a||[]);return o._invoke=function(e,t,r){var a=m;return function(n,o){if(a===v)throw new Error("Generator is already running");if(a===d){if("throw"===n)throw o;return O()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var l=b(e,t,r);if("normal"===l.type){if(a=r.done?d:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=d,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function b(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function w(){}function C(){}function N(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(e){var t;this._invoke=function(r,a){function o(){return new Promise(function(t,o){!function t(r,a,o,i){var s=b(e[r],e,a);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(c).then(function(e){l.value=e,o(l)},i)}i(s.arg)}(r,a,t,o)})}return t=t?t.then(o,o):o()}}function k(e,t){var a=e.iterator[t.method];if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,k(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=b(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(e,t,r){e.exports=r("jyFz")},djyR:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeEdit"}},[r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[r("h6",[e._v(e._s(e._f("capitalize")(e.mode))+" Branch")])]),e._v(" "),r("div",{staticClass:"card-body pl-4 pr-4"},[e.show?r("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[r("h5",[e._v("Branch Details")]),e._v(" "),r("div",{staticClass:"clearfix"},[r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Branch Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.error.name},attrs:{"data-vv-as":"branch name",name:"branch_name",placeholder:"branch name",type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),e.errors.first("branch_name")?r("small",[e._v(e._s(e.errors.first("branch_name")))]):e._e(),e._v(" "),e.error.name?r("small",[e._v(e._s(e.error.name[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("State")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.state_id,expression:"form.state_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"state"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"state_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select state")]),e._v(" "),e._l(e.$store.getters.getStates,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("state")?r("small",[e._v(e._s(e.errors.first("state")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone (English)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_english,expression:"form.phone_english"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"phone english",name:"phone_english",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_english},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_english",t.target.value)}}}),e._v(" "),e.errors.first("phone_english")?r("small",[e._v(e._s(e.errors.first("phone_english")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone (Yoruba)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_yoruba,expression:"form.phone_yoruba"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"phone yoruba",name:"phone_yoruba",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_yoruba},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_yoruba",t.target.value)}}}),e._v(" "),e.errors.first("phone_yoruba")?r("small",[e._v(e._s(e.errors.first("phone_yoruba")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",{staticClass:"w-100 float-left pl-1"},[e._v("Status")]),e._v(" "),r("div",{staticClass:"radio pl-1 w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"active",name:"status",type:"radio",value:"active"},domProps:{checked:e._q(e.form.status,"active")},on:{change:function(t){e.$set(e.form,"status","active")}}}),e._v(" "),r("label",{attrs:{for:"active"}},[e._v("Active")])]),e._v(" "),r("div",{staticClass:"radio pl-1 w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],attrs:{id:"passive",name:"status",type:"radio",value:"passive"},domProps:{checked:e._q(e.form.status,"passive")},on:{change:function(t){e.$set(e.form,"status","passive")}}}),e._v(" "),r("label",{attrs:{for:"passive"}},[e._v("Passive")])]),e._v(" "),e.errors.first("status")?r("small",[e._v(e._s(e.errors.first("status")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Describe Location")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"description",placeholder:"address description",rows:"1"},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}}),e._v(" "),e.errors.first("description")?r("small",[e._v(e._s(e.errors.first("description")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("h5",[e._v("Account Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{name:"email",placeholder:"name@example.com",type:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.errors.first("email")?r("small",[e._v(e._s(e.errors.first("email")))]):e._e(),e._v(" "),e.error.email?r("small",[e._v(e._s(e.error.email[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Bank")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bank,expression:"form.bank"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"bank"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"bank",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select bank")]),e._v(" "),e._l(e.banks,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("bank")?r("small",[e._v(e._s(e.errors.first("bank")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Account Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_name,expression:"form.account_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"account name",name:"account_name",placeholder:"branch name",type:"text"},domProps:{value:e.form.account_name},on:{input:function(t){t.target.composing||e.$set(e.form,"account_name",t.target.value)}}}),e._v(" "),e.errors.first("account_name")?r("small",[e._v(e._s(e.errors.first("account_name")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Account Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_number,expression:"form.account_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:10|min:10",expression:"'required|numeric|max:10|min:10'"}],staticClass:"form-control",class:{"is-invalid":e.error.account_number},attrs:{"data-vv-as":"account number",name:"account_number",placeholder:"01xxxxxxxx",type:"tel"},domProps:{value:e.form.account_number},on:{input:function(t){t.target.composing||e.$set(e.form,"account_number",t.target.value)}}}),e._v(" "),e.errors.first("account_number")?r("small",[e._v(e._s(e.errors.first("account_number")))]):e._e(),e._v(" "),e.error.account_number?r("small",[e._v(e._s(e.error.account_number[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("hr",{staticClass:"style-two"})]),e._v(" "),r("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[r("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?r("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.done}},[e._v("Cancel")]):e._e(),e._v(" "),r("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Branch "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):e._e()])])])])},staticRenderFns:[]}},jyFz:function(e,t,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,o=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=r("SldL"),n)a.regeneratorRuntime=o;else try{delete a.regeneratorRuntime}catch(e){a.regeneratorRuntime=void 0}}});