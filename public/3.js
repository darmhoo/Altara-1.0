webpackJsonp([3],{"56XS":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".check-box-overlay[data-v-76c79a47]{height:100%;width:100%;float:left;position:absolute;z-index:1}.table-separator[data-v-76c79a47]{border-top:2px solid #dee1e4}",""])},WkZv:function(t,e,a){var r=a("VU/8")(a("hX/b"),a("j/cd"),!1,function(t){a("hBRt")},"data-v-76c79a47",null);t.exports=r.exports},hBRt:function(t,e,a){var r=a("56XS");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("ee41e460",r,!0,{})},"hX/b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(a("I3G/")),s=l(a("K23+")),n=a("p/p5"),i=a("m2tk");function l(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={data:function(){return{list:1,orders:{},show:!1,banks:null,reminder:null,currentOrder:{},doSelectAll:!1,payment_methods:null,showModalContent:!1,isCurrentOrderInformal:null,currentOrderRepaymentDates:null}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1;var a=[t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a),s=r.count,n=r.repaymentData;return(!!e.$store.getters.auth("DVALead")||a.customer.branch.id===t.branch)&&function(){if(1===e.list)return!0;for(var t=void 0,r=new Date,i=1===r.getDay()?3:1,l=void 0,o=[],d=1;d<s;d++){var c=e.getColumn(d);if(!n[c+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:7===s?28:14,count:s-1})[d-1];break}}2===e.list&&(l=7),3===e.list&&(l=3);for(var u=0;u<i;u++)o.push(e.getDateString(r.addDays(u+l)));return o.includes(t)}()}),t.payment_methods,t.banks,t.dva_id];this.orders=a[0],this.payment_methods=a[1],this.banks=a[2],this.dva_id=a[3],this.initializeReminders()&&(this.show=!0)},initializeReminders:function(){var t=this;return this.reminder=[],this.orders.forEach(function(e){t.reminder.push({selected:!1,customer_id:e.customer.id,contacts:e.customer.telephone,order_id:e.id,sms_id:null,repayment_level:t.getRepaymentLevel(e),dva_id:t.dva_id,type:"sms",date:t.getDateString(),canBeSelected:t.isReminderSent(e)})}),this.$LIPS(!1),!0},displayErrorMessage:function(t){this.$scrollToTop(),s.default.setError(t,5e4),this.$LIPS(!1)},toggleSelect:function(t){this.reminder.length>0&&(this.reminder[t].canBeSelected?this.reminder[t].selected=!this.reminder[t].selected:alert("sorry a reminder has already been sent to user!"))},checkIfAlreadySentReminder:function(t){if(this.reminder.length>0)return this.reminder[t].canBeSelected},selectAll:function(){var t=this;this.reminder.length>0&&(this.doSelectAll=!this.doSelectAll,this.reminder.forEach(function(e){return e.canBeSelected&&(e.selected=t.doSelectAll)}))},isOrderFormal:function(t){return null===t.repayment_informal},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),l=this.getDateString(i);s.push(l)}return s},getDateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.getFullYear()+"-"+(t.getMonth()+(e&&1))+"-"+t.getDate()},isReminderSent:function(t){for(var e=this,a=new Date,r=1===a.getDay()?3:1,s=[],n=0;n<r;n++)s.push(this.getDateString(a.addDays(-n)));var i,l=!0;return t&&t.reminders.length>0&&t.reminders.forEach(function(t){var a=t.date.split(" "),r=a[0].split("-"),n=a[1].split(":"),d=[].concat(o(r),o(n)).map(function(t){return parseInt(t,10)});i=e.getDateString(new Date(Date.UTC.apply(Date,o(d))),!1),s.includes(i)&&(l=!1)}),l},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):"call feedback: "+t.feedback},generateCustomMessage:function(t){var e=this,a=t.customer,r=t.store_product,s=t.order_date,n=t.product_price,i=t.repayment_amount,l=r.product_name,o=a.first_name,d=a.last_name,c=void 0,u=this.isOrderFormal(t),m={};u&&(m={startDate:s,interval:28,count:6}),u||(m={startDate:s,interval:14,count:12});var v=this.generateDates(m),_=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+o+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+l+":%0a",v.length>0&&v.forEach(function(t,a){return c+=e.getColumn(a+1)+": "+t+" => "+e.$formatCurrency(i)+"%0a"})):c="Hello "+o+" "+d+", This is to remind you that your "+this.getColumn(parseInt(_)+1)+" repayment of "+this.$formatCurrency(n)+" for "+l+" will be due on "+v[_]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},processSelected:function(){var t=this;this.$LIPS(!0);var e=this.reminder.filter(function(t){return!!t.selected}).map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});e.length?this.sendSMSReminders(e):this.displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new i.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,n.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.displayErrorMessage("Error Logging sent sms details!")}):this.displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.isSent,delete t.message,delete t.order,delete t.contacts,delete t.selected,delete t.canBeSelected}),e.length>0?(0,n.post)("/api/reminder",{reminders:r}).then(function(t){var e=t.data;a.initializeReminders()&&a.$scrollToTop(),e.saved?(s.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.displayErrorMessage("Error sending reminders!")}):this.displayErrorMessage("Error logging sent messages!")},fetchList:function(t){var e,a=this;this.$LIPS(!0),this.list=t,(0,n.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(t){var e=t.data;a.prepareForm(e)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isOrderRepaymentValid:function(t){return!(!t.repayment&&!t.repayment_formal&&!t.repayment_informal)},getColumn:function(t){var e=null;switch(t){case 1:e=t+"st";break;case 2:e=t+"nd";break;case 3:e=t+"rd";break;default:e=t+"th"}return e},displayDetails:function(t,e){return r.default.set(this.$data,"currentOrder",t),this.isCurrentOrderInformal=!["formal","salaried"].includes(t.customer.employment_status.toLowerCase()),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e=0,a=null,r=t.repayment_formal,s=t.repayment_informal;return null!=t.repayment_formal&&(e=7,a=r),null!=t.repayment_informal&&(e=13,a=s),{count:e,repaymentData:a}},getPaymentSummary:function(t){for(var e,a=parseInt(t.down_payment),r=this.getCountAndRepaymentData(t),s=r.count,n=r.repaymentData,i=1;i<s;i++)a+=n[this.getColumn(i)+"_pay"];e=parseInt(t.product_price)-a;var l=t.discount.percentage_discount/100*t.product_price;return{amountPaid:a,outstandingDebt:e,discountAmount:l,discountedTotal:t.product_price-l}},getFinancialStatus:function(t){if(!this.isOrderRepaymentValid(t))return"no repayment detail";var e=this.getPaymentSummary(t);return"Paid: "+this.$formatCurrency(e.amountPaid)+" | Debt: "+this.$formatCurrency(e.outstandingDebt)},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isOrderRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t),s=r.count,n=r.repaymentData;if(null===e)return a=this.generateDates({startDate:t.order_date,interval:7===s?28:14,count:s-1}),this.currentOrderRepaymentDates=a,a;if("repayments"===e){for(var i=t.repayment_amount,l=1;l<s;l++)a.push(this.isCurrentOrderInformal?i:2*i);return a}for(var o=1;o<s;o++)a.push(n[this.getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isOrderRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t),r=a.count,s=a.repaymentData,n=this.getRepayment(t),i=1;i<r;i++){var l={class:null,icon:null},o=this.getColumn(i),d=this.isPaymentDue(n[i-1]),c=parseInt(s[o+"_pay"]);c?(l.class="paid",l.icon="fa-check"):d&&!c?(l.class="missed",l.icon="fa-times"):d||(l.class="pending",l.icon="fa-hourglass-start"),e.push(l)}return e},getRepaymentLevel:function(t){if(!this.isOrderRepaymentValid(t))return 0;for(var e=0,a=this.getCountAndRepaymentData(t),r=a.count,s=a.repaymentData,n=1;n<r;n++)s[this.getColumn(n)+"_pay"]>0&&e++;return e+"/"+(r-1)},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data["bank"===e?"banks":"payment_methods"].find(function(e){return e.id===t}).name:null}},mounted:function(){var t=this;this.fetchList(1),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1}),Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e}}}},"j/cd":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"reminder"}},[a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},[a("li",{staticClass:"col p-0 nav-item mb-0"},[a("a",{staticClass:"nav-link active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},on:{click:function(e){t.fetchList(1)}}},[t._v("1"),a("sup",[t._v("st")]),t._v(" Reminder")])]),t._v(" "),a("li",{staticClass:"col p-0 nav-item mb-0"},[a("a",{staticClass:"nav-link",attrs:{"aria-selected":"false","data-toggle":"tab",href:"#reminder-panel",role:"tab"},on:{click:function(e){t.fetchList(2)}}},[t._v("2"),a("sup",[t._v("nd")]),t._v(" Reminder")])]),t._v(" "),a("li",{staticClass:"col p-0 nav-item mb-0"},[a("a",{staticClass:"nav-link",attrs:{"aria-selected":"false","data-toggle":"tab",href:"#reminder-panel",role:"tab"},on:{click:function(e){t.fetchList(3)}}},[t._v("3"),a("sup",[t._v("rd")]),t._v(" Reminder")])])])]),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col p-0 text-link",staticStyle:{"max-width":"120px"},on:{click:t.selectAll}},[t._v("\n                Click to "+t._s(t.doSelectAll?"De-select":"Select")+" all\n            ")]),t._v(" "),a("div",{staticClass:"col light-heading"},[t._v("Order Number")]),t._v(" "),a("div",{staticClass:"col light-heading"},[t._v("Order Summary")]),t._v(" "),a("div",{staticClass:"col light-heading"},[t._v("Customer Info Summary")]),t._v(" "),a("div",{staticClass:"col light-heading"},[t._v("Repayment Summary")]),t._v(" "),a("div",{staticClass:"col light-heading"},[t._v("Reminder History")])])]),t._v(" "),t.show&&t.orders.length?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return t.orders.length?a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},[t.checkIfAlreadySentReminder(r)?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reminder[r].selected,expression:"reminder[index].selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.reminder[r].selected)?t._i(t.reminder[r].selected,null)>-1:t.reminder[r].selected},on:{click:function(e){t.toggleSelect(r)},change:function(e){var a=t.reminder[r].selected,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&t.$set(t.reminder[r],"selected",a.concat([null])):i>-1&&t.$set(t.reminder[r],"selected",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.reminder[r],"selected",n)}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(r+1))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center",attrs:{"data-reminder-1":"1"}},[t._v(t._s(e.id)+"\n                ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(a){t.displayDetails(e,"purchase_order")}}},[t._v("\n                    "+t._s(e.order_date)+"\n                ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(a){t.displayDetails(e,"customer_info")}}},[t._v("\n                    ID: "+t._s(e.customer.id)+" - "+t._s(t._f("capitalize")(e.customer.employment_status))+"\n                ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(a){t.displayDetails(e,"repayment")}}},[t._v("\n                    "+t._s(t.getFinancialStatus(e))+"\n                ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(a){t.displayDetails(e,"reminder_history")}}},[t._v("\n                    "+t._s(e.reminders.length)+" reminder(s) sent\n                ")])]):t._e()}))]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.orders.length?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status)))]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t.isCurrentOrderInformal?a("td",[t._v("7"),a("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?a("td",[t._v("8"),a("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?a("td",[t._v("9"),a("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?a("td",[t._v("10"),a("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?a("td",[t._v("11"),a("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?a("td",[t._v("12"),a("sup",[t._v("th")])]):t._e()]),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v(t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v(t._s(t.$formatCurrency(e)))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"bank"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).amountPaid)))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).discountAmount)))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).discountedTotal)))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.getPaymentSummary(t.currentOrder).outstandingDebt)))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])])])])])]),t._v(" "),t._m(12)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(13),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(14),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(e.date))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(15)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("1"),e("sup",[this._v("st")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("2"),e("sup",[this._v("nd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("3"),e("sup",[this._v("rd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("4"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("5"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("6"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,o=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(f(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function h(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=o++;r=l||(l=h()),e=y.bind(null,r,s,!1),a=y.bind(null,r,s,!0)}else r=h(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var l=i[r];(o=n[l.id]).refs--,a.push(o)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var o;if(0===(o=a[r]).refs){for(var d=0;d<o.parts.length;d++)o.parts[d]();delete n[o.id]}}}};var p,g=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function y(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],l={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(l):a.push(r[i]={id:i,parts:[l]})}return a}}});