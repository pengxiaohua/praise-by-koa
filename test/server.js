(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['supertest', '../app.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('supertest'), require('../app.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.supertest, global.app);
        global.server = mod.exports;
    }
})(this, function (_supertest, _app) {
    'use strict';

    var _supertest2 = _interopRequireDefault(_supertest);

    var _app2 = _interopRequireDefault(_app);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // 点赞+1自动化测试
    function request() {
        return (0, _supertest2.default)(_app2.default.listen());
    }

    describe('测试路由', function () {
        it('点赞', function (done) {
            request().get('/api/add_praise').expect('Content-Type', /json/).expect(200).end(function (err, res) {
                if (res.success === true) return done(err);
                done();
            });
        });
    });
});
