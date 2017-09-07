/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyImage = function () {
    function MyImage(name, game, x, y) {
        _classCallCheck(this, MyImage);

        this.img = game.getImgByName(name);
        this.game = game;
        this.w = this.img.width;
        this.h = this.img.height;
        this.x = x;
        this.y = y;
    }

    _createClass(MyImage, [{
        key: "draw",
        value: function draw() {
            this.game.drawImage(this);
        }
    }, {
        key: "update",
        value: function update() {}
    }]);

    return MyImage;
}();

exports.default = MyImage;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var conf = conf || {};
conf.conf_player = {
    playerSpeed: {
        des: "玩家速度",
        value: 5
    },
    spaceBetweenTopBottom: {
        des: '管子上与下的距离',
        value: 110
    },
    spaceBetweenPipe: {
        des: '管子左右的距离',
        value: 320
    },
    pipesMoveSpeed: {
        des: '管子移动速度',
        value: 5
    },
    birdG: {
        des: '鸟的重力',
        value: 23
    },
    birdjump: {
        des: '鸟跳起来的高度',
        value: 12

    },
    gamefps: {
        des: "帧率",
        value: 50
    }
};

conf.fillTemplateControls = function (key, item) {

    var template = '        <div >\n' + '            <label class="gua-conf">' + item.des + '\n' + '                <span class="gua-speed"></span>\n' + '                <input type="number"  max="300" data-value="conf_player.' + key + '" class ="conf" value="' + item.value + '" >\n' + '            </label>\n' + '        </div>';

    return template;
};

conf.insertTemplateControls = function () {
    var keys = Object.keys(this.conf_player);
    var container = document.querySelector('.container');
    for (var i = 0; i < keys.length; i++) {
        var item = this.conf_player[keys[i]];
        var key = keys[i];
        var html = this.fillTemplateControls(key, item);
        container.insertAdjacentHTML('beforeEnd', html);
    }
};

conf.bindAll = function (sel, eventName, callback) {
    var l = document.querySelectorAll(sel);
    for (var i = 0; i < l.length; i++) {
        var input = l[i];
        input.addEventListener(eventName, function (e) {
            callback(e);
        });
    }
};

