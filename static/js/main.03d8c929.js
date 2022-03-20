/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(153);
	module.exports = __webpack_require__(73);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(154);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	var _exportNames = {
	  batch: true
	};
	
	var _exports = __webpack_require__(145);
	
	Object.keys(_exports).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _exports[key]) return;
	  exports[key] = _exports[key];
	});
	
	var _reactBatchedUpdates = __webpack_require__(150);
	
	exports.batch = _reactBatchedUpdates.unstable_batchedUpdates;
	
	var _batch = __webpack_require__(52);
	
	// Enable batched updates in our subscriptions for use
	// with standard React renderers (ReactDOM, React Native)
	(0, _batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * React Router DOM v6.2.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	'use strict';
	
	/* eslint-env node */
	
	if (true) {
	  module.exports = __webpack_require__(151);
	} else {
	  module.exports = require("./umd/react-router-dom.development.js");
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * React Router v6.2.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	'use strict';
	
	/* eslint-env node */
	
	if (true) {
	  module.exports = __webpack_require__(152);
	} else {
	  module.exports = require("./umd/react-router.development.js");
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}
	
	module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Modal = function () {
	  function Modal() {
	    _classCallCheck(this, Modal);
	
	    this._handleSubmit = null;
	  }
	
	  _createClass(Modal, [{
	    key: "showModal",
	    value: function showModal(title, msg, fn) {
	      var _this = this;
	
	      var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	      this._handleSubmit = function () {
	        fn();
	        _this.hideModal();
	      };
	
	      document.querySelector(".modal__title").textContent = title;
	
	      document.querySelector(".modal__text").textContent = msg;
	
	      if (body) {
	        document.querySelector(".modal__body").innerHTML = body;
	      }
	
	      document.querySelector(".modal").classList.add("modal--show");
	      document.querySelector(".overlay").classList.add("overlay--show");
	
	      document.querySelector(".overlay").addEventListener("click", function () {
	        _this.hideModal();
	      });
	
	      document.querySelector(".modal__dismiss").addEventListener("click", function () {
	        _this.hideModal();
	      });
	
	      document.querySelector(".modal__btn--submit").addEventListener("click", this._handleSubmit);
	      document.querySelector(".modal__btn--cancel").addEventListener("click", function () {
	        _this.hideModal();
	      });
	    }
	  }, {
	    key: "onSubmit",
	    value: function onSubmit() {
	      this._handleSubmit;
	      this.hideModal();
	    }
	  }, {
	    key: "hideModal",
	    value: function hideModal() {
	      document.querySelector(".modal").classList.remove("modal--show");
	      document.querySelector(".overlay").classList.remove("overlay--show");
	      document.querySelector(".modal__btn--submit").removeEventListener("click", this._handleSubmit);
	    }
	  }]);
	
	  return Modal;
	}();
	
	exports.default = new Modal();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GoalItem = function GoalItem(_ref) {
	  var id = _ref.id,
	      description = _ref.description,
	      progress = _ref.progress,
	      _ref$done = _ref.done,
	      done = _ref$done === undefined ? false : _ref$done,
	      onEditItem = _ref.onEditItem,
	      onChangeItemStatus = _ref.onChangeItemStatus,
	      onDeleteItem = _ref.onDeleteItem,
	      onSelectItem = _ref.onSelectItem,
	      _ref$onAddTasks = _ref.onAddTasks,
	      onAddTasks = _ref$onAddTasks === undefined ? null : _ref$onAddTasks,
	      _ref$isTask = _ref.isTask,
	      isTask = _ref$isTask === undefined ? false : _ref$isTask,
	      _ref$isAddTask = _ref.isAddTask,
	      isAddTask = _ref$isAddTask === undefined ? false : _ref$isAddTask,
	      _ref$isProject = _ref.isProject,
	      isProject = _ref$isProject === undefined ? false : _ref$isProject,
	      _ref$selected = _ref.selected,
	      selected = _ref$selected === undefined ? false : _ref$selected,
	      _ref$parent = _ref.parent,
	      parent = _ref$parent === undefined ? null : _ref$parent;
	
	  var _useState = (0, _react.useState)(false),
	      _useState2 = _slicedToArray(_useState, 2),
	      showDetails = _useState2[0],
	      setShowDetails = _useState2[1];
	
	  return _react2.default.createElement(
	    "li",
	    { className: "goals__item" },
	    _react2.default.createElement(
	      "div",
	      { className: "goals__main" },
	      isTask ? _react2.default.createElement(
	        "span",
	        {
	          className: "goals__progress goals__progress--hover",
	          onClick: onChangeItemStatus
	        },
	        done ? _react2.default.createElement("img", {
	          src: __webpack_require__(167),
	          alt: "Opcoes",
	          className: "goals__status"
	        }) : _react2.default.createElement("img", {
	          src: __webpack_require__(120),
	          alt: "Opcoes",
	          className: "goals__status"
	        })
	      ) : _react2.default.createElement(
	        "span",
	        { className: "goals__progress" },
	        progress,
	        "%"
	      ),
	      _react2.default.createElement(
	        "span",
	        {
	          className: "goals__description " + (isTask ? "goals__description--task-hover" : "") + " " + (done ? "goals__description--strike" : ""),
	          onClick: onChangeItemStatus
	        },
	        description
	      ),
	      _react2.default.createElement(
	        "span",
	        { className: "goals__parent" },
	        parent
	      ),
	      _react2.default.createElement(
	        "button",
	        { type: "button", className: "btn-image goals__options" },
	        isAddTask ? _react2.default.createElement("img", {
	          src: __webpack_require__(168),
	          alt: "Opcoes",
	          onClick: onSelectItem,
	          className: "goals__check " + (selected ? "goals__check--selected" : "")
	        }) : _react2.default.createElement("img", {
	          src: __webpack_require__(42),
	          alt: "Opcoes",
	          onClick: function onClick() {
	            return setShowDetails(function (value) {
	              return !value;
	            });
	          }
	        })
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      {
	        className: "goals__actions " + (showDetails ? "goals__actions--show" : "")
	      },
	      _react2.default.createElement(
	        "button",
	        {
	          className: "goals__actions-item goals__actions-item--add-tasks btn-image",
	          onClick: onAddTasks
	        },
	        _react2.default.createElement("img", {
	          src: __webpack_require__(121),
	          alt: "Adicionar tarefas"
	        })
	      ),
	      _react2.default.createElement(
	        "button",
	        {
	          className: "goals__actions-item goals__actions-item--edit btn-image",
	          onClick: onEditItem
	        },
	        _react2.default.createElement("img", {
	          src: __webpack_require__(43),
	          alt: "Editar"
	        })
	      ),
	      _react2.default.createElement(
	        "button",
	        { className: "goals__actions-item goals__actions-item--remove btn-image" },
	        _react2.default.createElement("img", {
	          src: __webpack_require__(44),
	          alt: "Remover",
	          onClick: onDeleteItem
	        })
	      )
	    )
	  );
	};
	
	exports.default = GoalItem;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports["default"] = exports.ReactReduxContext = void 0;
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var ReactReduxContext = /*#__PURE__*/_react["default"].createContext(null);
	
	exports.ReactReduxContext = ReactReduxContext;
	
	if (false) {
	  ReactReduxContext.displayName = 'ReactRedux';
	}
	
	var _default = ReactReduxContext;
	exports["default"] = _default;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.DEFAULT_VERSION = exports.REGISTER = exports.PURGE = exports.PERSIST = exports.PAUSE = exports.REHYDRATE = exports.FLUSH = exports.KEY_PREFIX = void 0;
	var KEY_PREFIX = 'persist:';
	exports.KEY_PREFIX = KEY_PREFIX;
	var FLUSH = 'persist/FLUSH';
	exports.FLUSH = FLUSH;
	var REHYDRATE = 'persist/REHYDRATE';
	exports.REHYDRATE = REHYDRATE;
	var PAUSE = 'persist/PAUSE';
	exports.PAUSE = PAUSE;
	var PERSIST = 'persist/PERSIST';
	exports.PERSIST = PERSIST;
	var PURGE = 'persist/PURGE';
	exports.PURGE = PURGE;
	var REGISTER = 'persist/REGISTER';
	exports.REGISTER = REGISTER;
	var DEFAULT_VERSION = -1;
	exports.DEFAULT_VERSION = DEFAULT_VERSION;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(115);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeListVisibility = exports.updateProgress = exports.deleteList = exports.updateList = exports.createList = undefined;
	
	var _lists = __webpack_require__(24);
	
	var _lists2 = _interopRequireDefault(_lists);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createList = exports.createList = function createList(list) {
	  return {
	    type: _lists2.default.CREATE,
	    payload: list
	  };
	};
	
	var updateList = exports.updateList = function updateList(id, list) {
	  return {
	    type: _lists2.default.UPDATE,
	    payload: { id: id, list: list }
	  };
	};
	
	var deleteList = exports.deleteList = function deleteList(id) {
	  return {
	    type: _lists2.default.DELETE,
	    payload: id
	  };
	};
	
	var updateProgress = exports.updateProgress = function updateProgress(id, progress) {
	  return {
	    type: _lists2.default.UPDATE_PROGRESS,
	    payload: { id: id, progress: progress }
	  };
	};
	
	var changeListVisibility = exports.changeListVisibility = function changeListVisibility(id) {
	  return {
	    type: _lists2.default.CHANGE_LIST_VISIBILITY,
	    payload: id
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.moveTasksToList = exports.moveTaskDown = exports.moveTaskUp = exports.changeTaskStatus = exports.deleteManyTasks = exports.deleteTask = exports.updateTask = exports.addProjectTasks = exports.addTask = undefined;
	
	var _tasks = __webpack_require__(39);
	
	var _tasks2 = _interopRequireDefault(_tasks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addTask = exports.addTask = function addTask(task) {
	  return {
	    type: _tasks2.default.CREATE,
	    payload: task
	  };
	};
	
	var addProjectTasks = exports.addProjectTasks = function addProjectTasks(tasks) {
	  return {
	    type: _tasks2.default.CREATE_PROJECT_TASKS,
	    payload: tasks
	  };
	};
	
	var updateTask = exports.updateTask = function updateTask(id, task) {
	  return {
	    type: _tasks2.default.UPDATE,
	    payload: { id: id, task: task }
	  };
	};
	
	var deleteTask = exports.deleteTask = function deleteTask(id) {
	  return {
	    type: _tasks2.default.DELETE,
	    payload: id
	  };
	};
	
	var deleteManyTasks = exports.deleteManyTasks = function deleteManyTasks(ids) {
	  return {
	    type: _tasks2.default.DELETE_MANY,
	    payload: ids
	  };
	};
	
	var changeTaskStatus = exports.changeTaskStatus = function changeTaskStatus(id) {
	  return {
	    type: _tasks2.default.CHANGE_STATUS,
	    payload: id
	  };
	};
	
	var moveTaskUp = exports.moveTaskUp = function moveTaskUp(id) {
	  return {
	    type: _tasks2.default.MOVE_TASK_UP,
	    payload: id
	  };
	};
	
	var moveTaskDown = exports.moveTaskDown = function moveTaskDown(id) {
	  return {
	    type: _tasks2.default.MOVE_TASK_DOWN,
	    payload: id
	  };
	};
	
	var moveTasksToList = exports.moveTasksToList = function moveTasksToList(ids, listId) {
	  return {
	    type: _tasks2.default.MOVE_TASKS_TO_LIST,
	    payload: { ids: ids, listId: listId }
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SelectMonth = function SelectMonth(_ref) {
	  var label = _ref.label,
	      value = _ref.value,
	      onChange = _ref.onChange;
	
	  return _react2.default.createElement(
	    "select",
	    {
	      name: label,
	      id: label,
	      className: "form__select",
	      onChange: onChange,
	      value: value
	    },
	    _react2.default.createElement(
	      "option",
	      { value: "0" },
	      "Janeiro"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "1" },
	      "Fevereiro"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "2" },
	      "Marco"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "3" },
	      "Abril"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "4" },
	      "Maio"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "5" },
	      "Junho"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "6" },
	      "Julho"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "7" },
	      "Agosto"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "8" },
	      "Setembro"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "9" },
	      "Outubro"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "10" },
	      "Novembro"
	    ),
	    _react2.default.createElement(
	      "option",
	      { value: "11" },
	      "Dezembro"
	    )
	  );
	};
	
	exports.default = SelectMonth;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PROTOCOL = "http";
	var PORT = 4000;
	var ADDRESS = "192.168.8.101";
	var VERSION = "v1";
	
	var API_URL = PROTOCOL + "://" + ADDRESS + ":" + PORT + "/api/" + VERSION;
	
	exports.default = API_URL;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateProjectProgress = exports.deleteProject = exports.updateProject = exports.addProject = undefined;
	
	var _projects = __webpack_require__(38);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addProject = exports.addProject = function addProject(project) {
	  return {
	    type: _projects2.default.CREATE,
	    payload: project
	  };
	};
	
	var updateProject = exports.updateProject = function updateProject(id, project) {
	  return {
	    type: _projects2.default.UPDATE,
	    payload: { id: id, project: project }
	  };
	};
	
	var deleteProject = exports.deleteProject = function deleteProject(id) {
	  return {
	    type: _projects2.default.DELETE,
	    payload: id
	  };
	};
	
	var updateProjectProgress = exports.updateProjectProgress = function updateProjectProgress(id, progress) {
	  return {
	    type: _projects2.default.UPDATE_PROJECT_PROGRESS,
	    payload: { id: id, progress: progress }
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCurrentUser = undefined;
	
	var _user = __webpack_require__(40);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setCurrentUser = exports.setCurrentUser = function setCurrentUser(user) {
	  return {
	    type: _user2.default.SET_CURRENT_USER,
	    payload: user
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var calculateProgress = exports.calculateProgress = function calculateProgress(listId, allTasks, projectId) {
	  var progress = 0;
	
	  var numTasksDone = 0;
	
	  var tasksFrom = [];
	
	  if (listId) {
	    tasksFrom = allTasks.filter(function (task) {
	      return task.listId == listId;
	    });
	  } else {
	    tasksFrom = allTasks.filter(function (task) {
	      return task.projectId == projectId;
	    });
	  }
	
	  tasksFrom.forEach(function (task) {
	    if (task.done) {
	      numTasksDone++;
	    }
	  });
	
	  progress = Math.floor(numTasksDone / tasksFrom.length * 100);
	
	  return progress;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Spinner = function () {
	  function Spinner() {
	    _classCallCheck(this, Spinner);
	  }
	
	  _createClass(Spinner, [{
	    key: "showSpinner",
	    value: function showSpinner() {
	      document.querySelector(".spinner__container").classList.add("spinner__container--show");
	      document.querySelector(".overlay").classList.add("overlay--show");
	    }
	  }, {
	    key: "hideSpinner",
	    value: function hideSpinner() {
	      document.querySelector(".spinner__container").classList.remove("spinner__container--show");
	      document.querySelector(".overlay").classList.remove("overlay--show");
	    }
	  }]);
	
	  return Spinner;
	}();
	
	exports.default = new Spinner();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	var _objectSpread = __webpack_require__(63);
	
	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }
	
	var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);
	
	/**
	 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
	 *
	 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
	 * during build.
	 * @param {number} code
	 */
	function formatProdErrorMessage(code) {
	  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
	}
	
	// Inlined version of the `symbol-observable` polyfill
	var $$observable = (function () {
	  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
	})();
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};
	
	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;
	
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return Object.getPrototypeOf(obj) === proto;
	}
	
	// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
	function miniKindOf(val) {
	  if (val === void 0) return 'undefined';
	  if (val === null) return 'null';
	  var type = typeof val;
	
	  switch (type) {
	    case 'boolean':
	    case 'string':
	    case 'number':
	    case 'symbol':
	    case 'function':
	      {
	        return type;
	      }
	  }
	
	  if (Array.isArray(val)) return 'array';
	  if (isDate(val)) return 'date';
	  if (isError(val)) return 'error';
	  var constructorName = ctorName(val);
	
	  switch (constructorName) {
	    case 'Symbol':
	    case 'Promise':
	    case 'WeakMap':
	    case 'WeakSet':
	    case 'Map':
	    case 'Set':
	      return constructorName;
	  } // other
	
	
	  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
	}
	
	function ctorName(val) {
	  return typeof val.constructor === 'function' ? val.constructor.name : null;
	}
	
	function isError(val) {
	  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
	}
	
	function isDate(val) {
	  if (val instanceof Date) return true;
	  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
	}
	
	function kindOf(val) {
	  var typeOfVal = typeof val;
	
	  if (false) {
	    typeOfVal = miniKindOf(val);
	  }
	
	  return typeOfVal;
	}
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error( true ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
	  }
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error( true ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error( true ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	
	
	  function getState() {
	    if (isDispatching) {
	      throw new Error( true ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }
	
	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	
	
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error( true ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
	    }
	
	    if (isDispatching) {
	      throw new Error( true ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
	    }
	
	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      if (isDispatching) {
	        throw new Error( true ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
	      }
	
	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	      currentListeners = null;
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	
	
	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error( true ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error( true ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
	    }
	
	    if (isDispatching) {
	      throw new Error( true ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	
	
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error( true ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
	    }
	
	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.
	
	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	
	
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new Error( true ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	
	
	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	
	
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty
	
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!isPlainObject(inputState)) {
	    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	  if (action && action.type === ActionTypes.REPLACE) return;
	
	  if (unexpectedKeys.length > 0) {
	    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, {
	      type: ActionTypes.INIT
	    });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error( true ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
	    }
	
	    if (typeof reducer(undefined, {
	      type: ActionTypes.PROBE_UNKNOWN_ACTION()
	    }) === 'undefined') {
	      throw new Error( true ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
	    }
	  });
	}
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        warning("No reducer provided for key \"" + key + "\"");
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	
	  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
	  // keys multiple times.
	
	  var unexpectedKeyCache;
	
	  if (false) {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError;
	
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination(state, action) {
	    if (state === void 0) {
	      state = {};
	    }
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	
	      if (warningMessage) {
	        warning(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	
	      if (typeof nextStateForKey === 'undefined') {
	        var actionType = action && action.type;
	        throw new Error( true ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
	      }
	
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	
	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass an action creator as the first argument,
	 * and get a dispatch wrapped function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	
	
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error( true ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
	  }
	
	  var boundActionCreators = {};
	
	  for (var key in actionCreators) {
	    var actionCreator = actionCreators[key];
	
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	
	  return boundActionCreators;
	}
	
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);
	
	      var _dispatch = function dispatch() {
	        throw new Error( true ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
	      };
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread__default['default'](_objectSpread__default['default']({}, store), {}, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */
	
	function isCrushed() {}
	
	if (false) {
	  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.__DO_NOT_USE__ActionTypes = ActionTypes;
	exports.applyMiddleware = applyMiddleware;
	exports.bindActionCreators = bindActionCreators;
	exports.combineReducers = combineReducers;
	exports.compose = compose;
	exports.createStore = createStore;


/***/ },
/* 20 */
/***/ function(module, exports) {

	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _extends.apply(this, arguments);
	}
	
	module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 21 */
/***/ function(module, exports) {

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	
	  return target;
	}
	
	module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _circularProgressBar = __webpack_require__(29);
	
	var _circularProgressBar2 = _interopRequireDefault(_circularProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Overview = function Overview(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "overview" },
	    _react2.default.createElement(_circularProgressBar2.default, {
	      percentage: props.circularProgressBarPercentage,
	      title: props.circularProgressBarTitle
	    })
	  );
	};
	
	exports.default = Overview;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteMonthlyGoal = exports.updateMonthlyGoal = exports.createMonthlyGoal = undefined;
	
	var _monthlyGoals = __webpack_require__(37);
	
	var _monthlyGoals2 = _interopRequireDefault(_monthlyGoals);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createMonthlyGoal = exports.createMonthlyGoal = function createMonthlyGoal(monthlyGoal) {
	  return {
	    type: _monthlyGoals2.default.CREATE,
	    payload: monthlyGoal
	  };
	};
	
	var updateMonthlyGoal = exports.updateMonthlyGoal = function updateMonthlyGoal(id, monthlyGoal) {
	  return {
	    type: _monthlyGoals2.default.UPDATE,
	    payload: { id: id, monthlyGoal: monthlyGoal }
	  };
	};
	
	var deleteMonthlyGoal = exports.deleteMonthlyGoal = function deleteMonthlyGoal(id) {
	  return {
	    type: _monthlyGoals2.default.DELETE,
	    payload: id
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ListsTypes = {
	  CREATE: "CREATE_LIST",
	  UPDATE: "UPDATE_LIST",
	  DELETE: "DELETE_LIST",
	  UPDATE_PROGRESS: "UPDATE_PROGRESS",
	  CHANGE_LIST_VISIBILITY: "CHANGE_LIST_VISIBILITY"
	};
	
	exports.default = ListsTypes;

/***/ },
/* 25 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.createSubscription = createSubscription;
	
	var _batch = __webpack_require__(52);
	
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	function createListenerCollection() {
	  var batch = (0, _batch.getBatch)();
	  var first = null;
	  var last = null;
	  return {
	    clear: function clear() {
	      first = null;
	      last = null;
	    },
	    notify: function notify() {
	      batch(function () {
	        var listener = first;
	
	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },
	    get: function get() {
	      var listeners = [];
	      var listener = first;
	
	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }
	
	      return listeners;
	    },
	    subscribe: function subscribe(callback) {
	      var isSubscribed = true;
	      var listener = last = {
	        callback: callback,
	        next: null,
	        prev: last
	      };
	
	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }
	
	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;
	
	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }
	
	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }
	  };
	}
	
	var nullListeners = {
	  notify: function notify() {},
	  get: function get() {
	    return [];
	  }
	};
	
	function createSubscription(store, parentSub) {
	  var unsubscribe;
	  var listeners = nullListeners;
	
	  function addNestedSub(listener) {
	    trySubscribe();
	    return listeners.subscribe(listener);
	  }
	
	  function notifyNestedSubs() {
	    listeners.notify();
	  }
	
	  function handleChangeWrapper() {
	    if (subscription.onStateChange) {
	      subscription.onStateChange();
	    }
	  }
	
	  function isSubscribed() {
	    return Boolean(unsubscribe);
	  }
	
	  function trySubscribe() {
	    if (!unsubscribe) {
	      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
	      listeners = createListenerCollection();
	    }
	  }
	
	  function tryUnsubscribe() {
	    if (unsubscribe) {
	      unsubscribe();
	      unsubscribe = undefined;
	      listeners.clear();
	      listeners = nullListeners;
	    }
	  }
	
	  var subscription = {
	    addNestedSub: addNestedSub,
	    notifyNestedSubs: notifyNestedSubs,
	    handleChangeWrapper: handleChangeWrapper,
	    isSubscribed: isSubscribed,
	    trySubscribe: trySubscribe,
	    tryUnsubscribe: tryUnsubscribe,
	    getListeners: function getListeners() {
	      return listeners;
	    }
	  };
	  return subscription;
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.useIsomorphicLayoutEffect = void 0;
	
	var _react = __webpack_require__(1);
	
	// React currently throws a warning when using useLayoutEffect on the server.
	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed
	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? _react.useLayoutEffect : _react.useEffect;
	exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = __webpack_require__(64)["default"];
	
	function _getRequireWildcardCache(nodeInterop) {
	  if (typeof WeakMap !== "function") return null;
	  var cacheBabelInterop = new WeakMap();
	  var cacheNodeInterop = new WeakMap();
	  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
	    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	  })(nodeInterop);
	}
	
	function _interopRequireWildcard(obj, nodeInterop) {
	  if (!nodeInterop && obj && obj.__esModule) {
	    return obj;
	  }
	
	  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
	    return {
	      "default": obj
	    };
	  }
	
	  var cache = _getRequireWildcardCache(nodeInterop);
	
	  if (cache && cache.has(obj)) {
	    return cache.get(obj);
	  }
	
	  var newObj = {};
	  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	
	  for (var key in obj) {
	    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	
	      if (desc && (desc.get || desc.set)) {
	        Object.defineProperty(newObj, key, desc);
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	  }
	
	  newObj["default"] = obj;
	
	  if (cache) {
	    cache.set(obj, newObj);
	  }
	
	  return newObj;
	}
	
	module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _circularProgressBar = __webpack_require__(112);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CircularProgressBar = function CircularProgressBar(props) {
	  (0, _react.useEffect)(function () {
	    (0, _circularProgressBar.progress)(props.percentage);
	  });
	
	  return _react2.default.createElement(
	    "div",
	    {
	      className: "circular-progress-bar " + (props.size ? "circular-progress-bar--" + props.size : "")
	    },
	    _react2.default.createElement(
	      "div",
	      { className: "circular-progress-bar__title" },
	      props.title
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "circular-progress-bar__container" },
	      _react2.default.createElement("div", { className: "circular-progress-bar__inner" }),
	      _react2.default.createElement(
	        "div",
	        { className: "circular-progress-bar__number" },
	        props.percentage,
	        "%"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "circular-progress-bar__circle" },
	        _react2.default.createElement(
	          "div",
	          { className: "circular-progress-bar__bar circular-progress-bar--left" },
	          _react2.default.createElement("div", { className: "circular-progress-bar__line circular-progress-bar__line--left" })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "circular-progress-bar__bar circular-progress-bar--right" },
	          _react2.default.createElement("div", { className: "circular-progress-bar__line  circular-progress-bar__line--right" })
	        )
	      )
	    )
	  );
	};
	
	exports.default = CircularProgressBar;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ListItem = function ListItem(_ref) {
	  var id = _ref.id,
	      type = _ref.type,
	      designation = _ref.designation,
	      onDelete = _ref.onDelete,
	      updateUrl = _ref.updateUrl,
	      onChangeVisibility = _ref.onChangeVisibility,
	      isVisible = _ref.isVisible;
	
	  return _react2.default.createElement(
	    "li",
	    { className: "list__item" },
	    _react2.default.createElement(
	      "div",
	      { className: "list__text" },
	      _react2.default.createElement(
	        "span",
	        { className: "list__description" },
	        designation
	      ),
	      _react2.default.createElement(
	        "span",
	        { className: "list__type" },
	        type
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "list__action" },
	      _react2.default.createElement(
	        "button",
	        { className: "btn-image", onClick: onChangeVisibility },
	        isVisible ? _react2.default.createElement("img", {
	          src: __webpack_require__(123),
	          alt: "",
	          className: "list__action-item"
	        }) : _react2.default.createElement("img", {
	          src: __webpack_require__(122),
	          alt: "",
	          className: "list__action-item"
	        })
	      ),
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        { to: updateUrl + "/" + id, className: "btn-image" },
	        _react2.default.createElement("img", {
	          src: __webpack_require__(43),
	          alt: "",
	          className: "list__action-item"
	        })
	      ),
	      _react2.default.createElement(
	        "button",
	        { className: "btn-image", onClick: function onClick() {
	            return onDelete(id);
	          } },
	        _react2.default.createElement("img", {
	          src: __webpack_require__(41),
	          alt: "",
	          className: "list__action-item"
	        })
	      )
	    )
	  );
	};
	
	exports.default = ListItem;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LifeField = function LifeField(designation) {
	  _classCallCheck(this, LifeField);
	
	  this.id = Date.now() + Math.random(9) + 1;
	  this.designation = designation.trim();
	  this.createdAt = new Date().toUTCString();
	  this.isVisible = true;
	};
	
	exports.default = LifeField;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var List = function List(designation, type) {
	  _classCallCheck(this, List);
	
	  this.id = Date.now();
	  this.designation = designation.trim();
	  this.progress = 0;
	  this.isVisible = true;
	  this.type = type;
	  this.createdAt = new Date().toUTCString();
	};
	
	exports.default = List;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteAnualGoal = exports.updateAnualGoal = exports.createAnualGoal = undefined;
	
	var _anualGoals = __webpack_require__(35);
	
	var _anualGoals2 = _interopRequireDefault(_anualGoals);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createAnualGoal = exports.createAnualGoal = function createAnualGoal(anualGoal) {
	  return {
	    type: _anualGoals2.default.CREATE,
	    payload: anualGoal
	  };
	};
	
	var updateAnualGoal = exports.updateAnualGoal = function updateAnualGoal(id, anualGoal) {
	  return {
	    type: _anualGoals2.default.UPDATE,
	    payload: { id: id, anualGoal: anualGoal }
	  };
	};
	
	var deleteAnualGoal = exports.deleteAnualGoal = function deleteAnualGoal(id) {
	  return {
	    type: _anualGoals2.default.DELETE,
	    payload: id
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeLifeFieldVisibility = exports.deleteLifeField = exports.updateLifeField = exports.createLifeField = undefined;
	
	var _lifeFields = __webpack_require__(36);
	
	var _lifeFields2 = _interopRequireDefault(_lifeFields);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createLifeField = exports.createLifeField = function createLifeField(designation) {
	  return {
	    type: _lifeFields2.default.CREATE_LIFE_FIELD,
	    payload: designation
	  };
	};
	
	var updateLifeField = exports.updateLifeField = function updateLifeField(id, designation) {
	  return {
	    type: _lifeFields2.default.UPDATE_LIFE_FIELD,
	    payload: { id: id, designation: designation }
	  };
	};
	
	var deleteLifeField = exports.deleteLifeField = function deleteLifeField(id) {
	  return {
	    type: _lifeFields2.default.DELETE_LIFE_FIELD,
	    payload: id
	  };
	};
	
	var changeLifeFieldVisibility = exports.changeLifeFieldVisibility = function changeLifeFieldVisibility(id) {
	  return {
	    type: _lifeFields2.default.CHANGE_LIFE_FIELD_VISIBILITY,
	    payload: id
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AnualGoalsTypes = {
	  CREATE: "CREATE_ANUAL_GOAL",
	  UPDATE: "UPDATE_ANUAL_GOAL",
	  DELETE: "DELETE_ANUAL_GOAL"
	};
	
	exports.default = AnualGoalsTypes;

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LifeFieldsTypes = {
	  CREATE_LIFE_FIELD: "CREATE_LIFE_FIELD",
	  UPDATE_LIFE_FIELD: "UPDATE_LIFE_FIELD",
	  DELETE_LIFE_FIELD: "DELETE_LIFE_FIELD",
	  CHANGE_LIFE_FIELD_VISIBILITY: "CHANGE_LIFE_FIELD_VISIBILITY"
	};
	
	exports.default = LifeFieldsTypes;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MonthlyGoalsTypes = {
	  CREATE: "CREATE_MONTHLY_GOAL",
	  UPDATE: "UPDATE_MONTHLY_GOAL",
	  DELETE: "DELETE_MONTHLY_GOAL"
	};
	
	exports.default = MonthlyGoalsTypes;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ProjectsTypes = {
	  CREATE: "CREATE_PROJECT",
	  UPDATE: "UPDATE_PROJECT",
	  DELETE: "DELETE_PROJECT",
	  UPDATE_PROJECT_PROGRESS: "UPDATE_PROJECT_PROGRESS"
	};
	
	exports.default = ProjectsTypes;

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TasksType = {
	  CREATE: "CREATE_TASK",
	  CREATE_PROJECT_TASKS: "CREATE_PROJECT_TASKS",
	  UPDATE: "UPDATE_TASK",
	  DELETE: "DELETE_TASK",
	  DELETE_MANY: "DELETE_MANY_TASKS",
	  CHANGE_STATUS: "CHANGE_TASK_STATUS",
	  MOVE_TASK_UP: "MOVE_TASK_UP",
	  MOVE_TASK_DOWN: "MOVE_TASK_DOWN",
	  MOVE_TASKS_TO_LIST: "MOVE_TASKS_TO_LIST"
	};
	
	exports.default = TasksType;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UserTypes = {
	  SET_CURRENT_USER: "SET_CURRENT_USER"
	};
	
	exports.default = UserTypes;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/cross.59d7fd20.svg";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/dots-three-vertical.eb04bd9b.svg";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/edit.0e19f3de.svg";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/trash.90f76b9f.svg";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-env node */
	
	if (true) {
	  module.exports = __webpack_require__(126);
	} else {
	  module.exports = require('./umd/history.development.js');
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(65);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  if (false) {
	    // This branch is unreachable because this function is only called
	    // in production, but the condition is true only in development.
	    // Therefore if the branch is still here, dead code elimination wasn't
	    // properly applied.
	    // Don't change the message. React DevTools relies on it. Also make sure
	    // this message doesn't occur elsewhere in this function, or it will cause
	    // a false positive.
	    throw new Error('^_^');
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}
	
	if (true) {
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = __webpack_require__(135);
	} else {
	  module.exports = require('./cjs/react-dom.development.js');
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	var _interopRequireWildcard = __webpack_require__(28)["default"];
	
	exports.__esModule = true;
	exports["default"] = connectAdvanced;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(20));
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(21));
	
	var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(127));
	
	var _react = _interopRequireWildcard(__webpack_require__(1));
	
	var _reactIs = __webpack_require__(137);
	
	var _Subscription = __webpack_require__(26);
	
	var _useIsomorphicLayoutEffect = __webpack_require__(27);
	
	var _Context = __webpack_require__(8);
	
	var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
	    _excluded2 = ["reactReduxForwardedRef"];
	// Define some constant arrays just to avoid re-creating these
	var EMPTY_ARRAY = [];
	var NO_SUBSCRIPTION_ARRAY = [null, null];
	
	var stringifyComponent = function stringifyComponent(Comp) {
	  try {
	    return JSON.stringify(Comp);
	  } catch (err) {
	    return String(Comp);
	  }
	};
	
	function storeStateUpdatesReducer(state, action) {
	  var updateCount = state[1];
	  return [action.payload, updateCount + 1];
	}
	
	function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
	  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
	    return effectFunc.apply(void 0, effectArgs);
	  }, dependencies);
	}
	
	function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
	  // We want to capture the wrapper props and child props we used for later comparisons
	  lastWrapperProps.current = wrapperProps;
	  lastChildProps.current = actualChildProps;
	  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update
	
	  if (childPropsFromStoreUpdate.current) {
	    childPropsFromStoreUpdate.current = null;
	    notifyNestedSubs();
	  }
	}
	
	function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
	  // If we're not subscribed to the store, nothing to do here
	  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts
	
	  var didUnsubscribe = false;
	  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component
	
	  var checkForUpdates = function checkForUpdates() {
	    if (didUnsubscribe) {
	      // Don't run stale listeners.
	      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
	      return;
	    }
	
	    var latestStoreState = store.getState();
	    var newChildProps, error;
	
	    try {
	      // Actually run the selector with the most recent store state and wrapper props
	      // to determine what the child props should be
	      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
	    } catch (e) {
	      error = e;
	      lastThrownError = e;
	    }
	
	    if (!error) {
	      lastThrownError = null;
	    } // If the child props haven't changed, nothing to do here - cascade the subscription update
	
	
	    if (newChildProps === lastChildProps.current) {
	      if (!renderIsScheduled.current) {
	        notifyNestedSubs();
	      }
	    } else {
	      // Save references to the new child props.  Note that we track the "child props from store update"
	      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
	      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
	      // forcing another re-render, which we don't want.
	      lastChildProps.current = newChildProps;
	      childPropsFromStoreUpdate.current = newChildProps;
	      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render
	
	      forceComponentUpdateDispatch({
	        type: 'STORE_UPDATED',
	        payload: {
	          error: error
	        }
	      });
	    }
	  }; // Actually subscribe to the nearest connected ancestor (or store)
	
	
	  subscription.onStateChange = checkForUpdates;
	  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
	  // changed since we began.
	
	  checkForUpdates();
	
	  var unsubscribeWrapper = function unsubscribeWrapper() {
	    didUnsubscribe = true;
	    subscription.tryUnsubscribe();
	    subscription.onStateChange = null;
	
	    if (lastThrownError) {
	      // It's possible that we caught an error due to a bad mapState function, but the
	      // parent re-rendered without this component and we're about to unmount.
	      // This shouldn't happen as long as we do top-down subscriptions correctly, but
	      // if we ever do those wrong, this throw will surface the error in our tests.
	      // In that case, throw the error from here so it doesn't get lost.
	      throw lastThrownError;
	    }
	  };
	
	  return unsubscribeWrapper;
	}
	
	var initStateUpdates = function initStateUpdates() {
	  return [null, 0];
	};
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory, // options object:
	_ref) {
	  if (_ref === void 0) {
	    _ref = {};
	  }
	
	  var _ref2 = _ref,
	      _ref2$getDisplayName = _ref2.getDisplayName,
	      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
	    return "ConnectAdvanced(" + name + ")";
	  } : _ref2$getDisplayName,
	      _ref2$methodName = _ref2.methodName,
	      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
	      _ref2$renderCountProp = _ref2.renderCountProp,
	      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
	      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
	      _ref2$storeKey = _ref2.storeKey,
	      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
	      _ref2$withRef = _ref2.withRef,
	      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
	      _ref2$forwardRef = _ref2.forwardRef,
	      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
	      _ref2$context = _ref2.context,
	      context = _ref2$context === void 0 ? _Context.ReactReduxContext : _ref2$context,
	      connectOptions = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded);
	
	  if (false) {
	    if (renderCountProp !== undefined) {
	      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
	    }
	
	    if (withRef) {
	      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
	    }
	
	    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
	
	    if (storeKey !== 'store') {
	      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
	    }
	  }
	
	  var Context = context;
	  return function wrapWithConnect(WrappedComponent) {
	    if (false) {
	      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
	    }
	
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);
	    var selectorFactoryOptions = (0, _extends2["default"])({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });
	    var pure = connectOptions.pure;
	
	    function createChildSelector(store) {
	      return selectorFactory(store.dispatch, selectorFactoryOptions);
	    } // If we aren't running in "pure" mode, we don't want to memoize values.
	    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
	    // that just executes the given callback immediately.
	
	
	    var usePureOnlyMemo = pure ? _react.useMemo : function (callback) {
	      return callback();
	    };
	
	    function ConnectFunction(props) {
	      var _useMemo = (0, _react.useMemo)(function () {
	        // Distinguish between actual "data" props that were passed to the wrapper component,
	        // and values needed to control behavior (forwarded refs, alternate context instances).
	        // To maintain the wrapperProps object reference, memoize this destructuring.
	        var reactReduxForwardedRef = props.reactReduxForwardedRef,
	            wrapperProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded2);
	        return [props.context, reactReduxForwardedRef, wrapperProps];
	      }, [props]),
	          propsContext = _useMemo[0],
	          reactReduxForwardedRef = _useMemo[1],
	          wrapperProps = _useMemo[2];
	
	      var ContextToUse = (0, _react.useMemo)(function () {
	        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
	        // Memoize the check that determines which context instance we should use.
	        return propsContext && propsContext.Consumer && (0, _reactIs.isContextConsumer)( /*#__PURE__*/_react["default"].createElement(propsContext.Consumer, null)) ? propsContext : Context;
	      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available
	
	      var contextValue = (0, _react.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
	      // We'll check to see if it _looks_ like a Redux store first.
	      // This allows us to pass through a `store` prop that is just a plain value.
	
	      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
	      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
	
	      if (false) {
	        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
	      } // Based on the previous check, one of these must be true
	
	
	      var store = didStoreComeFromProps ? props.store : contextValue.store;
	      var childPropsSelector = (0, _react.useMemo)(function () {
	        // The child props selector needs the store reference as an input.
	        // Re-create this selector whenever the store changes.
	        return createChildSelector(store);
	      }, [store]);
	
	      var _useMemo2 = (0, _react.useMemo)(function () {
	        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	
	        // This Subscription's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var subscription = (0, _Subscription.createSubscription)(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `subscription` will then be null. This can
	        // probably be avoided if Subscription's listeners logic is changed to not call listeners
	        // that have been unsubscribed in the  middle of the notification loop.
	
	        // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `subscription` will then be null. This can
	        // probably be avoided if Subscription's listeners logic is changed to not call listeners
	        // that have been unsubscribed in the  middle of the notification loop.
	        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
	        return [subscription, notifyNestedSubs];
	      }, [store, didStoreComeFromProps, contextValue]),
	          subscription = _useMemo2[0],
	          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
	      // and memoize that value to avoid unnecessary context updates.
	
	
	      var overriddenContextValue = (0, _react.useMemo)(function () {
	        if (didStoreComeFromProps) {
	          // This component is directly subscribed to a store from props.
	          // We don't want descendants reading from this store - pass down whatever
	          // the existing context value is from the nearest connected ancestor.
	          return contextValue;
	        } // Otherwise, put this component's subscription instance into context, so that
	        // connected descendants won't update until after this component is done
	
	
	        return (0, _extends2["default"])({}, contextValue, {
	          subscription: subscription
	        });
	      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
	      // causes a change to the calculated child component props (or we caught an error in mapState)
	
	      var _useReducer = (0, _react.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
	          _useReducer$ = _useReducer[0],
	          previousStateUpdateResult = _useReducer$[0],
	          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards
	
	
	      if (previousStateUpdateResult && previousStateUpdateResult.error) {
	        throw previousStateUpdateResult.error;
	      } // Set up refs to coordinate values between the subscription effect and the render logic
	
	
	      var lastChildProps = (0, _react.useRef)();
	      var lastWrapperProps = (0, _react.useRef)(wrapperProps);
	      var childPropsFromStoreUpdate = (0, _react.useRef)();
	      var renderIsScheduled = (0, _react.useRef)(false);
	      var actualChildProps = usePureOnlyMemo(function () {
	        // Tricky logic here:
	        // - This render may have been triggered by a Redux store update that produced new child props
	        // - However, we may have gotten new wrapper props after that
	        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
	        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
	        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
	        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
	          return childPropsFromStoreUpdate.current;
	        } // TODO We're reading the store directly in render() here. Bad idea?
	        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
	        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
	        // to determine what the child props should be.
	
	
	        return childPropsSelector(store.getState(), wrapperProps);
	      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
	      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
	      // just useEffect instead to avoid the warning, since neither will run anyway.
	
	      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes
	
	      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
	      // We memoize the elements for the rendered child component as an optimization.
	
	      var renderedWrappedComponent = (0, _react.useMemo)(function () {
	        return /*#__PURE__*/_react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, actualChildProps, {
	          ref: reactReduxForwardedRef
	        }));
	      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
	      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.
	
	      var renderedChild = (0, _react.useMemo)(function () {
	        if (shouldHandleStateChanges) {
	          // If this component is subscribed to store updates, we need to pass its own
	          // subscription instance down to our descendants. That means rendering the same
	          // Context instance, and putting a different value into the context.
	          return /*#__PURE__*/_react["default"].createElement(ContextToUse.Provider, {
	            value: overriddenContextValue
	          }, renderedWrappedComponent);
	        }
	
	        return renderedWrappedComponent;
	      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
	      return renderedChild;
	    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.
	
	
	    var Connect = pure ? _react["default"].memo(ConnectFunction) : ConnectFunction;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = ConnectFunction.displayName = displayName;
	
	    if (forwardRef) {
	      var forwarded = _react["default"].forwardRef(function forwardConnectRef(props, ref) {
	        return /*#__PURE__*/_react["default"].createElement(Connect, (0, _extends2["default"])({}, props, {
	          reactReduxForwardedRef: ref
	        }));
	      });
	
	      forwarded.displayName = displayName;
	      forwarded.WrappedComponent = WrappedComponent;
	      return (0, _hoistNonReactStatics["default"])(forwarded, WrappedComponent);
	    }
	
	    return (0, _hoistNonReactStatics["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = _interopRequireDefault(__webpack_require__(54));
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	//
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	
	
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	//
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//
	
	
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    }; // allow detectFactoryAndVerify to get ownProps
	
	
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (false) (0, _verifyPlainObject["default"])(props, displayName, methodName);
	      return props;
	    };
	
	    return proxy;
	  };
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.useReduxContext = useReduxContext;
	
	var _react = __webpack_require__(1);
	
	var _Context = __webpack_require__(8);
	
	/**
	 * A hook to access the value of the `ReactReduxContext`. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @returns {any} the value of the `ReactReduxContext`
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useReduxContext } from 'react-redux'
	 *
	 * export const CounterComponent = ({ value }) => {
	 *   const { store } = useReduxContext()
	 *   return <div>{store.getState()}</div>
	 * }
	 */
	function useReduxContext() {
	  var contextValue = (0, _react.useContext)(_Context.ReactReduxContext);
	
	  if (false) {
	    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
	  }
	
	  return contextValue;
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.createStoreHook = createStoreHook;
	exports.useStore = void 0;
	
	var _react = __webpack_require__(1);
	
	var _Context = __webpack_require__(8);
	
	var _useReduxContext2 = __webpack_require__(50);
	
	/**
	 * Hook factory, which creates a `useStore` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useStore` hook bound to the specified context.
	 */
	function createStoreHook(context) {
	  if (context === void 0) {
	    context = _Context.ReactReduxContext;
	  }
	
	  var useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext2.useReduxContext : function () {
	    return (0, _react.useContext)(context);
	  };
	  return function useStore() {
	    var _useReduxContext = useReduxContext(),
	        store = _useReduxContext.store;
	
	    return store;
	  };
	}
	/**
	 * A hook to access the redux store.
	 *
	 * @returns {any} the redux store
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useStore } from 'react-redux'
	 *
	 * export const ExampleComponent = () => {
	 *   const store = useStore()
	 *   return <div>{store.getState()}</div>
	 * }
	 */
	
	
	var useStore = /*#__PURE__*/createStoreHook();
	exports.useStore = useStore;

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.setBatch = exports.getBatch = void 0;
	
	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}
	
	var batch = defaultNoopBatch; // Allow injecting another batching function later
	
	var setBatch = function setBatch(newBatch) {
	  return batch = newBatch;
	}; // Supply a getter just to skip dealing with ESM bindings
	
	
	exports.setBatch = setBatch;
	
	var getBatch = function getBatch() {
	  return batch;
	};
	
	exports.getBatch = getBatch;

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports["default"] = verifyPlainObject;
	
	var _isPlainObject = _interopRequireDefault(__webpack_require__(149));
	
	var _warning = _interopRequireDefault(__webpack_require__(55));
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject["default"])(value)) {
	    (0, _warning["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = warning;
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	
	
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createPersistoid;
	
	var _constants = __webpack_require__(9);
	
	// @TODO remove once flow < 0.63 support is no longer required.
	function createPersistoid(config) {
	  // defaults
	  var blacklist = config.blacklist || null;
	  var whitelist = config.whitelist || null;
	  var transforms = config.transforms || [];
	  var throttle = config.throttle || 0;
	  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants.KEY_PREFIX).concat(config.key);
	  var storage = config.storage;
	  var serialize;
	
	  if (config.serialize === false) {
	    serialize = function serialize(x) {
	      return x;
	    };
	  } else if (typeof config.serialize === 'function') {
	    serialize = config.serialize;
	  } else {
	    serialize = defaultSerialize;
	  }
	
	  var writeFailHandler = config.writeFailHandler || null; // initialize stateful values
	
	  var lastState = {};
	  var stagedState = {};
	  var keysToProcess = [];
	  var timeIterator = null;
	  var writePromise = null;
	
	  var update = function update(state) {
	    // add any changed keys to the queue
	    Object.keys(state).forEach(function (key) {
	      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop
	
	      if (lastState[key] === state[key]) return; // value unchanged? noop
	
	      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop
	
	      keysToProcess.push(key); // add key to queue
	    }); //if any key is missing in the new state which was present in the lastState,
	    //add it for processing too
	
	    Object.keys(lastState).forEach(function (key) {
	      if (state[key] === undefined && passWhitelistBlacklist(key) && keysToProcess.indexOf(key) === -1 && lastState[key] !== undefined) {
	        keysToProcess.push(key);
	      }
	    }); // start the time iterator if not running (read: throttle)
	
	    if (timeIterator === null) {
	      timeIterator = setInterval(processNextKey, throttle);
	    }
	
	    lastState = state;
	  };
	
	  function processNextKey() {
	    if (keysToProcess.length === 0) {
	      if (timeIterator) clearInterval(timeIterator);
	      timeIterator = null;
	      return;
	    }
	
	    var key = keysToProcess.shift();
	    var endState = transforms.reduce(function (subState, transformer) {
	      return transformer.in(subState, key, lastState);
	    }, lastState[key]);
	
	    if (endState !== undefined) {
	      try {
	        stagedState[key] = serialize(endState);
	      } catch (err) {
	        console.error('redux-persist/createPersistoid: error serializing state', err);
	      }
	    } else {
	      //if the endState is undefined, no need to persist the existing serialized content
	      delete stagedState[key];
	    }
	
	    if (keysToProcess.length === 0) {
	      writeStagedState();
	    }
	  }
	
	  function writeStagedState() {
	    // cleanup any removed keys just before write.
	    Object.keys(stagedState).forEach(function (key) {
	      if (lastState[key] === undefined) {
	        delete stagedState[key];
	      }
	    });
	    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
	  }
	
	  function passWhitelistBlacklist(key) {
	    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
	    if (blacklist && blacklist.indexOf(key) !== -1) return false;
	    return true;
	  }
	
	  function onWriteFail(err) {
	    // @TODO add fail handlers (typically storage full)
	    if (writeFailHandler) writeFailHandler(err);
	
	    if (err && ("production") !== 'production') {
	      console.error('Error storing data', err);
	    }
	  }
	
	  var flush = function flush() {
	    while (keysToProcess.length !== 0) {
	      processNextKey();
	    }
	
	    return writePromise || Promise.resolve();
	  }; // return `persistoid`
	
	
	  return {
	    update: update,
	    flush: flush
	  };
	} // @NOTE in the future this may be exposed via config
	
	
	function defaultSerialize(data) {
	  return JSON.stringify(data);
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = getStoredState;
	
	var _constants = __webpack_require__(9);
	
	function getStoredState(config) {
	  var transforms = config.transforms || [];
	  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants.KEY_PREFIX).concat(config.key);
	  var storage = config.storage;
	  var debug = config.debug;
	  var deserialize;
	
	  if (config.deserialize === false) {
	    deserialize = function deserialize(x) {
	      return x;
	    };
	  } else if (typeof config.deserialize === 'function') {
	    deserialize = config.deserialize;
	  } else {
	    deserialize = defaultDeserialize;
	  }
	
	  return storage.getItem(storageKey).then(function (serialized) {
	    if (!serialized) return undefined;else {
	      try {
	        var state = {};
	        var rawState = deserialize(serialized);
	        Object.keys(rawState).forEach(function (key) {
	          state[key] = transforms.reduceRight(function (subState, transformer) {
	            return transformer.out(subState, key, rawState);
	          }, deserialize(rawState[key]));
	        });
	        return state;
	      } catch (err) {
	        if (false) console.log("redux-persist/getStoredState: Error restoring data ".concat(serialized), err);
	        throw err;
	      }
	    }
	  });
	}
	
	function defaultDeserialize(serial) {
	  return JSON.parse(serial);
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	var _exportNames = {
	  persistReducer: true,
	  persistCombineReducers: true,
	  persistStore: true,
	  createMigrate: true,
	  createTransform: true,
	  getStoredState: true,
	  createPersistoid: true,
	  purgeStoredState: true
	};
	exports.purgeStoredState = exports.createPersistoid = exports.getStoredState = exports.createTransform = exports.createMigrate = exports.persistStore = exports.persistCombineReducers = exports.persistReducer = void 0;
	
	var _persistReducer = _interopRequireDefault(__webpack_require__(59));
	
	exports.persistReducer = _persistReducer.default;
	
	var _persistCombineReducers = _interopRequireDefault(__webpack_require__(158));
	
	exports.persistCombineReducers = _persistCombineReducers.default;
	
	var _persistStore = _interopRequireDefault(__webpack_require__(159));
	
	exports.persistStore = _persistStore.default;
	
	var _createMigrate = _interopRequireDefault(__webpack_require__(156));
	
	exports.createMigrate = _createMigrate.default;
	
	var _createTransform = _interopRequireDefault(__webpack_require__(157));
	
	exports.createTransform = _createTransform.default;
	
	var _getStoredState = _interopRequireDefault(__webpack_require__(57));
	
	exports.getStoredState = _getStoredState.default;
	
	var _createPersistoid = _interopRequireDefault(__webpack_require__(56));
	
	exports.createPersistoid = _createPersistoid.default;
	
	var _purgeStoredState = _interopRequireDefault(__webpack_require__(60));
	
	exports.purgeStoredState = _purgeStoredState.default;
	
	var _constants = __webpack_require__(9);
	
	Object.keys(_constants).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  exports[key] = _constants[key];
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = persistReducer;
	
	var _constants = __webpack_require__(9);
	
	var _autoMergeLevel = _interopRequireDefault(__webpack_require__(160));
	
	var _createPersistoid = _interopRequireDefault(__webpack_require__(56));
	
	var _getStoredState = _interopRequireDefault(__webpack_require__(57));
	
	var _purgeStoredState = _interopRequireDefault(__webpack_require__(60));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
	
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
	
	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	
	var DEFAULT_TIMEOUT = 5000;
	/*
	  @TODO add validation / handling for:
	  - persisting a reducer which has nested _persist
	  - handling actions that fire before reydrate is called
	*/
	
	function persistReducer(config, baseReducer) {
	  if (false) {
	    if (!config) throw new Error('config is required for persistReducer');
	    if (!config.key) throw new Error('key is required in persistor config');
	    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
	  }
	
	  var version = config.version !== undefined ? config.version : _constants.DEFAULT_VERSION;
	  var debug = config.debug || false;
	  var stateReconciler = config.stateReconciler === undefined ? _autoMergeLevel.default : config.stateReconciler;
	  var getStoredState = config.getStoredState || _getStoredState.default;
	  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
	  var _persistoid = null;
	  var _purge = false;
	  var _paused = true;
	
	  var conditionalUpdate = function conditionalUpdate(state) {
	    // update the persistoid only if we are rehydrated and not paused
	    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
	    return state;
	  };
	
	  return function (state, action) {
	    var _ref = state || {},
	        _persist = _ref._persist,
	        rest = _objectWithoutProperties(_ref, ["_persist"]); // $FlowIgnore need to update State type
	
	
	    var restState = rest;
	
	    if (action.type === _constants.PERSIST) {
	      var _sealed = false;
	
	      var _rehydrate = function _rehydrate(payload, err) {
	        // dev warning if we are already sealed
	        if (false) console.error("redux-persist: rehydrate for \"".concat(config.key, "\" called after timeout."), payload, err); // only rehydrate if we are not already sealed
	
	        if (!_sealed) {
	          action.rehydrate(config.key, payload, err);
	          _sealed = true;
	        }
	      };
	
	      timeout && setTimeout(function () {
	        !_sealed && _rehydrate(undefined, new Error("redux-persist: persist timed out for persist key \"".concat(config.key, "\"")));
	      }, timeout); // @NOTE PERSIST resumes if paused.
	
	      _paused = false; // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set
	
	      if (!_persistoid) _persistoid = (0, _createPersistoid.default)(config); // @NOTE PERSIST can be called multiple times, noop after the first
	
	      if (_persist) {
	        // We still need to call the base reducer because there might be nested
	        // uses of persistReducer which need to be aware of the PERSIST action
	        return _objectSpread({}, baseReducer(restState, action), {
	          _persist: _persist
	        });
	      }
	
	      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');
	      action.register(config.key);
	      getStoredState(config).then(function (restoredState) {
	        var migrate = config.migrate || function (s, v) {
	          return Promise.resolve(s);
	        };
	
	        migrate(restoredState, version).then(function (migratedState) {
	          _rehydrate(migratedState);
	        }, function (migrateErr) {
	          if (false) console.error('redux-persist: migration error', migrateErr);
	
	          _rehydrate(undefined, migrateErr);
	        });
	      }, function (err) {
	        _rehydrate(undefined, err);
	      });
	      return _objectSpread({}, baseReducer(restState, action), {
	        _persist: {
	          version: version,
	          rehydrated: false
	        }
	      });
	    } else if (action.type === _constants.PURGE) {
	      _purge = true;
	      action.result((0, _purgeStoredState.default)(config));
	      return _objectSpread({}, baseReducer(restState, action), {
	        _persist: _persist
	      });
	    } else if (action.type === _constants.FLUSH) {
	      action.result(_persistoid && _persistoid.flush());
	      return _objectSpread({}, baseReducer(restState, action), {
	        _persist: _persist
	      });
	    } else if (action.type === _constants.PAUSE) {
	      _paused = true;
	    } else if (action.type === _constants.REHYDRATE) {
	      // noop on restState if purging
	      if (_purge) return _objectSpread({}, restState, {
	        _persist: _objectSpread({}, _persist, {
	          rehydrated: true
	        }) // @NOTE if key does not match, will continue to default else below
	
	      });
	
	      if (action.key === config.key) {
	        var reducedState = baseReducer(restState, action);
	        var inboundState = action.payload; // only reconcile state if stateReconciler and inboundState are both defined
	
	        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;
	
	        var _newState = _objectSpread({}, reconciledRest, {
	          _persist: _objectSpread({}, _persist, {
	            rehydrated: true
	          })
	        });
	
	        return conditionalUpdate(_newState);
	      }
	    } // if we have not already handled PERSIST, straight passthrough
	
	
	    if (!_persist) return baseReducer(state, action); // run base reducer:
	    // is state modified ? return original : return updated
	
	    var newState = baseReducer(restState, action);
	    if (newState === restState) return state;
	    return conditionalUpdate(_objectSpread({}, newState, {
	      _persist: _persist
	    }));
	  };
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = purgeStoredState;
	
	var _constants = __webpack_require__(9);
	
	function purgeStoredState(config) {
	  var storage = config.storage;
	  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants.KEY_PREFIX).concat(config.key);
	  return storage.removeItem(storageKey, warnIfRemoveError);
	}
	
	function warnIfRemoveError(err) {
	  if (err && ("production") !== 'production') {
	    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
	  }
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFoklEQVR42uVbQWgbRxR9f3aq3agh2EaUXGJMoKHkUGjsJjaW7RxKCCFQcrB9LLQkBxvXRx9LjzmmJjoktJCj7UMpmFBKD7FsYTmN3VsoKQTjXHIItgiJot1o5ufglSLLkixppV3JejDIrGFm/pv358/s/k9oIubjcbE4aPTahh5k8FdM+AJAH4DTALoYCAEAAQ6AFICXALaJ8R+B/jWVSE4k1c7M6Khu1hyp0R2O726JF6fSUUV6nAnXGDjrcYLPifHQYLF05nV4bannQkPJaBgBI04ikjH0LSa+qfdXueEQwDYx3beUuLcaGn7VEgREnUTENvScJp4CEG6G4SWQFkwxU4nbax6JqJuAq2825O4JZ0oR/8xAl0+GF08+ZTD91PMuFPvz5KWsbwQMZdfOvxf6AQMDQRhewognn2jx3bqMPm06AZfU6vdZ4rsMWEEbXmRIRjJNbxgjvzWFgCvpx3LPtO+4vt6yEEyxbtuc/St8sSqXqIqAy5lE+G1ILSjgetAGVgMDWP7UMSYfWcNpzwRcziTCb0LqDwa+CdqwWkDA3ycd49ujSKhIwJX0Y7lnZX5vl5UvhgEsd2esG5XcQVTqYM+072jgOrlMtVvTwPU9075TycayCnB3+185iKVrIAiAZPqhXHQoScBQdu28I/QmWizUeUAmpEV/qXPCIRe4+nZDuocciwEck2a9F/rB1Tcb8kgCdi1nioGBoP230Y2Bgd0TzqEzzAEXiDqJyDup/m/22Z7Ak5tibLHwWb9emWDQQnPHRepE1vi88AJ1QAG2oeYAdDV7NcpNz4dxu2xDzxWOmidgxElENGHKD58sDfZlP9DEUyNOInKIgIyhbwEI++GPQSnAHTvs2vqRgPHdLcHEN/3alYNUAANg4pvju1siT8CLU+koA31+7chBKsCNCH0vTqWjeQIU6XE/43LgCnBtBgAxH48LJlzzMyYHrQACwIRr8ysrQi4OGr0MddbPM39pEhhcgZ4m4OzikOyVtqEHy0/KT5Dvc7ANPSgZ3O/3ja9FFAAG90smnAt+9YEgFMCEcxJAX6cqgIA+CeC0p2GJJ/PRtfrf5OF+KEnAZI39AAwvF6jTNKDjtna/0taDLTEaqAdd0PG6BSwARzIQao09oD54mTsDIen+0bbwMncCIGk/OaFuFwgaXhRAgCMBpBj4rN5O+vXKRM2bIFFyk0Z3DvTD8V4wBmvdBD0qICUBvCQPBCD/Giu3FlX8Mk8COEDAvvFYqKkfeD7BvpQAthn40ls/NVJW8mkg54BtSYxn1BJhwP+TIDGeSQJtss9xoHUUQJvSVCKppPJ14LLT8XlEU4mkmEiqHQKed9obIQKeT6xnd8TM6KgmxsNOeyNEjIczY2NaAIDBYqnTFGCwWALcl6JnXofXBLDdKQoQwPaZ1+G1PAFLPRc0Md3vFAUQ0/1cym3+y5ClxD0C0h2ggLSlxL3cqHkCVkPDrwRT7LgrQDDFVst9HTaVuE1A6hgrIGUqcfvgqEW4qFZ/zBJXTCxqV0im2cfGyC+Fzw5liPRkQjEBPPE1JvvQBPCkJ2PGiu0tqchckhQfkyQpqiVJCgDWZfSpZJoOetUa1STTdLlM8vJ7EoCv1epd1eLJ0UfBYIr9Y4xMl/t/xUzRbtucNYDloFew3mYAy922OVvJxooKAD4mS+s2S5YWjUiWLiThbUgt6DZJmiZg+WSV6fKimg4fWcPp7ox1QzDFAP9ubPWcMAVTrCdj3ajGeJes2pArmUHrhcjmlswUIlc0pVukaEp4KJqqygWKsS6jTyNpa0gyzfpxd6h0tpdMs5G0OVSP8UCdCihEYeEk+1Q4Sa1QOFmMwtJZBvqaZHjrlc4Wo1TxdL1fHVyZt0fxdCnMr6yIxSGZK5/vZ8I57KvjqPL5ZwTaNJVITqxnd2bGxppWPv8BjvsO2DRoOPAAAAAASUVORK5CYII="

/***/ },
/* 62 */
/***/ function(module, exports) {

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	}
	
	module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(62);
	
	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	
	  return keys;
	}
	
	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
	      defineProperty(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	
	  return target;
	}
	
	module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 64 */
/***/ function(module, exports) {

	function _typeof(obj) {
	  "@babel/helpers - typeof";
	
	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },
/* 65 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _topbar = __webpack_require__(77);
	
	var _topbar2 = _interopRequireDefault(_topbar);
	
	var _reactRedux = __webpack_require__(2);
	
	var _main = __webpack_require__(74);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _home = __webpack_require__(91);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _addTask = __webpack_require__(90);
	
	var _addTask2 = _interopRequireDefault(_addTask);
	
	var _index = __webpack_require__(95);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(97);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _create = __webpack_require__(96);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _create3 = __webpack_require__(94);
	
	var _create4 = _interopRequireDefault(_create3);
	
	var _index5 = __webpack_require__(84);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _anualCronology = __webpack_require__(82);
	
	var _anualCronology2 = _interopRequireDefault(_anualCronology);
	
	var _create5 = __webpack_require__(83);
	
	var _create6 = _interopRequireDefault(_create5);
	
	var _index7 = __webpack_require__(99);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _create7 = __webpack_require__(98);
	
	var _create8 = _interopRequireDefault(_create7);
	
	var _index9 = __webpack_require__(101);
	
	var _index10 = _interopRequireDefault(_index9);
	
	var _create9 = __webpack_require__(100);
	
	var _create10 = _interopRequireDefault(_create9);
	
	var _projectTasks = __webpack_require__(102);
	
	var _projectTasks2 = _interopRequireDefault(_projectTasks);
	
	var _signin = __webpack_require__(88);
	
	var _signin2 = _interopRequireDefault(_signin);
	
	var _signup = __webpack_require__(89);
	
	var _signup2 = _interopRequireDefault(_signup);
	
	var _forgotPassword = __webpack_require__(85);
	
	var _forgotPassword2 = _interopRequireDefault(_forgotPassword);
	
	var _resetToken = __webpack_require__(87);
	
	var _resetToken2 = _interopRequireDefault(_resetToken);
	
	var _passwordReset = __webpack_require__(86);
	
	var _passwordReset2 = _interopRequireDefault(_passwordReset);
	
	var _index11 = __webpack_require__(93);
	
	var _index12 = _interopRequireDefault(_index11);
	
	var _addToInbox = __webpack_require__(92);
	
	var _addToInbox2 = _interopRequireDefault(_addToInbox);
	
	var _overlay = __webpack_require__(75);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _sidebar = __webpack_require__(76);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _spinner = __webpack_require__(69);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _modal = __webpack_require__(68);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  //const currentUser = useSelector((state) => state.user.currentUser);
	
	  var currentUser = true;
	
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    _react2.default.createElement(_topbar2.default, null),
	    _react2.default.createElement(_sidebar2.default, null),
	    _react2.default.createElement(_overlay2.default, null),
	    _react2.default.createElement(_spinner2.default, null),
	    _react2.default.createElement(_modal2.default, null),
	    currentUser ? _react2.default.createElement(
	      _reactRouterDom.Routes,
	      null,
	      _react2.default.createElement(
	        _reactRouterDom.Route,
	        { exact: true, path: "/", element: _react2.default.createElement(_main2.default, null) },
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "home", element: _react2.default.createElement(_home2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "task/create", element: _react2.default.createElement(_addTask2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "task/update/:id", element: _react2.default.createElement(_addTask2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "inbox", element: _react2.default.createElement(_index12.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "inbox/create", element: _react2.default.createElement(_addToInbox2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "inbox/update/:id", element: _react2.default.createElement(_addToInbox2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "anual-goals", element: _react2.default.createElement(_index6.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "monthly-goals", element: _react2.default.createElement(_index8.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "anual-goals/create",
	          element: _react2.default.createElement(_create6.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "anual-goals/update/:id",
	          element: _react2.default.createElement(_create6.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "anual-goals/cronology/:id",
	          element: _react2.default.createElement(_anualCronology2.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "monthly-goals/create",
	          element: _react2.default.createElement(_create8.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "monthly-goals/create/:anualGoalId/:month",
	          element: _react2.default.createElement(_create8.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "monthly-goals/update/:id",
	          element: _react2.default.createElement(_create8.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "projects", element: _react2.default.createElement(_index10.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "projects/create",
	          element: _react2.default.createElement(_create10.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "projects/update/:id",
	          element: _react2.default.createElement(_create10.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "projects/add-tasks/:id",
	          element: _react2.default.createElement(_projectTasks2.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "life-fields", element: _react2.default.createElement(_index2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "create-life-field",
	          element: _react2.default.createElement(_create4.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "update-life-field/:id",
	          element: _react2.default.createElement(_create4.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "lists/", element: _react2.default.createElement(_index4.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "lists/create", element: _react2.default.createElement(_create2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "lists/update/:id",
	          element: _react2.default.createElement(_create2.default, null)
	        })
	      )
	    ) : _react2.default.createElement(
	      _reactRouterDom.Routes,
	      null,
	      _react2.default.createElement(
	        _reactRouterDom.Route,
	        { exact: true, path: "/", element: _react2.default.createElement(_main2.default, null) },
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "", element: _react2.default.createElement(_signin2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/signin", element: _react2.default.createElement(_signin2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/signup", element: _react2.default.createElement(_signup2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "/forgot-password",
	          element: _react2.default.createElement(_forgotPassword2.default, null)
	        }),
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/reset-token", element: _react2.default.createElement(_resetToken2.default, null) }),
	        _react2.default.createElement(_reactRouterDom.Route, {
	          exact: true,
	          path: "/password-reset/:token",
	          element: _react2.default.createElement(_passwordReset2.default, null)
	        })
	      )
	    )
	  );
	};
	
	exports.default = App;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _subMenu = __webpack_require__(70);
	
	var _subMenu2 = _interopRequireDefault(_subMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Menu = function Menu(_ref) {
	  var showMenu = _ref.showMenu,
	      onDelete = _ref.onDelete,
	      onMoveUp = _ref.onMoveUp,
	      onMoveDown = _ref.onMoveDown,
	      onMoveToList = _ref.onMoveToList,
	      onEdit = _ref.onEdit,
	      numSelectedItems = _ref.numSelectedItems,
	      canSubmenuEdit = _ref.canSubmenuEdit;
	
	  var _useState = (0, _react.useState)(false),
	      _useState2 = _slicedToArray(_useState, 2),
	      showSubmenu = _useState2[0],
	      setShowSubmenu = _useState2[1];
	
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    showMenu ? _react2.default.createElement("div", { className: "height-5" }) : null,
	    _react2.default.createElement(
	      "ul",
	      { className: "menu " + (showMenu ? "menu--show" : "") },
	      _react2.default.createElement(
	        "div",
	        { className: "menu__container" },
	        _react2.default.createElement(
	          "li",
	          {
	            className: "menu__item " + (numSelectedItems > 1 ? "menu__item--disabled" : ""),
	            onClick: onMoveUp
	          },
	          _react2.default.createElement("img", {
	            src: __webpack_require__(118),
	            className: "menu__icon",
	            alt: "Mover para cim"
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "menu__text" },
	            "Subir"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          {
	            className: "menu__item " + (numSelectedItems > 1 ? "menu__item--disabled" : ""),
	            onClick: onMoveDown
	          },
	          _react2.default.createElement("img", {
	            src: __webpack_require__(119),
	            className: "menu__icon",
	            alt: "Mover para cim"
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "menu__text" },
	            "Descer"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          { className: "menu__item", onClick: onMoveToList },
	          _react2.default.createElement("img", {
	            src: __webpack_require__(124),
	            className: "menu__icon",
	            alt: "Mover para lista"
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "menu__text" },
	            "Mover"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          { className: "menu__item", onClick: onDelete },
	          _react2.default.createElement("img", {
	            src: __webpack_require__(44),
	            className: "menu__icon",
	            alt: "Mover para cim"
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "menu__text" },
	            "Eliminar"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          {
	            className: "menu__item menu__item--more",
	            onClick: function onClick() {
	              return setShowSubmenu(function (currentValue) {
	                return !currentValue;
	              });
	            }
	          },
	          _react2.default.createElement("img", {
	            src: __webpack_require__(42),
	            className: "menu__icon",
	            alt: "Mover para cim"
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "menu__text" },
	            "Mais"
	          ),
	          _react2.default.createElement(_subMenu2.default, {
	            canSubmenuEdit: canSubmenuEdit,
	            onEdit: onEdit,
	            showSubmenu: showSubmenu,
	            numSelectedItems: numSelectedItems
	          })
	        )
	      )
	    )
	  );
	};
	
	exports.default = Menu;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = function Modal() {
	  return _react2.default.createElement(
	    "div",
	    { className: "modal" },
	    _react2.default.createElement(
	      "div",
	      { className: "modal__header" },
	      _react2.default.createElement(
	        "p",
	        { className: "modal__title" },
	        "Titulo"
	      ),
	      _react2.default.createElement("img", {
	        src: __webpack_require__(41),
	        alt: "",
	        className: "modal__dismiss"
	      })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "modal__body" },
	      _react2.default.createElement(
	        "p",
	        { className: "modal__text" },
	        "Texto aqui"
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "modal__footer" },
	      _react2.default.createElement(
	        "button",
	        { className: "btn modal__btn modal__btn--cancel" },
	        "Nao"
	      ),
	      _react2.default.createElement(
	        "button",
	        { className: "btn modal__btn btn--primary modal__btn--submit" },
	        "Sim"
	      )
	    )
	  );
	};
	
	exports.default = Modal;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spinner = function Spinner(_ref) {
	  var type = _ref.type;
	  return _react2.default.createElement(
	    "div",
	    { className: "spinner__container" },
	    _react2.default.createElement("div", { className: "spinner " + type })
	  );
	};
	
	exports.default = Spinner;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SubMenu = function SubMenu(_ref) {
	  var showSubmenu = _ref.showSubmenu,
	      onEdit = _ref.onEdit,
	      canSubmenuEdit = _ref.canSubmenuEdit,
	      numSelectedItems = _ref.numSelectedItems;
	
	  return _react2.default.createElement(
	    "ul",
	    { className: "submenu " + (showSubmenu ? "submenu--show" : "") },
	    canSubmenuEdit && numSelectedItems == 1 ? _react2.default.createElement(
	      "li",
	      { className: "submenu__item submenu__item--edit", onClick: onEdit },
	      "Editar"
	    ) : null
	  );
	};
	
	exports.default = SubMenu;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lifeField = __webpack_require__(31);
	
	var _lifeField2 = _interopRequireDefault(_lifeField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LIFE_FIELDS_DATA = [new _lifeField2.default("Formacao Academica"), new _lifeField2.default("Formacao Profissional"), new _lifeField2.default("Experiencia Profissional"), new _lifeField2.default("Networking Profissional"), new _lifeField2.default("Inteligencia Emocional"), new _lifeField2.default("Inteligencia Social"), new _lifeField2.default("Inteligencia na Saude"), new _lifeField2.default("Inteligencia Financeira"), new _lifeField2.default("Inteligencia Logica")];
	
	exports.default = LIFE_FIELDS_DATA;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _list = __webpack_require__(32);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LISTS_DATA = [new _list2.default("Semana x - y", "action")];
	
	exports.default = LISTS_DATA;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(47);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(66);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _store = __webpack_require__(111);
	
	var _reactRedux = __webpack_require__(2);
	
	__webpack_require__(117);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store.store },
	  _react2.default.createElement(
	    _reactRouterDom.BrowserRouter,
	    null,
	    _react2.default.createElement(_App2.default, null)
	  )
	), document.getElementById("root"));

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MainLayout = function MainLayout() {
	  return _react2.default.createElement(
	    "main",
	    { className: "main" },
	    _react2.default.createElement(_reactRouterDom.Outlet, null)
	  );
	};
	
	exports.default = MainLayout;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OverlayLayout = function OverlayLayout() {
	  return _react2.default.createElement("div", { className: "overlay" });
	};
	
	exports.default = OverlayLayout;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _user = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SidebarLayout = function SidebarLayout(props) {
	  //const currentUser = useSelector((state) => state.user.currentUser);
	  var currentUser = true;
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouterDom.useNavigate)();
	
	  var user = null;
	  var token = null;
	  return _react2.default.createElement(
	    "nav",
	    { className: "sidebar " },
	    _react2.default.createElement(
	      _reactRouterDom.Link,
	      { to: currentUser ? "/home" : "/signin", className: "sidebar__brand" },
	      "Kwanga"
	    ),
	    currentUser ? _react2.default.createElement(
	      "ul",
	      { className: "sidebar__items" },
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "/inbox", className: "sidebar__link" },
	          "Entradas"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "/home", className: "sidebar__link" },
	          "Proximas Accoes"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "anual-goals", className: "sidebar__link" },
	          "Objectivos Anuais"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "monthly-goals", className: "sidebar__link" },
	          "Objectivos Mensais"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "projects", className: "sidebar__link" },
	          "Gerir Projectos"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "life-fields", className: "sidebar__link" },
	          "Areas da Vida"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "lists", className: "sidebar__link" },
	          "Listas"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item sidebar__item--bottom" },
	        _react2.default.createElement(
	          "div",
	          {
	            onClick: function onClick() {
	              dispatch((0, _user.setCurrentUser)({ user: user, token: token }));
	
	              navigate("/login", { replace: true });
	            },
	            className: "sidebar__link"
	          },
	          "Sair"
	        )
	      )
	    ) : _react2.default.createElement(
	      "ul",
	      { className: "sidebar__items" },
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "signin", className: "sidebar__link" },
	          "Entrar"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        { className: "sidebar__item" },
	        _react2.default.createElement(
	          _reactRouterDom.Link,
	          { to: "signup", className: "sidebar__link" },
	          "Registar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = SidebarLayout;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _topbar = __webpack_require__(114);
	
	var _topbar2 = _interopRequireDefault(_topbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TopbarLayout = function TopbarLayout(props) {
	  var _useState = (0, _react.useState)(document.title),
	      _useState2 = _slicedToArray(_useState, 2),
	      pageTitle = _useState2[0],
	      setPageTitle = _useState2[1];
	
	  var location = (0, _reactRouter.useLocation)();
	
	  (0, _react.useEffect)(function () {
	    _topbar2.default.hideSidebar();
	    setPageTitle(document.title);
	  }, [location, document.title]);
	
	  var showSidebar = function showSidebar() {
	    _topbar2.default.showSidebar();
	  };
	
	  return _react2.default.createElement(
	    "header",
	    { className: "topbar" },
	    _react2.default.createElement("img", {
	      onClick: showSidebar,
	      className: "topbar__icon",
	      alt: "Menu",
	      src: __webpack_require__(125)
	    }),
	    _react2.default.createElement(
	      "h1",
	      { className: "topbar__title" },
	      pageTitle
	    )
	  );
	};
	
	exports.default = TopbarLayout;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AnualGoalModel = function AnualGoalModel(year, lifeFieldId, description) {
	  var progress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	  _classCallCheck(this, AnualGoalModel);
	
	  this.id = Date.now();
	  this.year = +year;
	  this.lifeFieldId = lifeFieldId;
	  this.description = description.trim();
	  this.progress = progress;
	  this.createdAt = new Date().toUTCString();
	};
	
	exports.default = AnualGoalModel;

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AnualGoalModel = function AnualGoalModel(month, description, anualGoalId) {
	  _classCallCheck(this, AnualGoalModel);
	
	  this.id = Date.now();
	  this.month = month;
	  this.anualGoalId = anualGoalId;
	  this.description = description.trim();
	  this.progress = 0;
	  this.createdAt = new Date().toUTCString();
	};
	
	exports.default = AnualGoalModel;

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProjectModel = function ProjectModel(title, purpose, vision, monthlyGoalId) {
	  _classCallCheck(this, ProjectModel);
	
	  this.id = Date.now();
	  this.title = title.trim();
	  this.purpose = purpose.trim();
	  this.vision = vision.trim();
	  this.monthlyGoalId = monthlyGoalId;
	  this.createdAt = new Date().toUTCString();
	  this.progress = 0;
	};
	
	exports.default = ProjectModel;

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Task = function Task(description) {
	  var listId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var projectId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var dueDate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	  _classCallCheck(this, Task);
	
	  this.id = Date.now();
	  this.description = description.trim();
	  this.listId = listId;
	  this.projectId = projectId;
	  this.dueDate = dueDate;
	  this.done = done;
	  this.createdAt = new Date().toUTCString();
	};
	
	exports.default = Task;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(4);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _monthlyGoals = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AnualCronology = function AnualCronology() {
	  var params = (0, _reactRouter.useParams)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	
	  var anualGoal = (0, _reactRedux.useSelector)(function (state) {
	    return state.anualGoals.goals.find(function (goal) {
	      return goal.id == params.id;
	    });
	  });
	
	  var monthlyGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.monthlyGoals.goals.filter(function (goal) {
	      return goal.anualGoalId == params.id;
	    });
	  });
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Calendario Anual";
	  }, []);
	
	  var handleEdit = function handleEdit(id) {
	    navigate("/monthly-goals/update/" + id);
	  };
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmar remocao";
	    var msg = "Tem certeza que deseja remover este objectivo?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _monthlyGoals.deleteMonthlyGoal)(id));
	    });
	  };
	
	  (0, _react.useEffect)(function () {}, []);
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "card" },
	        _react2.default.createElement(
	          "h4",
	          { className: "text-primary" },
	          "Objectivo Anual"
	        ),
	        _react2.default.createElement(
	          "p",
	          { className: "text-bold mt-1" },
	          " ",
	          anualGoal.description
	        )
	      ),
	      months.map(function (month, i) {
	        return _react2.default.createElement(
	          "div",
	          { key: i, className: "goals__section mt-3" },
	          _react2.default.createElement(
	            "div",
	            { className: "goals__header" },
	            _react2.default.createElement(
	              "div",
	              { className: "goals__section-title" },
	              month
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "goals__header-right" },
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                {
	                  to: "/monthly-goals/create/" + params.id + "/" + i,
	                  className: "btn-image"
	                },
	                _react2.default.createElement("img", {
	                  src: __webpack_require__(61),
	                  alt: "Adicionar objectivos mensais",
	                  className: "goals__header-icon"
	                })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "ul",
	            { className: "goals__list" },
	            monthlyGoals.filter(function (goal) {
	              return goal.month == i;
	            }).map(function (goal, j) {
	              return _react2.default.createElement(_goalItem2.default, {
	                key: j,
	                id: goal.id,
	                description: goal.description,
	                progress: goal.progress,
	                onEditItem: function onEditItem() {
	                  return handleEdit(goal.id);
	                },
	                onDeleteItem: function onDeleteItem() {
	                  return handleDelete(goal.id);
	                }
	              });
	            })
	          )
	        );
	      })
	    )
	  );
	};
	
	exports.default = AnualCronology;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _anualGoals = __webpack_require__(33);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateAnualGoal = function CreateAnualGoal() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      year = _useState2[0],
	      setYear = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      lifeField = _useState4[0],
	      setLifeField = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      description = _useState6[0],
	      setDescription = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorYear = _useState8[0],
	      setErrorYear = _useState8[1];
	
	  var _useState9 = (0, _react.useState)(""),
	      _useState10 = _slicedToArray(_useState9, 2),
	      errorLifeField = _useState10[0],
	      setErrorLifeField = _useState10[1];
	
	  var _useState11 = (0, _react.useState)(""),
	      _useState12 = _slicedToArray(_useState11, 2),
	      errorDescription = _useState12[0],
	      setErrorDescription = _useState12[1];
	
	  var lifeFields = (0, _reactRedux.useSelector)(function (state) {
	    return state.lifeFields.fields;
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = (params.id ? "Actualizar" : "Criar") + "  Objectivo Anual";
	  });
	
	  var params = (0, _reactRouter.useParams)();
	
	  var anualGoal = null;
	
	  if (params.id) {
	    anualGoal = (0, _reactRedux.useSelector)(function (state) {
	      return state.anualGoals.goals.find(function (goal) {
	        return goal.id == params.id;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    if (anualGoal) {
	      setYear(anualGoal.year);
	      setDescription(anualGoal.description);
	      setLifeField(anualGoal.lifeFieldId);
	    }
	  }, [anualGoal]);
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (year === "") {
	      setErrorYear("Este campo e obrigatorio");
	      isValid = false;
	    }
	
	    if (lifeField === "") {
	      setErrorLifeField("Este campo e obrigatorio");
	      isValid = false;
	    }
	
	    if (description === "") {
	      setErrorDescription("Este campo e obrigatorio");
	      isValid = false;
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function handleSubmit(e) {
	    e.preventDefault();
	
	    if (!isFormValid()) return;
	
	    var anualGoal = {
	      year: year,
	      lifeField: lifeField,
	      description: description
	    };
	
	    if (params.id) {
	      dispatch((0, _anualGoals.updateAnualGoal)(params.id, anualGoal));
	    } else {
	      dispatch((0, _anualGoals.createAnualGoal)(anualGoal));
	    }
	
	    navigate(-1);
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "year", className: "form__label" },
	          "Ano"
	        ),
	        _react2.default.createElement(
	          "select",
	          {
	            name: "year",
	            id: "year",
	            className: "form__select",
	            value: year,
	            onChange: function onChange(e) {
	              return setYear(e.target.value);
	            }
	          },
	          _react2.default.createElement(
	            "option",
	            { value: "" },
	            "-- Selecione o ano --"
	          ),
	          _react2.default.createElement(
	            "option",
	            { value: "2022" },
	            "2022"
	          )
	        ),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorYear
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "field", className: "form__label" },
	          "Area"
	        ),
	        _react2.default.createElement(
	          "select",
	          {
	            name: "field",
	            id: "field",
	            className: "form__select",
	            value: lifeField,
	            onChange: function onChange(e) {
	              return setLifeField(e.target.value);
	            }
	          },
	          _react2.default.createElement(
	            "option",
	            { value: "" },
	            "-- Selecione uma area --"
	          ),
	          lifeFields.map(function (field, i) {
	            return _react2.default.createElement(
	              "option",
	              { key: i, value: field.id },
	              field.designation
	            );
	          })
	        ),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorLifeField
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "description", className: "form__label" },
	          "Objectivo"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          id: "description",
	          name: "description",
	          className: "form__input",
	          "aria-label": "description",
	          value: description,
	          onChange: function onChange(e) {
	            return setDescription(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorDescription
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { type: "submit", className: "btn btn--primary" },
	          "" + (params.id ? "Actualizar" : "Criar")
	        )
	      )
	    )
	  );
	};
	
	exports.default = CreateAnualGoal;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _overview = __webpack_require__(22);
	
	var _overview2 = _interopRequireDefault(_overview);
	
	var _reactRedux = __webpack_require__(2);
	
	var _anualGoals = __webpack_require__(33);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AnualGoalsPage = function AnualGoalsPage(props) {
	  var _useState = (0, _react.useState)("2022"),
	      _useState2 = _slicedToArray(_useState, 2),
	      year = _useState2[0],
	      setYear = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(0),
	      _useState4 = _slicedToArray(_useState3, 2),
	      percentage = _useState4[0],
	      setPercentage = _useState4[1];
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var lifeFields = (0, _reactRedux.useSelector)(function (state) {
	    return state.lifeFields.fields;
	  });
	
	  var anualGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.anualGoals.goals;
	  });
	
	  var anualGoalsArr = {};
	
	  lifeFields.map(function (field, i) {
	    var goals = anualGoals.filter(function (goal) {
	      return goal.lifeFieldId == field.id && goal.year == year;
	    });
	
	    anualGoalsArr[field.designation] = goals;
	  });
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmar Remocao";
	    var msg = "Tem certeza que deseja remover este registo?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _anualGoals.deleteAnualGoal)(id));
	    });
	  };
	
	  var handleEdit = function handleEdit(id) {
	    navigate("/anual-goals/update/" + id);
	  };
	
	  var handleAddMonthyGoals = function handleAddMonthyGoals(id) {
	    navigate("/anual-goals/cronology/" + id);
	  };
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Objectivos Anuais";
	  });
	
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(_overview2.default, {
	      circularProgressBarTitle: "Ano " + year,
	      circularProgressBarPercentage: percentage
	    }),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        { to: "/anual-goals/create", className: "btn btn--primary btn--block" },
	        "Novo"
	      ),
	      _react2.default.createElement(
	        "form",
	        { className: "form mt-2" },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "year", className: "form__label" },
	            "Ano"
	          ),
	          _react2.default.createElement(
	            "select",
	            {
	              name: "year",
	              id: "year",
	              className: "form__select",
	              onChange: function onChange(e) {
	                return setYear(e.target.value);
	              }
	            },
	            _react2.default.createElement(
	              "option",
	              { value: "2022" },
	              "2022"
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "goals" },
	        lifeFields.map(function (field, i) {
	          return _react2.default.createElement(
	            "div",
	            { key: i, className: "goals__section mt-3" },
	            _react2.default.createElement(
	              "div",
	              { className: "goals__header" },
	              _react2.default.createElement(
	                "div",
	                { className: "goals__section-title" },
	                field.designation
	              )
	            ),
	            _react2.default.createElement(
	              "ul",
	              { className: "goals__list" },
	              anualGoalsArr[field.designation].map(function (goal, j) {
	                return _react2.default.createElement(_goalItem2.default, {
	                  key: j,
	                  id: goal.id,
	                  description: goal.description,
	                  progress: goal.progress,
	                  onEditItem: function onEditItem() {
	                    return handleEdit(goal.id);
	                  },
	                  onDeleteItem: function onDeleteItem() {
	                    return handleDelete(goal.id);
	                  },
	                  onAddTasks: function onAddTasks() {
	                    return handleAddMonthyGoals(goal.id);
	                  }
	                });
	              })
	            )
	          );
	        })
	      )
	    )
	  );
	};
	
	exports.default = AnualGoalsPage;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(10);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _spinner = __webpack_require__(18);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _apiConfig = __webpack_require__(14);
	
	var _apiConfig2 = _interopRequireDefault(_apiConfig);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var ForgotPasswordPage = function ForgotPasswordPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      email = _useState2[0],
	      setEmail = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      errorEmail = _useState4[0],
	      setErrorEmail = _useState4[1];
	
	  var navigate = (0, _reactRouterDom.useNavigate)();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Reniciar minha senha";
	  });
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (email === "") {
	      setErrorEmail("Email e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorEmail("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
	      var response, data;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              e.preventDefault();
	
	              if (isFormValid()) {
	                _context.next = 3;
	                break;
	              }
	
	              return _context.abrupt("return");
	
	            case 3:
	
	              _spinner2.default.showSpinner();
	
	              _context.prev = 4;
	              _context.next = 7;
	              return fetch(_apiConfig2.default + "/users/forgot-password", {
	                method: "POST",
	                headers: {
	                  "Content-Type": "application/json"
	                },
	                body: JSON.stringify({ email: email })
	              });
	
	            case 7:
	              response = _context.sent;
	              _context.next = 10;
	              return response.json();
	
	            case 10:
	              data = _context.sent;
	
	
	              if (data.status === "success") {
	                navigate("/reset-token");
	              } else {
	                setErrorEmail(data.message);
	              }
	              _context.next = 17;
	              break;
	
	            case 14:
	              _context.prev = 14;
	              _context.t0 = _context["catch"](4);
	
	              console.log(_context.t0);
	
	            case 17:
	              _context.prev = 17;
	
	              _spinner2.default.hideSpinner();
	              return _context.finish(17);
	
	            case 20:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[4, 14, 17, 20]]);
	    }));
	
	    return function handleSubmit(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "p",
	          { className: "p" },
	          "Digite o endere\xE7o de e-mail verificado da sua conta de usu\xE1rio e n\xF3s lhe enviaremos um link de redefini\xE7\xE3o de senha."
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement("input", {
	          type: "email",
	          className: "form__input",
	          placeholder: "Digite o seu endereco de e-mail",
	          value: email,
	          onChange: function onChange(e) {
	            return setEmail(e.target.value);
	          },
	          "aria-label": "Digite o seu endereco de e-mail"
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorEmail
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { type: "submit", className: "btn btn--primary form__btn" },
	          "Envie-me o link para reniciar senha"
	        )
	      )
	    )
	  );
	};
	
	exports.default = ForgotPasswordPage;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(10);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _apiConfig = __webpack_require__(14);
	
	var _apiConfig2 = _interopRequireDefault(_apiConfig);
	
	var _spinner = __webpack_require__(18);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _reactRedux = __webpack_require__(2);
	
	var _user = __webpack_require__(16);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var PasswordResetPage = function PasswordResetPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      password = _useState2[0],
	      setPassword = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      passwordConfirm = _useState4[0],
	      setPasswordConfirm = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      errorPassword = _useState6[0],
	      setErrorPassword = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorPasswordConfirm = _useState8[0],
	      setErrorPasswordConfirm = _useState8[1];
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouterDom.useNavigate)();
	
	  var params = (0, _reactRouterDom.useParams)();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Renicie a senha";
	  });
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (password === "") {
	      setErrorPassword("Senha e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorPassword("");
	    }
	
	    if (passwordConfirm === "") {
	      setErrorPasswordConfirm("Confirmacao da senha e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorPasswordConfirm("");
	    }
	
	    if (password.length < 8) {
	      setErrorPassword("A senha deve ter no minimo 8 caracteres");
	      isValid = false;
	    } else {
	      setErrorPassword("");
	    }
	
	    if (password !== passwordConfirm) {
	      setErrorPasswordConfirm("As senhas nao sao iguais");
	      isValid = false;
	    } else {
	      setErrorPasswordConfirm("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
	      var response, data, user, token;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              e.preventDefault();
	
	              if (isFormValid()) {
	                _context.next = 3;
	                break;
	              }
	
	              return _context.abrupt("return");
	
	            case 3:
	
	              _spinner2.default.showSpinner();
	
	              _context.prev = 4;
	              _context.next = 7;
	              return fetch(_apiConfig2.default + "/users/password-reset/" + params.token, {
	                method: "PATCH",
	                headers: {
	                  "Content-Type": "application/json"
	                },
	                body: JSON.stringify({ password: password, passwordConfirm: passwordConfirm })
	              });
	
	            case 7:
	              response = _context.sent;
	              _context.next = 10;
	              return response.json();
	
	            case 10:
	              data = _context.sent;
	
	
	              if (data.status === "success") {
	                user = data.data.user;
	                token = data.token;
	
	
	                dispatch((0, _user.setCurrentUser)({ user: user, token: token }));
	
	                navigate("/home", { replace: true });
	              } else {}
	
	              console.log(data);
	              _context.next = 18;
	              break;
	
	            case 15:
	              _context.prev = 15;
	              _context.t0 = _context["catch"](4);
	
	              alert(_context.t0);
	
	            case 18:
	              _context.prev = 18;
	
	              _spinner2.default.hideSpinner();
	              return _context.finish(18);
	
	            case 21:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[4, 15, 18, 21]]);
	    }));
	
	    return function handleSubmit(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Registar";
	  });
	
	  return _react2.default.createElement(
	    "div",
	    { className: "login container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form login__form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "password", className: "form__label" },
	          "Senha"
	        ),
	        _react2.default.createElement("input", {
	          type: "password",
	          className: "form__input",
	          "aria-label": "Password",
	          value: password,
	          onChange: function onChange(e) {
	            setPassword(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorPassword
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "passwordConfirm", className: "form__label" },
	          "Confirmar Senha"
	        ),
	        _react2.default.createElement("input", {
	          type: "password",
	          className: "form__input",
	          "aria-label": "Confirmar Password",
	          value: passwordConfirm,
	          onChange: function onChange(e) {
	            setPasswordConfirm(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorPasswordConfirm
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { type: "submit", className: "btn btn--primary form__btn" },
	          "Alterar senha"
	        )
	      )
	    )
	  );
	};
	
	exports.default = PasswordResetPage;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ResetTokenPage = function ResetTokenPage() {
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Senha enviada!";
	  });
	  var navigate = (0, _reactRouterDom.useNavigate)();
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "div",
	      { className: "form__group" },
	      _react2.default.createElement(
	        "p",
	        { className: "p" },
	        "Verifique seu e-mail para um link para redefinir sua senha. Se n\xE3o aparecer em alguns minutos, verifique sua pasta de spam."
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form__group" },
	      _react2.default.createElement(
	        "button",
	        {
	          onClick: function onClick() {
	            return navigate("/signin");
	          },
	          type: "submit",
	          className: "btn btn--primary form__btn"
	        },
	        "Voltar para Entrar"
	      )
	    )
	  );
	};
	
	exports.default = ResetTokenPage;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(10);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _spinner = __webpack_require__(18);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _apiConfig = __webpack_require__(14);
	
	var _apiConfig2 = _interopRequireDefault(_apiConfig);
	
	var _reactRedux = __webpack_require__(2);
	
	var _user = __webpack_require__(16);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var SignInPage = function SignInPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      email = _useState2[0],
	      setEmail = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      password = _useState4[0],
	      setPassword = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      errorEmail = _useState6[0],
	      setErrorEmail = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorPassword = _useState8[0],
	      setErrorPassword = _useState8[1];
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouterDom.useNavigate)();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Entrar";
	  });
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (email === "") {
	      setErrorEmail("Email e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorEmail("");
	    }
	
	    if (password === "") {
	      setErrorPassword("Senha e obrigatoria");
	      isValid = false;
	    } else {
	      setErrorPassword("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
	      var response, data, user, token;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              e.preventDefault();
	
	              if (isFormValid()) {
	                _context.next = 3;
	                break;
	              }
	
	              return _context.abrupt("return");
	
	            case 3:
	
	              _spinner2.default.showSpinner();
	
	              _context.prev = 4;
	              _context.next = 7;
	              return fetch(_apiConfig2.default + "/users/signin", {
	                method: "POST",
	                headers: {
	                  "Content-Type": "application/json"
	                },
	                body: JSON.stringify({ email: email, password: password })
	              });
	
	            case 7:
	              response = _context.sent;
	              _context.next = 10;
	              return response.json();
	
	            case 10:
	              data = _context.sent;
	
	
	              if (data.status === "success") {
	                user = data.data.user;
	                token = data.token;
	
	
	                dispatch((0, _user.setCurrentUser)({ user: user, token: token }));
	
	                navigate("/home", { replace: true });
	              } else {
	                setErrorEmail(data.message);
	              }
	              _context.next = 17;
	              break;
	
	            case 14:
	              _context.prev = 14;
	              _context.t0 = _context["catch"](4);
	
	              console.log(_context.t0);
	
	            case 17:
	              _context.prev = 17;
	
	              _spinner2.default.hideSpinner();
	              return _context.finish(17);
	
	            case 20:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[4, 14, 17, 20]]);
	    }));
	
	    return function handleSubmit(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	  return _react2.default.createElement(
	    "div",
	    { className: "login container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form login__form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "email", className: "form__label" },
	          "Email"
	        ),
	        _react2.default.createElement("input", {
	          type: "email",
	          className: "form__input",
	          placeholder: "tu@exemplo.com",
	          value: email,
	          onChange: function onChange(e) {
	            return setEmail(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorEmail
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "password", className: "form__label" },
	          "Password"
	        ),
	        _react2.default.createElement("input", {
	          type: "password",
	          className: "form__input",
	          "aria-label": "Password",
	          value: password,
	          onChange: function onChange(e) {
	            return setPassword(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorPassword
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { type: "submit", className: "btn btn--primary form__btn" },
	          "Entrar"
	        )
	      )
	    ),
	    _react2.default.createElement(
	      "p",
	      { className: "text-center" },
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        { to: "/forgot-password", className: "text-primary" },
	        "Esqueci minha senha"
	      )
	    )
	  );
	};
	
	exports.default = SignInPage;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(10);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _apiConfig = __webpack_require__(14);
	
	var _apiConfig2 = _interopRequireDefault(_apiConfig);
	
	var _spinner = __webpack_require__(18);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _reactRedux = __webpack_require__(2);
	
	var _user = __webpack_require__(16);
	
	var _reactRouterDom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var SignUpPage = function SignUpPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      name = _useState2[0],
	      setName = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      email = _useState4[0],
	      setEmail = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      password = _useState6[0],
	      setPassword = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      passwordConfirm = _useState8[0],
	      setPasswordConfirm = _useState8[1];
	
	  var _useState9 = (0, _react.useState)(""),
	      _useState10 = _slicedToArray(_useState9, 2),
	      errorName = _useState10[0],
	      setErrorName = _useState10[1];
	
	  var _useState11 = (0, _react.useState)(""),
	      _useState12 = _slicedToArray(_useState11, 2),
	      errorEmail = _useState12[0],
	      setErrorEmail = _useState12[1];
	
	  var _useState13 = (0, _react.useState)(""),
	      _useState14 = _slicedToArray(_useState13, 2),
	      errorPassword = _useState14[0],
	      setErrorPassword = _useState14[1];
	
	  var _useState15 = (0, _react.useState)(""),
	      _useState16 = _slicedToArray(_useState15, 2),
	      errorPasswordConfirm = _useState16[0],
	      setErrorPasswordConfirm = _useState16[1];
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouterDom.useNavigate)();
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (name === "") {
	      setErrorName("Nome e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorName("");
	    }
	
	    if (email === "") {
	      setErrorEmail("Email e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorEmail("");
	    }
	
	    if (password === "") {
	      setErrorPassword("Senha e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorPassword("");
	    }
	
	    if (passwordConfirm === "") {
	      setErrorPasswordConfirm("Confirmacao da senha e obrigatorio");
	      isValid = false;
	    } else {
	      setErrorPasswordConfirm("");
	    }
	
	    if (password.length < 8) {
	      setErrorPassword("A senha deve ter no minimo 8 caracteres");
	      isValid = false;
	    } else {
	      setErrorPassword("");
	    }
	
	    if (password !== passwordConfirm) {
	      setErrorPasswordConfirm("As senhas nao sao iguais");
	      isValid = false;
	    } else {
	      setErrorPasswordConfirm("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
	      var response, data, user, token;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              e.preventDefault();
	
	              if (isFormValid()) {
	                _context.next = 3;
	                break;
	              }
	
	              return _context.abrupt("return");
	
	            case 3:
	
	              _spinner2.default.showSpinner();
	
	              _context.prev = 4;
	              _context.next = 7;
	              return fetch(_apiConfig2.default + "/users/signup", {
	                method: "POST",
	                headers: {
	                  "Content-Type": "application/json"
	                },
	                body: JSON.stringify({ name: name, email: email, password: password, passwordConfirm: passwordConfirm })
	              });
	
	            case 7:
	              response = _context.sent;
	              _context.next = 10;
	              return response.json();
	
	            case 10:
	              data = _context.sent;
	
	
	              if (data.status === "success") {
	                user = data.data.user;
	                token = data.token;
	
	
	                dispatch((0, _user.setCurrentUser)({ user: user, token: token }));
	
	                navigate("/home", { replace: true });
	              } else {}
	
	              console.log(data);
	              _context.next = 18;
	              break;
	
	            case 15:
	              _context.prev = 15;
	              _context.t0 = _context["catch"](4);
	
	              alert(_context.t0);
	
	            case 18:
	              _context.prev = 18;
	
	              _spinner2.default.hideSpinner();
	              return _context.finish(18);
	
	            case 21:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[4, 15, 18, 21]]);
	    }));
	
	    return function handleSubmit(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Registar";
	  });
	
	  return _react2.default.createElement(
	    "div",
	    { className: "login container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form login__form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "name", className: "form__label" },
	          "Nome"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          className: "form__input",
	          placeholder: "Nelson",
	          "aria-label": "Name",
	          value: name,
	          onChange: function onChange(e) {
	            setName(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorName
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "email", className: "form__label" },
	          "Email"
	        ),
	        _react2.default.createElement("input", {
	          type: "email",
	          className: "form__input",
	          placeholder: "tu@exemplo.com",
	          value: email,
	          onChange: function onChange(e) {
	            setEmail(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorEmail
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "password", className: "form__label" },
	          "Senha"
	        ),
	        _react2.default.createElement("input", {
	          type: "password",
	          className: "form__input",
	          "aria-label": "Password",
	          value: password,
	          onChange: function onChange(e) {
	            setPassword(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorPassword
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "passwordConfirm", className: "form__label" },
	          "Confirmar Senha"
	        ),
	        _react2.default.createElement("input", {
	          type: "password",
	          className: "form__input",
	          "aria-label": "Confirmar Password",
	          value: passwordConfirm,
	          onChange: function onChange(e) {
	            setPasswordConfirm(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorPasswordConfirm
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { type: "submit", className: "btn btn--primary form__btn" },
	          "Registar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = SignUpPage;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _tasks = __webpack_require__(12);
	
	var _reactRouter = __webpack_require__(4);
	
	var _lists = __webpack_require__(11);
	
	var _calculateProgress = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddTaskPage = function AddTaskPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      listId = _useState2[0],
	      setListId = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      description = _useState4[0],
	      setDescription = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      errorListId = _useState6[0],
	      setErrorListId = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorDescription = _useState8[0],
	      setErrorDescription = _useState8[1];
	
	  var lists = (0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists.filter(function (list) {
	      return list.isVisible && list.type == "action";
	    });
	  });
	
	  var allTasks = (0, _reactRedux.useSelector)(function (state) {
	    return state.tasks.tasks;
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var params = (0, _reactRouter.useParams)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var taskToUpdate = null;
	
	  if (params.id) {
	    taskToUpdate = (0, _reactRedux.useSelector)(function (state) {
	      return state.tasks.tasks.find(function (task) {
	        return task.id == params.id;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    if (taskToUpdate) {
	      setDescription(taskToUpdate.description);
	      setListId(taskToUpdate.listId);
	    }
	  }, [taskToUpdate]);
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = (params.id ? "Actualizar" : "Adicionar") + " Tarefa";
	  });
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (listId == "") {
	      setErrorListId("Selecione uma lista");
	      isValid = false;
	    } else {
	      setErrorListId("");
	    }
	
	    if (description == "") {
	      setErrorDescription("Introduza uma tarefa");
	      isValid = false;
	    } else {
	      setErrorDescription("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function handleSubmit(e) {
	    e.preventDefault();
	    if (!isFormValid()) return;
	
	    var task = {
	      listId: listId,
	      description: description
	    };
	
	    if (params.id) {
	      dispatch((0, _tasks.updateTask)(params.id, task));
	    } else {
	      dispatch((0, _tasks.addTask)(task));
	
	      var progress = (0, _calculateProgress.calculateProgress)(listId, allTasks);
	
	      dispatch((0, _lists.updateProgress)(listId, progress));
	    }
	
	    navigate(-1);
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "list", className: "form__label" },
	          "Lista"
	        ),
	        _react2.default.createElement(
	          "select",
	          {
	            value: listId,
	            name: "list",
	            id: "list",
	            className: "form__select",
	            onChange: function onChange(e) {
	              return setListId(e.target.value);
	            }
	          },
	          _react2.default.createElement(
	            "option",
	            { value: "" },
	            "-- Selecione uma lista --"
	          ),
	          lists.map(function (list, i) {
	            return _react2.default.createElement(
	              "option",
	              { key: i, value: list.id },
	              list.designation
	            );
	          })
	        ),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorListId
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "description", className: "form__label" },
	          "Tarefa"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          className: "form__input",
	          "aria-label": "Tarefa",
	          value: description,
	          onChange: function onChange(e) {
	            return setDescription(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorDescription
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { className: "btn btn--primary" },
	          params.id ? "Actualizar" : "Adicionar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = AddTaskPage;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _circularProgressBar = __webpack_require__(29);
	
	var _circularProgressBar2 = _interopRequireDefault(_circularProgressBar);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(2);
	
	var _tasks = __webpack_require__(12);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _lists = __webpack_require__(11);
	
	var _calculateProgress = __webpack_require__(17);
	
	var _reactRouter = __webpack_require__(4);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	var _projects = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HomePage = function HomePage() {
	  var lists = (0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists.filter(function (list) {
	      return list.isVisible && list.type == "action";
	    });
	  });
	
	  var _useState = (0, _react.useState)(lists[0] ? lists[0].id : ""),
	      _useState2 = _slicedToArray(_useState, 2),
	      listId = _useState2[0],
	      setListId = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(0),
	      _useState4 = _slicedToArray(_useState3, 2),
	      percentage = _useState4[0],
	      setPercentage = _useState4[1];
	
	  var tasks = (0, _reactRedux.useSelector)(function (state) {
	    return state.tasks.tasks.filter(function (task) {
	      return task.listId == listId;
	    });
	  });
	
	  var selectedList = (0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists.find(function (list) {
	      return list.id == listId;
	    });
	  });
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Proximas Accoes";
	  });
	
	  (0, _react.useEffect)(function () {
	    if (selectedList) setPercentage(selectedList.progress);
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var handleEdit = function handleEdit(id) {
	    navigate("/task/update/" + id);
	  };
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmacao Remocao";
	
	    var msg = "Tem certeza que deseja remover esta tarefa?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _tasks.deleteTask)(id));
	      var progress = (0, _calculateProgress.calculateProgress)(listId, tasks);
	      dispatch((0, _lists.updateProgress)(listId, progress));
	    });
	  };
	
	  var handleChangeStatus = function handleChangeStatus(id) {
	    dispatch((0, _tasks.changeTaskStatus)(id));
	
	    var progress = (0, _calculateProgress.calculateProgress)(listId, tasks, null);
	
	    dispatch((0, _lists.updateProgress)(listId, progress));
	  };
	
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "overview overview--three" },
	      _react2.default.createElement(_circularProgressBar2.default, {
	        percentage: percentage,
	        title: selectedList.designation
	      })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        { to: "/task/create", className: "btn btn--primary btn--block" },
	        "Adicionar tarefa"
	      ),
	      _react2.default.createElement(
	        "form",
	        { className: "form mt-2" },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "list", className: "form__label" },
	            "Lista"
	          ),
	          _react2.default.createElement(
	            "select",
	            {
	              value: listId,
	              onChange: function onChange(e) {
	                return setListId(e.target.value);
	              },
	              name: "list",
	              id: "list",
	              className: "form__select"
	            },
	            _react2.default.createElement(
	              "option",
	              { value: "" },
	              "-- Selecione uma lista --"
	            ),
	            lists.map(function (list, i) {
	              return _react2.default.createElement(
	                "option",
	                { key: i, value: list.id },
	                list.designation
	              );
	            })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "ul",
	        { className: "goals__list" },
	        tasks.map(function (task, j) {
	          return _react2.default.createElement(_goalItem2.default, {
	            key: j,
	            id: task.id,
	            description: task.description,
	            progress: task.done,
	            onEditItem: function onEditItem() {
	              return handleEdit(task.id);
	            },
	            onDeleteItem: function onDeleteItem() {
	              return handleDelete(task.id);
	            },
	            onChangeItemStatus: function onChangeItemStatus() {
	              return handleChangeStatus(task.id);
	            },
	            isTask: true,
	            done: task.done
	          });
	        })
	      )
	    )
	  );
	};
	
	exports.default = HomePage;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _tasks = __webpack_require__(12);
	
	var _reactRouter = __webpack_require__(4);
	
	var _lists = __webpack_require__(11);
	
	var _calculateProgress = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddToInbox = function AddToInbox() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      listId = _useState2[0],
	      setListId = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      description = _useState4[0],
	      setDescription = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      errorListId = _useState6[0],
	      setErrorListId = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorDescription = _useState8[0],
	      setErrorDescription = _useState8[1];
	
	  var lists = (0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists.filter(function (list) {
	      return list.isVisible && list.type == "inbox";
	    });
	  });
	
	  var allTasks = (0, _reactRedux.useSelector)(function (state) {
	    return state.tasks.tasks;
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var params = (0, _reactRouter.useParams)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var taskToUpdate = null;
	
	  if (params.id) {
	    taskToUpdate = (0, _reactRedux.useSelector)(function (state) {
	      return state.tasks.tasks.find(function (task) {
	        return task.id == params.id;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    if (taskToUpdate) {
	      setDescription(taskToUpdate.description);
	      setListId(taskToUpdate.listId);
	    }
	  }, [taskToUpdate]);
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = (params.id ? "Actualizar" : "Adicionar") + " Entrada";
	  });
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (listId == "") {
	      setErrorListId("Selecione uma lista");
	      isValid = false;
	    } else {
	      setErrorListId("");
	    }
	
	    if (description == "") {
	      setErrorDescription("Introduza uma tarefa");
	      isValid = false;
	    } else {
	      setErrorDescription("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function handleSubmit(e) {
	    e.preventDefault();
	    if (!isFormValid()) return;
	
	    var task = {
	      listId: listId,
	      description: description
	    };
	
	    if (params.id) {
	      dispatch((0, _tasks.updateTask)(params.id, task));
	    } else {
	      dispatch((0, _tasks.addTask)(task));
	
	      var progress = (0, _calculateProgress.calculateProgress)(listId, allTasks);
	
	      dispatch((0, _lists.updateProgress)(listId, progress));
	    }
	
	    navigate(-1);
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "list", className: "form__label" },
	          "Lista"
	        ),
	        _react2.default.createElement(
	          "select",
	          {
	            value: listId,
	            name: "list",
	            id: "list",
	            className: "form__select",
	            onChange: function onChange(e) {
	              return setListId(e.target.value);
	            }
	          },
	          _react2.default.createElement(
	            "option",
	            { value: "" },
	            "-- Selecione uma lista --"
	          ),
	          lists.map(function (list, i) {
	            return _react2.default.createElement(
	              "option",
	              { key: i, value: list.id },
	              list.designation
	            );
	          })
	        ),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorListId
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "description", className: "form__label" },
	          "Entrada"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          className: "form__input",
	          "aria-label": "Entrada",
	          value: description,
	          onChange: function onChange(e) {
	            return setDescription(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorDescription
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { className: "btn btn--primary" },
	          params.id ? "Actualizar" : "Adicionar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = AddToInbox;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(2);
	
	var _tasks = __webpack_require__(12);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _reactRouter = __webpack_require__(4);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var InboxPage = function InboxPage() {
	  var lists = (0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists.filter(function (list) {
	      return list.isVisible && list.type == "inbox";
	    });
	  });
	
	  var _useState = (0, _react.useState)(lists[0] ? lists[0].id : ""),
	      _useState2 = _slicedToArray(_useState, 2),
	      listId = _useState2[0],
	      setListId = _useState2[1];
	
	  var tasks = (0, _reactRedux.useSelector)(function (state) {
	    return state.tasks.tasks.filter(function (task) {
	      return task.listId == listId;
	    });
	  });
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Entradas";
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var handleEdit = function handleEdit(id) {
	    navigate("/inbox/update/" + id);
	  };
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmacao Remocao";
	
	    var msg = "Tem certeza que deseja remover esta tarefa?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _tasks.deleteTask)(id));
	    });
	  };
	
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        { to: "/inbox/create", className: "btn btn--primary btn--block" },
	        "Adicionar Entrada"
	      ),
	      _react2.default.createElement(
	        "form",
	        { className: "form mt-2" },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "list", className: "form__label" },
	            "Lista"
	          ),
	          _react2.default.createElement(
	            "select",
	            {
	              value: listId,
	              onChange: function onChange(e) {
	                return setListId(e.target.value);
	              },
	              name: "list",
	              id: "list",
	              className: "form__select"
	            },
	            _react2.default.createElement(
	              "option",
	              { value: "" },
	              "-- Selecione uma lista --"
	            ),
	            lists.map(function (list, i) {
	              return _react2.default.createElement(
	                "option",
	                { key: i, value: list.id },
	                list.designation
	              );
	            })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "ul",
	        { className: "goals__list" },
	        tasks.map(function (task, j) {
	          return _react2.default.createElement(_goalItem2.default, {
	            key: j,
	            id: task.id,
	            description: task.description,
	            progress: task.done,
	            onEditItem: function onEditItem() {
	              return handleEdit(task.id);
	            },
	            onDeleteItem: function onDeleteItem() {
	              return handleDelete(task.id);
	            },
	            isTask: true
	          });
	        })
	      )
	    )
	  );
	};
	
	exports.default = InboxPage;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(10);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _lifeFields = __webpack_require__(34);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var CreateLifeFieldPage = function CreateLifeFieldPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      designation = _useState2[0],
	      setDesignation = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      errorDesignation = _useState4[0],
	      setErrorDesignation = _useState4[1];
	
	  var params = (0, _reactRouter.useParams)();
	
	  var lifeField = null;
	
	  if (params.id) {
	    lifeField = (0, _reactRedux.useSelector)(function (state) {
	      return state.lifeFields.fields.find(function (field) {
	        return field.id == params.id;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    if (lifeField) {
	      setDesignation(lifeField.designation);
	    }
	  }, [lifeField]);
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = (params.id ? "Actualizar" : "Criar ") + " Area da Vida";
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (designation === "") {
	      setErrorDesignation("Este campo e obrigatorio");
	
	      isValid = false;
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              e.preventDefault();
	
	              if (isFormValid()) {
	                _context.next = 3;
	                break;
	              }
	
	              return _context.abrupt("return");
	
	            case 3:
	
	              if (params.id) {
	                dispatch((0, _lifeFields.updateLifeField)(params.id, designation));
	              } else {
	                dispatch((0, _lifeFields.createLifeField)(designation));
	              }
	
	              navigate(-1);
	
	            case 5:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined);
	    }));
	
	    return function handleSubmit(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "designation", className: "form__label" },
	          "Designa\xE7\xE3o"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          className: "form__input",
	          "aria-label": "Descricao",
	          value: designation,
	          onChange: function onChange(e) {
	            return setDesignation(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorDesignation
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { className: "btn btn--primary" },
	          params.id ? "Actualizar" : "Salvar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = CreateLifeFieldPage;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(2);
	
	var _listItem = __webpack_require__(30);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	var _lifeFields = __webpack_require__(34);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LifeFieldsPage = function LifeFieldsPage() {
	  var lifeFieldsList = (0, _reactRedux.useSelector)(function (state) {
	    return state.lifeFields.fields;
	  });
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Areas da Vida";
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmar remocao";
	    var msg = "Tem certeza que deseja remover este registo?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _lifeFields.deleteLifeField)(id));
	    });
	  };
	
	  var handleChangeVisibility = function handleChangeVisibility(id) {
	    dispatch((0, _lifeFields.changeLifeFieldVisibility)(id));
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      _reactRouterDom.Link,
	      { to: "/create-life-field", className: "btn btn--primary btn--block" },
	      "Novo"
	    ),
	    _react2.default.createElement(
	      "ul",
	      { className: "list mt-2" },
	      lifeFieldsList.map(function (lifeField, i) {
	        return _react2.default.createElement(_listItem2.default, Object.assign({
	          key: i
	        }, lifeField, {
	          onDelete: handleDelete,
	          updateUrl: "/update-life-field",
	          isVisible: lifeField.isVisible,
	          onChangeVisibility: function onChangeVisibility() {
	            return handleChangeVisibility(lifeField.id);
	          }
	        }));
	      })
	    )
	  );
	};
	
	exports.default = LifeFieldsPage;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(10);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _lists = __webpack_require__(11);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var CreateListsPage = function CreateListsPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      type = _useState2[0],
	      setType = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      designation = _useState4[0],
	      setDesignation = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      errorType = _useState6[0],
	      setErrorType = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorDesignation = _useState8[0],
	      setErrorDesignation = _useState8[1];
	
	  var params = (0, _reactRouter.useParams)();
	
	  var list = null;
	
	  if (params.id) {
	    list = (0, _reactRedux.useSelector)(function (state) {
	      return state.lists.lists.find(function (list) {
	        return list.id == params.id;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    if (list) {
	      setDesignation(list.designation);
	      setType(list.type);
	    }
	  }, [list]);
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = (params.id ? "Actualizar" : "Criar ") + " Lista";
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (type == "") {
	      setErrorType("O tipo de lista e obrigatorio");
	      isValid = false;
	    }
	
	    if (designation === "") {
	      setErrorDesignation("Este campo e obrigatorio");
	
	      isValid = false;
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
	      var list;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              e.preventDefault();
	
	              if (isFormValid()) {
	                _context.next = 3;
	                break;
	              }
	
	              return _context.abrupt("return");
	
	            case 3:
	              list = {
	                type: type,
	                designation: designation
	              };
	
	
	              if (params.id) {
	                dispatch((0, _lists.updateList)(params.id, list));
	              } else {
	                dispatch((0, _lists.createList)(list));
	              }
	
	              navigate(-1);
	
	            case 6:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined);
	    }));
	
	    return function handleSubmit(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "type", className: "form__label" },
	          "Tipo de Lista"
	        ),
	        _react2.default.createElement(
	          "select",
	          {
	            name: "type",
	            id: "type",
	            className: "form__select",
	            value: type,
	            onChange: function onChange(e) {
	              return setType(e.target.value);
	            }
	          },
	          _react2.default.createElement(
	            "option",
	            { value: "" },
	            "-- Selecione o tipo de lista --"
	          ),
	          _react2.default.createElement(
	            "option",
	            { value: "action" },
	            "Accao"
	          ),
	          _react2.default.createElement(
	            "option",
	            { value: "inbox" },
	            "Entrada"
	          )
	        ),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorType
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "designation", className: "form__label" },
	          "Designa\xE7\xE3o"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          className: "form__input",
	          "aria-label": "Descricao",
	          value: designation,
	          onChange: function onChange(e) {
	            return setDesignation(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorDesignation
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { className: "btn btn--primary" },
	          params.id ? "Actualizar" : "Salvar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = CreateListsPage;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(2);
	
	var _listItem = __webpack_require__(30);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	var _lists = __webpack_require__(11);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ListsPage = function ListsPage() {
	  var listsList = (0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists;
	  });
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Listas";
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmar remocao";
	    var msg = "Tem certeza que deseja remover este registo?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _lists.deleteList)(id));
	    });
	  };
	
	  var handleChangeVisibility = function handleChangeVisibility(id) {
	    dispatch((0, _lists.changeListVisibility)(id));
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      _reactRouterDom.Link,
	      { to: "/lists/create", className: "btn btn--primary btn--block" },
	      "Novo"
	    ),
	    _react2.default.createElement(
	      "ul",
	      { className: "list mt-2" },
	      listsList.map(function (list, i) {
	        return _react2.default.createElement(_listItem2.default, Object.assign({
	          key: i
	        }, list, {
	          onDelete: handleDelete,
	          updateUrl: "/lists/update",
	          isVisible: list.isVisible,
	          onChangeVisibility: function onChangeVisibility() {
	            return handleChangeVisibility(list.id);
	          }
	        }));
	      })
	    )
	  );
	};
	
	exports.default = ListsPage;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _monthlyGoals = __webpack_require__(23);
	
	var _reactRouter = __webpack_require__(4);
	
	var _selectMonth = __webpack_require__(13);
	
	var _selectMonth2 = _interopRequireDefault(_selectMonth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateMonthlyGoal = function CreateMonthlyGoal() {
	  var _useState = (0, _react.useState)(new Date().getMonth()),
	      _useState2 = _slicedToArray(_useState, 2),
	      month = _useState2[0],
	      setMonth = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      anualGoalId = _useState4[0],
	      setAnualGoalId = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      description = _useState6[0],
	      setDescription = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      errorMonth = _useState8[0],
	      setErrorMonth = _useState8[1];
	
	  var _useState9 = (0, _react.useState)(""),
	      _useState10 = _slicedToArray(_useState9, 2),
	      errorAnualGoal = _useState10[0],
	      setErrorAnualGoal = _useState10[1];
	
	  var _useState11 = (0, _react.useState)(""),
	      _useState12 = _slicedToArray(_useState11, 2),
	      errorDescription = _useState12[0],
	      setErrorDescription = _useState12[1];
	
	  var currentYear = new Date().getFullYear();
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var params = (0, _reactRouter.useParams)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var currentAnualGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.anualGoals.goals.filter(function (goal) {
	      return goal.year == currentYear;
	    });
	  });
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = (params.id ? "Actualizar" : "Criar") + " Objectivo Mensal";
	  });
	
	  var monthlyGoal = null;
	
	  if (params.id) {
	    monthlyGoal = (0, _reactRedux.useSelector)(function (state) {
	      return state.monthlyGoals.goals.find(function (goal) {
	        return goal.id == params.id;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    setMonth(params.month);
	    setAnualGoalId(params.anualGoalId);
	  }, []);
	
	  (0, _react.useEffect)(function () {
	    if (monthlyGoal) {
	      setMonth(monthlyGoal.month);
	      setDescription(monthlyGoal.description);
	      setAnualGoalId(monthlyGoal.anualGoalId);
	    }
	  }, [monthlyGoal]);
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (month === "") {
	      setErrorMonth("Este campo e obrigatorio");
	      isValid = false;
	    }
	
	    if (anualGoalId === "") {
	      setErrorAnualGoal("Este campo e obrigatorio");
	      isValid = false;
	    }
	
	    if (description === "") {
	      setErrorDescription("Este campo e obrigatorio");
	      isValid = false;
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function handleSubmit(e) {
	    e.preventDefault();
	
	    if (!isFormValid()) return;
	
	    var monthlyGoal = {
	      month: month,
	      anualGoalId: anualGoalId,
	      description: description
	    };
	
	    if (params.id) {
	      dispatch((0, _monthlyGoals.updateMonthlyGoal)(params.id, monthlyGoal));
	    } else {
	      dispatch((0, _monthlyGoals.createMonthlyGoal)(monthlyGoal));
	    }
	
	    setDescription("");
	
	    navigate(-1);
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "form",
	      { className: "form", onSubmit: handleSubmit },
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "anualGoalId", className: "form__label" },
	          "Objectivo Anual (",
	          currentYear,
	          ")"
	        ),
	        _react2.default.createElement(
	          "select",
	          {
	            name: "anualGoalId",
	            id: "anualGoalId",
	            className: "form__select",
	            onChange: function onChange(e) {
	              return setAnualGoalId(e.target.value);
	            },
	            value: anualGoalId
	          },
	          _react2.default.createElement(
	            "option",
	            { value: "" },
	            "-- Selecione um objectivo anual --"
	          ),
	          currentAnualGoals.map(function (goal, i) {
	            return _react2.default.createElement(
	              "option",
	              { key: i, value: goal.id },
	              goal.description
	            );
	          })
	        ),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorAnualGoal
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "month", className: "form__label" },
	          "M\xEAs"
	        ),
	        _react2.default.createElement(_selectMonth2.default, {
	          label: "month",
	          value: month,
	          onChange: function onChange(e) {
	            return setMonth(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorMonth
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "description", className: "form__label" },
	          "Objectivo"
	        ),
	        _react2.default.createElement("input", {
	          type: "text",
	          id: "description",
	          name: "description",
	          className: "form__input",
	          "aria-label": "description",
	          value: description,
	          onChange: function onChange(e) {
	            return setDescription(e.target.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          { className: "form__error" },
	          errorDescription
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form__group" },
	        _react2.default.createElement(
	          "button",
	          { type: "submit", className: "btn btn--primary" },
	          params.id ? "Actualizar" : "Criar"
	        )
	      )
	    )
	  );
	};
	
	exports.default = CreateMonthlyGoal;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _overview = __webpack_require__(22);
	
	var _overview2 = _interopRequireDefault(_overview);
	
	var _reactRedux = __webpack_require__(2);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	var _monthlyGoals = __webpack_require__(23);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _reactRouter = __webpack_require__(4);
	
	var _selectMonth = __webpack_require__(13);
	
	var _selectMonth2 = _interopRequireDefault(_selectMonth);
	
	var _getMonthName = __webpack_require__(113);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var MonthyGoalsPage = function MonthyGoalsPage(props) {
	  var _useState = (0, _react.useState)(new Date().getFullYear()),
	      _useState2 = _slicedToArray(_useState, 2),
	      year = _useState2[0],
	      setYear = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(new Date().getMonth()),
	      _useState4 = _slicedToArray(_useState3, 2),
	      month = _useState4[0],
	      setMonth = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(0),
	      _useState6 = _slicedToArray(_useState5, 2),
	      percentage = _useState6[0],
	      setPercentage = _useState6[1];
	
	  var _useState7 = (0, _react.useState)((0, _reactRedux.useSelector)(function (state) {
	    return state.projects.projects;
	  })),
	      _useState8 = _slicedToArray(_useState7, 2),
	      projects = _useState8[0],
	      setProjects = _useState8[1];
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Objectivos Mensais";
	  });
	
	  var calculateMonthlyProgress = function calculateMonthlyProgress() {
	    var totalProjects = projects.length;
	
	    var totalProgress = projects.reduce(function (acc, project) {
	      if (!isNaN(project.progress)) return acc + project.progress;
	      return acc;
	    }, 0);
	  };
	
	  calculateMonthlyProgress();
	
	  var lifeFields = (0, _reactRedux.useSelector)(function (state) {
	    return state.lifeFields.fields;
	  });
	
	  var anualGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.anualGoals.goals;
	  });
	
	  var monthlyGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.monthlyGoals.goals;
	  });
	
	  var monthlyGoalsArr = {};
	
	  lifeFields.map(function (field) {
	    monthlyGoalsArr[field.designation] = [];
	
	    anualGoals.map(function (anualGoal) {
	      var _monthlyGoalsArr$fiel;
	
	      var goals = monthlyGoals.filter(function (monthlyGoal) {
	        if (anualGoal.id == monthlyGoal.anualGoalId && anualGoal.lifeFieldId == field.id && monthlyGoal.month == month && anualGoal.year == year) {
	          monthlyGoal.anualGoalDescription = anualGoal.description;
	          return monthlyGoal;
	        }
	      });
	
	      if (goals.length > 0) (_monthlyGoalsArr$fiel = monthlyGoalsArr[field.designation]).push.apply(_monthlyGoalsArr$fiel, _toConsumableArray(goals));
	    });
	  });
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmar Remocao";
	    var msg = "Tem certeza que deseja remover este registo?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _monthlyGoals.deleteMonthlyGoal)(id));
	    });
	  };
	
	  var handleEdit = function handleEdit(id) {
	    navigate("/monthly-goals/update/" + id);
	  };
	
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    _react2.default.createElement(_overview2.default, {
	      circularProgressBarTitle: "Mes de " + (0, _getMonthName.getMonthName)(month),
	      circularProgressBarPercentage: percentage
	    }),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        {
	          to: "/monthly-goals/create",
	          className: "btn btn--primary btn--block"
	        },
	        "Novo"
	      ),
	      _react2.default.createElement(
	        "form",
	        { className: "form mt-2" },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "year", className: "form__label" },
	            "Ano"
	          ),
	          _react2.default.createElement(
	            "select",
	            {
	              name: "year",
	              id: "year",
	              className: "form__select",
	              onChange: function onChange(e) {
	                return setYear(e.target.value);
	              }
	            },
	            _react2.default.createElement(
	              "option",
	              { value: "2022" },
	              "2022"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "month", className: "form__label" },
	            "M\xEAs"
	          ),
	          _react2.default.createElement(_selectMonth2.default, {
	            label: "month",
	            value: month,
	            onChange: function onChange(e) {
	              return setMonth(e.target.value);
	            }
	          })
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "goals" },
	        lifeFields.map(function (field, i) {
	          return _react2.default.createElement(
	            "div",
	            { key: i, className: "goals__section mt-3" },
	            _react2.default.createElement(
	              "div",
	              { className: "goals__header" },
	              _react2.default.createElement(
	                "div",
	                { className: "goals__section-title" },
	                field.designation
	              )
	            ),
	            _react2.default.createElement(
	              "ul",
	              { className: "goals__list" },
	              monthlyGoalsArr[field.designation].map(function (goal, j) {
	                return _react2.default.createElement(_goalItem2.default, {
	                  key: j,
	                  id: goal.id,
	                  description: goal.description,
	                  progress: goal.progress,
	                  onDeleteItem: function onDeleteItem() {
	                    return handleDelete(goal.id);
	                  },
	                  onEditItem: function onEditItem() {
	                    return handleEdit(goal.id);
	                  },
	                  parent: goal.anualGoalDescription
	                });
	              })
	            )
	          );
	        })
	      )
	    )
	  );
	};
	
	exports.default = MonthyGoalsPage;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(4);
	
	var _projects = __webpack_require__(15);
	
	var _selectMonth = __webpack_require__(13);
	
	var _selectMonth2 = _interopRequireDefault(_selectMonth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateProjectPage = function CreateProjectPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      month = _useState2[0],
	      setMonth = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(""),
	      _useState4 = _slicedToArray(_useState3, 2),
	      monthlyGoalId = _useState4[0],
	      setMonthlyGoalId = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(""),
	      _useState6 = _slicedToArray(_useState5, 2),
	      title = _useState6[0],
	      setTitle = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(""),
	      _useState8 = _slicedToArray(_useState7, 2),
	      purpose = _useState8[0],
	      setPurpose = _useState8[1];
	
	  var _useState9 = (0, _react.useState)(""),
	      _useState10 = _slicedToArray(_useState9, 2),
	      vision = _useState10[0],
	      setVision = _useState10[1];
	
	  var _useState11 = (0, _react.useState)(""),
	      _useState12 = _slicedToArray(_useState11, 2),
	      errorMonth = _useState12[0],
	      setErrorMonth = _useState12[1];
	
	  var _useState13 = (0, _react.useState)(""),
	      _useState14 = _slicedToArray(_useState13, 2),
	      errorMonthlyGoalId = _useState14[0],
	      setErrorMonthlyGoalId = _useState14[1];
	
	  var _useState15 = (0, _react.useState)(""),
	      _useState16 = _slicedToArray(_useState15, 2),
	      errorTitle = _useState16[0],
	      setErrorTitle = _useState16[1];
	
	  var _useState17 = (0, _react.useState)(""),
	      _useState18 = _slicedToArray(_useState17, 2),
	      errorPurpose = _useState18[0],
	      setErrorPurpose = _useState18[1];
	
	  var _useState19 = (0, _react.useState)(""),
	      _useState20 = _slicedToArray(_useState19, 2),
	      errorVision = _useState20[0],
	      setErrorVision = _useState20[1];
	
	  var goals = (0, _reactRedux.useSelector)(function (state) {
	    return state.monthlyGoals.goals.filter(function (goal) {
	      return goal.month == month;
	    });
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var params = (0, _reactRouter.useParams)();
	
	  var projectToUpdate = null;
	
	  var monthlyGoal = null;
	
	  if (params.id) {
	    projectToUpdate = (0, _reactRedux.useSelector)(function (state) {
	      return state.projects.projects.find(function (project) {
	        return project.id == params.id;
	      });
	    });
	
	    monthlyGoal = (0, _reactRedux.useSelector)(function (state) {
	      return state.monthlyGoals.goals.find(function (goal) {
	        return goal.id == projectToUpdate.monthlyGoalId;
	      });
	    });
	  }
	
	  (0, _react.useEffect)(function () {
	    if (projectToUpdate) {
	      setTitle(projectToUpdate.title);
	      setPurpose(projectToUpdate.purpose);
	      setVision(projectToUpdate.vision);
	      setMonth(monthlyGoal.month);
	      setMonthlyGoalId(projectToUpdate.monthlyGoalId);
	    }
	  }, [projectToUpdate]);
	
	  var isFormValid = function isFormValid() {
	    var isValid = true;
	
	    if (month == "") {
	      setErrorMonth("Selecione o mes do objectivo mensal");
	      isValid = false;
	    } else {
	      setErrorMonth("");
	    }
	
	    if (monthlyGoalId == "") {
	      setErrorMonthlyGoalId("Selecione o objectivo mensal");
	      isValid = false;
	    } else {
	      setErrorMonthlyGoalId("");
	    }
	
	    if (title == "") {
	      setErrorTitle("Introduza o titulo");
	      isValid = false;
	    } else {
	      setErrorTitle("");
	    }
	
	    if (purpose == "") {
	      setErrorPurpose("Introduza o proposito");
	      isValid = false;
	    } else {
	      setErrorPurpose("");
	    }
	
	    if (vision == "") {
	      setErrorVision("Introduza a visao final");
	      isValid = false;
	    } else {
	      setErrorVision("");
	    }
	
	    return isValid;
	  };
	
	  var handleSubmit = function handleSubmit(e) {
	    e.preventDefault();
	
	    if (!isFormValid()) return;
	
	    var newProject = {
	      title: title,
	      purpose: purpose,
	      vision: vision,
	      monthlyGoalId: monthlyGoalId
	    };
	
	    if (params.id) {
	      dispatch((0, _projects.updateProject)(params.id, newProject));
	    } else {
	      dispatch((0, _projects.addProject)(newProject));
	    }
	
	    navigate(-1);
	  };
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Projects";
	  });
	
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "form",
	        { className: "form", onSubmit: handleSubmit },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "month", className: "form__label" },
	            "Mes"
	          ),
	          _react2.default.createElement(_selectMonth2.default, {
	            label: "month",
	            value: month,
	            onChange: function onChange(e) {
	              return setMonth(e.target.value);
	            }
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "form__error" },
	            errorMonth
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "monthlyGoalId", className: "form__label" },
	            "Objectivo Mensal"
	          ),
	          _react2.default.createElement(
	            "select",
	            {
	              name: "monthlyGoalId",
	              id: "monthlyGoalId",
	              className: "form__select",
	              value: monthlyGoalId,
	              onChange: function onChange(e) {
	                return setMonthlyGoalId(e.target.value);
	              }
	            },
	            _react2.default.createElement(
	              "option",
	              { value: "" },
	              "-- Selecione um objectivo mensal --"
	            ),
	            goals.map(function (goal, i) {
	              return _react2.default.createElement(
	                "option",
	                { key: i, value: goal.id },
	                goal.description
	              );
	            })
	          ),
	          _react2.default.createElement(
	            "span",
	            { className: "form__error" },
	            errorMonthlyGoalId
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "title", className: "form__label" },
	            "Titulo"
	          ),
	          _react2.default.createElement("input", {
	            type: "text",
	            className: "form__input",
	            "aria-label": "Titulo",
	            value: title,
	            onChange: function onChange(e) {
	              return setTitle(e.target.value);
	            }
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "form__error" },
	            errorTitle
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "purpose", className: "form__label" },
	            "Proposito"
	          ),
	          _react2.default.createElement("textarea", {
	            name: "purpose",
	            id: "purpose",
	            rows: "4",
	            className: "form__textarea",
	            value: purpose,
	            onChange: function onChange(e) {
	              return setPurpose(e.target.value);
	            }
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "form__error" },
	            errorPurpose
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "vision", className: "form__label" },
	            "Visao"
	          ),
	          _react2.default.createElement("textarea", {
	            name: "vision",
	            id: "vision",
	            rows: "4",
	            className: "form__textarea",
	            value: vision,
	            onChange: function onChange(e) {
	              return setVision(e.target.value);
	            }
	          }),
	          _react2.default.createElement(
	            "span",
	            { className: "form__error" },
	            errorVision
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "button",
	            { className: "btn btn--primary btn--block" },
	            "Adicionar"
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = CreateProjectPage;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _overview = __webpack_require__(22);
	
	var _overview2 = _interopRequireDefault(_overview);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouterDom = __webpack_require__(3);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _projects = __webpack_require__(15);
	
	var _reactRouter = __webpack_require__(4);
	
	var _selectMonth = __webpack_require__(13);
	
	var _selectMonth2 = _interopRequireDefault(_selectMonth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var ProjectsPage = function ProjectsPage() {
	  var date = new Date();
	
	  var _useState = (0, _react.useState)(date.getFullYear()),
	      _useState2 = _slicedToArray(_useState, 2),
	      year = _useState2[0],
	      setYear = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(date.getMonth()),
	      _useState4 = _slicedToArray(_useState3, 2),
	      month = _useState4[0],
	      setMonth = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(0),
	      _useState6 = _slicedToArray(_useState5, 2),
	      percentage = _useState6[0],
	      setPercentage = _useState6[1];
	
	  var lifeFields = (0, _reactRedux.useSelector)(function (state) {
	    return state.lifeFields.fields;
	  });
	
	  var anualGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.anualGoals.goals;
	  });
	
	  var monthlyGoals = (0, _reactRedux.useSelector)(function (state) {
	    return state.monthlyGoals.goals;
	  });
	
	  var projects = (0, _reactRedux.useSelector)(function (state) {
	    return state.projects.projects;
	  });
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var projectsArr = {};
	
	  lifeFields.map(function (field) {
	    projectsArr[field.designation] = [];
	
	    anualGoals.map(function (anualGoal) {
	      monthlyGoals.map(function (monthlyGoal) {
	        var project = projects.filter(function (project) {
	          if (project.monthlyGoalId == monthlyGoal.id && anualGoal.lifeFieldId == field.id && anualGoal.id == monthlyGoal.anualGoalId && anualGoal.year == year && monthlyGoal.month == month) {
	            project.montlhyGoalDescription = monthlyGoal.description;
	
	            return project;
	          }
	        });
	
	        if (project.length > 0) {
	          var _projectsArr$field$de;
	
	          (_projectsArr$field$de = projectsArr[field.designation]).push.apply(_projectsArr$field$de, _toConsumableArray(project));
	        }
	      });
	    });
	  });
	
	  var handleAddTasks = function handleAddTasks(id) {
	    navigate("/projects/add-tasks/" + id);
	  };
	
	  var handleEdit = function handleEdit(id) {
	    navigate("/projects/update/" + id);
	  };
	
	  var handleDelete = function handleDelete(id) {
	    var title = "Confirmar Remocao";
	    var msg = "Tem certeza que deseja remover este registo?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _projects.deleteProject)(id));
	    });
	  };
	
	  (0, _react.useLayoutEffect)(function () {
	    document.title = "Projectos ";
	  });
	
	  (0, _react.useEffect)(function () {}, []);
	
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(_overview2.default, {
	      circularProgressBarTitle: "Projectos",
	      circularProgressBarPercentage: percentage
	    }),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        _reactRouterDom.Link,
	        { to: "/projects/create", className: "btn btn--primary btn--block" },
	        "Novo"
	      ),
	      _react2.default.createElement(
	        "form",
	        { className: "form mt-2" },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "year", className: "form__label" },
	            "Ano"
	          ),
	          _react2.default.createElement(
	            "select",
	            {
	              name: "year",
	              id: "year",
	              className: "form__select",
	              onChange: function onChange(e) {
	                return setYear(e.target.value);
	              },
	              value: year
	            },
	            _react2.default.createElement(
	              "option",
	              { value: "2022" },
	              "2022"
	            ),
	            _react2.default.createElement(
	              "option",
	              { value: "2021" },
	              "2021"
	            ),
	            _react2.default.createElement(
	              "option",
	              { value: "2020" },
	              "2020"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "month", className: "form__label" },
	            "M\xEAs"
	          ),
	          _react2.default.createElement(_selectMonth2.default, {
	            label: "month",
	            value: month,
	            onChange: function onChange(e) {
	              return setMonth(e.target.value);
	            }
	          })
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "goals" },
	        lifeFields.map(function (field, i) {
	          return _react2.default.createElement(
	            "div",
	            { key: i, className: "goals__section mt-3" },
	            _react2.default.createElement(
	              "div",
	              { className: "goals__header" },
	              _react2.default.createElement(
	                "div",
	                { className: "goals__section-title" },
	                field.designation
	              )
	            ),
	            _react2.default.createElement(
	              "ul",
	              { className: "goals__list" },
	              projectsArr[field.designation].map(function (project, j) {
	                return _react2.default.createElement(_goalItem2.default, {
	                  key: j,
	                  id: project.id,
	                  description: project.title,
	                  progress: project.progress,
	                  onDeleteItem: function onDeleteItem() {
	                    return handleDelete(project.id);
	                  },
	                  onEditItem: function onEditItem() {
	                    return handleEdit(project.id);
	                  },
	                  onAddTasks: function onAddTasks() {
	                    return handleAddTasks(project.id);
	                  },
	                  isProject: true,
	                  parent: project.montlhyGoalDescription
	                });
	              })
	            )
	          );
	        })
	      )
	    )
	  );
	};
	
	exports.default = ProjectsPage;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _reactRedux = __webpack_require__(2);
	
	var _tasks = __webpack_require__(12);
	
	var _reactRouter = __webpack_require__(4);
	
	var _menu = __webpack_require__(67);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _goalItem = __webpack_require__(7);
	
	var _goalItem2 = _interopRequireDefault(_goalItem);
	
	var _projects = __webpack_require__(15);
	
	var _calculateProgress = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProjectTasksPage = function ProjectTasksPage() {
	  var _useState = (0, _react.useState)(""),
	      _useState2 = _slicedToArray(_useState, 2),
	      description = _useState2[0],
	      setDescription = _useState2[1];
	
	  var _useState3 = (0, _react.useState)(false),
	      _useState4 = _slicedToArray(_useState3, 2),
	      isEditingTask = _useState4[0],
	      setIsEditingTask = _useState4[1];
	
	  var _useState5 = (0, _react.useState)(false),
	      _useState6 = _slicedToArray(_useState5, 2),
	      showMenu = _useState6[0],
	      setShowMenu = _useState6[1];
	
	  var _useState7 = (0, _react.useState)(0),
	      _useState8 = _slicedToArray(_useState7, 2),
	      aux = _useState8[0],
	      setAux = _useState8[1];
	
	  var _useState9 = (0, _react.useState)([]),
	      _useState10 = _slicedToArray(_useState9, 2),
	      selectedItems = _useState10[0],
	      setSelectedItems = _useState10[1];
	
	  var _useState11 = (0, _react.useState)(-1),
	      _useState12 = _slicedToArray(_useState11, 2),
	      taskId = _useState12[0],
	      setTaskId = _useState12[1];
	
	  var _useState13 = (0, _react.useState)(false),
	      _useState14 = _slicedToArray(_useState13, 2),
	      showModal = _useState14[0],
	      setShowModal = _useState14[1];
	
	  var _useState15 = (0, _react.useState)((0, _reactRedux.useSelector)(function (state) {
	    return state.lists.lists;
	  })),
	      _useState16 = _slicedToArray(_useState15, 2),
	      allLists = _useState16[0],
	      setAllLists = _useState16[1];
	
	  var dispatch = (0, _reactRedux.useDispatch)();
	
	  var navigate = (0, _reactRouter.useNavigate)();
	
	  var params = (0, _reactRouter.useParams)();
	
	  var _useState17 = (0, _react.useState)([]),
	      _useState18 = _slicedToArray(_useState17, 2),
	      tasks = _useState18[0],
	      setTasks = _useState18[1];
	
	  var allTasksFromProject = (0, _reactRedux.useSelector)(function (state) {
	    return state.tasks.tasks.filter(function (task) {
	      return task.projectId == params.id;
	    });
	  });
	
	  var project = (0, _reactRedux.useSelector)(function (state) {
	    return state.projects.projects.find(function (project) {
	      return project.id == params.id;
	    });
	  });
	
	  (0, _react.useEffect)(function () {
	    setTasks(allTasksFromProject);
	  }, [aux]);
	
	  (0, _react.useEffect)(function () {
	    if (selectedItems.length > 0) {
	      setShowMenu(true);
	    } else {
	      setShowMenu(false);
	    }
	  }, [selectedItems]);
	
	  var handleDelete = function handleDelete() {
	    var title = "Confirmar remocao";
	    var msg = "Tem certeza que deseja remover esta tarefa?";
	
	    _modal2.default.showModal(title, msg, function () {
	      dispatch((0, _tasks.deleteManyTasks)(selectedItems));
	      setAux(function (currentValue) {
	        return currentValue + 1;
	      });
	    });
	  };
	
	  var handleAddTask = function handleAddTask() {
	    if (description == "") return;
	
	    var task = {
	      description: description,
	      projectId: project.id
	    };
	
	    if (taskId > -1) {
	      dispatch((0, _tasks.updateTask)(taskId, task));
	    } else {
	      dispatch((0, _tasks.addTask)(task));
	    }
	
	    setTaskId(-1);
	
	    setAux(function (currentValue) {
	      return ++currentValue;
	    });
	
	    setDescription("");
	  };
	
	  var handleChangeStatus = function handleChangeStatus(id) {
	    dispatch((0, _tasks.changeTaskStatus)(id));
	
	    var progress = (0, _calculateProgress.calculateProgress)(null, allTasksFromProject, params.id);
	
	    dispatch((0, _projects.updateProjectProgress)(params.id, progress));
	  };
	
	  var handleMoveUp = function handleMoveUp() {
	    if (selectedItems.length > 1) return;
	
	    var id = selectedItems[0];
	
	    dispatch((0, _tasks.moveTaskUp)(id));
	
	    setAux(function (currentValue) {
	      return currentValue + 1;
	    });
	  };
	
	  var handleMoveDown = function handleMoveDown() {
	    if (selectedItems.length > 1) return;
	
	    var id = selectedItems[0];
	
	    dispatch((0, _tasks.moveTaskDown)(id));
	
	    setAux(function (currentValue) {
	      return currentValue + 1;
	    });
	  };
	
	  var handleMoveToList = function handleMoveToList() {
	    setShowModal(true);
	  };
	
	  var handleEdit = function handleEdit() {
	    if (selectedItems.length > 1) return;
	
	    var selectedTask = tasks.find(function (task) {
	      return task.id == selectedItems[0];
	    });
	
	    setTaskId(selectedTask.id);
	
	    setDescription(selectedTask.description);
	
	    setSelectedItems([]);
	  };
	
	  var handleSelectItem = function handleSelectItem(newItem) {
	    var currentSelectedItems = Array.from(selectedItems);
	
	    var index = currentSelectedItems.findIndex(function (item) {
	      return item == newItem;
	    });
	
	    if (index == -1) {
	      currentSelectedItems.push(newItem);
	    } else {
	      currentSelectedItems.splice(index, 1);
	    }
	
	    setSelectedItems(currentSelectedItems);
	  };
	
	  var isSelected = function isSelected(id) {
	    var index = selectedItems.findIndex(function (item) {
	      return item == id;
	    });
	
	    return index != -1;
	  };
	
	  var ListModal = function ListModal(_ref) {
	    var showModal = _ref.showModal;
	
	    var lists = (0, _reactRedux.useSelector)(function (state) {
	      return state.lists.lists.filter(function (list) {
	        return list.isVisible;
	      });
	    });
	
	    var _useState19 = (0, _react.useState)(""),
	        _useState20 = _slicedToArray(_useState19, 2),
	        listId = _useState20[0],
	        setListId = _useState20[1];
	
	    var _useState21 = (0, _react.useState)(""),
	        _useState22 = _slicedToArray(_useState21, 2),
	        errorListId = _useState22[0],
	        setErrorList = _useState22[1];
	
	    var handleSubmit = function handleSubmit(e) {
	      e.preventDefault();
	
	      if (listId == "") {
	        setErrorList("Selecione uma lista");
	        return;
	      } else {
	        setErrorList("");
	      }
	
	      dispatch((0, _tasks.moveTasksToList)(selectedItems, listId));
	
	      setSelectedItems([]);
	
	      setShowModal(false);
	    };
	
	    return _react2.default.createElement(
	      _react2.default.Fragment,
	      null,
	      _react2.default.createElement("div", { className: "overlay " + (showModal ? "overlay--show" : null) }),
	      _react2.default.createElement(
	        "div",
	        { className: "modal " + (showModal ? "modal--show" : "") },
	        _react2.default.createElement(
	          "div",
	          { className: "modal__header" },
	          _react2.default.createElement(
	            "p",
	            { className: "modal__title" },
	            "Mover para lista"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "modal__body" },
	          _react2.default.createElement(
	            "form",
	            { className: "form" },
	            _react2.default.createElement(
	              "div",
	              { className: "form__group" },
	              _react2.default.createElement(
	                "label",
	                { htmlFor: "list", className: "form__label" },
	                "Listas"
	              ),
	              _react2.default.createElement(
	                "select",
	                {
	                  name: "listId",
	                  id: "listId",
	                  className: "form__select",
	                  value: listId,
	                  onChange: function onChange(e) {
	                    return setListId(e.target.value);
	                  }
	                },
	                _react2.default.createElement(
	                  "option",
	                  { value: "" },
	                  "-- Selecione uma list --"
	                ),
	                lists.map(function (list, i) {
	                  return _react2.default.createElement(
	                    "option",
	                    { key: i, value: list.id },
	                    list.designation
	                  );
	                })
	              ),
	              _react2.default.createElement(
	                "span",
	                { className: "form__error" },
	                errorListId
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "modal__footer" },
	          _react2.default.createElement(
	            "button",
	            {
	              className: "btn modal__btn modal__btn--cancel",
	              onClick: function onClick() {
	                return setShowModal(false);
	              }
	            },
	            "Nao"
	          ),
	          _react2.default.createElement(
	            "button",
	            {
	              onClick: handleSubmit,
	              className: "btn modal__btn btn--primary modal__btn--submit"
	            },
	            "Sim"
	          )
	        )
	      )
	    );
	  };
	
	  return _react2.default.createElement(
	    _react2.default.Fragment,
	    null,
	    _react2.default.createElement(ListModal, { showModal: showModal }),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "h4",
	        { className: "h4" },
	        "Projecto: ",
	        project.title
	      ),
	      _react2.default.createElement(
	        "form",
	        { className: "form mt-2" },
	        _react2.default.createElement(
	          "div",
	          { className: "form__group" },
	          _react2.default.createElement(
	            "label",
	            { htmlFor: "task", className: "form__label" },
	            "Tarefa"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "form__group form__group--inline" },
	            _react2.default.createElement("input", {
	              type: "text",
	              className: "form__input",
	              "aria-label": "Tarefa",
	              value: description,
	              onChange: function onChange(e) {
	                return setDescription(e.target.value);
	              }
	            }),
	            _react2.default.createElement(
	              "button",
	              {
	                type: "button",
	                className: "btn-image",
	                onClick: handleAddTask
	              },
	              _react2.default.createElement("img", {
	                src: __webpack_require__(61),
	                alt: "Add Task",
	                className: "form__icon"
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "ul",
	          { className: "tasks__list" },
	          tasks.map(function (task, j) {
	            var parent = allLists.find(function (list) {
	              return list.id == task.listId;
	            });
	            return _react2.default.createElement(_goalItem2.default, {
	              key: j,
	              id: task.id,
	              description: task.description,
	              isTask: true,
	              isAddTask: true,
	              onSelectItem: function onSelectItem() {
	                return handleSelectItem(task.id);
	              },
	              onChangeItemStatus: function onChangeItemStatus() {
	                return handleChangeStatus(task.id);
	              },
	              done: task.done,
	              selected: isSelected(task.id),
	              parent: parent ? parent.designation : null
	            });
	          })
	        )
	      )
	    ),
	    _react2.default.createElement(_menu2.default, {
	      showMenu: showMenu,
	      onDelete: handleDelete,
	      onMoveUp: handleMoveUp,
	      onMoveDown: handleMoveDown,
	      numSelectedItems: selectedItems.length,
	      onMoveToList: handleMoveToList,
	      canSubmenuEdit: true,
	      onEdit: handleEdit
	    })
	  );
	};
	
	exports.default = ProjectTasksPage;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _anualGoals = __webpack_require__(35);
	
	var _anualGoals2 = _interopRequireDefault(_anualGoals);
	
	var _anualGoal = __webpack_require__(78);
	
	var _anualGoal2 = _interopRequireDefault(_anualGoal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INITIAL_STATE = {
	  goals: []
	};
	
	var anualGoalReducer = function anualGoalReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _anualGoals2.default.CREATE:
	      var newAnualGoal = new _anualGoal2.default(action.payload.year, action.payload.lifeField, action.payload.description);
	
	      return Object.assign({}, state, {
	        goals: state.goals.concat(newAnualGoal)
	      });
	    case _anualGoals2.default.UPDATE:
	      {
	        var index = state.goals.findIndex(function (goal) {
	          return goal.id == action.payload.id;
	        });
	
	        var updatedGoalsArr = Array.from(state.goals);
	
	        var updatedGoal = updatedGoalsArr[index];
	
	        updatedGoal.year = action.payload.anualGoal.year;
	        updatedGoal.lifeFieldId = action.payload.anualGoal.lifeField;
	        updatedGoal.description = action.payload.anualGoal.description;
	
	        updatedGoalsArr.splice(index, 1, updatedGoal);
	
	        return Object.assign({}, state, {
	          goals: updatedGoalsArr
	        });
	      }
	    case _anualGoals2.default.DELETE:
	      {
	        var _index = state.goals.findIndex(function (goal) {
	          return goal.id == action.payload;
	        });
	
	        var _updatedGoalsArr = Array.from(state.goals);
	
	        _updatedGoalsArr.splice(_index, 1);
	
	        return Object.assign({}, state, {
	          goals: _updatedGoalsArr
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	exports.default = anualGoalReducer;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lifeFields = __webpack_require__(36);
	
	var _lifeFields2 = _interopRequireDefault(_lifeFields);
	
	var _lifeField = __webpack_require__(31);
	
	var _lifeField2 = _interopRequireDefault(_lifeField);
	
	var _lifeFields3 = __webpack_require__(71);
	
	var _lifeFields4 = _interopRequireDefault(_lifeFields3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var INITIAL_STATE = {
	  fields: _lifeFields4.default
	};
	
	var lifeFieldsReducer = function lifeFieldsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _lifeFields2.default.CREATE_LIFE_FIELD:
	      {
	        var newLifeField = new _lifeField2.default(action.payload);
	
	        return Object.assign({}, state, {
	          fields: [].concat(_toConsumableArray(state.fields), [newLifeField])
	        });
	      }
	    case _lifeFields2.default.UPDATE_LIFE_FIELD:
	      {
	        var index = state.fields.findIndex(function (field) {
	          return field.id == action.payload.id;
	        });
	
	        var updatedLifeFields = Array.from(state.fields);
	
	        var updatedLifeField = updatedLifeFields[index];
	
	        updatedLifeField.designation = action.payload.designation;
	
	        updatedLifeFields.splice(index, 1, updatedLifeField);
	
	        return Object.assign({}, state, {
	          fields: updatedLifeFields
	        });
	      }
	    case _lifeFields2.default.DELETE_LIFE_FIELD:
	      {
	        var _index = state.fields.findIndex(function (field) {
	          return field.id == action.payload;
	        });
	
	        var _updatedLifeFields = Array.from(state.fields);
	
	        _updatedLifeFields.splice(_index, 1);
	
	        return Object.assign({}, state, {
	          fields: _updatedLifeFields
	        });
	      }
	    case _lifeFields2.default.CHANGE_LIFE_FIELD_VISIBILITY:
	      {
	        var _index2 = state.lists.findIndex(function (field) {
	          return field.id == action.payload;
	        });
	
	        var currentLifeFields = Array.from(state.fields);
	
	        var lifeField = currentLifeFields[_index2];
	
	        lifeField.isVisible = !lifeField.isVisible;
	
	        currentLifeFields.splice(_index2, 1, lifeField);
	
	        return Object.assign({}, state, {
	          fields: currentLifeFields
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	exports.default = lifeFieldsReducer;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lists = __webpack_require__(24);
	
	var _lists2 = _interopRequireDefault(_lists);
	
	var _list = __webpack_require__(32);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _lists3 = __webpack_require__(72);
	
	var _lists4 = _interopRequireDefault(_lists3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var INITIAL_STATE = {
	  lists: _lists4.default
	};
	
	var listsReducer = function listsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _lists2.default.CREATE:
	      {
	        var newList = new _list2.default(action.payload.designation, action.payload.type);
	
	        return Object.assign({}, state, {
	          lists: [].concat(_toConsumableArray(state.lists), [newList])
	        });
	      }
	    case _lists2.default.UPDATE:
	      {
	        var index = state.lists.findIndex(function (field) {
	          return field.id == action.payload.id;
	        });
	
	        var updatedLists = Array.from(state.lists);
	
	        var updatedList = updatedLists[index];
	
	        updatedList.type = action.payload.list.type;
	        updatedList.designation = action.payload.list.designation;
	
	        updatedLists.splice(index, 1, updatedList);
	
	        return Object.assign({}, state, {
	          lists: updatedLists
	        });
	      }
	    case _lists2.default.DELETE:
	      {
	        var _index = state.lists.findIndex(function (field) {
	          return field.id == action.payload;
	        });
	
	        var _updatedLists = Array.from(state.lists);
	
	        _updatedLists.splice(_index, 1);
	
	        return Object.assign({}, state, {
	          lists: _updatedLists
	        });
	      }
	    case _lists2.default.UPDATE_PROGRESS:
	      {
	        var _index2 = state.lists.findIndex(function (list) {
	          return list.id == action.payload.id;
	        });
	
	        var _updatedLists2 = Array.from(state.lists);
	
	        var _updatedList = _updatedLists2[_index2];
	
	        _updatedList.progress = action.payload.progress;
	        _updatedLists2.splice(_index2, 1, _updatedList);
	
	        return Object.assign({}, state, {
	          lists: _updatedLists2
	        });
	      }
	    case _lists2.default.CHANGE_LIST_VISIBILITY:
	      {
	        var _index3 = state.lists.findIndex(function (list) {
	          return list.id == action.payload;
	        });
	
	        var currentLists = Array.from(state.lists);
	
	        var list = currentLists[_index3];
	
	        list.isVisible = !list.isVisible;
	
	        currentLists.splice(_index3, 1, list);
	
	        return Object.assign({}, state, {
	          lists: currentLists
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	exports.default = listsReducer;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _monthlyGoals = __webpack_require__(37);
	
	var _monthlyGoals2 = _interopRequireDefault(_monthlyGoals);
	
	var _monthlyGoal = __webpack_require__(79);
	
	var _monthlyGoal2 = _interopRequireDefault(_monthlyGoal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INITIAL_STATE = {
	  goals: []
	};
	
	var monthlyGoalReducer = function monthlyGoalReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _monthlyGoals2.default.CREATE:
	      var newMonthlyGoal = new _monthlyGoal2.default(action.payload.month, action.payload.description, action.payload.anualGoalId);
	
	      return Object.assign({}, state, {
	        goals: state.goals.concat(newMonthlyGoal)
	      });
	    case _monthlyGoals2.default.UPDATE:
	      {
	        var index = state.goals.findIndex(function (goal) {
	          return goal.id == action.payload.id;
	        });
	
	        var updatedGoalsArr = Array.from(state.goals);
	
	        var updatedGoal = updatedGoalsArr[index];
	
	        updatedGoal.month = action.payload.monthlyGoal.month;
	        updatedGoal.anualGoalId = action.payload.monthlyGoal.anualGoalId;
	        updatedGoal.description = action.payload.monthlyGoal.description;
	
	        updatedGoalsArr.splice(index, 1, updatedGoal);
	
	        return Object.assign({}, state, {
	          goals: updatedGoalsArr
	        });
	      }
	    case _monthlyGoals2.default.DELETE:
	      {
	        var _index = state.goals.findIndex(function (goal) {
	          return goal.id == action.payload;
	        });
	
	        var _updatedGoalsArr = Array.from(state.goals);
	
	        _updatedGoalsArr.splice(_index, 1);
	
	        return Object.assign({}, state, {
	          goals: _updatedGoalsArr
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	exports.default = monthlyGoalReducer;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _projects = __webpack_require__(38);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var _project = __webpack_require__(80);
	
	var _project2 = _interopRequireDefault(_project);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INITIAL_STATE = {
	  projects: []
	};
	
	var projectsReducer = function projectsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _projects2.default.CREATE:
	      {
	        var newProject = new _project2.default(action.payload.title, action.payload.purpose, action.payload.vision, action.payload.monthlyGoalId);
	
	        return Object.assign({}, state, {
	          projects: state.projects.concat(newProject)
	        });
	      }
	    case _projects2.default.UPDATE:
	      {
	        var index = state.projects.findIndex(function (project) {
	          return project.id == action.payload.id;
	        });
	
	        var updatedProjects = Array.from(state.projects);
	
	        var updatedProject = updatedProjects[index];
	
	        updatedProject.title = action.payload.project.title;
	        updatedProject.purpose = action.payload.project.purpose;
	        updatedProject.vision = action.payload.project.vision;
	        updatedProject.monthlyGoalId = action.payload.project.monthlyGoalId;
	
	        updatedProjects.splice(index, 1, updatedProject);
	
	        return Object.assign({}, state, {
	          projects: updatedProjects
	        });
	      }
	    case _projects2.default.DELETE:
	      {
	        var _index = state.projects.findIndex(function (project) {
	          return project.id == action.payload;
	        });
	
	        var _updatedProjects = Array.from(state.projects);
	
	        _updatedProjects.splice(_index, 1);
	
	        return Object.assign({}, state, {
	          projects: _updatedProjects
	        });
	      }
	    case _projects2.default.UPDATE_PROJECT_PROGRESS:
	      {
	        var _index2 = state.projects.findIndex(function (project) {
	          return project.id == action.payload.id;
	        });
	
	        var _updatedProjects2 = Array.from(state.projects);
	
	        var currentProject = _updatedProjects2[_index2];
	
	        currentProject.progress = action.payload.progress;
	
	        return Object.assign({}, state, {
	          projects: _updatedProjects2
	        });
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = projectsReducer;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _tasks = __webpack_require__(39);
	
	var _tasks2 = _interopRequireDefault(_tasks);
	
	var _task = __webpack_require__(81);
	
	var _task2 = _interopRequireDefault(_task);
	
	var _lists = __webpack_require__(24);
	
	var _lists2 = _interopRequireDefault(_lists);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var INITIAL_STATE = {
	  tasks: []
	};
	
	var tasksReducer = function tasksReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _tasks2.default.CREATE:
	      {
	        var newTask = new _task2.default(action.payload.description, action.payload.listId, action.payload.projectId, false, action.payload.dueDate);
	
	        var tasksArr = Array.from(state.tasks);
	
	        tasksArr.push(newTask);
	
	        return Object.assign({}, state, {
	          tasks: tasksArr
	        });
	      }
	    case _tasks2.default.CREATE_PROJECT_TASKS:
	      {
	        var _tasksArr = Array.from(state.tasks);
	
	        _tasksArr.push.apply(_tasksArr, _toConsumableArray(action.payload));
	
	        return Object.assign({}, state, {
	          tasks: _tasksArr
	        });
	      }
	    case _tasks2.default.UPDATE:
	      {
	        var index = state.tasks.findIndex(function (task) {
	          return task.id == action.payload.id;
	        });
	
	        var allTasks = Array.from(state.tasks);
	
	        var taskToUpdate = allTasks[index];
	
	        taskToUpdate.description = action.payload.task.description;
	
	        if (action.payload.task.listId) taskToUpdate.listId = action.payload.task.listId;
	        if (action.payload.task.projectId) taskToUpdate.projectId = action.payload.task.projectId;
	
	        allTasks.splice(index, 1, taskToUpdate);
	
	        return Object.assign({}, state, {
	          tasks: allTasks
	        });
	      }
	    case _tasks2.default.CHANGE_STATUS:
	      {
	        var _index = state.tasks.findIndex(function (task) {
	          return task.id == action.payload;
	        });
	
	        var _allTasks = Array.from(state.tasks);
	
	        var _taskToUpdate = _allTasks[_index];
	
	        _taskToUpdate.done = !_taskToUpdate.done;
	
	        _allTasks.splice(_index, 1, _taskToUpdate);
	
	        return Object.assign({}, state, {
	          tasks: _allTasks
	        });
	      }
	    case _tasks2.default.DELETE:
	      {
	        var _index2 = state.tasks.findIndex(function (task) {
	          return task.id == action.payload;
	        });
	
	        var currentTasks = Array.from(state.tasks);
	
	        currentTasks.splice(_index2, 1);
	
	        return Object.assign({}, state, {
	          tasks: currentTasks
	        });
	      }
	    case _tasks2.default.DELETE_MANY:
	      {
	        var newTasks = state.tasks.filter(function (task) {
	          return action.payload.indexOf(task.id) === -1;
	        });
	
	        return Object.assign({}, state, {
	          tasks: newTasks
	        });
	      }
	
	    case _tasks2.default.MOVE_TASK_UP:
	      {
	        var _currentTasks = Array.from(state.tasks);
	
	        var _index3 = _currentTasks.findIndex(function (task) {
	          return task.id == action.payload;
	        });
	
	        if (_index3 == -1 || _index3 == 0) return state;
	
	        var previousTask = _currentTasks[_index3 - 1];
	
	        var selectedTask = _currentTasks[_index3];
	
	        _currentTasks[_index3] = previousTask;
	
	        _currentTasks[_index3 - 1] = selectedTask;
	
	        return Object.assign({}, state, {
	          tasks: _currentTasks
	        });
	      }
	    case _tasks2.default.MOVE_TASK_DOWN:
	      {
	        var _currentTasks2 = Array.from(state.tasks);
	
	        var _index4 = _currentTasks2.findIndex(function (task) {
	          return task.id == action.payload;
	        });
	
	        if (_index4 == -1 || _index4 == _currentTasks2.length - 1) return state;
	
	        var _previousTask = _currentTasks2[_index4 + 1];
	
	        var _selectedTask = _currentTasks2[_index4];
	
	        _currentTasks2[_index4] = _previousTask;
	
	        _currentTasks2[_index4 + 1] = _selectedTask;
	
	        return Object.assign({}, state, {
	          tasks: _currentTasks2
	        });
	      }
	    case _tasks2.default.MOVE_TASKS_TO_LIST:
	      {
	        var _ret = function () {
	          var currentTasks = Array.from(state.tasks);
	
	          var tasksIds = action.payload.ids;
	
	          var _loop = function _loop(i) {
	            var taskToMove = currentTasks.find(function (task) {
	              return task.id == tasksIds[i];
	            });
	
	            var index = currentTasks.findIndex(function (task) {
	              return task.id == taskToMove.id;
	            });
	
	            taskToMove.listId = action.payload.listId;
	
	            currentTasks.splice(index, 1, taskToMove);
	          };
	
	          for (var i = 0; i < tasksIds.length; i++) {
	            _loop(i);
	          }
	
	          return {
	            v: Object.assign({}, state, {
	              tasks: currentTasks
	            })
	          };
	        }();
	
	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }
	    default:
	      return state;
	  }
	};
	
	exports.default = tasksReducer;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _user = __webpack_require__(40);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INITIAL_STATE = {
	  currentUser: null,
	  token: null
	};
	
	var userReducer = function userReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _user2.default.SET_CURRENT_USER:
	      return Object.assign({}, state, {
	        currentUser: action.payload.user,
	        token: action.payload.token
	      });
	
	    default:
	      break;
	  }
	  return state;
	};
	
	exports.default = userReducer;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(19);
	
	var _reduxPersist = __webpack_require__(58);
	
	var _storage = __webpack_require__(164);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _lists = __webpack_require__(105);
	
	var _lists2 = _interopRequireDefault(_lists);
	
	var _lifeFields = __webpack_require__(104);
	
	var _lifeFields2 = _interopRequireDefault(_lifeFields);
	
	var _anualGoals = __webpack_require__(103);
	
	var _anualGoals2 = _interopRequireDefault(_anualGoals);
	
	var _monthlyGoals = __webpack_require__(106);
	
	var _monthlyGoals2 = _interopRequireDefault(_monthlyGoals);
	
	var _projects = __webpack_require__(107);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var _user = __webpack_require__(109);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _tasks = __webpack_require__(108);
	
	var _tasks2 = _interopRequireDefault(_tasks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var persistConfig = {
	  key: "root",
	  storage: _storage2.default,
	  whitelist: ["lifeFields", "anualGoals", "monthlyGoals", "projects", "user", "lists", "tasks"]
	};
	
	var rootReducer = (0, _redux.combineReducers)({
	  lists: _lists2.default,
	  lifeFields: _lifeFields2.default,
	  anualGoals: _anualGoals2.default,
	  monthlyGoals: _monthlyGoals2.default,
	  projects: _projects2.default,
	  user: _user2.default,
	  tasks: _tasks2.default
	});
	
	exports.default = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.persistor = exports.store = undefined;
	
	var _redux = __webpack_require__(19);
	
	var _reduxPersist = __webpack_require__(58);
	
	var _reduxLogger = __webpack_require__(155);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _rootReducer = __webpack_require__(110);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var middlewares = [_reduxLogger2.default];
	
	var store = exports.store = (0, _redux.createStore)(_rootReducer2.default, _redux.applyMiddleware.apply(undefined, middlewares));
	
	var persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var progress = exports.progress = function progress(percentage) {
	  var lineLeft = document.querySelector(".circular-progress-bar__line--left");
	  var lineRight = document.querySelector(".circular-progress-bar__line--right");
	
	  var rightPercentage = void 0;
	
	  if (percentage <= 50) {
	    lineRight.style.transform = "rotate(0deg)";
	
	    rightPercentage = 180 * percentage / 50;
	
	    lineLeft.style.transform = "rotate(" + rightPercentage + "deg)";
	  } else {
	    rightPercentage = 180 * 100 / percentage;
	
	    lineRight.style.transform = "rotate(-" + rightPercentage + "deg)";
	
	    lineLeft.style.transform = "rotate(180deg)";
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getMonthName = exports.getMonthName = function getMonthName(monthNumber) {
	  switch (monthNumber + "") {
	    case "0":
	      return "Janeiro";
	    case "1":
	      return "Fevereiro";
	    case "2":
	      return "Marco";
	    case "3":
	      return "Abril";
	    case "4":
	      return "Maio";
	    case "5":
	      return "Junho";
	    case "6":
	      return "Julho";
	    case "7":
	      return "Agosto";
	    case "8":
	      return "Setembro";
	    case "9":
	      return "Outubro";
	    case "10":
	      return "Novembro";
	    case "11":
	      return "Dezembro";
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Topbar = function () {
	  function Topbar() {
	    _classCallCheck(this, Topbar);
	  }
	
	  _createClass(Topbar, [{
	    key: "showSidebar",
	    value: function showSidebar() {
	      document.querySelector(".sidebar").classList.add("sidebar--show");
	      document.querySelector(".overlay").classList.add("overlay--show");
	
	      document.querySelector(".overlay").addEventListener("click", function () {
	        document.querySelector(".sidebar").classList.remove("sidebar--show");
	        document.querySelector(".overlay").classList.remove("overlay--show");
	      });
	    }
	  }, {
	    key: "hideSidebar",
	    value: function hideSidebar() {
	      document.querySelector(".sidebar").classList.remove("sidebar--show");
	      document.querySelector(".overlay").classList.remove("overlay--show");
	    }
	  }]);
	
	  return Topbar;
	}();
	
	exports.default = new Topbar();

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(116);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 116 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/arrow-bold-up.fd606ac5.svg";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/arrow-down.c72fdc2a.svg";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/circle-with-minus.8b514694.svg";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/clipboard-6.12e43dc5.svg";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/eye-closed.3337dfff.svg";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/eye-open.60b103e0.svg";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/forward.39619d50.svg";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/menu.154791d2.svg";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,n){ true?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).HistoryLibrary={})}(this,(function(t){"use strict";function n(){return(n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var e;t.Action=void 0,(e=t.Action||(t.Action={})).Pop="POP",e.Push="PUSH",e.Replace="REPLACE";var r="beforeunload",o="popstate";function a(t,n,e){return Math.min(Math.max(t,n),e)}function i(t){t.preventDefault(),t.returnValue=""}function c(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter((function(t){return t!==n}))}},call:function(n){t.forEach((function(t){return t&&t(n)}))}}}function u(){return Math.random().toString(36).substr(2,8)}function l(t){var n=t.pathname,e=void 0===n?"/":n,r=t.search,o=void 0===r?"":r,a=t.hash,i=void 0===a?"":a;return o&&"?"!==o&&(e+="?"===o.charAt(0)?o:"?"+o),i&&"#"!==i&&(e+="#"===i.charAt(0)?i:"#"+i),e}function f(t){var n={};if(t){var e=t.indexOf("#");e>=0&&(n.hash=t.substr(e),t=t.substr(0,e));var r=t.indexOf("?");r>=0&&(n.search=t.substr(r),t=t.substr(0,r)),t&&(n.pathname=t)}return n}t.createBrowserHistory=function(e){void 0===e&&(e={});var a=e.window,s=void 0===a?document.defaultView:a,h=s.history;function p(){var t=s.location,n=t.pathname,e=t.search,r=t.hash,o=h.state||{};return[o.idx,{pathname:n,search:e,hash:r,state:o.usr||null,key:o.key||"default"}]}var v=null;s.addEventListener(o,(function(){if(v)A.call(v),v=null;else{var n=t.Action.Pop,e=p(),r=e[0],o=e[1];if(A.length){if(null!=r){var a=y-r;a&&(v={action:n,location:o,retry:function(){H(-1*a)}},H(a))}}else E(n)}}));var d=t.Action.Pop,g=p(),y=g[0],m=g[1],b=c(),A=c();function P(t){return"string"==typeof t?t:l(t)}function k(t,e){return void 0===e&&(e=null),n({pathname:m.pathname,hash:"",search:""},"string"==typeof t?f(t):t,{state:e,key:u()})}function x(t,n){return[{usr:t.state,key:t.key,idx:n},P(t)]}function w(t,n,e){return!A.length||(A.call({action:t,location:n,retry:e}),!1)}function E(t){d=t;var n=p();y=n[0],m=n[1],b.call({action:d,location:m})}function H(t){h.go(t)}return null==y&&(y=0,h.replaceState(n({},h.state,{idx:y}),"")),{get action(){return d},get location(){return m},createHref:P,push:function n(e,r){var o=t.Action.Push,a=k(e,r);if(w(o,a,(function(){n(e,r)}))){var i=x(a,y+1),c=i[0],u=i[1];try{h.pushState(c,"",u)}catch(t){s.location.assign(u)}E(o)}},replace:function n(e,r){var o=t.Action.Replace,a=k(e,r);if(w(o,a,(function(){n(e,r)}))){var i=x(a,y),c=i[0],u=i[1];h.replaceState(c,"",u),E(o)}},go:H,back:function(){H(-1)},forward:function(){H(1)},listen:function(t){return b.push(t)},block:function(t){var n=A.push(t);return 1===A.length&&s.addEventListener(r,i),function(){n(),A.length||s.removeEventListener(r,i)}}}},t.createHashHistory=function(e){void 0===e&&(e={});var a=e.window,s=void 0===a?document.defaultView:a,h=s.history;function p(){var t=f(s.location.hash.substr(1)),n=t.pathname,e=void 0===n?"/":n,r=t.search,o=void 0===r?"":r,a=t.hash,i=void 0===a?"":a,c=h.state||{};return[c.idx,{pathname:e,search:o,hash:i,state:c.usr||null,key:c.key||"default"}]}var v=null;function d(){if(v)P.call(v),v=null;else{var n=t.Action.Pop,e=p(),r=e[0],o=e[1];if(P.length){if(null!=r){var a=m-r;a&&(v={action:n,location:o,retry:function(){L(-1*a)}},L(a))}}else H(n)}}s.addEventListener(o,d),s.addEventListener("hashchange",(function(){l(p()[1])!==l(b)&&d()}));var g=t.Action.Pop,y=p(),m=y[0],b=y[1],A=c(),P=c();function k(t){return function(){var t=document.querySelector("base"),n="";if(t&&t.getAttribute("href")){var e=s.location.href,r=e.indexOf("#");n=-1===r?e:e.slice(0,r)}return n}()+"#"+("string"==typeof t?t:l(t))}function x(t,e){return void 0===e&&(e=null),n({pathname:b.pathname,hash:"",search:""},"string"==typeof t?f(t):t,{state:e,key:u()})}function w(t,n){return[{usr:t.state,key:t.key,idx:n},k(t)]}function E(t,n,e){return!P.length||(P.call({action:t,location:n,retry:e}),!1)}function H(t){g=t;var n=p();m=n[0],b=n[1],A.call({action:g,location:b})}function L(t){h.go(t)}return null==m&&(m=0,h.replaceState(n({},h.state,{idx:m}),"")),{get action(){return g},get location(){return b},createHref:k,push:function n(e,r){var o=t.Action.Push,a=x(e,r);if(E(o,a,(function(){n(e,r)}))){var i=w(a,m+1),c=i[0],u=i[1];try{h.pushState(c,"",u)}catch(t){s.location.assign(u)}H(o)}},replace:function n(e,r){var o=t.Action.Replace,a=x(e,r);if(E(o,a,(function(){n(e,r)}))){var i=w(a,m),c=i[0],u=i[1];h.replaceState(c,"",u),H(o)}},go:L,back:function(){L(-1)},forward:function(){L(1)},listen:function(t){return A.push(t)},block:function(t){var n=P.push(t);return 1===P.length&&s.addEventListener(r,i),function(){n(),P.length||s.removeEventListener(r,i)}}}},t.createMemoryHistory=function(e){void 0===e&&(e={});var r=e,o=r.initialEntries,i=void 0===o?["/"]:o,s=r.initialIndex,h=i.map((function(t){return n({pathname:"/",search:"",hash:"",state:null,key:u()},"string"==typeof t?f(t):t)})),p=a(null==s?h.length-1:s,0,h.length-1),v=t.Action.Pop,d=h[p],g=c(),y=c();function m(t,e){return void 0===e&&(e=null),n({pathname:d.pathname,search:"",hash:""},"string"==typeof t?f(t):t,{state:e,key:u()})}function b(t,n,e){return!y.length||(y.call({action:t,location:n,retry:e}),!1)}function A(t,n){v=t,d=n,g.call({action:v,location:d})}function P(n){var e=a(p+n,0,h.length-1),r=t.Action.Pop,o=h[e];b(r,o,(function(){P(n)}))&&(p=e,A(r,o))}return{get index(){return p},get action(){return v},get location(){return d},createHref:function(t){return"string"==typeof t?t:l(t)},push:function n(e,r){var o=t.Action.Push,a=m(e,r);b(o,a,(function(){n(e,r)}))&&(p+=1,h.splice(p,h.length,a),A(o,a))},replace:function n(e,r){var o=t.Action.Replace,a=m(e,r);b(o,a,(function(){n(e,r)}))&&(h[p]=a,A(o,a))},go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(t){return g.push(t)},block:function(t){return y.push(t)}}},t.createPath=l,t.parsePath=f,Object.defineProperty(t,"__esModule",{value:!0})}));
	//# sourceMappingURL=history.production.min.js.map


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var reactIs = __webpack_require__(129);
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	
	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above
	
	
	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);
	
	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }
	
	    var keys = getOwnPropertyNames(sourceComponent);
	
	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }
	
	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);
	
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];
	
	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	
	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }
	
	  return targetComponent;
	}
	
	module.exports = hoistNonReactStatics;


/***/ },
/* 128 */
/***/ function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ },
/* 129 */
[170, 128],
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(46);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(46);
	
	var DEFAULT_WHITELIST = [
	  ReferenceError,
	  TypeError,
	  RangeError
	];
	
	var enabled = false;
	exports.disable = disable;
	function disable() {
	  enabled = false;
	  Promise._10 = null;
	  Promise._97 = null;
	}
	
	exports.enable = enable;
	function enable(options) {
	  options = options || {};
	  if (enabled) disable();
	  enabled = true;
	  var id = 0;
	  var displayId = 0;
	  var rejections = {};
	  Promise._10 = function (promise) {
	    if (
	      promise._81 === 2 && // IS REJECTED
	      rejections[promise._72]
	    ) {
	      if (rejections[promise._72].logged) {
	        onHandled(promise._72);
	      } else {
	        clearTimeout(rejections[promise._72].timeout);
	      }
	      delete rejections[promise._72];
	    }
	  };
	  Promise._97 = function (promise, err) {
	    if (promise._45 === 0) { // not yet handled
	      promise._72 = id++;
	      rejections[promise._72] = {
	        displayId: null,
	        error: err,
	        timeout: setTimeout(
	          onUnhandled.bind(null, promise._72),
	          // For reference errors and type errors, this almost always
	          // means the programmer made a mistake, so log them after just
	          // 100ms
	          // otherwise, wait 2 seconds to see if they get handled
	          matchWhitelist(err, DEFAULT_WHITELIST)
	            ? 100
	            : 2000
	        ),
	        logged: false
	      };
	    }
	  };
	  function onUnhandled(id) {
	    if (
	      options.allRejections ||
	      matchWhitelist(
	        rejections[id].error,
	        options.whitelist || DEFAULT_WHITELIST
	      )
	    ) {
	      rejections[id].displayId = displayId++;
	      if (options.onUnhandled) {
	        rejections[id].logged = true;
	        options.onUnhandled(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      } else {
	        rejections[id].logged = true;
	        logError(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      }
	    }
	  }
	  function onHandled(id) {
	    if (rejections[id].logged) {
	      if (options.onHandled) {
	        options.onHandled(rejections[id].displayId, rejections[id].error);
	      } else if (!rejections[id].onUnhandled) {
	        console.warn(
	          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
	        );
	        console.warn(
	          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
	          rejections[id].displayId + '.'
	        );
	      }
	    }
	  }
	}
	
	function logError(id, error) {
	  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
	  var errStr = (error && (error.stack || error)) + '';
	  errStr.split('\n').forEach(function (line) {
	    console.warn('  ' + line);
	  });
	}
	
	function matchWhitelist(error, list) {
	  return list.some(function (cls) {
	    return error instanceof cls;
	  });
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = __webpack_require__(134);
	
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (false) {
	  var ReactIs = require('react-is');
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(132)();
	}


/***/ },
/* 134 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v17.0.2
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	/*
	 Modernizr 3.0.0pre (Custom Build) | MIT
	*/
	'use strict';var aa=__webpack_require__(1),m=__webpack_require__(25),r=__webpack_require__(166);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
	function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
	var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
	ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
	function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
	["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
	pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
	D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
	function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
	var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
	if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
	var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
	function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
	function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
	function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
	return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
	null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
	function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
	function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
	function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
	function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
	var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
	function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
	function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
	function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
	function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
	function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
	function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
	function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
	function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
	function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
	function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
	function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
	function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
	function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
	function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
	fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
	var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
	"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
	function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
	F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
	function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
	function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
	function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
	function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
	var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
	function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
	function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
	0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
	ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
	function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
	function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
	function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
	function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
	function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
	a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
	t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
	x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
	gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
	K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
	case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
	"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
	function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
	function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
	function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
	function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
	function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
	function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
	var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
	function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
	function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
	function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
	function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
	function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
	function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b}
	function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
	next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
	f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
	function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
	var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
	b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
	function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
	function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
	(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
	function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
	function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
	function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
	c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
	Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
	a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
	null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
	n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
	h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
	u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
	d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
	Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
	function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
	function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
	function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
	function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
	function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
	function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
	function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
	function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
	function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
	eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
	function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
	function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
	function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
	e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
	function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
	function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
	function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
	function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
	function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
	function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
	var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
	b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
	wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
	void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
	a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
	a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
	function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
	function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
	function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
	function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
	function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
	typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
	"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
	x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
	h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
	function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
	var si={dehydrated:null,retryLane:0};
	function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
	b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
	{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
	function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
	function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
	function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
	function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
	function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
	Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
	Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
	l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
	(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
	c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
	function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
	b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
	{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
	jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
	e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
	gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
	break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
	c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
	4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
	null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
	f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
	64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
	function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
	function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
	function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
	function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
	function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
	b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
	return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
	function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
	a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
	function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
	f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
	function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
	c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
	function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
	function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
	function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
	8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
	function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
	2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
	b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
	function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
	function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
	function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
	function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
	c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
	function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
	a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
	c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
	function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
	function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
	function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
	function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
	(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
	void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
	g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
	function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
	function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
	a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
	function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
	Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
	break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
	Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
	J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
	g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
	0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
	Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
	function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
	function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
	null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
	function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
	function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
	ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
	b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
	typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
	a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
	d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
	ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
	c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
	k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
	f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
	};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
	function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
	function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
	typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
	function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
	function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
	d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
	function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
	qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
	function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
	function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
	gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
	yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
	Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
	var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
	pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
	exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
	exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
	exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ },
/* 136 */
/***/ function(module, exports) {

	/** @license React v17.0.2
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	'use strict';var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
	if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden")}
	function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;exports.ContextConsumer=h;exports.ContextProvider=z;exports.Element=A;exports.ForwardRef=B;exports.Fragment=C;exports.Lazy=D;exports.Memo=E;exports.Portal=F;exports.Profiler=G;exports.StrictMode=H;
	exports.Suspense=I;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return y(a)===h};exports.isContextProvider=function(a){return y(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return y(a)===k};exports.isFragment=function(a){return y(a)===d};exports.isLazy=function(a){return y(a)===p};exports.isMemo=function(a){return y(a)===n};
	exports.isPortal=function(a){return y(a)===c};exports.isProfiler=function(a){return y(a)===f};exports.isStrictMode=function(a){return y(a)===e};exports.isSuspense=function(a){return y(a)===l};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
	exports.typeOf=y;


/***/ },
/* 137 */
[170, 136],
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	var _interopRequireWildcard = __webpack_require__(28)["default"];
	
	exports.__esModule = true;
	exports["default"] = void 0;
	
	var _react = _interopRequireWildcard(__webpack_require__(1));
	
	var _propTypes = _interopRequireDefault(__webpack_require__(133));
	
	var _Context = __webpack_require__(8);
	
	var _Subscription = __webpack_require__(26);
	
	var _useIsomorphicLayoutEffect = __webpack_require__(27);
	
	function Provider(_ref) {
	  var store = _ref.store,
	      context = _ref.context,
	      children = _ref.children;
	  var contextValue = (0, _react.useMemo)(function () {
	    var subscription = (0, _Subscription.createSubscription)(store);
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    return {
	      store: store,
	      subscription: subscription
	    };
	  }, [store]);
	  var previousState = (0, _react.useMemo)(function () {
	    return store.getState();
	  }, [store]);
	  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
	    var subscription = contextValue.subscription;
	    subscription.trySubscribe();
	
	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }
	
	    return function () {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = null;
	    };
	  }, [contextValue, previousState]);
	  var Context = context || _Context.ReactReduxContext;
	  return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
	    value: contextValue
	  }, children);
	}
	
	if (false) {
	  Provider.propTypes = {
	    store: _propTypes["default"].shape({
	      subscribe: _propTypes["default"].func.isRequired,
	      dispatch: _propTypes["default"].func.isRequired,
	      getState: _propTypes["default"].func.isRequired
	    }),
	    context: _propTypes["default"].object,
	    children: _propTypes["default"].any
	  };
	}
	
	var _default = Provider;
	exports["default"] = _default;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports.createConnect = createConnect;
	exports["default"] = void 0;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(20));
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(21));
	
	var _connectAdvanced = _interopRequireDefault(__webpack_require__(48));
	
	var _shallowEqual = _interopRequireDefault(__webpack_require__(53));
	
	var _mapDispatchToProps = _interopRequireDefault(__webpack_require__(140));
	
	var _mapStateToProps = _interopRequireDefault(__webpack_require__(141));
	
	var _mergeProps = _interopRequireDefault(__webpack_require__(142));
	
	var _selectorFactory = _interopRequireDefault(__webpack_require__(143));
	
	var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	} // createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	
	
	function createConnect(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced["default"] : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps["default"] : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps["default"] : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps["default"] : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory["default"] : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
	    if (_ref2 === void 0) {
	      _ref2 = {};
	    }
	
	    var _ref3 = _ref2,
	        _ref3$pure = _ref3.pure,
	        pure = _ref3$pure === void 0 ? true : _ref3$pure,
	        _ref3$areStatesEqual = _ref3.areStatesEqual,
	        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
	        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
	        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _shallowEqual["default"] : _ref3$areOwnPropsEqua,
	        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
	        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _shallowEqual["default"] : _ref3$areStatePropsEq,
	        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
	        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _shallowEqual["default"] : _ref3$areMergedPropsE,
	        extraOptions = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, _excluded);
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	    return connectHOC(selectorFactory, (0, _extends2["default"])({
	      // used in error messages
	      methodName: 'connect',
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return "Connect(" + name + ")";
	      },
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	    }, extraOptions));
	  };
	}
	
	var _default = /*#__PURE__*/createConnect();
	
	exports["default"] = _default;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports["default"] = void 0;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	
	var _bindActionCreators = _interopRequireDefault(__webpack_require__(148));
	
	var _wrapMapToProps = __webpack_require__(49);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return {
	      dispatch: dispatch
	    };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _bindActionCreators["default"])(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	var _default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
	exports["default"] = _default;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = void 0;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	
	var _wrapMapToProps = __webpack_require__(49);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	var _default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
	exports["default"] = _default;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports["default"] = void 0;
	exports.defaultMergeProps = defaultMergeProps;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(20));
	
	var _verifyPlainObject = _interopRequireDefault(__webpack_require__(54));
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return (0, _extends2["default"])({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	    var hasRunOnce = false;
	    var mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        if (false) (0, _verifyPlainObject["default"])(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	var _default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	exports["default"] = _default;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports["default"] = finalPropsSelectorFactory;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(21));
	
	var _verifySubselectors = _interopRequireDefault(__webpack_require__(144));
	
	var _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	  var hasRunAtLeastOnce = false;
	  var state;
	  var ownProps;
	  var stateProps;
	  var dispatchProps;
	  var mergedProps;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	} // TODO: Add more comments
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded);
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (false) {
	    (0, _verifySubselectors["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	exports["default"] = verifySubselectors;
	
	var _warning = _interopRequireDefault(__webpack_require__(55));
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
	      (0, _warning["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5)["default"];
	
	exports.__esModule = true;
	
	var _Provider = _interopRequireDefault(__webpack_require__(138));
	
	exports.Provider = _Provider["default"];
	
	var _connectAdvanced = _interopRequireDefault(__webpack_require__(48));
	
	exports.connectAdvanced = _connectAdvanced["default"];
	
	var _Context = __webpack_require__(8);
	
	exports.ReactReduxContext = _Context.ReactReduxContext;
	
	var _connect = _interopRequireDefault(__webpack_require__(139));
	
	exports.connect = _connect["default"];
	
	var _useDispatch = __webpack_require__(146);
	
	exports.useDispatch = _useDispatch.useDispatch;
	exports.createDispatchHook = _useDispatch.createDispatchHook;
	
	var _useSelector = __webpack_require__(147);
	
	exports.useSelector = _useSelector.useSelector;
	exports.createSelectorHook = _useSelector.createSelectorHook;
	
	var _useStore = __webpack_require__(51);
	
	exports.useStore = _useStore.useStore;
	exports.createStoreHook = _useStore.createStoreHook;
	
	var _shallowEqual = _interopRequireDefault(__webpack_require__(53));
	
	exports.shallowEqual = _shallowEqual["default"];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.createDispatchHook = createDispatchHook;
	exports.useDispatch = void 0;
	
	var _Context = __webpack_require__(8);
	
	var _useStore = __webpack_require__(51);
	
	/**
	 * Hook factory, which creates a `useDispatch` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useDispatch` hook bound to the specified context.
	 */
	function createDispatchHook(context) {
	  if (context === void 0) {
	    context = _Context.ReactReduxContext;
	  }
	
	  var useStore = context === _Context.ReactReduxContext ? _useStore.useStore : (0, _useStore.createStoreHook)(context);
	  return function useDispatch() {
	    var store = useStore();
	    return store.dispatch;
	  };
	}
	/**
	 * A hook to access the redux `dispatch` function.
	 *
	 * @returns {any|function} redux store's `dispatch` function
	 *
	 * @example
	 *
	 * import React, { useCallback } from 'react'
	 * import { useDispatch } from 'react-redux'
	 *
	 * export const CounterComponent = ({ value }) => {
	 *   const dispatch = useDispatch()
	 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
	 *   return (
	 *     <div>
	 *       <span>{value}</span>
	 *       <button onClick={increaseCounter}>Increase counter</button>
	 *     </div>
	 *   )
	 * }
	 */
	
	
	var useDispatch = /*#__PURE__*/createDispatchHook();
	exports.useDispatch = useDispatch;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.createSelectorHook = createSelectorHook;
	exports.useSelector = void 0;
	
	var _react = __webpack_require__(1);
	
	var _useReduxContext2 = __webpack_require__(50);
	
	var _Subscription = __webpack_require__(26);
	
	var _useIsomorphicLayoutEffect = __webpack_require__(27);
	
	var _Context = __webpack_require__(8);
	
	var refEquality = function refEquality(a, b) {
	  return a === b;
	};
	
	function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
	  var _useReducer = (0, _react.useReducer)(function (s) {
	    return s + 1;
	  }, 0),
	      forceRender = _useReducer[1];
	
	  var subscription = (0, _react.useMemo)(function () {
	    return (0, _Subscription.createSubscription)(store, contextSub);
	  }, [store, contextSub]);
	  var latestSubscriptionCallbackError = (0, _react.useRef)();
	  var latestSelector = (0, _react.useRef)();
	  var latestStoreState = (0, _react.useRef)();
	  var latestSelectedState = (0, _react.useRef)();
	  var storeState = store.getState();
	  var selectedState;
	
	  try {
	    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
	      var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references
	
	      if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
	        selectedState = newSelectedState;
	      } else {
	        selectedState = latestSelectedState.current;
	      }
	    } else {
	      selectedState = latestSelectedState.current;
	    }
	  } catch (err) {
	    if (latestSubscriptionCallbackError.current) {
	      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
	    }
	
	    throw err;
	  }
	
	  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
	    latestSelector.current = selector;
	    latestStoreState.current = storeState;
	    latestSelectedState.current = selectedState;
	    latestSubscriptionCallbackError.current = undefined;
	  });
	  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
	    function checkForUpdates() {
	      try {
	        var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed
	
	        if (newStoreState === latestStoreState.current) {
	          return;
	        }
	
	        var _newSelectedState = latestSelector.current(newStoreState);
	
	        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
	          return;
	        }
	
	        latestSelectedState.current = _newSelectedState;
	        latestStoreState.current = newStoreState;
	      } catch (err) {
	        // we ignore all errors here, since when the component
	        // is re-rendered, the selectors are called again, and
	        // will throw again, if neither props nor store state
	        // changed
	        latestSubscriptionCallbackError.current = err;
	      }
	
	      forceRender();
	    }
	
	    subscription.onStateChange = checkForUpdates;
	    subscription.trySubscribe();
	    checkForUpdates();
	    return function () {
	      return subscription.tryUnsubscribe();
	    };
	  }, [store, subscription]);
	  return selectedState;
	}
	/**
	 * Hook factory, which creates a `useSelector` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useSelector` hook bound to the specified context.
	 */
	
	
	function createSelectorHook(context) {
	  if (context === void 0) {
	    context = _Context.ReactReduxContext;
	  }
	
	  var useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext2.useReduxContext : function () {
	    return (0, _react.useContext)(context);
	  };
	  return function useSelector(selector, equalityFn) {
	    if (equalityFn === void 0) {
	      equalityFn = refEquality;
	    }
	
	    if (false) {
	      if (!selector) {
	        throw new Error("You must pass a selector to useSelector");
	      }
	
	      if (typeof selector !== 'function') {
	        throw new Error("You must pass a function as a selector to useSelector");
	      }
	
	      if (typeof equalityFn !== 'function') {
	        throw new Error("You must pass a function as an equality function to useSelector");
	      }
	    }
	
	    var _useReduxContext = useReduxContext(),
	        store = _useReduxContext.store,
	        contextSub = _useReduxContext.subscription;
	
	    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
	    (0, _react.useDebugValue)(selectedState);
	    return selectedState;
	  };
	}
	/**
	 * A hook to access the redux store's state. This hook takes a selector function
	 * as an argument. The selector is called with the store state.
	 *
	 * This hook takes an optional equality comparison function as the second parameter
	 * that allows you to customize the way the selected state is compared to determine
	 * whether the component needs to be re-rendered.
	 *
	 * @param {Function} selector the selector function
	 * @param {Function=} equalityFn the function that will be used to determine equality
	 *
	 * @returns {any} the selected state
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useSelector } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const counter = useSelector(state => state.counter)
	 *   return <div>{counter}</div>
	 * }
	 */
	
	
	var useSelector = /*#__PURE__*/createSelectorHook();
	exports.useSelector = useSelector;

/***/ },
/* 148 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	
	function bindActionCreators(actionCreators, dispatch) {
	  var boundActionCreators = {};
	
	  var _loop = function _loop(key) {
	    var actionCreator = actionCreators[key];
	
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = function () {
	        return dispatch(actionCreator.apply(void 0, arguments));
	      };
	    }
	  };
	
	  for (var key in actionCreators) {
	    _loop(key);
	  }
	
	  return boundActionCreators;
	}

/***/ },
/* 149 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isPlainObject;
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = Object.getPrototypeOf(obj);
	  if (proto === null) return true;
	  var baseProto = proto;
	
	  while (Object.getPrototypeOf(baseProto) !== null) {
	    baseProto = Object.getPrototypeOf(baseProto);
	  }
	
	  return proto === baseProto;
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.unstable_batchedUpdates = void 0;
	
	var _reactDom = __webpack_require__(47);
	
	exports.unstable_batchedUpdates = _reactDom.unstable_batchedUpdates;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * React Router DOM v6.2.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	!function(e,t){ true?t(exports,__webpack_require__(1),__webpack_require__(45),__webpack_require__(4)):"function"==typeof define&&define.amd?define(["exports","react","history","react-router"],t):t((e=e||self).ReactRouterDOM={},e.React,e.HistoryLibrary,e.ReactRouter)}(this,(function(e,t,r,n){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}const u=["onClick","reloadDocument","replace","state","target","to"],i=["aria-current","caseSensitive","className","end","style","to","children"];const c=t.forwardRef((function(e,r){let{onClick:i,reloadDocument:c,replace:s=!1,state:f,target:b,to:y}=e,d=o(e,u),m=n.useHref(y),p=l(y,{replace:s,state:f,target:b});return t.createElement("a",a({},d,{href:m,onClick:function(e){i&&i(e),e.defaultPrevented||c||p(e)},ref:r,target:b}))})),s=t.forwardRef((function(e,r){let{"aria-current":u="page",caseSensitive:s=!1,className:l="",end:f=!1,style:b,to:y,children:d}=e,m=o(e,i),p=n.useLocation(),g=n.useResolvedPath(y),h=p.pathname,P=g.pathname;s||(h=h.toLowerCase(),P=P.toLowerCase());let O,v=h===P||!f&&h.startsWith(P)&&"/"===h.charAt(P.length),R=v?u:void 0;O="function"==typeof l?l({isActive:v}):[l,v?"active":null].filter(Boolean).join(" ");let j="function"==typeof b?b({isActive:v}):b;return t.createElement(c,a({},m,{"aria-current":R,className:O,ref:r,style:j,to:y}),"function"==typeof d?d({isActive:v}):d)}));function l(e,r){let{target:a,replace:o,state:u}=void 0===r?{}:r,i=n.useNavigate(),c=n.useLocation(),s=n.useResolvedPath(e);return t.useCallback((t=>{if(!(0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let r=!!o||n.createPath(c)===n.createPath(s);i(e,{replace:r,state:u})}}),[c,i,s,o,u,a,e])}function f(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map((e=>[r,e])):[[r,n]])}),[]))}Object.defineProperty(e,"MemoryRouter",{enumerable:!0,get:function(){return n.MemoryRouter}}),Object.defineProperty(e,"Navigate",{enumerable:!0,get:function(){return n.Navigate}}),Object.defineProperty(e,"NavigationType",{enumerable:!0,get:function(){return n.NavigationType}}),Object.defineProperty(e,"Outlet",{enumerable:!0,get:function(){return n.Outlet}}),Object.defineProperty(e,"Route",{enumerable:!0,get:function(){return n.Route}}),Object.defineProperty(e,"Router",{enumerable:!0,get:function(){return n.Router}}),Object.defineProperty(e,"Routes",{enumerable:!0,get:function(){return n.Routes}}),Object.defineProperty(e,"UNSAFE_LocationContext",{enumerable:!0,get:function(){return n.UNSAFE_LocationContext}}),Object.defineProperty(e,"UNSAFE_NavigationContext",{enumerable:!0,get:function(){return n.UNSAFE_NavigationContext}}),Object.defineProperty(e,"UNSAFE_RouteContext",{enumerable:!0,get:function(){return n.UNSAFE_RouteContext}}),Object.defineProperty(e,"createPath",{enumerable:!0,get:function(){return n.createPath}}),Object.defineProperty(e,"createRoutesFromChildren",{enumerable:!0,get:function(){return n.createRoutesFromChildren}}),Object.defineProperty(e,"generatePath",{enumerable:!0,get:function(){return n.generatePath}}),Object.defineProperty(e,"matchPath",{enumerable:!0,get:function(){return n.matchPath}}),Object.defineProperty(e,"matchRoutes",{enumerable:!0,get:function(){return n.matchRoutes}}),Object.defineProperty(e,"parsePath",{enumerable:!0,get:function(){return n.parsePath}}),Object.defineProperty(e,"renderMatches",{enumerable:!0,get:function(){return n.renderMatches}}),Object.defineProperty(e,"resolvePath",{enumerable:!0,get:function(){return n.resolvePath}}),Object.defineProperty(e,"useHref",{enumerable:!0,get:function(){return n.useHref}}),Object.defineProperty(e,"useInRouterContext",{enumerable:!0,get:function(){return n.useInRouterContext}}),Object.defineProperty(e,"useLocation",{enumerable:!0,get:function(){return n.useLocation}}),Object.defineProperty(e,"useMatch",{enumerable:!0,get:function(){return n.useMatch}}),Object.defineProperty(e,"useNavigate",{enumerable:!0,get:function(){return n.useNavigate}}),Object.defineProperty(e,"useNavigationType",{enumerable:!0,get:function(){return n.useNavigationType}}),Object.defineProperty(e,"useOutlet",{enumerable:!0,get:function(){return n.useOutlet}}),Object.defineProperty(e,"useOutletContext",{enumerable:!0,get:function(){return n.useOutletContext}}),Object.defineProperty(e,"useParams",{enumerable:!0,get:function(){return n.useParams}}),Object.defineProperty(e,"useResolvedPath",{enumerable:!0,get:function(){return n.useResolvedPath}}),Object.defineProperty(e,"useRoutes",{enumerable:!0,get:function(){return n.useRoutes}}),e.BrowserRouter=function(e){let{basename:a,children:o,window:u}=e,i=t.useRef();null==i.current&&(i.current=r.createBrowserHistory({window:u}));let c=i.current,[s,l]=t.useState({action:c.action,location:c.location});return t.useLayoutEffect((()=>c.listen(l)),[c]),t.createElement(n.Router,{basename:a,children:o,location:s.location,navigationType:s.action,navigator:c})},e.HashRouter=function(e){let{basename:a,children:o,window:u}=e,i=t.useRef();null==i.current&&(i.current=r.createHashHistory({window:u}));let c=i.current,[s,l]=t.useState({action:c.action,location:c.location});return t.useLayoutEffect((()=>c.listen(l)),[c]),t.createElement(n.Router,{basename:a,children:o,location:s.location,navigationType:s.action,navigator:c})},e.Link=c,e.NavLink=s,e.createSearchParams=f,e.unstable_HistoryRouter=function(e){let{basename:r,children:a,history:o}=e;const[u,i]=t.useState({action:o.action,location:o.location});return t.useLayoutEffect((()=>o.listen(i)),[o]),t.createElement(n.Router,{basename:r,children:a,location:u.location,navigationType:u.action,navigator:o})},e.useLinkClickHandler=l,e.useSearchParams=function(e){let r=t.useRef(f(e)),a=n.useLocation(),o=t.useMemo((()=>{let e=f(a.search);for(let t of r.current.keys())e.has(t)||r.current.getAll(t).forEach((r=>{e.append(t,r)}));return e}),[a.search]),u=n.useNavigate();return[o,t.useCallback(((e,t)=>{u("?"+f(e),t)}),[u])]},Object.defineProperty(e,"__esModule",{value:!0})}));
	//# sourceMappingURL=react-router-dom.production.min.js.map


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * React Router v6.2.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	!function(e,t){ true?t(exports,__webpack_require__(1),__webpack_require__(45)):"function"==typeof define&&define.amd?define(["exports","react","history"],t):t((e=e||self).ReactRouter={},e.React,e.HistoryLibrary)}(this,(function(e,t,n){"use strict";function a(e,t){if(!e)throw new Error(t)}const r=t.createContext(null),i=t.createContext(null),l=t.createContext({outlet:null,matches:[]});function o(e){a(!1)}function s(e){let{basename:l="/",children:o=null,location:s,navigationType:c=n.Action.Pop,navigator:h,static:p=!1}=e;u()&&a(!1);let f=N(l),m=t.useMemo((()=>({basename:f,navigator:h,static:p})),[f,h,p]);"string"==typeof s&&(s=n.parsePath(s));let{pathname:d="/",search:g="",hash:v="",state:y=null,key:x="default"}=s,P=t.useMemo((()=>{let e=O(d,f);return null==e?null:{pathname:e,search:g,hash:v,state:y,key:x}}),[f,d,g,v,y,x]);return null==P?null:t.createElement(r.Provider,{value:m},t.createElement(i.Provider,{children:o,value:{location:P,navigationType:c}}))}function u(){return null!=t.useContext(i)}function c(){return u()||a(!1),t.useContext(i).location}function h(){u()||a(!1);let{basename:e,navigator:n}=t.useContext(r),{matches:i}=t.useContext(l),{pathname:o}=c(),s=JSON.stringify(i.map((e=>e.pathnameBase))),h=t.useRef(!1);return t.useEffect((()=>{h.current=!0})),t.useCallback((function(t,a){if(void 0===a&&(a={}),!h.current)return;if("number"==typeof t)return void n.go(t);let r=$(t,JSON.parse(s),o);"/"!==e&&(r.pathname=M([e,r.pathname])),(a.replace?n.replace:n.push)(r,a.state)}),[e,n,s,o])}const p=t.createContext(null);function f(e){let n=t.useContext(l).outlet;return n?t.createElement(p.Provider,{value:e},n):n}function m(e){let{matches:n}=t.useContext(l),{pathname:a}=c(),r=JSON.stringify(n.map((e=>e.pathnameBase)));return t.useMemo((()=>$(e,JSON.parse(r),a)),[e,r,a])}function d(e,r){u()||a(!1);let i,{matches:o}=t.useContext(l),s=o[o.length-1],h=s?s.params:{},p=(s&&s.pathname,s?s.pathnameBase:"/"),f=(s&&s.route,c());if(r){var m;let e="string"==typeof r?n.parsePath(r):r;"/"===p||(null==(m=e.pathname)?void 0:m.startsWith(p))||a(!1),i=e}else i=f;let d=i.pathname||"/",g=v(e,{pathname:"/"===p?d:d.slice(p.length)||"/"});return E(g&&g.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:M([p,e.pathname]),pathnameBase:"/"===e.pathnameBase?p:M([p,e.pathnameBase])}))),o)}function g(e){let n=[];return t.Children.forEach(e,(e=>{if(!t.isValidElement(e))return;if(e.type===t.Fragment)return void n.push.apply(n,g(e.props.children));e.type!==o&&a(!1);let r={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(r.children=g(e.props.children)),n.push(r)})),n}function v(e,t,a){void 0===a&&(a="/");let r=O(("string"==typeof t?n.parsePath(t):t).pathname||"/",a);if(null==r)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let e=0;null==l&&e<i.length;++e)l=b(i[e],r);return l}function y(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,i)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||a(!1),l.relativePath=l.relativePath.slice(r.length));let o=M([r,l.relativePath]),s=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&a(!1),y(e.children,t,s,o)),(null!=e.path||e.index)&&t.push({path:o,score:C(o,e.index),routesMeta:s})})),t}const x=/^:\w+$/,P=e=>"*"===e;function C(e,t){let n=e.split("/"),a=n.length;return n.some(P)&&(a+=-2),t&&(a+=2),n.filter((e=>!P(e))).reduce(((e,t)=>e+(x.test(t)?3:""===t?1:10)),a)}function b(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],o=e===n.length-1,s="/"===r?t:t.slice(r.length)||"/",u=R({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},s);if(!u)return null;Object.assign(a,u.params);let c=l.route;i.push({params:a,pathname:M([r,u.pathname]),pathnameBase:N(M([r,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(r=M([r,u.pathnameBase]))}return i}function E(e,n){return void 0===n&&(n=[]),null==e?null:e.reduceRight(((a,r,i)=>t.createElement(l.Provider,{children:void 0!==r.route.element?r.route.element:a,value:{outlet:a,matches:n.concat(e.slice(0,i+1))}})),null)}function R(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=o[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(o[n]||""),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function S(e,t){void 0===t&&(t="/");let{pathname:a,search:r="",hash:i=""}="string"==typeof e?n.parsePath(e):e,l=a?a.startsWith("/")?a:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(a,t):t;return{pathname:l,search:W(r),hash:j(i)}}function $(e,t,a){let r,i="string"==typeof e?n.parsePath(e):e,l=""===e||""===i.pathname?"/":i.pathname;if(null==l)r=a;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}r=e>=0?t[e]:"/"}let o=S(i,r);return l&&"/"!==l&&l.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const M=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",j=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Object.defineProperty(e,"NavigationType",{enumerable:!0,get:function(){return n.Action}}),Object.defineProperty(e,"createPath",{enumerable:!0,get:function(){return n.createPath}}),Object.defineProperty(e,"parsePath",{enumerable:!0,get:function(){return n.parsePath}}),e.MemoryRouter=function(e){let{basename:a,children:r,initialEntries:i,initialIndex:l}=e,o=t.useRef();null==o.current&&(o.current=n.createMemoryHistory({initialEntries:i,initialIndex:l}));let u=o.current,[c,h]=t.useState({action:u.action,location:u.location});return t.useLayoutEffect((()=>u.listen(h)),[u]),t.createElement(s,{basename:a,children:r,location:c.location,navigationType:c.action,navigator:u})},e.Navigate=function(e){let{to:n,replace:r,state:i}=e;u()||a(!1);let l=h();return t.useEffect((()=>{l(n,{replace:r,state:i})})),null},e.Outlet=function(e){return f(e.context)},e.Route=o,e.Router=s,e.Routes=function(e){let{children:t,location:n}=e;return d(g(t),n)},e.UNSAFE_LocationContext=i,e.UNSAFE_NavigationContext=r,e.UNSAFE_RouteContext=l,e.createRoutesFromChildren=g,e.generatePath=function(e,t){return void 0===t&&(t={}),e.replace(/:(\w+)/g,((e,n)=>(null==t[n]&&a(!1),t[n]))).replace(/\/*\*$/,(e=>null==t["*"]?"":t["*"].replace(/^\/*/,"/")))},e.matchPath=R,e.matchRoutes=v,e.renderMatches=function(e){return E(e)},e.resolvePath=S,e.useHref=function(e){u()||a(!1);let{basename:i,navigator:l}=t.useContext(r),{hash:o,pathname:s,search:c}=m(e),h=s;if("/"!==i){let t=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?n.parsePath(e).pathname:e.pathname}(e),a=null!=t&&t.endsWith("/");h="/"===s?i+(a?"/":""):M([i,s])}return l.createHref({pathname:h,search:c,hash:o})},e.useInRouterContext=u,e.useLocation=c,e.useMatch=function(e){u()||a(!1);let{pathname:n}=c();return t.useMemo((()=>R(e,n)),[n,e])},e.useNavigate=h,e.useNavigationType=function(){return t.useContext(i).navigationType},e.useOutlet=f,e.useOutletContext=function(){return t.useContext(p)},e.useParams=function(){let{matches:e}=t.useContext(l),n=e[e.length-1];return n?n.params:{}},e.useResolvedPath=m,e.useRoutes=d,Object.defineProperty(e,"__esModule",{value:!0})}));
	//# sourceMappingURL=react-router.production.min.js.map


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// @remove-on-eject-begin
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	// @remove-on-eject-end
	'use strict';
	
	if (typeof Promise === 'undefined') {
	  // Rejection tracking prevents a common issue where React gets into an
	  // inconsistent state due to an error, but it gets swallowed by a Promise,
	  // and the user has no idea what causes React's erratic future behavior.
	  __webpack_require__(131).enable();
	  window.Promise = __webpack_require__(130);
	}
	
	// fetch() polyfill for making API calls.
	__webpack_require__(169);
	
	// Object.assign() is commonly used with React.
	// It will use the native implementation if it's present and isn't buggy.
	Object.assign = __webpack_require__(25);


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v17.0.2
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	'use strict';var l=__webpack_require__(25),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
	if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
	function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
	function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
	function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
	function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
	0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
	function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
	exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
	exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
	key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
	exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
	exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createMigrate;
	
	var _constants = __webpack_require__(9);
	
	function createMigrate(migrations, config) {
	  var _ref = config || {},
	      debug = _ref.debug;
	
	  return function (state, currentVersion) {
	    if (!state) {
	      if (false) console.log('redux-persist: no inbound state, skipping migration');
	      return Promise.resolve(undefined);
	    }
	
	    var inboundVersion = state._persist && state._persist.version !== undefined ? state._persist.version : _constants.DEFAULT_VERSION;
	
	    if (inboundVersion === currentVersion) {
	      if (false) console.log('redux-persist: versions match, noop migration');
	      return Promise.resolve(state);
	    }
	
	    if (inboundVersion > currentVersion) {
	      if (false) console.error('redux-persist: downgrading version is not supported');
	      return Promise.resolve(state);
	    }
	
	    var migrationKeys = Object.keys(migrations).map(function (ver) {
	      return parseInt(ver);
	    }).filter(function (key) {
	      return currentVersion >= key && key > inboundVersion;
	    }).sort(function (a, b) {
	      return a - b;
	    });
	    if (false) console.log('redux-persist: migrationKeys', migrationKeys);
	
	    try {
	      var migratedState = migrationKeys.reduce(function (state, versionKey) {
	        if (false) console.log('redux-persist: running migration for versionKey', versionKey);
	        return migrations[versionKey](state);
	      }, state);
	      return Promise.resolve(migratedState);
	    } catch (err) {
	      return Promise.reject(err);
	    }
	  };
	}

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createTransform;
	
	function createTransform( // @NOTE inbound: transform state coming from redux on its way to being serialized and stored
	inbound, // @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
	outbound) {
	  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var whitelist = config.whitelist || null;
	  var blacklist = config.blacklist || null;
	
	  function whitelistBlacklistCheck(key) {
	    if (whitelist && whitelist.indexOf(key) === -1) return true;
	    if (blacklist && blacklist.indexOf(key) !== -1) return true;
	    return false;
	  }
	
	  return {
	    in: function _in(state, key, fullState) {
	      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key, fullState) : state;
	    },
	    out: function out(state, key, fullState) {
	      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key, fullState) : state;
	    }
	  };
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = persistCombineReducers;
	
	var _redux = __webpack_require__(19);
	
	var _persistReducer = _interopRequireDefault(__webpack_require__(59));
	
	var _autoMergeLevel = _interopRequireDefault(__webpack_require__(161));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
	function persistCombineReducers(config, reducers) {
	  config.stateReconciler = config.stateReconciler === undefined ? _autoMergeLevel.default : config.stateReconciler;
	  return (0, _persistReducer.default)(config, (0, _redux.combineReducers)(reducers));
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = persistStore;
	
	var _redux = __webpack_require__(19);
	
	var _constants = __webpack_require__(9);
	
	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
	
	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
	
	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
	
	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
	
	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
	
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {
	  registry: [],
	  bootstrapped: false
	};
	
	var persistorReducer = function persistorReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 ? arguments[1] : undefined;
	
	  switch (action.type) {
	    case _constants.REGISTER:
	      return _objectSpread({}, state, {
	        registry: [].concat(_toConsumableArray(state.registry), [action.key])
	      });
	
	    case _constants.REHYDRATE:
	      var firstIndex = state.registry.indexOf(action.key);
	
	      var registry = _toConsumableArray(state.registry);
	
	      registry.splice(firstIndex, 1);
	      return _objectSpread({}, state, {
	        registry: registry,
	        bootstrapped: registry.length === 0
	      });
	
	    default:
	      return state;
	  }
	};
	
	function persistStore(store, options, cb) {
	  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
	  if (false) {
	    var optionsToTest = options || {};
	    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
	    bannedKeys.forEach(function (k) {
	      if (!!optionsToTest[k]) console.error("redux-persist: invalid option passed to persistStore: \"".concat(k, "\". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer."));
	    });
	  }
	
	  var boostrappedCb = cb || false;
	
	  var _pStore = (0, _redux.createStore)(persistorReducer, initialState, options && options.enhancer ? options.enhancer : undefined);
	
	  var register = function register(key) {
	    _pStore.dispatch({
	      type: _constants.REGISTER,
	      key: key
	    });
	  };
	
	  var rehydrate = function rehydrate(key, payload, err) {
	    var rehydrateAction = {
	      type: _constants.REHYDRATE,
	      payload: payload,
	      err: err,
	      key: key // dispatch to `store` to rehydrate and `persistor` to track result
	
	    };
	    store.dispatch(rehydrateAction);
	
	    _pStore.dispatch(rehydrateAction);
	
	    if (boostrappedCb && persistor.getState().bootstrapped) {
	      boostrappedCb();
	      boostrappedCb = false;
	    }
	  };
	
	  var persistor = _objectSpread({}, _pStore, {
	    purge: function purge() {
	      var results = [];
	      store.dispatch({
	        type: _constants.PURGE,
	        result: function result(purgeResult) {
	          results.push(purgeResult);
	        }
	      });
	      return Promise.all(results);
	    },
	    flush: function flush() {
	      var results = [];
	      store.dispatch({
	        type: _constants.FLUSH,
	        result: function result(flushResult) {
	          results.push(flushResult);
	        }
	      });
	      return Promise.all(results);
	    },
	    pause: function pause() {
	      store.dispatch({
	        type: _constants.PAUSE
	      });
	    },
	    persist: function persist() {
	      store.dispatch({
	        type: _constants.PERSIST,
	        register: register,
	        rehydrate: rehydrate
	      });
	    }
	  });
	
	  if (!(options && options.manualPersist)) {
	    persistor.persist();
	  }
	
	  return persistor;
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = autoMergeLevel1;
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
	
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*
	  autoMergeLevel1: 
	    - merges 1 level of substate
	    - skips substate if already modified
	*/
	function autoMergeLevel1(inboundState, originalState, reducedState, _ref) {
	  var debug = _ref.debug;
	
	  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object
	
	
	  if (inboundState && _typeof(inboundState) === 'object') {
	    Object.keys(inboundState).forEach(function (key) {
	      // ignore _persist data
	      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration
	
	      if (originalState[key] !== reducedState[key]) {
	        if (false) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
	        return;
	      } // otherwise hard set the new value
	
	
	      newState[key] = inboundState[key];
	    });
	  }
	
	  if (false) console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
	  return newState;
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = autoMergeLevel2;
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
	
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*
	  autoMergeLevel2: 
	    - merges 2 level of substate
	    - skips substate if already modified
	    - this is essentially redux-perist v4 behavior
	*/
	function autoMergeLevel2(inboundState, originalState, reducedState, _ref) {
	  var debug = _ref.debug;
	
	  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object
	
	
	  if (inboundState && _typeof(inboundState) === 'object') {
	    Object.keys(inboundState).forEach(function (key) {
	      // ignore _persist data
	      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration
	
	      if (originalState[key] !== reducedState[key]) {
	        if (false) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
	        return;
	      }
	
	      if (isPlainEnoughObject(reducedState[key])) {
	        // if object is plain enough shallow merge the new values (hence "Level2")
	        newState[key] = _objectSpread({}, newState[key], {}, inboundState[key]);
	        return;
	      } // otherwise hard set
	
	
	      newState[key] = inboundState[key];
	    });
	  }
	
	  if (false) console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
	  return newState;
	}
	
	function isPlainEnoughObject(o) {
	  return o !== null && !Array.isArray(o) && _typeof(o) === 'object';
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createWebStorage;
	
	var _getStorage = _interopRequireDefault(__webpack_require__(163));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createWebStorage(type) {
	  var storage = (0, _getStorage.default)(type);
	  return {
	    getItem: function getItem(key) {
	      return new Promise(function (resolve, reject) {
	        resolve(storage.getItem(key));
	      });
	    },
	    setItem: function setItem(key, item) {
	      return new Promise(function (resolve, reject) {
	        resolve(storage.setItem(key, item));
	      });
	    },
	    removeItem: function removeItem(key) {
	      return new Promise(function (resolve, reject) {
	        resolve(storage.removeItem(key));
	      });
	    }
	  };
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = getStorage;
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function noop() {}
	
	var noopStorage = {
	  getItem: noop,
	  setItem: noop,
	  removeItem: noop
	};
	
	function hasStorage(storageType) {
	  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== 'object' || !(storageType in self)) {
	    return false;
	  }
	
	  try {
	    var storage = self[storageType];
	    var testKey = "redux-persist ".concat(storageType, " test");
	    storage.setItem(testKey, 'test');
	    storage.getItem(testKey);
	    storage.removeItem(testKey);
	  } catch (e) {
	    if (false) console.warn("redux-persist ".concat(storageType, " test failed, persistence will be disabled."));
	    return false;
	  }
	
	  return true;
	}
	
	function getStorage(type) {
	  var storageType = "".concat(type, "Storage");
	  if (hasStorage(storageType)) return self[storageType];else {
	    if (false) {
	      console.error("redux-persist failed to create sync storage. falling back to noop storage.");
	    }
	
	    return noopStorage;
	  }
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _createWebStorage = _interopRequireDefault(__webpack_require__(162));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _default = (0, _createWebStorage.default)('local');
	
	exports.default = _default;

/***/ },
/* 165 */
/***/ function(module, exports) {

	/** @license React v0.20.2
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	'use strict';var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
	window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
	E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
	x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
	function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
	function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
	function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
	exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
	exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
	exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(165);
	} else {
	  module.exports = require('./cjs/scheduler.development.js');
	}


/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+0lEQVR42u2ZW2hURxjH/zNz5uwmrkFisSJifRCVon2QUkpbTMOSampFtNgifSgVzM1sYhNrxQvFKtZLzW03cbOllbbQSrWKba1KiKm1FCmtiEgR64O1IhpETEyyu+ecmemDq+Rikt3sbDaR/V52OWfmm+/32zlz5uwBMpGJTGQiE09WVDgl88pF0evxtKXpLjYF8HNtarcIIo6Wi6I3hmtP0l2wZvhZNrXPAGpaDM9iir0ZYKGfnngBFU7JTJvaZwE1vR/ikBKeiEug0imdYVO7bSA8AChTEPH9YJfDuBdQaZdOt6jVCqiZg7caXMK4FlBpl021md0KqFnDt368hHErYJ1VNsVmVquCnB1/r4ESxqWAdVbZU5ZhtSjIZxPv3VfCuLsLvB9dmxvl0RYFuSC5TA/uDizdQIlEVbQ8J8qjpxTk8xrSMQKSM25mQFW03BPhkVMK8iUd+Qjo6Swna+m4WAOqo77sCI8c1wj/a5aVtWyf6e8Z85fA+mhFdpiHjynIfE3wv7sdd2GNK9AFAGNawPpopbuH9xxRkK9pgj/nEq7FtWbj/YfHxuwlsCG6zuzh3YcU5GJN8H+6bFdhLW/s7H18TArYGKkyu4yubxXksI+zccKfdzmuRbWuxnv9z8Ul4INIZfa2+5tHRdam8Hqjk3d+rYhcoQn+oinMRbVm493HnR8Wqjrq83Sb3Sfas9sPbOpZb6QSfmvXRqPD7DigiHxLE/wlU5gFdbzpzuBthoEP8/BxBbkwlvCIx/Ks2uOus3TDb+vYQts9tz+TRKzWBH/ZdMz8OrPp1lDtBp0B1ZG+8ACgIFd0mV3HqqO+bJ3wu9t30HbP7UaN8Fe44N7h4AcVUB3xecJmX/heEhaHefhElVWeo6PYuv/20uuT/62VRJToyAeQq1xybz3ffzOe1gMEDAXfS8LCiBFpWWeV5SZT6tG/DtF/pl3ZLYmo0AR/zRSmt97YfyPuHonC9+1ML3FhFtTz4ada/zh84SBtm9+6XRKxSRP8dS7MvAa+/1oivR7NgBj8j/HCA4CCnGex6NlKu3RGouW2zT+9RRKpC/4Glzw/UXggNgN6wb86wgKuc8kLGozglXhal4uijYKITwClA/4mFzyvgQevjqh38vCPUt0yJC/wG8FLw8BXCSL2aYK/xQXPb+DByyPNQCM8cih5eABQUx1qn/E5xS8MAV+uEb6dS+5NBh4AKFV0L0B6NFQEQOU61GnxOcUD1pFyUVQkiPBrgr9jSO5tMIJ/J50JAHxO8SsOdU4AyqNHBIkwaSwPGM0nY/CrBRGfa4K/awju9fPgBS2VPvzic4pfjEmYpEmCxRRbBSBbEPEloDQ8TJF7hjS8fqP5vJ4a++0DfE7xAoc6LYBKaoPTK7188KkFvtNQRoGfNf+hC36AgAcSSp5zqN0CqCk6B0qyzC5DGgV+o/mc7swDfhm/EbzIBc8HSMK7uxTCF6YCHhjicbjCKZltU7v18W9cRw2+x1DGEj9r/iVlIwx1MvbOvW3oN68pKy1iSGOJ32g+ncpRhlycGozgNVOaeQAd0TYzSfhlqYYH4nw3WGmXTrOZ3aog544CvMUUWx5goZ9TP1acf4rW8/03TcfMI6AXUwzvMMVWjhZ83AIAoM5sajcd00tAtW1CBsBL9naAhX4YLfiEBMQk3HE5Li8B1XxLIpIp9k7ACB0ZTfiEBQBArdl4z+24FxHQ37TCs9B3ow0/IgEAUGMGOt2Ou5CAJrlKE8kUey/AQgfTAT9iATEJXVlO1lICenKE8GCKrQmw0Ffpgk9KAADsM/09E6wJywloggsXAVOsOMBCX6QTPmkBALDXXR+ZGM5ZSUAPJwC/NsBCoXTDaxEAALsn1FiTuietoop9Ewd8ZYCFmtINrlUAAOyc+KmT2z35XarYINOagClWHWChhnRDp0QAAGzP2eVM6X56DVUs+Bj4DwMsVJNu4JQKAICPcnbIZzpmrqWK1fWC3xpgoT3phh0VAQCwIXeznHN3TjVVbBdV7OOXTy/cmW7QTGQiE5nIRCYykYn+8T9Q44J8mrirfQAAAABJRU5ErkJggg=="

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD40lEQVR42u3aTWgdVRQH8JOZ+0J5hFBKKUVKKVJKkSJSRFyoQaXgJ4JF0Y2LLroQcdGFuBDBhbjoorhy5aKIC5EuRDDoI2qQUj94klZEa4VWQ40mGExePmbuPed/3byERxOfb2bOzKWv84dLdjPn9898ZkJUp06dOnWGK8x8REQeCz1HKPxhAHMAUhF5IvQ8VeMPArgOwHfXrVMCMx8AMNuDv3VKYOb9AK5ugx/+Epxz+wBc6YMf3hKcc3sBXB4AP3wlWGv3APgxA354SrDW7gZwMQd+SwkjoTFZk6bprkaj0SKio0V79N4fj0ODMuLHG43Gp0R0t8LmYiIaD23Kgh8DcL7AYX/jmrLWNkO7BsU3AUwr4qeTJBkL7cqCbyniz1trbxr8DgCTivgLzrmb47xP03QUwMeK+O/SNN0Z2jVQkiQZFZFzivi2tXZXkYGanU4nqgK/vr5uROQDRfxF59zu3AN1bz/TInJ2bW3NlIlfWVkxIvKeIv4H59yewvieDZ5LkmS0DPzS0lIkIu8q4n+y1u7NPVCSJDfiN9ZkmqaqDxDz8/ORiLyjiL/snLutDPzmg4S1VuV2Mjs7G4nI24r4K8y8r0z8xvqm0JWViNrtdiQipxXxV51z+6vA915kcp1nMzMzkYi8qYj/zTl3oCj+izyHXJ7WReR1RfwsM98eAr/ZPjMfyoB/VRF/3Tl3MCR+Y80x85EB8KcU8XPOucO58d2BNF82/mbme/rs6yXFff3FzHcUwhMRMfNDAFYVB1ti5ge2wZ9U3MfCIEdblhLuA9BRHHCdmR/pwZ/QPMqcc3dp2Tf/KMrM90ZRNElEWq+M1nv/PBE1R0ZGzhKRxsvUPwAeNsZ8r15At4SjURS1iKjQA05P0P2pgV/23h+L4/hbLfyWArol3NktIf9blH5WABwzxnytveEtvxljzCUReZCI/gyt7sE/WgaeqM+HEWY+FEXRFBHlf7EonjXv/eNxHH9Z1g7+89w0xvwC4H4iuhYInwB4skx83wK6JVwDMEFEvwbAP2WM+bzsHf3v1dkY87uITBDRzxXhrff+uDHmsyp2NtDtqdFo/MHME0R0qeR52Hv/TBzHn1SBz5zuZ+m24lNd73LM/HRo4yAl7ARwQRkvIvJsaFuWEsYBfKWIfy60KU8JYwCmFPAvhLYUKaGJAh8vReREaEPhJEmyA8BHOfAnQ8+ultXV1VEAH2bAvxh6ZvV0Oh0jIu8PgH859KylZXl52fT7vicip0LPWEUJ237nE5FXQs9WWRYXFyMROdODfy30TJVnYWEhEpG3ROSNVqtVyT9X1KlTp06dOnXqZMm/+9cYadPJb3wAAAAASUVORK5CYII="

/***/ },
/* 169 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(__webpack_module_template_argument_0__);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }
/******/ ])));
//# sourceMappingURL=main.03d8c929.js.map