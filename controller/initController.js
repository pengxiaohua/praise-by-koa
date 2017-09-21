(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './indexController'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./indexController'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.indexController);
		global.initController = mod.exports;
	}
})(this, function (exports, _indexController) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _indexController2 = _interopRequireDefault(_indexController);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var initController = {
		init: function init(app, router) {
			app.use(router(function (_) {
				_.get('/', _indexController2.default.admin());
				_.get('/index/index', _indexController2.default.index());
				_.get('/api/add_praise', _indexController2.default.addPraiseCount());
				_.get('/api/get_count', _indexController2.default.getPraiseCount());
			}));
		}
	}; // 创建路由
	exports.default = initController;
});