exports.default = conf;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
    function Scene(game) {
        _classCallCheck(this, Scene);

        this.game = game;
        this.elements = [];
    }

    _createClass(Scene, [{
        key: "addElements",
        value: function addElements(ele) {
            this.elements.push(ele);
        }
    }, {
        key: "draw",
        value: function draw() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (i.alive === undefined || i.alive) {
                        i.draw();
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "update",
        value: function update() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var i = _step2.value;

                    i.update();
                    i.debug && i.debug();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return Scene;
}();

exports.default = Scene;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var uitls = uitls || {};
uitls.getRandomBetween = function getRandomBetween(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
};

uitls.log = console.log.bind(console);

// 判断相撞
uitls.aInb = function (x, x1, x2) {
    return x >= x1 && x <= x2;
};

exports.default = uitls;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Label = function () {
    function Label(game, text, x, y) {
        _classCallCheck(this, Label);

        this.game = game;
        this.text = text;
        this.x = x;
        this.y = y;
    }

    _createClass(Label, [{
        key: "draw",
        value: function draw() {
            this.game.ctx.font = "14px Georgia";
            this.game.ctx.fillText(this.text, this.x, this.y);
        }
    }, {
        key: "update",
        value: function update() {}
    }]);

    return Label;
}();

exports.default = Label;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(6);

var _game2 = _interopRequireDefault(_game);

var _conf = __webpack_require__(1);

var _conf2 = _interopRequireDefault(_conf);

__webpack_require__(7);

var _scene_start = __webpack_require__(12);

var _scene_start2 = _interopRequireDefault(_scene_start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var audio = document.getElementById('audio');

var imgs = {
    bird1: 'img/bird/1.png',
    bird2: 'img/bird/2.png',
    bird3: 'img/bird/3.png',
    bg: 'img/background.png',
    floor: 'img/floor.png',
    pipeT: 'img/pipe/top.png',
    pipeB: 'img/pipe/bottom.png',
    logo: 'img/logo.png',
    ready: 'img/getready.png'
};

var bindEvent = function bindEvent() {
    _conf2.default.bindAll('.conf', 'change', function (e) {

        var target = e.target;
        // 得到 conf 对象的string
        var bindConf = target.dataset.value;
        var v = target.value;
        eval('_conf2.default.' + bindConf + '.value' + '=' + v);
        //找到最近的label节点
        var label = target.closest('label').querySelector('.gua-speed');
        label.innerText = v;
    });
};

var _main = function _main() {
    _conf2.default.insertTemplateControls();
    bindEvent();
    var game = new _game2.default(imgs, function (g) {
        var s = new _scene_start2.default(g);
        g.scene = s;
    });
};

_main();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conf = __webpack_require__(1);

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(images, callback) {
        _classCallCheck(this, Game);

        this.images = images;
        this.callback = callback;
        this.score = 0;
        this.init();
        this.setupInputs();
        this.loadImg();
    }

    _createClass(Game, [{
        key: 'init',
        value: function init() {
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.keys = {};
            this.activities = {};
            this.scene = null;
        }
    }, {
        key: 'setupInputs',
        value: function setupInputs() {
            var self = this;
            window.addEventListener('keydown', function (e) {
                self.keys[e.key] = 'down';
            });
            window.addEventListener('keyup', function (e) {
                self.keys[e.key] = 'up';
            });
        }
    }, {
        key: 'update',
        value: function update() {
            this.scene.update();
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.scene.draw();
        }
    }, {
        key: 'drawImage',
        value: function drawImage(o) {
            this.ctx.drawImage(o.img, o.x, o.y);
        }
    }, {
        key: 'registerEvent',
        value: function registerEvent(event, callback) {
            this.activities[event] = callback;
        }
    }, {
        key: 'replaceScene',
        value: function replaceScene(s) {
            this.scene = s;
        }
    }, {
        key: 'loop',
        value: function loop() {
            var self = this;
            setTimeout(function () {
                // 事件的发射

                for (var i in self.activities) {
                    var status = self.keys[i];
                    if (status === 'down') {
                        // 键被按下 传给 player
                        self.activities[i](i + 'down');
                    } else if (status === 'up') {
                        self.activities[i]('up');
                        // 删除这个key的状态
                        self.keys[i] = null;
                    }
                }
                self.update();
                self.ctx.clearRect(0, 0, 400, 605);
                self.draw();
                self.loop();
            }, 1000 / _conf2.default.conf_player.gamefps.value);
        }

        // 图片载入

    }, {
        key: 'loadImg',
        value: function loadImg() {
            var self = this;
            var imgs = self.images;
            var count = 0;
            var arr = {};
            var names = Object.keys(imgs);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;


                    var img = new Image();
                    img.src = imgs[i];
                    img.onload = function (i, img) {

                        return function () {
                            arr[i] = img;
                            count++;
                            if (count >= names.length) {
                                self.images = arr;
                                self._start();
                            }
                        };
                    }(i, img);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        // 得到图片

    }, {
        key: 'getImgByName',
        value: function getImgByName(name) {
            return this.images[name];
        }
    }, {
        key: '_start',
        value: function _start() {
            var self = this;

            self.callback(self);
            self.loop();
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib/index.js??ref--2-3!./test.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib/index.js??ref--2-3!./test.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, ".flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n#canvas {\n  border: 1px solid #333; }\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scene = __webpack_require__(2);

var _scene2 = _interopRequireDefault(_scene);

var _scene_main = __webpack_require__(13);

var _scene_main2 = _interopRequireDefault(_scene_main);

var _label = __webpack_require__(4);

var _label2 = _interopRequireDefault(_label);

var _image = __webpack_require__(0);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScenceStart = function (_Scene) {
    _inherits(ScenceStart, _Scene);

    function ScenceStart(game) {
        _classCallCheck(this, ScenceStart);

        var _this = _possibleConstructorReturn(this, (ScenceStart.__proto__ || Object.getPrototypeOf(ScenceStart)).call(this, game));

        _this.label = new _label2.default(game, '按K 开始游戏', 120, 300);
        _this.logo = new _image2.default('logo', _this.game, 10, 100);
        _this.setupInputs();
        _this.addElements(_this.label);
        _this.addElements(_this.logo);
        _this.game = game;

        return _this;
    }

    _createClass(ScenceStart, [{
        key: 'setupInputs',
        value: function setupInputs() {
            var self = this;
            self.game.registerEvent('k', function () {
                self.game.score = 0;
                self.game.replaceScene(new _scene_main2.default(self.game));
            });
        }
    }]);

    return ScenceStart;
}(_scene2.default);

exports.default = ScenceStart;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _scene = __webpack_require__(2);

var _scene2 = _interopRequireDefault(_scene);

var _player = __webpack_require__(14);

var _player2 = _interopRequireDefault(_player);

var _pipe = __webpack_require__(16);

var _pipe2 = _interopRequireDefault(_pipe);

var _score = __webpack_require__(17);

var _score2 = _interopRequireDefault(_score);

var _scene_end = __webpack_require__(18);

var _scene_end2 = _interopRequireDefault(_scene_end);

var _image = __webpack_require__(0);

var _image2 = _interopRequireDefault(_image);

var _floor = __webpack_require__(19);

var _floor2 = _interopRequireDefault(_floor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneMain = function (_Scene) {
    _inherits(SceneMain, _Scene);

    function SceneMain(game) {
        _classCallCheck(this, SceneMain);

        var _this = _possibleConstructorReturn(this, (SceneMain.__proto__ || Object.getPrototypeOf(SceneMain)).call(this, game));

        _this.game = game;
        _this.setup();
        _this.setupinputs();
        _this.countdown = 3;
        return _this;
    }

    _createClass(SceneMain, [{
        key: 'setup',
        value: function setup() {
            this.player = new _player2.default(this.game, 100, 100);
            this.bg = new _image2.default('bg', this.game, 0, 0);
            this.pipes = new _pipe2.default(this.game);
            this.score = new _score2.default(this.game, '得分：', 10, 10);

            this.addElements(this.bg);
            this.addElements(this.player);
            this.addElements(this.pipes);
            this.addElements(this.score);
            this.setFloor();
        }
    }, {
        key: 'testCollide',
        value: function testCollide() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.pipes.pipes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var p = _step.value;

                    if (this.player.collide(p)) {
                        this.player.alive = false;
                        this.game.replaceScene(new _scene_end2.default(this.game));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'update',
        value: function update() {
            this.testCollide();
            _get(SceneMain.prototype.__proto__ || Object.getPrototypeOf(SceneMain.prototype), 'update', this).call(this);
        }
    }, {
        key: 'setFloor',
        value: function setFloor() {
            this.floors = [];
            if (this.countdown === 0) {}
            for (var i = 0; i < 30; i++) {
                var floor = new _floor2.default('floor', this.game, i * 35, 490);
                this.addElements(floor);
                this.floors.push(floor);
            }
        }
    }, {
        key: 'setupinputs',
        value: function setupinputs() {
            var self = this;
            this.game.registerEvent('a', function (keyStatus) {
                self.player.moveLeft(keyStatus);
            });

            this.game.registerEvent('d', function (keyStatus) {
                self.player.moveRight(keyStatus);
            });

            this.game.registerEvent('j', function (keyStatus) {
                self.player.jump(keyStatus);
            });
        }
    }]);

    return SceneMain;
}(_scene2.default);

exports.default = SceneMain;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _conf = __webpack_require__(1);

var _conf2 = _interopRequireDefault(_conf);

var _animation = __webpack_require__(15);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Animation) {
    _inherits(Player, _Animation);

    function Player(game, x, y) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game));

        _this.game = game;
        _this.x = x;
        _this.y = y;
        _this.speed = 5;
        // 设置动画字典
        _this.actionNames = {
            up: 'fly',
            adown: 'fly',
            ddown: 'fly'
        };

        _this.initAnimation([{
            name: 'fly',
            length: 3,
            imageName: 'bird'
        }], 'fly');

        _this.h = _this.img.height;
        _this.w = _this.img.width;
        _this.rotation = 0;
        _this.jumpH = 12;
        // 重力和加速度
        _this.vg = 25;
        _this.vy = 0;
        _this.alive = true;
        return _this;
    }

    _createClass(Player, [{
        key: 'draw',
        value: function draw() {
            this.changeActions();
            var ctx = this.game.ctx;
            ctx.save();

            var halfW = this.w / 2;
            var halfH = this.h / 2;
            // 得到图片中心点
            ctx.translate(this.x + halfW, this.y + halfH);
            if (this.flipX) {
                ctx.scale(-1, 1);
            }
            this.rotation += 5;
            this.rotation = Math.min(45, this.rotation);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.translate(-halfW, -halfH);
            // 恢复
            ctx.drawImage(this.img, 0, 0);
            ctx.restore();
        }
    }, {
        key: 'moveRight',
        value: function moveRight(keyStatus) {
            this.flipX = false;
            var name = this.actionNames[keyStatus];
            this.changeCurrentAction(name);
            this.x += this.speed;
            this.x = Math.min(400 - this.w, this.x);
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft(keyStatus) {
            this.flipX = true;
            var name = this.actionNames[keyStatus];
            this.changeCurrentAction(name);
            this.x -= this.speed;
            this.x = Math.max(0, this.x);
        }
    }, {
        key: 'jump',
        value: function jump(keyStatus) {
            this.y -= this.jumpH;
            this.y = Math.max(0, this.y);
            this.rotation -= 15;
            this.rotation = Math.max(-45, this.rotation);
            window.audio.play();
        }
    }, {
        key: 'update',
        value: function update() {

            this.y += this.vy;
            this.vy = this.vg * 0.2;
            this.y = Math.min(450, this.y);
            this.countdown--;
        }
    }, {
        key: 'debug',
        value: function debug() {
            this.speed = _conf2.default.conf_player.playerSpeed.value;
            this.jumpH = _conf2.default.conf_player.birdjump.value;
            this.vg = _conf2.default.conf_player.birdG.value;
        }
    }, {
        key: 'collide',
        value: function collide(obj) {
            // 判断两个矩形相交
            var self = this;
            if (_utils2.default.aInb(obj.x, self.x, self.x + self.w) || _utils2.default.aInb(self.x, obj.x, obj.x + obj.w)) {
                if (_utils2.default.aInb(obj.y, self.y, self.y + self.h) || _utils2.default.aInb(self.y, obj.y, obj.y + obj.h)) {
                    return true;
                }
            }
            return false;
        }
    }]);

    return Player;
}(_animation2.default);

exports.default = Player;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation(game) {
        _classCallCheck(this, Animation);

        this.game = game;
        this.actions = {};
        // 字典 需要子类初始化
        // 数据格式：this.actionNames = {
        //     up:'fly',
        //     adown:'fly',
        //     ddown:'fly',
        // };
        this.actionNames = {};
    }

    /**
     * @param option 为数组 存放 对象的格式  每个对象代表一个对应的动画
     *   option =  [{
     *        name:'fly',
     *        length:3,
     *        imageName:'bird',
     *        }]
     * @param initAction 初始动画
     *
     *
     *
    **/


    _createClass(Animation, [{
        key: "initAnimation",
        value: function initAnimation(option, initAction) {
            this.countdown = 5;
            this.index = 0;
            for (var i = 0; i < option.length; i++) {
                this.actions[option[i].name] = this.loadAnimation(option[i].length, option[i].imageName);
            }

            this.currentAction = this.actions[initAction];
            // 更新到初始动画的第一帧
            console.log(this.currentAction);
            this.img = this.game.getImgByName(this.currentAction[this.index]);
        }
    }, {
        key: "loadAnimation",
        value: function loadAnimation(length, imgName) {
            var arr = [];
            for (var i = 1; i <= length; i++) {
                arr.push(imgName + i);
            }
            return arr;
        }
    }, {
        key: "changeActions",
        value: function changeActions() {

            if (this.countdown < 0) {
                // this.index = this.index % this.currentAction.length;
                if (this.index >= this.currentAction.length - 1) {
                    this.index = 0;
                }
                this.img = this.game.getImgByName(this.currentAction[this.index]);

                this.countdown = 5;

                this.index++;
            }
        }
    }, {
        key: "changeCurrentAction",
        value: function changeCurrentAction(name) {
            this.currentAction = this.actions[name];
        }
    }]);

    return Animation;
}();

exports.default = Animation;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conf = __webpack_require__(1);

var _conf2 = _interopRequireDefault(_conf);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _image = __webpack_require__(0);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pipe = function () {
    function Pipe(game) {
        _classCallCheck(this, Pipe);

        this.game = game;
        this.pipes = [];
        this.speed = 5;
        this.spaceBetweenPipe = 300;
        this.spaceBetweenTopBottom = 100;
        this.columsOfPipe = 3;
        this.setup();
    }

    _createClass(Pipe, [{
        key: 'setup',
        value: function setup() {
            for (var i = 0; i < this.columsOfPipe; i++) {
                var pipeT = new _image2.default('pipeT', this.game, 0, 0);
                var pipeB = new _image2.default('pipeB', this.game, 0, 0);
                this.resetOfPipeY(pipeT, pipeB);
                pipeT.x = 500 + i * this.spaceBetweenPipe;
                pipeB.x = pipeT.x;
                this.pipes.push(pipeT);
                this.pipes.push(pipeB);
            }
        }
    }, {
        key: 'resetOfPipeY',
        value: function resetOfPipeY(p1, p2) {
            p1.y = _utils2.default.getRandomBetween(-400, -100);
            p2.y = p1.h + p1.y + this.spaceBetweenTopBottom;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.pipes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    this.game.drawImage(i);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'update',
        value: function update() {
            for (var i = 0; i < this.pipes.length; i += 2) {
                var pT = this.pipes[i];
                var pB = this.pipes[i + 1];
                pT.x -= this.speed;
                pB.x -= this.speed;
                if (pT.x < -100) {
                    pT.x += this.spaceBetweenPipe * this.columsOfPipe;
                    this.game.score++;
                    this.resetOfPipeY(pT, pB);
                }
                if (pB.x < -100) {
                    pB.x += this.spaceBetweenPipe * this.columsOfPipe;
                }
            }
        }
    }, {
        key: 'debug',
        value: function debug() {
            this.spaceBetweenTopBottom = _conf2.default.conf_player.spaceBetweenTopBottom.value;
            this.spaceBetweenPipe = 300;
            this.speed = _conf2.default.conf_player.pipesMoveSpeed.value;
        }
    }]);

    return Pipe;
}();

exports.default = Pipe;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
    function Score(game, text, x, y) {
        _classCallCheck(this, Score);

        this.game = game;
        this.text = text;
        this.x = x;
        this.y = y;
    }

    _createClass(Score, [{
        key: "draw",
        value: function draw() {
            this.game.ctx.font = "14px Georgia";
            this.game.ctx.fillText(this.text + this.game.score, this.x, this.y);
        }
    }, {
        key: "update",
        value: function update() {}
    }]);

    return Score;
}();

exports.default = Score;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scene = __webpack_require__(2);

var _scene2 = _interopRequireDefault(_scene);

var _label = __webpack_require__(4);

var _label2 = _interopRequireDefault(_label);

var _image = __webpack_require__(0);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScenceEnd = function (_Scene) {
    _inherits(ScenceEnd, _Scene);

    function ScenceEnd(game) {
        _classCallCheck(this, ScenceEnd);

        var _this = _possibleConstructorReturn(this, (ScenceEnd.__proto__ || Object.getPrototypeOf(ScenceEnd)).call(this, game));

        _this.game = game;
        _this.label1 = new _label2.default(game, '游戏结束您的得分是：' + _this.game.score, 100, 300);
        _this.label2 = new _label2.default(game, '按K 重新开始游戏', 100, 350);
        _this.ready = new _image2.default('ready', _this.game, 80, 100);

        _this.addElements(_this.label1);
        _this.addElements(_this.label2);
        _this.addElements(_this.ready);

        return _this;
    }

    return ScenceEnd;
}(_scene2.default);

exports.default = ScenceEnd;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _image = __webpack_require__(0);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Floor = function (_MyImage) {
    _inherits(Floor, _MyImage);

    function Floor(name, game, x, y) {
        _classCallCheck(this, Floor);

        var _this = _possibleConstructorReturn(this, (Floor.__proto__ || Object.getPrototypeOf(Floor)).call(this, name, game));

        _this.x = x;
        _this.y = y;
        _this.countdown = 5;
        return _this;
    }

    _createClass(Floor, [{
        key: 'update',
        value: function update() {
            this.countdown--;
            this.x -= 6;
            if (this.countdown === 0) {
                this.countdown = 5;
                this.x += 30;
            }
        }
    }, {
        key: 'draw',
        value: function draw() {

            _get(Floor.prototype.__proto__ || Object.getPrototypeOf(Floor.prototype), 'draw', this).call(this);
        }
    }]);

    return Floor;
}(_image2.default);

exports.default = Floor;

/***/ })
/******/ ]);