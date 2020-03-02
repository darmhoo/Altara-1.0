webpackJsonp([40],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiLink = function apiLink(query) {
    return "/attendance?branch=" + query.branch + "&month=" + query.month + "&year=" + query.year;
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            columns: {},
            show: false,
            currAttendance: {},
            query: {
                month: '',
                branch: '',
                year: ''
            },
            attendances: {}
        };
    },
    beforeRouteEnter: function beforeRouteEnter(_ref, from, next) {
        var q = _ref.query;

        //the first param received is "to" which contains to:{query:{branch:'branchNameOrID'}}
        //i deconstructed and got just the query as r:{branch:'branchNameOrID'}
        // which i used inside this method
        if (q.branch) (0, _api.get)("/api" + apiLink(q)).then(function (_ref2) {
            var data = _ref2.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        }).catch(function (err) {
            return next(function (vm) {
                return vm.handleErr(err);
            });
        });else next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(_ref3, from, next) {
        var q = _ref3.query;

        var _this = this;

        //the first param received is "to" which contains to:{query:{branch:'branchNameOrID'}}
        //i deconstructed and got just the query as r:{branch:'branchNameOrID'}
        // which i used inside this method
        this.show = false;
        if (q.branch) {
            this.$LIPS(true);
            (0, _api.get)("/api" + apiLink(q)).then(function (_ref4) {
                var data = _ref4.data;

                _this.prepareForm(data);
                next();
            }).catch(function (err) {
                _this.handleErr(err);
                next();
            });
        } else next();
    },
    created: function created() {
        this.$prepareBranches();
        var q = this.$route.query,
            dt = new Date(),
            year = q.year ? q.year : dt.getFullYear(),
            month = q.month ? q.month : dt.getMonth() + 1;
        _vue2.default.set(this.$data.query, 'year', year);
        _vue2.default.set(this.$data.query, 'month', month >= 10 || month.length === 2 ? month : '0' + month);
        if (this.completeQry) _vue2.default.set(this.$data.query, 'branch', q.branch);
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this2.$network()) _this2.$router.push("/hrm" + apiLink(_this2.query));else _this2.$networkErr();
                } else _this2.$networkErr('form');
            });
        },
        prepareForm: function prepareForm(data) {
            if (data) {
                _vue2.default.set(this.$data, 'columns', data.columns);
                _vue2.default.set(this.$data, 'attendances', data.attendances);
                _vue2.default.set(this.$data.query, 'branch', data.branch[0].id);
                this.show = true;
            }
            this.$LIPS(false);
        },
        handleErr: function handleErr(e) {
            _flash2.default.setError('Error Fetching Attendance');
        },
        isPresent: function isPresent(userAtt, day) {
            var bool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var date = day ? day.fullDate : null,
                data = null;
            var c = userAtt.attendances.filter(function (att) {
                return att.date === date;
            });
            if (c.length > 0) data = bool ? c[0][bool] : c[0].is_present ? 'P' : 'A';
            return data;
        },
        earlyOrLate: function earlyOrLate(userAtt, day) {
            var data = [];
            var attendance = userAtt.attendances.filter(function (att) {
                return att.date === day.fullDate;
            });
            if (attendance.length) {
                data[0] = attendance[0].arrival_time > '09:00' ? 'arrLate' : 'arrEarly';
                if (attendance[0].departure_time) {
                    data[1] = attendance[0].departure_time < '18:00' ? 'leftEarly' : 'leftLate';
                } else data[1] = 'didNotSignOut';
            }
            return data;
        },
        checkClass: function checkClass(userAtt, day) {
            var theClass = void 0,
                isPresent = this.isPresent(userAtt, day);
            var erl = this.earlyOrLate(userAtt, day);
            if (['Sun', 'Sat'].includes(day.dayString)) {
                theClass = 'weekend';
            } else {
                if (isPresent === 'P') {
                    if (erl.length) theClass = erl.join(' ');
                } else {
                    if (isPresent === 'A') theClass = 'absent';else theClass = '';
                }
            }
            return theClass;
        },
        toggleGuide: function toggleGuide() {
            $('#table-guide').slideToggle();
        },
        displayInfo: function displayInfo(userAtt, day) {
            var date = day ? day.fullDate : null,
                c = void 0;
            c = userAtt.attendances.filter(function (att) {
                return att.date === date;
            });
            _vue2.default.set(this.$data, 'currAttendance', c[0] ? c[0] : null);
            return $("#viewAttendance").modal('toggle');
        }
    },
    computed: {
        completeQry: function completeQry() {
            return this.$route.query.year && this.$route.query.month && this.$route.query.branch;
        },
        title: function title() {
            var att = 'Attendance';
            if (this.completeQry) {
                var qryMonth = this.$route.query.month,
                    qryYear = this.$route.query.year;
                var month = qryMonth ? ' - ' + this.$store.getters.getMonths[parseInt(qryMonth) - 1].name : '';
                att += " " + month + " " + (qryYear ? qryYear : '');
            }
            return att;
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            return _this3.currAttendance = {};
        });
        this.toggleGuide();
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2eb64f4f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 attendance attendance-view",
        attrs: { id: "index" }
      },
      [
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "mb-5 row align-items-center" }, [
            _c("div", { staticClass: "col-12 title-con" }, [
              _c("span", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-end" }, [
                _c(
                  "a",
                  {
                    staticClass: "text-link mt-3",
                    attrs: { href: "javascript:" },
                    on: {
                      click: function($event) {
                        return _vm.$router.push("attendance/create")
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            click here to create attendance!"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "mx-4 mt-3" }, [_vm._v("||")]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-link mt-3",
                    attrs: { href: "javascript:" },
                    on: { click: _vm.toggleGuide }
                  },
                  [_vm._v("\n                            view table guide!")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "attendance-body", attrs: { id: "table-guide" } },
          [
            _c(
              "div",
              { staticClass: "pt-5 row bg-white shadow-sm card-radius" },
              [
                _c("div", [
                  _c("td", { staticClass: "arrEarly leftLate" }, [
                    _c("span", [_vm._v("A")])
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v("In before/at 9:00am "),
                    _c("br"),
                    _vm._v(" Out after/at 6:00pm")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("td", { staticClass: "arrEarly leftEarly" }, [
                    _c("span", [_vm._v("A")])
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v("In before/at 9:00am  "),
                    _c("br"),
                    _vm._v(" Out Before 6:00pm")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("td", { staticClass: "arrLate leftLate" }, [
                    _c("span", [_vm._v("A")])
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-inline-block" }, [
                    _vm._v("In after 9:00am  "),
                    _c("br"),
                    _vm._v(" Out after/at 6:00pm")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("td", { staticClass: "arrLate leftEarly" }, [
                    _c("span", [_vm._v("A")])
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-inline-block" }, [
                    _vm._v("In after 9:00am  "),
                    _c("br"),
                    _vm._v(" Out before 6:00pm")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("td", { staticClass: "absent" }, [
                    _c("span", [_vm._v("A")])
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("Absent")])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-5 row attendance-head" },
          _vm._l(["Branch", "Month", "Year"], function(capt) {
            return _c("div", { staticClass: "col-4 col-sm-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "light-heading" }, [
                  _c("span", { staticClass: "d-none d-sm-inline" }, [
                    _vm._v("Select")
                  ]),
                  _vm._v(" " + _vm._s(capt))
                ])
              ])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-2 mt-lg-3 row attendance-head" },
          [
            _vm._l(["branch", "month", "year"], function(caption) {
              return _c("div", { staticClass: "col-4 col-sm-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.query[caption],
                          expression: "query[caption]"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "custom-select",
                      attrs: { name: caption, "data-vv-validate-on": "blur" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.query,
                            caption,
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c(
                        "option",
                        { attrs: { disabled: "", selected: "", value: "" } },
                        [_vm._v(_vm._s(caption))]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.$store.getters.getBranches, function(branch) {
                        return caption === "branch"
                          ? _c("option", { domProps: { value: branch.id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm._f("capitalize")(branch.name)) +
                                  "\n                        "
                              )
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.$store.getters.getMonths, function(month) {
                        return caption === "month"
                          ? _c("option", { domProps: { value: month.id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(month.name) +
                                  "\n                        "
                              )
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.$store.getters.getYears, function(year) {
                        return caption === "year"
                          ? _c("option", { domProps: { value: year } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(year) +
                                  "\n                        "
                              )
                            ])
                          : _vm._e()
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.first(caption)
                    ? _c("small", { staticClass: "text-muted" }, [
                        _vm._v(_vm._s(_vm.errors.first(caption)))
                      ])
                    : _vm._e()
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-sm-3" }, [
              _c("div", { staticClass: "row d-flex justify-content-end" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary bg-default mt-0 myBtn",
                    on: {
                      click: function($event) {
                        return _vm.fetch()
                      }
                    }
                  },
                  [_vm._v("View Attendance")]
                )
              ])
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _vm.show
            ? _c("div", { staticClass: "mt-5 row" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "image-and-names float-left" }, [
                    _c("table", { staticClass: "table table-names" }, [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "ml-5" }, [
                            _vm._v("Employee Name")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.attendances, function(user) {
                          return _c("tr", [
                            _c("td", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center m-0 user-details"
                                },
                                [
                                  _c("span", { staticClass: "user mx-auto" }, [
                                    _c("i", {
                                      staticClass: "user-icon fas fa-user-alt"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: " col user-name" }, [
                                    _vm._v(_vm._s("" + user.full_name))
                                  ])
                                ]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "float-left daily-attendance" }, [
                    _c(
                      "table",
                      { staticClass: "table table-details table-bordered" },
                      [
                        _c("thead", [
                          _c(
                            "tr",
                            _vm._l(_vm.columns, function(col) {
                              return _c("th", { staticClass: "text-center" }, [
                                _c("span", [
                                  _vm._v(_vm._s(col.month + " " + col.date))
                                ]),
                                _c("br"),
                                _c(
                                  "span",
                                  { staticClass: "light-heading day" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s("" + col.dayString) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ])
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.attendances, function(userAtt) {
                            return _c(
                              "tr",
                              _vm._l(_vm.columns, function(day) {
                                return _c(
                                  "td",
                                  {
                                    class: _vm.checkClass(userAtt, day),
                                    on: {
                                      click: function($event) {
                                        return _vm.displayInfo(userAtt, day)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.isPresent(userAtt, day)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ])
                ])
              ])
            : _c("div", { staticClass: "row attendance-item p-5 my-5" }, [
                _c("span", { staticClass: "no-attendance" }, [
                  _vm._v(
                    "Kindly Select Branch, Month and, Year to get started!"
                  )
                ])
              ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "viewAttendance" } },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header py-2" }, [
                    _c("h6", { staticClass: "modal-title py-1" }, [
                      _vm._v("Attendance")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "close py-1",
                        attrs: {
                          "aria-label": "Close",
                          "data-dismiss": "modal"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "modal-close text-danger",
                            attrs: { "aria-hidden": "true" }
                          },
                          [_c("i", { staticClass: "fas fa-times" })]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("form", [
                    _c("div", { staticClass: "modal-body" }, [
                      _vm.currAttendance
                        ? _c("div", { staticClass: "px-2" }, [
                            _c("div", { staticClass: "px-4" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Status : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.currAttendance.is_present
                                        ? "Present"
                                        : "Absent"
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Arrival Time : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$timeConvert(
                                        _vm.currAttendance.arrival_time
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Departure time : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$timeConvert(
                                        _vm.currAttendance.departure_time
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [_c("strong", [_vm._v("Date : ")])]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.currAttendance.date))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("span", [
                                  _c("strong", [_vm._v("Remark : ")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _vm._v(_vm._s(_vm.currAttendance.remark))
                                ])
                              ])
                            ])
                          ])
                        : _c("div", { staticClass: "px-2" }, [
                            _c("div", { staticClass: "px-4 row" }, [
                              _c("span", [_c("strong", [_vm._v("Status : ")])]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col" }, [
                                _vm._v("No Attendance")
                              ])
                            ])
                          ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-link mt-3 w-100",
                          staticStyle: { "text-align": "right" },
                          attrs: {
                            "data-dismiss": "modal",
                            href: "javascript:"
                          }
                        },
                        [_vm._v("close dialogue")]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2eb64f4f", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/FSL/attendance/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2eb64f4f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/FSL/attendance/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2eb64f4f", Component.options)
  } else {
    hotAPI.reload("data-v-2eb64f4f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});