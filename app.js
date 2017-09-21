(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'koa', 'koa-simple-router', 'koa-swig', 'koa-static', 'co', './config/config', './controller/initController', 'babel-polyfill', 'babel-register'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('koa'), require('koa-simple-router'), require('koa-swig'), require('koa-static'), require('co'), require('./config/config'), require('./controller/initController'), require('babel-polyfill'), require('babel-register'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.koa, global.koaSimpleRouter, global.koaSwig, global.koaStatic, global.co, global.config, global.initController, global.babelPolyfill, global.babelRegister);
        global.app = mod.exports;
    }
})(this, function (exports, _koa, _koaSimpleRouter, _koaSwig, _koaStatic, _co, _config, _initController) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _koa2 = _interopRequireDefault(_koa);

    var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

    var _koaSwig2 = _interopRequireDefault(_koaSwig);

    var _koaStatic2 = _interopRequireDefault(_koaStatic);

    var _co2 = _interopRequireDefault(_co);

    var _config2 = _interopRequireDefault(_config);

    var _initController2 = _interopRequireDefault(_initController);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var app = new _koa2.default();

    _initController2.default.init(app, _koaSimpleRouter2.default);

    app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
        root: _config2.default.get('viewsDir'),
        autoescape: true,
        cache: 'memory',
        ext: 'html',
        writeBody: false
    }));

    app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));

    app.listen(_config2.default.get('port'), function () {
        console.log('server is running!');
    });

    exports.default = app;
});
