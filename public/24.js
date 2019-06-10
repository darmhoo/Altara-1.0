webpackJsonp([24],{HsjE:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"reminder"}},[r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},t._l(t.tabs,function(e,a){return r("li",{staticClass:"col p-0 nav-item mb-0"},[r("a",{staticClass:"nav-link",class:0===a&&"active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s(e+" Call")},on:{click:function(e){t.fetchList(a+4)}}})])}))]),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},t._l(t.headings,function(e){return r("div",{staticClass:"col light-heading"},[t._v(t._s(e))])}))]),t._v(" "),t.show&&t.orders.length?r("div",{staticClass:"tab-content mt-1 attendance-body"},[r("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return t.orders.length?r("div",{staticClass:"mb-3 row attendance-item"},[r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},[t.checkIfAlreadySentReminder(a)?r("span",{staticClass:"user mx-auto waiting-reminder",on:{click:function(e){t.logReminder(a)}}},[r("i",{staticClass:"fas fa-hourglass-start"})]):r("span",{staticClass:"user mx-auto sent-reminder"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("span",{staticClass:"user mx-auto"},[t._v(t._s(a+1))])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center",attrs:{"data-reminder-1":"1"}},[t._v(t._s(e.id)+"\n                ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(r){t.displayDetails(e,"purchase_order")}}},[t._v("\n                    "+t._s(e.order_date)+"\n                ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(r){t.displayDetails(e,"customer_info")}}},[t._v("\n                    ID: "+t._s(e.customer.id)+" - "+t._s(t._f("capitalize")(e.customer.employment_status))+"\n                ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(r){t.displayDetails(e,"repayment")}}},[t._v("\n                    "+t._s(t.getFinancialStatus(e))+"\n                ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(r){t.displayDetails(e,"reminder_history")}}},[t._v("\n                    "+t._s(e.reminders.length)+" reminder(s) sent\n                ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder[a].feedback,expression:"reminder[index].feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder[a].canBeSelected},domProps:{value:t.reminder[a].feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder[a],"feedback",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCalls[a].date,expression:"promiseCalls[index].date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder[a].canBeSelected},domProps:{value:t.promiseCalls[a].date},on:{input:function(e){e.target.composing||t.$set(t.promiseCalls[a],"date",e.target.value)}}})])]):t._e()}))]):r("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),r("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Order ID")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),r("tr",[r("th",[t._v("Order date")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),r("tr",[r("th",[t._v("Product")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),r("tr",[r("th",[t._v("Repayment")]),t._v(" "),r("td",[t._v(t._s(t.$format(t.currentOrder.repayment_amount)))])]),t._v(" "),r("tr",[r("th",[t._v("Down Payment")]),t._v(" "),r("td",[t._v(t._s(t.$format(t.currentOrder.down_payment)))])]),t._v(" "),r("tr",[r("th",[t._v("Discount (%)")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),r("tr",[r("th",[t._v("Sale Type")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),r("tr",[r("th",[t._v("Total amount to Pay")]),t._v(" "),r("td",[t._v(t._s(t.$format(t.currentOrder.product_price)))])]),t._v(" "),r("tr",[r("th",[t._v("Processed by")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Customer ID")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),r("tr",[r("th",[t._v("Full Name")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Address")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),r("tr",[r("th",[t._v("Branch")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),t._m(4)])])])]):t._e(),t._v(" "),t._m(5)])])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[r("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header py-2"},[r("h6",{staticClass:"modal-title py-1"},[t._v("Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status)))]),t._v(" "),t._m(6)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",[r("th",[t._v("Repayment")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("7"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("8"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("9"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("10"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("11"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("12"),r("sup",[t._v("th")])]):t._e()]),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return r("td",{class:t.class},[r("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return r("td",[t._v("\n                                    "+t._s(t.$format(e))+"\n                                ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return r("td",[t._v(t._s(t.$format(e)))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment"))+"\n                                ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"bank"))+"\n                                ")])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Summary")]),t._v(" "),r("td",[t._v("Discount Detail (%)")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),r("td",[t._v("Total Before Discount")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t.$format(t.currentOrder.product_price))+"\n                                ")]),t._v(" "),r("td",[t._v("Total Paid")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t.$format(t.getPaymentSummary(t.currentOrder).amountPaid))+"\n                                ")])]),t._v(" "),r("tr",[r("th"),t._v(" "),r("td",[t._v("Discount Amount")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t.$format(t.getPaymentSummary(t.currentOrder).discountAmount))+"\n                                ")]),t._v(" "),r("td",[t._v("Total After Discount")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t.$format(t.getPaymentSummary(t.currentOrder).discountedTotal))+"\n                                ")]),t._v(" "),r("td",[t._v("Total Debt")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t.$format(t.getPaymentSummary(t.currentOrder).outstandingDebt))+"\n                                ")])]),t._v(" "),r("tr",[r("th"),t._v(" "),r("td",[t._v("Down Payment")]),t._v(" "),r("th",{attrs:{colspan:t.isCurrentOrderInformal?3:1}},[t._v("\n                                    "+t._s(t.$format(t.currentOrder.down_payment))+"\n                                ")])])])])])]),t._v(" "),t._m(13)]):t._e()])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(14),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?r("table",{staticClass:"table table-bordered table-striped"},[t._m(15),t._v(" "),r("tbody",t._l(t.currentOrder.reminders,function(e,a){return r("tr",[r("th",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(e.date))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),r("td",[t._v(t._s(e.user.full_name))])])}))]):r("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(16)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Verified by")]),this._v(" "),e("td",[this._v("--")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("1"),e("sup",[this._v("st")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("2"),e("sup",[this._v("nd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("3"),e("sup",[this._v("rd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("4"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("5"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("6"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("S/N")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Comment")]),t._v(" "),r("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},MPBp:function(t,e,r){var a=r("hO2D");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("78c79264",a,!0,{})},YEar:function(t,e,r){var a=r("VU/8")(r("vJO/"),r("HsjE"),!1,function(t){r("MPBp")},"data-v-54c0a926",null);t.exports=a.exports},hO2D:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".check-box-overlay[data-v-54c0a926]{height:100%;width:100%;float:left;position:absolute;z-index:1}.table-separator[data-v-54c0a926]{border-top:2px solid #dee1e4}.attendance-head .light-heading[data-v-54c0a926]:first-child{max-width:120px}",""])},"vJO/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(r("I3G/")),s=i(r("TOoT")),n=r("uD8u");function i(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var l=function(t){return"/api/reminder/create?list="+t.query.list};e.default={beforeRouteEnter:function(t,e,r){(0,n.get)(l({query:{list:4}})).then(function(t){var e=t.data;r(function(t){return t.prepareForm(e)})})},beforeRouteUpdate:function(t,e,r){var a=this;this.show=!1,this.showModalContent=!1,(0,n.get)(l({query:{list:4}})).then(function(t){var e=t.data;a.prepareForm(e),r()})},data:function(){return{list:4,orders:{},show:!1,banks:null,reminder:null,currentOrder:{},promiseCalls:null,payment_methods:null,showModalContent:!1,isCurrentOrderInformal:null,currentOrderRepaymentDates:null,tabs:["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>","Guarantor's","Promise"],headings:["Action","Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History","Feedback","Promise Date"]}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1;var r=[t.orders.filter(function(r){var a=e.getCountAndRepaymentData(r),s=a.count,n=a.repaymentData;return(!!e.$store.getters.auth("DVALead")||r.customer.branch.id===t.branch)&&function(){if(8===e.list)return!0;for(var t=void 0,a=new Date,i=1===a.getDay()?3:1,o=void 0,l=[],d=1;d<s;d++){var c=e.getColumn(d);if(!n[c+"_pay"]){t=e.generateDates({startDate:r.order_date,interval:7===s?28:14,count:s-1})[d-1];break}}switch(e.list){case 4:o=0;break;case 5:o=1;break;case 6:o=7;break;case 7:o=31}for(var u=0;u<i;u++)l.push(e.getDateString(a.addDays(-(u+o))));return l.includes(t)}()}),t.payment_methods,t.banks,t.dva_id];this.orders=r[0],this.payment_methods=r[1],this.banks=r[2],this.dva_id=r[3],this.initializeReminders()&&(this.show=!0)},initializeReminders:function(){var t=this;return this.reminder=[],this.promiseCalls=[],this.orders.forEach(function(e){t.reminder.push({customer_id:e.customer.id,order_id:e.id,repayment_level:t.getRepaymentLevel(e),dva_id:t.dva_id,type:"call",date:t.getDateString(),canBeSelected:t.isReminderSent(e)}),t.promiseCalls.push({order_id:e.id,user_id:t.dva_id,customer_id:e.customer.id,date:null})}),this.$LIPS(!1),!0},displayErrorMessage:function(t){this.$scrollToTop(),s.default.setError(t,5e4),this.$LIPS(!1)},checkIfAlreadySentReminder:function(t){if(this.reminder.length>0)return this.reminder[t].canBeSelected},isOrderFormal:function(t){return null===t.repayment_informal},generateDates:function(t){for(var e=t.startDate,r=t.interval,a=t.count,s=[],n=0;n<a;n++){var i=new Date(e).addDays((n+1)*r),o=this.getDateString(i);s.push(o)}return s},getDateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.getFullYear()+"-"+(t.getMonth()+(e&&1))+"-"+t.getDate()},isReminderSent:function(t){var e=this,r=!0;if(t&&t.reminders.length>0){var a=this.getDateString();t.reminders.forEach(function(t){var s=t.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),l=[].concat(o(n),o(i)).map(function(t){return parseInt(t,10)});e.getDateString(new Date(Date.UTC.apply(Date,o(l))),!1)===a&&(r=!1)})}return r},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):"call feedback: "+t.feedback},logReminder:function(t){var e=this,r=this.reminder[t];delete r.order,delete r.canBeSelected,(0,n.post)("/api/reminder",{reminders:[r]}).then(function(r){return r.data.saved?e.logPromiseCall(e.promiseCalls[t]):e.displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(t){var e=this;t.date?(console.log(t),(0,n.post)("/api/promise_call",t).then(function(t){return t.data.saved?e.done("Reminder Logged!, Promise call added!"):e.displayErrorMessage("Error Logging promise call!")})):this.done("Reminder Logged!")},done:function(t){this.initializeReminders()&&this.$scrollToTop(),s.default.setSuccess(t,5e3),this.fetchList(this.list)},fetchList:function(t){var e=this;this.$LIPS(!0),this.list=t,(0,n.get)(l({query:{list:t}})).then(function(r){var a=r.data;if(8===t){var s=[];a.orders.forEach(function(t){return s.push(t.order)}),a.orders=s}e.prepareForm(a)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isOrderRepaymentValid:function(t){return!(!t.repayment&&!t.repayment_formal&&!t.repayment_informal)},getColumn:function(t){var e=null;switch(t){case 1:e=t+"st";break;case 2:e=t+"nd";break;case 3:e=t+"rd";break;default:e=t+"th"}return e},displayDetails:function(t,e){return a.default.set(this.$data,"currentOrder",t),this.isCurrentOrderInformal=!["formal","salaried"].includes(t.customer.employment_status.toLowerCase()),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e=0,r=null,a=t.repayment_formal,s=t.repayment_informal;return null!=t.repayment_formal&&(e=7,r=a),null!=t.repayment_informal&&(e=13,r=s),{count:e,repaymentData:r}},getPaymentSummary:function(t){for(var e,r=parseInt(t.down_payment),a=this.getCountAndRepaymentData(t),s=a.count,n=a.repaymentData,i=1;i<s;i++)r+=n[this.getColumn(i)+"_pay"];e=parseInt(t.product_price)-r;var o=t.discount.percentage_discount/100*t.product_price;return{amountPaid:r,outstandingDebt:e,discountAmount:o,discountedTotal:t.product_price-o}},getFinancialStatus:function(t){if(!this.isOrderRepaymentValid(t))return"no repayment detail";var e=this.getPaymentSummary(t);return"Paid: "+this.$format(e.amountPaid)+" | Debt: "+this.$format(e.outstandingDebt)},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isOrderRepaymentValid(t))return null;var r=[],a=this.getCountAndRepaymentData(t),s=a.count,n=a.repaymentData;if(null===e)return r=this.generateDates({startDate:t.order_date,interval:7===s?28:14,count:s-1}),this.currentOrderRepaymentDates=r,r;if("repayments"===e){for(var i=t.repayment_amount,o=1;o<s;o++)r.push(this.isCurrentOrderInformal?i:2*i);return r}for(var l=1;l<s;l++)r.push(n[this.getColumn(l)+e]);return r},getPaymentStatusClasses:function(t){if(!this.isOrderRepaymentValid(t))return null;for(var e=[],r=this.getCountAndRepaymentData(t),a=r.count,s=r.repaymentData,n=1;n<a;n++){var i={class:null,icon:null},o=this.getColumn(n),l=this.isPaymentDue(s[o+"_date"]),d=parseInt(s[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isOrderRepaymentValid(t))return 0;for(var e=0,r=this.getCountAndRepaymentData(t),a=r.count,s=r.repaymentData,n=1;n<a;n++)s[this.getColumn(n)+"_pay"]>0&&e++;return e+"/"+(a-1)},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data["bank"===e?"banks":"payment_methods"].find(function(e){return e.id===t}).name:null}},mounted:function(){var t=this;$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1}),Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e}}}}});