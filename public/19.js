webpackJsonp([19],{LBtU:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".check-box-overlay[data-v-ccba4414]{height:100%;width:100%;float:left;position:absolute;z-index:1}.table-separator[data-v-ccba4414]{border-top:2px solid #dee1e4}",""])},WkZv:function(t,e,s){var a=s("VU/8")(s("hX/b"),s("XKpA"),!1,function(t){s("vnxl")},"data-v-ccba4414",null);t.exports=a.exports},XKpA:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"reminder"}},[s("div",{staticClass:"mt-5 mb-3 attendance-head"},[s("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},[s("li",{staticClass:"col p-0 nav-item mb-0"},[s("a",{staticClass:"nav-link active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},on:{click:function(e){t.fetchList(1)}}},[t._v("1"),s("sup",[t._v("st")]),t._v(" Reminder")])]),t._v(" "),s("li",{staticClass:"col p-0 nav-item mb-0"},[s("a",{staticClass:"nav-link",attrs:{"aria-selected":"false","data-toggle":"tab",href:"#reminder-panel",role:"tab"},on:{click:function(e){t.fetchList(2)}}},[t._v("2"),s("sup",[t._v("nd")]),t._v(" Reminder")])]),t._v(" "),s("li",{staticClass:"col p-0 nav-item mb-0"},[s("a",{staticClass:"nav-link",attrs:{"aria-selected":"false","data-toggle":"tab",href:"#reminder-panel",role:"tab"},on:{click:function(e){t.fetchList(3)}}},[t._v("3"),s("sup",[t._v("rd")]),t._v(" Reminder")])])])]),t._v(" "),s("div",{staticClass:"mt-5 mb-3 attendance-head"},[s("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[s("div",{staticClass:"col p-0 text-link",staticStyle:{"max-width":"120px"},on:{click:t.selectAll}},[t._v("\n                Click to "+t._s(t.doSelectAll?"De-select":"Select")+" all\n            ")]),t._v(" "),s("div",{staticClass:"col light-heading"},[t._v("Order Number")]),t._v(" "),s("div",{staticClass:"col light-heading"},[t._v("Order Summary")]),t._v(" "),s("div",{staticClass:"col light-heading"},[t._v("Customer Info Summary")]),t._v(" "),s("div",{staticClass:"col light-heading"},[t._v("Repayment Summary")]),t._v(" "),s("div",{staticClass:"col light-heading"},[t._v("Reminder History")])])]),t._v(" "),t.show&&t.orders.length?s("div",{staticClass:"tab-content mt-1 attendance-body"},[s("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return t.orders.length?s("div",{staticClass:"mb-3 row attendance-item"},[s("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},[t.checkIfAlreadySentReminder(a)?s("div",{staticClass:"d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.reminder[a].selected,expression:"reminder[index].selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.reminder[a].selected)?t._i(t.reminder[a].selected,null)>-1:t.reminder[a].selected},on:{click:function(e){t.toggleSelect(a)},change:function(e){var s=t.reminder[a].selected,r=e.target,n=!!r.checked;if(Array.isArray(s)){var i=t._i(s,null);r.checked?i<0&&t.$set(t.reminder[a],"selected",s.concat([null])):i>-1&&t.$set(t.reminder[a],"selected",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.reminder[a],"selected",n)}}})]):s("span",{staticClass:"user mx-auto sent-reminder"},[s("i",{staticClass:"fas fa-check"})]),t._v(" "),s("span",{staticClass:"user mx-auto"},[t._v(t._s(a+1))])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center",attrs:{"data-reminder-1":"1"}},[t._v(t._s(e.id)+"\n                ")]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(s){t.displayDetails(e,"purchase_order")}}},[t._v("\n                    "+t._s(e.order_date)+"\n                ")]),t._v(" "),s("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(s){t.displayDetails(e,"customer_info")}}},[t._v("\n                    ID: "+t._s(e.customer.id)+" - "+t._s(t._f("capitalize")(e.customer.employment_status))+"\n                ")]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(s){t.displayDetails(e,"repayment")}}},[t._v("\n                    "+t._s(t.getFinancialStatus(e))+"\n                ")]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(s){t.displayDetails(e,"reminder_history")}}},[t._v("\n                    "+t._s(e.reminders.length)+" reminder(s) sent\n                ")])]):t._e()}))]):s("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.orders.length?s("div",{staticClass:"mt-1 attendance-body"},[s("div",{staticClass:"mb-5 px-0 row align-items-center"},[s("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),s("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[s("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),s("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?s("div",{staticClass:"modal-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-striped"},[s("tbody",[s("tr",[s("th",[t._v("Order ID")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),s("tr",[s("th",[t._v("Order date")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),s("tr",[s("th",[t._v("Product")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),s("tr",[s("th",[t._v("Repayment")]),t._v(" "),s("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),s("tr",[s("th",[t._v("Down Payment")]),t._v(" "),s("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),s("tr",[s("th",[t._v("Discount (%)")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),s("tr",[s("th",[t._v("Sale Type")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),s("tr",[s("th",[t._v("Total amount to Pay")]),t._v(" "),s("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),s("tr",[s("th",[t._v("Processed by")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?s("div",{staticClass:"modal-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-striped"},[s("tbody",[s("tr",[s("th",[t._v("Customer ID")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),s("tr",[s("th",[t._v("Full Name")]),t._v(" "),s("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),s("tr",[s("th",[t._v("Address")]),t._v(" "),s("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),s("tr",[s("th",[t._v("Phone")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),s("tr",[s("th",[t._v("Branch")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),s("tr",[s("th",[t._v("Category")]),t._v(" "),s("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),s("tr",[s("th",[t._v("Verified by")]),t._v(" "),s("td",[s("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),s("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header py-2"},[s("h6",{staticClass:"modal-title py-1"},[t._v("Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status)))]),t._v(" "),t._m(5)]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"table-responsive"},[s("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("tbody",{staticClass:"text-center"},[s("tr",[s("th",[t._v("Repayment")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t.isCurrentOrderInformal?s("td",[t._v("7"),s("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?s("td",[t._v("8"),s("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?s("td",[t._v("9"),s("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?s("td",[t._v("10"),s("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?s("td",[t._v("11"),s("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?s("td",[t._v("12"),s("sup",[t._v("th")])]):t._e()]),t._v(" "),s("tr",{staticClass:"table-separator"},[s("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return s("td",[t._v(t._s(e))])})],2),t._v(" "),s("tr",[s("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return s("td",[t._v(t._s(e))])})],2),t._v(" "),s("tr",{staticClass:"table-separator"},[s("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return s("td",{class:t.class},[s("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),s("tr",{staticClass:"table-separator"},[s("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return s("td",[t._v(t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),s("tr",[s("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return s("td",[t._v(t._s(t.$formatCurrency(e)))])})],2),t._v(" "),s("tr",{staticClass:"table-separator"},[s("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return s("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment"))+"\n                                ")])})],2),t._v(" "),s("tr",[s("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return s("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"bank"))+"\n                                ")])})],2)])]),t._v(" "),s("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("tbody",{staticClass:"text-center"},[s("tr",{staticClass:"table-separator"},[s("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),s("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),s("td",[t._v("Total Before Discount")]),t._v(" "),s("th",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))]),t._v(" "),s("td",[t._v("Total Paid")]),t._v(" "),s("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).amountPaid)))])]),t._v(" "),s("tr",[s("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),s("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).discountAmount)))]),t._v(" "),s("td",[t._v("Total After Discount")]),t._v(" "),s("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).discountedTotal)))]),t._v(" "),s("td",[t._v("Total Debt")]),t._v(" "),s("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).outstandingDebt)))])]),t._v(" "),s("tr",[s("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),s("th",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])])])])])]),t._v(" "),t._m(12)]):t._e()])]),t._v(" "),s("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(13),t._v(" "),t.showModalContent?s("div",{staticClass:"modal-body"},[s("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?s("table",{staticClass:"table table-bordered table-striped"},[t._m(14),t._v(" "),s("tbody",t._l(t.currentOrder.reminders,function(e,a){return s("tr",[s("th",[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.date))]),t._v(" "),s("td",[t._v(t._s(e.type))]),t._v(" "),s("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),s("td",[t._v(t._s(e.user.full_name))])])}))]):s("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(15)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("1"),e("sup",[this._v("st")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("2"),e("sup",[this._v("nd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("3"),e("sup",[this._v("rd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("4"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("5"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("6"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("S/N")]),t._v(" "),s("th",[t._v("Date")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("SMS/Feedback")]),t._v(" "),s("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},"hX/b":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(s("I3G/")),r=l(s("K23+")),n=s("p/p5"),i=s("m2tk"),o=l(i);function l(t){return t&&t.__esModule?t:{default:t}}function c(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return Array.from(t)}var d=function(t){return"/api/reminder/create?list="+t.query.list};e.default={beforeRouteEnter:function(t,e,s){(0,n.get)(d({query:{list:1}})).then(function(t){var e=t.data;s(function(t){return t.prepareForm(e)})})},beforeRouteUpdate:function(t,e,s){var a=this;this.show=!1,this.showModalContent=!1,(0,n.get)(d({query:{list:1}})).then(function(t){var e=t.data;a.prepareForm(e),s()})},data:function(){return{list:1,orders:{},show:!1,banks:null,reminder:null,currentOrder:{},doSelectAll:!1,payment_methods:null,showModalContent:!1,isCurrentOrderInformal:null,currentOrderRepaymentDates:null}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1;var s=[t.orders.filter(function(s){var a=e.getCountAndRepaymentData(s),r=a.count,n=a.repaymentData;return(!!e.$store.getters.auth("DVALead")||s.customer.branch.id===t.branch)&&function(){if(1===e.list)return!0;for(var t=void 0,a=new Date,i=1===a.getDay()?3:1,o=void 0,l=[],c=1;c<r;c++){var d=e.getColumn(c);if(!n[d+"_pay"]){t=e.generateDates({startDate:s.order_date,interval:7===r?28:14,count:r-1})[c-1];break}}2===e.list&&(o=7),3===e.list&&(o=3);for(var u=0;u<i;u++)l.push(e.getDateString(a.addDays(u+o)));return l.includes(t)}()}),t.payment_methods,t.banks,t.dva_id];this.orders=s[0],this.payment_methods=s[1],this.banks=s[2],this.dva_id=s[3],this.initializeReminders()&&(this.show=!0)},initializeReminders:function(){var t=this;return this.reminder=[],this.orders.forEach(function(e){t.reminder.push({selected:!1,customer_id:e.customer.id,contacts:e.customer.telephone,order_id:e.id,sms_id:null,repayment_level:t.getRepaymentLevel(e),feedback:null,dva_id:t.dva_id,type:"sms",date:t.getDateString(),canBeSelected:t.isReminderSent(e)})}),this.$LIPS(!1),!0},displayErrorMessage:function(t){this.$scrollToTop(),r.default.setError(t,5e4),this.$LIPS(!1)},toggleSelect:function(t){this.reminder.length>0&&(this.reminder[t].canBeSelected?this.reminder[t].selected=!this.reminder[t].selected:alert("sorry a reminder has already been sent to user!"))},checkIfAlreadySentReminder:function(t){if(this.reminder.length>0)return this.reminder[t].canBeSelected},selectAll:function(){var t=this;this.reminder.length>0&&(this.doSelectAll=!this.doSelectAll,this.reminder.forEach(function(e){return e.canBeSelected&&(e.selected=t.doSelectAll)}))},isOrderFormal:function(t){return null===t.repayment_informal},generateDates:function(t){for(var e=t.startDate,s=t.interval,a=t.count,r=[],n=0;n<a;n++){var i=new Date(e).addDays((n+1)*s),o=this.getDateString(i);r.push(o)}return r},getDateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.getFullYear()+"-"+(t.getMonth()+(e&&1))+"-"+t.getDate()},isReminderSent:function(t){for(var e=this,s=new Date,a=1===s.getDay()?3:1,r=[],n=0;n<a;n++)r.push(this.getDateString(s.addDays(-n)));var i,o=!0;return t&&t.reminders.length>0&&t.reminders.forEach(function(t){var s=t.date.split(" "),a=s[0].split("-"),n=s[1].split(":"),l=[].concat(c(a),c(n)).map(function(t){return parseInt(t,10)});i=e.getDateString(new Date(Date.UTC.apply(Date,c(l))),!1),r.includes(i)&&(o=!1)}),o},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):"call feedback: "+t.feedback},generateCustomMessage:function(t){var e=this,s=t.customer,a=t.store_product,r=t.order_date,n=t.product_price,i=t.repayment_amount,o=a.product_name,l=s.first_name,c=s.last_name,d=void 0,u=this.isOrderFormal(t),m={};u&&(m={startDate:r,interval:28,count:6}),u||(m={startDate:r,interval:14,count:12});var _=this.generateDates(m),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(d="Hello "+l+" "+c+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",_.length>0&&_.forEach(function(t,s){return d+=e.getColumn(s+1)+": "+t+" => "+e.$formatCurrency(i)+"%0a"})):d="Hello "+l+" "+c+", This is to remind you that your "+this.getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(n)+" for "+o+" will be due on "+_[v]+". we will be expecting you.",d+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},processSelected:function(){var t=this;this.$LIPS(!0);var e=this.reminder.filter(function(t){return!!t.selected}).map(function(e){var s=JSON.parse(JSON.stringify(e));return s.contacts="234"+e.contacts.trim().substr(1),s.order=t.orders.find(function(t){return t.id===e.order_id}),s.message=t.generateCustomMessage(s.order),s.isSent=!1,s});e.length?this.sendSMSReminders(e):this.displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this;t.forEach(function(s,a){o.default.sendMessage(s,function(r){s.isSent=200===r.status,a+1===t.length&&e.logSentMessages(t)})})},logSentMessages:function(t){var e=this,s=[];t.forEach(function(a,r){a.isSent&&s.push(new i.Message(a.dva_id,a.message,a.contacts)),r+1===t.length&&(s.length>0?(0,n.post)("/api/message",{messages:s,bulk:!0}).then(function(s){var a=s.data,r=a.sentAndLogged,n=a.ids;r?e.logSentReminders(t,n):e.displayErrorMessage("Error Logging sent sms details!")}):e.displayErrorMessage("Error sending messages!"))})},logSentReminders:function(t,e){var s=this;e.reverse();var a=JSON.parse(JSON.stringify(t));a.forEach(function(t,s){t.sms_id=e[s],delete t.isSent,delete t.message,delete t.order,delete t.contacts,delete t.selected,delete t.canBeSelected}),e.length>0?(0,n.post)("/api/reminder",{reminders:a}).then(function(t){var e=t.data;s.initializeReminders()&&s.$scrollToTop(),e.saved?(r.default.setSuccess("Reminders have been sent successfully!",5e4),s.fetchList(s.list)):s.displayErrorMessage("Error sending reminders!")}):this.displayErrorMessage("Error logging sent messages!")},fetchList:function(t){var e=this;this.$LIPS(!0),this.list=t,(0,n.get)(d({query:{list:t}})).then(function(t){var s=t.data;e.prepareForm(s)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isOrderRepaymentValid:function(t){return!(!t.repayment&&!t.repayment_formal&&!t.repayment_informal)},getColumn:function(t){var e=null;switch(t){case 1:e=t+"st";break;case 2:e=t+"nd";break;case 3:e=t+"rd";break;default:e=t+"th"}return e},displayDetails:function(t,e){return a.default.set(this.$data,"currentOrder",t),this.isCurrentOrderInformal=!["formal","salaried"].includes(t.customer.employment_status.toLowerCase()),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e=0,s=null,a=t.repayment_formal,r=t.repayment_informal;return null!=t.repayment_formal&&(e=7,s=a),null!=t.repayment_informal&&(e=13,s=r),{count:e,repaymentData:s}},getPaymentSummary:function(t){for(var e,s=parseInt(t.down_payment),a=this.getCountAndRepaymentData(t),r=a.count,n=a.repaymentData,i=1;i<r;i++)s+=n[this.getColumn(i)+"_pay"];e=parseInt(t.product_price)-s;var o=t.discount.percentage_discount/100*t.product_price;return{amountPaid:s,outstandingDebt:e,discountAmount:o,discountedTotal:t.product_price-o}},getFinancialStatus:function(t){if(!this.isOrderRepaymentValid(t))return"no repayment detail";var e=this.getPaymentSummary(t);return"Paid: "+this.$formatCurrency(e.amountPaid)+" | Debt: "+this.$formatCurrency(e.outstandingDebt)},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isOrderRepaymentValid(t))return null;var s=[],a=this.getCountAndRepaymentData(t),r=a.count,n=a.repaymentData;if(null===e)return s=this.generateDates({startDate:t.order_date,interval:7===r?28:14,count:r-1}),this.currentOrderRepaymentDates=s,s;if("repayments"===e){for(var i=t.repayment_amount,o=1;o<r;o++)s.push(this.isCurrentOrderInformal?i:2*i);return s}for(var l=1;l<r;l++)s.push(n[this.getColumn(l)+e]);return s},getPaymentStatusClasses:function(t){if(!this.isOrderRepaymentValid(t))return null;for(var e=[],s=this.getCountAndRepaymentData(t),a=s.count,r=s.repaymentData,n=this.getRepayment(t),i=1;i<a;i++){var o={class:null,icon:null},l=this.getColumn(i),c=this.isPaymentDue(n[i-1]),d=parseInt(r[l+"_pay"]);d?(o.class="paid",o.icon="fa-check"):c&&!d?(o.class="missed",o.icon="fa-times"):c||(o.class="pending",o.icon="fa-hourglass-start"),e.push(o)}return e},getRepaymentLevel:function(t){if(!this.isOrderRepaymentValid(t))return 0;for(var e=0,s=this.getCountAndRepaymentData(t),a=s.count,r=s.repaymentData,n=1;n<a;n++)r[this.getColumn(n)+"_pay"]>0&&e++;return e+"/"+(a-1)},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data["bank"===e?"banks":"payment_methods"].find(function(e){return e.id===t}).name:null}},mounted:function(){var t=this;$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1}),Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e}}}},m2tk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}(),r=s("p/p5");e.Message=function(){function t(e,s,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=e,this.message=s,this.contacts=a.constructor===String?a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","):a,this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contacts.constructor===String&&(this.contact_count=this.contacts.split(",").length),this.contacts.constructor===Array&&(this.contact_count=this.contacts.length)}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}}]),t}();e.default={message:"",welcome:function(t){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+t.loginID+", password: "+t.loginPassword,this.send(t)},customerReg:function(t){this.message="Dear "+t.first_name+" "+t.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+t.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+t.branch.phone_yoruba+". Your customer id is: "+t.id,this.send({phone:t.telephone.substr(1)})},passwordReset:function(t){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+t.staff_id+", new password: "+t.password,this.send(t)},transfer:function(t){this.message="Transfer Successful, your new staff ID is "+t.loginID+" ",this.send(t)},sendWithCallback:function(t,e){var s=t.phone;(0,r.get)("/api/message/create?to="+s+"&message="+this.message).then(function(t){return 200===t.status&&console.log("sms sent successfully"),!!e&&e(t)}).catch(function(t){return!!e&&e(t)})},sendMessage:function(t,e){var s=t.contacts,a=t.message;(0,r.get)("/api/message/create?to="+s+"&message="+a).then(function(t){return 200===t.status&&console.log("sms sent successfully"),!!e&&e(t)}).catch(function(t){return!!e&&e(t)})},send:function(t){(0,r.get)("/api/message/create?to=234"+t.phone+"&message="+this.message).then(function(t){200===t.status&&console.log("sms sent successfully")})}}},vnxl:function(t,e,s){var a=s("LBtU");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("d112bba8",a,!0,{})}});