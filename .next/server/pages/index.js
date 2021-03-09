module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Chat.js":
/*!**********************************!*\
  !*** ./pages/components/Chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatMessage */ "./pages/components/ChatMessage.js");

var _jsxFileName = "C:\\Users\\Elizabeth Mun\\Documents\\Projects\\realtime-chat-app\\pages\\components\\Chat.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];

class Chat extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      chats: []
    });

    _defineProperty(this, "handleKeyUp", evt => {
      const value = evt.target.value;

      if (evt.keyCode === 13 && !evt.shiftKey) {
        const {
          activeUser: user
        } = this.props;
        const chat = {
          user,
          message: value,
          timestamp: +new Date()
        };
        evt.target.value = '';
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/message', chat);
      }
    });
  }

  componentDidMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_3___default.a("da3017525e1b238a15aa", {
      cluster: "us2",
      encrypted: true
    });
    this.channel = this.pusher.subscribe('chat-room');
    this.channel.bind('new-message', ({
      chat = null
    }) => {
      const {
        chats
      } = this.state;
      chat && chats.push(chat);
      this.setState({
        chats
      });
    });
    this.pusher.connection.bind('connected', () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/messages').then(response => {
        const chats = response.data.messages;
        this.setState({
          chats
        });
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    return this.props.activeUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-bottom border-gray w-100 d-flex align-items-center bg-white",
        style: {
          height: 90
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "text-dark mb-0 mx-4 px-2",
          children: this.props.activeUser
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative",
        style: {
          height: 'calc(100% - 180px)',
          overflowY: 'scroll'
        },
        children: this.state.chats.map((chat, index) => {
          const previous = Math.max(0, index - 1);
          const previousChat = this.state.chats[previous];
          const position = chat.user === this.props.activeUser ? "right" : "left";
          const isFirst = previous === index;
          const inSequence = chat.user === previousChat.user;
          const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;
          const mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [(isFirst || !inSequence || hasDelay) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`,
              style: {
                fontSize: '0.9rem'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "d-block",
                style: {
                  fontSize: '1.6rem'
                },
                children: String.fromCodePoint(...mood)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: chat.user || 'Anonymous'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              message: chat.message,
              position: position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-top border-gray w-100 px-4 d-flex align-items-center bg-light",
        style: {
          minHeight: 90
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          className: "form-control px-3 py-2",
          onKeyUp: this.handleKeyUp,
          placeholder: "Enter a chat message",
          style: {
            resize: 'none'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 38
    }, this);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./pages/components/ChatMessage.js":
/*!*****************************************!*\
  !*** ./pages/components/ChatMessage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Elizabeth Mun\\Documents\\Projects\\realtime-chat-app\\pages\\components\\ChatMessage.js";


class ChatMessage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      position = 'left',
      message
    } = this.props;
    const isRight = position.toLowerCase() === 'right';
    const align = isRight ? 'text-right' : 'text-left';
    const justify = isRight ? 'justify-content-end' : 'justify-content-start';
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `w-100 my-1 d-flex ${justify}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-light rounded border border-gray p-2",
        style: {
          maxWidth: '70%',
          flexGrow: 0
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `d-block text-secondary ${align}`,
          style: {
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
          },
          children: this.props.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChatMessage);

/***/ }),

/***/ "./pages/components/Layout.js":
/*!************************************!*\
  !*** ./pages/components/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Elizabeth Mun\\Documents\\Projects\\realtime-chat-app\\pages\\components\\Layout.js";



const Layout = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: props.pageTitle || 'Realtime Chat'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), props.children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Chat */ "./pages/components/Chat.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.js");

var _jsxFileName = "C:\\Users\\Elizabeth Mun\\Documents\\Projects\\realtime-chat-app\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      user: null
    });

    _defineProperty(this, "handleKeyUp", evt => {
      if (evt.keyCode === 13) {
        const user = evt.target.value;
        this.setState({
          user
        });
      }
    });
  }

  render() {
    const {
      user
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      pageTitle: "Realtime Chat",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "container-fluid position-absolute h-100 bg-dark",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row position-absolute w-100 h-100",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "px-5 mx-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "d-block w-100 h1 text-light",
                style: {
                  marginTop: -50
                },
                children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      color: '#999'
                    },
                    children: "Hello!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 34
                  }, this), " ", user]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 28
                }, this) : `What is your name?`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, this), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3 px-3 py-2",
                onKeyUp: this.handleKeyUp,
                autoComplete: "off",
                style: {
                  background: 'transparent',
                  color: '#999',
                  border: 0,
                  borderBottom: '1px solid #666',
                  borderRadius: 0,
                  fontSize: '3rem',
                  fontWeight: 500,
                  boxShadow: 'none !important'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 28
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
            children: user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
              activeUser: user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexPage, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 43,
  columnNumber: 3
}, undefined));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNBRF9FTU9KSSIsIkhBUFBZX0VNT0pJIiwiTkVVVFJBTF9FTU9KSSIsIkNoYXQiLCJDb21wb25lbnQiLCJjaGF0cyIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiYWN0aXZlVXNlciIsInVzZXIiLCJwcm9wcyIsImNoYXQiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiRGF0ZSIsImF4aW9zIiwicG9zdCIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaGVyIiwiUHVzaGVyIiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInN0YXRlIiwicHVzaCIsInNldFN0YXRlIiwiY29ubmVjdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGlzY29ubmVjdCIsInJlbmRlciIsImhlaWdodCIsIm92ZXJmbG93WSIsIm1hcCIsImluZGV4IiwicHJldmlvdXMiLCJNYXRoIiwibWF4IiwicHJldmlvdXNDaGF0IiwicG9zaXRpb24iLCJpc0ZpcnN0IiwiaW5TZXF1ZW5jZSIsImhhc0RlbGF5IiwiY2VpbCIsIm1vb2QiLCJzZW50aW1lbnQiLCJmb250U2l6ZSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJtaW5IZWlnaHQiLCJoYW5kbGVLZXlVcCIsInJlc2l6ZSIsIkNoYXRNZXNzYWdlIiwiaXNSaWdodCIsInRvTG93ZXJDYXNlIiwiYWxpZ24iLCJqdXN0aWZ5IiwibWF4V2lkdGgiLCJmbGV4R3JvdyIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwid2hpdGVTcGFjZSIsIkxheW91dCIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIiwiSW5kZXhQYWdlIiwibWFyZ2luVG9wIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IENoYXRNZXNzYWdlIGZyb20gJy4vQ2hhdE1lc3NhZ2UnO1xyXG5cclxuY29uc3QgU0FEX0VNT0pJID0gWzU1MzU3LCA1Njg2NF07XHJcbmNvbnN0IEhBUFBZX0VNT0pJID0gWzU1MzU3LCA1NjgzMl07XHJcbmNvbnN0IE5FVVRSQUxfRU1PSkkgPSBbNTUzNTcsIDU2ODQ4XTtcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHsgY2hhdHM6IFtdIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIocHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9LRVksIHtcclxuICAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9DTFVTVEVSLFxyXG4gICAgICBlbmNyeXB0ZWQ6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSgnY2hhdC1yb29tJyk7XHJcblxyXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1tZXNzYWdlJywgKHsgY2hhdCA9IG51bGwgfSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGNoYXRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpID0+IHtcclxuICAgICAgYXhpb3MucG9zdCgnL21lc3NhZ2VzJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGF0cyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZXM7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcCA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMyAmJiAhZXZ0LnNoaWZ0S2V5KSB7XHJcbiAgICAgIGNvbnN0IHsgYWN0aXZlVXNlcjogdXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgY2hhdCA9IHsgdXNlciwgbWVzc2FnZTogdmFsdWUsIHRpbWVzdGFtcDogK25ldyBEYXRlIH07XHJcbiAgICAgIFxyXG4gICAgICBldnQudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuYWN0aXZlVXNlciAmJiA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheSB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlXCIgc3R5bGU9e3sgaGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1kYXJrIG1iLTAgbXgtNCBweC0yXCI+e3RoaXMucHJvcHMuYWN0aXZlVXNlcn08L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHBiLTQgdy0xMDAgZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LXN0YXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDAlIC0gMTgwcHgpJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jaGF0cy5tYXAoKGNoYXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IE1hdGgubWF4KDAsIGluZGV4IC0gMSk7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSB0aGlzLnN0YXRlLmNoYXRzW3ByZXZpb3VzXTtcclxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2hhdC51c2VyID09PSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcclxuXHJcbiAgICAgICAgICBjb25zdCBpc0ZpcnN0ID0gcHJldmlvdXMgPT09IGluZGV4O1xyXG4gICAgICAgICAgY29uc3QgaW5TZXF1ZW5jZSA9IGNoYXQudXNlciA9PT0gcHJldmlvdXNDaGF0LnVzZXI7XHJcbiAgICAgICAgICBjb25zdCBoYXNEZWxheSA9IE1hdGguY2VpbCgoY2hhdC50aW1lc3RhbXAgLSBwcmV2aW91c0NoYXQudGltZXN0YW1wKSAvICgxMDAwICogNjApKSA+IDE7XHJcblxyXG4gICAgICAgICAgY29uc3QgbW9vZCA9IGNoYXQuc2VudGltZW50ID4gMCA/IEhBUFBZX0VNT0pJIDogKGNoYXQuc2VudGltZW50ID09PSAwID8gTkVVVFJBTF9FTU9KSSA6IFNBRF9FTU9KSSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIHsgKGlzRmlyc3QgfHwgIWluU2VxdWVuY2UgfHwgaGFzRGVsYXkpICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZC1ibG9jayB3LTEwMCBmb250LXdlaWdodC1ib2xkIHRleHQtZGFyayBtdC00IHBiLTEgcHgtMSB0ZXh0LSR7cG9zaXRpb259YH0gc3R5bGU9e3sgZm9udFNpemU6ICcwLjlyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxLjZyZW0nIH19PntTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5tb29kKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGF0LnVzZXIgfHwgJ0Fub255bW91cyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgPENoYXRNZXNzYWdlIG1lc3NhZ2U9e2NoYXQubWVzc2FnZX0gcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZ3JheSB3LTEwMCBweC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmctbGlnaHRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDkwIH19PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgbWVzc2FnZVwiIHN0eWxlPXt7IHJlc2l6ZTogJ25vbmUnIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD4gKVxyXG4gIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDaGF0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcG9zaXRpb24gPSAnbGVmdCcsIG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBpc1JpZ2h0ID0gcG9zaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JztcclxuXHJcbiAgICBjb25zdCBhbGlnbiA9IGlzUmlnaHQgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0JztcclxuICAgIGNvbnN0IGp1c3RpZnkgPSBpc1JpZ2h0ID8gJ2p1c3RpZnktY29udGVudC1lbmQnIDogJ2p1c3RpZnktY29udGVudC1zdGFydCc7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdy0xMDAgbXktMSBkLWZsZXggJHtqdXN0aWZ5fWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5IHAtMlwiIHN0eWxlPXt7IG1heFdpZHRoOiAnNzAlJywgZmxleEdyb3c6IDAgfX0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZC1ibG9jayB0ZXh0LXNlY29uZGFyeSAke2FsaWdufWB9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCwgbGluZUhlaWdodDogMS40LCB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnIH19Pnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICA8RnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgPHRpdGxlPntwcm9wcy5wYWdlVGl0bGUgfHwgJ1JlYWx0aW1lIENoYXQnfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHsgdXNlcjogbnVsbCB9XHJcblxyXG4gIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgY29uc3QgdXNlciA9ICBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIENoYXRcIj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcG9zaXRpb24tYWJzb2x1dGUgaC0xMDAgYmctZGFya1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDBcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTggZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgcHgtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBteC01XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIGgxIHRleHQtbGlnaHRcIiBzdHlsZT17e21hcmdpblRvcDogLTUwfX0+XHJcbiAgICAgICAgICAgICAgICAgIHsgdXNlciA/IDxzcGFuPjxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjOTk5J319PkhlbGxvITwvc3Bhbj4ge3VzZXJ9PC9zcGFuPiA6IGBXaGF0IGlzIHlvdXIgbmFtZT9gIH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHsgIXVzZXIgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTMgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICcjOTk5JywgYm9yZGVyOiAwLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzY2NicsIGJvcmRlclJhZGl1czogMCwgZm9udFNpemU6ICczcmVtJywgZm9udFdlaWdodDogNTAwLCBib3hTaGFkb3c6ICdub25lICFpbXBvcnRhbnQnIH19IC8+IH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC13cmFwIGgtMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBiZy13aGl0ZSBweC0wXCI+XHJcbiAgICAgICAgICAgICAgeyB1c2VyICYmIDxDaGF0IGFjdGl2ZVVzZXI9e3VzZXJ9IC8+IH1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8SW5kZXhQYWdlIC8+XHJcbik7ICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=