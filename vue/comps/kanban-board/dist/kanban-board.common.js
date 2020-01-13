"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "274b");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "1144":
  /***/
  function _(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */

    var _usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kanban_board_vue_vue_type_style_index_0_id_2e3c2997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da0f");
    /* harmony import */


    var _usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kanban_board_vue_vue_type_style_index_0_id_2e3c2997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kanban_board_vue_vue_type_style_index_0_id_2e3c2997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
    /* unused harmony reexport * */

    /* unused harmony default export */


    var _unused_webpack_default_export = _usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kanban_board_vue_vue_type_style_index_0_id_2e3c2997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "274b":
  /***/
  function b(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js


    var setPublicPath = __webpack_require__("6627"); // CONCATENATED MODULE: /Users/guy/Development/www/moodle_test/local/vuedemo/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/guy/Development/www/moodle_test/local/vuedemo/vue/comps/kanban-board/node_modules/.cache/vue-loader","cacheIdentifier":"2aa12d38-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/guy/Development/www/moodle_test/local/vuedemo/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/guy/Development/www/moodle_test/local/vuedemo/node_modules/vue-loader/lib??vue-loader-options!./kanban-board.vue?vue&type=template&id=2e3c2997&scoped=true&


    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', [_c('div', {
        staticClass: "kanban container"
      }, [_c('div', {
        staticClass: "row"
      }, _vm._l(_vm.columns, function (column) {
        return _c('div', {
          staticClass: "col",
          attrs: {
            "id": column.id
          },
          on: {
            "drop": function drop($event) {
              _vm.drop($event, column.id);
            },
            "dragover": function dragover($event) {
              _vm.allowDrop($event);
            }
          }
        }, [_c('h3', [_vm._v(_vm._s(column.title))]), _vm._l(column.tickets, function (ticket) {
          return _c('div', {
            staticClass: "card kanban-card",
            attrs: {
              "id": ticket.id,
              "draggable": "true"
            },
            on: {
              "dragstart": function dragstart($event) {
                _vm.dragstart(_vm.item, $event, ticket.id);
              },
              "dragend": function dragend($event) {
                _vm.dragend($event, ticket.id);
              }
            }
          }, [_c('div', {
            staticClass: "card-body"
          }, [_c('div', {
            attrs: {
              "ciass": "card-title"
            }
          }, [_c('h4', [_vm._v(_vm._s(ticket.title))])]), _c('div', {
            staticClass: "card-text"
          }, [_vm._v(_vm._s(ticket.description))])])]);
        })], 2);
      }))])]);
    };

    var staticRenderFns = []; // CONCATENATED MODULE: ./kanban-board.vue?vue&type=template&id=2e3c2997&scoped=true&
    // CONCATENATED MODULE: /Users/guy/Development/www/moodle_test/local/vuedemo/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/guy/Development/www/moodle_test/local/vuedemo/node_modules/vue-loader/lib??vue-loader-options!./kanban-board.vue?vue&type=script&lang=js&
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

    /* harmony default export */

    var lib_vue_loader_options_kanban_boardvue_type_script_lang_js_ = {
      data: function data() {
        return {
          dragging: 0
        };
      },
      computed: {
        columns: function columns() {
          return this.$store.state.columns;
        }
      },
      methods: {
        dragstart: function dragstart(item, $event, ticketId) {
          this.dragging = ticketId;
        },
        dragend: function dragend($event, ticketId) {
          console.log('dragend for ticketId', ticketId);
        },
        drop: function drop($event, columnId) {
          var ticketId = this.dragging;

          if (ticketId === 0) {
            return;
          }

          console.log('dropped ticketId ' + ticketId + ' on columnId ' + columnId);
          this.dragging = 0;
          this.$store.dispatch('moveTicket', {
            ticketId: ticketId,
            columnId: columnId
          });
        },
        allowDrop: function allowDrop($event) {
          $event.preventDefault();
        }
      }
    }; // CONCATENATED MODULE: ./kanban-board.vue?vue&type=script&lang=js&

    /* harmony default export */

    var kanban_boardvue_type_script_lang_js_ = lib_vue_loader_options_kanban_boardvue_type_script_lang_js_; // EXTERNAL MODULE: ./kanban-board.vue?vue&type=style&index=0&id=2e3c2997&scoped=true&lang=css&

    var kanban_boardvue_type_style_index_0_id_2e3c2997_scoped_true_lang_css_ = __webpack_require__("1144"); // CONCATENATED MODULE: /Users/guy/Development/www/moodle_test/local/vuedemo/node_modules/vue-loader/lib/runtime/componentNormalizer.js

    /* globals __VUE_SSR_CONTEXT__ */
    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.


    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
    /* server only */
    shadowMode
    /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      } // functional template


      if (functionalTemplate) {
        options.functional = true;
      } // scopedId


      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }

      var hook;

      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true

          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          } // inject component styles


          if (injectStyles) {
            injectStyles.call(this, context);
          } // register component module identifier for async chunk inferrence


          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        }; // used by ssr in case component is cached and beforeCreate
        // never gets called


        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles;
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook; // register for functioal component in vue file

          var originalRender = options.render;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return {
        exports: scriptExports,
        options: options
      };
    } // CONCATENATED MODULE: ./kanban-board.vue

    /* normalize component */


    var component = normalizeComponent(kanban_boardvue_type_script_lang_js_, render, staticRenderFns, false, null, "2e3c2997", null);
    /* harmony default export */

    var kanban_board = component.exports; // CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

    /* harmony default export */

    var entry_lib = __webpack_exports__["default"] = kanban_board;
    /***/
  },

  /***/
  "6627":
  /***/
  function _(module, exports, __webpack_require__) {
    // This file is imported into lib/wc client bundles.
    if (typeof window !== 'undefined') {
      var i;

      if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
        __webpack_require__.p = i[1]; // eslint-disable-line
      }
    }
    /***/

  },

  /***/
  "da0f":
  /***/
  function da0f(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

    /***/
  }
  /******/

})["default"];