webpackJsonp([25],{A7oB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=s("m2tk"),o=s("K23+"),r=(a=o)&&a.__esModule?a:{default:a};e.default={data:function(){return{contacts:"",message:"",form:{}}},methods:{sendMessage:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),new n.Message(t.message,t.contacts).send(function(e){return 200===e.status&&t.done()})):t.$networkErr():t.$networkErr("form")})},done:function(){this.$scrollToTop(),this.$LIPS(!1),r.default.setSuccess("Messages sent!"),this.resetData()},resetData:function(){for(var t in this.contacts="",this.message="",this.form)this.form[t]=null}},created:function(){this.resetData()}}},bZ5I:function(t,e,s){var a=s("VU/8")(s("A7oB"),s("gYso"),!1,null,null,null);t.exports=a.exports},gYso:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[s("div",{staticClass:"card"},[s("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[s("h6",[t._v("Messaging")])]),t._v(" "),s("div",{staticClass:"card-body p-4 "},[s("form",{staticClass:"clearfix",attrs:{id:"messaging"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[s("label",[t._v("Phone Numbers")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contacts,expression:"contacts"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-12",attrs:{name:"contacts",placeholder:"Kindly add the number and separate each with a semi-colon ';'",rows:"3"},domProps:{value:t.contacts},on:{input:function(e){e.target.composing||(t.contacts=e.target.value)}}}),t._v(" "),t.errors.first("contacts")?s("small",[t._v(t._s(t.errors.first("contacts")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[s("label",[t._v("Message Body")]),t._v(" "),s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control col-sm-12",attrs:{name:"message",placeholder:"the content of the message goes here",rows:"3"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),t.errors.first("message")?s("small",[t._v(t._s(t.errors.first("message")))]):t._e()]),t._v(" "),s("hr",{staticClass:"style-two"}),t._v(" "),s("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[s("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            Send messages "),s("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},m2tk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}(),n=s("p/p5");e.Message=function(){function t(e,s){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=s.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(s){return 200===s.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(s)}).catch(function(e){return!!t&&t(e)})}}]),t}()}});