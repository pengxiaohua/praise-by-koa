(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'request-promise'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('request-promise'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.requestPromise);
        global.model = mod.exports;
    }
})(this, function (exports, _requestPromise) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _requestPromise2 = _interopRequireDefault(_requestPromise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var indexModel = function () {
        function indexModel(ctx) {
            _classCallCheck(this, indexModel);

            this.ctx = ctx;
        }

        _createClass(indexModel, [{
            key: 'addPraise',
            value: function addPraise() {
                var options = {
                    method: "get",
                    url: 'http://127.0.0.1:8080/praise-by-koa/server/post_count.php'
                };
                return new Promise(function (resolve, reject) {
                    (0, _requestPromise2.default)(options).then(function (result) {
                        var data = JSON.parse(result);
                        console.log('post result:', data);
                        if (data.success) {
                            resolve(data);
                        } else {
                            reject(data);
                        }
                    });
                });
            }
        }, {
            key: 'getCount',
            value: function getCount() {
                var options = {
                    method: "get",
                    url: 'http://127.0.0.1:8080/praise-by-koa/server/get_count.php'
                };
                return new Promise(function (resolve, reject) {
                    (0, _requestPromise2.default)(options).then(function (result) {
                        var data = JSON.parse(result);
                        console.log('get result:', data, data.success);
                        if (data.success) {
                            resolve(data);
                        } else {
                            reject(data);
                        }
                    });
                });
            }
        }]);

        return indexModel;
    }();

    exports.default = indexModel;
});
