(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', '../models/model'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('../models/model'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.model);
		global.indexController = mod.exports;
	}
})(this, function (exports, _model) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var indexController = {
		admin: function admin() {
			return async function (ctx, next) {
				ctx.body = 'Hello World';
			};
		},
		index: function index() {
			return async function (ctx, next) {
				ctx.body = await ctx.render('index.html', {
					title: 'praise'
				});
			};
		},
		addPraiseCount: function addPraiseCount() {
			return async function (ctx, next) {
				var M = new _model2.default();
				var data = await M.addPraise();
				ctx.body = data;
			};
		},
		getPraiseCount: function getPraiseCount() {
			return async function (ctx, next) {
				var M = new _model2.default();
				var data = await M.getCount();
				ctx.body = data;
			};
		}
	}; // 创建路由
	exports.default = indexController;
});
